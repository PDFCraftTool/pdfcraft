/* Copyright 2026 PDFCraft contributors
 *
 * Licensed under the GNU Affero General Public License v3.0 (see LICENSE).
 *
 * "Scan" tab for the PDF.js "Add a signature" dialog.
 *
 * Lets the user photograph a handwritten signature on paper, rotate the photo,
 * frame the signature and turn it into a clean signature. The cleaned crop is
 * handed back to PDF.js (`SignatureEditor#getFromImage`), so the result is the
 * same vector signature as the built-in tabs produce, and it can be saved to
 * the PDF.js signature storage for later reuse.
 *
 * The module is split into two parts:
 *  - pure image-processing helpers that work on plain pixel arrays (no DOM),
 *    so they can be unit tested;
 *  - `SignatureScanController`, which drives the tab's UI.
 */

const SCAN_PARAMETERS = Object.freeze({
  // Longest side of the decoded photo kept in memory. Large enough to keep
  // the full resolution of a typical 12 MP phone photo.
  maxWorkingDim: 4096,
  // Longest side of the cropped area that is cleaned up, and the lower value
  // used for quick previews while the user drags the frame or the slider.
  maxCropDim: 2400,
  previewCropDim: 1000,
  // Longest side of the downscaled photo used to auto-detect the signature.
  detectionDim: 1024,
  // Detection uses a higher sensitivity so that faint strokes are framed too.
  detectionSensitivity: 70,
  // Blobs with less ink than this fraction of the largest blob are not
  // considered part of the signature when detecting it.
  detectionMinInkRatio: 0.1,
  // A background darker than this fraction of the nearby paper is not paper
  // (e.g. the table) rather than a shadow on it.
  darkAreaRatio: 0.45,
  // Window radius used to estimate the paper brightness, relative to the
  // longest side of the photo. It must be wider than half a pen stroke, also
  // for felt-tip pens.
  backgroundRadiusRatio: 0.012,
  minBackgroundRadius: 4,
  // Darkness threshold (0-255, relative to the paper) for sensitivity 0..100.
  minThreshold: 12,
  maxThreshold: 100,
  // Pixels at least this fraction of the threshold dark are kept when they
  // touch a stroke (hysteresis), so thin and faint parts of strokes survive.
  hysteresisRatio: 0.5,
  // One pixel of smoothing per this many pixels of the longest side. Fills
  // the lighter centre of glossy ballpoint strokes and reduces sensor noise.
  smoothingScale: 1000,
  // Ink blobs smaller than this fraction of the area are treated as noise.
  speckleAreaRatio: 0.00002,
  minSpeckleArea: 6,
  // A detected signature this much taller than wide is rotated upright.
  uprightRatio: 2,
  // Longest side of the image PDF.js turns into a vector signature.
  vectorMaxDim: 2048,
  previewVectorMaxDim: 1024,
  // Gray level (0-255) below which PDF.js counts a pixel as ink. Contours run
  // along the inside of the edge, so a value above 127 keeps the strokes as
  // thick as they are on paper.
  vectorThreshold: 191,
  // Transparent padding kept around the trimmed signature, in pixels.
  trimPadding: 8,
  // Delay before re-processing while the user drags or slides.
  debounceMs: 120,
});

const DEFAULT_SENSITIVITY = 50;

/**
 * Convert RGBA pixels to perceived luminance (ITU BT.601).
 * Transparent pixels are treated as white paper.
 * @param {Uint8ClampedArray} rgba
 * @param {number} width
 * @param {number} height
 * @returns {Uint8ClampedArray}
 */
function toGrayscale(rgba, width, height) {
  const gray = new Uint8ClampedArray(width * height);
  for (let i = 0, j = 0, ii = gray.length; i < ii; i++, j += 4) {
    const a = rgba[j + 3] / 255;
    const lum = 0.299 * rgba[j] + 0.587 * rgba[j + 1] + 0.114 * rgba[j + 2];
    gray[i] = lum * a + 255 * (1 - a);
  }
  return gray;
}

/**
 * Sliding-window maximum or minimum of `src` (length `length`, read with
 * `stride`) over a window of `radius` pixels on each side, written to `dst`.
 * Uses the van Herk/Gil-Werman algorithm: O(1) per pixel for any radius.
 * The edge pixels are repeated outside the image, so a dark area cut off by
 * the image border (e.g. the table at the edge of a crop) keeps its size.
 */
function slidingExtremum(src, dst, offset, stride, length, radius, isMax, g, h) {
  const size = 2 * radius + 1;
  const pick = isMax ? Math.max : Math.min;
  const at = i => src[offset + Math.min(length - 1, Math.max(0, i)) * stride];
  // g: running extremum from the start of each block, h: from the end.
  const total = length + 2 * radius;
  for (let i = 0; i < total; i++) {
    const v = at(i - radius);
    g[i] = i % size === 0 ? v : pick(g[i - 1], v);
  }
  for (let i = total - 1; i >= 0; i--) {
    const v = at(i - radius);
    h[i] = i === total - 1 || (i + 1) % size === 0 ? v : pick(h[i + 1], v);
  }
  for (let i = 0; i < length; i++) {
    dst[offset + i * stride] = pick(h[i], g[i + 2 * radius]);
  }
}

/** Separable square maximum (isMax) or minimum filter. */
function squareFilter(src, width, height, radius, isMax) {
  const tmp = new Uint8ClampedArray(src.length);
  const out = new Uint8ClampedArray(src.length);
  const scratch = Math.max(width, height) + 2 * radius;
  const g = new Uint8ClampedArray(scratch);
  const h = new Uint8ClampedArray(scratch);
  for (let y = 0; y < height; y++) {
    slidingExtremum(src, tmp, y * width, 1, width, radius, isMax, g, h);
  }
  for (let x = 0; x < width; x++) {
    slidingExtremum(tmp, out, x, width, height, radius, isMax, g, h);
  }
  return out;
}

/**
 * Estimate the brightness of the paper behind every pixel.
 *
 * Photos of paper are rarely evenly lit and often contain the sharp shadow
 * of the phone or hand, so a single global threshold does not work. A
 * grayscale morphological closing (maximum filter followed by a minimum
 * filter) removes every dark detail narrower than the window, i.e. the pen
 * strokes, while following lighting gradients and shadow edges. Bright
 * noise peaks are clipped beforehand and a light blur afterwards removes the
 * blockiness of the window.
 * @param {Uint8ClampedArray} gray
 * @param {number} width
 * @param {number} height
 * @param {number} [radius] - Must be larger than half the stroke width.
 * @returns {Uint8ClampedArray}
 */
function estimateBackground(gray, width, height, radius) {
  const r = Math.max(
    SCAN_PARAMETERS.minBackgroundRadius,
    Math.round(
      radius || Math.max(width, height) * SCAN_PARAMETERS.backgroundRadiusRatio
    )
  );
  // Bright noise peaks are clipped first: the maximum filter would otherwise
  // pick them and overestimate the paper, so that the faint halo around every
  // stroke would count as ink. Only clipping (taking the minimum with a
  // blurred copy) keeps sharp shadow edges sharp.
  const blurred = Float32Array.from(gray);
  boxBlur(blurred, width, height, Math.max(1, Math.round(r / 6)));
  const clipped = new Uint8ClampedArray(gray.length);
  for (let i = 0, ii = gray.length; i < ii; i++) {
    clipped[i] = Math.min(gray[i], blurred[i]);
  }
  const closed = squareFilter(
    squareFilter(clipped, width, height, r, true),
    width,
    height,
    r,
    false
  );
  const smooth = Float32Array.from(closed);
  boxBlur(smooth, width, height, Math.max(1, r >> 2));
  const background = new Uint8ClampedArray(width * height);
  for (let i = 0, ii = background.length; i < ii; i++) {
    // The blur must never make the paper darker than the photo itself.
    background[i] = Math.max(1, smooth[i], gray[i]);
  }
  return background;
}

/**
 * In-place separable box blur.
 * @param {Float32Array} values
 * @param {number} width
 * @param {number} height
 * @param {number} radius
 */
function boxBlur(values, width, height, radius) {
  if (radius < 1) {
    return;
  }
  const line = new Float32Array(Math.max(width, height));
  const blurLine = (get, set, length) => {
    for (let i = 0; i < length; i++) {
      line[i] = get(i);
    }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < Math.min(radius, length); i++) {
      sum += line[i];
      count++;
    }
    for (let i = 0; i < length; i++) {
      if (i + radius < length) {
        sum += line[i + radius];
        count++;
      }
      if (i - radius - 1 >= 0) {
        sum -= line[i - radius - 1];
        count--;
      }
      set(i, sum / count);
    }
  };
  for (let y = 0; y < height; y++) {
    const row = y * width;
    blurLine(
      x => values[row + x],
      (x, v) => (values[row + x] = v),
      width
    );
  }
  for (let x = 0; x < width; x++) {
    blurLine(
      y => values[y * width + x],
      (y, v) => (values[y * width + x] = v),
      height
    );
  }
}

/**
 * Map the sensitivity slider (0..100) to a darkness threshold (0..255).
 * Higher sensitivity picks up fainter strokes, e.g. pencil.
 * @param {number} sensitivity
 * @returns {number}
 */
function sensitivityToThreshold(sensitivity) {
  const s = Math.min(100, Math.max(0, Number(sensitivity) || 0)) / 100;
  const { minThreshold, maxThreshold } = SCAN_PARAMETERS;
  return Math.round(maxThreshold - s * (maxThreshold - minThreshold));
}

/**
 * Label 8-connected components of `mask` (non-zero = foreground).
 * @param {Uint8Array | Uint8ClampedArray} mask
 * @param {number} width
 * @param {number} height
 * @returns {{ labels: Int32Array, count: number }}
 */
function labelComponents(mask, width, height) {
  const labels = new Int32Array(width * height);
  const stack = new Int32Array(width * height);
  let count = 0;
  for (let start = 0, ii = mask.length; start < ii; start++) {
    if (!mask[start] || labels[start]) {
      continue;
    }
    count++;
    let top = 0;
    stack[top++] = start;
    labels[start] = count;
    while (top > 0) {
      const index = stack[--top];
      const x = index % width;
      const y = (index - x) / width;
      for (let dy = -1; dy <= 1; dy++) {
        const ny = y + dy;
        if (ny < 0 || ny >= height) {
          continue;
        }
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          if (nx < 0 || nx >= width) {
            continue;
          }
          const n = ny * width + nx;
          if (mask[n] && !labels[n]) {
            labels[n] = count;
            stack[top++] = n;
          }
        }
      }
    }
  }
  return { labels, count };
}

/**
 * Clear the darkness along the border of large dark areas that are not paper,
 * such as the table around the sheet. The pixels where the paper meets such
 * an area are darker than the paper but are not ink.
 * @param {Float32Array} darkness - Modified in place.
 * @param {Uint8ClampedArray} background - The paper estimate.
 * @param {number} width
 * @param {number} height
 * @param {number} radius - Width of the cleared border, in pixels.
 */
function suppressDarkAreaEdges(darkness, background, width, height, radius) {
  const brightest = squareFilter(background, width, height, radius, true);
  const darkest = squareFilter(background, width, height, radius, false);
  const ratio = SCAN_PARAMETERS.darkAreaRatio;
  for (let i = 0, ii = darkness.length; i < ii; i++) {
    // A shadow on the paper dims it moderately; the table is much darker.
    if (darkest[i] < brightest[i] * ratio) {
      darkness[i] = 0;
    }
  }
}

/**
 * Separate ink from paper.
 *
 * The darkness of every pixel relative to the local paper brightness is
 * smoothed slightly, then thresholded with hysteresis: pixels darker than the
 * threshold are ink, and fainter pixels are kept only when they belong to a
 * blob that contains such ink. Edges stay anti-aliased and blobs with too
 * little ink are dropped as noise.
 *
 * Returns an ink coverage map (0 = paper, 255 = solid ink) and the bounding
 * box of the ink.
 * @param {Uint8ClampedArray} rgba
 * @param {number} width
 * @param {number} height
 * @param {{
 *   sensitivity?: number,
 *   despeckle?: boolean,
 *   backgroundRadius?: number,
 * }} [options] - `backgroundRadius` must be wider than half a pen stroke.
 *   It defaults to a fraction of the image size; pass a value derived from the
 *   whole photo when `rgba` is a tight crop, so thick strokes are not
 *   mistaken for paper.
 * @returns {{
 *   alpha: Uint8ClampedArray,
 *   bounds: { x: number, y: number, width: number, height: number } | null,
 *   inkPixels: number,
 * }}
 */
function extractInk(rgba, width, height, options = {}) {
  const {
    sensitivity = DEFAULT_SENSITIVITY,
    despeckle = true,
    backgroundRadius,
  } = options;
  const N = width * height;
  const gray = toGrayscale(rgba, width, height);
  const background = estimateBackground(gray, width, height, backgroundRadius);

  // Darkness relative to the local paper brightness, 0..255.
  const darkness = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const bg = background[i];
    darkness[i] = gray[i] >= bg ? 0 : (255 * (bg - gray[i])) / bg;
  }
  const smoothing = Math.round(
    Math.max(width, height) / SCAN_PARAMETERS.smoothingScale
  );
  boxBlur(darkness, width, height, smoothing);
  suppressDarkAreaEdges(darkness, background, width, height, smoothing + 2);

  const strong = sensitivityToThreshold(sensitivity);
  const weak = strong * SCAN_PARAMETERS.hysteresisRatio;
  const candidates = new Uint8Array(N);
  for (let i = 0; i < N; i++) {
    candidates[i] = darkness[i] >= weak ? 1 : 0;
  }
  const { labels, count } = labelComponents(candidates, width, height);
  const strongPixels = new Uint32Array(count + 1);
  for (let i = 0; i < N; i++) {
    if (labels[i] && darkness[i] >= strong) {
      strongPixels[labels[i]]++;
    }
  }
  const minStrong = despeckle
    ? Math.max(
        SCAN_PARAMETERS.minSpeckleArea,
        Math.round(N * SCAN_PARAMETERS.speckleAreaRatio)
      )
    : 1;

  const alpha = new Uint8ClampedArray(N);
  for (let i = 0; i < N; i++) {
    const label = labels[i];
    if (!label || strongPixels[label] < minStrong) {
      continue;
    }
    // Smooth ramp from the weak to the strong threshold.
    const c = Math.min(1, (darkness[i] - weak) / (strong - weak));
    alpha[i] = 255 * c * c * (3 - 2 * c);
  }

  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;
  let inkPixels = 0;
  for (let y = 0; y < height; y++) {
    const row = y * width;
    for (let x = 0; x < width; x++) {
      if (alpha[row + x] >= 128) {
        inkPixels++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const bounds =
    maxX >= 0
      ? { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 }
      : null;
  return { alpha, bounds, inkPixels };
}

/**
 * Guess where the signature is in a (downscaled) photo of the whole sheet.
 *
 * Nearby strokes are merged by dilating the ink mask, blobs touching the
 * border of the photo (paper edges, table, fingers) are ignored, and the blob
 * containing the most ink wins.
 * @param {Uint8ClampedArray} rgba
 * @param {number} width
 * @param {number} height
 * @returns {{ x: number, y: number, width: number, height: number } | null}
 */
function detectSignatureRegion(rgba, width, height) {
  const { alpha, inkPixels } = extractInk(rgba, width, height, {
    sensitivity: SCAN_PARAMETERS.detectionSensitivity,
  });
  if (!inkPixels) {
    return null;
  }

  const radius = Math.max(2, Math.round(Math.max(width, height) * 0.03));
  const ink = new Uint8Array(width * height);
  for (let i = 0, ii = ink.length; i < ii; i++) {
    ink[i] = alpha[i] >= 128 ? 1 : 0;
  }
  // Separable box dilation using running sums.
  const horizontal = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    const row = y * width;
    let sum = 0;
    for (let x = 0; x < Math.min(radius, width); x++) {
      sum += ink[row + x];
    }
    for (let x = 0; x < width; x++) {
      if (x + radius < width) sum += ink[row + x + radius];
      if (x - radius - 1 >= 0) sum -= ink[row + x - radius - 1];
      horizontal[row + x] = sum > 0 ? 1 : 0;
    }
  }
  const dilated = new Uint8Array(width * height);
  for (let x = 0; x < width; x++) {
    let sum = 0;
    for (let y = 0; y < Math.min(radius, height); y++) {
      sum += horizontal[y * width + x];
    }
    for (let y = 0; y < height; y++) {
      if (y + radius < height) sum += horizontal[(y + radius) * width + x];
      if (y - radius - 1 >= 0) sum -= horizontal[(y - radius - 1) * width + x];
      dilated[y * width + x] = sum > 0 ? 1 : 0;
    }
  }

  const { labels, count } = labelComponents(dilated, width, height);
  const blobs = Array.from({ length: count + 1 }, () => ({
    ink: 0,
    minX: width,
    minY: height,
    maxX: -1,
    maxY: -1,
    touchesBorder: false,
  }));
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      const label = labels[i];
      if (!label) {
        continue;
      }
      const blob = blobs[label];
      if (x === 0 || y === 0 || x === width - 1 || y === height - 1) {
        blob.touchesBorder = true;
      }
      if (ink[i]) {
        blob.ink++;
        if (x < blob.minX) blob.minX = x;
        if (x > blob.maxX) blob.maxX = x;
        if (y < blob.minY) blob.minY = y;
        if (y > blob.maxY) blob.maxY = y;
      }
    }
  }

  let best = null;
  for (let label = 1; label <= count; label++) {
    const blob = blobs[label];
    if (!blob.touchesBorder && blob.ink && (!best || blob.ink > best.ink)) {
      best = blob;
    }
  }
  if (!best) {
    return null;
  }

  // Signatures often consist of several separate words. Add every blob with
  // a fair amount of ink that sits on the same line as the largest one.
  const lineTop = best.minY - (best.maxY - best.minY);
  const lineBottom = best.maxY + (best.maxY - best.minY);
  const minInk = best.ink * SCAN_PARAMETERS.detectionMinInkRatio;
  for (let label = 1; label <= count; label++) {
    const blob = blobs[label];
    if (
      blob !== best &&
      !blob.touchesBorder &&
      blob.ink >= minInk &&
      blob.maxY >= lineTop &&
      blob.minY <= lineBottom
    ) {
      best.minX = Math.min(best.minX, blob.minX);
      best.minY = Math.min(best.minY, blob.minY);
      best.maxX = Math.max(best.maxX, blob.maxX);
      best.maxY = Math.max(best.maxY, blob.maxY);
    }
  }

  const pad = Math.round(Math.max(width, height) * 0.03);
  const x = Math.max(0, best.minX - pad);
  const y = Math.max(0, best.minY - pad);
  return {
    x,
    y,
    width: Math.min(width, best.maxX + 1 + pad) - x,
    height: Math.min(height, best.maxY + 1 + pad) - y,
  };
}

/**
 * Rotate a rectangle in an image of size `width` x `height` by 90° clockwise,
 * returning it in the coordinate system of the rotated image.
 * @param {{ x: number, y: number, width: number, height: number }} rect
 * @param {number} height - Height of the image before rotation.
 */
function rotateRectClockwise(rect, height) {
  return {
    x: height - (rect.y + rect.height),
    y: rect.x,
    width: rect.height,
    height: rect.width,
  };
}

/**
 * Rotate a rectangle by 90° counter-clockwise (see `rotateRectClockwise`).
 * @param {{ x: number, y: number, width: number, height: number }} rect
 * @param {number} width - Width of the image before rotation.
 */
function rotateRectCounterClockwise(rect, width) {
  return {
    x: rect.y,
    y: width - (rect.x + rect.width),
    width: rect.height,
    height: rect.width,
  };
}

/**
 * Keep a rectangle inside the image and at least `minSize` pixels large.
 */
function clampRect(rect, width, height, minSize = 8) {
  const w = Math.min(width, Math.max(minSize, rect.width));
  const h = Math.min(height, Math.max(minSize, rect.height));
  return {
    x: Math.min(Math.max(0, rect.x), width - w),
    y: Math.min(Math.max(0, rect.y), height - h),
    width: w,
    height: h,
  };
}

/**
 * Build the image handed to PDF.js: black ink on white paper, trimmed to the
 * ink with a small padding.
 * @param {Uint8ClampedArray} alpha
 * @param {number} width
 * @param {number} height
 * @param {{ x: number, y: number, width: number, height: number }} bounds
 * @returns {{ data: Uint8ClampedArray, width: number, height: number }}
 */
function renderInkOnPaper(alpha, width, height, bounds) {
  const pad = SCAN_PARAMETERS.trimPadding;
  const x0 = Math.max(0, bounds.x - pad);
  const y0 = Math.max(0, bounds.y - pad);
  const x1 = Math.min(width, bounds.x + bounds.width + pad);
  const y1 = Math.min(height, bounds.y + bounds.height + pad);
  const outW = x1 - x0;
  const outH = y1 - y0;
  const data = new Uint8ClampedArray(outW * outH * 4);
  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const value = 255 - alpha[(y + y0) * width + x + x0];
      const j = (y * outW + x) * 4;
      data[j] = data[j + 1] = data[j + 2] = value;
      data[j + 3] = 255;
    }
  }
  return { data, width: outW, height: outH };
}

// ---------------------------------------------------------------------------
// UI controller
// ---------------------------------------------------------------------------

const RESIZE_HANDLES = ["nw", "ne", "sw", "se"];
const KEYBOARD_STEP_RATIO = 0.01;
const MIN_CROP_SCREEN_SIZE = 24;
// Pointer movement, in screen pixels, before a drag starts a new frame.
const NEW_FRAME_THRESHOLD = 4;

/**
 * Free a canvas' backing store right away. Safari in particular keeps it
 * alive for a while and has a low limit on the total canvas memory.
 */
function releaseCanvas(canvas) {
  if (canvas) {
    canvas.width = canvas.height = 0;
  }
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

/**
 * Draw `source` scaled so that its longest side is at most `maxDim`.
 */
function drawScaled(source, sx, sy, sw, sh, maxDim) {
  const ratio = Math.min(1, maxDim / Math.max(sw, sh));
  const width = Math.max(1, Math.round(sw * ratio));
  const height = Math.max(1, Math.round(sh * ratio));
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(source, sx, sy, sw, sh, 0, 0, width, height);
  return { canvas, ctx, width, height };
}

/**
 * Controls the "Scan" tab of the add-signature dialog.
 *
 * The controller owns the photo, the crop frame and the cleaned result. The
 * `SignatureManager` provides `extract(bitmap)` (PDF.js signature extraction
 * for the current editor) and is told about results through callbacks.
 */
class SignatureScanController {
  #elements;
  #photo = null; // Canvas holding the (rotated) working copy of the photo.
  #crop = null; // Crop frame in photo pixel coordinates.
  #displayScale = 1;
  #drag = null;
  #debounceTimer = null;
  #generation = 0; // Invalidates pending processing results.
  #loadGeneration = 0; // Invalidates photos that are still being decoded.
  #session = null;
  #resizeObserver = null;

  /**
   * @param {Object} elements
   * @param {HTMLElement} elements.placeholder
   * @param {HTMLButtonElement} elements.browseButton
   * @param {HTMLButtonElement} elements.cameraButton
   * @param {HTMLInputElement} elements.cameraPicker
   * @param {HTMLInputElement} elements.filePicker
   * @param {HTMLElement} elements.editor
   * @param {HTMLElement} elements.stage
   * @param {HTMLCanvasElement} elements.canvas
   * @param {HTMLElement} elements.cropFrame
   * @param {SVGSVGElement} elements.preview
   * @param {HTMLButtonElement} elements.rotateLeftButton
   * @param {HTMLButtonElement} elements.rotateRightButton
   * @param {HTMLInputElement} elements.sensitivity
   * @param {HTMLButtonElement} elements.changePhotoButton
   */
  constructor(elements) {
    this.#elements = elements;
    elements.cropFrame.replaceChildren(
      ...RESIZE_HANDLES.map(handle => {
        const div = document.createElement("div");
        div.className = "pdfcraftScanHandle";
        div.dataset.handle = handle;
        return div;
      })
    );
  }

  get hasPhoto() {
    return !!this.#photo;
  }

  /**
   * Start listening to the UI. Called every time the tab is shown.
   * @param {Object} session
   * @param {AbortSignal} session.signal - Aborted when the tab is left.
   * @param {(bitmap: ImageBitmap, options: Object) => Object | null} session.extract
   * @param {(data: Object | null, svgPath?: Object) => void} session.onResult
   * @param {(type: "Upload" | "NoData" | null) => void} session.onError
   * @param {(waiting: boolean) => void} session.onWaiting
   */
  activate(session) {
    this.#session = session;
    const { signal } = session;
    const el = this.#elements;
    const options = { signal };
    const passive = { passive: true, signal };

    for (const picker of [el.cameraPicker, el.filePicker]) {
      picker.addEventListener(
        "click",
        () => {
          picker.value = "";
          session.onWaiting(true);
        },
        passive
      );
      picker.addEventListener("cancel", () => session.onWaiting(false), passive);
      picker.addEventListener(
        "change",
        () => {
          const file = picker.files?.[0];
          if (file) {
            this.#loadFile(file);
          } else {
            session.onWaiting(false);
          }
        },
        passive
      );
    }

    el.browseButton.addEventListener("click", () => el.filePicker.click(), passive);
    el.cameraButton.addEventListener("click", () => el.cameraPicker.click(), passive);

    // The whole panel accepts a dropped photo, also to replace the current one.
    const dropZone = el.placeholder.parentElement;
    dropZone.addEventListener(
      "dragover",
      e => {
        // Safari does not expose the type of dragged files before the drop,
        // so an untyped file is accepted here and checked on drop.
        const hasImage =
          e.dataTransfer.types.includes("Files") &&
          Array.from(e.dataTransfer.items).some(
            item => item.type === "" || item.type.startsWith("image/")
          );
        e.dataTransfer.dropEffect = hasImage ? "copy" : "none";
        if (hasImage) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      options
    );
    dropZone.addEventListener(
      "drop",
      e => {
        const file = Array.from(e.dataTransfer?.files || []).find(f =>
          f.type.startsWith("image/")
        );
        e.preventDefault();
        e.stopPropagation();
        if (file) {
          session.onWaiting(true);
          this.#loadFile(file);
        }
      },
      options
    );

    // Most people photograph the paper with their phone and send the picture
    // to their computer, so pasting it from the clipboard is supported too.
    document.addEventListener(
      "paste",
      e => {
        const file = Array.from(e.clipboardData?.files || []).find(f =>
          f.type.startsWith("image/")
        );
        if (file) {
          e.preventDefault();
          session.onWaiting(true);
          this.#loadFile(file);
        }
      },
      options
    );

    el.rotateLeftButton.addEventListener("click", () => this.rotate(-1), passive);
    el.rotateRightButton.addEventListener("click", () => this.rotate(1), passive);
    el.sensitivity.addEventListener(
      "input",
      () => {
        el.sensitivity.setAttribute(
          "data-l10n-args",
          JSON.stringify({ sensitivity: Number(el.sensitivity.value) })
        );
        this.#scheduleProcessing(/* quick = */ true);
      },
      passive
    );
    el.sensitivity.addEventListener(
      "change",
      () => this.#scheduleProcessing(),
      passive
    );
    el.changePhotoButton.addEventListener(
      "click",
      () => el.filePicker.click(),
      passive
    );

    el.stage.addEventListener("pointerdown", this.#onPointerDown.bind(this), options);
    el.stage.addEventListener("pointermove", this.#onPointerMove.bind(this), options);
    el.stage.addEventListener("pointerup", this.#onPointerUp.bind(this), options);
    el.stage.addEventListener("pointercancel", this.#onPointerUp.bind(this), options);
    el.stage.addEventListener("lostpointercapture", this.#onPointerUp.bind(this), options);
    el.cropFrame.addEventListener("keydown", this.#onKeyDown.bind(this), options);

    this.#resizeObserver = new ResizeObserver(() => this.#layout());
    this.#resizeObserver.observe(el.stage);
    signal.addEventListener(
      "abort",
      () => {
        this.#resizeObserver?.disconnect();
        this.#resizeObserver = null;
        clearTimeout(this.#debounceTimer);
        this.#generation++;
        this.#loadGeneration++;
        this.#drag = null;
        this.#session = null;
      },
      { once: true }
    );

    this.#updateVisibility();
    if (this.#photo) {
      this.#layout();
      this.#process();
    }
  }

  /** Forget the photo and the result. */
  reset() {
    clearTimeout(this.#debounceTimer);
    this.#generation++;
    this.#loadGeneration++;
    releaseCanvas(this.#photo);
    this.#photo = null;
    this.#crop = null;
    this.#drag = null;
    const el = this.#elements;
    el.canvas.width = el.canvas.height = 0;
    el.preview.replaceChildren();
    el.preview.removeAttribute("viewBox");
    el.sensitivity.value = String(DEFAULT_SENSITIVITY);
    el.sensitivity.setAttribute(
      "data-l10n-args",
      JSON.stringify({ sensitivity: DEFAULT_SENSITIVITY })
    );
    el.cameraPicker.value = el.filePicker.value = "";
    this.#updateVisibility();
  }

  /**
   * Rotate the photo by a quarter turn.
   * @param {1 | -1} direction - 1 for clockwise, -1 for counter-clockwise.
   */
  rotate(direction) {
    if (!this.#photo) {
      return;
    }
    this.#rotatePhoto(direction);
    this.#layout();
    this.#process();
  }

  #rotatePhoto(direction) {
    const photo = this.#photo;
    const rotated = createCanvas(photo.height, photo.width);
    const ctx = rotated.getContext("2d", { willReadFrequently: true });
    ctx.translate(rotated.width / 2, rotated.height / 2);
    ctx.rotate((direction * Math.PI) / 2);
    ctx.drawImage(photo, -photo.width / 2, -photo.height / 2);
    if (this.#crop) {
      this.#crop =
        direction > 0
          ? rotateRectClockwise(this.#crop, photo.height)
          : rotateRectCounterClockwise(this.#crop, photo.width);
    }
    releaseCanvas(photo);
    this.#photo = rotated;
  }

  async #loadFile(file) {
    const session = this.#session;
    const generation = ++this.#loadGeneration;
    let bitmap;
    try {
      // `from-image` applies the EXIF orientation written by phone cameras.
      bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
    } catch (e) {
      console.error("SignatureScanController: cannot decode image.", e);
    }
    if (generation !== this.#loadGeneration || session !== this.#session) {
      // A newer photo, a reset or leaving the tab superseded this one.
      bitmap?.close();
      session?.onWaiting(false);
      return;
    }

    try {
      if (!bitmap) {
        throw new Error("The image could not be decoded.");
      }
      const { canvas } = drawScaled(
        bitmap,
        0,
        0,
        bitmap.width,
        bitmap.height,
        SCAN_PARAMETERS.maxWorkingDim
      );
      releaseCanvas(this.#photo);
      this.#photo = canvas;
      this.#crop = this.#detectCrop();
      if (this.#crop.height > this.#crop.width * SCAN_PARAMETERS.uprightRatio) {
        // Signatures are written horizontally, so a tall signature means the
        // photo was taken sideways. The rotate buttons fix the direction if
        // this guess turns it upside down.
        this.#rotatePhoto(-1);
      }
    } catch (e) {
      console.error("SignatureScanController: cannot load image.", e);
      session.onWaiting(false);
      session.onError("Upload");
      return;
    } finally {
      bitmap?.close();
    }

    this.#updateVisibility();
    this.#layout();
    session.onWaiting(false);
    this.#process();
    this.#elements.cropFrame.focus({ preventScroll: true });
  }

  /** Suggest a crop frame around the signature, or a centred default. */
  #detectCrop() {
    const photo = this.#photo;
    const small = drawScaled(
      photo,
      0,
      0,
      photo.width,
      photo.height,
      SCAN_PARAMETERS.detectionDim
    );
    const { data } = small.ctx.getImageData(0, 0, small.width, small.height);
    releaseCanvas(small.canvas);
    const region = detectSignatureRegion(data, small.width, small.height);
    if (region) {
      const ratio = photo.width / small.width;
      return clampRect(
        {
          x: region.x * ratio,
          y: region.y * ratio,
          width: region.width * ratio,
          height: region.height * ratio,
        },
        photo.width,
        photo.height
      );
    }
    return {
      x: photo.width * 0.15,
      y: photo.height * 0.35,
      width: photo.width * 0.7,
      height: photo.height * 0.3,
    };
  }

  #updateVisibility() {
    const hasPhoto = !!this.#photo;
    this.#elements.placeholder.hidden = hasPhoto;
    this.#elements.editor.hidden = !hasPhoto;
  }

  /** Fit the photo into the stage and position the crop frame. */
  #layout() {
    const photo = this.#photo;
    const el = this.#elements;
    if (!photo) {
      return;
    }
    const { clientWidth, clientHeight } = el.stage;
    if (!clientWidth || !clientHeight) {
      return;
    }
    const scale = (this.#displayScale = Math.min(
      clientWidth / photo.width,
      clientHeight / photo.height
    ));
    const width = Math.round(photo.width * scale);
    const height = Math.round(photo.height * scale);
    const dpr = window.devicePixelRatio || 1;
    const canvas = el.canvas;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.left = `${Math.round((clientWidth - width) / 2)}px`;
    canvas.style.top = `${Math.round((clientHeight - height) / 2)}px`;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(photo, 0, 0, canvas.width, canvas.height);
    this.#updateCropFrame();
  }

  #updateCropFrame() {
    const crop = this.#crop;
    const el = this.#elements;
    if (!crop) {
      return;
    }
    const scale = this.#displayScale;
    const style = el.cropFrame.style;
    style.left = `${el.canvas.offsetLeft + crop.x * scale}px`;
    style.top = `${el.canvas.offsetTop + crop.y * scale}px`;
    style.width = `${crop.width * scale}px`;
    style.height = `${crop.height * scale}px`;
  }

  /** Convert a pointer event to photo pixel coordinates. */
  #toPhotoPoint(e) {
    const rect = this.#elements.canvas.getBoundingClientRect();
    const scale = this.#displayScale;
    return {
      x: Math.min(Math.max(0, (e.clientX - rect.left) / scale), this.#photo.width),
      y: Math.min(Math.max(0, (e.clientY - rect.top) / scale), this.#photo.height),
    };
  }

  #onPointerDown(e) {
    if (!this.#photo || this.#drag || !e.isPrimary || e.button > 0) {
      return;
    }
    e.preventDefault();
    const point = this.#toPhotoPoint(e);
    const handle = e.target.dataset?.handle;
    let mode;
    if (handle) {
      mode = handle;
    } else if (e.target === this.#elements.cropFrame) {
      mode = "move";
    } else {
      // A new frame is only started once the pointer actually moves, so a
      // stray click does not discard the current frame.
      mode = "new";
    }
    this.#drag = {
      mode,
      pointerId: e.pointerId,
      start: point,
      crop: { ...this.#crop },
    };
    this.#elements.stage.setPointerCapture(e.pointerId);
    this.#elements.cropFrame.focus({ preventScroll: true });
  }

  #onPointerMove(e) {
    const drag = this.#drag;
    if (!drag || e.pointerId !== drag.pointerId) {
      return;
    }
    e.preventDefault();
    const point = this.#toPhotoPoint(e);
    const { width: maxW, height: maxH } = this.#photo;
    const { start } = drag;

    if (drag.mode === "new") {
      const distance = Math.hypot(point.x - start.x, point.y - start.y);
      if (distance * this.#displayScale < NEW_FRAME_THRESHOLD) {
        return;
      }
      drag.mode = "se";
      drag.crop = { x: start.x, y: start.y, width: 0, height: 0 };
    }

    const { crop, mode } = drag;
    if (mode === "move") {
      this.#crop = clampRect(
        {
          ...crop,
          x: crop.x + point.x - start.x,
          y: crop.y + point.y - start.y,
        },
        maxW,
        maxH
      );
    } else {
      // Keep the opposite corner fixed; allow dragging across it.
      const fixedX = mode.includes("w") ? crop.x + crop.width : crop.x;
      const fixedY = mode.includes("n") ? crop.y + crop.height : crop.y;
      this.#crop = {
        x: Math.min(fixedX, point.x),
        y: Math.min(fixedY, point.y),
        width: Math.abs(point.x - fixedX),
        height: Math.abs(point.y - fixedY),
      };
    }
    this.#updateCropFrame();
    this.#scheduleProcessing(/* quick = */ true);
  }

  #onPointerUp(e) {
    const drag = this.#drag;
    if (!drag || e.pointerId !== drag.pointerId) {
      return;
    }
    this.#drag = null;
    if (this.#elements.stage.hasPointerCapture?.(e.pointerId)) {
      this.#elements.stage.releasePointerCapture(e.pointerId);
    }
    if (drag.mode === "new") {
      return;
    }
    const minSize = MIN_CROP_SCREEN_SIZE / this.#displayScale;
    this.#crop = clampRect(this.#crop, this.#photo.width, this.#photo.height, minSize);
    this.#updateCropFrame();
    this.#scheduleProcessing();
  }

  /** Arrow keys move the frame; Shift + arrow keys resize it. */
  #onKeyDown(e) {
    const crop = this.#crop;
    if (!this.#photo || !crop) {
      return;
    }
    const step =
      Math.max(this.#photo.width, this.#photo.height) * KEYBOARD_STEP_RATIO;
    const dx = { ArrowLeft: -step, ArrowRight: step }[e.key] || 0;
    const dy = { ArrowUp: -step, ArrowDown: step }[e.key] || 0;
    if (!dx && !dy) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const next = e.shiftKey
      ? { ...crop, width: crop.width + dx, height: crop.height + dy }
      : { ...crop, x: crop.x + dx, y: crop.y + dy };
    const minSize = MIN_CROP_SCREEN_SIZE / this.#displayScale;
    this.#crop = clampRect(next, this.#photo.width, this.#photo.height, minSize);
    this.#updateCropFrame();
    this.#scheduleProcessing();
  }

  /**
   * @param {boolean} [quick] - Process at a lower resolution, for live
   *   feedback while the frame or the slider is being dragged.
   */
  #scheduleProcessing(quick = false) {
    clearTimeout(this.#debounceTimer);
    this.#debounceTimer = setTimeout(
      () => this.#process(quick),
      SCAN_PARAMETERS.debounceMs
    );
  }

  /**
   * Clean the framed area and let PDF.js turn it into a signature.
   * @param {boolean} [quick] - See `#scheduleProcessing`. A quick result is
   *   only previewed; the signature can be added once the full one is ready.
   */
  async #process(quick = false) {
    clearTimeout(this.#debounceTimer);
    const session = this.#session;
    const photo = this.#photo;
    const crop = this.#crop;
    if (!session || !photo || !crop || crop.width < 2 || crop.height < 2) {
      return;
    }
    const generation = ++this.#generation;
    if (quick) {
      session.onResult(null);
    }

    let result = null;
    try {
      const area = drawScaled(
        photo,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        quick ? SCAN_PARAMETERS.previewCropDim : SCAN_PARAMETERS.maxCropDim
      );
      const { data } = area.ctx.getImageData(0, 0, area.width, area.height);
      releaseCanvas(area.canvas);
      // Size the paper estimate on the whole photo, not on the crop, so that
      // thick strokes in a tight frame are not taken for paper.
      const scale = area.width / crop.width;
      const { alpha, bounds } = extractInk(data, area.width, area.height, {
        sensitivity: Number(this.#elements.sensitivity.value),
        backgroundRadius:
          Math.max(photo.width, photo.height) *
          SCAN_PARAMETERS.backgroundRadiusRatio *
          scale,
      });

      if (bounds) {
        const ink = renderInkOnPaper(alpha, area.width, area.height, bounds);
        const bitmap = await createImageBitmap(
          new ImageData(ink.data, ink.width, ink.height)
        );
        if (generation !== this.#generation) {
          bitmap.close();
          return;
        }
        try {
          result = session.extract(bitmap, {
            isClean: true,
            maxDim: quick
              ? SCAN_PARAMETERS.previewVectorMaxDim
              : SCAN_PARAMETERS.vectorMaxDim,
            threshold: SCAN_PARAMETERS.vectorThreshold,
          });
        } finally {
          bitmap.close();
        }
      }
    } catch (e) {
      console.error("SignatureScanController: processing failed.", e);
      result = null;
    }

    if (generation !== this.#generation) {
      return;
    }
    this.#renderPreview(result);
    if (!quick) {
      session.onError(result ? null : "NoData");
      session.onResult(result);
    }
  }

  #renderPreview(result) {
    const preview = this.#elements.preview;
    preview.replaceChildren();
    if (!result) {
      preview.removeAttribute("viewBox");
      return;
    }
    const { outline } = result;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", outline.toSVGPath());
    preview.setAttribute("viewBox", outline.viewBox);
    preview.setAttribute("preserveAspectRatio", "xMidYMid meet");
    preview.append(path);
  }
}

export {
  boxBlur,
  clampRect,
  DEFAULT_SENSITIVITY,
  detectSignatureRegion,
  estimateBackground,
  extractInk,
  labelComponents,
  renderInkOnPaper,
  rotateRectClockwise,
  rotateRectCounterClockwise,
  SCAN_PARAMETERS,
  sensitivityToThreshold,
  SignatureScanController,
  toGrayscale,
};

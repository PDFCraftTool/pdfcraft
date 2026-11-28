/**
 * PDFCraft Signature Image Loader
 *
 * Normalizes a user-provided signature image file into a PNG data URL.
 * The embedded PDF.js signature editor only handles raster images
 * (PNG/JPEG), so SVG and WebP files are rasterized onto a canvas first.
 * Dimensions are reported in CSS pixels so they can be stored alongside
 * the signature in the local library.
 */

export interface LoadedSignatureImage {
  dataUrl: string;
  width: number;
  height: number;
  /** True when the source was transcoded to PNG (SVG/WebP). */
  rasterized: boolean;
}

/** Longest edge of the rasterized bitmap for vector sources. */
const SVG_RASTER_MAX_EDGE = 1600;
/** Fallback box when an SVG declares neither width/height nor viewBox. */
const SVG_FALLBACK_WIDTH = 600;
const SVG_FALLBACK_HEIGHT = 300;

const NATIVE_RASTER_TYPES = new Set(['image/png', 'image/jpeg', 'image/jpg']);

export function isSvgFile(file: File): boolean {
  return file.type === 'image/svg+xml' || /\.svg$/i.test(file.name);
}

/**
 * Parse an SVG's intrinsic size from width/height or viewBox.
 * Returns null when nothing usable is declared.
 */
export function parseSvgDimensions(svgText: string): { width: number; height: number } | null {
  const openTag = svgText.match(/<svg\b[^>]*>/i)?.[0];
  if (!openTag) return null;

  const attr = (name: string): string | null => {
    const m = openTag.match(new RegExp(`\\s${name}\\s*=\\s*["']([^"']+)["']`, 'i'));
    return m ? m[1].trim() : null;
  };

  const toPx = (value: string | null): number | null => {
    if (!value) return null;
    // Percentages are relative to the container and carry no intrinsic size.
    if (value.endsWith('%')) return null;
    const num = parseFloat(value);
    if (!isFinite(num) || num <= 0) return null;
    const unit = value.replace(/^[\d.+-]+/, '').trim().toLowerCase();
    switch (unit) {
      case '':
      case 'px':
        return num;
      case 'pt':
        return num * (96 / 72);
      case 'mm':
        return num * (96 / 25.4);
      case 'cm':
        return num * (96 / 2.54);
      case 'in':
        return num * 96;
      case 'pc':
        return num * 16;
      default:
        return num;
    }
  };

  const width = toPx(attr('width'));
  const height = toPx(attr('height'));
  if (width && height) return { width, height };

  const viewBox = attr('viewBox');
  if (viewBox) {
    const parts = viewBox.split(/[\s,]+/).map(parseFloat);
    if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
      const vbW = parts[2];
      const vbH = parts[3];
      if (width) return { width, height: (width * vbH) / vbW };
      if (height) return { width: (height * vbW) / vbH, height };
      return { width: vbW, height: vbH };
    }
  }

  return null;
}

function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error('Failed to read file'));
    reader.readAsText(file);
  });
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Image could not be decoded'));
    img.src = src;
  });
}

function rasterize(img: HTMLImageElement, width: number, height: number): string {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.round(width));
  canvas.height = Math.max(1, Math.round(height));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/png');
}

/**
 * Load a signature image file and return a PNG (or original PNG/JPEG)
 * data URL with its pixel dimensions.
 *
 * - PNG/JPEG: returned unchanged.
 * - SVG: size taken from width/height or viewBox (fallback 600×300),
 *   scaled so the longest edge is SVG_RASTER_MAX_EDGE, drawn to a
 *   transparent canvas and exported as PNG.
 * - Anything else (WebP, GIF, ...): decoded and re-encoded as PNG.
 *
 * Rejects when the file cannot be decoded as an image.
 */
export async function loadSignatureImageFile(file: File): Promise<LoadedSignatureImage> {
  if (isSvgFile(file)) {
    const svgText = await readFileAsText(file);
    const declared = parseSvgDimensions(svgText);
    const base = declared ?? { width: SVG_FALLBACK_WIDTH, height: SVG_FALLBACK_HEIGHT };

    // An SVG without explicit width/height reports 0×0 in some browsers
    // and cannot be drawn. Inject the resolved size on the root element.
    let svgForRender = svgText;
    if (!declared || !/\swidth\s*=/.test(svgText.match(/<svg\b[^>]*>/i)?.[0] ?? '')) {
      svgForRender = svgText.replace(
        /<svg\b/i,
        `<svg width="${base.width}" height="${base.height}"`
      );
    }

    const svgDataUrl = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgForRender)))}`;
    const img = await loadImage(svgDataUrl);

    const scale = SVG_RASTER_MAX_EDGE / Math.max(base.width, base.height);
    const targetW = base.width * Math.min(scale, 4);
    const targetH = base.height * Math.min(scale, 4);

    return {
      dataUrl: rasterize(img, targetW, targetH),
      width: Math.round(base.width),
      height: Math.round(base.height),
      rasterized: true,
    };
  }

  const dataUrl = await readFileAsDataUrl(file);
  const img = await loadImage(dataUrl);
  const width = img.naturalWidth || img.width || 300;
  const height = img.naturalHeight || img.height || 150;

  if (NATIVE_RASTER_TYPES.has(file.type)) {
    return { dataUrl, width, height, rasterized: false };
  }

  return {
    dataUrl: rasterize(img, width, height),
    width,
    height,
    rasterized: true,
  };
}

/**
 * Redact PDF Processor
 *
 * Implements visual redaction, pixelation (mosaic), and blur features
 * with irreversible physical rasterization and deep metadata sanitization.
 */

import { PDFDocument, PDFName, rgb } from 'pdf-lib';
import { loadPdfjs } from '../loader';
import { PDFJS_CONFIG } from '../config';
import { withBasePath } from '../../utils/path';

export type RedactionStyle = 'blackout' | 'whiteout' | 'mosaic' | 'blur' | 'custom-color';

/**
 * Coordinate point for freehand paths
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * Redaction Area or Brush Stroke on a specific page
 */
export interface RedactionArea {
  /** Unique ID */
  id?: string;
  /** Drawing shape type: 'rect' (box) or 'brush' (freehand stroke) */
  type?: 'rect' | 'brush';
  /** Page number (1-indexed) */
  page: number;
  /** X coordinate (relative to pageWidth) */
  x: number;
  /** Y coordinate (relative to pageHeight) */
  y: number;
  /** Width */
  width: number;
  /** Height */
  height: number;
  /** Freehand path coordinate points (when type === 'brush') */
  path?: Point[];
  /** Brush stroke width in points/pixels (default: 20) */
  strokeWidth?: number;
  /** Page reference width */
  pageWidth?: number;
  /** Page reference height */
  pageHeight?: number;
  /** Redaction style */
  style?: RedactionStyle;
  /** Fill color for blackout/custom-color (default #000000) */
  color?: string;
  /** Draft outline color for UI display */
  draftColor?: string;
  /** Mosaic block size in pixels (default: 10) */
  blockSize?: number;
  /** Blur radius in pixels (default: 8) */
  blurRadius?: number;
  /** Optional text label overlay (e.g. "REDACTED") */
  label?: string;
  /** Optional border color for redaction box */
  borderColor?: string;
}

/**
 * Validate redaction areas
 */
export function validateRedactionAreas(
  areas: RedactionArea[],
  totalPages: number
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!areas || areas.length === 0) {
    return { valid: false, errors: ['No redaction areas specified'] };
  }

  areas.forEach((area, index) => {
    const areaIndex = index + 1;
    if (area.page < 1 || area.page > totalPages) {
      errors.push(`Invalid page number ${area.page} at area #${areaIndex} (must be between 1 and ${totalPages})`);
    }

    if (area.type === 'brush') {
      if (!area.path || area.path.length === 0) {
        errors.push(`Brush path cannot be empty at area #${areaIndex}`);
      }
      if (area.strokeWidth !== undefined && area.strokeWidth <= 0) {
        errors.push(`Brush stroke width must be positive at area #${areaIndex}`);
      }
    } else {
      if (area.width < 0) {
        errors.push(`Width cannot be negative at area #${areaIndex}`);
      }
      if (area.height < 0) {
        errors.push(`Height cannot be negative at area #${areaIndex}`);
      }
      if (area.x < 0) {
        errors.push(`X coordinate cannot be negative at area #${areaIndex}`);
      }
      if (area.y < 0) {
        errors.push(`Y coordinate cannot be negative at area #${areaIndex}`);
      }
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Options for redacting PDF
 */
export interface RedactOptions {
  /**
   * If true, rasterizes all pages for maximum uniformity.
   * If false, only rasterizes pages that contain redaction areas,
   * keeping untouched pages as vector for smaller file size.
   * Default: false
   */
  flattenAllPages?: boolean;
  /**
   * Strip document info (Title, Author, Producer, Creation/Mod dates) & XMP metadata
   * Default: true
   */
  stripMetadata?: boolean;
  /**
   * Remove annotations and interactive form fields
   * Default: true
   */
  purgeAnnotations?: boolean;
  /**
   * Rendering scale for rasterized pages (higher = crisper, default: 2.0)
   */
  renderScale?: number;
  /**
   * JPEG compression quality for rasterized pages (0.8 ~ 1.0, default: 0.95)
   */
  outputQuality?: number;
}

/**
 * Apply solid color blackout or whiteout to a canvas region
 */
export function applySolidFill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  color = '#000000',
  label?: string,
  borderColor?: string
): void {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);

  if (borderColor) {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, w, h);
  }

  if (label) {
    ctx.fillStyle = color === '#000000' ? '#ffffff' : '#000000';
    const fontSize = Math.max(10, Math.min(18, Math.floor(h * 0.6)));
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x + w / 2, y + h / 2, w - 4);
  }
  ctx.restore();
}

/**
 * Apply pixelate / mosaic to a canvas region
 */
export function applyPixelate(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  blockSize = 10
): void {
  const roundX = Math.max(0, Math.floor(x));
  const roundY = Math.max(0, Math.floor(y));
  const roundW = Math.min(ctx.canvas.width - roundX, Math.ceil(w));
  const roundH = Math.min(ctx.canvas.height - roundY, Math.ceil(h));

  if (roundW <= 0 || roundH <= 0) return;

  const imageData = ctx.getImageData(roundX, roundY, roundW, roundH);
  const data = imageData.data;
  const actualBlock = Math.max(2, Math.floor(blockSize));

  for (let by = 0; by < roundH; by += actualBlock) {
    for (let bx = 0; bx < roundW; bx += actualBlock) {
      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let aSum = 0;
      let count = 0;

      const blockH = Math.min(actualBlock, roundH - by);
      const blockW = Math.min(actualBlock, roundW - bx);

      for (let dy = 0; dy < blockH; dy++) {
        for (let dx = 0; dx < blockW; dx++) {
          const idx = ((by + dy) * roundW + (bx + dx)) * 4;
          rSum += data[idx];
          gSum += data[idx + 1];
          bSum += data[idx + 2];
          aSum += data[idx + 3];
          count++;
        }
      }

      if (count > 0) {
        const rAvg = Math.round(rSum / count);
        const gAvg = Math.round(gSum / count);
        const bAvg = Math.round(bSum / count);
        const aAvg = Math.round(aSum / count);

        for (let dy = 0; dy < blockH; dy++) {
          for (let dx = 0; dx < blockW; dx++) {
            const idx = ((by + dy) * roundW + (bx + dx)) * 4;
            data[idx] = rAvg;
            data[idx + 1] = gAvg;
            data[idx + 2] = bAvg;
            data[idx + 3] = aAvg;
          }
        }
      }
    }
  }

  ctx.putImageData(imageData, roundX, roundY);
}

/**
 * Apply fast box blur to a canvas region
 */
export function applyBlur(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  radius = 8
): void {
  const roundX = Math.max(0, Math.floor(x));
  const roundY = Math.max(0, Math.floor(y));
  const roundW = Math.min(ctx.canvas.width - roundX, Math.ceil(w));
  const roundH = Math.min(ctx.canvas.height - roundY, Math.ceil(h));

  if (roundW <= 0 || roundH <= 0) return;

  const actualRadius = Math.max(1, Math.min(30, Math.floor(radius)));
  const imageData = ctx.getImageData(roundX, roundY, roundW, roundH);
  const data = imageData.data;
  const temp = new Uint8ClampedArray(data);

  // Multi-pass horizontal + vertical box blur for near-gaussian softness
  const passes = 2;
  for (let p = 0; p < passes; p++) {
    // Horizontal pass
    for (let row = 0; row < roundH; row++) {
      for (let col = 0; col < roundW; col++) {
        let r = 0, g = 0, b = 0, a = 0, count = 0;
        const start = Math.max(0, col - actualRadius);
        const end = Math.min(roundW - 1, col + actualRadius);

        for (let k = start; k <= end; k++) {
          const idx = (row * roundW + k) * 4;
          r += temp[idx];
          g += temp[idx + 1];
          b += temp[idx + 2];
          a += temp[idx + 3];
          count++;
        }

        const outIdx = (row * roundW + col) * 4;
        data[outIdx] = Math.round(r / count);
        data[outIdx + 1] = Math.round(g / count);
        data[outIdx + 2] = Math.round(b / count);
        data[outIdx + 3] = Math.round(a / count);
      }
    }
    temp.set(data);

    // Vertical pass
    for (let col = 0; col < roundW; col++) {
      for (let row = 0; row < roundH; row++) {
        let r = 0, g = 0, b = 0, a = 0, count = 0;
        const start = Math.max(0, row - actualRadius);
        const end = Math.min(roundH - 1, row + actualRadius);

        for (let k = start; k <= end; k++) {
          const idx = (k * roundW + col) * 4;
          r += temp[idx];
          g += temp[idx + 1];
          b += temp[idx + 2];
          a += temp[idx + 3];
          count++;
        }

        const outIdx = (row * roundW + col) * 4;
        data[outIdx] = Math.round(r / count);
        data[outIdx + 1] = Math.round(g / count);
        data[outIdx + 2] = Math.round(b / count);
        data[outIdx + 3] = Math.round(a / count);
      }
    }
    temp.set(data);
  }

  ctx.putImageData(imageData, roundX, roundY);
}

/**
 * Apply a freehand brush stroke redaction to a canvas
 */
export function renderBrushOnCanvas(
  ctx: CanvasRenderingContext2D,
  area: RedactionArea,
  canvasWidth: number,
  canvasHeight: number
): void {
  if (!area.path || area.path.length === 0) return;

  const scaleX = area.pageWidth ? canvasWidth / area.pageWidth : 1;
  const scaleY = area.pageHeight ? canvasHeight / area.pageHeight : 1;
  const strokeW = Math.max(1, (area.strokeWidth || 20) * scaleX);

  const pts = area.path.map((pt) => ({
    x: pt.x * scaleX,
    y: pt.y * scaleY,
  }));

  const drawStrokePath = (c: CanvasRenderingContext2D, offsetX = 0, offsetY = 0) => {
    c.beginPath();
    c.lineCap = 'round';
    c.lineJoin = 'round';
    c.lineWidth = strokeW;

    if (pts.length === 1) {
      c.arc(pts[0].x - offsetX, pts[0].y - offsetY, strokeW / 2, 0, Math.PI * 2);
      c.fill();
    } else {
      c.moveTo(pts[0].x - offsetX, pts[0].y - offsetY);
      for (let i = 1; i < pts.length; i++) {
        c.lineTo(pts[i].x - offsetX, pts[i].y - offsetY);
      }
      c.stroke();
    }
  };

  const style = area.style || 'blackout';

  if (style === 'blackout' || style === 'whiteout' || style === 'custom-color') {
    ctx.save();
    const fillColor =
      style === 'whiteout'
        ? '#ffffff'
        : style === 'custom-color'
        ? area.color || '#000000'
        : '#000000';
    ctx.strokeStyle = fillColor;
    ctx.fillStyle = fillColor;
    drawStrokePath(ctx);
    ctx.restore();
    return;
  }

  // Handle mosaic or blur along brush stroke using clipping mask
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const p of pts) {
    if (p.x < minX) minX = p.x;
    if (p.x > maxX) maxX = p.x;
    if (p.y < minY) minY = p.y;
    if (p.y > maxY) maxY = p.y;
  }
  const padding = Math.ceil(strokeW / 2) + 2;
  const bx = Math.max(0, Math.floor(minX - padding));
  const by = Math.max(0, Math.floor(minY - padding));
  const bw = Math.min(canvasWidth - bx, Math.ceil(maxX + padding) - bx);
  const bh = Math.min(canvasHeight - by, Math.ceil(maxY + padding) - by);

  if (bw <= 0 || bh <= 0) return;

  try {
    if (typeof document !== 'undefined' && ctx.canvas) {
      const effectCanvas = document.createElement('canvas');
      effectCanvas.width = bw;
      effectCanvas.height = bh;
      const effectCtx = effectCanvas.getContext('2d', { willReadFrequently: true });

      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = bw;
      maskCanvas.height = bh;
      const maskCtx = maskCanvas.getContext('2d');

      if (effectCtx && maskCtx) {
        // Copy original background pixels into effect canvas
        effectCtx.drawImage(ctx.canvas, bx, by, bw, bh, 0, 0, bw, bh);

        if (style === 'mosaic') {
          applyPixelate(effectCtx, 0, 0, bw, bh, (area.blockSize || 10) * scaleX);
        } else if (style === 'blur') {
          applyBlur(effectCtx, 0, 0, bw, bh, (area.blurRadius || 8) * scaleX);
        }

        // Draw brush stroke on mask canvas
        maskCtx.fillStyle = '#ffffff';
        maskCtx.strokeStyle = '#ffffff';
        drawStrokePath(maskCtx, bx, by);

        // Mask the effect with the brush path
        maskCtx.globalCompositeOperation = 'source-in';
        maskCtx.drawImage(effectCanvas, 0, 0);

        // Blit back onto original canvas
        ctx.save();
        ctx.drawImage(maskCanvas, bx, by);
        ctx.restore();
        return;
      }
    }
  } catch (err) {
    console.warn('Masked brush composite failed, falling back to solid stroke:', err);
  }

  // Fallback if masking canvas is unavailable (e.g. headless unit tests)
  ctx.save();
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#000000';
  drawStrokePath(ctx);
  ctx.restore();
}

/**
 * Apply a single redaction area to a canvas
 */
export function renderRedactionAreaOnCanvas(
  ctx: CanvasRenderingContext2D,
  area: RedactionArea,
  canvasWidth: number,
  canvasHeight: number
): void {
  if (area.type === 'brush' && area.path && area.path.length > 0) {
    renderBrushOnCanvas(ctx, area, canvasWidth, canvasHeight);
    return;
  }

  const scaleX = area.pageWidth ? canvasWidth / area.pageWidth : 1;
  const scaleY = area.pageHeight ? canvasHeight / area.pageHeight : 1;

  const rx = Math.floor(area.x * scaleX);
  const ry = Math.floor(area.y * scaleY);
  const rw = Math.ceil(area.width * scaleX);
  const rh = Math.ceil(area.height * scaleY);

  if (rw <= 0 || rh <= 0) return;

  switch (area.style) {
    case 'mosaic':
      applyPixelate(ctx, rx, ry, rw, rh, (area.blockSize || 10) * scaleX);
      break;
    case 'blur':
      applyBlur(ctx, rx, ry, rw, rh, (area.blurRadius || 8) * scaleX);
      break;
    case 'whiteout':
      applySolidFill(ctx, rx, ry, rw, rh, '#ffffff', area.label, area.borderColor);
      break;
    case 'custom-color':
      applySolidFill(ctx, rx, ry, rw, rh, area.color || '#000000', area.label, area.borderColor);
      break;
    case 'blackout':
    default:
      applySolidFill(ctx, rx, ry, rw, rh, '#000000', area.label, area.borderColor);
      break;
  }
}

/**
 * Execute Redaction on PDF
 */
export async function redactPDF(
  file: File | ArrayBuffer | Uint8Array,
  redactions: Record<number, RedactionArea[]> | RedactionArea[],
  options: RedactOptions = {},
  onProgress?: (percent: number, message: string) => void
): Promise<Uint8Array> {
  const {
    flattenAllPages = false,
    stripMetadata = true,
    purgeAnnotations = true,
    renderScale = 2.0,
    outputQuality = 0.95,
  } = options;

  // Normalize redactions by page number
  const redactionsByPage: Record<number, RedactionArea[]> = Array.isArray(redactions)
    ? redactions.reduce<Record<number, RedactionArea[]>>((acc, area) => {
        if (!acc[area.page]) acc[area.page] = [];
        acc[area.page].push(area);
        return acc;
      }, {})
    : redactions;

  onProgress?.(5, 'Loading PDF documents...');

  const arrayBuffer = file instanceof File ? await file.arrayBuffer() : file;
  const pdfjsLib = await loadPdfjs();
  const pdfDocProxy = await pdfjsLib.getDocument({
    data: arrayBuffer.slice(0),
    cMapUrl: withBasePath(PDFJS_CONFIG.cMapUrl),
    cMapPacked: PDFJS_CONFIG.cMapPacked,
    standardFontDataUrl: withBasePath(PDFJS_CONFIG.standardFontDataUrl),
    disableFontFace: false,
    useSystemFonts: true,
  }).promise;

  let originalPdfDoc: PDFDocument | null = null;
  try {
    originalPdfDoc = await PDFDocument.load(arrayBuffer.slice(0), { ignoreEncryption: true });
  } catch (loadErr) {
    console.warn('pdf-lib failed to load original vector document, falling back to full rasterization:', loadErr);
  }

  const newPdfDoc = await PDFDocument.create();
  const totalPages = pdfDocProxy.numPages;

  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    const pageIndex = pageNum - 1;
    const progressPercent = Math.round(10 + (pageIndex / totalPages) * 75);
    onProgress?.(progressPercent, `正在处理第 ${pageNum} / ${totalPages} 页...`);

    const pageRedactions = redactionsByPage[pageNum] || [];
    const shouldRasterize = pageRedactions.length > 0 || flattenAllPages || !originalPdfDoc;

    if (!shouldRasterize && originalPdfDoc) {
      try {
        const [copiedPage] = await newPdfDoc.copyPages(originalPdfDoc, [pageIndex]);
        newPdfDoc.addPage(copiedPage);
        continue;
      } catch (copyErr) {
        console.warn(`Vector copy failed for page ${pageNum}, falling back to rasterization:`, copyErr);
      }
    }

    // Rasterize with PDF.js to guarantee 100% irreversible destruction of underlying text/objects
    const pageProxy = await pdfDocProxy.getPage(pageNum);
    const defaultViewport = pageProxy.getViewport({ scale: 1.0 });

    // Guard against oversized canvas exceeding browser texture limits
    const MAX_CANVAS_DIM = 4096;
    let actualScale = renderScale;
    const maxDim = Math.max(defaultViewport.width, defaultViewport.height) * actualScale;
    if (maxDim > MAX_CANVAS_DIM) {
      actualScale = MAX_CANVAS_DIM / Math.max(defaultViewport.width, defaultViewport.height);
    }

    const viewport = pageProxy.getViewport({ scale: actualScale });

    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = Math.floor(viewport.width);
    offscreenCanvas.height = Math.floor(viewport.height);

    const ctx = offscreenCanvas.getContext('2d', {
      alpha: false,
      willReadFrequently: true,
    });

    if (!ctx) {
      throw new Error(`Failed to initialize 2D context for page ${pageNum}`);
    }

    // Fill white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);

    // Render original page
    await pageProxy.render({
      canvasContext: ctx,
      viewport,
      intent: 'display',
    }).promise;

    // Apply all redactions
    for (const area of pageRedactions) {
      renderRedactionAreaOnCanvas(ctx, area, offscreenCanvas.width, offscreenCanvas.height);
    }

    // Export canvas to JPEG blob
    const blob = await new Promise<Blob>((resolve, reject) => {
      if (typeof offscreenCanvas.toBlob === 'function') {
        offscreenCanvas.toBlob(
          (b) => {
            if (b) {
              resolve(b);
            } else {
              // Try toDataURL fallback if toBlob returns null
              try {
                const dataUrl = offscreenCanvas.toDataURL('image/jpeg', outputQuality);
                const base64Data = dataUrl.split(',')[1];
                if (base64Data) {
                  const binaryStr = atob(base64Data);
                  const len = binaryStr.length;
                  const u8arr = new Uint8Array(len);
                  for (let i = 0; i < len; i++) {
                    u8arr[i] = binaryStr.charCodeAt(i);
                  }
                  resolve(new Blob([u8arr], { type: 'image/jpeg' }));
                  return;
                }
              } catch {
                // Ignore fallback error
              }
              reject(new Error('Canvas image conversion failed'));
            }
          },
          'image/jpeg',
          outputQuality
        );
      } else {
        try {
          const dataUrl = offscreenCanvas.toDataURL('image/jpeg', outputQuality);
          const base64Data = dataUrl.split(',')[1];
          if (!base64Data) throw new Error('Empty dataURL');
          const binaryStr = atob(base64Data);
          const len = binaryStr.length;
          const u8arr = new Uint8Array(len);
          for (let i = 0; i < len; i++) {
            u8arr[i] = binaryStr.charCodeAt(i);
          }
          resolve(new Blob([u8arr], { type: 'image/jpeg' }));
        } catch (err) {
          reject(new Error(`Canvas image conversion failed: ${err instanceof Error ? err.message : 'toBlob unsupported'}`));
        }
      }
    });

    const imageBytes = await blob.arrayBuffer();
    const embeddedImage = await newPdfDoc.embedJpg(imageBytes);

    // Get original PDF page dimensions in points (rotation-aware)
    const origW = defaultViewport.width;
    const origH = defaultViewport.height;

    const newPage = newPdfDoc.addPage([origW, origH]);
    newPage.drawImage(embeddedImage, {
      x: 0,
      y: 0,
      width: origW,
      height: origH,
    });
  }

  onProgress?.(88, 'Enforcing security and cleaning metadata...');

  // Deep sanitization: strip metadata & XMP streams
  if (stripMetadata) {
    try {
      const infoDict = (newPdfDoc as any).getInfoDict?.();
      if (infoDict) {
        const allKeys = infoDict.keys?.() || [];
        allKeys.forEach((key: any) => {
          try {
            infoDict.delete(key);
          } catch {
            // Ignore individual key deletion errors
          }
        });
      }

      newPdfDoc.setTitle('');
      newPdfDoc.setAuthor('');
      newPdfDoc.setSubject('');
      newPdfDoc.setKeywords([]);
      newPdfDoc.setCreator('');
      newPdfDoc.setProducer('PDFCraft');

      // Purge XMP Metadata stream from catalog
      try {
        const catalogDict = (newPdfDoc.catalog as any).dict;
        if (catalogDict?.has(PDFName.of('Metadata'))) {
          catalogDict.delete(PDFName.of('Metadata'));
        }
      } catch (xmpErr) {
        console.warn('XMP cleanup error:', xmpErr);
      }
    } catch (metaErr) {
      console.warn('Metadata stripping failed:', metaErr);
    }
  }

  // Purge annotations & interactive form scripts
  if (purgeAnnotations) {
    try {
      const pages = newPdfDoc.getPages();
      for (const page of pages) {
        try {
          page.node.delete(PDFName.of('Annots'));
        } catch {
          // Page may not have Annots
        }
      }

      try {
        const catalogDict = (newPdfDoc.catalog as any).dict;
        if (catalogDict?.has(PDFName.of('AcroForm'))) {
          catalogDict.delete(PDFName.of('AcroForm'));
        }
      } catch {
        // Ignore AcroForm deletion failure
      }
    } catch (annotErr) {
      console.warn('Annotation cleanup error:', annotErr);
    }
  }

  onProgress?.(95, 'Generating finalized secure PDF...');
  const finalPdfBytes = await newPdfDoc.save();

  onProgress?.(100, 'Redaction completed successfully!');
  return finalPdfBytes;
}

export type RedactionOptions = RedactOptions;

export interface RedactionResult {
  success: boolean;
  pdfBytes?: Uint8Array;
  error?: string;
}

export const applyRedactions = redactPDF;

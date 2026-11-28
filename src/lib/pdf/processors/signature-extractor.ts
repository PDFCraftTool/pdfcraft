/**
 * PDF Signature Extractor
 * Extracts signatures from signed PDF documents (including Adobe Acrobat signed files),
 * isolates ink handwriting, cleans white background with smooth alpha transparency,
 * and exports crisp, reusable transparent signature stamps.
 */

import { loadPdfjs } from '../loader';
import { withBasePath } from '@/lib/utils/path';

export interface DetectedSignatureZone {
  id: string;
  pageNumber: number; // 1-based
  pdfRect: [number, number, number, number]; // [x1, y1, x2, y2]
  viewportRect: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  type: 'digital_signature' | 'stamp' | 'ink' | 'annotation';
  title: string;
  details?: string;
}

export type InkColorMode = 'original' | 'black' | 'blue' | 'seal_red';

export interface InkExtractionOptions {
  threshold?: number; // Background luminance threshold (150-250), default 215
  smoothness?: number; // Anti-aliasing falloff range (5-40), default 25
  colorMode?: InkColorMode;
  contrast?: number; // Contrast boost (1.0 - 2.5), default 1.4
  autoTrim?: boolean; // Trim excess transparent padding around the signature, default true
}

export interface ExtractedSignatureResult {
  blob: Blob;
  dataUrl: string;
  width: number;
  height: number;
}

/**
 * Scan a PDF for existing signature fields, stamps, and handwriting ink annotations
 */
export async function scanPdfForSignatures(
  pdfBuffer: ArrayBuffer
): Promise<{ pageCount: number; zones: DetectedSignatureZone[] }> {
  const pdfjs = await loadPdfjs();
  const pdfDoc = await pdfjs.getDocument({
    data: pdfBuffer,
    cMapUrl: withBasePath('/pdfjs-viewer/cmaps/'),
    cMapPacked: true,
    standardFontDataUrl: withBasePath('/pdfjs-viewer/standard_fonts/'),
  }).promise;

  const pageCount = pdfDoc.numPages;
  const zones: DetectedSignatureZone[] = [];

  for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1.0 });
    const annotations = await page.getAnnotations();

    for (let i = 0; i < annotations.length; i++) {
      const annot = annotations[i];
      const subtype = annot.subtype;
      const fieldType = annot.fieldType;
      const fieldName = (annot.fieldName || annot.alternativeText || annot.title || '').toLowerCase();

      const isDigitalSig = subtype === 'Widget' && (fieldType === 'Sig' || fieldName.includes('sig') || fieldName.includes('sign'));
      const isStamp = subtype === 'Stamp';
      const isInk = subtype === 'Ink';

      if (isDigitalSig || isStamp || isInk) {
        const rawRect = annot.rect; // [x1, y1, x2, y2]
        if (Array.isArray(rawRect) && rawRect.length === 4) {
          // Convert PDF coordinates to viewport coordinates
          const viewRect = viewport.convertToViewportRectangle(rawRect);
          // viewRect is [x1, y1, x2, y2] in viewport space
          const minX = Math.min(viewRect[0], viewRect[2]);
          const minY = Math.min(viewRect[1], viewRect[3]);
          const width = Math.abs(viewRect[0] - viewRect[2]);
          const height = Math.abs(viewRect[1] - viewRect[3]);

          let typeLabel: DetectedSignatureZone['type'] = 'annotation';
          let title = `Page ${pageNum} - Signature`;

          if (isDigitalSig) {
            typeLabel = 'digital_signature';
            title = `Page ${pageNum} - Digital Signature (${annot.fieldName || 'Adobe Sign'})`;
          } else if (isStamp) {
            typeLabel = 'stamp';
            title = `Page ${pageNum} - Signature Stamp`;
          } else if (isInk) {
            typeLabel = 'ink';
            title = `Page ${pageNum} - Handwritten Ink`;
          }

          zones.push({
            id: `zone_${pageNum}_${i}`,
            pageNumber: pageNum,
            pdfRect: [rawRect[0], rawRect[1], rawRect[2], rawRect[3]],
            viewportRect: {
              x: Math.round(minX),
              y: Math.round(minY),
              width: Math.round(width),
              height: Math.round(height),
            },
            type: typeLabel,
            title,
            details: annot.modificationDate || annot.contents || undefined,
          });
        }
      }
    }
  }

  return { pageCount, zones };
}

/**
 * Render a specific page of a PDF to an offscreen Canvas
 */
export async function renderPdfPage(
  pdfDoc: any,
  pageNumber: number,
  scale = 2.0
): Promise<{ canvas: HTMLCanvasElement; width: number; height: number }> {
  const page = await pdfDoc.getPage(pageNumber);
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement('canvas');
  canvas.width = Math.floor(viewport.width);
  canvas.height = Math.floor(viewport.height);

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    throw new Error('Failed to create canvas 2D rendering context');
  }

  // Draw white background initially
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({
    canvasContext: ctx,
    viewport,
  }).promise;

  return {
    canvas,
    width: canvas.width,
    height: canvas.height,
  };
}

/**
 * Extract ink from a canvas selection, removing white paper background
 * with soft alpha anti-aliasing and optional ink color enhancement.
 */
export async function extractInkFromCanvas(
  sourceCanvas: HTMLCanvasElement,
  cropRect: { x: number; y: number; width: number; height: number },
  options: InkExtractionOptions = {}
): Promise<ExtractedSignatureResult> {
  const {
    threshold = 215,
    smoothness = 25,
    colorMode = 'original',
    contrast = 1.4,
    autoTrim = true,
  } = options;

  // Clamp bounding box inside source canvas
  const sx = Math.max(0, Math.min(Math.round(cropRect.x), sourceCanvas.width - 1));
  const sy = Math.max(0, Math.min(Math.round(cropRect.y), sourceCanvas.height - 1));
  const sw = Math.max(1, Math.min(Math.round(cropRect.width), sourceCanvas.width - sx));
  const sh = Math.max(1, Math.min(Math.round(cropRect.height), sourceCanvas.height - sy));

  // Create intermediate crop canvas
  const cropCanvas = document.createElement('canvas');
  cropCanvas.width = sw;
  cropCanvas.height = sh;
  const cropCtx = cropCanvas.getContext('2d', { willReadFrequently: true });
  if (!cropCtx) {
    throw new Error('Failed to get 2D context for signature crop canvas');
  }

  // Draw cropped section
  cropCtx.drawImage(sourceCanvas, sx, sy, sw, sh, 0, 0, sw, sh);

  const imgData = cropCtx.getImageData(0, 0, sw, sh);
  const data = imgData.data;

  // Track bounding box of visible ink pixels
  let minX = sw;
  let minY = sh;
  let maxX = 0;
  let maxY = 0;

  // Contrast enhancement lookup
  const applyContrast = (val: number, factor: number) => {
    return Math.max(0, Math.min(255, Math.round((val - 128) * factor + 128)));
  };

  for (let y = 0; y < sh; y++) {
    for (let x = 0; x < sw; x++) {
      const idx = (y * sw + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      if (a === 0) continue;

      // Standard ITU BT.601 perceived luminance
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      if (luminance >= threshold) {
        // Pure background -> transparent
        data[idx + 3] = 0;
      } else {
        let alpha = a;
        if (luminance > threshold - smoothness) {
          // Soft edge anti-aliasing gradient
          const factor = (threshold - luminance) / smoothness;
          alpha = Math.round(a * Math.min(1, Math.max(0, factor)));
        }

        data[idx + 3] = alpha;

        if (alpha > 15) {
          // Update bounding box
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;

          // Color mode transformations
          if (colorMode === 'black') {
            // Enhanced pure black ink: keeps natural shading via alpha
            data[idx] = 18;
            data[idx + 1] = 20;
            data[idx + 2] = 24;
          } else if (colorMode === 'blue') {
            // Deep official blue fountain ink
            data[idx] = 26;
            data[idx + 1] = 54;
            data[idx + 2] = 120;
          } else if (colorMode === 'seal_red') {
            // Classic seal vermilion red
            data[idx] = 210;
            data[idx + 1] = 32;
            data[idx + 2] = 32;
          } else {
            // Original: boost contrast slightly to remove faint paper haze
            data[idx] = applyContrast(r, contrast);
            data[idx + 1] = applyContrast(g, contrast);
            data[idx + 2] = applyContrast(b, contrast);
          }
        }
      }
    }
  }

  cropCtx.putImageData(imgData, 0, 0);

  // Trim transparent padding if requested and valid bounding box found
  let finalCanvas = cropCanvas;
  if (autoTrim && minX <= maxX && minY <= maxY) {
    const pad = 8; // Small 8px safe padding
    const trimX = Math.max(0, minX - pad);
    const trimY = Math.max(0, minY - pad);
    const trimW = Math.min(sw - trimX, maxX - minX + 1 + pad * 2);
    const trimH = Math.min(sh - trimY, maxY - minY + 1 + pad * 2);

    const trimmedCanvas = document.createElement('canvas');
    trimmedCanvas.width = trimW;
    trimmedCanvas.height = trimH;
    const trimmedCtx = trimmedCanvas.getContext('2d');
    if (trimmedCtx) {
      trimmedCtx.drawImage(cropCanvas, trimX, trimY, trimW, trimH, 0, 0, trimW, trimH);
      finalCanvas = trimmedCanvas;
    }
  }

  // Export to Blob and DataURL
  const dataUrl = finalCanvas.toDataURL('image/png');
  const blob = await new Promise<Blob>((resolve, reject) => {
    finalCanvas.toBlob((b) => {
      if (b) resolve(b);
      else reject(new Error('Failed to encode canvas to PNG blob'));
    }, 'image/png');
  });

  return {
    blob,
    dataUrl,
    width: finalCanvas.width,
    height: finalCanvas.height,
  };
}

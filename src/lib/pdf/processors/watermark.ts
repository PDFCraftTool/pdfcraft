/**
 * PDF Watermark Processor
 * Requirements: 5.1
 * 
 * Supports text and image watermarks with CJK character support via fontkit.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import type { PDFPage, PDFFont, PDFImage } from 'pdf-lib';


export interface WatermarkOptions {
  type: 'text' | 'image';
  text?: string;
  imageData?: ArrayBuffer;
  imageType?: 'png' | 'jpg';
  position?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'diagonal';
  /** Relative x position in page (0 to 1, default 0.5) */
  x?: number;
  /** Relative y position in page from top (0 to 1, default 0.5) */
  y?: number;
  /** Scale factor for image watermark (default 0.5) */
  imageScale?: number;
  /** If true, flatten pages with watermarks to tamper-resistant images */
  flatten?: boolean;
  opacity?: number;
  rotation?: number;
  fontSize?: number;
  color?: { r: number; g: number; b: number };
  pages?: number[] | 'all' | 'odd' | 'even';
  /** If true, tile the watermark across the entire page */
  repeat?: boolean;
  /** If true, offset alternating rows for a staggered pattern */
  stagger?: boolean;
  /** Horizontal spacing between repeated watermarks (points) */
  repeatSpacingX?: number;
  /** Vertical spacing between repeated watermarks (points) */
  repeatSpacingY?: number;
}

// Noto fonts for CJK support
const CJK_FONT_URL = 'https://raw.githack.com/googlefonts/noto-cjk/main/Sans/OTF/SimplifiedChinese/NotoSansCJKsc-Regular.otf';

// Font cache
const fontCache: Map<string, ArrayBuffer> = new Map();
const DB_NAME = 'pdfcraft-fonts';
const DB_VERSION = 1;
const STORE_NAME = 'fonts';

async function openFontDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

async function getCachedFontFromDB(fontId: string): Promise<ArrayBuffer | null> {
  try {
    const db = await openFontDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(fontId);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch {
    return null;
  }
}

async function saveFontToDB(fontId: string, fontBuffer: ArrayBuffer): Promise<void> {
  try {
    const db = await openFontDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(fontBuffer, fontId);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch {
    // Ignore IndexedDB errors
  }
}

async function loadCJKFont(): Promise<ArrayBuffer> {
  const fontId = 'noto-sans-sc';

  // Check memory cache first
  if (fontCache.has(fontId)) {
    return fontCache.get(fontId)!;
  }

  // Check IndexedDB cache
  const cachedFont = await getCachedFontFromDB(fontId);
  if (cachedFont) {
    fontCache.set(fontId, cachedFont);
    return cachedFont;
  }

  // Fetch from URL
  const response = await fetch(CJK_FONT_URL);
  if (!response.ok) {
    throw new Error(`Failed to load CJK font`);
  }

  const buffer = await response.arrayBuffer();

  // Cache in memory and IndexedDB
  fontCache.set(fontId, buffer);
  await saveFontToDB(fontId, buffer);

  return buffer;
}

/**
 * Check if text contains non-ASCII characters (CJK, etc.)
 */
function containsNonAscii(text: string): boolean {
  // eslint-disable-next-line no-control-regex
  return /[^\x00-\x7F]/.test(text);
}

export class WatermarkProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<WatermarkOptions>;
    const wmOptions: WatermarkOptions = {
      type: inputOptions.type ?? 'text',
      text: inputOptions.text,
      imageData: inputOptions.imageData,
      imageType: inputOptions.imageType,
      position: inputOptions.position ?? 'center',
      x: inputOptions.x,
      y: inputOptions.y,
      imageScale: inputOptions.imageScale ?? 0.5,
      flatten: inputOptions.flatten ?? false,
      opacity: inputOptions.opacity ?? 0.3,
      rotation: inputOptions.rotation ?? -45,
      fontSize: inputOptions.fontSize ?? 48,
      color: inputOptions.color ?? { r: 0.5, g: 0.5, b: 0.5 },
      pages: inputOptions.pages ?? 'all',
      repeat: inputOptions.repeat ?? false,
      stagger: inputOptions.stagger ?? true,
      repeatSpacingX: inputOptions.repeatSpacingX ?? 200,
      repeatSpacingY: inputOptions.repeatSpacingY ?? 150,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      // Check if we need CJK font support
      const needsCJKFont = wmOptions.type === 'text' && wmOptions.text && containsNonAscii(wmOptions.text);

      let font: Awaited<ReturnType<typeof pdf.embedFont>>;

      if (needsCJKFont) {
        this.updateProgress(25, 'Loading CJK font...');
        const fontkit = await import('@pdf-lib/fontkit');
        pdf.registerFontkit(fontkit.default || fontkit);

        const fontBytes = await loadCJKFont();
        this.updateProgress(28, 'Embedding font...');
        font = await pdf.embedFont(fontBytes, { subset: false });
      } else {
        font = await pdf.embedFont(pdfLib.StandardFonts.HelveticaBold);
      }

      const totalPages = pdf.getPageCount();

      this.updateProgress(30, 'Adding watermark...');

      const pagesToProcess = getPageIndices(wmOptions.pages, totalPages);

      // Pre-embed image if using image watermark (do this once, outside the loop)
      let embeddedImage: Awaited<ReturnType<typeof pdf.embedPng>> | null = null;
      if (wmOptions.type === 'image' && wmOptions.imageData) {
        try {
          if (wmOptions.imageType === 'jpg') {
            embeddedImage = await pdf.embedJpg(wmOptions.imageData);
          } else {
            embeddedImage = await pdf.embedPng(wmOptions.imageData);
          }
        } catch (embedError) {
          const errorMessage = embedError instanceof Error ? embedError.message : 'Unknown error';
          return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, `Failed to embed image: ${errorMessage}`);
        }
      }

      for (let i = 0; i < pagesToProcess.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageIndex = pagesToProcess[i];
        const page = pdf.getPage(pageIndex);
        const { width, height } = page.getSize();

        if (wmOptions.type === 'text' && wmOptions.text) {
          const text = wmOptions.text;
          const fontSize = wmOptions.fontSize || 48;
          const textWidth = font.widthOfTextAtSize(text, fontSize);
          const textHeight = font.heightAtSize(fontSize);
          const rotation = wmOptions.position === 'diagonal' ? -45 : (wmOptions.rotation || 0);

          if (wmOptions.repeat) {
            // Tile the text watermark across the entire page
            tileTextWatermark(page, pdfLib, text, font, fontSize, rotation, wmOptions, width, height, textWidth, textHeight);
          } else {
            let x = 0, y = 0;

            if (wmOptions.x !== undefined && wmOptions.y !== undefined) {
              const targetCenterX = wmOptions.x * width;
              const targetCenterY = (1 - wmOptions.y) * height;
              const position = computeTextWatermarkPosition(width, height, textWidth, textHeight, rotation, targetCenterX, targetCenterY);
              x = position.x;
              y = position.y;
            } else {
              switch (wmOptions.position) {
                case 'top-left':
                  x = 50; y = height - 50;
                  break;
                case 'top-right':
                  x = width - textWidth - 50; y = height - 50;
                  break;
                case 'bottom-left':
                  x = 50; y = 50;
                  break;
                case 'bottom-right':
                  x = width - textWidth - 50; y = 50;
                  break;
                case 'center':
                  const position = computeTextWatermarkPosition(width, height, textWidth, textHeight, rotation);
                  x = position.x;
                  y = position.y;
                  break;
                case 'diagonal':
                default:
                  x = width / 2; y = height / 2;
              }
            }

            page.drawText(text, {
              x,
              y,
              size: fontSize,
              font,
              color: pdfLib.rgb(wmOptions.color?.r || 0.5, wmOptions.color?.g || 0.5, wmOptions.color?.b || 0.5),
              opacity: wmOptions.opacity || 0.3,
              rotate: pdfLib.degrees(rotation),
            });
          }
        } else if (wmOptions.type === 'image' && embeddedImage) {
          const scale = wmOptions.imageScale ?? 0.5;
          const imgWidth = embeddedImage.width * scale;
          const imgHeight = embeddedImage.height * scale;

          if (wmOptions.repeat) {
            // Tile the image watermark across the entire page
            tileImageWatermark(page, pdfLib, embeddedImage, imgWidth, imgHeight, wmOptions, width, height);
          } else {
            const rad = ((wmOptions.rotation || 0) * Math.PI) / 180;
            const halfW = imgWidth / 2;
            const halfH = imgHeight / 2;
            let targetCenterX = width / 2;
            let targetCenterY = height / 2;

            if (wmOptions.x !== undefined && wmOptions.y !== undefined) {
              targetCenterX = wmOptions.x * width;
              targetCenterY = (1 - wmOptions.y) * height;
            }

            const x = targetCenterX - (halfW * Math.cos(rad) - halfH * Math.sin(rad));
            const y = targetCenterY - (halfW * Math.sin(rad) + halfH * Math.cos(rad));

            page.drawImage(embeddedImage, {
              x,
              y,
              width: imgWidth,
              height: imgHeight,
              opacity: wmOptions.opacity || 0.3,
              rotate: pdfLib.degrees(wmOptions.rotation || 0),
            });
          }
        }

        this.updateProgress(30 + (55 * (i + 1) / pagesToProcess.length), `Processing page ${pageIndex + 1}...`);
      }

      this.updateProgress(90, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });

      // Flatten watermark: rasterize pages to tamper-resistant images
      if (wmOptions.flatten && typeof document !== 'undefined' && typeof window !== 'undefined') {
        try {
          this.updateProgress(92, 'Flattening PDF pages (rasterizing)...');
          const { loadPdfjs } = await import('../loader');
          const pdfjs = await loadPdfjs();
          const watermarkedPdf = await pdfjs.getDocument({ data: pdfBytes.slice() }).promise;
          const flattenedDoc = await pdfLib.PDFDocument.create();
          const numPages = watermarkedPdf.numPages;
          const renderScale = 2.0;

          let canvasAvailable = true;
          for (let i = 1; i <= numPages; i++) {
            if (this.checkCancelled()) {
              return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
            }
            this.updateProgress(92 + Math.floor((7 * i) / numPages), `Flattening page ${i} of ${numPages}...`);
            const page = await watermarkedPdf.getPage(i);
            const unscaledVP = page.getViewport({ scale: 1 });
            const viewport = page.getViewport({ scale: renderScale });

            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
              canvasAvailable = false;
              break;
            }

            await page.render({ canvasContext: ctx, viewport }).promise;
            const jpegBytes = await new Promise<ArrayBuffer | null>((resolve) => {
              canvas.toBlob(
                (blob) => {
                  if (blob) {
                    blob.arrayBuffer().then(resolve).catch(() => resolve(null));
                  } else {
                    resolve(null);
                  }
                },
                'image/jpeg',
                0.92
              );
            });

            if (jpegBytes) {
              const image = await flattenedDoc.embedJpg(jpegBytes);
              const newPage = flattenedDoc.addPage([unscaledVP.width, unscaledVP.height]);
              newPage.drawImage(image, {
                x: 0,
                y: 0,
                width: unscaledVP.width,
                height: unscaledVP.height,
              });
            }
          }

          if (canvasAvailable && flattenedDoc.getPageCount() > 0) {
            const flattenedBytes = await flattenedDoc.save({ useObjectStreams: true });
            const blob = new Blob([new Uint8Array(flattenedBytes)], { type: 'application/pdf' });
            this.updateProgress(100, 'Complete!');
            return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_watermarked.pdf'), { pageCount: numPages });
          }
        } catch (flattenError) {
          console.warn('Flattening failed, falling back to standard PDF:', flattenError);
        }
      }

      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_watermarked.pdf'), { pageCount: totalPages });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to add watermark.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

function getPageIndices(pages: WatermarkOptions['pages'], totalPages: number): number[] {
  if (Array.isArray(pages)) {
    return pages.map(p => p - 1).filter(p => p >= 0 && p < totalPages);
  }
  switch (pages) {
    case 'odd':
      return Array.from({ length: totalPages }, (_, i) => i).filter(i => i % 2 === 0);
    case 'even':
      return Array.from({ length: totalPages }, (_, i) => i).filter(i => i % 2 === 1);
    default:
      return Array.from({ length: totalPages }, (_, i) => i);
  }
}

function computeTextWatermarkPosition(
  pageWidth: number,
  pageHeight: number,
  textWidth: number,
  textHeight: number,
  rotation: number,
  centerX: number = pageWidth / 2,
  centerY: number = pageHeight / 2
): { x: number; y: number } {

  // Half of text width/height, baseline offset for text drawing
  const textWidthHalf = textWidth / 2;
  const textHeightHalf = textHeight / 2;
  const baselineOffset = textHeight * 0.25; // 基线向下调整的偏移值

  // Basic unrotated coordinates for text center alignment (with baseline offset)
  const baseX = centerX - textWidthHalf;
  const baseY = centerY - (textHeightHalf + baselineOffset);

  // Convert rotation angle from degrees to radians (take absolute value for calculation)
  const rotationRad = (Math.abs(rotation) * Math.PI) / 180;
  const cosRad = Math.cos(rotationRad);
  const sinRad = Math.sin(rotationRad);

  // Get rotation direction sign: 1=counterclockwise, -1=clockwise, 0=no rotation
  const rotationSign = Math.sign(rotation);
  // Calculate final rotated origin coordinates for text
  let rotatedOriginX = baseX + textWidthHalf * (1 - cosRad) + rotationSign * baselineOffset;
  let rotatedOriginY = baseY - rotationSign * (textWidthHalf * sinRad) + baselineOffset * Math.abs(rotationSign);

  return {
    x: rotatedOriginX,
    y: rotatedOriginY,
  };
}

/**
 * Tile a text watermark across the entire page in a grid pattern.
 */
function tileTextWatermark(
  page: PDFPage,
  pdfLib: Awaited<ReturnType<typeof loadPdfLib>>,
  text: string,
  font: PDFFont,
  fontSize: number,
  rotation: number,
  wmOptions: WatermarkOptions,
  pageWidth: number,
  pageHeight: number,
  textWidth: number,
  textHeight: number
): void {
  const spacingX = wmOptions.repeatSpacingX ?? 200;
  const spacingY = wmOptions.repeatSpacingY ?? 150;
  const stepX = textWidth + spacingX;
  const stepY = textHeight + spacingY;
  const stagger = wmOptions.stagger ?? true;

  // Calculate the diagonal to ensure full coverage when rotated
  const diagonal = Math.sqrt(pageWidth * pageWidth + pageHeight * pageHeight);
  const margin = Math.max(textWidth, textHeight, 200);

  // We start from a negative offset to ensure coverage even with rotation
  const startX = -margin;
  const startY = -margin;
  const endX = pageWidth + margin;
  const endY = pageHeight + margin;

  let rowIndex = 0;
  for (let y = startY; y < endY; y += stepY) {
    const offsetX = (stagger && rowIndex % 2 === 1) ? stepX / 2 : 0;
    for (let x = startX - offsetX; x < endX; x += stepX) {
      page.drawText(text, {
        x,
        y,
        size: fontSize,
        font,
        color: pdfLib.rgb(wmOptions.color?.r || 0.5, wmOptions.color?.g || 0.5, wmOptions.color?.b || 0.5),
        opacity: wmOptions.opacity || 0.3,
        rotate: pdfLib.degrees(rotation),
      });
    }
    rowIndex++;
  }
}

/**
 * Tile an image watermark across the entire page in a grid pattern.
 */
function tileImageWatermark(
  page: PDFPage,
  pdfLib: Awaited<ReturnType<typeof loadPdfLib>>,
  embeddedImage: PDFImage,
  imgWidth: number,
  imgHeight: number,
  wmOptions: WatermarkOptions,
  pageWidth: number,
  pageHeight: number
): void {
  const spacingX = wmOptions.repeatSpacingX ?? 200;
  const spacingY = wmOptions.repeatSpacingY ?? 150;
  const stepX = imgWidth + spacingX;
  const stepY = imgHeight + spacingY;
  const stagger = wmOptions.stagger ?? true;
  const margin = Math.max(imgWidth, imgHeight, 200);

  const startX = -margin;
  const startY = -margin;
  const endX = pageWidth + margin;
  const endY = pageHeight + margin;

  let rowIndex = 0;
  for (let y = startY; y < endY; y += stepY) {
    const offsetX = (stagger && rowIndex % 2 === 1) ? stepX / 2 : 0;
    for (let x = startX - offsetX; x < endX; x += stepX) {
      page.drawImage(embeddedImage, {
        x,
        y,
        width: imgWidth,
        height: imgHeight,
        opacity: wmOptions.opacity || 0.3,
        rotate: pdfLib.degrees(wmOptions.rotation || 0),
      });
    }
    rowIndex++;
  }
}

export function createWatermarkProcessor(): WatermarkProcessor {
  return new WatermarkProcessor();
}

export async function addWatermark(file: File, options: WatermarkOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createWatermarkProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

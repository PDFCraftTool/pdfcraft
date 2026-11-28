/**
 * Text to PDF Processor
 * Requirements: 5.1
 * 
 * Converts text files (.txt) to PDF with customizable formatting.
 * Uses fontkit and Noto fonts to support all Unicode characters including CJK.
 * Supports direct text input, custom colors, page orientation, and custom page sizes.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

/**
 * Page size presets in points (72 points = 1 inch)
 */
export const TEXT_PAGE_SIZES = {
  A4: { width: 595.28, height: 841.89 },
  LETTER: { width: 612, height: 792 },
  LEGAL: { width: 612, height: 1008 },
  A5: { width: 419.53, height: 595.28 },
  A3: { width: 841.89, height: 1190.55 },
  CUSTOM: { width: 595.28, height: 841.89 },
} as const;

export type TextPageSizeType = keyof typeof TEXT_PAGE_SIZES;

/**
 * Page orientation
 */
export type PageOrientation = 'portrait' | 'landscape';

/**
 * Text color as RGB
 */
export interface TextColor {
  r: number;
  g: number;
  b: number;
}

/**
 * Available font families with their display names and URLs
 */
export const AVAILABLE_FONTS = [
  // Standard PDF fonts (no embedding needed, small file size)
  { id: 'helvetica', name: 'Helvetica (Sans-serif)', type: 'standard' },
  { id: 'times', name: 'Times (Serif)', type: 'standard' },
  { id: 'courier', name: 'Courier (Monospace)', type: 'standard' },
  // Noto fonts for international support
  { id: 'noto-sans', name: 'Noto Sans (Latin/Cyrillic)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-fonts/main/hinted/ttf/NotoSans/NotoSans-Regular.ttf' },
  { id: 'noto-sans-sc', name: 'Noto Sans SC (简体中文)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-cjk/main/Sans/OTF/SimplifiedChinese/NotoSansCJKsc-Regular.otf' },
  { id: 'noto-sans-tc', name: 'Noto Sans TC (繁體中文)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-cjk/main/Sans/OTF/TraditionalChinese/NotoSansCJKtc-Regular.otf' },
  { id: 'noto-sans-jp', name: 'Noto Sans JP (日本語)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-cjk/main/Sans/OTF/Japanese/NotoSansCJKjp-Regular.otf' },
  { id: 'noto-sans-kr', name: 'Noto Sans KR (한국어)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-cjk/main/Sans/OTF/Korean/NotoSansCJKkr-Regular.otf' },
  { id: 'noto-sans-arabic', name: 'Noto Sans Arabic (العربية)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-fonts/main/hinted/ttf/NotoSansArabic/NotoSansArabic-Regular.ttf' },
  { id: 'noto-sans-hebrew', name: 'Noto Sans Hebrew (עברית)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-fonts/main/hinted/ttf/NotoSansHebrew/NotoSansHebrew-Regular.ttf' },
  { id: 'noto-sans-thai', name: 'Noto Sans Thai (ไทย)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-fonts/main/hinted/ttf/NotoSansThai/NotoSansThai-Regular.ttf' },
  { id: 'noto-sans-devanagari', name: 'Noto Sans Devanagari (हिन्दी)', type: 'noto', url: 'https://raw.githack.com/googlefonts/noto-fonts/main/unhinted/ttf/NotoSansDevanagari/NotoSansDevanagari-Regular.ttf' },
] as const;

export type FontId = typeof AVAILABLE_FONTS[number]['id'];

/**
 * Text to PDF options
 */
export interface TextToPDFOptions {
  /** Page size preset */
  pageSize: TextPageSizeType;
  /** Custom page width (when pageSize is CUSTOM) */
  customWidth?: number;
  /** Custom page height (when pageSize is CUSTOM) */
  customHeight?: number;
  /** Page orientation */
  orientation: PageOrientation;
  /** Selected font ID */
  fontId: FontId;
  /** Font size in points */
  fontSize: number;
  /** Line height multiplier */
  lineHeight: number;
  /** Text color */
  textColor: TextColor;
  /** Page margins in points */
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  /** Whether to preserve line breaks */
  preserveLineBreaks: boolean;
  /** Whether to wrap long lines */
  wrapLines: boolean;
  /** Direct text input (alternative to file upload) */
  directText?: string;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: TextToPDFOptions = {
  pageSize: 'A4',
  orientation: 'portrait',
  fontId: 'helvetica',
  fontSize: 12,
  lineHeight: 1.5,
  textColor: { r: 0, g: 0, b: 0 },
  margin: {
    top: 72,
    right: 72,
    bottom: 72,
    left: 72,
  },
  preserveLineBreaks: true,
  wrapLines: true,
};

/**
 * Font cache (in-memory)
 */
const fontCache: Map<string, ArrayBuffer> = new Map();

/**
 * IndexedDB font cache
 */
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

/**
 * Load font from URL with caching (memory + IndexedDB)
 */
async function loadFont(fontId: string, url: string): Promise<ArrayBuffer> {
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
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load font: ${fontId}`);
  }

  const buffer = await response.arrayBuffer();

  // Cache in memory and IndexedDB
  fontCache.set(fontId, buffer);
  await saveFontToDB(fontId, buffer);

  return buffer;
}

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): TextColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255,
    }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Text to PDF Processor
 */
export class TextToPDFProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const pdfOptions: TextToPDFOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<TextToPDFOptions>),
    };

    const hasDirectText = pdfOptions.directText && pdfOptions.directText.trim().length > 0;

    if (files.length < 1 && !hasDirectText) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'At least 1 text file or direct text input is required.',
        `Received ${files.length} file(s) and no direct text.`
      );
    }

    try {
      this.updateProgress(5, 'Loading PDF library...');

      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(10, 'Reading text...');

      let combinedText = '';
      if (hasDirectText) {
        combinedText = pdfOptions.directText!;
      } else {
        for (const file of files) {
          const text = await file.text();
          combinedText += text + '\n\n';
        }
      }

      this.updateProgress(20, 'Loading font...');

      const pdfDoc = await pdfLib.PDFDocument.create();

      // Get selected font config
      const fontConfig = AVAILABLE_FONTS.find(f => f.id === pdfOptions.fontId) || AVAILABLE_FONTS[0];

      let font: Awaited<ReturnType<typeof pdfDoc.embedFont>>;

      if (fontConfig.type === 'standard') {
        // Use standard PDF fonts (no embedding, small file size)
        const standardFontMap: Record<string, keyof typeof pdfLib.StandardFonts> = {
          'helvetica': 'Helvetica',
          'times': 'TimesRoman',
          'courier': 'Courier',
        };
        const standardFontName = standardFontMap[fontConfig.id] || 'Helvetica';
        font = await pdfDoc.embedFont(pdfLib.StandardFonts[standardFontName]);
      } else {
        // Load Noto font with fontkit
        const fontkit = await import('@pdf-lib/fontkit');
        pdfDoc.registerFontkit(fontkit.default || fontkit);

        this.updateProgress(30, 'Downloading font...');
        const fontBytes = await loadFont(fontConfig.id, (fontConfig as { url: string }).url);

        this.updateProgress(40, 'Embedding font...');
        font = await pdfDoc.embedFont(fontBytes, { subset: false });
      }

      this.updateProgress(50, 'Creating PDF pages...');

      await this.createPdfFromText(pdfDoc, combinedText, pdfOptions, font, pdfLib);

      this.updateProgress(90, 'Saving PDF...');

      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      const outputFilename = hasDirectText ? 'from_text.pdf' : this.generateOutputFilename(files);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount: pdfDoc.getPageCount(),
        fileCount: hasDirectText ? 0 : files.length,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to convert text to PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  private async createPdfFromText(
    pdfDoc: Awaited<ReturnType<typeof loadPdfLib>>['PDFDocument'] extends { create(): Promise<infer T> } ? T : never,
    text: string,
    options: TextToPDFOptions,
    font: Awaited<ReturnType<typeof pdfDoc.embedFont>>,
    pdfLib: Awaited<ReturnType<typeof loadPdfLib>>
  ): Promise<void> {
    let pageWidth: number;
    let pageHeight: number;

    if (options.pageSize === 'CUSTOM' && options.customWidth && options.customHeight) {
      pageWidth = options.customWidth;
      pageHeight = options.customHeight;
    } else {
      const baseSize = TEXT_PAGE_SIZES[options.pageSize] || TEXT_PAGE_SIZES.A4;
      pageWidth = baseSize.width;
      pageHeight = baseSize.height;
    }

    if (options.orientation === 'landscape') {
      [pageWidth, pageHeight] = [pageHeight, pageWidth];
    }

    const margin = options.margin;
    const fontSize = options.fontSize;
    const lineHeight = fontSize * options.lineHeight;
    const textColor = options.textColor;
    const textWidth = pageWidth - margin.left - margin.right;

    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin.top;

    const paragraphs = text.split(/\r\n?|\n/);

    for (const paragraph of paragraphs) {
      if (paragraph.trim() === '') {
        y -= lineHeight;
        if (y < margin.bottom) {
          page = pdfDoc.addPage([pageWidth, pageHeight]);
          y = pageHeight - margin.top;
        }
        continue;
      }

      // Word wrap
      const words = paragraph.split(' ');
      let currentLine = '';

      for (const word of words) {
        if (!word) continue;

        const testLine = currentLine ? `${currentLine} ${word}` : word;
        let testWidth: number;

        try {
          testWidth = font.widthOfTextAtSize(testLine, fontSize);
        } catch {
          // Skip unsupported characters
          continue;
        }

        if (testWidth > textWidth && currentLine) {
          // Draw current line
          try {
            page.drawText(currentLine, {
              x: margin.left,
              y,
              size: fontSize,
              font,
              color: pdfLib.rgb(textColor.r, textColor.g, textColor.b),
            });
          } catch {
            // Skip if drawing fails
          }

          y -= lineHeight;
          if (y < margin.bottom) {
            page = pdfDoc.addPage([pageWidth, pageHeight]);
            y = pageHeight - margin.top;
          }
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }

      // Draw remaining text
      if (currentLine) {
        try {
          page.drawText(currentLine, {
            x: margin.left,
            y,
            size: fontSize,
            font,
            color: pdfLib.rgb(textColor.r, textColor.g, textColor.b),
          });
        } catch {
          // Skip if drawing fails
        }

        y -= lineHeight;
        if (y < margin.bottom) {
          page = pdfDoc.addPage([pageWidth, pageHeight]);
          y = pageHeight - margin.top;
        }
      }
    }
  }

  private generateOutputFilename(files: File[]): string {
    if (files.length === 1) {
      const baseName = files[0].name.replace(/\.[^/.]+$/, '');
      return `${baseName}.pdf`;
    }
    return `text_${files.length}_files.pdf`;
  }

  protected getAcceptedTypes(): string[] {
    return ['text/plain', '.txt'];
  }
}

export function createTextToPDFProcessor(): TextToPDFProcessor {
  return new TextToPDFProcessor();
}

export async function textToPDF(
  files: File[],
  options?: Partial<TextToPDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createTextToPDFProcessor();
  return processor.process(
    {
      files,
      options: options || {},
    },
    onProgress
  );
}

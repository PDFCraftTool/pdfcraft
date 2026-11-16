/**
 * PDF Page Numbers Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { getPageView } from '../page-view';

export interface PageNumberOptions {
  position?: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
  format?: 'number' | 'roman' | 'page-of-total' | 'custom';
  startNumber?: number;
  skipPages?: number[];
  fontSize?: number;
  fontColor?: string;
  margin?: number;
  skipFirstPage?: boolean;
  prefix?: string;
  suffix?: string;
  customFormat?: string;
  // Odd/Even page settings
  pageMode?: 'all' | 'odd-only' | 'even-only' | 'odd-even-different';
  oddPosition?: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
  evenPosition?: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
}

export class PageNumbersProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const pageNumOptions: PageNumberOptions = {
      position: 'bottom-center',
      format: 'number',
      startNumber: 1,
      fontSize: 12,
      fontColor: '#000000',
      margin: 30,
      skipFirstPage: false,
      prefix: '',
      suffix: '',
      customFormat: 'Page {page} of {total}',
      ...options as PageNumberOptions,
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

      const font = await pdf.embedFont(pdfLib.StandardFonts.Helvetica);
      const totalPages = pdf.getPageCount();
      const skipSet = new Set(pageNumOptions.skipPages || []);

      // Parse font color from hex
      const colorHex = pageNumOptions.fontColor || '#000000';
      const r = parseInt(colorHex.slice(1, 3), 16) / 255;
      const g = parseInt(colorHex.slice(3, 5), 16) / 255;
      const b = parseInt(colorHex.slice(5, 7), 16) / 255;
      const color = pdfLib.rgb(r, g, b);

      this.updateProgress(30, 'Adding page numbers...');

      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageNum = i + 1;
        const isOddPage = pageNum % 2 === 1;
        const pageMode = pageNumOptions.pageMode || 'all';

        // Skip first page if option is set
        if (pageNumOptions.skipFirstPage && pageNum === 1) continue;

        // Skip pages in skipPages array
        if (skipSet.has(pageNum)) continue;

        // Handle page mode filtering
        if (pageMode === 'odd-only' && !isOddPage) continue;
        if (pageMode === 'even-only' && isOddPage) continue;

        const page = pdf.getPage(i);
        const { width, height, place } = getPageView(page);

        const displayNum = (pageNumOptions.startNumber || 1) + i - (pageNumOptions.skipFirstPage ? 1 : 0);
        const adjustedTotal = totalPages - (pageNumOptions.skipFirstPage ? 1 : 0);
        let text = '';

        switch (pageNumOptions.format) {
          case 'roman':
            text = toRoman(displayNum);
            break;
          case 'page-of-total':
            text = `Page ${displayNum} of ${adjustedTotal}`;
            break;
          case 'custom':
            text = (pageNumOptions.customFormat || 'Page {page} of {total}')
              .replace(/{page}/g, String(displayNum))
              .replace(/{total}/g, String(adjustedTotal));
            break;
          default:
            text = String(displayNum);
        }

        // Add prefix and suffix
        text = `${pageNumOptions.prefix || ''}${text}${pageNumOptions.suffix || ''}`;

        const fontSize = pageNumOptions.fontSize || 12;
        const margin = pageNumOptions.margin || 30;
        const textWidth = font.widthOfTextAtSize(text, fontSize);
        let x = 0, y = 0;

        // Determine position based on page mode and odd/even
        let effectivePosition = pageNumOptions.position || 'bottom-center';
        if (pageMode === 'odd-even-different') {
          if (isOddPage && pageNumOptions.oddPosition) {
            effectivePosition = pageNumOptions.oddPosition;
          } else if (!isOddPage && pageNumOptions.evenPosition) {
            effectivePosition = pageNumOptions.evenPosition;
          }
        }

        switch (effectivePosition) {
          case 'bottom-left':
            x = margin;
            y = margin;
            break;
          case 'bottom-right':
            x = width - textWidth - margin;
            y = margin;
            break;
          case 'top-center':
            x = (width - textWidth) / 2;
            y = height - margin;
            break;
          case 'top-left':
            x = margin;
            y = height - margin;
            break;
          case 'top-right':
            x = width - textWidth - margin;
            y = height - margin;
            break;
          default: // bottom-center
            x = (width - textWidth) / 2;
            y = margin;
        }

        const at = place(x, y);
        page.drawText(text, { x: at.x, y: at.y, size: fontSize, font, color, rotate: pdfLib.degrees(at.angle) });
        this.updateProgress(30 + (60 * (i + 1) / totalPages), `Processing page ${pageNum}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_numbered.pdf'), { pageCount: totalPages });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to add page numbers.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

function toRoman(num: number): string {
  const romanNumerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [value, symbol] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}

export function createPageNumbersProcessor(): PageNumbersProcessor {
  return new PageNumbersProcessor();
}

export async function addPageNumbers(file: File, options: PageNumberOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createPageNumbersProcessor();
  return processor.process({ files: [file], options: options as Record<string, unknown> }, onProgress);
}

/**
 * PDF Header & Footer Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface HeaderFooterOptions {
  header?: {
    left?: string;
    center?: string;
    right?: string;
  };
  footer?: {
    left?: string;
    center?: string;
    right?: string;
  };
  fontSize?: number;
  fontColor?: string;
  margin?: number;
  includePageNumber?: boolean;
  includeDate?: boolean;
  skipFirstPage?: boolean;
  pageRange?: string; // e.g., "1-5, 8, 10-12" or "all"
}

export class HeaderFooterProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const hfOptions: HeaderFooterOptions = {
      fontSize: 10,
      margin: 30,
      fontColor: '#000000',
      ...options as HeaderFooterOptions,
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
      const currentDate = new Date().toLocaleDateString();

      // Parse font color
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16) / 255,
          g: parseInt(result[2], 16) / 255,
          b: parseInt(result[3], 16) / 255
        } : { r: 0, g: 0, b: 0 };
      };
      const textColor = hexToRgb(hfOptions.fontColor || '#000000');

      // Parse page range
      const parsePageRange = (rangeStr: string | undefined, totalPages: number): Set<number> => {
        if (!rangeStr || rangeStr.toLowerCase() === 'all' || rangeStr.trim() === '') {
          return new Set(Array.from({ length: totalPages }, (_, i) => i));
        }
        const pages = new Set<number>();
        const ranges = rangeStr.split(',').map(s => s.trim());
        for (const range of ranges) {
          if (range.includes('-')) {
            const [start, end] = range.split('-').map(s => parseInt(s.trim()));
            if (!isNaN(start) && !isNaN(end)) {
              for (let i = Math.max(1, start); i <= Math.min(end, totalPages); i++) {
                pages.add(i - 1); // Convert to 0-indexed
              }
            }
          } else {
            const page = parseInt(range);
            if (!isNaN(page) && page >= 1 && page <= totalPages) {
              pages.add(page - 1); // Convert to 0-indexed
            }
          }
        }
        return pages;
      };
      const pagesToProcess = parsePageRange(hfOptions.pageRange, totalPages);

      this.updateProgress(30, 'Adding headers and footers...');

      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        // Skip pages not in range
        if (!pagesToProcess.has(i)) continue;
        if (hfOptions.skipFirstPage && i === 0) continue;

        const page = pdf.getPage(i);
        const { width, height } = page.getSize();
        const margin = hfOptions.margin || 30;
        const fontSize = hfOptions.fontSize || 10;
        const pageNum = i + 1;
        const color = pdfLib.rgb(textColor.r, textColor.g, textColor.b);

        // Helper to replace placeholders
        const replacePlaceholders = (text: string): string => {
          return text
            .replace(/{page}/g, String(pageNum))
            .replace(/{total}/g, String(totalPages))
            .replace(/{date}/g, currentDate);
        };

        // Draw header
        if (hfOptions.header) {
          const headerY = height - margin;

          if (hfOptions.header.left) {
            const text = replacePlaceholders(hfOptions.header.left);
            page.drawText(text, { x: margin, y: headerY, size: fontSize, font, color });
          }
          if (hfOptions.header.center) {
            const text = replacePlaceholders(hfOptions.header.center);
            const textWidth = font.widthOfTextAtSize(text, fontSize);
            page.drawText(text, { x: (width - textWidth) / 2, y: headerY, size: fontSize, font, color });
          }
          if (hfOptions.header.right) {
            const text = replacePlaceholders(hfOptions.header.right);
            const textWidth = font.widthOfTextAtSize(text, fontSize);
            page.drawText(text, { x: width - margin - textWidth, y: headerY, size: fontSize, font, color });
          }
        }

        // Draw footer
        if (hfOptions.footer) {
          const footerY = margin;

          if (hfOptions.footer.left) {
            const text = replacePlaceholders(hfOptions.footer.left);
            page.drawText(text, { x: margin, y: footerY, size: fontSize, font, color });
          }
          if (hfOptions.footer.center) {
            const text = replacePlaceholders(hfOptions.footer.center);
            const textWidth = font.widthOfTextAtSize(text, fontSize);
            page.drawText(text, { x: (width - textWidth) / 2, y: footerY, size: fontSize, font, color });
          }
          if (hfOptions.footer.right) {
            const text = replacePlaceholders(hfOptions.footer.right);
            const textWidth = font.widthOfTextAtSize(text, fontSize);
            page.drawText(text, { x: width - margin - textWidth, y: footerY, size: fontSize, font, color });
          }
        }

        this.updateProgress(30 + (60 * (i + 1) / totalPages), `Processing page ${pageNum}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_headerfooter.pdf'), { pageCount: totalPages });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to add header/footer.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createHeaderFooterProcessor(): HeaderFooterProcessor {
  return new HeaderFooterProcessor();
}

export async function addHeaderFooter(file: File, options: HeaderFooterOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createHeaderFooterProcessor();
  return processor.process({ files: [file], options: options as Record<string, unknown> }, onProgress);
}

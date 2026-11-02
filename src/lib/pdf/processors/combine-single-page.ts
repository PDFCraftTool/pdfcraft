/**
 * PDF Combine to Single Page Processor
 * Requirements: 5.1
 * 
 * Implements PDF page combination functionality using pdf-lib.
 * Stitches all pages into one continuous page (vertically or horizontally).
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { ensurePageContents } from '../page-contents';

/**
 * Combine orientation options
 */
export type CombineOrientation = 'vertical' | 'horizontal';

/**
 * Combine to single page options
 */
export interface CombineSinglePageOptions {
  /** Orientation for combining pages */
  orientation: CombineOrientation;
  /** Spacing between pages in points */
  spacing: number;
  /** Background color (hex) */
  backgroundColor: string;
  /** Add separator lines between pages */
  addSeparator: boolean;
  /** Separator line thickness in points */
  separatorThickness: number;
  /** Separator line color (hex) */
  separatorColor: string;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: CombineSinglePageOptions = {
  orientation: 'vertical',
  spacing: 0,
  backgroundColor: '#FFFFFF',
  addSeparator: false,
  separatorThickness: 0.5,
  separatorColor: '#000000',
};

/**
 * Combine to Single Page PDF Processor
 * Stitches all pages of a PDF into one continuous page.
 */
export class CombineSinglePagePDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and combine all pages into one
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const combineOptions: CombineSinglePageOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<CombineSinglePageOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required.',
        `Received ${files.length} file(s).`
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

      this.updateProgress(10, 'Loading source PDF...');

      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();

      // Load the source PDF
      let sourcePdf;
      try {
        sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, {
          ignoreEncryption: true,
        });
      } catch (error) {
        if (error instanceof Error && error.message.includes('encrypt')) {
          return this.createErrorOutput(
            PDFErrorCode.PDF_ENCRYPTED,
            'The PDF file is encrypted.',
            'Please decrypt the file first.'
          );
        }
        throw error;
      }

      const sourcePages = sourcePdf.getPages();
      const totalPages = sourcePages.length;
      this.updateProgress(15, `Source PDF has ${totalPages} pages.`);

      if (totalPages === 0) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_OPTIONS,
          'The PDF file has no pages.',
          'Please provide a PDF with at least one page.'
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      // Calculate dimensions
      const { orientation, spacing, backgroundColor, addSeparator, separatorThickness, separatorColor } = combineOptions;

      let maxWidth = 0;
      let maxHeight = 0;
      let totalWidth = 0;
      let totalHeight = 0;

      for (const page of sourcePages) {
        const { width, height } = page.getSize();
        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
        totalWidth += width;
        totalHeight += height;
      }

      // Calculate final page dimensions
      let finalWidth: number;
      let finalHeight: number;
      const totalSpacing = Math.max(0, totalPages - 1) * spacing;

      if (orientation === 'horizontal') {
        finalWidth = totalWidth + totalSpacing;
        finalHeight = maxHeight;
      } else {
        finalWidth = maxWidth;
        finalHeight = totalHeight + totalSpacing;
      }

      this.updateProgress(20, 'Creating combined page...');

      // Create new PDF
      const newPdf = await pdfLib.PDFDocument.create();
      const newPage = newPdf.addPage([finalWidth, finalHeight]);

      // Parse colors
      const bgColor = hexToRgb(backgroundColor);
      const sepColor = hexToRgb(separatorColor);

      // Draw background if not white
      if (backgroundColor.toUpperCase() !== '#FFFFFF') {
        newPage.drawRectangle({
          x: 0,
          y: 0,
          width: finalWidth,
          height: finalHeight,
          color: pdfLib.rgb(bgColor.r, bgColor.g, bgColor.b),
        });
      }

      // Pre-embed all pages at once to avoid duplicate font embedding
      // This is crucial for CJK PDFs where fonts can be very large
      this.updateProgress(20, 'Embedding pages...');
      const embeddedPages = await newPdf.embedPages(sourcePages.map(ensurePageContents));

      // Draw each embedded page
      const progressPerPage = 60 / totalPages;
      let currentX = 0;
      let currentY = finalHeight; // Start from top for vertical

      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        this.updateProgress(
          25 + (i * progressPerPage),
          `Processing page ${i + 1} of ${totalPages}...`
        );

        const sourcePage = sourcePages[i];
        const { width, height } = sourcePage.getSize();

        // Use pre-embedded page
        const embeddedPage = embeddedPages[i];

        if (orientation === 'horizontal') {
          // Center vertically
          const y = (finalHeight - height) / 2;
          newPage.drawPage(embeddedPage, {
            x: currentX,
            y,
            width,
            height,
          });

          // Draw separator if enabled and not the last page
          if (addSeparator && i < totalPages - 1) {
            const lineX = currentX + width + spacing / 2;
            newPage.drawLine({
              start: { x: lineX, y: 0 },
              end: { x: lineX, y: finalHeight },
              thickness: separatorThickness,
              color: pdfLib.rgb(sepColor.r, sepColor.g, sepColor.b),
            });
          }

          currentX += width + spacing;
        } else {
          // Vertical: draw from top to bottom
          currentY -= height;
          // Center horizontally
          const x = (finalWidth - width) / 2;
          newPage.drawPage(embeddedPage, {
            x,
            y: currentY,
            width,
            height,
          });

          // Draw separator if enabled and not the last page
          if (addSeparator && i < totalPages - 1) {
            const lineY = currentY - spacing / 2;
            newPage.drawLine({
              start: { x: 0, y: lineY },
              end: { x: finalWidth, y: lineY },
              thickness: separatorThickness,
              color: pdfLib.rgb(sepColor.r, sepColor.g, sepColor.b),
            });
          }

          currentY -= spacing;
        }
      }

      this.updateProgress(90, 'Saving PDF...');

      // Save the new PDF with object streams enabled for better compression
      const pdfBytes = await newPdf.save({
        useObjectStreams: true,
      });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        originalPageCount: totalPages,
        outputPageCount: 1,
        orientation,
        finalWidth,
        finalHeight,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to combine PDF pages.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Convert hex color to RGB (0-1 range)
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255,
    };
  }
  return { r: 1, g: 1, b: 1 }; // Default to white
}

/**
 * Get filename without extension
 */
function getFileNameWithoutExtension(filename: string): string {
  const lastDot = filename.lastIndexOf('.');
  if (lastDot === -1) return filename;
  return filename.slice(0, lastDot);
}

/**
 * Generate output filename
 */
function generateFilename(originalName: string): string {
  const baseName = getFileNameWithoutExtension(originalName);
  return `${baseName}_combined.pdf`;
}

/**
 * Create a new instance of the processor
 */
export function createCombineSinglePageProcessor(): CombineSinglePagePDFProcessor {
  return new CombineSinglePagePDFProcessor();
}

/**
 * Combine PDF pages to single page (convenience function)
 */
export async function combineSinglePage(
  file: File,
  options: Partial<CombineSinglePageOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createCombineSinglePageProcessor();
  return processor.process(
    {
      files: [file],
      options: options as Record<string, unknown>,
    },
    onProgress
  );
}

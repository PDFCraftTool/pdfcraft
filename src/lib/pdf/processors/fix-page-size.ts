/**
 * Fix Page Size Processor
 * Requirements: 5.1
 * 
 * Implements PDF page size standardization using pdf-lib.
 * Converts all pages to uniform dimensions.
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
 * Standard page sizes in points (72 points = 1 inch)
 */
export const PAGE_SIZES = {
  'a3': { width: 841.89, height: 1190.55, label: 'A3 (297 × 420 mm)' },
  'a4': { width: 595.28, height: 841.89, label: 'A4 (210 × 297 mm)' },
  'a5': { width: 419.53, height: 595.28, label: 'A5 (148 × 210 mm)' },
  'letter': { width: 612, height: 792, label: 'Letter (8.5 × 11 in)' },
  'legal': { width: 612, height: 1008, label: 'Legal (8.5 × 14 in)' },
  'tabloid': { width: 792, height: 1224, label: 'Tabloid (11 × 17 in)' },
  'executive': { width: 522, height: 756, label: 'Executive (7.25 × 10.5 in)' },
  'envelope-10': { width: 297, height: 684, label: '#10 Envelope (4.125 × 9.5 in)' },
  'custom': { width: 0, height: 0, label: 'Custom' },
} as const;

export type PageSizePreset = keyof typeof PAGE_SIZES;

/**
 * Content scaling mode
 */
export type ScaleMode = 'fit' | 'fill' | 'stretch' | 'center';

/**
 * Fix page size options
 */
export interface FixPageSizeOptions {
  /** Target page size preset */
  sizePreset: PageSizePreset;
  /** Custom width in points (when sizePreset is 'custom') */
  customWidth?: number;
  /** Custom height in points (when sizePreset is 'custom') */
  customHeight?: number;
  /** How to scale content */
  scaleMode: ScaleMode;
  /** Maintain aspect ratio when scaling */
  maintainAspectRatio: boolean;
  /** Page orientation */
  orientation: 'portrait' | 'landscape' | 'auto';
}


/**
 * Default fix page size options
 */
const DEFAULT_OPTIONS: FixPageSizeOptions = {
  sizePreset: 'a4',
  scaleMode: 'fit',
  maintainAspectRatio: true,
  orientation: 'auto',
};

/**
 * Fix Page Size Processor
 * Standardizes all pages in a PDF to uniform dimensions.
 */
export class FixPageSizeProcessor extends BasePDFProcessor {
  /**
   * Process PDF file and fix page sizes
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const fixOptions: FixPageSizeOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<FixPageSizeOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];

    try {
      this.updateProgress(5, 'Loading PDF library...');

      // Load pdf-lib
      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(10, 'Reading PDF file...');

      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      this.updateProgress(20, 'Loading PDF document...');

      // Load the source PDF
      const sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, {
        ignoreEncryption: true,
      });

      const pageCount = sourcePdf.getPageCount();

      if (pageCount === 0) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_MALFORMED,
          'The PDF file contains no pages.',
          'Please provide a valid PDF with at least one page.'
        );
      }

      this.updateProgress(30, 'Creating new document...');

      // Create a new PDF document
      const newPdf = await pdfLib.PDFDocument.create();

      // Determine target dimensions
      const targetDimensions = this.getTargetDimensions(fixOptions);

      this.updateProgress(40, 'Processing pages...');

      // Process each page
      for (let i = 0; i < pageCount; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        const progress = 40 + Math.floor((i / pageCount) * 50);
        this.updateProgress(progress, `Processing page ${i + 1} of ${pageCount}...`);

        // Get the source page. Pages with /Rotate (common in scans) are shown
        // turned in a viewer, so lay them out by their displayed size and draw
        // them turned the same way.
        const sourcePage = sourcePdf.getPage(i);
        const [embeddedPage] = await newPdf.embedPages([sourcePage]);
        const quarterTurns = ((sourcePage.getRotation().angle % 360) + 360) % 360 / 90;
        const turned = quarterTurns % 2 === 1;
        const sourceWidth = turned ? embeddedPage.height : embeddedPage.width;
        const sourceHeight = turned ? embeddedPage.width : embeddedPage.height;

        // Determine final dimensions based on orientation
        let finalWidth = targetDimensions.width;
        let finalHeight = targetDimensions.height;

        if (fixOptions.orientation === 'auto') {
          // Match source orientation
          const sourceIsLandscape = sourceWidth > sourceHeight;
          const targetIsLandscape = finalWidth > finalHeight;

          if (sourceIsLandscape !== targetIsLandscape) {
            [finalWidth, finalHeight] = [finalHeight, finalWidth];
          }
        } else if (fixOptions.orientation === 'landscape') {
          if (finalWidth < finalHeight) {
            [finalWidth, finalHeight] = [finalHeight, finalWidth];
          }
        } else if (fixOptions.orientation === 'portrait') {
          if (finalWidth > finalHeight) {
            [finalWidth, finalHeight] = [finalHeight, finalWidth];
          }
        }

        // Create new page with target dimensions
        const newPage = newPdf.addPage([finalWidth, finalHeight]);

        // Calculate scaling and positioning
        const { scale, x, y } = this.calculateTransform(
          sourceWidth,
          sourceHeight,
          finalWidth,
          finalHeight,
          fixOptions.scaleMode,
          fixOptions.maintainAspectRatio
        );

        // Draw the embedded page
        const shownWidth = sourceWidth * scale.x;
        const shownHeight = sourceHeight * scale.y;
        newPage.drawPage(embeddedPage, {
          // Origin of the unturned page so that, once turned clockwise by
          // /Rotate, it fills the box whose lower-left corner is (x, y).
          x: quarterTurns === 2 || quarterTurns === 3 ? x + shownWidth : x,
          y: quarterTurns === 1 || quarterTurns === 2 ? y + shownHeight : y,
          xScale: turned ? scale.y : scale.x,
          yScale: turned ? scale.x : scale.y,
          rotate: pdfLib.degrees(-quarterTurns * 90),
        });
      }

      this.updateProgress(90, 'Saving PDF...');

      // Save the new PDF
      const pdfBytes = await newPdf.save({ useObjectStreams: true });

      // Create blob from the Uint8Array
      const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateFixedFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount,
        targetWidth: targetDimensions.width,
        targetHeight: targetDimensions.height,
        sizePreset: fixOptions.sizePreset,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to fix page sizes.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get target dimensions based on options
   */
  private getTargetDimensions(options: FixPageSizeOptions): { width: number; height: number } {
    if (options.sizePreset === 'custom') {
      return {
        width: options.customWidth || 595.28, // Default to A4 width
        height: options.customHeight || 841.89, // Default to A4 height
      };
    }

    const preset = PAGE_SIZES[options.sizePreset];
    return {
      width: preset.width,
      height: preset.height,
    };
  }

  /**
   * Calculate transformation for content placement
   */
  private calculateTransform(
    sourceWidth: number,
    sourceHeight: number,
    targetWidth: number,
    targetHeight: number,
    scaleMode: ScaleMode,
    maintainAspectRatio: boolean
  ): { scale: { x: number; y: number }; x: number; y: number } {
    let scaleX = targetWidth / sourceWidth;
    let scaleY = targetHeight / sourceHeight;
    let x = 0;
    let y = 0;

    switch (scaleMode) {
      case 'fit':
        // Scale to fit within target, maintaining aspect ratio
        if (maintainAspectRatio) {
          const scale = Math.min(scaleX, scaleY);
          scaleX = scale;
          scaleY = scale;
        }
        // Center the content
        x = (targetWidth - sourceWidth * scaleX) / 2;
        y = (targetHeight - sourceHeight * scaleY) / 2;
        break;

      case 'fill':
        // Scale to fill target, maintaining aspect ratio (may crop)
        if (maintainAspectRatio) {
          const scale = Math.max(scaleX, scaleY);
          scaleX = scale;
          scaleY = scale;
        }
        // Center the content
        x = (targetWidth - sourceWidth * scaleX) / 2;
        y = (targetHeight - sourceHeight * scaleY) / 2;
        break;

      case 'stretch':
        // Stretch to fill target (ignores aspect ratio)
        // scaleX and scaleY are already set correctly
        x = 0;
        y = 0;
        break;

      case 'center':
        // No scaling, just center
        scaleX = 1;
        scaleY = 1;
        x = (targetWidth - sourceWidth) / 2;
        y = (targetHeight - sourceHeight) / 2;
        break;
    }

    return {
      scale: { x: scaleX, y: scaleY },
      x,
      y,
    };
  }

  /**
   * Get accepted file types
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the fixed PDF
 */
function generateFixedFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_fixed.pdf`;
}

/**
 * Create a new instance of the fix page size processor
 */
export function createFixPageSizeProcessor(): FixPageSizeProcessor {
  return new FixPageSizeProcessor();
}

/**
 * Fix page sizes in a PDF file (convenience function)
 */
export async function fixPageSize(
  file: File,
  options?: Partial<FixPageSizeOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createFixPageSizeProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

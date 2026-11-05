/**
 * PDF Add Blank Page Processor
 * Requirements: 5.1
 * 
 * Implements adding blank pages to a PDF using pdf-lib.
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
 * Options for adding blank pages
 */
export interface AddBlankPageOptions {
  /** Position to insert blank pages (0-based, 0 = beginning) */
  position: number;
  /** Number of blank pages to add */
  count: number;
  /** Page size (defaults to first page size) */
  pageSize?: { width: number; height: number };
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: AddBlankPageOptions = {
  position: 0,
  count: 1,
};

/**
 * Add Blank Page PDF Processor
 */
export class AddBlankPagePDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and add blank pages
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const addOptions: AddBlankPageOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<AddBlankPageOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required.',
        `Received ${files.length} file(s).`
      );
    }

    // Validate count
    if (addOptions.count < 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'At least 1 blank page must be added.',
        `Received count: ${addOptions.count}`
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

      const totalPages = sourcePdf.getPageCount();
      this.updateProgress(20, `Source PDF has ${totalPages} pages.`);

      // Validate position
      if (addOptions.position < 0 || addOptions.position > totalPages) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_PAGE_RANGE,
          `Position must be between 0 and ${totalPages}.`,
          `Received position: ${addOptions.position}`
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(30, 'Preparing blank pages...');

      // Get page size from first page or use provided size
      const firstPage = sourcePdf.getPage(0);
      const { width, height } = addOptions.pageSize || firstPage.getSize();

      this.updateProgress(50, `Adding ${addOptions.count} blank page(s)...`);

      // Insert into the source document itself (rather than copying every page
      // into a new one) so forms, outlines, links, attachments, page labels
      // and metadata are kept.
      for (let i = 0; i < addOptions.count; i++) {
        sourcePdf.insertPage(addOptions.position + i, [width, height]);
      }

      this.updateProgress(90, 'Saving PDF...');

      // Save the new PDF
      const pdfBytes = await sourcePdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateFilename(file.name, addOptions.count);

      return this.createSuccessOutput(blob, outputFilename, {
        originalPageCount: totalPages,
        addedPageCount: addOptions.count,
        newPageCount: totalPages + addOptions.count,
        insertPosition: addOptions.position,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to add blank pages to PDF.',
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
function generateFilename(originalName: string, count: number): string {
  const baseName = getFileNameWithoutExtension(originalName);
  return `${baseName}_${count}_blank_pages_added.pdf`;
}

/**
 * Create a new instance of the processor
 */
export function createAddBlankPageProcessor(): AddBlankPagePDFProcessor {
  return new AddBlankPagePDFProcessor();
}

/**
 * Add blank pages to a PDF file (convenience function)
 */
export async function addBlankPages(
  file: File,
  position: number,
  count: number,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createAddBlankPageProcessor();
  return processor.process(
    {
      files: [file],
      options: { position, count } as Record<string, unknown>,
    },
    onProgress
  );
}

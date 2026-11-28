/**
 * PDF Reverse Pages Processor
 * Requirements: 5.1
 * 
 * Implements reversing page order in a PDF using pdf-lib.
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
 * Reverse Pages PDF Processor
 */
export class ReversePagesPDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and reverse page order
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files } = input;

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

      const totalPages = sourcePdf.getPageCount();
      this.updateProgress(20, `Source PDF has ${totalPages} pages.`);

      if (totalPages < 2) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_OPTIONS,
          'PDF must have at least 2 pages to reverse.',
          `The PDF has only ${totalPages} page(s).`
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(30, 'Reversing page order...');

      // Reorder the pages inside the source document instead of copying them
      // into a new one, so forms, outlines, links, attachments, page labels
      // and metadata survive and still point at the same page objects.
      const pages = sourcePdf.getPages();

      this.updateProgress(50, 'Moving pages into reverse order...');

      for (let i = totalPages - 1; i >= 0; i--) {
        sourcePdf.removePage(i);
      }
      for (let i = totalPages - 1; i >= 0; i--) {
        sourcePdf.addPage(pages[i]);
      }

      this.updateProgress(90, 'Saving PDF...');

      // Save the new PDF
      const pdfBytes = await sourcePdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount: totalPages,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to reverse PDF pages.',
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
function generateFilename(originalName: string): string {
  const baseName = getFileNameWithoutExtension(originalName);
  return `${baseName}_reversed.pdf`;
}

/**
 * Create a new instance of the processor
 */
export function createReverseProcessor(): ReversePagesPDFProcessor {
  return new ReversePagesPDFProcessor();
}

/**
 * Reverse pages in a PDF file (convenience function)
 */
export async function reversePages(
  file: File,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createReverseProcessor();
  return processor.process(
    {
      files: [file],
      options: {},
    },
    onProgress
  );
}

/**
 * PDF Organize Processor
 * Requirements: 5.1
 * 
 * Implements PDF page reordering functionality using pdf-lib.
 * Supports drag-drop page reorder with preview.
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
 * Organize options for page reordering
 */
export interface OrganizeOptions {
  /** New page order (1-based page numbers) */
  pageOrder: number[];
}

/**
 * Default organize options
 */
const DEFAULT_ORGANIZE_OPTIONS: OrganizeOptions = {
  pageOrder: [],
};

/**
 * Organize PDF Processor
 * Reorders pages in a PDF document based on specified order.
 */
export class OrganizePDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and reorder its pages
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const organizeOptions: OrganizeOptions = {
      ...DEFAULT_ORGANIZE_OPTIONS,
      ...(options as Partial<OrganizeOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required for organizing.',
        `Received ${files.length} file(s).`
      );
    }

    // Validate page order is provided
    if (!organizeOptions.pageOrder || organizeOptions.pageOrder.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Page order is required for organizing.',
        'Please specify the new page order.'
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
          ignoreEncryption: false,
        });
      } catch (error) {
        if (error instanceof Error && error.message.includes('encrypt')) {
          return this.createErrorOutput(
            PDFErrorCode.PDF_ENCRYPTED,
            'The PDF file is encrypted.',
            'Please decrypt the file before organizing.'
          );
        }
        throw error;
      }

      const totalPages = sourcePdf.getPageCount();
      this.updateProgress(20, `Source PDF has ${totalPages} pages.`);

      // Validate page order
      const validationError = validatePageOrder(organizeOptions.pageOrder, totalPages);
      if (validationError) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_PAGE_RANGE,
          validationError,
          `The PDF has ${totalPages} pages.`
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(30, 'Creating new document...');

      // Try to use PyMuPDF for high-fidelity organizing
      try {
        const { loadPyMuPDF } = await import('../pymupdf-loader');
        const pymupdf = await loadPyMuPDF();
        
        if (pymupdf && typeof pymupdf.extractPages === 'function') {
          this.updateProgress(40, 'Using high-fidelity engine for organizing...');
          // extractPages can be used for organizing too by passing the new page order
          const blob = await pymupdf.extractPages(file, organizeOptions.pageOrder);
          
          this.updateProgress(100, 'Complete!');
          const outputFilename = generateOrganizedFilename(file.name);
          
          return this.createSuccessOutput(blob, outputFilename, {
            pageCount: organizeOptions.pageOrder.length,
            originalPageCount: totalPages,
          });
        } else {
          throw new Error('PyMuPDF extract/organize not available');
        }
      } catch (pymupdfErr) {
        console.warn('PyMuPDF organize failed or not available, falling back to pdf-lib:', pymupdfErr);
        
        // Fallback to pdf-lib. Reorder inside the source document instead of
        // copying pages into a new one, so forms, outlines, links, attachments,
        // page labels and metadata are kept. A page used more than once keeps
        // the original for its first occurrence and gets a copy for the rest.
        const sourcePages = sourcePdf.getPages();
        const used = new Set<number>();
        const orderedPages = [];

        for (let i = 0; i < organizeOptions.pageOrder.length; i++) {
          if (this.checkCancelled()) {
            return this.createErrorOutput(
              PDFErrorCode.PROCESSING_CANCELLED,
              'Processing was cancelled.'
            );
          }

          const pageNum = organizeOptions.pageOrder[i];
          const pageIndex = pageNum - 1; // Convert to 0-based index

          this.updateProgress(
            30 + (i * 60 / organizeOptions.pageOrder.length),
            `Arranging page ${pageNum}...`
          );

          if (used.has(pageIndex)) {
            const [copiedPage] = await sourcePdf.copyPages(sourcePdf, [pageIndex]);
            orderedPages.push(copiedPage);
          } else {
            used.add(pageIndex);
            orderedPages.push(sourcePages[pageIndex]);
          }
        }

        for (let i = totalPages - 1; i >= 0; i--) {
          sourcePdf.removePage(i);
        }
        orderedPages.forEach(page => sourcePdf.addPage(page));

        this.updateProgress(90, 'Saving reorganized PDF...');

        // Save the new PDF
        const pdfBytes = await sourcePdf.save({ useObjectStreams: true });
        const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

        this.updateProgress(100, 'Complete!');

        // Generate output filename
        const outputFilename = generateOrganizedFilename(file.name);

        return this.createSuccessOutput(blob, outputFilename, {
          pageCount: organizeOptions.pageOrder.length,
          originalPageCount: totalPages,
        });
      }
    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to organize PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for organize processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Validate page order array
 */
function validatePageOrder(pageOrder: number[], totalPages: number): string | null {
  if (pageOrder.length === 0) {
    return 'Page order cannot be empty.';
  }

  for (let i = 0; i < pageOrder.length; i++) {
    const pageNum = pageOrder[i];

    if (!Number.isInteger(pageNum)) {
      return `Invalid page number at position ${i + 1}: ${pageNum}`;
    }

    if (pageNum < 1) {
      return `Page number must be at least 1. Found ${pageNum} at position ${i + 1}.`;
    }

    if (pageNum > totalPages) {
      return `Page ${pageNum} exceeds total pages (${totalPages}).`;
    }
  }

  return null;
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
 * Generate a filename for the organized PDF
 */
function generateOrganizedFilename(originalName: string): string {
  const baseName = getFileNameWithoutExtension(originalName);
  return `${baseName}_organized.pdf`;
}

/**
 * Create a new instance of the organize processor
 */
export function createOrganizeProcessor(): OrganizePDFProcessor {
  return new OrganizePDFProcessor();
}

/**
 * Organize a PDF file (convenience function)
 */
export async function organizePDF(
  file: File,
  pageOrder: number[],
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createOrganizeProcessor();
  return processor.process(
    {
      files: [file],
      options: { pageOrder },
    },
    onProgress
  );
}

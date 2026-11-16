/**
 * PDF Extract Pages Processor
 * Requirements: 5.1
 * 
 * Implements PDF page extraction functionality using pdf-lib.
 * Supports extracting specific pages into a new PDF.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
  PageRange,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

/**
 * Extract options for page extraction
 */
export interface ExtractOptions {
  /** Pages to extract (1-based page numbers) */
  pages: number[];
  /**
   * Selection text such as "1-5, 8" or "odd".
   * Parsed after the PDF page count is known, so parity keywords cover the whole file.
   */
  pageSelection?: string;
}

/**
 * Default extract options
 */
const DEFAULT_EXTRACT_OPTIONS: ExtractOptions = {
  pages: [],
};

/**
 * Extract Pages PDF Processor
 * Extracts specific pages from a PDF document into a new PDF.
 */
export class ExtractPagesPDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and extract specified pages
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const extractOptions: ExtractOptions = {
      ...DEFAULT_EXTRACT_OPTIONS,
      ...(options as Partial<ExtractOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required for extraction.',
        `Received ${files.length} file(s).`
      );
    }

    const pageSelection = extractOptions.pageSelection?.trim() ?? '';

    // Validate pages are provided
    if ((!extractOptions.pages || extractOptions.pages.length === 0) && pageSelection.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'At least one page is required for extraction.',
        'Please specify pages to extract.'
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
            'Please decrypt the file before extracting pages.'
          );
        }
        throw error;
      }

      const totalPages = sourcePdf.getPageCount();
      this.updateProgress(20, `Source PDF has ${totalPages} pages.`);

      const selectedPages = pageSelection.length > 0
        ? parsePageSelection(pageSelection, totalPages)
        : extractOptions.pages;

      if (selectedPages.length === 0) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_PAGE_RANGE,
          'No pages matched the selection.',
          `The PDF has ${totalPages} pages.`
        );
      }

      // Validate pages
      const validationError = validatePages(selectedPages, totalPages);
      if (validationError) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_PAGE_RANGE,
          validationError,
          `The PDF has ${totalPages} pages.`
        );
      }

      // Remove duplicates and sort
      const uniquePages = [...new Set(selectedPages)].sort((a, b) => a - b);

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(30, 'Creating new document...');

      // Try to use PyMuPDF for high-fidelity extraction
      try {
        const { loadPyMuPDF } = await import('../pymupdf-loader');
        const pymupdf = await loadPyMuPDF();
        
        if (pymupdf && typeof pymupdf.extractPages === 'function') {
          this.updateProgress(40, 'Using high-fidelity engine for extraction...');
          const blob = await pymupdf.extractPages(file, uniquePages);
          
          this.updateProgress(100, 'Complete!');
          const outputFilename = generateExtractedFilename(file.name, uniquePages);
          
          return this.createSuccessOutput(blob, outputFilename, {
            extractedPageCount: uniquePages.length,
            originalPageCount: totalPages,
            extractedPages: uniquePages,
          });
        } else {
          throw new Error('PyMuPDF extract not available');
        }
      } catch (pymupdfErr) {
        console.warn('PyMuPDF extract failed or not available, falling back to pdf-lib:', pymupdfErr);
        
        // Fallback to pdf-lib: drop the pages that were not selected from the
        // source document itself, so forms, links, page labels, metadata and
        // attachments survive (rebuilding the document would lose them).
        const keep = new Set(uniquePages.map(pageNum => pageNum - 1));
        const progressPerPage = 60 / totalPages;

        for (let pageIndex = totalPages - 1; pageIndex >= 0; pageIndex--) {
          if (this.checkCancelled()) {
            return this.createErrorOutput(
              PDFErrorCode.PROCESSING_CANCELLED,
              'Processing was cancelled.'
            );
          }

          this.updateProgress(
            30 + ((totalPages - 1 - pageIndex) * progressPerPage),
            `Extracting page ${pageIndex + 1}...`
          );

          if (!keep.has(pageIndex)) {
            sourcePdf.removePage(pageIndex);
          }
        }

        this.updateProgress(90, 'Saving extracted pages...');

        // Save the new PDF
        const pdfBytes = await sourcePdf.save({ useObjectStreams: true });
        const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

        this.updateProgress(100, 'Complete!');

        // Generate output filename
        const outputFilename = generateExtractedFilename(file.name, uniquePages);

        return this.createSuccessOutput(blob, outputFilename, {
          extractedPageCount: uniquePages.length,
          originalPageCount: totalPages,
          extractedPages: uniquePages,
        });
      }
    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to extract pages from PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for extract processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Validate pages array
 */
function validatePages(pages: number[], totalPages: number): string | null {
  if (pages.length === 0) {
    return 'No pages specified for extraction.';
  }

  for (let i = 0; i < pages.length; i++) {
    const pageNum = pages[i];

    if (!Number.isInteger(pageNum)) {
      return `Invalid page number: ${pageNum}`;
    }

    if (pageNum < 1) {
      return `Page number must be at least 1. Found ${pageNum}.`;
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
 * Generate a filename for the extracted PDF
 */
function generateExtractedFilename(originalName: string, pages: number[]): string {
  const baseName = getFileNameWithoutExtension(originalName);

  if (pages.length === 1) {
    return `${baseName}_page_${pages[0]}.pdf`;
  }

  if (pages.length <= 3) {
    return `${baseName}_pages_${pages.join('-')}.pdf`;
  }

  return `${baseName}_${pages.length}_pages_extracted.pdf`;
}

/**
 * Parse page selection string into array of page numbers.
 * Supports formats like: "1,3,5", "1-5", "1-3,5,7-10", "odd", "even".
 * "odd" and "even" are whole tokens and can be combined with other pages.
 */
export function parsePageSelection(selectionString: string, totalPages: number): number[] {
  const pages: number[] = [];
  const parts = selectionString.split(',').map(s => s.trim()).filter(s => s.length > 0);

  const pushParity = (parity: 'odd' | 'even') => {
    const start = parity === 'odd' ? 1 : 2;
    for (let i = start; i <= totalPages; i += 2) {
      pages.push(i);
    }
  };

  for (const part of parts) {
    const keyword = part.toLowerCase();
    if (keyword === 'odd' || keyword === 'even') {
      pushParity(keyword);
      continue;
    }

    if (part.includes('-')) {
      const [startStr, endStr] = part.split('-').map(s => s.trim());
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);

      if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = start; i <= Math.min(end, totalPages); i++) {
          if (i >= 1) pages.push(i);
        }
      }
    } else {
      const pageNum = parseInt(part, 10);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        pages.push(pageNum);
      }
    }
  }

  // Remove duplicates and sort
  return [...new Set(pages)].sort((a, b) => a - b);
}

/**
 * Create a new instance of the extract processor
 */
export function createExtractProcessor(): ExtractPagesPDFProcessor {
  return new ExtractPagesPDFProcessor();
}

/**
 * Extract pages from a PDF file (convenience function)
 */
export async function extractPages(
  file: File,
  pages: number[],
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createExtractProcessor();
  return processor.process(
    {
      files: [file],
      options: { pages },
    },
    onProgress
  );
}

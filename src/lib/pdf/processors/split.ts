/**
 * PDF Split Processor
 * Requirements: 5.1
 * 
 * Implements PDF splitting functionality using pdf-lib.
 * Supports splitting by page ranges with multiple output files.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
  SplitOptions,
  PageRange,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor, createPDFError } from '../processor';
import { loadPdfLib } from '../loader';

/**
 * Default split options
 */
const DEFAULT_SPLIT_OPTIONS: SplitOptions = {
  ranges: [],
  outputFormat: 'multiple',
};

/**
 * Split PDF Processor
 * Splits a PDF file into multiple documents based on page ranges.
 */
export class SplitPDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and split it into multiple documents
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const splitOptions: SplitOptions = {
      ...DEFAULT_SPLIT_OPTIONS,
      ...(options as Partial<SplitOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required for splitting.',
        `Received ${files.length} file(s).`
      );
    }

    // Validate we have at least one range
    if (!splitOptions.ranges || splitOptions.ranges.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'At least one page range is required for splitting.',
        'Please specify page ranges to extract.'
      );
    }

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
            'Please decrypt the file before splitting.'
          );
        }
        throw error;
      }

      const totalPages = sourcePdf.getPageCount();
      this.updateProgress(15, `Source PDF has ${totalPages} pages.`);

      // Validate all page ranges
      const validationError = validatePageRanges(splitOptions.ranges, totalPages);
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

      // Process each range
      const outputBlobs: Blob[] = [];
      const outputFilenames: string[] = [];
      const progressPerRange = 75 / splitOptions.ranges.length;

      // Try to use PyMuPDF for high-fidelity splitting if possible
      // This preserves fonts and complex structures better than pdf-lib
      try {
        const { loadPyMuPDF } = await import('../pymupdf-loader');
        const pymupdf = await loadPyMuPDF();
        
        if (pymupdf && typeof pymupdf.splitPdf === 'function') {
          this.updateProgress(20, 'Using high-fidelity engine for splitting...');
          const blobs = await pymupdf.splitPdf(file, splitOptions.ranges);
          
          for (let i = 0; i < blobs.length; i++) {
            const range = splitOptions.ranges[i];
            outputBlobs.push(blobs[i]);
            const filename = generateSplitFilename(file.name, range, i + 1, splitOptions.ranges.length);
            outputFilenames.push(filename);
            this.updateProgress(20 + (i + 1) * progressPerRange, `Processed part ${i + 1} of ${blobs.length}`);
          }
        } else {
          throw new Error('PyMuPDF split not available');
        }
      } catch (pymupdfErr) {
        console.warn('PyMuPDF split failed or not available, falling back to pdf-lib:', pymupdfErr);
        
        // Fallback to pdf-lib (original logic)
        for (let i = 0; i < splitOptions.ranges.length; i++) {
          if (this.checkCancelled()) {
            return this.createErrorOutput(
              PDFErrorCode.PROCESSING_CANCELLED,
              'Processing was cancelled.'
            );
          }

          const range = splitOptions.ranges[i];
          const rangeProgress = 15 + (i * progressPerRange);

          this.updateProgress(
            rangeProgress,
            `Extracting pages ${range.start}-${range.end}...`
          );

          // Create a new PDF for this range
          const newPdf = await pdfLib.PDFDocument.create();

          // Get page indices (0-based)
          const pageIndices: number[] = [];
          for (let pageNum = range.start; pageNum <= range.end; pageNum++) {
            pageIndices.push(pageNum - 1); // Convert to 0-based index
          }

          // Copy pages from source to new document
          const copiedPages = await newPdf.copyPages(sourcePdf, pageIndices);
          for (const page of copiedPages) {
            newPdf.addPage(page);
          }

          // Save the new PDF
          const pdfBytes = await newPdf.save({ useObjectStreams: true });
          const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
          outputBlobs.push(blob);

          // Generate filename for this range
          const filename = generateSplitFilename(file.name, range, i + 1, splitOptions.ranges.length);
          outputFilenames.push(filename);
        }
      }

      this.updateProgress(95, 'Finalizing...');

      // Return based on output format
      if (splitOptions.outputFormat === 'single' && outputBlobs.length === 1) {
        this.updateProgress(100, 'Complete!');
        return this.createSuccessOutput(outputBlobs[0], outputFilenames[0], {
          pageCount: splitOptions.ranges[0].end - splitOptions.ranges[0].start + 1,
          rangeCount: 1,
          sourcePageCount: totalPages,
        });
      }

      this.updateProgress(100, 'Complete!');

      return {
        success: true,
        result: outputBlobs,
        filename: outputFilenames.join(', '),
        metadata: {
          rangeCount: splitOptions.ranges.length,
          sourcePageCount: totalPages,
          outputFiles: outputFilenames,
        },
      };

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to split PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for split processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Validate page ranges against total page count
 */
function validatePageRanges(ranges: PageRange[], totalPages: number): string | null {
  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i];

    // Check for valid range values
    if (!Number.isInteger(range.start) || !Number.isInteger(range.end)) {
      return 'Range ' + (i + 1) + ': Page numbers must be finite integers.';
    }

    if (range.start < 1) {
      return `Range ${i + 1}: Start page must be at least 1.`;
    }

    if (range.end < range.start) {
      return `Range ${i + 1}: End page (${range.end}) cannot be less than start page (${range.start}).`;
    }

    if (range.end > totalPages) {
      return `Range ${i + 1}: End page (${range.end}) exceeds total pages (${totalPages}).`;
    }

    if (range.start > totalPages) {
      return `Range ${i + 1}: Start page (${range.start}) exceeds total pages (${totalPages}).`;
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
 * Generate a filename for a split PDF
 */
function generateSplitFilename(
  originalName: string,
  range: PageRange,
  rangeIndex: number,
  totalRanges: number
): string {
  const baseName = getFileNameWithoutExtension(originalName);

  if (totalRanges === 1) {
    if (range.start === range.end) {
      return `${baseName}_page_${range.start}.pdf`;
    }
    return `${baseName}_pages_${range.start}-${range.end}.pdf`;
  }

  if (range.start === range.end) {
    return `${baseName}_part${rangeIndex}_page_${range.start}.pdf`;
  }
  return `${baseName}_part${rangeIndex}_pages_${range.start}-${range.end}.pdf`;
}

/**
 * Parse a page range string into PageRange objects
 * Supports formats like: "1-5", "1,3,5", "1-3,5,7-10"
 */
export function parsePageRanges(rangeString: string, totalPages: number): PageRange[] {
  const ranges: PageRange[] = [];
  const parts = rangeString.split(',').map(s => s.trim()).filter(s => s.length > 0);

  for (const part of parts) {
    if (part.includes('-')) {
      const [startStr, endStr] = part.split('-').map(s => s.trim());
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);

      if (!isNaN(start) && !isNaN(end)) {
        ranges.push({ start, end });
      }
    } else {
      const pageNum = parseInt(part, 10);
      if (!isNaN(pageNum)) {
        ranges.push({ start: pageNum, end: pageNum });
      }
    }
  }

  return ranges;
}

/**
 * Create ranges to split every N pages
 */
export function createSplitEveryNPages(totalPages: number, n: number): PageRange[] {
  const ranges: PageRange[] = [];

  for (let start = 1; start <= totalPages; start += n) {
    const end = Math.min(start + n - 1, totalPages);
    ranges.push({ start, end });
  }

  return ranges;
}

/**
 * Create ranges to split into individual pages
 */
export function createSplitEveryPage(totalPages: number): PageRange[] {
  return createSplitEveryNPages(totalPages, 1);
}

/**
 * Create ranges for even and odd pages
 * Returns two ranges: one for odd pages, one for even pages
 */
export function createSplitByEvenOdd(totalPages: number): { odd: PageRange[], even: PageRange[] } {
  const oddRanges: PageRange[] = [];
  const evenRanges: PageRange[] = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i % 2 === 1) {
      oddRanges.push({ start: i, end: i });
    } else {
      evenRanges.push({ start: i, end: i });
    }
  }

  return { odd: oddRanges, even: evenRanges };
}

/**
 * Create ranges to split PDF into N equal parts
 */
export function createSplitNTimes(totalPages: number, n: number): PageRange[] {
  if (n <= 0 || n > totalPages) {
    return [{ start: 1, end: totalPages }];
  }

  const ranges: PageRange[] = [];
  const pagesPerPart = Math.floor(totalPages / n);
  const remainder = totalPages % n;

  let currentPage = 1;
  for (let i = 0; i < n; i++) {
    // Distribute remainder pages across the first parts
    const extraPage = i < remainder ? 1 : 0;
    const endPage = currentPage + pagesPerPart - 1 + extraPage;
    ranges.push({ start: currentPage, end: Math.min(endPage, totalPages) });
    currentPage = endPage + 1;
  }

  return ranges;
}

/**
 * Bookmark information extracted from PDF
 */
export interface BookmarkInfo {
  title: string;
  pageNumber: number;
  children?: BookmarkInfo[];
}

/**
 * Create ranges based on PDF bookmarks
 * Each top-level bookmark becomes a split point
 * @param bookmarks - Array of bookmark info with page numbers
 * @param totalPages - Total number of pages in the PDF
 * @returns Array of page ranges for splitting
 */
export function createSplitByBookmarks(
  bookmarks: BookmarkInfo[],
  totalPages: number
): { ranges: PageRange[], labels: string[] } {
  if (!bookmarks || bookmarks.length === 0) {
    return {
      ranges: [{ start: 1, end: totalPages }],
      labels: ['Complete Document']
    };
  }

  // Get unique sorted page numbers from top-level bookmarks
  const sortedBookmarks = [...bookmarks]
    .filter(b => b.pageNumber >= 1 && b.pageNumber <= totalPages)
    .sort((a, b) => a.pageNumber - b.pageNumber);

  if (sortedBookmarks.length === 0) {
    return {
      ranges: [{ start: 1, end: totalPages }],
      labels: ['Complete Document']
    };
  }

  const ranges: PageRange[] = [];
  const labels: string[] = [];

  for (let i = 0; i < sortedBookmarks.length; i++) {
    const current = sortedBookmarks[i];
    const next = sortedBookmarks[i + 1];

    const start = current.pageNumber;
    const end = next ? next.pageNumber - 1 : totalPages;

    // Only add if range is valid (at least 1 page)
    if (end >= start) {
      ranges.push({ start, end });
      labels.push(current.title);
    }
  }

  // Handle case where first bookmark doesn't start at page 1
  if (sortedBookmarks[0].pageNumber > 1) {
    ranges.unshift({ start: 1, end: sortedBookmarks[0].pageNumber - 1 });
    labels.unshift('Introduction');
  }

  return { ranges, labels };
}

/**
 * Create a new instance of the split processor
 */
export function createSplitProcessor(): SplitPDFProcessor {
  return new SplitPDFProcessor();
}

/**
 * Split a PDF file (convenience function)
 */
export async function splitPDF(
  file: File,
  options?: Partial<SplitOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createSplitProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

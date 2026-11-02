/**
 * PDF Posterize Processor
 * Requirements: 5.1
 * 
 * Implements PDF posterization functionality using pdf-lib.
 * Splits large PDF pages into smaller tiles for printing as posters.
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
 * Posterize options
 */
export interface PosterizeOptions {
  /** Number of rows in the grid */
  rows: number;
  /** Number of columns in the grid */
  cols: number;
  /** Output page size */
  pageSize: 'A4' | 'Letter' | 'Legal' | 'A3';
  /** Page orientation */
  orientation: 'portrait' | 'landscape' | 'auto';
  /** Overlap between tiles in points */
  overlap: number;
  /** Scaling mode */
  scalingMode: 'fit' | 'fill';
  /** Page range to process (e.g., "1-5, 8, 10-15") */
  pageRange: string;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PosterizeOptions = {
  rows: 2,
  cols: 2,
  pageSize: 'A4',
  orientation: 'auto',
  overlap: 0,
  scalingMode: 'fit',
  pageRange: '',
};

/**
 * Page sizes in points
 */
const PAGE_SIZES: Record<string, [number, number]> = {
  A4: [595.28, 841.89],
  Letter: [612, 792],
  Legal: [612, 1008],
  A3: [841.89, 1190.55],
};


/**
 * Parse page range string into array of page indices (0-based)
 */
function parsePageRanges(rangeStr: string, totalPages: number): number[] {
  if (!rangeStr || rangeStr.trim() === '') {
    // Return all pages if no range specified
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  const pages = new Set<number>();
  const parts = rangeStr.split(',');

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    if (trimmed.includes('-')) {
      const [startStr, endStr] = trimmed.split('-');
      const start = parseInt(startStr.trim(), 10);
      const end = parseInt(endStr.trim(), 10);

      if (!isNaN(start) && !isNaN(end)) {
        for (let i = Math.max(1, start); i <= Math.min(totalPages, end); i++) {
          pages.add(i - 1); // Convert to 0-based index
        }
      }
    } else {
      const pageNum = parseInt(trimmed, 10);
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        pages.add(pageNum - 1); // Convert to 0-based index
      }
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
}

/**
 * Posterize PDF Processor
 * Splits large PDF pages into smaller tiles for poster printing.
 */
export class PosterizePDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and posterize its pages
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const posterizeOptions: PosterizeOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<PosterizeOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required.',
        `Received ${files.length} file(s).`
      );
    }

    // Validate grid dimensions
    if (posterizeOptions.rows < 1 || posterizeOptions.cols < 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Invalid grid dimensions.',
        'Rows and columns must be at least 1.'
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

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      // Parse page range
      const pageIndicesToProcess = parsePageRanges(posterizeOptions.pageRange, totalPages);

      if (pageIndicesToProcess.length === 0) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_OPTIONS,
          'No valid pages to process.',
          'Please check your page range.'
        );
      }

      // Get output page size
      let [targetWidth, targetHeight] = PAGE_SIZES[posterizeOptions.pageSize];

      this.updateProgress(20, 'Creating posterized PDF...');

      // Create new PDF
      const newPdf = await pdfLib.PDFDocument.create();
      const { rows, cols, overlap, scalingMode } = posterizeOptions;
      const tilesPerPage = rows * cols;
      const totalTiles = pageIndicesToProcess.length * tilesPerPage;
      const progressPerTile = 70 / totalTiles;
      let tileCount = 0;

      for (const pageIndex of pageIndicesToProcess) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        const sourcePage = sourcePages[pageIndex];
        const { width: sourceWidth, height: sourceHeight } = sourcePage.getSize();

        // Determine orientation for this page
        let orientation = posterizeOptions.orientation;
        if (orientation === 'auto') {
          orientation = sourceWidth > sourceHeight ? 'landscape' : 'portrait';
        }

        // Adjust target dimensions based on orientation
        let pageWidth = targetWidth;
        let pageHeight = targetHeight;
        if (orientation === 'landscape' && pageWidth < pageHeight) {
          [pageWidth, pageHeight] = [pageHeight, pageWidth];
        } else if (orientation === 'portrait' && pageWidth > pageHeight) {
          [pageWidth, pageHeight] = [pageHeight, pageWidth];
        }

        // Calculate tile dimensions from source
        const tileWidth = sourceWidth / cols;
        const tileHeight = sourceHeight / rows;

        // Create tiles in reading order (top-left to bottom-right, row by row)
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            tileCount++;
            this.updateProgress(
              20 + (tileCount * progressPerTile),
              `Creating tile ${tileCount} of ${totalTiles}...`
            );

            // Calculate source coordinates with overlap
            // PDF coordinates start from bottom-left
            const sx = col * tileWidth - (col > 0 ? overlap : 0);
            const sy = sourceHeight - ((row + 1) * tileHeight) - (row > 0 ? overlap : 0);
            const sWidth = tileWidth + (col > 0 ? overlap : 0) + (col < cols - 1 ? overlap : 0);
            const sHeight = tileHeight + (row > 0 ? overlap : 0) + (row < rows - 1 ? overlap : 0);

            // Copy the page and set crop box
            const [copiedPage] = await newPdf.copyPages(sourcePdf, [pageIndex]);

            // Set crop box to extract the tile
            copiedPage.setCropBox(
              Math.max(0, sx),
              Math.max(0, sy),
              Math.min(sWidth, sourceWidth - sx),
              Math.min(sHeight, sourceHeight - sy)
            );

            // Create a new page with target dimensions
            const outputPage = newPdf.addPage([pageWidth, pageHeight]);

            // Embed the cropped page
            const embeddedPage = await newPdf.embedPage(ensurePageContents(copiedPage), {
              left: Math.max(0, sx),
              bottom: Math.max(0, sy),
              right: Math.min(sx + sWidth, sourceWidth),
              top: Math.min(sy + sHeight, sourceHeight),
            });

            // Calculate scaling
            const scaleX = pageWidth / embeddedPage.width;
            const scaleY = pageHeight / embeddedPage.height;
            const scale = scalingMode === 'fit'
              ? Math.min(scaleX, scaleY)
              : Math.max(scaleX, scaleY);

            const scaledWidth = embeddedPage.width * scale;
            const scaledHeight = embeddedPage.height * scale;

            // Center the tile on the output page
            const x = (pageWidth - scaledWidth) / 2;
            const y = (pageHeight - scaledHeight) / 2;

            outputPage.drawPage(embeddedPage, {
              x,
              y,
              width: scaledWidth,
              height: scaledHeight,
            });
          }
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
      const outputFilename = generateFilename(file.name, rows, cols);

      return this.createSuccessOutput(blob, outputFilename, {
        originalPageCount: totalPages,
        processedPageCount: pageIndicesToProcess.length,
        outputTileCount: totalTiles,
        gridSize: `${rows}x${cols}`,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to posterize PDF.',
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
function generateFilename(originalName: string, rows: number, cols: number): string {
  const baseName = getFileNameWithoutExtension(originalName);
  return `${baseName}_posterized_${rows}x${cols}.pdf`;
}

/**
 * Create a new instance of the processor
 */
export function createPosterizeProcessor(): PosterizePDFProcessor {
  return new PosterizePDFProcessor();
}

/**
 * Posterize PDF (convenience function)
 */
export async function posterizePDF(
  file: File,
  options: Partial<PosterizeOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPosterizeProcessor();
  return processor.process(
    {
      files: [file],
      options: options as Record<string, unknown>,
    },
    onProgress
  );
}

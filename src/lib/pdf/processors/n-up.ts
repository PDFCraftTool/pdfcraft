/**
 * PDF N-Up Processor
 * Requirements: 5.1
 * 
 * Implements N-Up PDF functionality using pdf-lib.
 * Arranges multiple pages onto single sheets.
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
 * N-Up options
 */
export interface NUpOptions {
  /** Number of pages per sheet (2, 4, 9, 16, or 'custom') */
  pagesPerSheet: 2 | 4 | 9 | 16 | 'custom';
  /** Custom columns (only used when pagesPerSheet is 'custom') */
  customCols: number;
  /** Custom rows (only used when pagesPerSheet is 'custom') */
  customRows: number;
  /** Output page size */
  pageSize: 'A4' | 'Letter' | 'Legal' | 'A3';
  /** Page orientation */
  orientation: 'portrait' | 'landscape' | 'auto';
  /** Layout direction - how pages are arranged */
  layoutDirection: 'horizontal' | 'vertical';
  /** Add margins */
  useMargins: boolean;
  /** Add border around each page */
  addBorder: boolean;
  /** Border color (hex) */
  borderColor: string;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: NUpOptions = {
  pagesPerSheet: 4,
  customCols: 2,
  customRows: 2,
  pageSize: 'A4',
  orientation: 'auto',
  layoutDirection: 'horizontal',
  useMargins: true,
  addBorder: false,
  borderColor: '#000000',
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
 * Get grid dimensions based on options
 * Returns [columns, rows]
 */
function getGridDims(options: NUpOptions): [number, number] {
  // Custom layout
  if (options.pagesPerSheet === 'custom') {
    return [
      Math.max(1, Math.min(10, options.customCols)),
      Math.max(1, Math.min(10, options.customRows))
    ];
  }

  const n = options.pagesPerSheet;

  if (options.layoutDirection === 'vertical') {
    // Vertical layout: stack pages top to bottom first
    switch (n) {
      case 2: return [1, 2];  // 1 column, 2 rows (top-bottom)
      case 4: return [2, 2];
      case 9: return [3, 3];
      case 16: return [4, 4];
      default: return [2, 2];
    }
  } else {
    // Horizontal layout: arrange pages left to right first (default)
    switch (n) {
      case 2: return [2, 1];  // 2 columns, 1 row (left-right)
      case 4: return [2, 2];
      case 9: return [3, 3];
      case 16: return [4, 4];
      default: return [2, 2];
    }
  }
}

/**
 * N-Up PDF Processor
 */
export class NUpPDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and create N-Up layout
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const nupOptions: NUpOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<NUpOptions>),
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
      this.updateProgress(20, `Source PDF has ${totalPages} pages.`);

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      // Get grid dimensions based on options
      const dims = getGridDims(nupOptions);
      const pagesPerSheetNum = dims[0] * dims[1];

      // Get page size
      let [pageWidth, pageHeight] = PAGE_SIZES[nupOptions.pageSize];

      // Determine orientation
      let orientation = nupOptions.orientation;
      if (orientation === 'auto') {
        const firstPage = sourcePages[0];
        const isSourceLandscape = firstPage.getWidth() > firstPage.getHeight();
        orientation = isSourceLandscape && dims[0] > dims[1] ? 'landscape' : 'portrait';
      }

      if (orientation === 'landscape' && pageWidth < pageHeight) {
        [pageWidth, pageHeight] = [pageHeight, pageWidth];
      }

      // Calculate margins and gutters
      const margin = nupOptions.useMargins ? 36 : 0;
      const gutter = nupOptions.useMargins ? 10 : 0;

      const usableWidth = pageWidth - margin * 2;
      const usableHeight = pageHeight - margin * 2;

      const cellWidth = (usableWidth - gutter * (dims[0] - 1)) / dims[0];
      const cellHeight = (usableHeight - gutter * (dims[1] - 1)) / dims[1];

      this.updateProgress(30, 'Creating N-Up PDF...');

      // Create new PDF
      const newPdf = await pdfLib.PDFDocument.create();
      const totalSheets = Math.ceil(totalPages / pagesPerSheetNum);
      const progressPerSheet = 50 / totalSheets;

      // Parse border color
      const borderRgb = hexToRgb(nupOptions.borderColor);

      // Pre-embed all pages at once to avoid duplicate font embedding
      // This is crucial for CJK PDFs where fonts can be very large
      this.updateProgress(35, 'Embedding pages...');
      const embeddedPages = await newPdf.embedPages(sourcePages.map(ensurePageContents));

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      for (let i = 0; i < totalPages; i += pagesPerSheetNum) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        const sheetNum = Math.floor(i / pagesPerSheetNum) + 1;
        this.updateProgress(
          40 + (sheetNum - 1) * progressPerSheet,
          `Processing sheet ${sheetNum} of ${totalSheets}...`
        );

        const outputPage = newPdf.addPage([pageWidth, pageHeight]);

        // Get the embedded pages for this sheet
        for (let j = 0; j < pagesPerSheetNum && (i + j) < totalPages; j++) {
          const pageIndex = i + j;
          const embeddedPage = embeddedPages[pageIndex];

          const scale = Math.min(
            cellWidth / embeddedPage.width,
            cellHeight / embeddedPage.height
          );
          const scaledWidth = embeddedPage.width * scale;
          const scaledHeight = embeddedPage.height * scale;

          const row = Math.floor(j / dims[0]);
          const col = j % dims[0];
          const cellX = margin + col * (cellWidth + gutter);
          const cellY = pageHeight - margin - (row + 1) * cellHeight - row * gutter;

          const x = cellX + (cellWidth - scaledWidth) / 2;
          const y = cellY + (cellHeight - scaledHeight) / 2;

          outputPage.drawPage(embeddedPage, {
            x,
            y,
            width: scaledWidth,
            height: scaledHeight,
          });

          if (nupOptions.addBorder) {
            outputPage.drawRectangle({
              x,
              y,
              width: scaledWidth,
              height: scaledHeight,
              borderColor: pdfLib.rgb(borderRgb.r, borderRgb.g, borderRgb.b),
              borderWidth: 1,
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
      const layoutStr = nupOptions.pagesPerSheet === 'custom'
        ? `${dims[0]}x${dims[1]}`
        : `${pagesPerSheetNum}-up`;
      const outputFilename = generateFilename(file.name, layoutStr);

      return this.createSuccessOutput(blob, outputFilename, {
        originalPageCount: totalPages,
        outputSheetCount: totalSheets,
        pagesPerSheet: pagesPerSheetNum,
        gridLayout: `${dims[0]}×${dims[1]}`,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to create N-Up PDF.',
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
  return { r: 0, g: 0, b: 0 };
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
function generateFilename(originalName: string, layoutStr: string): string {
  const baseName = getFileNameWithoutExtension(originalName);
  return `${baseName}_${layoutStr}.pdf`;
}

/**
 * Create a new instance of the processor
 */
export function createNUpProcessor(): NUpPDFProcessor {
  return new NUpPDFProcessor();
}

/**
 * Create N-Up PDF (convenience function)
 */
export async function createNUpPDF(
  file: File,
  options: Partial<NUpOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createNUpProcessor();
  return processor.process(
    {
      files: [file],
      options: options as Record<string, unknown>,
    },
    onProgress
  );
}

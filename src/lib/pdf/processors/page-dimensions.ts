/**
 * PDF Page Dimensions Processor
 * Requirements: 5.1
 * 
 * Implements PDF page dimensions analysis functionality.
 * Analyzes and reports the dimensions of each page in a PDF document.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { getPageView } from '../page-view';

/**
 * Page dimension information
 */
export interface PageDimension {
  /** Page number (1-indexed) */
  pageNumber: number;
  /** Width in points */
  widthPt: number;
  /** Height in points */
  heightPt: number;
  /** Width in inches */
  widthIn: number;
  /** Height in inches */
  heightIn: number;
  /** Width in millimeters */
  widthMm: number;
  /** Height in millimeters */
  heightMm: number;
  /** Page orientation */
  orientation: 'portrait' | 'landscape' | 'square';
  /** Standard page size name if matches */
  standardSize: string | null;
}

/**
 * Page dimensions analysis result
 */
export interface PageDimensionsResult {
  /** Total number of pages */
  pageCount: number;
  /** Dimensions for each page */
  pages: PageDimension[];
  /** Summary of unique sizes */
  uniqueSizes: {
    size: string;
    count: number;
    pages: number[];
  }[];
  /** Whether all pages have the same size */
  uniformSize: boolean;
}

/**
 * Page Dimensions options
 */
export interface PageDimensionsOptions {
  /** Unit for display (points, inches, mm) */
  displayUnit: 'pt' | 'in' | 'mm';
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: PageDimensionsOptions = {
  displayUnit: 'pt',
};

/**
 * Standard page sizes in points (width x height for portrait)
 */
const STANDARD_SIZES: Record<string, { width: number; height: number }> = {
  'Letter': { width: 612, height: 792 },
  'Legal': { width: 612, height: 1008 },
  'Tabloid': { width: 792, height: 1224 },
  'A0': { width: 2384, height: 3370 },
  'A1': { width: 1684, height: 2384 },
  'A2': { width: 1191, height: 1684 },
  'A3': { width: 842, height: 1191 },
  'A4': { width: 595, height: 842 },
  'A5': { width: 420, height: 595 },
  'A6': { width: 298, height: 420 },
  'B4': { width: 709, height: 1001 },
  'B5': { width: 499, height: 709 },
  'Executive': { width: 522, height: 756 },
  '#10 Envelope': { width: 297, height: 684 },
};

/**
 * Points per inch
 */
const POINTS_PER_INCH = 72;

/**
 * Millimeters per inch
 */
const MM_PER_INCH = 25.4;

/**
 * Page Dimensions Processor
 * Analyzes PDF page dimensions and provides detailed information.
 */
export class PageDimensionsProcessor extends BasePDFProcessor {
  /**
   * Process PDF file and analyze page dimensions
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
        'Please provide exactly one PDF file to analyze.',
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

      // Load the PDF
      let sourcePdf;
      try {
        sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, {
          ignoreEncryption: true,
          updateMetadata: false,
        });
      } catch (loadError) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_MALFORMED,
          'Unable to load the PDF file.',
          loadError instanceof Error ? loadError.message : 'The file may be corrupted.'
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(40, 'Analyzing page dimensions...');

      // Get page count
      const pageCount = sourcePdf.getPageCount();

      if (pageCount === 0) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_MALFORMED,
          'The PDF file contains no pages.',
          'Cannot analyze dimensions of an empty PDF.'
        );
      }

      // Analyze each page
      const pages: PageDimension[] = [];
      const sizeMap = new Map<string, { count: number; pages: number[] }>();

      for (let i = 0; i < pageCount; i++) {
        const progressPercent = 40 + (i / pageCount) * 50;
        this.updateProgress(progressPercent, `Analyzing page ${i + 1} of ${pageCount}...`);

        const page = sourcePdf.getPage(i);
        const { width, height } = getPageView(page);

        // Convert to different units
        const widthIn = width / POINTS_PER_INCH;
        const heightIn = height / POINTS_PER_INCH;
        const widthMm = widthIn * MM_PER_INCH;
        const heightMm = heightIn * MM_PER_INCH;

        // Determine orientation
        let orientation: 'portrait' | 'landscape' | 'square';
        if (Math.abs(width - height) < 1) {
          orientation = 'square';
        } else if (width > height) {
          orientation = 'landscape';
        } else {
          orientation = 'portrait';
        }

        // Find standard size match
        const standardSize = findStandardSize(width, height);

        const pageDimension: PageDimension = {
          pageNumber: i + 1,
          widthPt: Math.round(width * 100) / 100,
          heightPt: Math.round(height * 100) / 100,
          widthIn: Math.round(widthIn * 100) / 100,
          heightIn: Math.round(heightIn * 100) / 100,
          widthMm: Math.round(widthMm * 10) / 10,
          heightMm: Math.round(heightMm * 10) / 10,
          orientation,
          standardSize,
        };

        pages.push(pageDimension);

        // Track unique sizes
        const sizeKey = `${Math.round(width)}x${Math.round(height)}`;
        const existing = sizeMap.get(sizeKey);
        if (existing) {
          existing.count++;
          existing.pages.push(i + 1);
        } else {
          sizeMap.set(sizeKey, { count: 1, pages: [i + 1] });
        }

        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }
      }

      this.updateProgress(95, 'Generating report...');

      // Build unique sizes summary
      const uniqueSizes = Array.from(sizeMap.entries()).map(([size, data]) => ({
        size,
        count: data.count,
        pages: data.pages,
      }));

      // Check if all pages have the same size
      const uniformSize = uniqueSizes.length === 1;

      const result: PageDimensionsResult = {
        pageCount,
        pages,
        uniqueSizes,
        uniformSize,
      };

      // Create JSON output
      const jsonString = JSON.stringify(result, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateDimensionsFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount,
        uniformSize,
        uniqueSizeCount: uniqueSizes.length,
        result,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to analyze PDF page dimensions.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for page dimensions processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Find matching standard page size
 */
function findStandardSize(width: number, height: number): string | null {
  const tolerance = 2; // Allow 2 points tolerance

  for (const [name, size] of Object.entries(STANDARD_SIZES)) {
    // Check portrait orientation
    if (
      Math.abs(width - size.width) <= tolerance &&
      Math.abs(height - size.height) <= tolerance
    ) {
      return name;
    }
    // Check landscape orientation
    if (
      Math.abs(width - size.height) <= tolerance &&
      Math.abs(height - size.width) <= tolerance
    ) {
      return `${name} (Landscape)`;
    }
  }

  return null;
}

/**
 * Generate a filename for the dimensions report
 */
function generateDimensionsFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_dimensions.json`;
}

/**
 * Create a new instance of the page dimensions processor
 */
export function createPageDimensionsProcessor(): PageDimensionsProcessor {
  return new PageDimensionsProcessor();
}

/**
 * Analyze PDF page dimensions (convenience function)
 */
export async function analyzePageDimensions(
  file: File,
  options?: Partial<PageDimensionsOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPageDimensionsProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

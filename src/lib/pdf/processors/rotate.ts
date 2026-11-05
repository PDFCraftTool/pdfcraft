/**
 * PDF Rotate Processor
 * Requirements: 5.1
 * 
 * Implements PDF page rotation functionality using pdf-lib.
 * Supports rotating pages by any angle (90° increments for standard rotation,
 * or arbitrary angles using page embedding).
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
 * Rotation options for PDF pages
 */
export interface RotateOptions {
  /** Rotation angle in degrees for all pages (if rotations array not provided) */
  angle?: number;
  /** Per-page rotation angles (1-based index to angle mapping) */
  rotations?: Map<number, number> | Record<number, number>;
  /** Apply rotation to specific pages only (1-based page numbers) */
  pages?: number[];
}

/**
 * Default rotate options
 */
const DEFAULT_ROTATE_OPTIONS: RotateOptions = {
  angle: 90,
};

/**
 * Rotate PDF Processor
 * Rotates pages in a PDF document.
 */
export class RotatePDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and rotate pages
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const rotateOptions: RotateOptions = {
      ...DEFAULT_ROTATE_OPTIONS,
      ...(options as Partial<RotateOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required for rotation.',
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
            'Please decrypt the file before rotating pages.'
          );
        }
        throw error;
      }

      const totalPages = sourcePdf.getPageCount();
      this.updateProgress(20, `Source PDF has ${totalPages} pages.`);

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      // Determine which pages to rotate and by how much
      const rotationsMap = getRotationsMap(rotateOptions, totalPages);

      // Validate page numbers
      for (const pageNum of rotationsMap.keys()) {
        if (pageNum < 1 || pageNum > totalPages) {
          return this.createErrorOutput(
            PDFErrorCode.INVALID_PAGE_RANGE,
            `Page ${pageNum} is out of range.`,
            `The PDF has ${totalPages} pages.`
          );
        }
      }

      this.updateProgress(30, 'Creating rotated PDF...');

      // Right-angle rotations only change /Rotate. Keep the source document
      // and page references so forms, outlines, attachments and links survive.
      // Arbitrary-angle rendering still uses the existing embedding path.
      const preserveDocument = sourcePdf.getPages().every((page, index) =>
        normalizeAngle(page.getRotation().angle + (rotationsMap.get(index + 1) || 0)) % 90 === 0
      );
      const outputPdf = preserveDocument ? sourcePdf : await pdfLib.PDFDocument.create();
      const progressPerPage = 60 / totalPages;

      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        const pageNum = i + 1;
        const rotation = rotationsMap.get(pageNum) || 0;

        this.updateProgress(
          30 + (i * progressPerPage),
          `Processing page ${pageNum}...`
        );

        const originalPage = sourcePdf.getPage(i);
        const currentRotation = originalPage.getRotation().angle;
        const totalRotation = normalizeAngle(currentRotation + rotation);

        if (totalRotation % 90 === 0) {
          if (preserveDocument) {
            originalPage.setRotation(pdfLib.degrees(totalRotation));
          } else {
            const [copiedPage] = await outputPdf.copyPages(sourcePdf, [i]);
            copiedPage.setRotation(pdfLib.degrees(totalRotation));
            outputPdf.addPage(copiedPage);
          }
        } else {
          // Arbitrary angle - embed and draw rotated
          const embeddedPage = await outputPdf.embedPage(originalPage);
          const { width, height } = embeddedPage.scale(1);

          const angleRad = (totalRotation * Math.PI) / 180;
          const absCos = Math.abs(Math.cos(angleRad));
          const absSin = Math.abs(Math.sin(angleRad));

          const newWidth = width * absCos + height * absSin;
          const newHeight = width * absSin + height * absCos;

          const newPage = outputPdf.addPage([newWidth, newHeight]);

          const x = newWidth / 2 - (width / 2 * Math.cos(angleRad) - height / 2 * Math.sin(angleRad));
          const y = newHeight / 2 - (width / 2 * Math.sin(angleRad) + height / 2 * Math.cos(angleRad));

          newPage.drawPage(embeddedPage, {
            x,
            y,
            width,
            height,
            rotate: pdfLib.degrees(totalRotation),
          });
        }
      }

      this.updateProgress(90, 'Saving rotated PDF...');

      // Save the rotated PDF with object streams enabled for better compression
      const pdfBytes = await outputPdf.save({
        useObjectStreams: true,
      });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateRotatedFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount: totalPages,
        rotatedPages: rotationsMap.size,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to rotate PDF pages.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for rotate processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Normalize angle to 0-359 range
 */
function normalizeAngle(angle: number): number {
  let normalized = angle % 360;
  if (normalized < 0) normalized += 360;
  return normalized;
}

/**
 * Get rotations map from options
 */
function getRotationsMap(options: RotateOptions, totalPages: number): Map<number, number> {
  const rotationsMap = new Map<number, number>();

  if (options.rotations) {
    // Use per-page rotations
    if (options.rotations instanceof Map) {
      options.rotations.forEach((angle, pageNum) => {
        rotationsMap.set(pageNum, angle);
      });
    } else {
      // It's a Record<number, number>
      Object.entries(options.rotations).forEach(([pageNum, angle]) => {
        rotationsMap.set(parseInt(pageNum, 10), angle as number);
      });
    }
  } else if (options.angle !== undefined && options.angle !== 0) {
    // Apply same angle to specified pages or all pages
    const pagesToRotate = options.pages || Array.from({ length: totalPages }, (_, i) => i + 1);
    pagesToRotate.forEach(pageNum => {
      rotationsMap.set(pageNum, options.angle!);
    });
  }

  return rotationsMap;
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
 * Generate a filename for the rotated PDF
 */
function generateRotatedFilename(originalName: string): string {
  const baseName = getFileNameWithoutExtension(originalName);
  return `${baseName}_rotated.pdf`;
}

/**
 * Create a new instance of the rotate processor
 */
export function createRotateProcessor(): RotatePDFProcessor {
  return new RotatePDFProcessor();
}

/**
 * Rotate pages in a PDF file (convenience function)
 */
export async function rotatePDF(
  file: File,
  options: RotateOptions,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createRotateProcessor();
  return processor.process(
    {
      files: [file],
      options: options as Record<string, unknown>,
    },
    onProgress
  );
}

/**
 * Rotate all pages by a specific angle (convenience function)
 */
export async function rotateAllPages(
  file: File,
  angle: number,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  return rotatePDF(file, { angle }, onProgress);
}

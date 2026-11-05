/**
 * PDF to ZIP Processor
 * Requirements: 5.1
 * 
 * Packages multiple PDF files into a ZIP archive.
 */

import type {
  PDFProcessor,
  ProcessInput,
  ProcessOutput,
  PDFError,
  ProgressCallback,
  ValidationResult,
  PDFErrorCode,
  ErrorCategory
} from '@/types/pdf';

export interface PDFToZipOptions {
  /** Compression level (0-9, where 0 is no compression and 9 is maximum) */
  compressionLevel?: number;
  /** Custom filename for the ZIP archive */
  outputFilename?: string;
}

/**
 * PDF to ZIP Processor Class
 */
export class PDFToZipProcessor implements PDFProcessor {
  private progress: number = 0;
  private cancelled: boolean = false;

  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    const { files, options = {} } = input;
    const zipOptions = options as PDFToZipOptions;

    if (files.length === 0) {
      return {
        success: false,
        error: {
          code: 'FILE_EMPTY' as PDFErrorCode,
          message: 'No PDF files provided',
          category: 'VALIDATION_ERROR' as ErrorCategory,
          recoverable: true,
        },
      };
    }

    try {
      // Dynamically import JSZip to support tree-shaking
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();

      const totalFiles = files.length;
      // Reserve every input name before allocating suffixes so a duplicate
      // cannot take the original name of a later file (e.g. report (2).pdf).
      const reservedNames = new Set(files.map(file => file.name));
      const usedNames = new Set<string>();
      const archiveNames: string[] = [];
      const nextSuffix = new Map<string, number>();

      // Add each PDF file to the ZIP
      for (let i = 0; i < files.length; i++) {
        if (this.cancelled) {
          return {
            success: false,
            error: {
              code: 'PROCESSING_CANCELLED' as PDFErrorCode,
              message: 'Operation cancelled',
              category: 'PROCESSING_ERROR' as ErrorCategory,
              recoverable: true,
            },
          };
        }

        const file = files[i];
        const arrayBuffer = await file.arrayBuffer();

        let archiveName = file.name;
        if (usedNames.has(archiveName)) {
          const dot = file.name.lastIndexOf('.');
          const stem = dot > 0 ? file.name.slice(0, dot) : file.name;
          const extension = dot > 0 ? file.name.slice(dot) : '';
          let suffix = nextSuffix.get(file.name) ?? 2;
          do {
            archiveName = `${stem} (${suffix++})${extension}`;
          } while (reservedNames.has(archiveName) || usedNames.has(archiveName));
          nextSuffix.set(file.name, suffix);
        }
        usedNames.add(archiveName);
        archiveNames.push(archiveName);
        zip.file(archiveName, arrayBuffer);

        // Update progress
        this.progress = Math.round(((i + 1) / totalFiles) * 80);
        onProgress?.(this.progress, `Adding ${file.name} (${i + 1}/${totalFiles})`);
      }

      // Generate the ZIP file
      onProgress?.(85, 'Compressing files...');

      const compressionLevel = zipOptions.compressionLevel ?? 6;
      const zipBlob = await zip.generateAsync({
        type: 'blob',
        compression: compressionLevel > 0 ? 'DEFLATE' : 'STORE',
        compressionOptions: {
          level: compressionLevel,
        },
      }, (metadata) => {
        // Update progress during compression
        const compressProgress = 85 + Math.round(metadata.percent * 0.15);
        this.progress = compressProgress;
        onProgress?.(compressProgress, 'Compressing files...');
      });

      this.progress = 100;
      onProgress?.(100, 'Complete');

      // Determine output filename
      const outputFilename = zipOptions.outputFilename || 'pdfs.zip';

      return {
        success: true,
        result: zipBlob,
        filename: outputFilename,
        metadata: {
          fileCount: files.length,
          totalSize: zipBlob.size,
          filenames: archiveNames,
        },
      };
    } catch (error) {
      const processError: PDFError = {
        code: 'PROCESSING_FAILED' as PDFErrorCode,
        message: error instanceof Error ? error.message : 'Failed to create ZIP archive',
        category: 'PROCESSING_ERROR' as ErrorCategory,
        recoverable: true,
      };

      return {
        success: false,
        error: processError,
      };
    }
  }

  async validate(files: File[]): Promise<ValidationResult> {
    const errors: PDFError[] = [];

    for (const file of files) {
      // Check file type
      if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
        errors.push({
          code: 'FILE_TYPE_INVALID' as PDFErrorCode,
          message: `File "${file.name}" must be a PDF`,
          category: 'FILE_ERROR' as ErrorCategory,
          recoverable: true,
        });
      }

      // File size limit removed - no restriction
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  getProgress(): number {
    return this.progress;
  }

  cancel(): void {
    this.cancelled = true;
  }
}

/**
 * Create a new PDF to ZIP processor instance
 */
export function createPDFToZipProcessor(): PDFToZipProcessor {
  return new PDFToZipProcessor();
}

/**
 * Convenience function to package PDFs into a ZIP archive
 */
export async function packagePDFsToZip(
  files: File[],
  options: PDFToZipOptions = {},
  progressCallback?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPDFToZipProcessor();
  return processor.process({
    files,
    options: options as unknown as Record<string, unknown>,
  }, progressCallback);
}

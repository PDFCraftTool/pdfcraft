/**
 * PDF Linearize Processor
 * Requirements: 5.1
 * 
 * Implements PDF linearization (Fast Web View) functionality using coherentpdf.
 * Linearized PDFs are optimized for streaming over the web,
 * allowing the first page to display before the entire file is downloaded.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { withBasePath } from '@/lib/utils/path';

/**
 * Linearize PDF options
 */
export interface LinearizePDFOptions {
  /** Optimize object streams for better compression */
  useObjectStreams: boolean;
  /** Add default page if document is empty */
  addDefaultPage: boolean;
}

/**
 * Default linearize options
 */
const DEFAULT_LINEARIZE_OPTIONS: LinearizePDFOptions = {
  useObjectStreams: true,
  addDefaultPage: false,
};

/**
 * Worker message types
 */
interface WorkerProgressMessage {
  status: 'progress';
  progress: number;
}

interface WorkerSuccessMessage {
  status: 'success';
  pdfBytes: ArrayBuffer;
  originalSize: number;
  linearizedSize: number;
  pageCount: number;
}

interface WorkerErrorMessage {
  status: 'error';
  message: string;
}

type WorkerMessage = WorkerProgressMessage | WorkerSuccessMessage | WorkerErrorMessage;

/**
 * Linearize PDF Processor
 * Optimizes PDF files for fast web viewing by reorganizing the internal structure.
 */
export class LinearizePDFProcessor extends BasePDFProcessor {
  private worker: Worker | null = null;

  /**
   * Process PDF file and linearize it
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const linearizeOptions: LinearizePDFOptions = {
      ...DEFAULT_LINEARIZE_OPTIONS,
      ...(options as Partial<LinearizePDFOptions>),
    };

    // Validate we have at least 1 file
    if (files.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide at least one PDF file to linearize.',
        'No files were provided.'
      );
    }

    try {
      // Process single file or multiple files
      if (files.length === 1) {
        return await this.processSingleFile(files[0], linearizeOptions);
      } else {
        return await this.processMultipleFiles(files, linearizeOptions);
      }

    } catch (error) {
      this.terminateWorker();
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to linearize PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Process a single PDF file using worker
   */
  private async processSingleFile(
    file: File,
    options: LinearizePDFOptions
  ): Promise<ProcessOutput> {
    this.updateProgress(5, 'Reading PDF file...');

    // Read file as ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const originalSize = arrayBuffer.byteLength;

    if (this.checkCancelled()) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_CANCELLED,
        'Processing was cancelled.'
      );
    }

    this.updateProgress(10, 'Starting linearization...');

    // Process using worker
    const result = await this.linearizeWithWorker(arrayBuffer, options);

    if (this.checkCancelled()) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_CANCELLED,
        'Processing was cancelled.'
      );
    }

    // Create blob from the result
    const blob = new Blob([result.pdfBytes], { type: 'application/pdf' });

    this.updateProgress(100, 'Complete!');

    // Generate output filename
    const outputFilename = generateLinearizedFilename(file.name);

    return this.createSuccessOutput(blob, outputFilename, {
      pageCount: result.pageCount,
      originalSize,
      linearizedSize: result.linearizedSize,
      optimized: true,
    });
  }

  /**
   * Process multiple PDF files
   */
  private async processMultipleFiles(
    files: File[],
    options: LinearizePDFOptions
  ): Promise<ProcessOutput> {
    const results: { blob: Blob; filename: string }[] = [];
    const totalFiles = files.length;
    let totalOriginalSize = 0;
    let totalLinearizedSize = 0;
    let totalPages = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileProgress = (i / totalFiles) * 80 + 10;
      
      this.updateProgress(fileProgress, `Processing file ${i + 1} of ${totalFiles}...`);

      // Read file
      const arrayBuffer = await file.arrayBuffer();
      totalOriginalSize += arrayBuffer.byteLength;

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      try {
        // Linearize using worker
        const result = await this.linearizeWithWorker(arrayBuffer, options);
        
        totalLinearizedSize += result.linearizedSize;
        totalPages += result.pageCount;

        const blob = new Blob([result.pdfBytes], { type: 'application/pdf' });
        results.push({
          blob,
          filename: generateLinearizedFilename(file.name),
        });
      } catch {
        // Skip files that fail to process
        continue;
      }
    }

    if (results.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'No PDF files could be processed.',
        'All files may be corrupted or invalid.'
      );
    }

    this.updateProgress(95, 'Packaging results...');

    // If only one result, return it directly
    if (results.length === 1) {
      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(results[0].blob, results[0].filename, {
        pageCount: totalPages,
        originalSize: totalOriginalSize,
        linearizedSize: totalLinearizedSize,
        filesProcessed: 1,
      });
    }

    // For multiple files, create a zip
    const { default: JSZip } = await import('jszip');
    const zip = new JSZip();

    for (const result of results) {
      zip.file(result.filename, result.blob);
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' });

    this.updateProgress(100, 'Complete!');

    return this.createSuccessOutput(zipBlob, 'linearized_pdfs.zip', {
      totalPages,
      originalSize: totalOriginalSize,
      linearizedSize: totalLinearizedSize,
      filesProcessed: results.length,
    });
  }

  /**
   * Linearize PDF using web worker
   */
  private linearizeWithWorker(
    pdfData: ArrayBuffer,
    options: LinearizePDFOptions
  ): Promise<{ pdfBytes: ArrayBuffer; linearizedSize: number; pageCount: number }> {
    return new Promise((resolve, reject) => {
      try {
        this.worker = new Worker(withBasePath('/workers/linearize.worker.js'));

        this.worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
          const data = e.data;

          if (data.status === 'progress') {
            // Map worker progress (30-90) to overall progress (10-95)
            const mappedProgress = 10 + (data.progress / 100) * 85;
            this.updateProgress(mappedProgress, 'Linearizing PDF...');
          } else if (data.status === 'success') {
            this.terminateWorker();
            resolve({
              pdfBytes: data.pdfBytes,
              linearizedSize: data.linearizedSize,
              pageCount: data.pageCount,
            });
          } else if (data.status === 'error') {
            this.terminateWorker();
            reject(new Error(data.message));
          }
        };

        this.worker.onerror = (error) => {
          this.terminateWorker();
          reject(new Error(`Worker error: ${error.message}`));
        };

        // Send data to worker
        this.worker.postMessage(
          {
            command: 'linearize',
            pdfData: pdfData,
            options: {
              useObjectStreams: options.useObjectStreams,
            },
          },
          [pdfData]
        );
      } catch (error) {
        this.terminateWorker();
        reject(error);
      }
    });
  }

  /**
   * Terminate the worker
   */
  private terminateWorker(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  /**
   * Cancel processing
   */
  cancel(): void {
    super.cancel();
    this.terminateWorker();
  }

  /**
   * Get accepted file types for linearize processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the linearized PDF
 */
function generateLinearizedFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_linearized.pdf`;
}

/**
 * Create a new instance of the linearize processor
 */
export function createLinearizeProcessor(): LinearizePDFProcessor {
  return new LinearizePDFProcessor();
}

/**
 * Linearize a PDF file (convenience function)
 */
export async function linearizePDF(
  file: File,
  options?: Partial<LinearizePDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createLinearizeProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

/**
 * Linearize multiple PDF files (convenience function)
 */
export async function linearizePDFs(
  files: File[],
  options?: Partial<LinearizePDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createLinearizeProcessor();
  return processor.process(
    {
      files,
      options: options || {},
    },
    onProgress
  );
}

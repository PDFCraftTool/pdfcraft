/**
 * PDF Compress Processor
 * Requirements: 5.1
 * 
 * Implements PDF compression functionality using coherentpdf for better compression.
 * Supports different quality levels and optimization options.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { logger } from '@/lib/utils/logger';
import { BasePDFProcessor } from '../processor';
import { loadPyMuPDF } from '../pymupdf-loader';

/**
 * Compression quality levels
 */
export type CompressionQuality = 'low' | 'medium' | 'high' | 'maximum';

/**
 * Compression algorithm types
 * - standard: Uses coherentpdf for general-purpose compression
 * - condense: Uses PyMuPDF clean/garbage collection (preserves interactivity)
 * - photon: Rasterizes pages to images (best for image-heavy PDFs, loses interactivity)
 */
export type CompressionAlgorithm = 'standard' | 'condense' | 'photon';

/**
 * Compress PDF options
 */
export interface CompressPDFOptions {
  /** Compression algorithm to use */
  algorithm: CompressionAlgorithm;
  /** Compression quality level */
  quality: CompressionQuality;
  /** Remove metadata to reduce size */
  removeMetadata: boolean;
  /** Optimize images in the PDF */
  optimizeImages: boolean;
  /** Remove unused objects */
  removeUnusedObjects: boolean;
  /** DPI for Photon algorithm (default: 150) */
  photonDpi?: number;
  /** Image format for Photon algorithm */
  photonFormat?: 'jpeg' | 'png';
  /** JPEG quality for Photon algorithm (0-100) */
  photonQuality?: number;
}

/**
 * Default compress options
 */
const DEFAULT_COMPRESS_OPTIONS: CompressPDFOptions = {
  algorithm: 'standard',
  quality: 'medium',
  removeMetadata: false,
  optimizeImages: true,
  removeUnusedObjects: true,
  photonDpi: 150,
  photonFormat: 'jpeg',
  photonQuality: 85,
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
  compressedSize: number;
}

interface WorkerErrorMessage {
  status: 'error';
  message: string;
}

type WorkerMessage = WorkerProgressMessage | WorkerSuccessMessage | WorkerErrorMessage;

function resolvePublicAssetPath(assetPath: string): string {
  if (typeof window === 'undefined') return assetPath;

  const normalizedAssetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
  const nextScript = scripts.find((script) => script.src.includes('/_next/'));

  if (!nextScript) return normalizedAssetPath;

  try {
    const scriptUrl = new URL(nextScript.src);
    const nextIndex = scriptUrl.pathname.indexOf('/_next/');
    if (nextIndex <= 0) return normalizedAssetPath;

    const basePath = scriptUrl.pathname.slice(0, nextIndex).replace(/\/$/, '');
    return `${basePath}${normalizedAssetPath}`;
  } catch {
    return normalizedAssetPath;
  }
}

/**
 * Compress PDF Processor
 * Compresses PDF files to reduce file size using coherentpdf.
 */
export class CompressPDFProcessor extends BasePDFProcessor {
  private worker: Worker | null = null;

  /**
   * Process PDF file and compress it
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const compressOptions: CompressPDFOptions = {
      ...DEFAULT_COMPRESS_OPTIONS,
      ...(options as Partial<CompressPDFOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file to compress.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];

    try {
      this.updateProgress(5, 'Loading PDF file...');

      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const originalSize = arrayBuffer.byteLength;

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(10, 'Starting compression...');

      let result: { pdfBytes: ArrayBuffer; compressedSize: number };

      // Choose compression method based on algorithm
      switch (compressOptions.algorithm) {
        case 'condense':
          result = await this.compressWithCondense(arrayBuffer, compressOptions);
          break;
        case 'photon':
          result = await this.compressWithPhoton(file, compressOptions);
          break;
        case 'standard':
        default:
          // First, compress PDF structure with coherentpdf worker
          result = await this.compressWithWorker(arrayBuffer, compressOptions);

          // If optimizeImages is enabled, additionally compress images with PyMuPDF
          if (compressOptions.optimizeImages) {
            this.updateProgress(70, 'Optimizing images...');
            try {
              result = await this.optimizeImagesWithPyMuPDF(result.pdfBytes, compressOptions);
            } catch (optimizationError) {
              // Degrade gracefully to worker-only output if PyMuPDF is unavailable.
              logger.warn(
                '[CompressPDF] Image optimization skipped, using structure-compressed output only',
                optimizationError
              );
              this.updateProgress(95, 'Image optimization unavailable, finalizing...');
            }
          }
          break;
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      const compressedSize = result.compressedSize;
      const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

      // Create blob from the result
      const blob = new Blob([result.pdfBytes], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateCompressedFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        originalSize,
        compressedSize,
        compressionRatio: `${compressionRatio}%`,
        algorithm: compressOptions.algorithm,
        quality: compressOptions.quality,
      });

    } catch (error) {
      // Clean up worker on error
      this.terminateWorker();

      if (error instanceof Error && error.message.includes('encrypt')) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_ENCRYPTED,
          'The PDF file is encrypted.',
          'Please decrypt the file before compressing.'
        );
      }

      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to compress PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Compress PDF using web worker
   */
  private compressWithWorker(
    pdfData: ArrayBuffer,
    options: CompressPDFOptions
  ): Promise<{ pdfBytes: ArrayBuffer; compressedSize: number }> {
    return new Promise((resolve, reject) => {
      try {
        this.worker = new Worker(resolvePublicAssetPath('/workers/compress.worker.js'));

        this.worker.onmessage = (e: MessageEvent<WorkerMessage>) => {
          const data = e.data;

          if (data.status === 'progress') {
            // Map worker progress (20-100) to overall progress (10-95)
            const mappedProgress = 10 + (data.progress / 100) * 85;
            this.updateProgress(mappedProgress, 'Compressing PDF...');
          } else if (data.status === 'success') {
            this.terminateWorker();
            resolve({
              pdfBytes: data.pdfBytes,
              compressedSize: data.compressedSize,
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
            command: 'compress',
            pdfData: pdfData,
            options: {
              quality: options.quality,
              removeMetadata: options.removeMetadata,
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
   * Compress PDF using Condense algorithm (PyMuPDF clean)
   * Preserves interactivity while optimizing structure
   */
  private async compressWithCondense(
    pdfData: ArrayBuffer,
    options: CompressPDFOptions
  ): Promise<{ pdfBytes: ArrayBuffer; compressedSize: number }> {
    this.updateProgress(20, 'Loading PyMuPDF...');

    const pymupdf = await loadPyMuPDF();

    this.updateProgress(40, 'Optimizing PDF structure...');

    // Convert ArrayBuffer to File for PyMuPDF
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const file = new File([blob], 'input.pdf', { type: 'application/pdf' });

    // Use PyMuPDF's compress functionality with image optimization
    const result: Blob = await pymupdf.compress(file, {
      quality: options.quality,
      removeMetadata: options.removeMetadata,
    });

    this.updateProgress(90, 'Finalizing...');

    const outputBytes = await result.arrayBuffer();

    return {
      pdfBytes: outputBytes,
      compressedSize: outputBytes.byteLength,
    };
  }

  /**
   * Compress PDF using Photon algorithm (rasterize pages)
   * Best for image-heavy PDFs, but loses interactivity
   */
  private async compressWithPhoton(
    file: File,
    options: CompressPDFOptions
  ): Promise<{ pdfBytes: ArrayBuffer; compressedSize: number }> {
    this.updateProgress(20, 'Loading PyMuPDF...');

    const pymupdf = await loadPyMuPDF();

    this.updateProgress(30, 'Rasterizing pages...');

    const dpi = options.photonDpi || 150;
    const format = options.photonFormat || 'jpeg';
    const quality = options.photonQuality || 85;

    // Use PyMuPDF's photon compression (rasterize pages to images)
    const result: Blob = await pymupdf.photonCompress(file, {
      dpi,
      format,
      quality,
    });

    this.updateProgress(90, 'Finalizing...');

    const outputBytes = await result.arrayBuffer();

    return {
      pdfBytes: outputBytes,
      compressedSize: outputBytes.byteLength,
    };
  }

  /**
   * Optimize images in PDF using PyMuPDF
   * Called after standard compression to further reduce image sizes
   */
  private async optimizeImagesWithPyMuPDF(
    pdfData: ArrayBuffer,
    options: CompressPDFOptions
  ): Promise<{ pdfBytes: ArrayBuffer; compressedSize: number }> {
    const pymupdf = await loadPyMuPDF();

    // Convert ArrayBuffer to File for PyMuPDF
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const file = new File([blob], 'input.pdf', { type: 'application/pdf' });

    // Use PyMuPDF's compress functionality with image optimization
    const result: Blob = await pymupdf.compress(file, {
      quality: options.quality,
      removeMetadata: options.removeMetadata,
    });

    this.updateProgress(95, 'Finalizing...');

    const outputBytes = await result.arrayBuffer();

    return {
      pdfBytes: outputBytes,
      compressedSize: outputBytes.byteLength,
    };
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
   * Get accepted file types for compress processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the compressed PDF
 */
function generateCompressedFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_compressed.pdf`;
}

/**
 * Create a new instance of the compress processor
 */
export function createCompressProcessor(): CompressPDFProcessor {
  return new CompressPDFProcessor();
}

/**
 * Compress a PDF file (convenience function)
 */
export async function compressPDF(
  file: File,
  options?: Partial<CompressPDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createCompressProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

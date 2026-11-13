/**
 * PDF Table of Contents Processor
 * Uses PyMuPDF worker to generate clickable TOC from PDF bookmarks
 * Supports CJK (Chinese, Japanese, Korean) and other non-ASCII characters
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { withBasePath } from '@/lib/utils/path';

export interface TOCOptions {
  title?: string;
  fontSize?: number;
  fontFamily?: string; // Standard PDF font codes (e.g. 'helv', 'tiit', etc.)
  addBookmark?: boolean;
}

export class TableOfContentsProcessor extends BasePDFProcessor {
  private worker: Worker | null = null;

  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const tocOptions = options as TOCOptions;

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();

      this.updateProgress(30, 'Generating table of contents...');

      const result = await this.generateTOCWithWorker(
        arrayBuffer,
        tocOptions.title || 'Table of Contents',
        tocOptions.fontSize || 12,
        tocOptions.fontFamily ?? 'helv', // Default to Helvetica
        tocOptions.addBookmark ?? true
      );

      console.log('[TOC Processor] Worker returned result:', {
        status: result.status,
        hasPdfBytes: 'pdfBytes' in result,
        pdfBytesType: (result as any).pdfBytes ? (result as any).pdfBytes.constructor.name : 'N/A',
        byteLength: (result as any).pdfBytes ? (result as any).pdfBytes.byteLength : 0
      });

      if (result.status === 'error') {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_FAILED,
          result.message || 'Failed to generate table of contents.'
        );
      }

      const blobResult = (result as any).pdfBlob;
      const bytesResult = (result as any).pdfBytes;

      let finalBlob: Blob;

      if (blobResult instanceof Blob) {
        finalBlob = blobResult;
      } else if (bytesResult && bytesResult.byteLength > 0) {
        finalBlob = new Blob([new Uint8Array(bytesResult)], { type: 'application/pdf' });
      } else {
        console.error('[TOC Processor] Critical: Received empty data from worker');
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_FAILED,
          'Internal Error: Generated PDF data was empty.'
        );
      }

      this.updateProgress(90, 'Saving PDF...');
      console.log('[TOC Processor] Final Blob size:', finalBlob.size);

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(finalBlob, file.name.replace('.pdf', '_with_toc.pdf'), {});

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to generate table of contents.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    } finally {
      this.terminateWorker();
    }
  }

  private generateTOCWithWorker(
    pdfData: ArrayBuffer,
    title: string,
    fontSize: number,
    fontFamily: string,
    addBookmark: boolean
  ): Promise<{ status: 'success'; pdfBytes: ArrayBuffer } | { status: 'error'; message: string }> {
    return new Promise((resolve) => {
      // Use V2 worker to bypass cache and use robust byte handling
      this.worker = new Worker(withBasePath('/workers/table-of-contents-v2.worker.js'), { type: 'module' });

      this.worker.onmessage = (e) => {
        const data = e.data;
        // Only resolve on final success or error messages
        // Ignore intermediate status messages like { type: 'status', message: '...' }
        if (data.status === 'success' || data.status === 'error') {
          resolve(data);
        }
        // Intermediate status messages are ignored (they could be used for progress updates)
      };

      this.worker.onerror = (error) => {
        resolve({
          status: 'error',
          message: error.message || 'Worker error occurred',
        });
      };

      this.worker.postMessage(
        {
          command: 'generate-toc',
          pdfData,
          title,
          fontSize,
          fontFamily,
          addBookmark,
        },
        [pdfData]
      );
    });
  }

  private terminateWorker(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createTableOfContentsProcessor(): TableOfContentsProcessor {
  return new TableOfContentsProcessor();
}

export async function generateTableOfContents(
  file: File,
  options: TOCOptions,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createTableOfContentsProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

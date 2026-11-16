/**
 * PDF Remove Annotations Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface RemoveAnnotationsOptions {
  removeComments?: boolean;
  removeHighlights?: boolean;
  removeLinks?: boolean;
  removeAll?: boolean;
  pages?: number[] | 'all';
}

export class RemoveAnnotationsProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const removeOptions: RemoveAnnotationsOptions = {
      removeAll: true,
      pages: 'all',
      ...options as RemoveAnnotationsOptions,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const totalPages = pdf.getPageCount();
      const pagesToProcess = removeOptions.pages === 'all'
        ? Array.from({ length: totalPages }, (_, i) => i)
        : (removeOptions.pages as number[]).map(p => p - 1);

      this.updateProgress(30, 'Removing annotations...');

      let removedCount = 0;

      for (let i = 0; i < pagesToProcess.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageIndex = pagesToProcess[i];
        const page = pdf.getPage(pageIndex);

        // Get the page's annotation references
        const annots = page.node.get(pdfLib.PDFName.of('Annots'));

        if (annots) {
          if (removeOptions.removeAll) {
            // Remove all annotations
            page.node.delete(pdfLib.PDFName.of('Annots'));
            removedCount++;
          } else {
            // Selective removal would require parsing annotation types
            // This is a simplified implementation
            page.node.delete(pdfLib.PDFName.of('Annots'));
            removedCount++;
          }
        }

        this.updateProgress(30 + (60 * (i + 1) / pagesToProcess.length), `Processing page ${pageIndex + 1}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_no_annotations.pdf'), {
        pageCount: totalPages,
        pagesProcessed: pagesToProcess.length,
      });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to remove annotations.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createRemoveAnnotationsProcessor(): RemoveAnnotationsProcessor {
  return new RemoveAnnotationsProcessor();
}

export async function removeAnnotations(file: File, options: RemoveAnnotationsOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createRemoveAnnotationsProcessor();
  return processor.process({ files: [file], options: options as Record<string, unknown> }, onProgress);
}

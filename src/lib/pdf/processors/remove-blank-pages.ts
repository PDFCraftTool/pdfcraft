/**
 * PDF Remove Blank Pages Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, configurePdfjsWorker } from '../loader';

export interface RemoveBlankPagesOptions {
  threshold?: number; // 0-100, percentage of white pixels to consider blank
  checkMargins?: boolean;
  marginSize?: number;
  explicitPagesToRemove?: number[]; // 1-indexed page numbers to remove
}

export class RemoveBlankPagesProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const removeOptions: RemoveBlankPagesOptions = {
      threshold: 99,
      checkMargins: true,
      marginSize: 20,
      ...options as RemoveBlankPagesOptions,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(5, 'Loading libraries...');
      const pdfLib = await loadPdfLib();
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      this.updateProgress(15, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();

      // Load with pdfjs for rendering
      const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer.slice(0) }).promise;
      const totalPages = pdfDoc.numPages;

      let blankPages: number[] = [];
      const threshold = removeOptions.threshold || 99;

      if (removeOptions.explicitPagesToRemove) {
        blankPages = [...removeOptions.explicitPagesToRemove];
        this.updateProgress(50, 'Applying custom blank page selections...');
      } else {
        this.updateProgress(25, 'Analyzing pages...');
        for (let i = 1; i <= totalPages; i++) {
          if (this.checkCancelled()) {
            return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
          }

          const page = await pdfDoc.getPage(i);
          const viewport = page.getViewport({ scale: 0.5 });

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (context) {
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({
              canvasContext: context,
              viewport: viewport,
            }).promise;

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const isBlank = this.isPageBlank(imageData, threshold);

            if (isBlank) {
              blankPages.push(i);
            }
          }

          this.updateProgress(25 + (40 * i / totalPages), `Analyzing page ${i}...`);
        }
      }

      if (blankPages.length === 0) {
        this.updateProgress(100, 'Complete!');
        const blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'application/pdf' });
        return this.createSuccessOutput(blob, file.name, {
          pageCount: totalPages,
          blankPagesRemoved: 0,
          message: 'No blank pages found.',
        });
      }

      if (blankPages.length === totalPages) {
        return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'All pages appear to be blank. Cannot remove all pages.');
      }

      this.updateProgress(70, 'Removing blank pages...');

      // Load with pdf-lib for manipulation
      const sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const pagesToKeep = Array.from({ length: totalPages }, (_, i) => i)
        .filter(i => !blankPages.includes(i + 1));

      // Remove the blank pages from the source document itself (rather than
      // copying the kept pages into a new one) so forms, outlines, links,
      // attachments, page labels and metadata are kept.
      for (let i = totalPages - 1; i >= 0; i--) {
        if (blankPages.includes(i + 1)) sourcePdf.removePage(i);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await sourcePdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_no_blanks.pdf'), {
        originalPageCount: totalPages,
        blankPagesRemoved: blankPages.length,
        newPageCount: pagesToKeep.length,
        removedPages: blankPages,
      });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to remove blank pages.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private isPageBlank(imageData: ImageData, threshold: number): boolean {
    const data = imageData.data;
    const totalPixels = data.length / 4;
    
    // Calculate grayscaled histogram frequencies
    const histogram = new Float32Array(256);
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Grayscale conversion
      const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
      histogram[gray]++;
    }

    // Shannon Information Entropy calculation: H = -sum(p_i * log2(p_i))
    let entropy = 0;
    const eps = 1e-10; // Prevent log2(0)
    
    for (let i = 0; i < 256; i++) {
      const prob = histogram[i] / totalPixels;
      if (prob > 0) {
        entropy -= prob * Math.log2(prob + eps);
      }
    }

    // Typical text page entropy is > 0.15, scan noise is < 0.08
    // Translate user threshold (e.g. 99) into entropy threshold (higher threshold = lower entropy required to be blank)
    const entropyLimit = (100 - threshold) * 0.02; // threshold 99 -> 0.02, threshold 95 -> 0.10
    
    console.log(`[Remove Blank Pages] Page entropy: ${entropy.toFixed(4)}, limit: ${entropyLimit.toFixed(4)}`);
    return entropy < Math.max(0.01, entropyLimit);
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createRemoveBlankPagesProcessor(): RemoveBlankPagesProcessor {
  return new RemoveBlankPagesProcessor();
}

export async function removeBlankPages(file: File, options: RemoveBlankPagesOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createRemoveBlankPagesProcessor();
  return processor.process({ files: [file], options: options as Record<string, unknown> }, onProgress);
}

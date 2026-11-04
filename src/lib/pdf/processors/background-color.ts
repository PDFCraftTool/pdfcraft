/**
 * PDF Background Color Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface BackgroundColorOptions {
  color: { r: number; g: number; b: number };
  pages?: number[] | 'all';
  opacity?: number;
}

export class BackgroundColorProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<BackgroundColorOptions>;
    const bgOptions: BackgroundColorOptions = {
      color: inputOptions.color ?? { r: 1, g: 1, b: 0.9 }, // Light yellow default
      pages: inputOptions.pages ?? 'all',
      opacity: inputOptions.opacity ?? 1,
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
      const sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const totalPages = sourcePdf.getPageCount();
      const pagesToProcess = bgOptions.pages === 'all'
        ? Array.from({ length: totalPages }, (_, i) => i)
        : (bgOptions.pages as number[]).map(p => p - 1);

      this.updateProgress(30, 'Adding background color...');

      // Paint the background underneath each page's existing content, inside the
      // source document, so forms, outlines, links, attachments, page labels,
      // metadata and selectable text are kept (rather than re-drawing every
      // page as an embedded image of itself in a new document).
      const sourcePages = sourcePdf.getPages();
      const fill = pdfLib.rgb(bgOptions.color.r, bgOptions.color.g, bgOptions.color.b);

      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        if (pagesToProcess.includes(i)) {
          const page = sourcePages[i];
          const { x, y, width, height } = page.getCropBox();

          // drawRectangle appends its own balanced q ... Q stream after the
          // (now wrapped) existing content; move it to the bottom of the stack.
          page.drawRectangle({
            x,
            y,
            width,
            height,
            color: fill,
            opacity: bgOptions.opacity,
          });
          const contents = page.node.Contents();
          if (contents instanceof pdfLib.PDFArray && contents.size() > 1) {
            const background = contents.get(contents.size() - 1);
            contents.remove(contents.size() - 1);
            contents.insert(0, background);
          }
        }

        this.updateProgress(30 + (60 * (i + 1) / totalPages), `Processing page ${i + 1}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await sourcePdf.save({
        useObjectStreams: true,
      });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_background.pdf'), { pageCount: totalPages });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to add background color.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createBackgroundColorProcessor(): BackgroundColorProcessor {
  return new BackgroundColorProcessor();
}

export async function addBackgroundColor(file: File, options: BackgroundColorOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createBackgroundColorProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

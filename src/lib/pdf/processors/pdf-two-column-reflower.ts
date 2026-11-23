/**
 * PDF Two Column Reflower Processor
 * 
 * Intelligently reflows academic papers from 2-column layout to single-column readable format.
 * Utilizes low-level viewports crop division for lossless vector precision reflow.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { getPageView } from '../page-view';

export interface PdfTwoColumnReflowerOptions {
  middleGapRatio: number; // The relative split line (0.45 - 0.55, default 0.5)
  horizontalReading: boolean; // default false (vertical layout)
}

export class PdfTwoColumnReflowerProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const reflowOptions: PdfTwoColumnReflowerOptions = {
      middleGapRatio: 0.5,
      horizontalReading: false,
      ...(options as Partial<PdfTwoColumnReflowerOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF document to reflow.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Reading PDF structure...');
      const arrayBuffer = await file.arrayBuffer();
      const srcDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const destDoc = await pdfLib.PDFDocument.create();

      const pageCount = srcDoc.getPageCount();
      
      this.updateProgress(40, 'Reflowing double columns to single column layout...');

      for (let i = 0; i < pageCount; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled');
        }

        // We copy the page twice to preserve original vector content lossless
        const [pageLeft] = await destDoc.copyPages(srcDoc, [i]);
        const [pageRight] = await destDoc.copyPages(srcDoc, [i]);

        const view = getPageView(pageLeft);
        const splitX = view.width * reflowOptions.middleGapRatio;

        for (const [page, left, right] of [
          [pageLeft, 0, splitX],
          [pageRight, splitX, view.width],
        ] as const) {
          const from = view.place(left, 0);
          const to = view.place(right, view.height);
          page.setCropBox(
            Math.min(from.x, to.x), Math.min(from.y, to.y),
            Math.abs(to.x - from.x), Math.abs(to.y - from.y),
          );
          destDoc.addPage(page);
        }

        this.updateProgress(40 + Math.floor((i / pageCount) * 50), `Processing page ${i + 1}/${pageCount}...`);
      }

      this.updateProgress(90, 'Assembling single-column reflowed document...');
      const outputBytes = await destDoc.save();
      const blob = new Blob([outputBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      
      const lastDot = file.name.lastIndexOf('.');
      const baseName = lastDot === -1 ? file.name : file.name.slice(0, lastDot);
      const outputFilename = `${baseName}_single_column.pdf`;

      return this.createSuccessOutput(blob, outputFilename, {
        originalPagesCount: pageCount,
        reflowedPagesCount: destDoc.getPageCount(),
        appliedGapRatio: reflowOptions.middleGapRatio,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to reflow academic two-column PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createPdfTwoColumnReflowerProcessor(): PdfTwoColumnReflowerProcessor {
  return new PdfTwoColumnReflowerProcessor();
}

export async function reflowTwoColumnPDF(
  files: File[],
  options?: Partial<PdfTwoColumnReflowerOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPdfTwoColumnReflowerProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

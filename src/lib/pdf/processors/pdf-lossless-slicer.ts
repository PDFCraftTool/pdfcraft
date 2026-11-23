/**
 * PDF Lossless Slicer Processor
 * 
 * Slices ultra-large engineering blueprints/drawings losslessly by rewriting /CropBox and /MediaBox view bounds.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { getPageView } from '../page-view';

export interface PdfLosslessSlicerOptions {
  sliceX: number;      // Percentage 0-1
  sliceY: number;      // Percentage 0-1
  sliceWidth: number;  // Percentage 0-1
  sliceHeight: number; // Percentage 0-1
  pageNumber: number;  // 1-based page index
}

export class PdfLosslessSlicerProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const sliceOptions: PdfLosslessSlicerOptions = {
      sliceX: 0.1,
      sliceY: 0.1,
      sliceWidth: 0.8,
      sliceHeight: 0.8,
      pageNumber: 1,
      ...(options as Partial<PdfLosslessSlicerOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file for slicing.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(30, 'Reading original blueprints...');
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const pageCount = pdfDoc.getPageCount();

      const pageIdx = sliceOptions.pageNumber - 1;
      if (pageIdx < 0 || pageIdx >= pageCount) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_OPTIONS,
          `Invalid page number ${sliceOptions.pageNumber}. Blueprint has ${pageCount} pages.`
        );
      }

      this.updateProgress(60, 'Slicing specific high-resolution slice window...');

      const page = pdfDoc.getPage(pageIdx);
      const view = getPageView(page);

      // Percentages are measured from the displayed top-left corner.
      const left = sliceOptions.sliceX * view.width;
      const bottom = (1 - sliceOptions.sliceY - sliceOptions.sliceHeight) * view.height;
      const from = view.place(left, bottom);
      const to = view.place(left + sliceOptions.sliceWidth * view.width, bottom + sliceOptions.sliceHeight * view.height);
      const cropX = Math.min(from.x, to.x);
      const cropY = Math.min(from.y, to.y);
      const cropW = Math.abs(to.x - from.x);
      const cropH = Math.abs(to.y - from.y);

      // Adjust MediaBox and CropBox parameters in lossless fashion
      page.setMediaBox(cropX, cropY, cropW, cropH);
      page.setCropBox(cropX, cropY, cropW, cropH);

      // Create a new doc containing only this page for efficiency and compactness
      const destDoc = await pdfLib.PDFDocument.create();
      const [copiedPage] = await destDoc.copyPages(pdfDoc, [pageIdx]);
      destDoc.addPage(copiedPage);

      this.updateProgress(85, 'Compressing lossless layout slice streams...');
      const outputBytes = await destDoc.save({ useObjectStreams: true });
      const blob = new Blob([outputBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      const suffix = `_sliced_p${sliceOptions.pageNumber}.pdf`;
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, suffix), {
        originalPagesCount: pageCount,
        sliceBounds: {
          x: cropX.toFixed(1),
          y: cropY.toFixed(1),
          w: cropW.toFixed(1),
          h: cropH.toFixed(1),
        },
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to slice engineering blueprint losslessly.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createPdfLosslessSlicerProcessor(): PdfLosslessSlicerProcessor {
  return new PdfLosslessSlicerProcessor();
}

export async function slicePDFLossless(
  files: File[],
  options?: Partial<PdfLosslessSlicerOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPdfLosslessSlicerProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

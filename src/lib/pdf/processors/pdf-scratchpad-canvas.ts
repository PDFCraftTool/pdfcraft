/**
 * PDF Scratchpad Canvas Processor
 * 
 * Appends interactive grids/ruled notes canvas alongside PDF pages by expanding page media limits losslessly.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface PdfScratchpadCanvasOptions {
  padPosition: 'right' | 'bottom';
  padSize: number; // pt (default 200)
  gridType: 'grid' | 'ruled' | 'blank';
}

export class PdfScratchpadCanvasProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const canvasOptions: PdfScratchpadCanvasOptions = {
      padPosition: 'right',
      padSize: 200,
      gridType: 'grid',
      ...(options as Partial<PdfScratchpadCanvasOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF document to stitch scratchpad canvases.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(30, 'Reading document structures...');
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();
      const pageCount = pages.length;

      const { rgb } = pdfLib;
      const padSize = canvasOptions.padSize;
      const padPos = canvasOptions.padPosition;
      const type = canvasOptions.gridType;

      this.updateProgress(50, 'Stitching premium scratchpad notebooks canvas...');

      for (let i = 0; i < pageCount; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled');
        }

        const page = pages[i];
        const { width, height } = page.getSize();

        // Calculate expanded size and offset coordinates
        if (padPos === 'right') {
          // Expand width
          page.setSize(width + padSize, height);
          
          // Draw note pad background on the right side
          page.drawRectangle({
            x: width,
            y: 0,
            width: padSize,
            height,
            color: rgb(0.98, 0.98, 0.96),
          });

          // Draw separator line
          page.drawLine({
            start: { x: width, y: 0 },
            end: { x: width, y: height },
            thickness: 1.5,
            color: rgb(0.8, 0.8, 0.8),
          });

          // Draw lines or grid pattern
          if (type === 'ruled') {
            const spacing = 20;
            for (let y = spacing; y < height; y += spacing) {
              page.drawLine({
                start: { x: width + 10, y },
                end: { x: width + padSize - 10, y },
                thickness: 0.5,
                color: rgb(0.85, 0.85, 0.9),
              });
            }
          } else if (type === 'grid') {
            const spacing = 15;
            // Vertical lines
            for (let x = width + spacing; x < width + padSize; x += spacing) {
              page.drawLine({
                start: { x, y: 0 },
                end: { x, y: height },
                thickness: 0.3,
                color: rgb(0.9, 0.9, 0.9),
              });
            }
            // Horizontal lines
            for (let y = spacing; y < height; y += spacing) {
              page.drawLine({
                start: { x: width, y },
                end: { x: width + padSize, y },
                thickness: 0.3,
                color: rgb(0.9, 0.9, 0.9),
              });
            }
          }

        } else {
          // Add space below the existing page without moving its content or annotations.
          const { x, y, width, height } = page.getCropBox();
          page.setMediaBox(x, y - padSize, width, height + padSize);
          page.setCropBox(x, y - padSize, width, height + padSize);
          page.pushOperators(
            pdfLib.pushGraphicsState(),
            pdfLib.concatTransformationMatrix(1, 0, 0, 1, x, y - padSize),
          );

          // Draw in local scratchpad coordinates within the new bottom area.
          page.drawRectangle({
            x: 0,
            y: 0,
            width,
            height: padSize,
            color: rgb(0.98, 0.98, 0.96),
          });

          // Draw separator line
          page.drawLine({
            start: { x: 0, y: padSize },
            end: { x: width, y: padSize },
            thickness: 1.5,
            color: rgb(0.8, 0.8, 0.8),
          });

          if (type === 'ruled') {
            const spacing = 20;
            for (let y = 10; y < padSize - 10; y += spacing) {
              page.drawLine({
                start: { x: 10, y },
                end: { x: width - 10, y },
                thickness: 0.5,
                color: rgb(0.85, 0.85, 0.9),
              });
            }
          } else if (type === 'grid') {
            const spacing = 15;
            // Vertical lines
            for (let x = spacing; x < width; x += spacing) {
              page.drawLine({
                start: { x, y: 0 },
                end: { x, y: padSize },
                thickness: 0.3,
                color: rgb(0.9, 0.9, 0.9),
              });
            }
            // Horizontal lines
            for (let y = spacing; y < padSize; y += spacing) {
              page.drawLine({
                start: { x: 0, y },
                end: { x: width, y },
                thickness: 0.3,
                color: rgb(0.9, 0.9, 0.9),
              });
            }
          }
          page.pushOperators(pdfLib.popGraphicsState());
        }

        this.updateProgress(50 + Math.floor((i / pageCount) * 40), `Rendering canvas page ${i + 1}/${pageCount}...`);
      }

      this.updateProgress(90, 'Packaging extended notebook PDF streams...');
      const outputBytes = await pdfDoc.save();
      const blob = new Blob([outputBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_with_scratchpad.pdf'), {
        pagesProcessed: pageCount,
        padPosition: canvasOptions.padPosition,
        padSize: canvasOptions.padSize,
        gridType: canvasOptions.gridType,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to stitch scratchpad canvases.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createPdfScratchpadCanvasProcessor(): PdfScratchpadCanvasProcessor {
  return new PdfScratchpadCanvasProcessor();
}

export async function stitchScratchpadCanvas(
  files: File[],
  options?: Partial<PdfScratchpadCanvasOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPdfScratchpadCanvasProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

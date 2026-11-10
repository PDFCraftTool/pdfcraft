/**
 * PDF Invert Colors Processor
 * Requirements: 5.1
 * 
 * Renders each page to canvas at high resolution, inverts pixel colors (255 - value),
 * and re-embeds as images in a new PDF while preserving original page dimensions.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, loadPdfjs } from '../loader';

export interface InvertColorsOptions {
  pages?: number[] | 'all';
  scale?: number; // Render scale for quality, default 3 for high quality (300 DPI equivalent)
}

export class InvertColorsProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const invertOptions: InvertColorsOptions = {
      pages: 'all',
      scale: 3, // Higher scale = better quality (3x = ~216 DPI for standard PDF)
      ...options as InvertColorsOptions,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(5, 'Loading PDF libraries...');
      const [pdfLib, pdfJs] = await Promise.all([loadPdfLib(), loadPdfjs()]);

      this.updateProgress(10, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();

      // Load with pdf.js for rendering
      const pdfjsDoc = await pdfJs.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdfjsDoc.numPages;

      const pagesToProcess = invertOptions.pages === 'all'
        ? Array.from({ length: totalPages }, (_, i) => i + 1)
        : (invertOptions.pages as number[]);

      // Create new PDF document
      const newPdf = await pdfLib.PDFDocument.create();

      this.updateProgress(15, 'Inverting colors...');

      for (let i = 0; i < pagesToProcess.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageNum = pagesToProcess[i];
        const progressPercent = 15 + (75 * (i / pagesToProcess.length));
        this.updateProgress(progressPercent, `Processing page ${pageNum} of ${totalPages}...`);

        // Get page and its original dimensions (in PDF points, 72 points = 1 inch)
        const page = await pdfjsDoc.getPage(pageNum);
        const originalViewport = page.getViewport({ scale: 1 });
        const originalWidth = originalViewport.width;  // Original PDF width in points
        const originalHeight = originalViewport.height; // Original PDF height in points

        // Render at higher scale for better quality
        const renderScale = invertOptions.scale || 3;
        const renderViewport = page.getViewport({ scale: renderScale });

        const canvas = document.createElement('canvas');
        canvas.width = renderViewport.width;
        canvas.height = renderViewport.height;
        const ctx = canvas.getContext('2d')!;

        await page.render({
          canvasContext: ctx,
          viewport: renderViewport,
        }).promise;

        // Invert colors pixel by pixel
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let j = 0; j < data.length; j += 4) {
          data[j] = 255 - data[j];       // R
          data[j + 1] = 255 - data[j + 1]; // G
          data[j + 2] = 255 - data[j + 2]; // B
          // Alpha (data[j + 3]) stays unchanged
        }
        ctx.putImageData(imageData, 0, 0);

        // Convert canvas to PNG and embed in new PDF
        const pngImageBytes = await this.canvasToPngBytes(canvas);
        const image = await newPdf.embedPng(pngImageBytes);

        // Add page with ORIGINAL dimensions (not rendered pixel dimensions)
        // This preserves the original PDF page size
        const newPage = newPdf.addPage([originalWidth, originalHeight]);
        newPage.drawImage(image, {
          x: 0,
          y: 0,
          width: originalWidth,
          height: originalHeight,
        });
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await newPdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_inverted.pdf'), { pageCount: pagesToProcess.length });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to invert colors.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private canvasToPngBytes(canvas: HTMLCanvasElement): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to convert canvas to blob'));
          return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
        reader.onerror = () => reject(new Error('Failed to read blob'));
        reader.readAsArrayBuffer(blob);
      }, 'image/png');
    });
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createInvertColorsProcessor(): InvertColorsProcessor {
  return new InvertColorsProcessor();
}

export async function invertColors(file: File, options: InvertColorsOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createInvertColorsProcessor();
  return processor.process({ files: [file], options: options as Record<string, unknown> }, onProgress);
}

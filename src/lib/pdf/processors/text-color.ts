/**
 * PDF Text Color Processor
 * Requirements: 5.1
 * 
 * Renders pages to canvas and replaces pixels within a specified
 * brightness range with the target color. Works for both dark text
 * on light backgrounds and light text on dark backgrounds.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, loadPdfjs } from '../loader';

export interface TextColorOptions {
  color: { r: number; g: number; b: number };
  pages?: number[] | 'all';
  // Mode: 'dark' = change dark pixels (text on light bg), 'light' = change light pixels (text on dark bg)
  mode?: 'dark' | 'light';
  threshold?: number; // Brightness threshold (0-255, default 128)
  scale?: number; // Render scale for quality (default 3)
}

export class TextColorProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<TextColorOptions>;
    const textOptions: TextColorOptions = {
      color: inputOptions.color ?? { r: 0, g: 0, b: 0 },
      pages: inputOptions.pages ?? 'all',
      mode: inputOptions.mode ?? 'dark',
      threshold: inputOptions.threshold ?? 128,
      scale: inputOptions.scale ?? 3,
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

      const pagesToProcess = textOptions.pages === 'all'
        ? Array.from({ length: totalPages }, (_, i) => i + 1)
        : (textOptions.pages as number[]);

      // Create new PDF document
      const newPdf = await pdfLib.PDFDocument.create();

      this.updateProgress(15, 'Changing text color...');

      const { r, g, b } = textOptions.color;
      const threshold = textOptions.threshold!;
      const isDarkMode = textOptions.mode === 'dark';

      for (let i = 0; i < pagesToProcess.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageNum = pagesToProcess[i];
        const progressPercent = 15 + (75 * (i / pagesToProcess.length));
        this.updateProgress(progressPercent, `Processing page ${pageNum} of ${totalPages}...`);

        // Get page and its original dimensions
        const page = await pdfjsDoc.getPage(pageNum);
        const originalViewport = page.getViewport({ scale: 1 });
        const originalWidth = originalViewport.width;
        const originalHeight = originalViewport.height;

        // Render at higher scale for better quality
        const renderScale = textOptions.scale || 3;
        const renderViewport = page.getViewport({ scale: renderScale });

        const canvas = document.createElement('canvas');
        const width = renderViewport.width;
        const height = renderViewport.height;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d')!;

        await page.render({
          canvasContext: ctx,
          viewport: renderViewport,
        }).promise;

        // Get image data and change colors
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let j = 0; j < data.length; j += 4) {
          const pixelR = data[j];
          const pixelG = data[j + 1];
          const pixelB = data[j + 2];

          // Calculate brightness (simple average)
          const brightness = (pixelR + pixelG + pixelB) / 3;

          // Check if pixel should be changed based on mode
          const shouldChange = isDarkMode
            ? brightness < threshold  // Dark mode: change dark pixels
            : brightness > threshold; // Light mode: change light pixels

          if (shouldChange) {
            data[j] = r * 255;       // R
            data[j + 1] = g * 255;   // G
            data[j + 2] = b * 255;   // B
            // Alpha stays unchanged
          }
        }

        ctx.putImageData(imageData, 0, 0);

        // Convert canvas to PNG and embed in new PDF
        const pngImageBytes = await this.canvasToPngBytes(canvas);
        const image = await newPdf.embedPng(pngImageBytes);

        // Add page with ORIGINAL dimensions
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
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_textcolor.pdf'), { pageCount: pagesToProcess.length });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to change text color.', error instanceof Error ? error.message : 'Unknown error');
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

export function createTextColorProcessor(): TextColorProcessor {
  return new TextColorProcessor();
}

export async function changeTextColor(file: File, options: TextColorOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createTextColorProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

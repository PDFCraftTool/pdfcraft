/**
 * PDF Page Resizer Uniform Processor
 * 
 * Harmonizes multi-spec PDF merging by scaling and centering all pages to a uniform target dimension (e.g. A4).
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { ensurePageContents } from '../page-contents';

export interface PdfPageResizerUniformOptions {
  targetSize: 'A4' | 'A3' | 'Letter';
  scaleMode: 'fit' | 'fill';
}

const TARGET_DIMENSIONS = {
  A4: { width: 595.27, height: 841.89 },
  A3: { width: 841.89, height: 1190.55 },
  Letter: { width: 612.0, height: 792.0 },
};

export class PdfPageResizerUniformProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const resizeOptions: PdfPageResizerUniformOptions = {
      targetSize: 'A4',
      scaleMode: 'fit',
      ...(options as Partial<PdfPageResizerUniformOptions>),
    };

    if (files.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload at least one PDF file to resize.'
      );
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();
      const destDoc = await pdfLib.PDFDocument.create();

      const targetDim = TARGET_DIMENSIONS[resizeOptions.targetSize] || TARGET_DIMENSIONS.A4;
      let processedCount = 0;

      for (let fIdx = 0; fIdx < files.length; fIdx++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled');
        }

        const file = files[fIdx];
        this.updateProgress(
          20 + Math.floor((fIdx / files.length) * 60),
          `Importing & Resizing pages from ${file.name}...`
        );

        const arrayBuffer = await file.arrayBuffer();
        const srcDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
        const srcPagesCount = srcDoc.getPageCount();

        // Embed all pages of srcDoc
        for (let pIdx = 0; pIdx < srcPagesCount; pIdx++) {
          const [srcPage] = await destDoc.copyPages(srcDoc, [pIdx]);
          const { width: srcW, height: srcH } = srcPage.getSize();

          // Embed page as an image-like object (XObject)
          const embeddedPage = await destDoc.embedPage(ensurePageContents(srcPage));

          // Create a new blank page with uniform size
          const newPage = destDoc.addPage([targetDim.width, targetDim.height]);

          // Calculate scale factors
          const scaleX = targetDim.width / srcW;
          const scaleY = targetDim.height / srcH;
          let scale = 1;

          if (resizeOptions.scaleMode === 'fit') {
            scale = Math.min(scaleX, scaleY);
          } else {
            scale = Math.max(scaleX, scaleY);
          }

          const drawW = srcW * scale;
          const drawH = srcH * scale;

          // Center alignment
          const xOffset = (targetDim.width - drawW) / 2;
          const yOffset = (targetDim.height - drawH) / 2;

          newPage.drawPage(embeddedPage, {
            x: xOffset,
            y: yOffset,
            width: drawW,
            height: drawH,
          });

          processedCount++;
        }
      }

      this.updateProgress(90, 'Generating uniform-sized PDF output...');
      const outputBytes = await destDoc.save();
      const blob = new Blob([outputBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      const originalName = files[0].name;
      const lastDot = originalName.lastIndexOf('.');
      const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
      const outputFilename = `${baseName}_resized_uniform.pdf`;

      return this.createSuccessOutput(blob, outputFilename, {
        totalResizedPages: processedCount,
        targetSize: resizeOptions.targetSize,
        scaleMode: resizeOptions.scaleMode,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to unify page dimensions.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createPdfPageResizerUniformProcessor(): PdfPageResizerUniformProcessor {
  return new PdfPageResizerUniformProcessor();
}

export async function resizePDFPagesUniform(
  files: File[],
  options?: Partial<PdfPageResizerUniformOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPdfPageResizerUniformProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

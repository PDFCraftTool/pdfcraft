/**
 * PDF Stamps Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface StampItem {
  type: 'preset' | 'image';
  preset?: 'approved' | 'rejected' | 'draft' | 'confidential' | 'final' | 'copy';
  imageData?: string; // Base64
  pageNumber: number;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  opacity?: number;
}

export interface StampsOptions {
  stamps: StampItem[];
}

const PRESET_STAMPS: Record<string, { text: string; color: { r: number; g: number; b: number } }> = {
  approved: { text: 'APPROVED', color: { r: 0, g: 0.6, b: 0 } },
  rejected: { text: 'REJECTED', color: { r: 0.8, g: 0, b: 0 } },
  draft: { text: 'DRAFT', color: { r: 0.5, g: 0.5, b: 0.5 } },
  confidential: { text: 'CONFIDENTIAL', color: { r: 0.8, g: 0, b: 0 } },
  final: { text: 'FINAL', color: { r: 0, g: 0, b: 0.8 } },
  copy: { text: 'COPY', color: { r: 0.5, g: 0.5, b: 0.5 } },
};

export class StampsProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const stampsOptions = options as unknown as StampsOptions;

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    if (!stampsOptions.stamps || stampsOptions.stamps.length === 0) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'At least one stamp is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const totalPages = pdf.getPageCount();
      const font = await pdf.embedFont(pdfLib.StandardFonts.HelveticaBold);

      this.updateProgress(30, 'Adding stamps...');

      for (let i = 0; i < stampsOptions.stamps.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const stamp = stampsOptions.stamps[i];
        const pageIndex = stamp.pageNumber - 1;

        if (pageIndex < 0 || pageIndex >= totalPages) continue;

        const page = pdf.getPage(pageIndex);

        if (stamp.type === 'preset' && stamp.preset) {
          const presetConfig = PRESET_STAMPS[stamp.preset];
          if (presetConfig) {
            // Draw stamp border
            const width = stamp.width || 150;
            const height = stamp.height || 40;

            page.drawRectangle({
              x: stamp.x,
              y: stamp.y,
              width,
              height,
              borderColor: pdfLib.rgb(presetConfig.color.r, presetConfig.color.g, presetConfig.color.b),
              borderWidth: 3,
              opacity: stamp.opacity || 0.8,
              rotate: pdfLib.degrees(stamp.rotation || 0),
            });

            // Draw stamp text
            const fontSize = 18;
            const textWidth = font.widthOfTextAtSize(presetConfig.text, fontSize);
            page.drawText(presetConfig.text, {
              x: stamp.x + (width - textWidth) / 2,
              y: stamp.y + (height - fontSize) / 2,
              size: fontSize,
              font,
              color: pdfLib.rgb(presetConfig.color.r, presetConfig.color.g, presetConfig.color.b),
              opacity: stamp.opacity || 0.8,
              rotate: pdfLib.degrees(stamp.rotation || 0),
            });
          }
        } else if (stamp.type === 'image' && stamp.imageData) {
          try {
            const imageData = stamp.imageData.replace(/^data:image\/\w+;base64,/, '');
            const imageBytes = Uint8Array.from(atob(imageData), c => c.charCodeAt(0));

            let image;
            if (stamp.imageData.includes('image/png')) {
              image = await pdf.embedPng(imageBytes);
            } else {
              image = await pdf.embedJpg(imageBytes);
            }

            page.drawImage(image, {
              x: stamp.x,
              y: stamp.y,
              width: stamp.width || 100,
              height: stamp.height || 100,
              opacity: stamp.opacity || 1,
              rotate: pdfLib.degrees(stamp.rotation || 0),
            });
          } catch (imgError) {
            console.error('Failed to embed stamp image:', imgError);
          }
        }

        this.updateProgress(30 + (60 * (i + 1) / stampsOptions.stamps.length), `Adding stamp ${i + 1}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_stamped.pdf'), {
        stampCount: stampsOptions.stamps.length
      });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to add stamps.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createStampsProcessor(): StampsProcessor {
  return new StampsProcessor();
}

export async function addStamps(file: File, options: StampsOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createStampsProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

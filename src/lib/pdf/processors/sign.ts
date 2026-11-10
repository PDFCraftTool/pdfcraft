/**
 * PDF Sign Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface SignatureItem {
  type: 'draw' | 'type' | 'image';
  data: string; // Base64 image data or text
  pageNumber: number;
  x: number;
  y: number;
  width?: number;
  height?: number;
  fontFamily?: string;
  fontSize?: number;
}

export interface SignOptions {
  signatures: SignatureItem[];
}

async function ensurePngOrJpgBytes(dataUrlOrRaw: string): Promise<{ bytes: Uint8Array; format: 'png' | 'jpg' }> {
  const isPng = dataUrlOrRaw.startsWith('data:image/png') || dataUrlOrRaw.includes('image/png');
  const base64Clean = dataUrlOrRaw.replace(/^data:image\/[a-zA-Z0-9+.-]+;base64,/, '');
  const rawBytes = Uint8Array.from(atob(base64Clean), c => c.charCodeAt(0));

  // Magic bytes check
  if (rawBytes.length >= 4 && rawBytes[0] === 0x89 && rawBytes[1] === 0x50 && rawBytes[2] === 0x4E && rawBytes[3] === 0x47) {
    return { bytes: rawBytes, format: 'png' };
  }
  if (rawBytes.length >= 3 && rawBytes[0] === 0xFF && rawBytes[1] === 0xD8 && rawBytes[2] === 0xFF) {
    return { bytes: rawBytes, format: 'jpg' };
  }

  // If in browser and format is webp/svg/gif/etc., transcode to PNG via canvas
  if (typeof document !== 'undefined') {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      const imgSrc = dataUrlOrRaw.startsWith('data:') ? dataUrlOrRaw : `data:image/png;base64,${base64Clean}`;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('Failed to load image for transcoding'));
        img.src = imgSrc;
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width || 300;
      canvas.height = img.naturalHeight || img.height || 150;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const pngDataUrl = canvas.toDataURL('image/png');
        const pngBase64 = pngDataUrl.replace(/^data:image\/png;base64,/, '');
        const pngBytes = Uint8Array.from(atob(pngBase64), c => c.charCodeAt(0));
        return { bytes: pngBytes, format: 'png' };
      }
    } catch (e) {
      console.warn('Canvas transcoding fallback failed, proceeding with raw bytes:', e);
    }
  }

  return { bytes: rawBytes, format: isPng ? 'png' : 'jpg' };
}

export class SignProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const signOptions = options as unknown as SignOptions;

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    if (!signOptions.signatures || signOptions.signatures.length === 0) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'At least one signature is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const totalPages = pdf.getPageCount();

      this.updateProgress(30, 'Adding signatures...');

      for (let i = 0; i < signOptions.signatures.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const sig = signOptions.signatures[i];
        const pageIndex = sig.pageNumber - 1;

        if (pageIndex < 0 || pageIndex >= totalPages) {
          continue;
        }

        const page = pdf.getPage(pageIndex);

        if (sig.type === 'type') {
          const font = await pdf.embedFont(pdfLib.StandardFonts.Courier);
          page.drawText(sig.data, {
            x: sig.x,
            y: sig.y,
            size: sig.fontSize || 24,
            font,
          });
        } else if (sig.type === 'draw' || sig.type === 'image') {
          // Embed image signature
          try {
            const { bytes, format } = await ensurePngOrJpgBytes(sig.data);
            let image;
            if (format === 'png') {
              image = await pdf.embedPng(bytes);
            } else {
              try {
                image = await pdf.embedJpg(bytes);
              } catch {
                image = await pdf.embedPng(bytes);
              }
            }

            const width = sig.width || 150;
            const height = sig.height || 50;

            page.drawImage(image, {
              x: sig.x,
              y: sig.y,
              width,
              height,
            });
          } catch (imgError) {
            console.error('Failed to embed signature image:', imgError);
          }
        }

        this.updateProgress(30 + (60 * (i + 1) / signOptions.signatures.length), `Adding signature ${i + 1}...`);
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_signed.pdf'), {
        signatureCount: signOptions.signatures.length
      });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to sign PDF.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createSignProcessor(): SignProcessor {
  return new SignProcessor();
}

export async function signPDF(file: File, options: SignOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createSignProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

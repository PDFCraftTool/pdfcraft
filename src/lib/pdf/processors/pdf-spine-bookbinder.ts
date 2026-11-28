/**
 * PDF Spine Bookbinder Processor
 * 
 * Computes paper binding spine thickness and generates a high-precision book cover print layout PDF with fold marks.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface PdfSpineBookbinderOptions {
  pageCount: number;
  paperGsm: 80 | 100 | 120 | 150;
  coverWidthPt: number;  // Standard A4 width: 595.27
  coverHeightPt: number; // Standard A4 height: 841.89
  bookTitle?: string;
}

export class PdfSpineBookbinderProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { options } = input;
    const bindOptions: PdfSpineBookbinderOptions = {
      pageCount: 100,
      paperGsm: 80,
      coverWidthPt: 595.27,
      coverHeightPt: 841.89,
      bookTitle: 'PDFCraft Bound Book',
      ...(options as Partial<PdfSpineBookbinderOptions>),
    };

    try {
      this.updateProgress(15, 'Calculating physical spine bound thickness...');

      // Thickness per sheet (double-sided pages)
      let sheetThicknessMm = 0.1; // 80g
      if (bindOptions.paperGsm === 100) sheetThicknessMm = 0.12;
      else if (bindOptions.paperGsm === 120) sheetThicknessMm = 0.14;
      else if (bindOptions.paperGsm === 150) sheetThicknessMm = 0.18;

      const sheetsCount = Math.ceil(bindOptions.pageCount / 2);
      const spineWidthMm = sheetsCount * sheetThicknessMm;
      
      // Convert mm to PostScript points (1 mm = 2.83465 pt)
      const spineWidthPt = spineWidthMm * 2.83465;

      this.updateProgress(40, 'Loading layout engine...');
      const pdfLib = await loadPdfLib();
      const pdfDoc = await pdfLib.PDFDocument.create();

      // Cover canvas: [Back Cover] [Spine] [Front Cover]
      const totalWidthPt = bindOptions.coverWidthPt * 2 + spineWidthPt;
      const pageHeightPt = bindOptions.coverHeightPt;

      const page = pdfDoc.addPage([totalWidthPt, pageHeightPt]);
      const { rgb, degrees } = pdfLib;

      this.updateProgress(65, 'Drawing high precision alignment grid & crease fold line marks...');

      // Crease fold marks X positions
      const foldX1 = bindOptions.coverWidthPt;
      const foldX2 = bindOptions.coverWidthPt + spineWidthPt;

      // Draw spine background fill (light-grey futuristic HUD aesthetic)
      page.drawRectangle({
        x: foldX1,
        y: 0,
        width: spineWidthPt,
        height: pageHeightPt,
        color: rgb(0.96, 0.96, 0.98),
      });

      // Crease lines (fold lines)
      page.drawLine({
        start: { x: foldX1, y: 0 },
        end: { x: foldX1, y: pageHeightPt },
        thickness: 1,
        color: rgb(0.8, 0.8, 0.85),
        dashArray: [4, 4],
      });

      page.drawLine({
        start: { x: foldX2, y: 0 },
        end: { x: foldX2, y: pageHeightPt },
        thickness: 1,
        color: rgb(0.8, 0.8, 0.85),
        dashArray: [4, 4],
      });

      // Draw title on the spine vertically if title is present and spine is wide enough
      if (bindOptions.bookTitle && spineWidthPt > 12) {
        const font = await pdfDoc.embedFont(pdfLib.StandardFonts.HelveticaBold);
        const fontSize = Math.min(spineWidthPt - 4, 12);
        const titleWidth = font.widthOfTextAtSize(bindOptions.bookTitle, fontSize);
        
        // Draw vertical spine text centered vertically
        const textX = foldX1 + (spineWidthPt - fontSize) / 2 + fontSize - 2;
        const textY = (pageHeightPt + titleWidth) / 2;

        page.drawText(bindOptions.bookTitle, {
          x: textX,
          y: textY,
          size: fontSize,
          font,
          color: rgb(0.1, 0.1, 0.15),
          rotate: degrees(270),
        });
      }

      this.updateProgress(85, 'Injecting print specs stamp details...');

      // Embed details text at bottom of spine for binder info
      const detailFont = await pdfDoc.embedFont(pdfLib.StandardFonts.Helvetica);
      const stampText = `Spine: ${spineWidthMm.toFixed(2)}mm (${spineWidthPt.toFixed(1)}pt) | ${bindOptions.pageCount} Pages | ${bindOptions.paperGsm}g GSM`;
      
      page.drawText(stampText, {
        x: 15,
        y: 15,
        size: 9,
        font: detailFont,
        color: rgb(0.5, 0.5, 0.6),
      });

      this.updateProgress(95, 'Compiling physical bound envelope...');
      const outputBytes = await pdfDoc.save();
      const blob = new Blob([outputBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, 'book_cover_spine_layout.pdf', {
        calculatedSpineWidthMm: spineWidthMm,
        calculatedSpineWidthPt: spineWidthPt,
        pageCount: bindOptions.pageCount,
        gsm: bindOptions.paperGsm,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to design book cover spine.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createPdfSpineBookbinderProcessor(): PdfSpineBookbinderProcessor {
  return new PdfSpineBookbinderProcessor();
}

export async function designPDFSpine(
  files: File[],
  options?: Partial<PdfSpineBookbinderOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPdfSpineBookbinderProcessor();
  return processor.process({ files: files || [], options: options || {} }, onProgress);
}

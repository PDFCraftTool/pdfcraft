/**
 * 3D Booklet & Folding Simulator Processor
 * Impose pages into print sheets and simulate booklet folding order.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { ensurePageContents } from '../page-contents';

export interface BookletFoldingOptions {
  foldingMode: '4-page-fold' | '8-page-saddle' | '4-page-accordion';
  paperSize?: 'A4' | 'Letter';
}

export class BookletFoldingSimulatorProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const foldingOptions: BookletFoldingOptions = {
      foldingMode: '4-page-fold',
      ...(options as Partial<BookletFoldingOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly one PDF file is required.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading pdf-lib engine...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Reading PDF document pages...');
      const arrayBuffer = await file.arrayBuffer();
      const srcDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const srcPageCount = srcDoc.getPageCount();

      this.updateProgress(35, 'Calculating booklet page mapping...');
      
      // Target page count must be a multiple of the mode multiplier
      const multiplier = foldingOptions.foldingMode === '8-page-saddle' ? 8 : 4;
      const targetPageCount = Math.ceil(srcPageCount / multiplier) * multiplier;

      this.updateProgress(50, 'Building imposed sheet-layout document...');
      const outputDoc = await pdfLib.PDFDocument.create();

      // Embed all pages of srcDoc into outputDoc
      const embeddedPages = [];
      for (let i = 0; i < srcPageCount; i++) {
        const page = srcDoc.getPage(i);
        const embedded = await outputDoc.embedPage(ensurePageContents(page));
        embeddedPages.push(embedded);
      }

      const mode = foldingOptions.foldingMode;
      const firstPage = srcDoc.getPage(0);
      const pageWidth = firstPage.getWidth();
      const pageHeight = firstPage.getHeight();
      const sheetWidth = pageWidth * 2;
      const sheetHeight = pageHeight;

      if (mode === '4-page-fold') {
        // 4-page booklet (2 pages per sheet side)
        // Groups of 4: [P4, P1] (Sheet front), [P2, P3] (Sheet back)
        const groupsCount = targetPageCount / 4;
        for (let g = 0; g < groupsCount; g++) {
          const base = g * 4;
          const p1 = base + 0;
          const p2 = base + 1;
          const p3 = base + 2;
          const p4 = base + 3;

          // Sheet 1: Front [P4, P1]
          const sheet1 = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p4 < srcPageCount) {
            sheet1.drawPage(embeddedPages[p4], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p1 < srcPageCount) {
            sheet1.drawPage(embeddedPages[p1], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }

          // Sheet 2: Back [P2, P3]
          const sheet2 = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p2 < srcPageCount) {
            sheet2.drawPage(embeddedPages[p2], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p3 < srcPageCount) {
            sheet2.drawPage(embeddedPages[p3], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }
        }
      } else if (mode === '8-page-saddle') {
        // 8-page saddle stitch (2 sheets, each has 2 sides, total 4 large pages)
        // Group of 8:
        // Sheet 1 Front: P8, P1
        // Sheet 1 Back: P2, P7
        // Sheet 2 Front: P6, P3
        // Sheet 2 Back: P4, P5
        const groupsCount = targetPageCount / 8;
        for (let g = 0; g < groupsCount; g++) {
          const base = g * 8;
          const p = Array.from({ length: 8 }, (_, idx) => base + idx);

          // Sheet 1 Front [P8, P1] -> Indices: p[7], p[0]
          const s1f = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p[7] < srcPageCount) {
            s1f.drawPage(embeddedPages[p[7]], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p[0] < srcPageCount) {
            s1f.drawPage(embeddedPages[p[0]], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }

          // Sheet 1 Back [P2, P7] -> Indices: p[1], p[6]
          const s1b = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p[1] < srcPageCount) {
            s1b.drawPage(embeddedPages[p[1]], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p[6] < srcPageCount) {
            s1b.drawPage(embeddedPages[p[6]], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }

          // Sheet 2 Front [P6, P3] -> Indices: p[5], p[2]
          const s2f = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p[5] < srcPageCount) {
            s2f.drawPage(embeddedPages[p[5]], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p[2] < srcPageCount) {
            s2f.drawPage(embeddedPages[p[2]], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }

          // Sheet 2 Back [P4, P5] -> Indices: p[3], p[4]
          const s2b = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p[3] < srcPageCount) {
            s2b.drawPage(embeddedPages[p[3]], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p[4] < srcPageCount) {
            s2b.drawPage(embeddedPages[p[4]], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }
        }
      } else {
        // 4-page accordion fold (Z-fold)
        const groupsCount = targetPageCount / 4;
        for (let g = 0; g < groupsCount; g++) {
          const base = g * 4;
          const p1 = base + 0;
          const p2 = base + 1;
          const p3 = base + 2;
          const p4 = base + 3;

          // Side 1: P1, P2
          const s1 = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p1 < srcPageCount) {
            s1.drawPage(embeddedPages[p1], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p2 < srcPageCount) {
            s1.drawPage(embeddedPages[p2], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }

          // Side 2: P3, P4
          const s2 = outputDoc.addPage([sheetWidth, sheetHeight]);
          if (p3 < srcPageCount) {
            s2.drawPage(embeddedPages[p3], { x: 0, y: 0, width: pageWidth, height: pageHeight });
          }
          if (p4 < srcPageCount) {
            s2.drawPage(embeddedPages[p4], { x: pageWidth, y: 0, width: pageWidth, height: pageHeight });
          }
        }
      }

      this.updateProgress(80, 'Saving print-imposed PDF data...');
      const pdfBytes = await outputDoc.save();
      const outputBlob = new Blob([pdfBytes as any], { type: 'application/pdf' });
      const outputFilename = file.name.replace(/\.pdf$/i, '_imposed.pdf');

      this.updateProgress(100, 'Booklet imposition complete!');
      return this.createSuccessOutput(outputBlob, outputFilename, {
        pageCount: outputDoc.getPageCount(),
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to perform booklet imposition.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createBookletFoldingSimulatorProcessor(): BookletFoldingSimulatorProcessor {
  return new BookletFoldingSimulatorProcessor();
}

export async function imposeBookletFolding(
  file: File,
  options?: Partial<BookletFoldingOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createBookletFoldingSimulatorProcessor();
  return processor.process(
    {
      files: [file],
      options: options || { foldingMode: '4-page-fold' },
    },
    onProgress
  );
}

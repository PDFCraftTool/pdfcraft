/**
 * Interactive TOC Generator Processor
 * 
 * Automatically scans headings, generates a high-aesthetic front Table of Contents page,
 * injects internal bidirectional /GoTo anchors, and adds "Back to TOC" hovering anchors.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, loadPdfjs } from '../loader';

export interface InteractiveTocOptions {
  title?: string;
  headingsRegex?: string[];
  insertIndex?: number; // 0-based page index to insert TOC at, default: 0 (first page)
}

const DEFAULT_OPTIONS: InteractiveTocOptions = {
  title: 'Table of Contents',
  headingsRegex: ['^第[一二三四五六七八九十百\\d]+章', '^Chapter\\s+\\d+', '^\\d+\\.\\d+'],
  insertIndex: 0,
};

interface HeadingItem {
  title: string;
  pageIndex: number;
}

export class InteractiveTocGeneratorProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const tocOptions: InteractiveTocOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<InteractiveTocOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF analysis engines...');
      const pdfjs = await loadPdfjs();
      const pdfLib = await loadPdfLib();

      const fileBytes = await file.arrayBuffer();
      const pdfjsDoc = await pdfjs.getDocument({ data: fileBytes.slice(0) }).promise;
      const pdfLibDoc = await pdfLib.PDFDocument.load(fileBytes);
      const totalPages = pdfLibDoc.getPageCount();

      this.updateProgress(20, 'Scanning for document heading anchors...');
      const headings: HeadingItem[] = [];
      const regexes = (tocOptions.headingsRegex || []).map(r => new RegExp(r, 'i'));

      const progressInterval = 50 / totalPages;

      for (let i = 1; i <= totalPages; i++) {
        this.updateProgress(20 + i * progressInterval, `Extracting headings on page ${i}...`);
        const page = await pdfjsDoc.getPage(i);
        const textContent = await page.getTextContent();

        for (const item of textContent.items) {
          if (!('str' in item)) continue;
          const text = item.str.trim();
          if (text.length < 3 || text.length > 80) continue;

          let matched = false;
          for (const regex of regexes) {
            if (regex.test(text)) {
              matched = true;
              break;
            }
          }

          if (matched) {
            const isDup = headings.some(h => h.pageIndex === i - 1 && h.title.substring(0, 10) === text.substring(0, 10));
            if (!isDup) {
              headings.push({
                title: text,
                pageIndex: i - 1, // original 0-indexed page number
              });
            }
          }
        }
      }

      this.updateProgress(75, `Identified ${headings.length} anchors. Drawing premium TOC page...`);

      // Let's insert a beautiful table of contents page at requested index
      const insertAt = Math.min(totalPages, Math.max(0, tocOptions.insertIndex || 0));
      const a4Width = 595.28;
      const a4Height = 841.89;
      const tocPage = pdfLibDoc.insertPage(insertAt, [a4Width, a4Height]);

      const standardFont = await pdfLibDoc.embedFont(pdfLib.StandardFonts.HelveticaBold);
      const regularFont = await pdfLibDoc.embedFont(pdfLib.StandardFonts.Helvetica);

      // Draw modern title
      tocPage.drawText(tocOptions.title || 'Table of Contents', {
        x: 60,
        y: a4Height - 80,
        size: 26,
        font: standardFont,
        color: pdfLib.rgb(0.06, 0.09, 0.16),
      });

      // Draw a sleek line divider
      tocPage.drawLine({
        start: { x: 60, y: a4Height - 95 },
        end: { x: a4Width - 60, y: a4Height - 95 },
        thickness: 1.5,
        color: pdfLib.rgb(0.85, 0.88, 0.93),
      });

      // Draw headings as TOC entries
      let yOffset = a4Height - 140;
      const limit = Math.min(25, headings.length); // limit page to avoid text overflow

      for (let idx = 0; idx < limit; idx++) {
        const h = headings[idx];
        // pageIndex is original index. Since we inserted 1 TOC page before it, 
        // the target page index in modified document becomes:
        const targetPageIndex = h.pageIndex >= insertAt ? h.pageIndex + 1 : h.pageIndex;

        // Draw title
        tocPage.drawText(h.title, {
          x: 70,
          y: yOffset,
          size: 13,
          font: regularFont,
          color: pdfLib.rgb(0.18, 0.24, 0.35),
        });

        // Draw dots and page number
        const pageText = String(targetPageIndex + 1);
        const textWidth = regularFont.widthOfTextAtSize(h.title, 13);
        const pageTextWidth = regularFont.widthOfTextAtSize(pageText, 13);

        tocPage.drawText(pageText, {
          x: a4Width - 70 - pageTextWidth,
          y: yOffset,
          size: 13,
          font: standardFont,
          color: pdfLib.rgb(0.09, 0.44, 0.9),
        });

        // Draw helper dot leader
        let dotX = 80 + textWidth;
        const endDotX = a4Width - 90 - pageTextWidth;
        while (dotX < endDotX) {
          tocPage.drawText('.', {
            x: dotX,
            y: yOffset,
            size: 12,
            font: regularFont,
            color: pdfLib.rgb(0.7, 0.7, 0.7),
          });
          dotX += 8;
        }

        // Draw an interactive /GoTo Link annotation on top of the TOC entry
        const linkRect = [70, yOffset - 3, a4Width - 70, yOffset + 11];
        
        // low level annotation binding
        const targetPage = pdfLibDoc.getPage(targetPageIndex);
        const annotDict = pdfLibDoc.context.obj({
          Type: 'Annot',
          Subtype: 'Link',
          Rect: linkRect,
          Border: [0, 0, 0],
          A: {
            Type: 'Action',
            S: 'GoTo',
            D: [targetPage.ref, 'XYZ', null, null, null],
          },
        });
        const annotRef = pdfLibDoc.context.register(annotDict);
        
        const annotsList = tocPage.node.get(pdfLib.PDFName.of('Annots'));
        if (annotsList instanceof pdfLib.PDFArray) {
          annotsList.push(annotRef);
        } else {
          tocPage.node.set(pdfLib.PDFName.of('Annots'), pdfLibDoc.context.obj([annotRef]));
        }

        yOffset -= 26;
      }

      this.updateProgress(90, 'Adding bidirectional Back-to-TOC anchors...');
      
      // Inject "Back to TOC" button on each target page
      const modifiedPages = pdfLibDoc.getPages();
      for (let idx = 0; idx < limit; idx++) {
        const h = headings[idx];
        const targetPageIndex = h.pageIndex >= insertAt ? h.pageIndex + 1 : h.pageIndex;
        
        if (targetPageIndex < modifiedPages.length) {
          const pg = modifiedPages[targetPageIndex];
          const pgSize = pg.getSize();

          // Draw small sleek visual anchor text: [TOC] in top corner
          pg.drawRectangle({
            x: pgSize.width - 65,
            y: pgSize.height - 35,
            width: 45,
            height: 20,
            color: pdfLib.rgb(0.93, 0.95, 0.98),
            borderColor: pdfLib.rgb(0.79, 0.84, 0.91),
            borderWidth: 1,
            opacity: 0.85,
          });

          pg.drawText('TOC', {
            x: pgSize.width - 57,
            y: pgSize.height - 29,
            size: 9,
            font: regularFont,
            color: pdfLib.rgb(0.2, 0.35, 0.6),
          });

          // Embed Link back to TOC page
          const backAnnot = pdfLibDoc.context.obj({
            Type: 'Annot',
            Subtype: 'Link',
            Rect: [pgSize.width - 65, pgSize.height - 35, pgSize.width - 20, pgSize.height - 15],
            Border: [0, 0, 0],
            A: {
              Type: 'Action',
              S: 'GoTo',
              D: [tocPage.ref, 'XYZ', null, null, null],
            },
          });
          const backRef = pdfLibDoc.context.register(backAnnot);

          const pgAnnots = pg.node.get(pdfLib.PDFName.of('Annots'));
          if (pgAnnots instanceof pdfLib.PDFArray) {
            pgAnnots.push(backRef);
          } else {
            pg.node.set(pdfLib.PDFName.of('Annots'), pdfLibDoc.context.obj([backRef]));
          }
        }
      }

      this.updateProgress(95, 'Saving compiled interactive PDF...');
      const pdfBytes = await pdfLibDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, `${file.name.replace(/\.pdf$/i, '')}_toc_interactive.pdf`, {
        pageCount: totalPages + 1,
        tocEntries: headings.length,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to generate interactive TOC.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createInteractiveTocGeneratorProcessor(): InteractiveTocGeneratorProcessor {
  return new InteractiveTocGeneratorProcessor();
}

export async function generateInteractiveToc(
  files: File[],
  options?: Partial<InteractiveTocOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createInteractiveTocGeneratorProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

/**
 * Bookmarks Auto Generator Processor
 * 
 * Automatically generates structural PDF bookmarks (Outlines) based on typography analysis 
 * (font size, styles) and chapter heading pattern matching, and injects them physically.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, loadPdfjs } from '../loader';

export interface BookmarksAutoOptions {
  detectStrategy: 'regex' | 'font-size' | 'both';
  minFontSize?: number;
  matchPatterns?: string[];
}

const DEFAULT_OPTIONS: BookmarksAutoOptions = {
  detectStrategy: 'both',
  minFontSize: 16,
  matchPatterns: [
    '^第[一二三四五六七八九十百\\d]+章',
    '^第[一二三四五六七八九十百\\d]+部分',
    '^Chapter\\s+\\d+',
    '^\\d+\\.\\d+',
  ],
};

interface DeducedBookmark {
  title: string;
  pageIndex: number;
  level: number;
}

export class BookmarksAutoGeneratorProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const autoOptions: BookmarksAutoOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<BookmarksAutoOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF engines...');
      const pdfjs = await loadPdfjs();
      const pdfLib = await loadPdfLib();

      const fileBytes = await file.arrayBuffer();
      const pdfjsDoc = await pdfjs.getDocument({ data: fileBytes.slice(0) }).promise;
      const pdfLibDoc = await pdfLib.PDFDocument.load(fileBytes);
      const totalPages = pdfLibDoc.getPageCount();

      const progressInterval = 70 / totalPages;
      const bookmarks: DeducedBookmark[] = [];

      const regexList = (autoOptions.matchPatterns || []).map(p => new RegExp(p, 'i'));

      for (let i = 1; i <= totalPages; i++) {
        this.updateProgress(15 + (i - 1) * progressInterval, `Analyzing hierarchy of page ${i}...`);

        const page = await pdfjsDoc.getPage(i);
        const textContent = await page.getTextContent();

        for (const item of textContent.items) {
          if (!('str' in item)) continue;
          
          const text = item.str.trim();
          if (text.length < 3 || text.length > 100) continue;

          const fontSize = Math.hypot(item.transform[2], item.transform[3]) || 10;
          
          let matched = false;
          let matchedLevel = 1;

          // 1. Regex strategy
          if (autoOptions.detectStrategy === 'regex' || autoOptions.detectStrategy === 'both') {
            for (let rIdx = 0; rIdx < regexList.length; rIdx++) {
              if (regexList[rIdx].test(text)) {
                matched = true;
                matchedLevel = rIdx + 1; // Assign level based on matching pattern index
                break;
              }
            }
          }

          // 2. Font size strategy
          if (!matched && (autoOptions.detectStrategy === 'font-size' || autoOptions.detectStrategy === 'both')) {
            const minSize = autoOptions.minFontSize || 16;
            if (fontSize >= minSize) {
              matched = true;
              // Map sizes to levels: very large font -> level 1, moderately large -> level 2
              matchedLevel = fontSize >= minSize + 4 ? 1 : 2;
            }
          }

          if (matched) {
            // Avoid duplicate bookmarks for the same page with very similar titles
            const isDuplicate = bookmarks.some(b => b.pageIndex === i - 1 && b.title.substring(0, 10) === text.substring(0, 10));
            if (!isDuplicate) {
              bookmarks.push({
                title: text,
                pageIndex: i - 1,
                level: matchedLevel,
              });
            }
          }
        }
      }

      this.updateProgress(85, `Deducted ${bookmarks.length} outline bookmarks. Injecting...`);

      if (bookmarks.length > 0) {
        await this.injectBookmarksToDoc(pdfLibDoc, bookmarks, pdfLib);
      }

      this.updateProgress(95, 'Saving bookmarked PDF document...');
      const pdfBytes = await pdfLibDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, `${file.name.replace(/\.pdf$/i, '')}_bookmarked.pdf`, {
        pageCount: totalPages,
        bookmarksAdded: bookmarks.length,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to auto-generate PDF bookmarks.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  private async injectBookmarksToDoc(
    pdfDoc: Awaited<ReturnType<typeof loadPdfLib>>['PDFDocument'] extends { create(): Promise<infer T> } ? T : any,
    bookmarks: DeducedBookmark[],
    pdfLib: Awaited<ReturnType<typeof loadPdfLib>>
  ): Promise<void> {
    const context = pdfDoc.context;
    const catalog = pdfDoc.catalog;

    const outlineEntryRefs: any[] = [];

    // Create entry dictionaries
    for (let i = 0; i < bookmarks.length; i++) {
      const b = bookmarks[i];
      const page = pdfDoc.getPage(b.pageIndex);
      const pageRef = page.ref;

      const destArray = pdfLib.PDFArray.withContext(context);
      destArray.push(pageRef);
      destArray.push(pdfLib.PDFName.of('XYZ'));
      destArray.push(pdfLib.PDFNull);
      destArray.push(pdfLib.PDFNull);
      destArray.push(pdfLib.PDFNull);

      const bookmarkDict = pdfLib.PDFDict.withContext(context);
      bookmarkDict.set(pdfLib.PDFName.of('Title'), pdfLib.PDFHexString.fromText(b.title));
      bookmarkDict.set(pdfLib.PDFName.of('Dest'), destArray);

      const bookmarkRef = context.register(bookmarkDict);
      outlineEntryRefs.push(bookmarkRef);
    }

    // Outline parent dictionary
    const outlineDict = pdfLib.PDFDict.withContext(context);
    outlineDict.set(pdfLib.PDFName.of('Type'), pdfLib.PDFName.of('Outlines'));
    outlineDict.set(pdfLib.PDFName.of('Count'), pdfLib.PDFNumber.of(bookmarks.length));

    const outlineRef = context.register(outlineDict);

    // Wire up sibling nodes
    for (let i = 0; i < outlineEntryRefs.length; i++) {
      const entryRef = outlineEntryRefs[i];
      const entryDict = context.lookup(entryRef) as any;

      entryDict.set(pdfLib.PDFName.of('Parent'), outlineRef);

      if (i > 0) {
        entryDict.set(pdfLib.PDFName.of('Prev'), outlineEntryRefs[i - 1]);
      }
      if (i < outlineEntryRefs.length - 1) {
        entryDict.set(pdfLib.PDFName.of('Next'), outlineEntryRefs[i + 1]);
      }
    }

    if (outlineEntryRefs.length > 0) {
      outlineDict.set(pdfLib.PDFName.of('First'), outlineEntryRefs[0]);
      outlineDict.set(pdfLib.PDFName.of('Last'), outlineEntryRefs[outlineEntryRefs.length - 1]);
    }

    catalog.set(pdfLib.PDFName.of('Outlines'), outlineRef);
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createBookmarksAutoGeneratorProcessor(): BookmarksAutoGeneratorProcessor {
  return new BookmarksAutoGeneratorProcessor();
}

export async function autoGenerateBookmarks(
  files: File[],
  options?: Partial<BookmarksAutoOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createBookmarksAutoGeneratorProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

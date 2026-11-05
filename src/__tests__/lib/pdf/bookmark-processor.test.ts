import { describe, expect, it } from 'vitest';
import { PDFDocument, PDFName, PDFDict, PDFArray } from 'pdf-lib';
import { processBookmarks } from '@/lib/pdf/processors/bookmark';

const toPdfFile = (bytes: Uint8Array, name: string): File => {
  const arrayBuffer = bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  ) as ArrayBuffer;
  const file = new File([arrayBuffer], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', {
    value: async () => arrayBuffer,
  });
  return file;
};

const readBlob = (blob: Blob): Promise<Uint8Array> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });

describe('processBookmarks', () => {
  it('removes every existing bookmark when saving an empty list', async () => {
    const source = await PDFDocument.create();
    source.addPage([612, 792]);
    source.addPage([612, 792]);
    const sourceFile = toPdfFile(await source.save(), 'doc.pdf');

    const withBookmarks = await processBookmarks(sourceFile, {
      action: 'add',
      bookmarks: [
        { id: 'a', title: 'Page 1', pageNumber: 1 },
        { id: 'b', title: 'Page 2', pageNumber: 2 },
      ],
    });
    expect(withBookmarks.success).toBe(true);
    const bookmarkedBytes = await readBlob(withBookmarks.result as Blob);
    const bookmarked = await PDFDocument.load(bookmarkedBytes);
    expect(bookmarked.catalog.get(PDFName.of('Outlines'))).toBeDefined();

    const cleared = await processBookmarks(toPdfFile(bookmarkedBytes, 'doc_bookmarked.pdf'), {
      action: 'add',
      bookmarks: [],
    });
    expect(cleared.success).toBe(true);
    const output = await PDFDocument.load(await readBlob(cleared.result as Blob));
    expect(output.catalog.get(PDFName.of('Outlines'))).toBeUndefined();
    expect(output.getPageCount()).toBe(2);
  });
  it.each([
    ['XYZ', [12, 240, 1.5], ['/XYZ', '12', '240', '1.5']],
    ['XYZ', [null, 310, null], ['/XYZ', 'null', '310', 'null']],
    ['Fit', [], ['/Fit']],
    ['FitH', [250], ['/FitH', '250']],
    ['FitV', [null], ['/FitV', 'null']],
    ['FitR', [10, 20, 300, 400], ['/FitR', '10', '20', '300', '400']],
    ['FitB', [], ['/FitB']],
    ['FitBH', [null], ['/FitBH', 'null']],
    ['FitBV', [15], ['/FitBV', '15']],
  ] as [string, (number | null)[], string[]][])('retains %s view parameters when saving a bookmark', async (type, args, expected) => {
    const source = await PDFDocument.create();
    source.addPage([612, 792]);
    const result = await processBookmarks(toPdfFile(await source.save(), 'view.pdf'), {
      action: 'add',
      bookmarks: [{ id: 'a', title: 'Position', pageNumber: 1, destination: { type: type as any, args } }],
    });
    expect(result.success).toBe(true);
    const output = await PDFDocument.load(await readBlob(result.result as Blob));
    const outline = output.catalog.lookup(PDFName.of('Outlines'), PDFDict).lookup(PDFName.of('First'), PDFDict);
    const destination = outline.lookup(PDFName.of('Dest'), PDFArray);
    expect(destination.get(0)).toEqual(output.getPage(0).ref);
    expect(destination.asArray().slice(1).map(value => value.toString())).toEqual(expected);
  });

  it.each([
    { type: 'Unknown', args: [] },
    { type: { toString: 42 }, args: [] },
    { type: 'XYZ', args: [0, 20] },
    { type: 'FitH', args: [Infinity] },
    { type: 'FitR', args: [0, null, 20, 30] },
  ])('falls back safely for invalid imported view parameters: %j', async destination => {
    const source = await PDFDocument.create();
    source.addPage([612, 792]);
    const result = await processBookmarks(toPdfFile(await source.save(), 'invalid-view.pdf'), {
      action: 'add',
      bookmarks: [{ id: 'a', title: 'Position', pageNumber: 1, destination: destination as any }],
    });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await readBlob(result.result as Blob));
    const outline = saved.catalog.lookup(PDFName.of('Outlines'), PDFDict).lookup(PDFName.of('First'), PDFDict);
    expect(outline.lookup(PDFName.of('Dest'), PDFArray).asArray().slice(1).map(value => value.toString())).toEqual(['/XYZ', '0', '792', 'null']);
  });

});

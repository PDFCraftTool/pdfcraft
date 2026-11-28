import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { createExtractProcessor, parsePageSelection } from '@/lib/pdf/processors/extract';

describe('parsePageSelection', () => {
  it('keeps explicit pages and ranges', () => {
    expect(parsePageSelection('1-5, 8, 12-15', 20)).toEqual([
      1, 2, 3, 4, 5, 8, 12, 13, 14, 15,
    ]);
  });

  it('selects odd and even pages for the whole document', () => {
    expect(parsePageSelection('odd', 7)).toEqual([1, 3, 5, 7]);
    expect(parsePageSelection('even', 7)).toEqual([2, 4, 6]);
    expect(parsePageSelection('EVEN', 4)).toEqual([2, 4]);
    expect(parsePageSelection('  Odd  ', 1)).toEqual([1]);
    expect(parsePageSelection('even', 1)).toEqual([]);
  });

  it('combines parity keywords with other pages and drops duplicates', () => {
    expect(parsePageSelection('odd, 2, 2-4', 6)).toEqual([1, 2, 3, 4, 5]);
    expect(parsePageSelection('1, 1, 2-3', 10)).toEqual([1, 2, 3]);
  });

  it('ignores pages outside the document and unknown tokens', () => {
    expect(parsePageSelection('0, 8, foo', 5)).toEqual([]);
    expect(parsePageSelection('', 5)).toEqual([]);
    expect(parsePageSelection('odd', 0)).toEqual([]);
  });
});

describe('extract pages from a parity selection', () => {
  it('keeps every odd page of the loaded PDF', async () => {
    const source = await PDFDocument.create();
    for (let i = 0; i < 4; i += 1) {
      source.addPage([612, 792]);
    }
    const bytes = await source.save();
    const arrayBuffer = bytes.buffer.slice(
      bytes.byteOffset,
      bytes.byteOffset + bytes.byteLength
    ) as ArrayBuffer;
    const file = new File([arrayBuffer], 'doc.pdf', { type: 'application/pdf' });
    Object.defineProperty(file, 'arrayBuffer', {
      value: async () => arrayBuffer,
    });

    const result = await createExtractProcessor().process({
      files: [file],
      options: { pageSelection: 'odd', pages: [] },
    });

    expect(result.success).toBe(true);
    const outputBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(result.result as Blob);
    });
    const extracted = await PDFDocument.load(new Uint8Array(outputBuffer));
    expect(extracted.getPageCount()).toBe(2);
  });
});

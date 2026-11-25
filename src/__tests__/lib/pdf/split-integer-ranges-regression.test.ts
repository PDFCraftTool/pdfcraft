import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { SplitPDFProcessor } from '@/lib/pdf/processors/split';

afterEach(() => vi.restoreAllMocks());
async function inputFile(pdf: PDFDocument): Promise<File> {
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes as BlobPart], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}
async function outputBytes(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

vi.mock('@/lib/pdf/pymupdf-loader', () => ({
  loadPyMuPDF: async () => { throw new Error('force pdf-lib path'); },
}));
describe('split page range endpoints', () => {
  it.each([
    { start: 1, end: 1.5 },
    { start: 1.5, end: 2 },
    { start: NaN, end: 2 },
    { start: 1, end: NaN },
  ])('rejects invalid range %j before producing output', async range => {
    const pdf = await PDFDocument.create();
    pdf.addPage();
    pdf.addPage();
    const result = await new SplitPDFProcessor().process({ files: [await inputFile(pdf)], options: { ranges: [range] } });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe('INVALID_PAGE_RANGE');
    expect(result.result).toBeUndefined();
  });
  it('still splits a valid inclusive integer range', async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage([200, 300]);
    pdf.addPage([400, 500]);
    const result = await new SplitPDFProcessor().process({ files: [await inputFile(pdf)], options: { ranges: [{ start: 2, end: 2 }] } });
    expect(result.success).toBe(true);
    const blob = Array.isArray(result.result) ? result.result[0] : result.result;
    const saved = await PDFDocument.load(await outputBytes(blob as Blob));
    expect(saved.getPageCount()).toBe(1);
    expect(saved.getPage(0).getSize()).toEqual({ width: 400, height: 500 });
  });
});

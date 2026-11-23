import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument, PDFName, PDFDict, PDFHexString } from 'pdf-lib';
import { BookmarksAutoGeneratorProcessor } from '@/lib/pdf/processors/bookmarks-auto-generator';

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

const textState = vi.hoisted(() => ({ transform: [20, 0, 0, 20, 50, 700] }));
vi.mock('@/lib/pdf/loader', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/loader')>();
  return { ...actual, loadPdfjs: async () => ({
    getDocument: () => ({ promise: Promise.resolve({
      getPage: async () => ({ getTextContent: async () => ({ items: [
        { str: 'A rotated heading', transform: textState.transform },
      ] }) }),
    }) }),
  }) };
});
describe('rotated heading detection', () => {
  it.each([
    [20, 0, 0, 20, 50, 700],
    [0, 20, -20, 0, 50, 700],
    [0, -20, 20, 0, 50, 700],
    [12, 16, -16, 12, 50, 700],
  ])('recognizes a 20-point heading with transform %j', async (...transform) => {
    textState.transform = transform;
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const result = await new BookmarksAutoGeneratorProcessor().process({ files: [await inputFile(pdf)], options: { detectStrategy: 'font-size', minFontSize: 18 } });
    expect(result.success).toBe(true);
    expect(result.metadata?.bookmarksAdded).toBe(1);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    const outline = saved.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    const first = outline.lookup(PDFName.of('First'), PDFDict);
    expect(first.lookup(PDFName.of('Title'), PDFHexString).decodeText()).toBe('A rotated heading');
  });
});

import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument, PDFName, PDFArray, PDFDict } from 'pdf-lib';
import { InteractiveTocGeneratorProcessor } from '@/lib/pdf/processors/interactive-toc-generator';

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

vi.mock('@/lib/pdf/loader', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/loader')>();
  return { ...actual, loadPdfjs: async () => ({
    getDocument: () => ({ promise: Promise.resolve({
      getPage: async () => ({ getTextContent: async () => ({ items: [
        { str: 'Chapter 1: Overview', transform: [20, 0, 0, 20, 20, 200] },
      ] }) }),
    }) }),
  }) };
});
describe('interactive TOC with real PDF fonts', () => {
  it.each([0, 1])('saves bidirectional links when inserted at %i', async insertIndex => {
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const result = await new InteractiveTocGeneratorProcessor().process({ files: [await inputFile(pdf)], options: { insertIndex } });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    expect(saved.getPageCount()).toBe(2);
    const toc = saved.getPage(insertIndex);
    const target = saved.getPage(insertIndex === 0 ? 1 : 0);
    const link = toc.node.Annots()!.lookup(0, PDFDict).lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('D'), PDFArray);
    const back = target.node.Annots()!.lookup(0, PDFDict).lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('D'), PDFArray);
    expect(link.get(0)).toEqual(target.ref);
    expect(back.get(0)).toEqual(toc.ref);
  });
});

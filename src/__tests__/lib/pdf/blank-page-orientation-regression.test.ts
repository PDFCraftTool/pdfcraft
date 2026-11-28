import { describe, it, expect } from 'vitest';
import { PDFDocument, degrees } from 'pdf-lib';
import { AddBlankPagePDFProcessor } from '@/lib/pdf/processors/add-blank-page';

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

describe('blank page display orientation', () => {
  it.each([0, 90, 180, 270])('matches a source rotated %i degrees', async rotation => {
    const pdf = await PDFDocument.create();
    pdf.addPage([200, 300]).setRotation(degrees(rotation));
    const result = await new AddBlankPagePDFProcessor().process({ files: [await inputFile(pdf)], options: { position: 1, count: 1 } });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    expect(saved.getPage(1).getSize()).toEqual(rotation % 180 ? { width: 300, height: 200 } : { width: 200, height: 300 });
    expect(saved.getPage(0).getRotation().angle).toBe(rotation);
  });
  it('honors an explicit page size for a rotated source', async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage([200, 300]).setRotation(degrees(90));
    const result = await new AddBlankPagePDFProcessor().process({ files: [await inputFile(pdf)], options: { position: 1, count: 1, pageSize: { width: 400, height: 500 } } });
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    expect(saved.getPage(1).getSize()).toEqual({ width: 400, height: 500 });
  });
});

import { describe, it, expect } from 'vitest';
import { PDFDocument, degrees } from 'pdf-lib';
import { PageDimensionsProcessor } from '@/lib/pdf/processors/page-dimensions';

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

describe('page dimensions for rotated pages', () => {
  it.each([0, 90, 180, 270])('reports displayed orientation for rotation %i', async rotation => {
    const pdf = await PDFDocument.create();
    pdf.addPage([612, 792]).setRotation(degrees(rotation));
    const result = await new PageDimensionsProcessor().process({ files: [await inputFile(pdf)], options: {} });
    expect(result.success).toBe(true);
    const report = JSON.parse(new TextDecoder().decode(await outputBytes(result.result as Blob)));
    expect(report.pages[0]).toMatchObject(rotation % 180
      ? { widthPt: 792, heightPt: 612, widthIn: 11, heightIn: 8.5, orientation: 'landscape' }
      : { widthPt: 612, heightPt: 792, widthIn: 8.5, heightIn: 11, orientation: 'portrait' });
    expect(report.pages[0].standardSize).toBe(rotation % 180 ? 'Letter (Landscape)' : 'Letter');
  });
});

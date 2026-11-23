import { describe, it, expect } from 'vitest';
import { PDFDocument, degrees } from 'pdf-lib';
import { PdfTwoColumnReflowerProcessor } from '@/lib/pdf/processors/pdf-two-column-reflower';

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

describe('displayed column extraction', () => {
  it.each([0, 90, 180, 270])('splits a sheet rotated %i into left and right columns', async rotation => {
    const pdf = await PDFDocument.create();
    const page = pdf.addPage();
    page.setMediaBox(40, 70, 200, 300);
    page.setRotation(degrees(rotation));
    const result = await new PdfTwoColumnReflowerProcessor().process({ files: [await inputFile(pdf)], options: { middleGapRatio: 0.5 } });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    expect(saved.getPageCount()).toBe(2);
    const expected = rotation === 90
      ? [{ x: 40, y: 70, width: 200, height: 150 }, { x: 40, y: 220, width: 200, height: 150 }]
      : rotation === 180
      ? [{ x: 140, y: 70, width: 100, height: 300 }, { x: 40, y: 70, width: 100, height: 300 }]
      : rotation === 270
      ? [{ x: 40, y: 220, width: 200, height: 150 }, { x: 40, y: 70, width: 200, height: 150 }]
      : [{ x: 40, y: 70, width: 100, height: 300 }, { x: 140, y: 70, width: 100, height: 300 }];
    expect(saved.getPages().map(p => p.getCropBox())).toEqual(expected);
    expect(saved.getPages().map(p => p.getRotation().angle)).toEqual([rotation, rotation]);
  });
});

import { describe, it, expect } from 'vitest';
import { PDFDocument, degrees } from 'pdf-lib';
import { PdfLosslessSlicerProcessor } from '@/lib/pdf/processors/pdf-lossless-slicer';

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

describe('visual blueprint slicing', () => {
  it.each([0, 90, 180, 270])('selects the upper-left quadrant of a sheet rotated %i', async rotation => {
    const pdf = await PDFDocument.create();
    const page = pdf.addPage();
    page.setMediaBox(40, 70, 200, 300);
    page.setRotation(degrees(rotation));
    page.drawRectangle({ x: 40, y: 70, width: 200, height: 300 });
    const result = await new PdfLosslessSlicerProcessor().process({ files: [await inputFile(pdf)], options: { sliceX: 0, sliceY: 0, sliceWidth: 0.5, sliceHeight: 0.5, pageNumber: 1 } });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    const expected = rotation === 90 ? { x: 40, y: 70, width: 100, height: 150 }
      : rotation === 180 ? { x: 140, y: 70, width: 100, height: 150 }
      : rotation === 270 ? { x: 140, y: 220, width: 100, height: 150 }
      : { x: 40, y: 220, width: 100, height: 150 };
    expect(saved.getPage(0).getCropBox()).toEqual(expected);
    expect(saved.getPage(0).getRotation().angle).toBe(rotation);
  });
});

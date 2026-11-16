import { describe, expect, it } from 'vitest';
import { PDFDocument, degrees } from 'pdf-lib';
import { CropProcessor } from '@/lib/pdf/processors/crop';

async function fixture(rotation: number): Promise<File> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([200, 300]);
  page.setRotation(degrees(rotation));
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes as BlobPart], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function cropBox(rotation: number) {
  // Top-left quarter of the page as the viewer shows it.
  const result = await new CropProcessor().process({
    files: [await fixture(rotation)],
    options: { cropData: { 1: { x: 0, y: 0, width: 0.5, height: 0.5 } } },
  });
  expect(result.success).toBe(true);
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  const page = (await PDFDocument.load(bytes)).getPage(0);
  return page.getCropBox();
}

describe('cropping a page with /Rotate', () => {
  // Unrotated page is 200 x 300; the displayed top-left quarter is a
  // different corner of it for each rotation.
  it.each([
    [0, { x: 0, y: 150, width: 100, height: 150 }],
    [90, { x: 0, y: 0, width: 100, height: 150 }],
    [180, { x: 100, y: 0, width: 100, height: 150 }],
    [270, { x: 100, y: 150, width: 100, height: 150 }],
  ])('crops the displayed top-left quarter for /Rotate %i', async (rotation, expected) => {
    const box = await cropBox(rotation);
    expect(box.x).toBeCloseTo(expected.x);
    expect(box.y).toBeCloseTo(expected.y);
    expect(box.width).toBeCloseTo(expected.width);
    expect(box.height).toBeCloseTo(expected.height);
  });
});

import { describe, expect, it } from 'vitest';
import { PDFDocument, degrees, rgb } from 'pdf-lib';
import { fixPageSize } from '@/lib/pdf/processors/fix-page-size';

async function fixture(angle: number): Promise<File> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([200, 300]);
  page.drawRectangle({ x: 0, y: 250, width: 80, height: 50, color: rgb(0, 0, 0) });
  page.setRotation(degrees(angle));
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes], 'scan.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function fixed(angle: number) {
  const result = await fixPageSize(await fixture(angle), { sizePreset: 'a4' } as never);
  expect(result.error?.details ?? result.error?.message).toBeUndefined();
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  return PDFDocument.load(bytes);
}

describe('fix page size honours the /Rotate of the source page', () => {
  it.each([0, 180])('keeps a portrait page portrait at %s degrees', async angle => {
    const { width, height } = (await fixed(angle)).getPage(0).getSize();
    expect(width).toBeLessThan(height);
  });

  it.each([90, 270])('lays a page displayed in landscape (%s degrees) out as landscape', async angle => {
    const { width, height } = (await fixed(angle)).getPage(0).getSize();
    expect(width).toBeGreaterThan(height);
  });
});

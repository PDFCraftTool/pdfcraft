import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDocument, PDFRawStream, decodePDFRawStream, degrees, rgb } from 'pdf-lib';
import { createNUpPDF } from '@/lib/pdf/processors/n-up';

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

/** Width and height of the border drawn around the (single) placed page. */
async function borderSize(angle: number) {
  const result = await createNUpPDF(await fixture(angle), { pagesPerSheet: 2, addBorder: true });
  expect(result.error?.details ?? result.error?.message).toBeUndefined();
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  const pdf = await PDFDocument.load(bytes);
  const contents = pdf.getPage(0).node.Contents()!;
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  const text = refs.map(ref => {
    const stream = pdf.context.lookup(ref);
    if (!(stream instanceof PDFRawStream)) throw new Error('Content stream is missing');
    return Buffer.from(decodePDFRawStream(stream).decode()).toString('latin1');
  }).join('\n');
  // The border is a closed path: 0 0 m, 0 H l, W H l, W 0 l.
  const corner = /0 0 m\s+\S+ \S+ l\s+(\S+) (\S+) l/.exec(text)!;
  return { width: Number(corner[1]), height: Number(corner[2]) };
}

describe('n-up honours the /Rotate of source pages', () => {
  it.each([0, 180])('places a portrait page as portrait at %s degrees', async angle => {
    const { width, height } = await borderSize(angle);
    expect(width).toBeLessThan(height);
  });

  it.each([90, 270])('places a page displayed in landscape (%s degrees) as landscape', async angle => {
    const { width, height } = await borderSize(angle);
    expect(width).toBeGreaterThan(height);
  });
});

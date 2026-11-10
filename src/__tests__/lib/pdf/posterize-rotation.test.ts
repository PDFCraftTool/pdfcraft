import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDocument, PDFRawStream, decodePDFRawStream, degrees } from 'pdf-lib';
import { posterizePDF } from '@/lib/pdf/processors/posterize';

async function fixture(rotation: number): Promise<File> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([200, 300]);
  page.drawText('tile', { x: 10, y: 10 });
  page.setRotation(degrees(rotation));
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes as BlobPart], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function posterized(rotation: number) {
  const result = await posterizePDF(await fixture(rotation), { rows: 1, cols: 1, pageSize: 'A4', orientation: 'auto' });
  expect(result.success).toBe(true);
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  return PDFDocument.load(bytes);
}

type Matrix = [number, number, number, number, number, number];

/** Composed `cm` matrices that precede the first `Do` of the page. */
function placement(pdf: PDFDocument): Matrix {
  const contents = pdf.getPage(0).node.Contents();
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  const source = refs.map(ref => {
    const stream = pdf.context.lookup(ref);
    return stream instanceof PDFRawStream ? new TextDecoder().decode(decodePDFRawStream(stream).decode()) : '';
  }).join('\n');
  const num = '([-\\d.e]+)';
  let current: Matrix = [1, 0, 0, 1, 0, 0];
  for (const match of source.matchAll(new RegExp(`${num} ${num} ${num} ${num} ${num} ${num} cm|/\\S+ Do`, 'g'))) {
    if (!match[1]) return current;
    const [a2, b2, c2, d2, e2, f2] = match.slice(1, 7).map(Number);
    const [a1, b1, c1, d1, e1, f1] = current;
    current = [a1 * a2 + c1 * b2, b1 * a2 + d1 * b2, a1 * c2 + c1 * d2, b1 * c2 + d1 * d2, a1 * e2 + c1 * f2 + e1, b1 * e2 + d1 * f2 + f1];
  }
  throw new Error('No drawn page found');
}

describe.each([0, 90, 180, 270])('posterizing a page with /Rotate %i', rotation => {
  it('draws the tile turned the way a viewer shows the page and fits it to the output page', async () => {
    const pdf = await posterized(rotation);
    const page = pdf.getPage(0);
    const { width: pageWidth, height: pageHeight } = page.getSize();
    const [a, b, , , e, f] = placement(pdf);

    // The unrotated x axis of the source is shown turned clockwise by /Rotate.
    const length = Math.hypot(a, b);
    const angle = (rotation * Math.PI) / 180;
    expect(a / length).toBeCloseTo(Math.cos(-angle));
    expect(b / length).toBeCloseTo(Math.sin(-angle));

    // Orientation follows the displayed page: 300x200 for quarter turns.
    expect(pageWidth > pageHeight).toBe(rotation % 180 === 90);
    expect(Number.isFinite(e) && Number.isFinite(f)).toBe(true);
  });
});

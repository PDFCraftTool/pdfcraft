import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDocument, PDFRawStream, decodePDFRawStream, degrees } from 'pdf-lib';
import { addWatermark } from '@/lib/pdf/processors/watermark';

const WIDTH = 200;
const HEIGHT = 300;

async function fixture(rotation: number): Promise<File> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([WIDTH, HEIGHT]);
  page.setRotation(degrees(rotation));
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes as BlobPart], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function load(blob: Blob): Promise<PDFDocument> {
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
  return PDFDocument.load(bytes);
}

type Matrix = [number, number, number, number, number, number];
const multiply = ([a1, b1, c1, d1, e1, f1]: Matrix, [a2, b2, c2, d2, e2, f2]: Matrix): Matrix => [
  a1 * a2 + c1 * b2, b1 * a2 + d1 * b2,
  a1 * c2 + c1 * d2, b1 * c2 + d1 * d2,
  a1 * e2 + c1 * f2 + e1, b1 * e2 + d1 * f2 + f1,
];

/** Page-space text matrix of the first text run: every `cm` before its `Tm`, then the `Tm`. */
function textMatrix(pdf: PDFDocument): Matrix {
  const contents = pdf.getPage(0).node.Contents();
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  const source = refs.map(ref => {
    const stream = pdf.context.lookup(ref);
    return stream instanceof PDFRawStream ? new TextDecoder().decode(decodePDFRawStream(stream).decode()) : '';
  }).join('\n');
  const num = '([-\\d.e]+)';
  const operator = new RegExp(`${num} ${num} ${num} ${num} ${num} ${num} (cm|Tm)`, 'g');
  let current: Matrix = [1, 0, 0, 1, 0, 0];
  for (const match of source.matchAll(operator)) {
    const matrix = match.slice(1, 7).map(Number) as Matrix;
    if (match[7] === 'Tm') return multiply(current, matrix);
    current = multiply(current, matrix);
  }
  throw new Error('No text found');
}

/** Where a viewer shows a point of the unrotated page, for a clockwise /Rotate. */
function displayed(rotation: number, x: number, y: number): [number, number] {
  switch (rotation) {
    case 90: return [y, WIDTH - x];
    case 180: return [WIDTH - x, HEIGHT - y];
    case 270: return [HEIGHT - y, x];
    default: return [x, y];
  }
}

describe.each([0, 90, 180, 270])('text watermark on a page with /Rotate %i', rotation => {
  it('lands at the bottom-left of the displayed page, upright', async () => {
    const result = await addWatermark(await fixture(rotation), {
      type: 'text',
      text: 'DRAFT',
      position: 'bottom-left',
      rotation: 0,
    });
    expect(result.success).toBe(true);
    const pdf = await load(result.result as Blob);
    expect(pdf.getPage(0).getRotation().angle).toBe(rotation);

    const [a, b, , , e, f] = textMatrix(pdf);
    const [x0, y0] = displayed(rotation, e, f);
    const [x1, y1] = displayed(rotation, e + a, f + b);
    expect(x1 - x0).toBeCloseTo(1);
    expect(y1 - y0).toBeCloseTo(0);
    expect(x0).toBeCloseTo(50);
    expect(y0).toBeCloseTo(50);
  });
});

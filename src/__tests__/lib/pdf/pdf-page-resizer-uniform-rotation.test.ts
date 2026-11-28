import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDocument, PDFRawStream, decodePDFRawStream, degrees, rgb } from 'pdf-lib';
import { resizePDFPagesUniform } from '@/lib/pdf/processors/pdf-page-resizer-uniform';

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

type Matrix = [number, number, number, number, number, number];

// Row-vector convention used by PDF: point' = point x M.
function multiply(a: Matrix, b: Matrix): Matrix {
  return [
    a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3],
    a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3],
    a[4] * b[0] + a[5] * b[2] + b[4], a[4] * b[1] + a[5] * b[3] + b[5],
  ];
}

/** Bounding box, on the output page, of the unrotated 200x300 source page. */
async function placedBounds(angle: number) {
  const result = await resizePDFPagesUniform([await fixture(angle)], { targetSize: 'A4', scaleMode: 'fit' });
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
  const drawn = text.slice(0, text.indexOf(' Do'));
  const matrices = [...drawn.matchAll(/([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) cm/g)]
    .map(match => match.slice(1).map(Number) as Matrix);
  const ctm = matrices.reduce((total, matrix) => multiply(matrix, total), [1, 0, 0, 1, 0, 0] as Matrix);
  const corners = [[0, 0], [200, 0], [0, 300], [200, 300]].map(([x, y]) => [x * ctm[0] + y * ctm[2] + ctm[4], x * ctm[1] + y * ctm[3] + ctm[5]]);
  const xs = corners.map(([x]) => x);
  const ys = corners.map(([, y]) => y);
  return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
}

describe('uniform page resize honours the /Rotate of source pages', () => {
  it.each([0, 90, 180, 270])('centres the displayed page inside the A4 sheet at %s degrees', async angle => {
    const bounds = await placedBounds(angle);
    const width = bounds.maxX - bounds.minX;
    const height = bounds.maxY - bounds.minY;
    expect(angle % 180 === 0 ? width < height : width > height).toBe(true);
    expect(bounds.minX).toBeGreaterThanOrEqual(-0.01);
    expect(bounds.minY).toBeGreaterThanOrEqual(-0.01);
    expect(bounds.maxX).toBeLessThanOrEqual(595.28 + 0.01);
    expect(bounds.maxY).toBeLessThanOrEqual(841.89 + 0.01);
    expect((bounds.minX + bounds.maxX) / 2).toBeCloseTo(595.28 / 2, 1);
    expect((bounds.minY + bounds.maxY) / 2).toBeCloseTo(841.89 / 2, 1);
  });
});

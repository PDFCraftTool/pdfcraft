import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDocument, PDFRawStream, decodePDFRawStream, degrees } from 'pdf-lib';
import { addHeaderFooter } from '@/lib/pdf/processors/header-footer';

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

/** Text matrices (a b c d e f Tm) found in the page's content streams. */
function textMatrices(pdf: PDFDocument): number[][] {
  const contents = pdf.getPage(0).node.Contents();
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  return refs.flatMap(ref => {
    const stream = pdf.context.lookup(ref);
    if (!(stream instanceof PDFRawStream)) return [];
    const text = new TextDecoder().decode(decodePDFRawStream(stream).decode());
    return [...text.matchAll(/([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) Tm/g)].map(m => m.slice(1).map(Number));
  });
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

function expectUpright(rotation: number, matrix: number[], expectedBaseline: { fromLeft?: number; fromBottom?: number; fromTop?: number }) {
  const [a, b, , , e, f] = matrix;
  // Baseline direction as the viewer sees it: along the displayed x axis.
  const [x0, y0] = displayed(rotation, e, f);
  const [x1, y1] = displayed(rotation, e + a, f + b);
  expect(x1 - x0).toBeCloseTo(1);
  expect(y1 - y0).toBeCloseTo(0);
  const shownHeight = rotation % 180 === 90 ? WIDTH : HEIGHT;
  if (expectedBaseline.fromLeft !== undefined) expect(x0).toBeCloseTo(expectedBaseline.fromLeft);
  if (expectedBaseline.fromBottom !== undefined) expect(y0).toBeCloseTo(expectedBaseline.fromBottom);
  if (expectedBaseline.fromTop !== undefined) expect(shownHeight - y0).toBeCloseTo(expectedBaseline.fromTop);
}

describe.each([0, 90, 180, 270])('text added to a page with /Rotate %i', rotation => {
  it('puts the header at the top-left and the footer at the bottom-left of the displayed page, upright', async () => {
    const result = await addHeaderFooter(await fixture(rotation), {
      header: { left: 'Header' },
      footer: { left: 'Footer' },
      margin: 40,
    });
    expect(result.success).toBe(true);
    const [header, footer] = textMatrices(await load(result.result as Blob));
    expectUpright(rotation, header, { fromLeft: 40, fromTop: 40 });
    expectUpright(rotation, footer, { fromLeft: 40, fromBottom: 40 });
  });
});

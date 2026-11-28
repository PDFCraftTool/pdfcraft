import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFArray, PDFRawStream, decodePDFRawStream, degrees } from 'pdf-lib';
import { OverlayPDFProcessor } from '@/lib/pdf/processors/overlay';

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

function displayedPoint(rotation: number, x: number, y: number): number[] {
  switch (rotation) {
    case 90: return [y, 200 - x];
    case 180: return [200 - x, 300 - y];
    case 270: return [300 - y, x];
    default: return [x, y];
  }
}
describe.each(['overlay', 'underlay'])('rotated layer in %s mode', mode => {
  it.each([0, 90, 180, 270])('maps a layer rotated %i to the displayed base page', async layerRotation => {
    for (const baseRotation of [0, 90, 180, 270]) {
      const base = await PDFDocument.create();
      base.addPage([200, 300]).setRotation(degrees(baseRotation));
      const layer = await PDFDocument.create();
      const layerPage = layer.addPage([100, 150]);
      layerPage.setRotation(degrees(layerRotation));
      layerPage.drawText('Layer');
      const result = await new OverlayPDFProcessor().process({ files: [await inputFile(base), await inputFile(layer)], options: { mode } });
      expect(result.success).toBe(true);
      const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
      const contents = saved.getPage(0).node.Contents() as PDFArray;
      const stream = contents.asArray().map(ref => saved.context.lookup(ref)).find(value =>
        value instanceof PDFRawStream && new TextDecoder().decode(decodePDFRawStream(value).decode()).includes('Do')
      ) as PDFRawStream;
      const operators = new TextDecoder().decode(decodePDFRawStream(stream).decode());
      const matrices = [...operators.matchAll(/^([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) cm$/gm)].map(match => match.slice(1).map(Number));
      const transform = (x: number, y: number) => {
        const [px, py] = [...matrices].reverse().reduce(([tx, ty], [a, b, c, d, e, f]) => [a * tx + c * ty + e, b * tx + d * ty + f], [x, y]);
        return displayedPoint(baseRotation, px, py);
      };
      const width = baseRotation % 180 ? 300 : 200;
      const height = baseRotation % 180 ? 200 : 300;
      const expected = layerRotation === 90 ? [[0, height], [0, 0], [width, height]]
        : layerRotation === 180 ? [[width, height], [0, height], [width, 0]]
        : layerRotation === 270 ? [[width, 0], [width, height], [0, 0]]
        : [[0, 0], [width, 0], [0, height]];
      [[0, 0], [100, 0], [0, 150]].forEach(([x, y], index) => {
        const point = transform(x, y);
        expect(point[0]).toBeCloseTo(expected[index][0]);
        expect(point[1]).toBeCloseTo(expected[index][1]);
      });
    }
  });
});

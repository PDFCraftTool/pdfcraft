import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDocument, PDFRawStream, StandardFonts, decodePDFRawStream } from 'pdf-lib';
import { StampsProcessor } from '@/lib/pdf/processors/stamps';

describe('preset stamp rotation', () => {
  it.each([0, 90, -90])('keeps the label inside the border at %i degrees', async (rotation) => {
    const pdf = await PDFDocument.create();
    pdf.addPage([320, 320]);
    const font = await pdf.embedFont(StandardFonts.HelveticaBold);
    const offsetX = (150 - font.widthOfTextAtSize('APPROVED', 18)) / 2;
    const bytes = new Uint8Array(await pdf.save());
    const file = new File([bytes as BlobPart], 'source.pdf', { type: 'application/pdf' });
    Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });

    const result = await new StampsProcessor().process({
      files: [file],
      options: { stamps: [{ type: 'preset', preset: 'approved', pageNumber: 1, x: 100, y: 100, rotation }] },
    });
    expect(result.success).toBe(true);
    const output = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(result.result as Blob);
    });
    const saved = await PDFDocument.load(output);
    const contents = saved.getPage(0).node.Contents();
    const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
    const source = refs.map((ref) => {
      const stream = saved.context.lookup(ref);
      return stream instanceof PDFRawStream ? new TextDecoder().decode(decodePDFRawStream(stream).decode()) : '';
    }).join('\n');
    const match = source.match(/^([0-9.e+ -]+) Tm$/m);
    expect(match).not.toBeNull();
    const [, , , , x, y] = match![1].split(' ').map(Number);

    const expectedX = rotation === 0 ? 100 + offsetX : rotation === 90 ? 89 : 111;
    const expectedY = rotation === 0 ? 111 : rotation === 90 ? 100 + offsetX : 100 - offsetX;
    expect(x).toBeCloseTo(expectedX);
    expect(y).toBeCloseTo(expectedY);
  });
});

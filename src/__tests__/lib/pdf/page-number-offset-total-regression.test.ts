import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFArray, PDFRawStream, PDFHexString, decodePDFRawStream } from 'pdf-lib';
import { PageNumbersProcessor } from '@/lib/pdf/processors/page-numbers';

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

function textOnPage(pdf: PDFDocument, index: number): string[] {
  const contents = pdf.getPage(index).node.Contents();
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  return refs.flatMap(ref => {
    const stream = pdf.context.lookup(ref);
    if (!(stream instanceof PDFRawStream)) return [];
    const text = new TextDecoder().decode(decodePDFRawStream(stream).decode());
    return [...text.matchAll(/<([0-9A-Fa-f]+)> Tj/g)].map(match => PDFHexString.of(match[1]).decodeText());
  });
}
describe('page numbering with an offset', () => {
  it.each([
    ['page-of-total', false, ['Page 5 of 7', 'Page 6 of 7', 'Page 7 of 7']],
    ['page-of-total', true, ['', 'Page 5 of 6', 'Page 6 of 6']],
    ['custom', false, ['5 / 7', '6 / 7', '7 / 7']],
    ['custom', true, ['', '5 / 6', '6 / 6']],
  ])('prints the final number for %s with skipFirstPage=%s', async (format, skipFirstPage, expected) => {
    const pdf = await PDFDocument.create();
    for (let i = 0; i < 3; i++) pdf.addPage();
    const result = await new PageNumbersProcessor().process({ files: [await inputFile(pdf)], options: { startNumber: 5, format, skipFirstPage, customFormat: '{page} / {total}' } });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    expect([0, 1, 2].map(index => textOnPage(saved, index).join(''))).toEqual(expected);
  });
});

import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFArray, PDFRawStream, PDFHexString, decodePDFRawStream } from 'pdf-lib';
import { TextToPDFProcessor } from '@/lib/pdf/processors/text-to-pdf';

async function outputBytes(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

function pageText(pdf: PDFDocument): string[] {
  const contents = pdf.getPage(0).node.Contents();
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  return refs.flatMap(ref => {
    const stream = pdf.context.lookup(ref);
    if (!(stream instanceof PDFRawStream)) return [];
    const text = new TextDecoder().decode(decodePDFRawStream(stream).decode());
    return [...text.matchAll(/<([0-9A-Fa-f]+)> Tj/g)].map(match => PDFHexString.of(match[1]).decodeText());
  });
}
describe('plain text line endings', () => {
  it.each(['\n', '\r\n', '\r'])('retains all words with %j line endings', async newline => {
    const text = ['First ending', 'Second ending', 'Third ending'].join(newline);
    const file = { name: 'windows.txt', text: async () => text } as File;
    const output = await new TextToPDFProcessor().process({ files: [file], options: { fontId: 'courier' } });
    expect(output.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(output.result as Blob));
    expect(pageText(saved)).toEqual(['First ending', 'Second ending', 'Third ending']);
  });
});

import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFName, PDFDict } from 'pdf-lib';
import { RemoveAnnotationsProcessor } from '@/lib/pdf/processors/remove-annotations';

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

async function annotatedFile(): Promise<File> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage();
  const refs = ['Text', 'Highlight', 'Underline', 'Link', 'Widget'].map(subtype => pdf.context.register(pdf.context.obj({
    Type: 'Annot', Subtype: subtype, Rect: [10, 10, 20, 20],
  })));
  page.node.set(PDFName.of('Annots'), pdf.context.obj(refs));
  return inputFile(pdf);
}
describe('selective annotation removal', () => {
  it.each([
    [{ removeComments: true, removeHighlights: false, removeLinks: false }, ['Highlight', 'Underline', 'Link', 'Widget']],
    [{ removeAll: false, removeHighlights: true }, ['Text', 'Link', 'Widget']],
    [{ removeAll: false, removeLinks: true }, ['Text', 'Highlight', 'Underline', 'Widget']],
    [{ removeAll: false }, ['Text', 'Highlight', 'Underline', 'Link', 'Widget']],
    [{}, []],
  ])('preserves unselected annotations for %j', async (options, expected) => {
    const result = await new RemoveAnnotationsProcessor().process({ files: [await annotatedFile()], options });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    const annotations = saved.getPage(0).node.Annots();
    const subtypes = annotations?.asArray().map(ref => saved.context.lookup(ref, PDFDict).get(PDFName.of('Subtype'))?.toString().slice(1)) ?? [];
    expect(subtypes).toEqual(expected);
  });
});

import { describe, expect, it, vi } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFHexString, PDFName, PDFNumber, PDFRawStream, decodePDFRawStream } from 'pdf-lib';
import { removeBlankPages } from '@/lib/pdf/processors/remove-blank-pages';

// Explicit page selection never renders, so pdf.js only needs to report the page count.
vi.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: {},
  getDocument: () => ({ promise: Promise.resolve({ numPages: 3 }) }),
}));

async function fixture(): Promise<File> {
  const pdf = await PDFDocument.create();
  const pages = [pdf.addPage([200, 300]), pdf.addPage([210, 310]), pdf.addPage([220, 320])];
  pdf.setTitle('Original document');
  pdf.setAuthor('Original author');
  const field = pdf.getForm().createTextField('applicant');
  field.setText('Original value');
  field.addToPage(pages[0], { x: 20, y: 20, width: 100, height: 30 });
  pdf.catalog.set(PDFName.of('PageLabels'), pdf.context.obj({ Nums: [0, { S: 'D', P: PDFHexString.fromText('Chapter-'), St: 7 }] }));
  const outline = pdf.context.obj({ Type: 'Outlines', Count: 1 });
  const outlineRef = pdf.context.register(outline);
  const bookmark = pdf.context.register(pdf.context.obj({ Title: PDFHexString.fromText('Last chapter'), Parent: outlineRef, Dest: [pages[2].ref, PDFName.of('Fit')] }));
  outline.set(PDFName.of('First'), bookmark);
  outline.set(PDFName.of('Last'), bookmark);
  pdf.catalog.set(PDFName.of('Outlines'), outlineRef);
  const link = pdf.context.register(pdf.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: [0, 0, 20, 20], A: { S: 'GoTo', D: [pages[2].ref, PDFName.of('Fit')] } }));
  pages[0].node.addAnnot(link);
  await pdf.attach(new Uint8Array([1, 2, 3, 4]), 'original.txt', { mimeType: 'text/plain' });
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function withoutBlank() {
  const result = await removeBlankPages(await fixture(), { explicitPagesToRemove: [2] });
  expect(result.success).toBe(true);
  expect(result.filename).toBe('source_no_blanks.pdf');
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  return PDFDocument.load(bytes);
}

describe('removing blank pages preserves the document, not just its pages', () => {
  it('removes only the selected page', async () => {
    const pdf = await withoutBlank();
    expect(pdf.getPages().map(page => page.getWidth())).toEqual([200, 220]);
  });

  it('retains editable form fields on their page', async () => {
    const pdf = await withoutBlank();
    const field = pdf.getForm().getTextField('applicant');
    expect(field.getText()).toBe('Original value');
    expect(field.acroField.getWidgets()[0].P()).toEqual(pdf.getPage(0).ref);
  });

  it('keeps bookmarks and internal links pointing at the page they referenced', async () => {
    const pdf = await withoutBlank();
    const outline = pdf.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    const bookmark = outline.lookup(PDFName.of('First'), PDFDict);
    expect(bookmark.lookup(PDFName.of('Title'), PDFHexString).decodeText()).toBe('Last chapter');
    expect(bookmark.lookup(PDFName.of('Dest'), PDFArray).get(0)).toEqual(pdf.getPage(1).ref);

    const annotations = pdf.getPage(0).node.lookup(PDFName.of('Annots'), PDFArray);
    const link = annotations.asArray().map(ref => pdf.context.lookup(ref, PDFDict)).find(dict => dict.get(PDFName.of('Subtype')) === PDFName.of('Link'))!;
    expect(link.lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('D'), PDFArray).get(0)).toEqual(pdf.getPage(1).ref);
  });

  it('retains metadata, page labels and the embedded attachment', async () => {
    const pdf = await withoutBlank();
    expect(pdf.getTitle()).toBe('Original document');
    expect(pdf.getAuthor()).toBe('Original author');
    const nums = pdf.catalog.lookup(PDFName.of('PageLabels'), PDFDict).lookup(PDFName.of('Nums'), PDFArray);
    expect(nums.lookup(1, PDFDict).lookup(PDFName.of('St'), PDFNumber).asNumber()).toBe(7);
    const names = pdf.catalog.lookup(PDFName.of('Names'), PDFDict).lookup(PDFName.of('EmbeddedFiles'), PDFDict).lookup(PDFName.of('Names'), PDFArray);
    const spec = names.lookup(1, PDFDict);
    const stream = pdf.context.lookup(spec.lookup(PDFName.of('EF'), PDFDict).get(PDFName.of('F')));
    if (!(stream instanceof PDFRawStream)) throw new Error('Attachment stream is missing');
    expect([...decodePDFRawStream(stream).decode()]).toEqual([1, 2, 3, 4]);
  });
});

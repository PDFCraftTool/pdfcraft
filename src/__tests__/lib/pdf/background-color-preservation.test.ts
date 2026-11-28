import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFHexString, PDFName, PDFNumber, PDFRawStream, decodePDFRawStream } from 'pdf-lib';
import { addBackgroundColor } from '@/lib/pdf/processors/background-color';

async function fixture(): Promise<File> {
  const pdf = await PDFDocument.create();
  const pages = [pdf.addPage([200, 300]), pdf.addPage([210, 310]), pdf.addPage([220, 320])];
  pages.forEach((page, i) => page.drawText(`Page ${i + 1}`, { x: 20, y: 100 }));
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

async function colored() {
  const result = await addBackgroundColor(await fixture(), { color: { r: 1, g: 0, b: 0 }, pages: [1, 3] });
  expect(result.success).toBe(true);
  expect(result.filename).toBe('source_background.pdf');
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  return PDFDocument.load(bytes);
}

describe('adding a background preserves the document, not just its pages', () => {
  it('keeps page count and sizes', async () => {
    const pdf = await colored();
    expect(pdf.getPages().map(page => page.getSize())).toEqual([{ width: 200, height: 300 }, { width: 210, height: 310 }, { width: 220, height: 320 }]);
  });

  it('paints the colour underneath the original content on the selected pages only', async () => {
    const pdf = await colored();
    const decoded = (index: number) => {
      const contents = pdf.getPage(index).node.Contents()!;
      const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
      return refs.map(ref => {
        const stream = pdf.context.lookup(ref);
        if (!(stream instanceof PDFRawStream)) throw new Error('Content stream is missing');
        return Buffer.from(decodePDFRawStream(stream).decode()).toString('latin1');
      });
    };
    const first = decoded(0);
    expect(first[0]).toMatch(/1 0 0 rg/);
    expect(first.slice(1).join('\n')).toMatch(/Tj/);
    expect(first.slice(1).join('\n')).not.toMatch(/1 0 0 rg/);
    expect(decoded(1).join('\n')).not.toMatch(/1 0 0 rg/);
    expect(decoded(2)[0]).toMatch(/1 0 0 rg/);
  });

  it('retains editable form fields on their page', async () => {
    const pdf = await colored();
    const field = pdf.getForm().getTextField('applicant');
    expect(field.getText()).toBe('Original value');
    expect(field.acroField.getWidgets()[0].P()).toEqual(pdf.getPage(0).ref);
  });

  it('keeps bookmarks and internal links pointing at the page they referenced', async () => {
    const pdf = await colored();
    const outline = pdf.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    const bookmark = outline.lookup(PDFName.of('First'), PDFDict);
    expect(bookmark.lookup(PDFName.of('Title'), PDFHexString).decodeText()).toBe('Last chapter');
    expect(bookmark.lookup(PDFName.of('Dest'), PDFArray).get(0)).toEqual(pdf.getPage(2).ref);

    const annotations = pdf.getPage(0).node.lookup(PDFName.of('Annots'), PDFArray);
    const link = annotations.asArray().map(ref => pdf.context.lookup(ref, PDFDict)).find(dict => dict.get(PDFName.of('Subtype')) === PDFName.of('Link'))!;
    expect(link.lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('D'), PDFArray).get(0)).toEqual(pdf.getPage(2).ref);
  });

  it('retains metadata, page labels and the embedded attachment', async () => {
    const pdf = await colored();
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

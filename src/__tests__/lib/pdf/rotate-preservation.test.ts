import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFHexString, PDFName, PDFNumber, PDFRawStream, decodePDFRawStream, degrees } from 'pdf-lib';
import { rotatePDF, type RotateOptions } from '@/lib/pdf/processors/rotate';

async function fixture(): Promise<File> {
  const pdf = await PDFDocument.create();
  const pages = [pdf.addPage([200, 300]), pdf.addPage([210, 310]), pdf.addPage([220, 320])];
  pages.forEach((page, i) => page.drawText(`Page ${i + 1}`, { x: 20, y: 100 }));
  pages[0].setRotation(degrees(90));
  pages[2].setRotation(degrees(270));
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

async function rotated(options: RotateOptions = { angle: 90 }) {
  const result = await rotatePDF(await fixture(), options);
  expect(result.success).toBe(true);
  expect(result.filename).toBe('source_rotated.pdf');
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  return PDFDocument.load(bytes);
}

describe('standard rotation preserves the document, not just its pages', () => {
  it.each([0, 90, 180, 270, -90, 450])('retains editable form fields after a %s degree rotation', async angle => {
    const pdf = await rotated({ angle });
    expect(pdf.getForm().getTextField('applicant').getText()).toBe('Original value');
    pdf.getForm().getTextField('applicant').setText('Updated value');
    const reopened = await PDFDocument.load(await pdf.save());
    expect(reopened.getForm().getTextField('applicant').getText()).toBe('Updated value');
  });

  it('retains bookmark destinations pointing at an actual output page', async () => {
    const pdf = await rotated();
    const outline = pdf.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    const bookmark = outline.lookup(PDFName.of('First'), PDFDict);
    expect(bookmark.lookup(PDFName.of('Title'), PDFHexString).decodeText()).toBe('Last chapter');
    expect(bookmark.lookup(PDFName.of('Dest'), PDFArray).get(0)).toEqual(pdf.getPage(2).ref);
  });

  it('retains internal links pointing at an actual output page', async () => {
    const pdf = await rotated();
    const annotations = pdf.getPage(0).node.lookup(PDFName.of('Annots'), PDFArray);
    const link = annotations.asArray().map(ref => pdf.context.lookup(ref, PDFDict)).find(dict => dict.get(PDFName.of('Subtype')) === PDFName.of('Link'))!;
    const destination = link.lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('D'), PDFArray);
    expect(destination.get(0)).toEqual(pdf.getPage(2).ref);
  });

  it('retains metadata and custom page labels', async () => {
    const pdf = await rotated();
    expect(pdf.getTitle()).toBe('Original document');
    expect(pdf.getAuthor()).toBe('Original author');
    const nums = pdf.catalog.lookup(PDFName.of('PageLabels'), PDFDict).lookup(PDFName.of('Nums'), PDFArray);
    const label = nums.lookup(1, PDFDict);
    expect(label.lookup(PDFName.of('P'), PDFHexString).decodeText()).toBe('Chapter-');
    expect(label.lookup(PDFName.of('St'), PDFNumber).asNumber()).toBe(7);
  });

  it('retains the original embedded attachment bytes', async () => {
    const pdf = await rotated();
    const names = pdf.catalog.lookup(PDFName.of('Names'), PDFDict).lookup(PDFName.of('EmbeddedFiles'), PDFDict).lookup(PDFName.of('Names'), PDFArray);
    const spec = names.lookup(1, PDFDict);
    expect(spec.lookup(PDFName.of('UF'), PDFHexString).decodeText()).toBe('original.txt');
    const stream = pdf.context.lookup(spec.lookup(PDFName.of('EF'), PDFDict).get(PDFName.of('F')));
    if (!(stream instanceof PDFRawStream)) throw new Error('Attachment stream is missing');
    expect([...decodePDFRawStream(stream).decode()]).toEqual([1, 2, 3, 4]);
  });

  it('applies selected per-page rotations relative to existing rotations', async () => {
    const pdf = await rotated({ rotations: { 1: 90, 3: 180 } });
    expect(pdf.getPages().map(page => page.getRotation().angle)).toEqual([180, 0, 90]);
    expect(pdf.getPages().map(page => page.getSize())).toEqual([{ width: 200, height: 300 }, { width: 210, height: 310 }, { width: 220, height: 320 }]);
    expect(pdf.getForm().getTextField('applicant').getText()).toBe('Original value');
  });

  it('continues to render mixed standard and arbitrary rotations using the existing embedding path', async () => {
    const pdf = await rotated({ angle: 45, pages: [2] });
    expect(pdf.getPageCount()).toBe(3);
    expect(pdf.getPages().map(page => page.getRotation().angle)).toEqual([90, 0, 270]);
    expect(pdf.getPage(0).getSize()).toEqual({ width: 200, height: 300 });
    expect(pdf.getPage(1).getWidth()).toBeCloseTo(367.695526, 5);
    expect(pdf.getPage(1).getHeight()).toBeCloseTo(367.695526, 5);
    expect(pdf.getPage(2).getSize()).toEqual({ width: 220, height: 320 });
  });

});

import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFHexString, PDFName, PDFNumber, PDFRawStream, PDFRef, decodePDFRawStream, degrees } from 'pdf-lib';
import { overlayPDF } from '@/lib/pdf/processors/overlay';

function asFile(bytes: Uint8Array, name: string): File {
  const file = new File([bytes], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function base(): Promise<File> {
  const pdf = await PDFDocument.create();
  const pages = [pdf.addPage([200, 300]), pdf.addPage([210, 310])];
  pages[0].drawText('base one', { x: 10, y: 10 });
  pages[1].drawText('base two', { x: 10, y: 10 });
  pages[1].setRotation(degrees(90));
  pdf.setTitle('Original document');
  const field = pdf.getForm().createTextField('applicant');
  field.setText('Original value');
  field.addToPage(pages[0], { x: 20, y: 20, width: 100, height: 30 });
  pdf.catalog.set(PDFName.of('PageLabels'), pdf.context.obj({ Nums: [0, { S: 'D', P: PDFHexString.fromText('Chapter-'), St: 7 }] }));
  const outline = pdf.context.obj({ Type: 'Outlines', Count: 1 });
  const outlineRef = pdf.context.register(outline);
  const bookmark = pdf.context.register(pdf.context.obj({ Title: PDFHexString.fromText('Second'), Parent: outlineRef, Dest: [pages[1].ref, PDFName.of('Fit')] }));
  outline.set(PDFName.of('First'), bookmark);
  outline.set(PDFName.of('Last'), bookmark);
  pdf.catalog.set(PDFName.of('Outlines'), outlineRef);
  await pdf.attach(new Uint8Array([1, 2, 3, 4]), 'original.txt', { mimeType: 'text/plain' });
  return asFile(new Uint8Array(await pdf.save()), 'base.pdf');
}

async function layer(): Promise<File> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([100, 100]);
  page.drawText('layer', { x: 5, y: 5 });
  return asFile(new Uint8Array(await pdf.save()), 'layer.pdf');
}

async function run(mode: 'overlay' | 'underlay') {
  const result = await overlayPDF([await base(), await layer()], { mode });
  expect(result.success).toBe(true);
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result.result as Blob);
  });
  return PDFDocument.load(bytes);
}

function streamText(pdf: PDFDocument, ref: unknown): string {
  const stream = pdf.context.lookup(ref as PDFRef);
  if (!(stream instanceof PDFRawStream)) return '';
  return new TextDecoder().decode(decodePDFRawStream(stream).decode());
}

describe('overlay keeps the base document intact', () => {
  it('retains forms, bookmarks, page labels, metadata and attachments', async () => {
    const pdf = await run('overlay');
    expect(pdf.getTitle()).toBe('Original document');
    const field = pdf.getForm().getTextField('applicant');
    expect(field.getText()).toBe('Original value');
    expect(field.acroField.getWidgets()[0].P()).toEqual(pdf.getPage(0).ref);

    const outline = pdf.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    const bookmark = outline.lookup(PDFName.of('First'), PDFDict);
    expect(bookmark.lookup(PDFName.of('Dest'), PDFArray).get(0)).toEqual(pdf.getPage(1).ref);

    const nums = pdf.catalog.lookup(PDFName.of('PageLabels'), PDFDict).lookup(PDFName.of('Nums'), PDFArray);
    expect(nums.lookup(1, PDFDict).lookup(PDFName.of('St'), PDFNumber).asNumber()).toBe(7);
    const names = pdf.catalog.lookup(PDFName.of('Names'), PDFDict).lookup(PDFName.of('EmbeddedFiles'), PDFDict).lookup(PDFName.of('Names'), PDFArray);
    expect(names.lookup(1, PDFDict)).toBeDefined();
  });

  it('keeps page sizes and the /Rotate of rotated pages', async () => {
    const pdf = await run('overlay');
    expect(pdf.getPage(0).getSize()).toEqual({ width: 200, height: 300 });
    expect(pdf.getPage(1).getSize()).toEqual({ width: 210, height: 310 });
    expect(pdf.getPage(1).getRotation().angle).toBe(90);
  });

  it('turns the layer against /Rotate so it stays upright and covers the displayed page', async () => {
    const pdf = await run('overlay');
    const contents = pdf.getPage(1).node.Contents() as PDFArray;
    const layerOps = streamText(pdf, contents.get(contents.size() - 1));
    // Compose the cm matrices (outermost first) and map the layer's corners.
    const matrices = [...layerOps.matchAll(/^([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) ([-\d.e]+) cm$/gm)].map(m => m.slice(1).map(Number));
    const apply = (x: number, y: number) =>
      [...matrices].reverse().reduce(([px, py], [a, b, c, d, e, f]) => [a * px + c * py + e, b * px + d * py + f], [x, y]);
    const [originX, originY] = apply(0, 0);
    const [rightX, rightY] = apply(100, 0);
    const [topX, topY] = apply(0, 100);
    // Layer width runs up the unrotated page, which a /Rotate 90 viewer sees
    // as left-to-right; its height runs towards the unrotated left edge.
    expect([originX, originY]).toEqual([expect.closeTo(210), expect.closeTo(0)]);
    expect([rightX, rightY]).toEqual([expect.closeTo(210), expect.closeTo(310)]);
    expect([topX, topY]).toEqual([expect.closeTo(0), expect.closeTo(0)]);
  });

  it('draws an underlay below the base content', async () => {
    const pdf = await run('underlay');
    const contents = pdf.getPage(0).node.Contents() as PDFArray;
    expect(streamText(pdf, contents.get(0))).toContain('Do');
    expect(streamText(pdf, contents.get(contents.size() - 1))).not.toContain('Do');
  });
});

import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { fixPageSize } from '@/lib/pdf/processors/fix-page-size';
import { createNUpPDF } from '@/lib/pdf/processors/n-up';
import { combineSinglePage } from '@/lib/pdf/processors/combine-single-page';
import { resizePDFPagesUniform } from '@/lib/pdf/processors/pdf-page-resizer-uniform';
import { createBooklet } from '@/lib/pdf/processors/booklet';
import { imposeBookletFolding } from '@/lib/pdf/processors/booklet-folding-simulator';
import { overlayPDF } from '@/lib/pdf/processors/overlay';
import { rotatePDF } from '@/lib/pdf/processors/rotate';
import { posterizePDF } from '@/lib/pdf/processors/posterize';

/** A document whose second page is blank the way pdf-lib (and Add Blank Page) writes it: no /Contents. */
async function fixture(name = 'source.pdf'): Promise<File> {
  const pdf = await PDFDocument.create();
  pdf.addPage([200, 300]).drawText('Page 1', { x: 20, y: 100 });
  pdf.addPage([200, 300]);
  pdf.addPage([200, 300]).drawText('Page 3', { x: 20, y: 100 });
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function pageCount(output: { success: boolean; result?: unknown; error?: { details?: string; message?: string } }) {
  expect(output.error?.details ?? output.error?.message).toBeUndefined();
  expect(output.success).toBe(true);
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(output.result as Blob);
  });
  return (await PDFDocument.load(bytes)).getPageCount();
}

describe('tools that embed pages cope with blank pages that have no content stream', () => {
  it('fix page size', async () => {
    expect(await pageCount(await fixPageSize(await fixture(), { sizePreset: 'a4' } as never))).toBe(3);
  });

  it('n-up', async () => {
    expect(await pageCount(await createNUpPDF(await fixture(), { pagesPerSheet: 2 }))).toBe(2);
  });

  it('combine into a single page', async () => {
    expect(await pageCount(await combineSinglePage(await fixture(), {}))).toBe(1);
  });

  it('uniform page resize', async () => {
    expect(await pageCount(await resizePDFPagesUniform([await fixture()], {}))).toBe(3);
  });

  it('booklet folding', async () => {
    expect(await pageCount(await imposeBookletFolding(await fixture(), {}))).toBeGreaterThan(0);
  });

  it('booklet', async () => {
    expect(await pageCount(await createBooklet(await fixture(), {}))).toBeGreaterThan(0);
  });

  it('overlay with a blank base page', async () => {
    expect(await pageCount(await overlayPDF([await fixture('base.pdf'), await fixture('layer.pdf')], {}))).toBe(3);
  });

  it('rotate by an arbitrary angle', async () => {
    expect(await pageCount(await rotatePDF(await fixture(), { angle: 45 }))).toBe(3);
  });

  it('posterize', async () => {
    expect(await pageCount(await posterizePDF(await fixture(), {}))).toBeGreaterThan(0);
  });
});

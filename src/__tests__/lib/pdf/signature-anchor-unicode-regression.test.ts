import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument, PDFName, PDFDict } from 'pdf-lib';
import { readFileSync } from 'node:fs';
import { PdfSignatureAnchorHelperProcessor } from '@/lib/pdf/processors/pdf-signature-anchor-helper';

afterEach(() => vi.restoreAllMocks());
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

describe('signature guide label encoding', () => {
  it.each([undefined, '请在此处签名'])('writes a Unicode guide for label %j', async anchorLabel => {
    const bytes = Uint8Array.from(readFileSync('public/fonts/NotoSansSC-Regular.ttf'));
    const fetchFont = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true, arrayBuffer: async () => bytes.buffer,
    } as Response);
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const options = anchorLabel === undefined ? {} : { anchorLabel };
    const result = await new PdfSignatureAnchorHelperProcessor().process({ files: [await inputFile(pdf)], options });
    expect(result.success).toBe(true);
    expect(fetchFont).toHaveBeenCalledWith(expect.stringContaining('/fonts/NotoSansSC-Regular.ttf'));
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    const fonts = saved.getPage(0).node.Resources()!.lookup(PDFName.of('Font'), PDFDict);
    const types = fonts.values().map(ref => saved.context.lookup(ref, PDFDict).get(PDFName.of('Subtype'))?.toString());
    expect(types).toContain('/Type0');
  });
  it('keeps ASCII labels independent of a font download', async () => {
    const fetchFont = vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('offline'));
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const result = await new PdfSignatureAnchorHelperProcessor().process({ files: [await inputFile(pdf)], options: { anchorLabel: 'Sign Here' } });
    expect(result.success).toBe(true);
    expect(fetchFont).not.toHaveBeenCalled();
  });
});

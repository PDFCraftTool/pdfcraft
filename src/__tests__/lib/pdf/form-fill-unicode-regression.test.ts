import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { readFileSync } from 'node:fs';
import { FormFillerProcessor } from '@/lib/pdf/processors/form-filler';
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
describe('Unicode form appearances', () => {
    it.each([false, true])('saves Chinese text with flatten = %s', async (flatten) => {
        const font = Uint8Array.from(readFileSync('public/fonts/NotoSansSC-Regular.ttf'));
        const fetchFont = vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, arrayBuffer: async () => font.buffer } as Response);
        const pdf = await PDFDocument.create();
        const page = pdf.addPage();
        pdf.getForm().createTextField('name').addToPage(page, { x: 30, y: 30, width: 240, height: 40 });
        const result = await new FormFillerProcessor().process({ files: [await inputFile(pdf)], options: { fields: [{ fieldName: 'name', value: '中文姓名' }], flatten } });
        expect(result.success).toBe(true);
        expect(fetchFont).toHaveBeenCalledWith(expect.stringContaining('/fonts/NotoSansSC-Regular.ttf'));
        const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
        if (flatten)
            expect(saved.getForm().getFields()).toHaveLength(0);
        else
            expect(saved.getForm().getTextField('name').getText()).toBe('中文姓名');
    });
    it('does not download a font for ASCII text', async () => {
        const fetchFont = vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('offline'));
        const pdf = await PDFDocument.create();
        const page = pdf.addPage();
        pdf.getForm().createTextField('name').addToPage(page);
        const result = await new FormFillerProcessor().process({ files: [await inputFile(pdf)], options: { fields: [{ fieldName: 'name', value: 'Alice' }] } });
        expect(result.success).toBe(true);
        expect(fetchFont).not.toHaveBeenCalled();
    });
});

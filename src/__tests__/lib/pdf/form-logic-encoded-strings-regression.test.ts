import { runInNewContext } from 'node:vm';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument, PDFName, PDFDict, PDFHexString } from 'pdf-lib';
import { FormLogicDesignerProcessor } from '@/lib/pdf/processors/form-logic-designer';
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
describe('saved form rule text', () => {
    it.each(['Student\r\n"quoted"\\path', '学生'])('preserves a rule condition %j', async (condition) => {
        const pdf = await PDFDocument.create();
        const page = pdf.addPage();
        const form = pdf.getForm();
        form.createTextField('source').addToPage(page);
        form.createTextField('目标').addToPage(page);
        const value = '你好\r\n"value"\\path';
        const result = await new FormLogicDesignerProcessor().process({ files: [await inputFile(pdf)], options: { rules: [{ source: 'source', target: '目标', trigger: 'change', condition: 'equals', value: condition, action: 'setValue', actionValue: value }] } });
        expect(result.success).toBe(true);
        const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
        const action = saved.getForm().getTextField('source').acroField.dict.lookup(PDFName.of('AA'), PDFDict).lookup(PDFName.of('V'), PDFDict);
        const encoded = action.lookup(PDFName.of('JS')) as PDFHexString;
        const script = encoded.decodeText();
        const target = { value: '' };
        const getField = vi.fn((name: string) => name === '目标' ? target : null);
        runInNewContext(script, { getField, event: { value: condition } }, { timeout: 1000 });
        expect(getField).toHaveBeenCalledWith('目标');
        expect(target.value).toBe(value);
    });
});

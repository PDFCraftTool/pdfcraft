import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFName, PDFDict, PDFHexString } from 'pdf-lib';
import { FormFillerProcessor } from '@/lib/pdf/processors/form-filler';
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
describe('flattened form annotation references', () => {
    it.each([false, true])('keeps existing note = %s and removes deleted widget references', async (keepNote) => {
        const pdf = await PDFDocument.create();
        const page = pdf.addPage();
        pdf.getForm().createTextField('name').addToPage(page, { x: 30, y: 30, width: 200, height: 40 });
        if (keepNote) {
            const note = pdf.context.obj({ Type: 'Annot', Subtype: 'Text', Rect: [300, 100, 320, 120], Contents: PDFHexString.fromText('keep note') });
            page.node.Annots()!.push(pdf.context.register(note));
        }
        const result = await new FormFillerProcessor().process({ files: [await inputFile(pdf)], options: { fields: [{ fieldName: 'name', value: 'Alice' }], flatten: true } });
        expect(result.success).toBe(true);
        const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
        expect(saved.getForm().getFields()).toHaveLength(0);
        const annots = saved.getPage(0).node.Annots()!;
        expect(annots.size()).toBe(keepNote ? 1 : 0);
        if (keepNote)
            expect(annots.lookup(0, PDFDict).lookup(PDFName.of('Contents'), PDFHexString).decodeText()).toBe('keep note');
    });
});

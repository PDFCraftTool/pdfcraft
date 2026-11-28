import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFName, PDFHexString } from 'pdf-lib';
import { DeepSanitizeProcessor } from '@/lib/pdf/processors/deep-sanitize';
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
describe('optional-content resource selection', () => {
    it.each([false, true])('retains direct and indirect properties when stripping is %s', async (strip) => {
        const pdf = await PDFDocument.create();
        for (const indirect of [false, true]) {
            const page = pdf.addPage();
            const resources = pdf.context.obj({ Properties: { Layer: pdf.context.register(pdf.context.obj({ Type: 'OCG', Name: PDFHexString.fromText('keep layer') })) } });
            page.node.set(PDFName.of('Resources'), indirect ? pdf.context.register(resources) : resources);
        }
        const result = await new DeepSanitizeProcessor().process({ files: [await inputFile(pdf)], options: { stripMetadata: false, stripPieceInfo: false, stripOcgWatermarks: strip } });
        expect(result.success).toBe(true);
        const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
        for (const page of saved.getPages())
            expect(page.node.Resources()!.has(PDFName.of('Properties'))).toBe(!strip);
    });
});

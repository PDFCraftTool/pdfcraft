import { describe, it, expect } from 'vitest';
import { PDFDocument, PDFName, PDFArray, PDFDict } from 'pdf-lib';
import { PdfScratchpadCanvasProcessor } from '@/lib/pdf/processors/pdf-scratchpad-canvas';
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
describe('bottom scratchpad placement', () => {
    it.each([[0, 0, false], [40, 70, false], [40, 70, true]] as const)('extends below origin %j,%j, cropped = %j', async (x, y, cropped) => {
        const pdf = await PDFDocument.create();
        const page = pdf.addPage([200, 300]);
        if (cropped) page.setCropBox(x, y, 100, 200);
        else page.setMediaBox(x, y, 200, 300);
        page.drawText('Original bottom text', { x: x + 10, y: y + 10, size: 10 });
        const note = pdf.context.obj({ Type: 'Annot', Subtype: 'Text', Rect: [x + 10, y + 10, x + 30, y + 30] });
        page.node.set(PDFName.of('Annots'), pdf.context.obj([pdf.context.register(note)]));
        const result = await new PdfScratchpadCanvasProcessor().process({ files: [await inputFile(pdf)], options: { padPosition: 'bottom', padSize: 100, gridType: 'grid' } });
        expect(result.success).toBe(true);
        const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
        const output = saved.getPage(0);
        expect(output.getMediaBox()).toEqual({ x, y: y - 100, width: cropped ? 100 : 200, height: cropped ? 300 : 400 });
        expect(output.getCropBox()).toEqual(output.getMediaBox());
        expect(output.node.Annots()!.lookup(0, PDFDict).lookup(PDFName.of('Rect'), PDFArray).asArray().map(v => v.toString())).toEqual([x + 10, y + 10, x + 30, y + 30].map(String));
    });
});

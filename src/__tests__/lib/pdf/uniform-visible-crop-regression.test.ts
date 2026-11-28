import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument, PDFName, PDFArray, PDFDict, PDFPage, PDFRawStream, degrees } from 'pdf-lib';
import { PdfPageResizerUniformProcessor } from '@/lib/pdf/processors/pdf-page-resizer-uniform';
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
describe('uniform resizing of cropped input', () => {
    it.each([0, 90, 180, 270])('fits the visible crop on rotation %i', async (angle) => {
        const pdf = await PDFDocument.create();
        const page = pdf.addPage([400, 600]);
        page.setCropBox(40, 70, 200, 300);
        page.setRotation(degrees(angle));
        page.drawText('visible', { x: 50, y: 100 });
        const draw = vi.spyOn(PDFPage.prototype, 'drawPage');
        const result = await new PdfPageResizerUniformProcessor().process({ files: [await inputFile(pdf)], options: { targetSize: 'Letter', scaleMode: 'fit' } });
        expect(result.success).toBe(true);
        const turned = angle % 180 !== 0;
        const width = turned ? 300 : 200;
        const height = turned ? 200 : 300;
        const scale = Math.min(612 / width, 792 / height);
        const options = draw.mock.calls.at(-1)![1]!;
        expect(options.width).toBeCloseTo(200 * scale);
        expect(options.height).toBeCloseTo(300 * scale);
        const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
        const objects = saved.getPage(0).node.Resources()!.lookup(PDFName.of('XObject'), PDFDict);
        const form = saved.context.lookup(objects.values()[0]) as PDFRawStream;
        expect(form.dict.lookup(PDFName.of('BBox'), PDFArray).asArray().map(v => v.toString())).toEqual(['40', '70', '240', '370']);
    });
});

import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFDocument, PDFName, PDFDict, PDFHexString } from 'pdf-lib';
import { CitationLinkerProcessor } from '@/lib/pdf/processors/citation-linker';
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
vi.mock('@/lib/pdf/loader', async (original) => ({ ...await original<typeof import('@/lib/pdf/loader')>(), loadPdfjs: async () => ({ getDocument: () => ({ promise: Promise.resolve({ numPages: 1, getPage: async () => ({ getTextContent: async () => ({ items: [] }) }) }) }) }) }));
describe('saved citation links', () => {
    it.each([false, true])('preserves existing annotations with indirect array = %s', async (indirect) => {
        const pdf = await PDFDocument.create();
        const page = pdf.addPage();
        const note = pdf.context.register(pdf.context.obj({ Type: 'Annot', Subtype: 'Text', Rect: [0, 0, 20, 20], Contents: PDFHexString.fromText('keep me') }));
        const annots = pdf.context.obj([note]);
        page.node.set(PDFName.of('Annots'), indirect ? pdf.context.register(annots) : annots);
        const url = 'https://example.com/论文';
        const result = await new CitationLinkerProcessor().process({ files: [await inputFile(pdf)], options: { citationsList: [{ id: 'one', marker: '[1]', pageNum: 1, rect: [30, 40, 70, 60], url, refText: 'reference' }] } });
        expect(result.success).toBe(true);
        const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
        const all = saved.getPage(0).node.Annots()!;
        expect(all.size()).toBe(2);
        expect(all.lookup(0, PDFDict).lookup(PDFName.of('Contents'), PDFHexString).decodeText()).toBe('keep me');
        const action = all.lookup(1, PDFDict).lookup(PDFName.of('A'), PDFDict);
        expect(action.lookup(PDFName.of('URI'), PDFHexString).decodeText()).toBe(url);
    });
});

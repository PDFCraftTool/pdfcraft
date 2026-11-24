import { describe, it, expect, vi, afterEach } from 'vitest';
import { AnnotationExporterProcessor } from '@/lib/pdf/processors/annotation-exporter';
afterEach(() => vi.restoreAllMocks());
async function outputBytes(blob: Blob): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(blob);
    });
}
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs: async () => ({ getDocument: () => ({ promise: Promise.resolve({ numPages: 1, getPage: async () => ({ getAnnotations: async () => [
                        { subtype: 'Text', contentsObj: { str: '中文备注' }, titleObj: { str: 'Reviewer' } },
                        { subtype: 'Highlight', contentsObj: { str: 'A highlighted point' }, titleObj: { str: 'Editor' } },
                        { subtype: 'Text', contents: 'Legacy note', title: 'Legacy author' },
                    ] }) }) }) }) }));
describe('PDF.js annotation text objects', () => {
    it.each(['json', 'md'])('keeps note bodies and authors in %s', async (format) => {
        const file = new File(['pdf'], 'notes.pdf', { type: 'application/pdf' });
        Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(0) });
        const result = await new AnnotationExporterProcessor().process({ files: [file], options: { format } });
        expect(result.success).toBe(true);
        const text = new TextDecoder().decode(await outputBytes(result.result as Blob));
        for (const expected of ['中文备注', 'Reviewer', 'A highlighted point', 'Editor', 'Legacy note', 'Legacy author'])
            expect(text).toContain(expected);
        expect(result.metadata?.annotationCount).toBe(3);
    });
});

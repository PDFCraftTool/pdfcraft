import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFToMarkdownProcessor } from '@/lib/pdf/processors/pdf-to-markdown';
import { PDFErrorCode } from '@/types/pdf';
afterEach(() => vi.restoreAllMocks());
const { getPage } = vi.hoisted(() => ({ getPage: vi.fn(async () => ({ getTextContent: async () => ({ items: [] }), getAnnotations: async () => [] })) }));
vi.mock('pdfjs-dist', () => ({ GlobalWorkerOptions: {}, getDocument: () => ({ promise: Promise.resolve({ numPages: 3, getPage }) }) }));
describe('explicit Markdown page selection', () => {
    it.each(['99', '3-1', 'not-a-range', '1.5', '1,garbage', '1-2-3'])('rejects %s without extracting any page', async (pageRange) => {
        getPage.mockClear();
        const file = new File([], 'source.pdf', { type: 'application/pdf' });
        Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(0) });
        const result = await new PDFToMarkdownProcessor().process({ files: [file], options: { pageRange } });
        expect(result.success).toBe(false);
        expect(result.error?.code).toBe(PDFErrorCode.INVALID_PAGE_RANGE);
        expect(getPage).not.toHaveBeenCalled();
    });
    it.each([['', 3], ['2-999999999', 2]])('keeps valid selection %j', async (pageRange, count) => {
        getPage.mockClear();
        const file = new File([], 'source.pdf', { type: 'application/pdf' });
        Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(0) });
        const result = await new PDFToMarkdownProcessor().process({ files: [file], options: { pageRange } });
        expect(result.success).toBe(true);
        expect(getPage).toHaveBeenCalledTimes(count as number);
        expect(result.metadata?.pageCount).toBe(count);
    });
});

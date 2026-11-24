import { describe, it, expect, vi, afterEach } from 'vitest';
import { PDFPage, degrees } from 'pdf-lib';
import { PdfSpineBookbinderProcessor } from '@/lib/pdf/processors/pdf-spine-bookbinder';
afterEach(() => vi.restoreAllMocks());
describe('spine title position', () => {
    it.each(['Book', 'A longer printed book title'])('centers title %s along the spine', async (bookTitle) => {
        const draw = vi.spyOn(PDFPage.prototype, 'drawText');
        const result = await new PdfSpineBookbinderProcessor().process({ files: [], options: { bookTitle, pageCount: 200, coverHeightPt: 400 } });
        expect(result.success).toBe(true);
        const [, options] = draw.mock.calls.find(([text]) => text === bookTitle)!;
        const extent = options!.font!.widthOfTextAtSize(bookTitle, options!.size!);
        expect(options!.rotate).toEqual(degrees(270));
        expect(options!.y! - extent / 2).toBeCloseTo(200);
    });
});

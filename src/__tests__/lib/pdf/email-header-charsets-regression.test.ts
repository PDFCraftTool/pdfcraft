import { describe, it, expect, vi, afterEach } from 'vitest';
import { EmailToPDFProcessor } from '@/lib/pdf/processors/email-to-pdf';
afterEach(() => vi.restoreAllMocks());
const { htmlToPdf } = vi.hoisted(() => ({ htmlToPdf: vi.fn(async (_html: string, _options: unknown) => new Blob(['pdf'], { type: 'application/pdf' })) }));
vi.mock('@/lib/pdf/pymupdf-loader', () => ({ loadPyMuPDF: async () => ({ htmlToPdf }) }));
describe('RFC 2047 email headers', () => {
    it.each([
        ['=?UTF-8?B?5Lit5paH?=', '中文'],
        ['=?UTF-8?Q?=E4=B8=AD=E6=96=87?=', '中文'],
        ['=?ISO-8859-1?Q?Andr=E9?=', 'André'],
        ['=?UTF-8?B?5Lit5paH?=\r\n =?UTF-8?B?5Li76aKY?=', '中文主题'],
        ['=?unknown-charset?B?SGVsbG8=?=', '=?unknown-charset?B?SGVsbG8=?='],
    ])('decodes header %s', async (encoded, expected) => {
        const file = new File([], 'mail.eml', { type: 'message/rfc822' });
        Object.defineProperty(file, 'text', { value: async () => `Subject: ${encoded}\r\nFrom: ${encoded} <sender@example.com>\r\nTo: reader@example.com\r\n\r\nBody` });
        const result = await new EmailToPDFProcessor().process({ files: [file], options: {} });
        expect(result.success).toBe(true);
        expect(result.metadata?.subject).toBe(expected);
        expect(htmlToPdf.mock.calls.at(-1)![0]).toContain(expected);
    });
});

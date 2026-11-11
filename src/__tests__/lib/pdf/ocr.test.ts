import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  OCRProcessor,
  createOCRProcessor,
  ocrPDF,
  detectFileType,
  preprocessCanvas,
  generateMarkdownOutput,
  generateJsonOutput,
  getDefaultOcrLanguages,
  getTesseractParameters,
  normalizeCjkSpacing,
  parseOcrPageRange,
  collectOcrWords,
  layoutVerticalChars,
  OCR_LANGUAGES,
} from '@/lib/pdf/processors/ocr';
import { createWorker } from 'tesseract.js';
import { PDFErrorCode } from '@/types/pdf';

const mockSetParameters = vi.fn().mockResolvedValue(undefined);

// Mock Tesseract.js
const mockRecognize = vi.fn().mockResolvedValue({
  data: {
    text: 'Hello World 测试中文',
    words: [
      { text: 'Hello', bbox: { x0: 10, y0: 10, x1: 50, y1: 25 } },
      { text: 'World', bbox: { x0: 55, y0: 10, x1: 95, y1: 25 } },
      { text: '测试中文', bbox: { x0: 100, y0: 10, x1: 150, y1: 25 } },
    ],
  },
});

const mockTerminate = vi.fn().mockResolvedValue(undefined);

vi.mock('tesseract.js', () => ({
  default: {
    createWorker: vi.fn().mockImplementation(async (lang, oem, options) => {
      if (options?.logger) {
        options.logger({ status: 'loading tesseract core', progress: 0.5 });
      }
      return {
        recognize: mockRecognize,
        setParameters: mockSetParameters,
        terminate: mockTerminate,
      };
    }),
  },
  createWorker: vi.fn().mockImplementation(async (lang, oem, options) => {
    if (options?.logger) {
      options.logger({ status: 'loading tesseract core', progress: 0.5 });
    }
    return {
      recognize: mockRecognize,
      setParameters: mockSetParameters,
      terminate: mockTerminate,
    };
  }),
}));

// Mock pdf loader
const mockDrawText = vi.fn();
const mockAddPage = vi.fn().mockReturnValue({
  drawText: mockDrawText,
  drawImage: vi.fn(),
});
const mockSave = vi.fn().mockResolvedValue(new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x35]));

vi.mock('@/lib/pdf/loader', () => {
  return {
    loadPdfjs: vi.fn().mockImplementation(async () => {
      return {
        getDocument: vi.fn().mockImplementation(() => {
          return {
            promise: Promise.resolve({
              numPages: 1,
              getPage: vi.fn().mockImplementation(async () => {
                return {
                  getViewport: () => ({ width: 600, height: 800 }),
                  render: () => ({
                    promise: Promise.resolve(),
                  }),
                };
              }),
            }),
          };
        }),
      };
    }),
    loadPdfLib: vi.fn().mockImplementation(async () => {
      return {
        PDFDocument: {
          load: vi.fn().mockResolvedValue({
            getPageCount: () => 1,
            getPage: () => ({
              drawText: mockDrawText,
            }),
            embedFont: vi.fn().mockImplementation(async () => ({
              name: 'MockFont',
            })),
            registerFontkit: vi.fn(),
            setTitle: vi.fn(),
            setSubject: vi.fn(),
            setKeywords: vi.fn(),
            save: mockSave,
          }),
          create: vi.fn().mockResolvedValue({
            addPage: mockAddPage,
            embedPng: vi.fn().mockResolvedValue({ width: 400, height: 300 }),
            embedJpg: vi.fn().mockResolvedValue({ width: 400, height: 300 }),
            save: mockSave,
          }),
        },
        StandardFonts: {
          Helvetica: 'Helvetica',
        },
        rgb: vi.fn().mockReturnValue({ r: 0, g: 0, b: 0 }),
      };
    }),
  };
});

describe('OCRProcessor', () => {
  let processor: OCRProcessor;

  beforeEach(() => {
    vi.clearAllMocks();
    processor = createOCRProcessor();

    // Mock document.createElement for canvas rendering
    if (typeof document !== 'undefined') {
      const origCreateElement = document.createElement.bind(document);
      vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
        if (tagName === 'canvas') {
          return {
            width: 600,
            height: 800,
            getContext: () => ({
              fillStyle: '',
              fillRect: vi.fn(),
              drawImage: vi.fn(),
            }),
            toBlob: (cb: (b: Blob) => void) => {
              cb(new Blob([new Uint8Array([0x89, 0x50, 0x4E, 0x47])], { type: 'image/png' }));
            },
          } as any;
        }
        return origCreateElement(tagName);
      });
    }
  });

  describe('detectFileType', () => {
    it('detects PDF file via magic bytes %PDF-', async () => {
      const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x37]);
      const file = new File([pdfBytes], 'unnamed_file', { type: 'application/octet-stream' });
      const type = await detectFileType(file);
      expect(type).toBe('pdf');
    });

    it('detects PNG image via magic bytes', async () => {
      const pngBytes = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
      const file = new File([pngBytes], 'document', { type: 'application/octet-stream' });
      const type = await detectFileType(file);
      expect(type).toBe('image');
    });

    it('detects JPEG image via magic bytes', async () => {
      const jpgBytes = new Uint8Array([0xFF, 0xD8, 0xFF, 0xE0]);
      const file = new File([jpgBytes], 'photo', { type: 'application/octet-stream' });
      const type = await detectFileType(file);
      expect(type).toBe('image');
    });

    it('detects WebP image via magic bytes', async () => {
      const webpBytes = new Uint8Array([
        0x52, 0x49, 0x46, 0x46, 0x00, 0x00, 0x00, 0x00,
        0x57, 0x45, 0x42, 0x50,
      ]);
      const file = new File([webpBytes], 'scan', { type: 'application/octet-stream' });
      const type = await detectFileType(file);
      expect(type).toBe('image');
    });

    it('falls back to file extension or MIME type', async () => {
      const file1 = new File(['mock content'], 'test.pdf', { type: 'application/pdf' });
      expect(await detectFileType(file1)).toBe('pdf');

      const file2 = new File(['mock content'], 'test.jpg', { type: 'image/jpeg' });
      expect(await detectFileType(file2)).toBe('image');

      const file3 = new File(['plain text'], 'test.txt', { type: 'text/plain' });
      expect(await detectFileType(file3)).toBe('unknown');
    });
  });

  describe('Validation', () => {
    it('returns INVALID_OPTIONS error if no files are provided', async () => {
      const result = await processor.process({ files: [], options: {} });
      expect(result.success).toBe(false);
      expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
      expect(result.error?.message).toContain('No PDF or image file found');
    });

    it('returns INVALID_OPTIONS error if multiple files are provided', async () => {
      const file1 = new File(['%PDF-1.4'], 'file1.pdf', { type: 'application/pdf' });
      const file2 = new File(['%PDF-1.4'], 'file2.pdf', { type: 'application/pdf' });
      const result = await processor.process({ files: [file1, file2], options: {} });
      expect(result.success).toBe(false);
      expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
    });

    it('returns FILE_TYPE_INVALID error for unsupported formats', async () => {
      const file = new File(['This is plain text'], 'doc.txt', { type: 'text/plain' });
      const result = await processor.process({ files: [file], options: {} });
      expect(result.success).toBe(false);
      expect(result.error?.code).toBe(PDFErrorCode.FILE_TYPE_INVALID);
    });
  });

  describe('Processing PDF with OCR', () => {
    it('successfully processes PDF to text output format', async () => {
      const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]);
      const file = new File([pdfBytes], 'sample.pdf', { type: 'application/pdf' });

      const progressUpdates: number[] = [];
      const result = await processor.process(
        {
          files: [file],
          options: {
            languages: ['eng'],
            outputFormat: 'text',
          },
        },
        (prog) => progressUpdates.push(prog)
      );

      expect(result.success).toBe(true);
      expect(result.filename).toBe('sample_ocr.txt');
      expect(result.result).toBeInstanceOf(Blob);
      expect(progressUpdates.length).toBeGreaterThan(0);
      expect(progressUpdates[progressUpdates.length - 1]).toBe(100);
    });

    it('successfully creates searchable PDF and embeds invisible text layer', async () => {
      const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]);
      const file = new File([pdfBytes], 'scanned_doc.pdf', { type: 'application/pdf' });

      const result = await processor.process({
        files: [file],
        options: {
          languages: ['eng', 'chi_sim'],
          outputFormat: 'searchable-pdf',
        },
      });

      expect(result.success).toBe(true);
      expect(result.filename).toBe('scanned_doc_searchable.pdf');
      expect(result.result).toBeInstanceOf(Blob);
      expect(mockDrawText).toHaveBeenCalled();
    });

    it('supports legacy single language string option', async () => {
      const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]);
      const file = new File([pdfBytes], 'test.pdf', { type: 'application/pdf' });

      const result = await processor.process({
        files: [file],
        options: {
          language: 'chi_sim',
          outputFormat: 'text',
        } as any,
      });

      expect(result.success).toBe(true);
      expect(result.metadata?.languages).toEqual(['chi_sim']);
    });

    it('processes image file by converting to searchable PDF', async () => {
      const pngBytes = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
      const file = new File([pngBytes], 'scan.png', { type: 'image/png' });

      const result = await processor.process({
        files: [file],
        options: {
          languages: ['eng'],
          outputFormat: 'searchable-pdf',
        },
      });

      expect(result.success).toBe(true);
      expect(result.filename).toBe('scan_searchable.pdf');
      expect(result.result).toBeInstanceOf(Blob);
    });

    it('successfully processes PDF to markdown output with metadata stats', async () => {
      const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]);
      const file = new File([pdfBytes], 'notes.pdf', { type: 'application/pdf' });

      const result = await processor.process({
        files: [file],
        options: {
          languages: ['eng'],
          outputFormat: 'markdown',
        },
      });

      expect(result.success).toBe(true);
      expect(result.filename).toBe('notes_ocr.md');
      expect(result.result).toBeInstanceOf(Blob);
      expect(result.metadata?.totalWords).toBeGreaterThan(0);
      expect(result.metadata?.totalChars).toBeGreaterThan(0);
      expect(result.metadata?.avgConfidence).toBeGreaterThan(0);
    });

    it('successfully processes PDF to structured json output with bounding boxes', async () => {
      const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]);
      const file = new File([pdfBytes], 'invoice.pdf', { type: 'application/pdf' });

      const result = await processor.process({
        files: [file],
        options: {
          languages: ['eng'],
          outputFormat: 'json',
          enhanceContrast: true,
        },
      });

      expect(result.success).toBe(true);
      expect(result.filename).toBe('invoice_ocr.json');
      expect(result.result).toBeInstanceOf(Blob);
    });
  });

  describe('Pre-processing and output generators', () => {
    it('preprocessCanvas gracefully handles canvas without error', () => {
      const canvas = document.createElement('canvas');
      canvas.width = 100;
      canvas.height = 100;
      expect(() => preprocessCanvas(canvas)).not.toThrow();
    });

    it('generateMarkdownOutput formats sections properly', () => {
      const md = generateMarkdownOutput(
        [
          {
            pageNum: 1,
            text: 'First line\nSecond line',
            words: [{ text: 'First' }, { text: 'line' }],
          },
        ],
        'TestDocument.pdf'
      );
      expect(md).toContain('# TestDocument');
      expect(md).toContain('## Page 1');
      expect(md).toContain('First line');
    });

    it('generateJsonOutput creates valid JSON with word bbox and confidence', () => {
      const jsonStr = generateJsonOutput(
        [
          {
            pageNum: 1,
            text: 'Invoice No. 12345',
            words: [
              { text: 'Invoice', confidence: 95, x: 10, y: 20, width: 50, height: 12 },
              { text: '12345', confidence: 98, x: 65, y: 20, width: 40, height: 12 },
            ],
          },
        ],
        {
          fileName: 'invoice.pdf',
          languages: ['eng'],
          totalWords: 2,
          totalChars: 17,
          avgConfidence: 96,
        }
      );
      const parsed = JSON.parse(jsonStr);
      expect(parsed.metadata.fileName).toBe('invoice.pdf');
      expect(parsed.metadata.avgConfidence).toBe(96);
      expect(parsed.pages[0].words[0].text).toBe('Invoice');
      expect(parsed.pages[0].words[0].confidence).toBe(95);
    });
  });

  describe('Convenience ocrPDF function', () => {
    it('executes OCR via helper function', async () => {
      const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34]);
      const file = new File([pdfBytes], 'quick.pdf', { type: 'application/pdf' });

      const result = await ocrPDF(file, { outputFormat: 'text' });
      expect(result.success).toBe(true);
      expect(result.filename).toBe('quick_ocr.txt');
    });
  });

  describe('Japanese (horizontal / vertical) support', () => {
    const makePdf = (name: string) =>
      new File([new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2D, 0x31, 0x2E, 0x34])], name, { type: 'application/pdf' });

    it('lists jpn and jpn_vert as selectable languages', () => {
      expect(OCR_LANGUAGES).toContain('jpn');
      expect(OCR_LANGUAGES).toContain('jpn_vert');
    });

    it('passes jpn_vert to Tesseract and sets vertical page segmentation', async () => {
      const result = await processor.process({
        files: [makePdf('tategaki.pdf')],
        options: { languages: ['jpn_vert'], outputFormat: 'text' },
      });

      expect(result.success).toBe(true);
      expect(vi.mocked(createWorker).mock.calls[0][0]).toBe('jpn_vert');
      expect(mockSetParameters).toHaveBeenCalledWith(
        expect.objectContaining({ tessedit_pageseg_mode: '5', preserve_interword_spaces: '1' })
      );
    });

    it('accepts the workflow-style "jpn+jpn_vert" string and uses automatic segmentation', async () => {
      const result = await processor.process({
        files: [makePdf('mixed.pdf')],
        options: { language: 'jpn+jpn_vert', outputFormat: 'text' } as any,
      });

      expect(result.success).toBe(true);
      expect(vi.mocked(createWorker).mock.calls[0][0]).toBe('jpn+jpn_vert');
      expect(mockSetParameters).toHaveBeenCalledWith(
        expect.objectContaining({ tessedit_pageseg_mode: '3' })
      );
    });

    it('does not change Tesseract parameters for English-only OCR', async () => {
      await processor.process({
        files: [makePdf('english.pdf')],
        options: { languages: ['eng'], outputFormat: 'text' },
      });
      expect(mockSetParameters).not.toHaveBeenCalled();
    });

    it('draws vertical words one character at a time in the searchable PDF', async () => {
      // Tall, narrow box (canvas px at scale 2): 20px wide, 120px high
      mockRecognize.mockResolvedValueOnce({
        data: {
          text: '縦書き',
          blocks: [{ paragraphs: [{ lines: [{ words: [
            { text: '縦書き', confidence: 88, bbox: { x0: 100, y0: 40, x1: 120, y1: 160 } },
          ] }] }] }],
        },
      });

      const result = await processor.process({
        files: [makePdf('tategaki.pdf')],
        options: { languages: ['jpn_vert'], outputFormat: 'searchable-pdf' },
      });

      expect(result.success).toBe(true);
      const drawn = mockDrawText.mock.calls.map(call => call[0]);
      expect(drawn).toEqual(['縦', '書', 'き']);
      // Top character sits highest on the page (PDF y grows upward)
      const ys = mockDrawText.mock.calls.map(call => call[1].y);
      expect(ys[0]).toBeGreaterThan(ys[1]);
      expect(ys[1]).toBeGreaterThan(ys[2]);
    });

    it('keeps horizontal Japanese words as one run', async () => {
      mockRecognize.mockResolvedValueOnce({
        data: {
          text: '横書き',
          words: [{ text: '横書き', confidence: 90, bbox: { x0: 10, y0: 10, x1: 70, y1: 30 } }],
        },
      });

      await processor.process({
        files: [makePdf('yokogaki.pdf')],
        options: { languages: ['jpn', 'jpn_vert'], outputFormat: 'searchable-pdf' },
      });

      expect(mockDrawText.mock.calls.map(call => call[0])).toEqual(['横書き']);
    });

    it('removes spaces Tesseract inserts between Japanese characters in text output', async () => {
      mockRecognize.mockResolvedValueOnce({
        data: { text: '日 本 語 の 文 書 PDF Craft で す 。', words: [] },
      });

      const result = await processor.process({
        files: [makePdf('jp.pdf')],
        options: { languages: ['jpn', 'eng'], outputFormat: 'text' },
      });

      // jsdom's Blob lacks text(), so read the output via FileReader.
      const text = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(result.result as Blob);
      });
      expect(text).toContain('日本語の文書 PDF Craft です。');
    });
  });

  describe('Japanese helpers', () => {
    it('normalizeCjkSpacing joins CJK characters but keeps Latin word spaces', () => {
      expect(normalizeCjkSpacing('東 京 都 　 千 代 田 区')).toBe('東京都千代田区');
      expect(normalizeCjkSpacing('ア イ ウ abc def')).toBe('アイウ abc def');
      expect(normalizeCjkSpacing('Hello World')).toBe('Hello World');
    });

    it('getTesseractParameters returns null when no special handling is needed', () => {
      expect(getTesseractParameters(['eng'])).toBeNull();
      expect(getTesseractParameters(['kor'])).toBeNull();
      expect(getTesseractParameters(['jpn'])).toEqual({ preserve_interword_spaces: '1' });
      expect(getTesseractParameters(['jpn_vert', 'eng'])).toEqual({
        preserve_interword_spaces: '1',
        tessedit_pageseg_mode: '5',
      });
    });

    it('getDefaultOcrLanguages picks Japanese + English for the ja locale', () => {
      expect(getDefaultOcrLanguages('ja')).toEqual(['jpn', 'eng']);
      expect(getDefaultOcrLanguages('en')).toEqual(['eng']);
      expect(getDefaultOcrLanguages(undefined)).toEqual(['eng']);
    });

    it('collectOcrWords flattens the block tree when the flat words array is missing', () => {
      const word = { text: '縦書き', bbox: { x0: 0, y0: 0, x1: 10, y1: 30 } };
      const data = { blocks: [{ paragraphs: [{ lines: [{ words: [word] }] }] }] };
      expect(collectOcrWords(data)).toEqual([word]);
      expect(collectOcrWords({ words: [word], blocks: [] })).toEqual([word]);
      expect(collectOcrWords({ blocks: null })).toEqual([]);
    });

    it('layoutVerticalChars splits a column top-to-bottom when no symbol boxes exist', () => {
      const chars = layoutVerticalChars({ text: '縦書き', x: 100, y: 400, width: 20, height: 60 });
      expect(chars.map(c => c.text)).toEqual(['縦', '書', 'き']);
      expect(chars.map(c => c.y)).toEqual([440, 420, 400]);
      expect(chars.every(c => c.x === 100 && c.width === 20 && c.height === 20)).toBe(true);
    });

    it('parseOcrPageRange parses ranges into sorted unique pages', () => {
      expect(parseOcrPageRange('')).toEqual([]);
      expect(parseOcrPageRange('5, 1-3, 2')).toEqual([1, 2, 3, 5]);
    });
  });
});

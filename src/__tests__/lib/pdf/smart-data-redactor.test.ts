import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  SmartDataRedactorProcessor,
  createSmartDataRedactorProcessor,
  redactSmartData
} from '@/lib/pdf/processors/smart-data-redactor';
import { PDFErrorCode } from '@/types/pdf';

vi.mock('@/lib/pdf/loader', () => {
  const mockPdfjs = {
    getDocument: vi.fn().mockImplementation(() => {
      return {
        promise: Promise.resolve({
          numPages: 1,
          getPage: vi.fn().mockImplementation(async () => {
            return {
              getTextContent: () => Promise.resolve({
                items: [
                  { str: 'test@example.com', transform: [12, 0, 0, 12, 100, 200] },
                ],
              }),
            };
          }),
        }),
      };
    }),
  };

  const mockPage = {
    getSize: () => ({ width: 600, height: 800 }),
    drawRectangle: vi.fn(),
    node: {
      get: vi.fn().mockReturnValue([{}]),
    },
  };

  const mockContentStream = {
    getUncompressedContents: () => new TextEncoder().encode('(test@example.com) Tj'),
    setContent: vi.fn(),
  };

  const mockPdfLib = {
    PDFName: { of: (n: string) => ({ name: n }) },
    rgb: (r: number, g: number, b: number) => ({ r, g, b }),
    PDFStream: class {},
    PDFDocument: {
      load: vi.fn().mockImplementation(async () => {
        return {
          getPageCount: () => 1,
          getPage: () => mockPage,
          context: {
            lookup: () => Object.create(mockContentStream),
          },
          save: vi.fn().mockResolvedValue(new Uint8Array([1, 2, 3])),
        };
      }),
    },
  };

  return {
    loadPdfjs: vi.fn().mockResolvedValue(mockPdfjs),
    loadPdfLib: vi.fn().mockResolvedValue(mockPdfLib),
  };
});

vi.mock('@/lib/pdf/processors/redact', () => ({
  redactPDF: vi.fn().mockImplementation(async (_file, areas) => {
    return new Uint8Array([1, 2, 3]);
  }),
}));

describe('SmartDataRedactorProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = {
      name: 'secure.pdf',
      size: 100,
      type: 'application/pdf',
      arrayBuffer: async () => new ArrayBuffer(100),
    } as any;
  });

  it('should instantiate correctly', () => {
    const processor = createSmartDataRedactorProcessor();
    expect(processor).toBeInstanceOf(SmartDataRedactorProcessor);
  });

  it('should redact sensitive details successfully', async () => {
    const result = await redactSmartData([mockFile], {
      patterns: ['email'],
    });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('secure_redacted.pdf');
    expect(result.metadata?.redactionsApplied).toBe(1);
  });
});

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  BookletFoldingSimulatorProcessor,
  createBookletFoldingSimulatorProcessor,
  imposeBookletFolding
} from '@/lib/pdf/processors/booklet-folding-simulator';
import { PDFErrorCode } from '@/types/pdf';

// Mock loader
vi.mock('@/lib/pdf/loader', () => {
  const mockPage = {
    getWidth: () => 300,
    getHeight: () => 400,
    drawPage: vi.fn(),
    node: { Contents: () => ({}) },
  };

  const mockPdfLib = {
    PDFDocument: {
      load: vi.fn().mockImplementation(async () => {
        return {
          getPageCount: () => 5,
          getPageIndices: () => [0, 1, 2, 3, 4],
          getPage: () => mockPage,
        };
      }),
      create: vi.fn().mockImplementation(async () => {
        const pages: any[] = [];
        return {
          addPage: vi.fn().mockImplementation((size) => {
            const newPage = {
              getWidth: () => size ? (Array.isArray(size) ? size[0] : 300) : 300,
              getHeight: () => size ? (Array.isArray(size) ? size[1] : 400) : 400,
              drawPage: vi.fn(),
            };
            pages.push(newPage);
            return newPage;
          }),
          copyPages: vi.fn().mockImplementation(async (srcDoc, indices) => {
            return indices.map(() => mockPage);
          }),
          getPageCount: () => pages.length || 5,
          getPage: vi.fn().mockImplementation((index) => pages[index] || mockPage),
          getPages: () => pages.length ? pages : [mockPage, mockPage, mockPage, mockPage, mockPage, mockPage, mockPage, mockPage],
          embedPage: vi.fn().mockImplementation(async () => ({})),
          save: vi.fn().mockResolvedValue(new Uint8Array([8, 8, 8])),
        };
      }),
    },
  };

  return {
    loadPdfLib: vi.fn().mockResolvedValue(mockPdfLib),
  };
});

describe('BookletFoldingSimulatorProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = {
      name: 'test_book.pdf',
      size: 500,
      type: 'application/pdf',
      arrayBuffer: async () => new ArrayBuffer(500),
    } as any;
  });

  it('should instantiate booklet folding processor correctly', () => {
    const processor = createBookletFoldingSimulatorProcessor();
    expect(processor).toBeInstanceOf(BookletFoldingSimulatorProcessor);
  });

  it('should validate invalid input files', async () => {
    const processor = createBookletFoldingSimulatorProcessor();
    const result = await processor.process({ files: [], options: {} });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
  });

  it('should impose 4-page half-folds successfully', async () => {
    const result = await imposeBookletFolding(mockFile, {
      foldingMode: '4-page-fold',
    });

    expect(result.success).toBe(true);
    expect(result.filename).toBe('test_book_imposed.pdf');
    expect(result.metadata?.pageCount).toBeDefined();
  });

  it('should impose 8-page saddle stitch successfully', async () => {
    const result = await imposeBookletFolding(mockFile, {
      foldingMode: '8-page-saddle',
    });

    expect(result.success).toBe(true);
    expect(result.filename).toBe('test_book_imposed.pdf');
  });
});

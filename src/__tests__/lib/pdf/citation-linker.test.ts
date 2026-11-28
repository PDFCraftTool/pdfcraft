import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  CitationLinkerProcessor, 
  createCitationLinkerProcessor, 
  linkCitations 
} from '@/lib/pdf/processors/citation-linker';
import { PDFErrorCode } from '@/types/pdf';

// Mock loader libraries
vi.mock('@/lib/pdf/loader', () => {
  const mockPdfName = {
    of: (name: string) => ({ name }),
  };

  const mockPdfLib = {
    PDFName: mockPdfName,
    PDFHexString: { fromText: (value: string) => ({ value }) },
    PDFDocument: {
      load: vi.fn().mockImplementation(async () => {
        const mockAnnotsArray = {
          push: vi.fn(),
        };
        const mockPage = {
          node: {
            Annots: () => mockAnnotsArray,
            has: vi.fn().mockReturnValue(true),
            get: vi.fn().mockImplementation((key) => {
              if (key.name === 'Annots') {
                return mockAnnotsArray;
              }
              return null;
            }),
            set: vi.fn(),
          },
          ref: { num: 10, gen: 0 },
        };
        return {
          getPageCount: () => 2,
          getPage: vi.fn().mockImplementation(() => mockPage),
          context: {
            obj: vi.fn().mockImplementation((data) => data),
            register: vi.fn().mockImplementation((item) => item),
          },
          save: vi.fn().mockResolvedValue(new Uint8Array([1, 2, 3])),
        };
      }),
    },
  };

  const mockPdfjs = {
    getDocument: vi.fn().mockImplementation(() => {
      return {
        promise: Promise.resolve({
          numPages: 2,
          getPage: vi.fn().mockImplementation(async (pageNum) => {
            if (pageNum === 1) {
              // Body Page with citation marker
              return {
                getTextContent: async () => ({
                  items: [
                    { str: 'This is a claim [1] that needs backing.', transform: [10, 0, 0, 10, 100, 500], width: 150, height: 10 },
                  ],
                }),
              };
            } else {
              // References section page
              return {
                getTextContent: async () => ({
                  items: [
                    { str: 'References', transform: [14, 0, 0, 14, 50, 700], width: 80, height: 14 },
                    { str: '[1] Scientist Name. Study on stuff. DOI: 10.1234/test.doi.path', transform: [10, 0, 0, 10, 50, 650], width: 250, height: 10 },
                  ],
                }),
              };
            }
          }),
        }),
      };
    }),
  };

  return {
    loadPdfjs: vi.fn().mockResolvedValue(mockPdfjs),
    loadPdfLib: vi.fn().mockResolvedValue(mockPdfLib),
  };
});

describe('CitationLinkerProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = {
      name: 'sample.pdf',
      size: 100,
      type: 'application/pdf',
      arrayBuffer: async () => new ArrayBuffer(100),
    } as any;
  });

  it('should instantiate processor correctly', () => {
    const processor = createCitationLinkerProcessor();
    expect(processor).toBeInstanceOf(CitationLinkerProcessor);
  });

  it('should return error if input files are invalid', async () => {
    const processor = createCitationLinkerProcessor();
    const result = await processor.process({ files: [], options: {} });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
  });

  it('should detect citations and resolve bibliography items with DOIs', async () => {
    const result = await linkCitations(mockFile, { detectDoi: true });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('sample_citations_linked.pdf');

    const metadata = result.metadata as any;
    expect(metadata?.pageCount).toBe(2);
    
    const citations = metadata?.citations;
    expect(citations).toBeDefined();
    expect(citations.length).toBeGreaterThan(0);

    const firstCitation = citations[0];
    expect(firstCitation.marker).toBe('[1]');
    expect(firstCitation.pageNum).toBe(1);
    expect(firstCitation.url).toBe('https://doi.org/10.1234/test.doi.path');
    expect(firstCitation.refText).toContain('Scientist Name. Study on stuff.');
  });
});

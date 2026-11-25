import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  DeepSanitizeProcessor, 
  createDeepSanitizeProcessor, 
  deepSanitizePDF 
} from '@/lib/pdf/processors/deep-sanitize';
import { PDFErrorCode } from '@/types/pdf';

// Mock loader
vi.mock('@/lib/pdf/loader', () => {
  const mockPdfName = {
    of: (name: string) => ({ name, isPDFName: true }),
  };

  const mockPdfString = {
    of: (str: string) => ({ value: str, isPDFString: true }),
  };

  const mockPdfLib = {
    PDFName: mockPdfName,
    PDFString: mockPdfString,
    PDFDocument: {
      load: vi.fn().mockImplementation(async () => {
        // Tracker maps for testing deletion
        const deletedCatalogKeys: string[] = [];
        const deletedPageKeys: string[] = [];
        const infoDictSets: Record<string, any> = {};

        const mockCatalog = {
          has: vi.fn().mockReturnValue(true),
          delete: vi.fn().mockImplementation((pdfName) => {
            deletedCatalogKeys.push(pdfName.name);
            return true;
          }),
        };

        const mockInfoDict = {
          set: vi.fn().mockImplementation((pdfName, pdfString) => {
            infoDictSets[pdfName.name] = pdfString.value;
          }),
        };

        const mockResources = {
          has: vi.fn().mockReturnValue(true),
          delete: vi.fn(),
        };

        const mockPage = {
          node: {
            Resources: () => mockResources,
            has: vi.fn().mockReturnValue(true),
            get: vi.fn().mockImplementation((pdfName) => {
              if (pdfName.name === 'Resources') {
                return mockResources;
              }
              return null;
            }),
            delete: vi.fn().mockImplementation((pdfName) => {
              deletedPageKeys.push(pdfName.name);
            }),
          },
        };

        return {
          getPageCount: () => 2,
          catalog: mockCatalog,
          getInfoDict: () => mockInfoDict,
          getPage: vi.fn().mockImplementation(() => mockPage),
          save: vi.fn().mockResolvedValue(new Uint8Array([9, 9, 9])),
          // Custom hooks for assertions
          _deletedCatalogKeys: deletedCatalogKeys,
          _deletedPageKeys: deletedPageKeys,
          _infoDictSets: infoDictSets,
        };
      }),
    },
  };

  return {
    loadPdfLib: vi.fn().mockResolvedValue(mockPdfLib),
  };
});

describe('DeepSanitizeProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = {
      name: 'sample.pdf',
      size: 100,
      type: 'application/pdf',
      arrayBuffer: async () => new ArrayBuffer(100),
    } as any;
  });

  it('should instantiate deep sanitizer correctly', () => {
    const processor = createDeepSanitizeProcessor();
    expect(processor).toBeInstanceOf(DeepSanitizeProcessor);
  });

  it('should validate invalid input files', async () => {
    const processor = createDeepSanitizeProcessor();
    const result = await processor.process({ files: [], options: {} });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
  });

  it('should clean metadata, pieceInfo, OCG properties, and annotations', async () => {
    const result = await deepSanitizePDF(mockFile, {
      stripMetadata: true,
      stripPieceInfo: true,
      stripOcgWatermarks: true,
      stripAnnotations: true,
    });

    expect(result.success).toBe(true);
    expect(result.filename).toBe('sample_sanitized.pdf');

    const metadata = result.metadata;
    expect(metadata?.pageCount).toBe(2);
    
    const findings = metadata?.findings;
    expect(findings).toBeDefined();
    
    // Check if it successfully deleted Metadata, PieceInfo, StructTreeRoot, OCProperties
    expect(findings).toContain('XMP Metadata Stream (contains creator details, modification logs)');
    expect(findings).toContain('PieceInfo cache (contains proprietary editor histories)');
    expect(findings).toContain('StructTreeRoot (logical structure tree used in tracking)');
    expect(findings).toContain('OCProperties layers (often host invisible watermarks)');
    expect(findings).toContain('Interactive annotations & links');
  });
});

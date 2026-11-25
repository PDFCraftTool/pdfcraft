import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  DeadLinkDebuggerProcessor,
  createDeadLinkDebuggerProcessor,
  debugDeadLinks
} from '@/lib/pdf/processors/dead-link-debugger';
import { PDFErrorCode } from '@/types/pdf';

vi.mock('@/lib/pdf/loader', () => {
  const mockAnnotRef = { id: 'annot-ref' };

  class MockPDFArray {
    size() { return 1; }
    get() { return mockAnnotRef; }
  }

  class MockPDFDict {
    constructor(public getFn: (n: any) => any) {}
    get(n: any) {
      return this.getFn(n);
    }
    Annots() { return this.get(getPDFName('Annots')); }
    set = vi.fn();
  }

  class MockPDFString {
    constructor(public value: string) {}
    decodeText() { return this.value; }
    static of(s: string) { return new MockPDFString(s); }
  }

  const pdfNameCache: Record<string, { name: string }> = {};
  const getPDFName = (n: string) => {
    if (!pdfNameCache[n]) {
      pdfNameCache[n] = { name: n } as any;
    }
    return pdfNameCache[n];
  };

  const mockAction = new MockPDFDict((n: any) => {
    const name = typeof n === 'string' ? n : (n && n.name);
    if (name === 'S') return getPDFName('URI');
    if (name === 'URI') return {}; // returns a ref for lookup
    return null;
  });

  const mockAnnot = new MockPDFDict((n: any) => {
    const name = typeof n === 'string' ? n : (n && n.name);
    if (name === 'Subtype') return getPDFName('Link');
    if (name === 'A') return mockAction;
    return null;
  });

  const mockAnnotsArray = new MockPDFArray();

  const mockPage = {
    node: new MockPDFDict((n: any) => {
      const name = typeof n === 'string' ? n : (n && n.name);
      if (name === 'Annots') return mockAnnotsArray;
      return null;
    }),
  };

  const mockPdfLib = {
    PDFArray: MockPDFArray,
    PDFDict: MockPDFDict,
    PDFString: MockPDFString,
    PDFName: { of: getPDFName },
    PDFHexString: class {},
    PDFDocument: {
      load: vi.fn().mockImplementation(async () => {
        return {
          getPageCount: () => 1,
          getPages: () => [mockPage],
          context: {
            lookup: (ref: any) => {
              if (ref === mockAction) return mockAction;
              if (ref === mockAnnotRef) {
                return mockAnnot;
              }
              if (ref === mockAction.get('URI')) {
                return new MockPDFString('http://brokenlink.com');
              }
              return new MockPDFString('http://brokenlink.com');
            },
          },
          save: vi.fn().mockResolvedValue(new Uint8Array([1, 2, 3])),
        };
      }),
    },
  };

  return {
    loadPdfLib: vi.fn().mockResolvedValue(mockPdfLib),
  };
});

describe('DeadLinkDebuggerProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = {
      name: 'broken.pdf',
      size: 100,
      type: 'application/pdf',
      arrayBuffer: async () => new ArrayBuffer(100),
    } as any;
  });

  it('should instantiate correctly', () => {
    const processor = createDeadLinkDebuggerProcessor();
    expect(processor).toBeInstanceOf(DeadLinkDebuggerProcessor);
  });

  it('should scan and replace dead links successfully', async () => {
    const result = await debugDeadLinks([mockFile], {
      replacements: {
        'http://brokenlink.com': 'http://fixedlink.com',
      },
    });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('broken_links_fixed.pdf');
    expect(result.metadata?.linksScanned).toBe(1);
    expect(result.metadata?.linksReplaced).toBe(1);
  });
});

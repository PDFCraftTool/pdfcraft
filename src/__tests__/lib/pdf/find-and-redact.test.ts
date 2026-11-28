import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  parseSearchTerms,
  searchTextInPDF,
  applyFindAndRedact,
  findAndRedact,
  type TextMatch,
} from '@/lib/pdf/processors/find-and-redact';

vi.mock('@/lib/pdf/loader', () => {
  const mockPage = {
    getViewport: vi.fn().mockReturnValue({ width: 612, height: 792 }),
    getTextContent: vi.fn().mockResolvedValue({
      items: [
        {
          str: 'Confidential Account #12345 in this document',
          transform: [12, 0, 0, 12, 72, 700],
          width: 250,
          height: 12,
        },
      ],
    }),
  };

  const mockPdfjsDoc = {
    numPages: 1,
    getPage: vi.fn().mockResolvedValue(mockPage),
  };

  return {
    loadPdfjs: vi.fn().mockResolvedValue({
      getDocument: vi.fn().mockReturnValue({
        promise: Promise.resolve(mockPdfjsDoc),
      }),
    }),
  };
});

vi.mock('@/lib/pdf/processors/redact', () => ({
  redactPDF: vi.fn().mockImplementation(async (_file, areas) => {
    return new Uint8Array([37, 80, 68, 70, 45, 49, 46, 55]); // %PDF-1.7
  }),
}));

describe('Find and Redact Processor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = {
      name: 'test.pdf',
      size: 100,
      type: 'application/pdf',
      arrayBuffer: async () => new ArrayBuffer(100),
    } as unknown as File;
  });

  describe('parseSearchTerms', () => {
    it('splits search terms by commas and newlines', () => {
      const terms = parseSearchTerms('Account, Password\nSecret，Confidential');
      expect(terms).toEqual(['Account', 'Password', 'Secret', 'Confidential']);
    });

    it('filters out empty terms and whitespace', () => {
      const terms = parseSearchTerms(' ,  , test , \n\n');
      expect(terms).toEqual(['test']);
    });
  });

  describe('searchTextInPDF', () => {
    it('finds search terms and calculates coordinates', async () => {
      const result = await searchTextInPDF(mockFile, {
        searchTerms: ['Account'],
        caseSensitive: false,
        useRegex: false,
        wholeWord: false,
      });

      expect(result.success).toBe(true);
      expect(result.matches.length).toBeGreaterThan(0);
      expect(result.matches[0].text).toBe('Account');
      expect(result.matches[0].page).toBe(1);
      expect(result.matches[0].selected).toBe(true);
    });

    it('returns error when search pattern is invalid regex', async () => {
      const result = await searchTextInPDF(mockFile, {
        searchTerms: ['[invalid regex'],
        caseSensitive: false,
        useRegex: true,
        wholeWord: false,
      });

      expect(result.success).toBe(false);
      expect(result.error).toContain('Invalid search pattern');
    });
  });

  describe('applyFindAndRedact', () => {
    it('returns error when no matches are selected', async () => {
      const result = await applyFindAndRedact(mockFile, [], {});
      expect(result.success).toBe(false);
      expect(result.error).toContain('No matches selected');
    });

    it('transforms matches to physical redactions and executes true irreversible destruction', async () => {
      const matches: TextMatch[] = [
        {
          id: 'm1',
          page: 1,
          text: 'Account',
          x: 72,
          y: 700,
          width: 50,
          height: 12,
          selected: true,
        },
      ];

      const result = await applyFindAndRedact(
        mockFile,
        matches,
        {
          color: { r: 0, g: 0, b: 0 },
          addBorder: true,
          replacementText: '[REDACTED]',
        }
      );

      expect(result.success).toBe(true);
      expect(result.redactedCount).toBe(1);
      expect(result.result).toBeInstanceOf(Blob);
    });
  });

  describe('findAndRedact', () => {
    it('executes search and true redaction in one workflow', async () => {
      const result = await findAndRedact(mockFile, {
        searchTerms: ['Account'],
        caseSensitive: false,
        useRegex: false,
        wholeWord: false,
        replacementText: 'XXXX',
      });

      expect(result.success).toBe(true);
      expect(result.redactedCount).toBe(1);
      expect(result.result).toBeInstanceOf(Blob);
    });
  });
});

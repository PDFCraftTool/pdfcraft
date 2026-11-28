/**
 * Unit Tests for PDF Page Labels Processor
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  PageLabelsProcessor,
  createPageLabelsProcessor,
  addPageLabels,
} from '@/lib/pdf/processors/page-labels';
import { PDFDocument, PDFName, PDFDict, PDFArray, PDFNumber, PDFHexString, PDFString } from 'pdf-lib';
import { PDFErrorCode } from '@/types/pdf';

// Helper to create a real minimal PDF using pdf-lib
async function createRealPDFFile(name: string, pageCount: number = 1): Promise<File> {
  const { PDFDocument } = await import('pdf-lib');
  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < pageCount; i++) {
    pdfDoc.addPage([612, 792]); // Letter size
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const file = new File([blob], name, { type: 'application/pdf' }) as any;
  file.arrayBuffer = async () => pdfBytes.buffer.slice(0) as ArrayBuffer;
  return file as File;
}

describe('PageLabelsProcessor', () => {
  let processor: PageLabelsProcessor;

  beforeEach(() => {
    processor = createPageLabelsProcessor();
  });

  describe('process - input validation', () => {
    it('should return error when no files are provided', async () => {
      const result = await processor.process({
        files: [],
        options: { rules: [{ pageRange: '1-5', style: 'D' }] },
      });

      expect(result.success).toBe(false);
      expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
      expect(result.error?.message).toContain('1 PDF file');
    });

    it('should return error when multiple files are provided', async () => {
      const file1 = await createRealPDFFile('doc1.pdf', 3);
      const file2 = await createRealPDFFile('doc2.pdf', 3);

      const result = await processor.process({
        files: [file1, file2],
        options: { rules: [{ pageRange: '1-5', style: 'D' }] },
      });

      expect(result.success).toBe(false);
      expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
    });

    it('should return error when no labeling rules are provided', async () => {
      const file = await createRealPDFFile('doc.pdf', 5);

      const result = await processor.process({
        files: [file],
        options: { rules: [] },
      });

      expect(result.success).toBe(false);
      expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
      expect(result.error?.message).toContain('one page labeling rule');
    });
  });

  describe('process - labeling functionality', () => {
    it('saves labels for an oversized range without traversing nonexistent pages', async () => {
      const file = await createRealPDFFile('oversized.pdf', 4);
      const result = await addPageLabels(file, {
        rules: [{ pageRange: '1-100000000000000000000', style: 'R', prefix: 'Section-', startValue: 5 }],
      });
      expect(result.success).toBe(true);
      const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(result.result as Blob);
      });
      const saved = await PDFDocument.load(bytes);
      expect(saved.getPageCount()).toBe(4);
      const labels = saved.catalog.lookup(PDFName.of('PageLabels'), PDFDict);
      const nums = labels.lookup(PDFName.of('Nums'), PDFArray);
      expect(nums.size()).toBe(2);
      expect(nums.lookup(0, PDFNumber).asNumber()).toBe(0);
      const first = nums.lookup(1, PDFDict);
      expect(first.lookup(PDFName.of('S'), PDFName).asString()).toBe('/R');
      expect(first.lookup(PDFName.of('P'), PDFHexString).decodeText()).toBe('Section-');
      expect(first.lookup(PDFName.of('St'), PDFNumber).asNumber()).toBe(5);
    });

    it('should successfully inject decimal page label rules on all pages', async () => {
      const file = await createRealPDFFile('book.pdf', 5);
      const result = await addPageLabels(file, {
        rules: [
          {
            pageRange: '', // empty means all
            style: 'D',
            prefix: 'Page-',
            startValue: 1,
          },
        ],
      });

      expect(result.success).toBe(true);
      expect(result.result).toBeInstanceOf(Blob);
      expect(result.filename).toBe('book_labeled.pdf');
    });

    it.each(['章节-', 'Ενότητα-', 'שלום-', '📄-', 'Page-'])('preserves prefix %s after saving and reopening', async (prefix) => {
      const file = await createRealPDFFile('labels.pdf', 4);
      const result = await addPageLabels(file, {
        rules: [{ pageRange: '1,3', style: 'D', prefix, startValue: 7 }],
      });
      expect(result.success).toBe(true);
      const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(result.result as Blob);
      });
      const saved = await PDFDocument.load(bytes);
      const labels = saved.catalog.lookup(PDFName.of('PageLabels'), PDFDict);
      const nums = labels.lookup(PDFName.of('Nums'), PDFArray);
      const first = nums.lookup(1, PDFDict);
      const resumed = nums.lookup(5, PDFDict);
      for (const dict of [first, resumed]) {
        const encoded = dict.get(PDFName.of('P'));
        expect(encoded instanceof PDFHexString || encoded instanceof PDFString).toBe(true);
        expect((encoded as PDFHexString | PDFString).decodeText()).toBe(prefix);
      }
      expect(first.lookup(PDFName.of('St'), PDFNumber).asNumber()).toBe(7);
      expect(resumed.lookup(PDFName.of('St'), PDFNumber).asNumber()).toBe(8);
    });

    it('should successfully inject complex disjoint roman and decimal rules', async () => {
      const file = await createRealPDFFile('thesis.pdf', 10);
      const result = await addPageLabels(file, {
        rules: [
          {
            pageRange: '1-3', // Front matter
            style: 'r',       // Lowercase Roman
            startValue: 1,
          },
          {
            pageRange: '4-10', // Main body
            style: 'D',        // Decimal
            prefix: 'Ch1-',
            startValue: 1,
          },
        ],
      });

      expect(result.success).toBe(true);
      expect(result.result).toBeInstanceOf(Blob);
    });
  });

  describe('factory helper', () => {
    it('should create independent PageLabelsProcessor instances', () => {
      const p1 = createPageLabelsProcessor();
      const p2 = createPageLabelsProcessor();
      expect(p1).toBeInstanceOf(PageLabelsProcessor);
      expect(p1).not.toBe(p2);
    });
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  PAGE_SIZES,
  fixPageSize,
} from '@/lib/pdf/processors/fix-page-size';
import { analyzePageDimensions } from '@/lib/pdf/processors/page-dimensions';

async function createRealPDFFile(
  name: string,
  width: number = 612,
  height: number = 792
): Promise<File> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([width, height]);
  page.drawText('Dummy contents for testing fix page size', { x: 50, y: 50, size: 10 });
  const pdfBytes = await pdfDoc.save();
  const arrayBuffer = pdfBytes.buffer.slice(
    pdfBytes.byteOffset,
    pdfBytes.byteOffset + pdfBytes.byteLength
  ) as ArrayBuffer;
  const file = new File([arrayBuffer], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', {
    value: async () => arrayBuffer,
    writable: false,
  });
  return file;
}

async function loadOutputPageSize(result: Blob): Promise<{ width: number; height: number }> {
  // jsdom's Blob lacks arrayBuffer(), so read the output via FileReader.
  const outputBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(result);
  });
  const outputDoc = await PDFDocument.load(new Uint8Array(outputBuffer));
  return outputDoc.getPage(0).getSize();
}

describe('FixPageSizeProcessor #10 envelope', () => {
  let mockFile: File;

  beforeEach(async () => {
    mockFile = await createRealPDFFile('letter.pdf');
  });

  it('offers the #10 envelope preset at 4.125 × 9.5 in', () => {
    expect(PAGE_SIZES['envelope-10'].width).toBe(297);
    expect(PAGE_SIZES['envelope-10'].height).toBe(684);
    expect(PAGE_SIZES['envelope-10'].label).toContain('#10 Envelope');
  });

  it('resizes pages to #10 envelope dimensions', async () => {
    const result = await fixPageSize(mockFile, { sizePreset: 'envelope-10' });
    expect(result.success).toBe(true);

    const { width, height } = await loadOutputPageSize(result.result as Blob);
    expect(width).toBeCloseTo(297);
    expect(height).toBeCloseTo(684);
  });

  it('resizes pages to landscape #10 envelope dimensions for envelope feeding', async () => {
    const result = await fixPageSize(mockFile, {
      sizePreset: 'envelope-10',
      orientation: 'landscape',
    });
    expect(result.success).toBe(true);

    const { width, height } = await loadOutputPageSize(result.result as Blob);
    expect(width).toBeCloseTo(684);
    expect(height).toBeCloseTo(297);
  });

  it('recognizes a portrait envelope-sized page in page dimensions', async () => {
    const envelopeFile = await createRealPDFFile('envelope.pdf', 297, 684);
    const result = await analyzePageDimensions(envelopeFile);
    expect(result.success).toBe(true);
    const metadata = result.metadata as { result: { pages: { standardSize: string | null }[] } };
    expect(metadata.result.pages[0].standardSize).toBe('#10 Envelope');
  });

  it('recognizes a landscape envelope-sized page in page dimensions', async () => {
    // #10 envelopes are fed landscape: 9.5 in wide × 4.125 in high.
    const envelopeFile = await createRealPDFFile('envelope.pdf', 684, 297);
    const result = await analyzePageDimensions(envelopeFile);
    expect(result.success).toBe(true);
    const metadata = result.metadata as { result: { pages: { standardSize: string | null }[] } };
    expect(metadata.result.pages[0].standardSize).toBe('#10 Envelope (Landscape)');
  });
});

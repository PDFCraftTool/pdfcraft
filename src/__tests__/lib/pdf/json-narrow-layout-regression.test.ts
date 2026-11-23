import { describe, it, expect } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { JSONToPDFProcessor } from '@/lib/pdf/processors/json-to-pdf';

async function outputBytes(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

describe('JSON layout width', () => {
  const file = { name: 'data.json', text: async () => '{"key":"a long string that needs wrapping"}' } as File;
  it('rejects margins that leave less than a character of usable width', async () => {
    const result = await new JSONToPDFProcessor().process({ files: [file], options: {
      showLineNumbers: false, margin: { left: 295, right: 295, top: 72, bottom: 72 },
    } });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe('PROCESSING_FAILED');
    expect(result.error?.details).toContain('margins');
  });
  it('can still wrap into a narrow but usable column', async () => {
    const result = await new JSONToPDFProcessor().process({ files: [file], options: {
      showLineNumbers: false, margin: { left: 240, right: 240, top: 72, bottom: 72 },
    } });
    expect(result.success).toBe(true);
    expect((await PDFDocument.load(await outputBytes(result.result as Blob))).getPageCount()).toBeGreaterThan(0);
  });
});

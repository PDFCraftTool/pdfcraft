import { describe, it, expect } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { SignProcessor } from '@/lib/pdf/processors/sign';

async function inputFile(pdf: PDFDocument): Promise<File> {
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes as BlobPart], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}
async function outputBytes(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

describe('signature image failure', () => {
  it('returns an error instead of a signed output for a corrupt PNG', async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const result = await new SignProcessor().process({ files: [await inputFile(pdf)], options: { signatures: [{ type: 'image', data: 'data:image/png;base64,iVBORw==', pageNumber: 1, x: 10, y: 10 }] } });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe('PROCESSING_FAILED');
    expect(result.result).toBeUndefined();
  });
  it('still exports a valid typed signature', async () => {
    const pdf = await PDFDocument.create();
    pdf.addPage();
    const result = await new SignProcessor().process({ files: [await inputFile(pdf)], options: { signatures: [{ type: 'type', data: 'Ada', pageNumber: 1, x: 10, y: 10 }] } });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    expect(saved.getPageCount()).toBe(1);
  });
});

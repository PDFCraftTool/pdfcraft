import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { addPageNumbers } from '@/lib/pdf/processors/page-numbers';
import { addHeaderFooter } from '@/lib/pdf/processors/header-footer';
import { addWatermark } from '@/lib/pdf/processors/watermark';
import { addBackgroundColor } from '@/lib/pdf/processors/background-color';
import { removeAnnotations } from '@/lib/pdf/processors/remove-annotations';
import { CropProcessor } from '@/lib/pdf/processors/crop';

async function upperCaseFile(): Promise<File> {
  const pdf = await PDFDocument.create();
  pdf.addPage([200, 300]).drawText(' ', { x: 0, y: 0 });
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes as BlobPart], 'SCAN.PDF', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

// Scanners and Windows often produce upper-case extensions; the suffix must
// still be added, otherwise the result carries the same name as the source.
describe('output file names for an upper-case .PDF source', () => {
  it.each([
    ['page numbers', async (file: File) => addPageNumbers(file, {}), 'SCAN_numbered.pdf'],
    ['header and footer', async (file: File) => addHeaderFooter(file, { header: { left: 'x' } }), 'SCAN_headerfooter.pdf'],
    ['watermark', async (file: File) => addWatermark(file, { type: 'text', text: 'x' }), 'SCAN_watermarked.pdf'],
    ['background colour', async (file: File) => addBackgroundColor(file, { color: { r: 1, g: 1, b: 0 } }), 'SCAN_background.pdf'],
    ['remove annotations', async (file: File) => removeAnnotations(file, {} as never), 'SCAN_no_annotations.pdf'],
    ['crop', async (file: File) => new CropProcessor().process({ files: [file], options: { cropData: { 1: { x: 0, y: 0, width: 1, height: 1 } } } }), 'SCAN_cropped.pdf'],
  ])('%s keeps the base name and adds the suffix', async (_name, run, expected) => {
    const result = await run(await upperCaseFile());
    expect(result.success).toBe(true);
    expect(result.filename).toBe(expected);
  });
});

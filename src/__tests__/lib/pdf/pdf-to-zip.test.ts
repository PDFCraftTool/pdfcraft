import { describe, expect, it } from 'vitest';
import JSZip from 'jszip';
import { PDFDocument } from 'pdf-lib';
import { packagePDFsToZip } from '@/lib/pdf/processors/pdf-to-zip';

async function pdfFile(name: string, pages: number): Promise<File> {
  const pdf = await PDFDocument.create();
  for (let i = 0; i < pages; i++) pdf.addPage();
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}

async function archive(files: File[]) {
  const output = await packagePDFsToZip(files, { compressionLevel: 0 });
  expect(output.success).toBe(true);
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(output.result as Blob);
  });
  return { zip: await JSZip.loadAsync(bytes), output };
}

describe('PDF to ZIP preserves every selected document', () => {
  it('retains different PDFs with the same name and reports their archive names', async () => {
    const files = await Promise.all([pdfFile('report.pdf', 1), pdfFile('report.pdf', 2)]);
    const { zip, output } = await archive(files);
    expect(Object.keys(zip.files)).toEqual(['report.pdf', 'report (2).pdf']);
    for (const [index, name] of ['report.pdf', 'report (2).pdf'].entries()) {
      const bytes = await zip.file(name)!.async('uint8array');
      expect(bytes).toEqual(new Uint8Array(await files[index].arrayBuffer()));
      expect((await PDFDocument.load(bytes)).getPageCount()).toBe(index + 1);
    }
    expect(output.metadata?.filenames).toEqual(['report.pdf', 'report (2).pdf']);
    expect(output.metadata?.fileCount).toBe(2);
  });

  it('does not take a numbered name belonging to another input', async () => {
    const files = await Promise.all(['report.pdf', 'report.pdf', 'report (2).pdf', 'report.pdf'].map((name, i) => pdfFile(name, i + 1)));
    const { zip, output } = await archive(files);
    expect(output.metadata?.filenames).toEqual(['report.pdf', 'report (3).pdf', 'report (2).pdf', 'report (4).pdf']);
    expect(Object.keys(zip.files)).toHaveLength(4);
    expect((await PDFDocument.load(await zip.file('report (2).pdf')!.async('uint8array'))).getPageCount()).toBe(3);
  });

  it('retains Unicode and extensionless names when allocating duplicates', async () => {
    const files = await Promise.all(['报告.pdf', '报告.pdf', 'README', 'README'].map(name => pdfFile(name, 1)));
    const { zip } = await archive(files);
    expect(Object.keys(zip.files)).toEqual(['报告.pdf', '报告 (2).pdf', 'README', 'README (2)']);
  });

  it('keeps distinct filenames unchanged', async () => {
    const { zip } = await archive(await Promise.all([pdfFile('first.pdf', 1), pdfFile('second.PDF', 1)]));
    expect(Object.keys(zip.files)).toEqual(['first.pdf', 'second.PDF']);
  });
});

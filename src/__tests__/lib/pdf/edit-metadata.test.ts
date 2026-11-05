import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { editPDFMetadata } from '@/lib/pdf/processors/edit-metadata';

const originalDate = new Date('2001-02-03T04:05:06Z');
async function inputFile() {
  const pdf = await PDFDocument.create({ updateMetadata: false });
  pdf.addPage();
  pdf.setTitle('Original title');
  pdf.setAuthor('Original author');
  pdf.setCreator('Original creator');
  pdf.setProducer('Original producer');
  pdf.setCreationDate(originalDate);
  pdf.setModificationDate(originalDate);
  const bytes = new Uint8Array(await pdf.save());
  const file = new File([bytes], 'metadata.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });
  return file;
}
async function reopen(blob: Blob) {
  const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
  return PDFDocument.load(bytes, { updateMetadata: false });
}

describe('metadata editing preserves unselected fields', () => {
  it('honors the disabled automatic modification date when changing a title', async () => {
    const result = await editPDFMetadata(await inputFile(), { title: 'Updated title' }, { updateModificationDate: false });
    expect(result.success).toBe(true);
    const pdf = await reopen(result.result as Blob);
    expect(pdf.getTitle()).toBe('Updated title');
    expect(pdf.getModificationDate()).toEqual(originalDate);
    expect(pdf.getCreationDate()).toEqual(originalDate);
    expect(pdf.getProducer()).toBe('Original producer');
    expect(pdf.getCreator()).toBe('Original creator');
    expect(pdf.getAuthor()).toBe('Original author');
  });

  it('updates the modification date by default without replacing the producer', async () => {
    const before = Math.floor(Date.now() / 1000);
    const result = await editPDFMetadata(await inputFile(), { title: 'Updated title' });
    expect(result.success).toBe(true);
    const pdf = await reopen(result.result as Blob);
    expect(Math.floor(pdf.getModificationDate()!.getTime() / 1000)).toBeGreaterThanOrEqual(before);
    expect(pdf.getProducer()).toBe('Original producer');
    expect(pdf.getCreationDate()).toEqual(originalDate);
  });

  it('lets explicit producer and modification date values override the defaults', async () => {
    const date = new Date('2010-01-02T03:04:05Z');
    const result = await editPDFMetadata(await inputFile(), { producer: 'Chosen producer', modificationDate: date }, { updateModificationDate: false });
    expect(result.success).toBe(true);
    const pdf = await reopen(result.result as Blob);
    expect(pdf.getProducer()).toBe('Chosen producer');
    expect(pdf.getModificationDate()).toEqual(date);
    expect(pdf.getTitle()).toBe('Original title');
  });
});

import { describe, it, expect } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  FormFillerProcessor,
  createFormFillerProcessor,
  fillForm,
  getFormFields,
} from '@/lib/pdf/processors/form-filler';
import { PDFErrorCode } from '@/types/pdf';

function bytesToFile(pdfBytes: Uint8Array, name = 'form.pdf'): File {
  const arrayBuffer = pdfBytes.buffer.slice(
    pdfBytes.byteOffset,
    pdfBytes.byteOffset + pdfBytes.byteLength
  ) as ArrayBuffer;
  const file = new File([arrayBuffer], name, { type: 'application/pdf' });
  if (typeof file.arrayBuffer !== 'function') {
    Object.defineProperty(file, 'arrayBuffer', {
      value: async () => arrayBuffer,
      writable: false,
    });
  }
  return file;
}

async function blobToUint8Array(blob: Blob): Promise<Uint8Array> {
  if (typeof blob.arrayBuffer === 'function') {
    const buf = await blob.arrayBuffer();
    return new Uint8Array(buf);
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}

async function createPrefilledAcroFormFile(): Promise<File> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const form = pdfDoc.getForm();

  const textField = form.createTextField('fullName');
  textField.setText('Ada Lovelace');
  textField.addToPage(page, { x: 50, y: 700, width: 200, height: 30 });

  const checkBox = form.createCheckBox('subscribe');
  checkBox.check();
  checkBox.addToPage(page, { x: 50, y: 650, width: 20, height: 20 });

  const dropdown = form.createDropdown('role');
  dropdown.setOptions(['Engineer', 'Designer', 'Manager']);
  dropdown.select('Designer');
  dropdown.addToPage(page, { x: 50, y: 600, width: 200, height: 30 });

  const radioGroup = form.createRadioGroup('plan');
  radioGroup.addOptionToPage('Free', page, { x: 50, y: 550, width: 20, height: 20 });
  radioGroup.addOptionToPage('Pro', page, { x: 120, y: 550, width: 20, height: 20 });
  radioGroup.select('Pro');

  const pdfBytes = await pdfDoc.save();
  return bytesToFile(pdfBytes, 'prefilled.pdf');
}

describe('FormFillerProcessor & getFormFields', () => {
  it('instantiates FormFillerProcessor via factory', () => {
    const processor = createFormFillerProcessor();
    expect(processor).toBeInstanceOf(FormFillerProcessor);
  });

  it('extracts existing AcroForm field values, types, and options via getFormFields (#203, #170, #171)', async () => {
    const file = await createPrefilledAcroFormFile();
    const fields = await getFormFields(file);

    expect(fields).toEqual([
      expect.objectContaining({
        name: 'fullName',
        type: 'text',
        value: 'Ada Lovelace',
      }),
      expect.objectContaining({
        name: 'subscribe',
        type: 'checkbox',
        value: true,
      }),
      expect.objectContaining({
        name: 'role',
        type: 'dropdown',
        value: 'Designer',
        options: ['Engineer', 'Designer', 'Manager'],
      }),
      expect.objectContaining({
        name: 'plan',
        type: 'radio',
        value: 'Pro',
        options: ['Free', 'Pro'],
      }),
    ]);
  });

  it('returns an empty array from getFormFields when PDF has no form fields', async () => {
    const pdfDoc = await PDFDocument.create();
    pdfDoc.addPage([600, 800]);
    const file = bytesToFile(await pdfDoc.save(), 'blank.pdf');

    const fields = await getFormFields(file);
    expect(fields).toEqual([]);
  });

  it('round-trips updated values and properly unchecks checkboxes when passed false or "false"', async () => {
    const file = await createPrefilledAcroFormFile();

    const output = await fillForm(file, {
      fields: [
        { fieldName: 'fullName', value: 'Grace Hopper' },
        { fieldName: 'subscribe', value: 'false' },
        { fieldName: 'role', value: 'Manager' },
        { fieldName: 'plan', value: 'Free' },
      ],
      flatten: false,
    });

    expect(output.success).toBe(true);
    expect(output.result).toBeInstanceOf(Blob);

    const savedBytes = await blobToUint8Array(output.result as Blob);
    const savedFile = bytesToFile(savedBytes, 'prefilled_filled.pdf');
    const updatedFields = await getFormFields(savedFile);

    expect(updatedFields).toEqual([
      expect.objectContaining({ name: 'fullName', value: 'Grace Hopper' }),
      expect.objectContaining({ name: 'subscribe', value: false }),
      expect.objectContaining({ name: 'role', value: 'Manager' }),
      expect.objectContaining({ name: 'plan', value: 'Free' }),
    ]);
  });

  it('returns INVALID_OPTIONS when file count is not 1 or PDF has no form fields', async () => {
    const processor = createFormFillerProcessor();
    const emptyRes = await processor.process({ files: [], options: {} });
    expect(emptyRes.success).toBe(false);
    expect(emptyRes.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);

    const pdfDoc = await PDFDocument.create();
    pdfDoc.addPage([400, 400]);
    const noFormFile = bytesToFile(await pdfDoc.save(), 'no-form.pdf');

    const noFieldsRes = await fillForm(noFormFile, { fields: [] });
    expect(noFieldsRes.success).toBe(false);
    expect(noFieldsRes.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
  });
});

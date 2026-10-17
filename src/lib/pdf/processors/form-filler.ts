/**
 * PDF Form Filler Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export type FormFieldType =
  | 'text'
  | 'checkbox'
  | 'dropdown'
  | 'radio'
  | 'optionlist'
  | 'button'
  | 'signature'
  | 'unknown';

export interface FormFieldInfo {
  name: string;
  type: FormFieldType;
  value: string | boolean;
  options?: string[];
  readOnly?: boolean;
  required?: boolean;
  multiline?: boolean;
}

export interface FormFieldValue {
  fieldName: string;
  value: string | boolean;
}

export interface FormFillerOptions {
  fields: FormFieldValue[];
  flatten?: boolean;
}

function isCheckboxCheckedValue(value: string | boolean): boolean {
  if (typeof value === 'boolean') return value;
  return ['true', '1', 'yes', 'on'].includes(String(value).trim().toLowerCase());
}

export class FormFillerProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<FormFillerOptions>;
    const formOptions: FormFillerOptions = {
      fields: inputOptions.fields ?? [],
      flatten: inputOptions.flatten ?? false,
    };

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      this.updateProgress(30, 'Getting form fields...');
      let form;
      try {
        form = pdf.getForm();
      } catch {
        return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'This PDF does not contain any form fields.');
      }

      try {
        if (typeof form.hasXFA === 'function' && form.hasXFA()) {
          form.deleteXFA();
        }
      } catch {
        // Ignore XFA cleanup errors
      }

      const fields = form.getFields();

      if (fields.length === 0) {
        return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'This PDF does not contain any form fields.');
      }

      this.updateProgress(40, 'Filling form fields...');

      let filledCount = 0;
      for (const fieldValue of formOptions.fields) {
        try {
          const field =
            typeof form.getFieldMaybe === 'function'
              ? form.getFieldMaybe(fieldValue.fieldName)
              : form.getField(fieldValue.fieldName);

          if (!field) continue;

          const ctorName = field.constructor?.name ?? '';

          if (
            (pdfLib.PDFTextField && field instanceof pdfLib.PDFTextField) ||
            ctorName === 'PDFTextField'
          ) {
            const textField = form.getTextField(fieldValue.fieldName);
            try {
              if (typeof textField.isRichFormatted === 'function' && textField.isRichFormatted()) {
                textField.disableRichFormatting();
              }
            } catch {
              // Ignore rich text flag reset errors
            }
            const text =
              fieldValue.value === undefined || fieldValue.value === null
                ? ''
                : String(fieldValue.value);
            textField.setText(text);
            filledCount++;
          } else if (
            (pdfLib.PDFCheckBox && field instanceof pdfLib.PDFCheckBox) ||
            ctorName === 'PDFCheckBox'
          ) {
            const checkBox = form.getCheckBox(fieldValue.fieldName);
            if (isCheckboxCheckedValue(fieldValue.value)) {
              checkBox.check();
            } else {
              checkBox.uncheck();
            }
            filledCount++;
          } else if (
            (pdfLib.PDFDropdown && field instanceof pdfLib.PDFDropdown) ||
            ctorName === 'PDFDropdown'
          ) {
            const dropdown = form.getDropdown(fieldValue.fieldName);
            const strVal = String(fieldValue.value ?? '');
            if (strVal === '' && typeof dropdown.clear === 'function') {
              dropdown.clear();
            } else {
              dropdown.select(strVal);
            }
            filledCount++;
          } else if (
            (pdfLib.PDFRadioGroup && field instanceof pdfLib.PDFRadioGroup) ||
            ctorName === 'PDFRadioGroup'
          ) {
            const radioGroup = form.getRadioGroup(fieldValue.fieldName);
            const strVal = String(fieldValue.value ?? '');
            if (strVal === '' && typeof radioGroup.clear === 'function') {
              radioGroup.clear();
            } else if (strVal !== '') {
              radioGroup.select(strVal);
            }
            filledCount++;
          } else if (
            (pdfLib.PDFOptionList && field instanceof pdfLib.PDFOptionList) ||
            ctorName === 'PDFOptionList'
          ) {
            const optionList = form.getOptionList(fieldValue.fieldName);
            const strVal = String(fieldValue.value ?? '');
            if (strVal === '' && typeof optionList.clear === 'function') {
              optionList.clear();
            } else {
              optionList.select(strVal);
            }
            filledCount++;
          }
        } catch (fieldError) {
          console.warn(`Failed to fill field ${fieldValue.fieldName}:`, fieldError);
        }
      }

      this.updateProgress(80, 'Processing form...');

      try {
        if (typeof form.updateFieldAppearances === 'function') {
          form.updateFieldAppearances();
        }
      } catch {
        // Appearance regeneration fallback is handled by pdf.save()
      }

      if (formOptions.flatten) {
        form.flatten();
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace('.pdf', '_filled.pdf'), {
        totalFields: fields.length,
        filledFields: filledCount,
        flattened: formOptions.flatten,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to fill form.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createFormFillerProcessor(): FormFillerProcessor {
  return new FormFillerProcessor();
}

export async function fillForm(
  file: File,
  options: FormFillerOptions,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createFormFillerProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

export async function getFormFields(file: File): Promise<FormFieldInfo[]> {
  const pdfLib = await loadPdfLib();
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

  let fields: ReturnType<ReturnType<typeof pdf.getForm>['getFields']> = [];
  try {
    const form = pdf.getForm();
    if (typeof form.hasXFA === 'function' && form.hasXFA()) {
      try {
        form.deleteXFA();
      } catch {
        // Ignore XFA removal error during inspection
      }
    }
    fields = form.getFields();
  } catch {
    return [];
  }

  return fields.map((field) => {
    const name = field.getName();
    const ctorName = field.constructor?.name ?? '';
    let readOnly = false;
    let required = false;
    try {
      if (typeof field.isReadOnly === 'function') readOnly = field.isReadOnly();
      if (typeof field.isRequired === 'function') required = field.isRequired();
    } catch {
      // Ignore metadata read errors
    }

    if (
      (pdfLib.PDFTextField && field instanceof pdfLib.PDFTextField) ||
      ctorName === 'PDFTextField'
    ) {
      const textField = field as InstanceType<typeof pdfLib.PDFTextField>;
      let value = '';
      let multiline = false;
      try {
        value = textField.getText() ?? '';
      } catch {
        value = '';
      }
      try {
        if (typeof textField.isMultiline === 'function') multiline = textField.isMultiline();
      } catch {
        multiline = false;
      }
      return { name, type: 'text', value, readOnly, required, multiline };
    }

    if (
      (pdfLib.PDFCheckBox && field instanceof pdfLib.PDFCheckBox) ||
      ctorName === 'PDFCheckBox'
    ) {
      const checkBox = field as InstanceType<typeof pdfLib.PDFCheckBox>;
      let value = false;
      try {
        value = Boolean(checkBox.isChecked());
      } catch {
        value = false;
      }
      return { name, type: 'checkbox', value, readOnly, required };
    }

    if (
      (pdfLib.PDFDropdown && field instanceof pdfLib.PDFDropdown) ||
      ctorName === 'PDFDropdown'
    ) {
      const dropdown = field as InstanceType<typeof pdfLib.PDFDropdown>;
      let options: string[] = [];
      let value = '';
      try {
        options = dropdown.getOptions() ?? [];
      } catch {
        options = [];
      }
      try {
        const selected = dropdown.getSelected();
        value = Array.isArray(selected) && selected.length > 0 ? selected[0] : '';
      } catch {
        value = '';
      }
      return { name, type: 'dropdown', value, options, readOnly, required };
    }

    if (
      (pdfLib.PDFRadioGroup && field instanceof pdfLib.PDFRadioGroup) ||
      ctorName === 'PDFRadioGroup'
    ) {
      const radioGroup = field as InstanceType<typeof pdfLib.PDFRadioGroup>;
      let options: string[] = [];
      let value = '';
      try {
        options = radioGroup.getOptions() ?? [];
      } catch {
        options = [];
      }
      try {
        value = radioGroup.getSelected() ?? '';
      } catch {
        value = '';
      }
      return { name, type: 'radio', value, options, readOnly, required };
    }

    if (
      (pdfLib.PDFOptionList && field instanceof pdfLib.PDFOptionList) ||
      ctorName === 'PDFOptionList'
    ) {
      const optionList = field as InstanceType<typeof pdfLib.PDFOptionList>;
      let options: string[] = [];
      let value = '';
      try {
        options = optionList.getOptions() ?? [];
      } catch {
        options = [];
      }
      try {
        const selected = optionList.getSelected();
        value = Array.isArray(selected) && selected.length > 0 ? selected[0] : '';
      } catch {
        value = '';
      }
      return { name, type: 'optionlist', value, options, readOnly, required };
    }

    if (
      (pdfLib.PDFButton && field instanceof pdfLib.PDFButton) ||
      ctorName === 'PDFButton'
    ) {
      return { name, type: 'button', value: '', readOnly: true, required };
    }

    if (
      (pdfLib.PDFSignature && field instanceof pdfLib.PDFSignature) ||
      ctorName === 'PDFSignature'
    ) {
      return { name, type: 'signature', value: '', readOnly: true, required };
    }

    return { name, type: 'unknown', value: '', readOnly, required };
  });
}

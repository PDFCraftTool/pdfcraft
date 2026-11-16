/**
 * PDF Form Creator Processor
 * Requirements: 5.1
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface FormField {
  type: 'text' | 'checkbox' | 'dropdown' | 'radio' | 'button' | 'signature' | 'date' | 'listbox';
  name: string;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
  options?: string[]; // For dropdown/radio/listbox
  defaultValue?: string | boolean;
  required?: boolean;
  multiline?: boolean;
  // Label for the field (displayed above or beside the field)
  label?: string;
  labelPosition?: 'above' | 'left'; // Where to display the label
  // Button specific
  buttonLabel?: string;
  // Signature specific
  signatureLabel?: string;
  // Date specific
  dateFormat?: string;
  // Listbox specific
  multiSelect?: boolean;
}

export interface FormCreatorOptions {
  fields: FormField[];
  flattenForm?: boolean; // If true, form fields will be flattened (non-editable)
}

export class FormCreatorProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const formOptions = options as unknown as FormCreatorOptions;

    if (files.length !== 1) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Exactly 1 PDF file is required.');
    }

    if (!formOptions.fields || formOptions.fields.length === 0) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'At least one form field is required.');
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Loading PDF...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });

      const form = pdf.getForm();
      const totalPages = pdf.getPageCount();

      this.updateProgress(30, 'Creating form fields...');

      let createdCount = 0;
      const createdFieldNames = new Set<string>(); // Track created field names to avoid duplicates

      for (let i = 0; i < formOptions.fields.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const fieldDef = formOptions.fields[i];
        const pageIndex = fieldDef.pageNumber - 1;

        if (pageIndex < 0 || pageIndex >= totalPages) {
          console.warn(`Field ${fieldDef.name} skipped: pageNumber ${fieldDef.pageNumber} is out of range (1-${totalPages})`);
          continue;
        }

        const page = pdf.getPage(pageIndex);
        const pageHeight = page.getHeight();

        // Generate unique field name if duplicate exists
        let fieldName = fieldDef.name;
        if (createdFieldNames.has(fieldName)) {
          // Add page number and index suffix to make it unique
          fieldName = `${fieldDef.name}_p${fieldDef.pageNumber}_${i}`;
          console.log(`Field name "${fieldDef.name}" already exists, renamed to "${fieldName}"`);
        }
        createdFieldNames.add(fieldName);

        // Ensure coordinates are within page bounds
        const pageWidth = page.getWidth();
        let adjustedX = Math.max(0, Math.min(fieldDef.x, pageWidth - fieldDef.width));
        let adjustedY = Math.max(0, Math.min(fieldDef.y, pageHeight - fieldDef.height));

        try {
          switch (fieldDef.type) {
            case 'text': {
              const textField = form.createTextField(fieldName);
              textField.addToPage(page, {
                x: adjustedX,
                y: adjustedY,
                width: fieldDef.width,
                height: fieldDef.height,
              });
              if (fieldDef.defaultValue) {
                textField.setText(String(fieldDef.defaultValue));
              }
              if (fieldDef.multiline) {
                textField.enableMultiline();
              }
              createdCount++;
              break;
            }
            case 'checkbox': {
              const checkBox = form.createCheckBox(fieldName);
              checkBox.addToPage(page, {
                x: adjustedX,
                y: adjustedY,
                width: fieldDef.width,
                height: fieldDef.height,
              });
              if (fieldDef.defaultValue) {
                checkBox.check();
              }
              createdCount++;
              break;
            }
            case 'dropdown': {
              const dropdown = form.createDropdown(fieldName);
              dropdown.addToPage(page, {
                x: adjustedX,
                y: adjustedY,
                width: fieldDef.width,
                height: fieldDef.height,
              });
              if (fieldDef.options) {
                dropdown.addOptions(fieldDef.options);
                if (fieldDef.defaultValue) {
                  dropdown.select(String(fieldDef.defaultValue));
                }
              }
              createdCount++;
              break;
            }
            case 'radio': {
              const radioGroup = form.createRadioGroup(fieldName);
              if (fieldDef.options) {
                fieldDef.options.forEach((option, idx) => {
                  radioGroup.addOptionToPage(option, page, {
                    x: adjustedX,
                    y: adjustedY - (idx * (fieldDef.height + 5)),
                    width: fieldDef.width,
                    height: fieldDef.height,
                  });
                });
                if (fieldDef.defaultValue) {
                  radioGroup.select(String(fieldDef.defaultValue));
                }
              }
              createdCount++;
              break;
            }
            case 'button': {
              const button = form.createButton(fieldName);
              button.addToPage(fieldDef.buttonLabel || 'Submit', page, {
                x: adjustedX,
                y: adjustedY,
                width: fieldDef.width,
                height: fieldDef.height,
              });
              createdCount++;
              break;
            }
            case 'signature': {
              // Signature field - use text field with specific styling as placeholder
              // pdf-lib doesn't have native signature field, so we create a styled text field
              const sigField = form.createTextField(fieldName);
              sigField.addToPage(page, {
                x: adjustedX,
                y: adjustedY,
                width: fieldDef.width,
                height: fieldDef.height,
              });
              if (fieldDef.signatureLabel) {
                sigField.setText(fieldDef.signatureLabel);
              }
              createdCount++;
              break;
            }
            case 'date': {
              // Date field - use text field with date format hint
              const dateField = form.createTextField(fieldName);
              dateField.addToPage(page, {
                x: adjustedX,
                y: adjustedY,
                width: fieldDef.width,
                height: fieldDef.height,
              });
              if (fieldDef.defaultValue) {
                dateField.setText(String(fieldDef.defaultValue));
              }
              createdCount++;
              break;
            }
            case 'listbox': {
              // Listbox/Option List field
              const optionList = form.createOptionList(fieldName);
              optionList.addToPage(page, {
                x: adjustedX,
                y: adjustedY,
                width: fieldDef.width,
                height: fieldDef.height,
              });
              if (fieldDef.options) {
                optionList.addOptions(fieldDef.options);
                if (fieldDef.defaultValue) {
                  optionList.select(String(fieldDef.defaultValue));
                }
              }
              if (fieldDef.multiSelect) {
                optionList.enableMultiselect();
              }
              createdCount++;
              break;
            }
          }

          // Draw label if specified
          if (fieldDef.label) {
            const labelFontSize = 10;
            const labelText = fieldDef.label;
            const font = await pdf.embedFont(pdfLib.StandardFonts.Helvetica);
            const textWidth = font.widthOfTextAtSize(labelText, labelFontSize);

            let labelX = adjustedX;
            let labelY = adjustedY;

            if (fieldDef.labelPosition === 'left') {
              // Position label to the left of the field
              labelX = adjustedX - textWidth - 5;
              labelY = adjustedY + (fieldDef.height / 2) - (labelFontSize / 2);
            } else {
              // Default: position label above the field
              labelY = adjustedY + fieldDef.height + 3;
            }

            page.drawText(labelText, {
              x: labelX,
              y: labelY,
              size: labelFontSize,
              font: font,
              color: pdfLib.rgb(0, 0, 0),
            });
          }
        } catch (fieldError) {
          console.warn(`Failed to create field ${fieldDef.name}:`, fieldError);
        }

        this.updateProgress(30 + (60 * (i + 1) / formOptions.fields.length), `Creating field ${i + 1}...`);
      }

      // Flatten form if requested
      if (formOptions.flattenForm) {
        this.updateProgress(90, 'Flattening form...');
        form.flatten();
      }

      this.updateProgress(95, 'Saving PDF...');
      const pdfBytes = await pdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, file.name.replace(/\.pdf$/i, '_form.pdf'), {
        fieldsCreated: createdCount,
        flattened: formOptions.flattenForm || false,
      });

    } catch (error) {
      return this.createErrorOutput(PDFErrorCode.PROCESSING_FAILED, 'Failed to create form.', error instanceof Error ? error.message : 'Unknown error');
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createFormCreatorProcessor(): FormCreatorProcessor {
  return new FormCreatorProcessor();
}

export async function createForm(file: File, options: FormCreatorOptions, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  const processor = createFormCreatorProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

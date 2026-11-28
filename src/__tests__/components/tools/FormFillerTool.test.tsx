import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { FormFillerTool } from '@/components/tools/form-filler/FormFillerTool';
import { getFormFields, fillForm } from '@/lib/pdf/processors/form-filler';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('@/components/tools/FileUploader', () => ({
  FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => (
    <button
      data-testid="mock-uploader"
      onClick={() => {
        const file = new File(['%PDF-1.7'], 'acrobat-filled.pdf', { type: 'application/pdf' });
        onFilesSelected([file]);
      }}
    >
      Upload PDF
    </button>
  ),
}));

vi.mock('@/lib/pdf/processors/form-filler', () => ({
  getFormFields: vi.fn(),
  fillForm: vi.fn(),
}));

describe('FormFillerTool', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('preserves pre-filled AcroForm values upon upload and renders specialized controls (#203, #170, #171)', async () => {
    vi.mocked(getFormFields).mockResolvedValue([
      { name: 'Applicant Name', type: 'text', value: 'John Doe' },
      { name: 'Terms Accepted', type: 'checkbox', value: true },
      { name: 'Department', type: 'dropdown', value: 'Engineering', options: ['Sales', 'Engineering', 'HR'] },
      { name: 'Shift', type: 'radio', value: 'Morning', options: ['Morning', 'Evening'] },
    ]);

    render(<FormFillerTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    // Pre-filled text field is preserved (not reset to '')
    const nameInput = (await screen.findByLabelText('Applicant Name')) as HTMLInputElement;
    expect(nameInput.type).toBe('text');
    expect(nameInput.value).toBe('John Doe');

    // Pre-checked checkbox is rendered as a checkbox and checked
    const checkbox = screen.getByLabelText('Terms Accepted') as HTMLInputElement;
    expect(checkbox.type).toBe('checkbox');
    expect(checkbox.checked).toBe(true);

    // Dropdown is rendered as a <select> with selected value and options
    const dropdown = screen.getByLabelText('Department') as HTMLSelectElement;
    expect(dropdown.tagName).toBe('SELECT');
    expect(dropdown.value).toBe('Engineering');
    expect(screen.getByRole('option', { name: 'Sales' })).toBeInTheDocument();

    // Radio group renders radio buttons with selected option checked
    const morningRadio = screen.getByRole('radio', { name: 'Morning' }) as HTMLInputElement;
    const eveningRadio = screen.getByRole('radio', { name: 'Evening' }) as HTMLInputElement;
    expect(morningRadio.checked).toBe(true);
    expect(eveningRadio.checked).toBe(false);
  });

  it('submits updated values including unchecked (false) checkboxes and cleared text fields', async () => {
    vi.mocked(getFormFields).mockResolvedValue([
      { name: 'Applicant Name', type: 'text', value: 'John Doe' },
      { name: 'Terms Accepted', type: 'checkbox', value: true },
      { name: 'Department', type: 'dropdown', value: 'Engineering', options: ['Sales', 'Engineering'] },
    ]);
    vi.mocked(fillForm).mockResolvedValue({
      success: true,
      result: new Blob(['%PDF-filled'], { type: 'application/pdf' }),
      filename: 'acrobat-filled_filled.pdf',
    });

    render(<FormFillerTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    const nameInput = await screen.findByLabelText('Applicant Name');
    const checkbox = screen.getByLabelText('Terms Accepted');
    const dropdown = screen.getByLabelText('Department');

    // Edit text, uncheck checkbox, and change dropdown
    fireEvent.change(nameInput, { target: { value: 'Jane Roe' } });
    fireEvent.click(checkbox);
    fireEvent.change(dropdown, { target: { value: 'Sales' } });

    fireEvent.click(screen.getByRole('button', { name: 'Fill Form' }));

    await waitFor(() => {
      expect(fillForm).toHaveBeenCalledTimes(1);
    });

    expect(vi.mocked(fillForm).mock.calls[0][1]).toEqual({
      fields: [
        { fieldName: 'Applicant Name', value: 'Jane Roe' },
        { fieldName: 'Terms Accepted', value: false },
        { fieldName: 'Department', value: 'Sales' },
      ],
      flatten: false,
    });

    expect(await screen.findByText('Form filled successfully!')).toBeInTheDocument();
  });
});

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup, act } from '@testing-library/react';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { DeletePagesTool } from '@/components/tools/delete/DeletePagesTool';

vi.mock('@/components/tools/FileUploader', () => ({
  FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => (
    <button
      data-testid="mock-uploader"
      onClick={() => {
        const file = new File(['%PDF-1.4'], 'sample.pdf', { type: 'application/pdf' });
        Object.defineProperty(file, 'arrayBuffer', {
          value: async () => new ArrayBuffer(8),
        });
        onFilesSelected([file]);
      }}
    >
      Upload PDF
    </button>
  ),
}));

vi.mock('@/lib/pdf/loader', () => ({
  configurePdfjsWorker: vi.fn(),
}));

vi.mock('pdfjs-dist', () => ({
  getDocument: () => ({
    promise: Promise.resolve({
      numPages: 4,
      getPage: async (pageNum: number) => ({
        getViewport: () => ({ width: 100, height: 100 }),
        render: () => ({ promise: Promise.resolve() }),
      }),
    }),
  }),
}));

const renderDeletePagesTool = () => {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <DeletePagesTool />
    </NextIntlClientProvider>
  );
};

describe('DeletePagesTool - Select All Shortcut (Issue #176)', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({} as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,mock');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('selects all but one page when Ctrl+A is pressed to preserve at least 1 page', async () => {
    renderDeletePagesTool();

    // Upload file
    fireEvent.click(screen.getByTestId('mock-uploader'));

    // Wait for previews to load (4 pages)
    await screen.findByText(/sample\.pdf/i);
    await screen.findByRole('button', { name: 'Page 1' });

    // Initial state: 0 pages selected
    expect(screen.queryByRole('button', { name: /Page 1 \(selected for deletion\)/i })).not.toBeInTheDocument();

    // Trigger Ctrl+A
    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    act(() => {
      window.dispatchEvent(event);
    });

    // Verify document invariant: all pages except the last one (pages 1, 2, 3) are selected
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Page 1 (selected for deletion)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 2 (selected for deletion)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 3 (selected for deletion)' })).toBeInTheDocument();
      // Page 4 must remain unselected
      expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Page 4 (selected for deletion)' })).not.toBeInTheDocument();
    });

    expect(screen.getByText(/3 selected, 1 will remain/i)).toBeInTheDocument();
  });

  it('selects all but one page when Cmd+A is pressed on macOS', async () => {
    renderDeletePagesTool();

    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByRole('button', { name: 'Page 1' });

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      metaKey: true,
      bubbles: true,
      cancelable: true,
    });
    act(() => {
      window.dispatchEvent(event);
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Page 1 (selected for deletion)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 2 (selected for deletion)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 3 (selected for deletion)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 4' })).toBeInTheDocument();
    });
  });

  it('does NOT trigger selection when no file is loaded', () => {
    renderDeletePagesTool();

    expect(screen.getByTestId('mock-uploader')).toBeInTheDocument();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    act(() => {
      window.dispatchEvent(event);
    });

    expect(screen.queryByText(/selected for deletion/i)).not.toBeInTheDocument();
  });

  it('does NOT select pages when the page range input is focused', async () => {
    renderDeletePagesTool();

    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByRole('button', { name: 'Page 1' });

    const input = screen.getByPlaceholderText(/1-5/i);
    input.focus();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    act(() => {
      input.dispatchEvent(event);
    });

    expect(screen.queryByRole('button', { name: /selected for deletion/i })).not.toBeInTheDocument();
  });
});

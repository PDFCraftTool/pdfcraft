import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup, act } from '@testing-library/react';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ExtractPagesTool } from '@/components/tools/extract/ExtractPagesTool';

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

const renderExtractPagesTool = () => {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <ExtractPagesTool />
    </NextIntlClientProvider>
  );
};

describe('ExtractPagesTool - Select All Shortcut (Issue #176)', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({} as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,mock');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('selects all pages when Ctrl+A is pressed with loaded previews', async () => {
    renderExtractPagesTool();

    // Upload file
    fireEvent.click(screen.getByTestId('mock-uploader'));

    // Wait for previews to load (4 pages)
    await screen.findByText(/sample\.pdf/i);
    await screen.findByRole('button', { name: 'Page 1' });

    // Initial state: 0 pages selected
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Page 1 \(selected\)/i })).not.toBeInTheDocument();

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

    // Verify all 4 pages are selected
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Page 1 (selected)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 2 (selected)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 3 (selected)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 4 (selected)' })).toBeInTheDocument();
    });

    expect(screen.getByText(/\(4 selected\)/i)).toBeInTheDocument();
  });

  it('selects all pages when Cmd+A is pressed on macOS', async () => {
    renderExtractPagesTool();

    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByRole('button', { name: 'Page 1' });

    // Trigger Cmd+A (metaKey)
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
      expect(screen.getByRole('button', { name: 'Page 1 (selected)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 4 (selected)' })).toBeInTheDocument();
    });
  });

  it('does NOT trigger selection when no file is loaded', () => {
    renderExtractPagesTool();

    // File uploader is visible, no file loaded
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

    // Previews should still not exist
    expect(screen.queryByText(/selected/i)).not.toBeInTheDocument();
  });

  it('does NOT select all pages when the page range input is focused', async () => {
    renderExtractPagesTool();

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

    // Pages should NOT be selected
    expect(screen.queryByRole('button', { name: 'Page 1 (selected)' })).not.toBeInTheDocument();
  });

  it('re-selects all pages after deselecting and pressing Ctrl+A again', async () => {
    renderExtractPagesTool();

    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByRole('button', { name: 'Page 1' });

    // Press Ctrl+A to select all
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', ctrlKey: true, bubbles: true, cancelable: true }));
    });
    await screen.findByRole('button', { name: 'Page 1 (selected)' });

    // Click Deselect All button
    fireEvent.click(screen.getByRole('button', { name: /Deselect All/i }));
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'Page 1 (selected)' })).not.toBeInTheDocument();
    });

    // Press Ctrl+A again
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', ctrlKey: true, bubbles: true, cancelable: true }));
    });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Page 1 (selected)' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 4 (selected)' })).toBeInTheDocument();
    });
  });
});

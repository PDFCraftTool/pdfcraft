import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { RotatePDFTool } from '@/components/tools/rotate/RotatePDFTool';

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
      getPage: async () => ({
        getViewport: () => ({ width: 100, height: 100 }),
        render: () => ({ promise: Promise.resolve() }),
      }),
    }),
  }),
}));

const renderRotatePDFTool = () => {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <RotatePDFTool />
    </NextIntlClientProvider>
  );
};

describe('RotatePDFTool - Select All Shortcut (Issue #176)', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({} as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,mock');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('selects all pages when Ctrl+A is pressed with loaded previews after deselecting', async () => {
    renderRotatePDFTool();

    // Upload file
    fireEvent.click(screen.getByTestId('mock-uploader'));

    // Wait for previews to load (4 pages)
    await screen.findByText(/sample\.pdf/i);
    await screen.findByText(/Selected 4 \/ 4 page\(s\)/i);

    // Click Clear button to deselect all pages
    const clearBtn = screen.getByRole('button', { name: messages.common.buttons.clear });
    fireEvent.click(clearBtn);

    // Verify selection is cleared
    await waitFor(() => {
      expect(screen.getByText(/Selected 0 \/ 4 page\(s\)/i)).toBeInTheDocument();
    });

    // Trigger Ctrl+A
    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    // Verify all 4 pages are re-selected
    await waitFor(() => {
      expect(screen.getByText(/Selected 4 \/ 4 page\(s\)/i)).toBeInTheDocument();
    });
  });

  it('selects all pages when Cmd+A is pressed on macOS (metaKey)', async () => {
    renderRotatePDFTool();

    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByText(/Selected 4 \/ 4 page\(s\)/i);

    // Clear selection
    const clearBtn = screen.getByRole('button', { name: messages.common.buttons.clear });
    fireEvent.click(clearBtn);
    await waitFor(() => {
      expect(screen.getByText(/Selected 0 \/ 4 page\(s\)/i)).toBeInTheDocument();
    });

    // Trigger Cmd+A (metaKey)
    const event = new KeyboardEvent('keydown', {
      key: 'a',
      metaKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    await waitFor(() => {
      expect(screen.getByText(/Selected 4 \/ 4 page\(s\)/i)).toBeInTheDocument();
    });
  });

  it('does NOT trigger selection when no file is loaded', () => {
    renderRotatePDFTool();

    expect(screen.getByTestId('mock-uploader')).toBeInTheDocument();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    expect(screen.queryByText(/page\(s\)/i)).not.toBeInTheDocument();
  });

  it('does NOT select all pages when custom page input is focused', async () => {
    renderRotatePDFTool();

    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByText(/Selected 4 \/ 4 page\(s\)/i);

    // Clear selection
    const clearBtn = screen.getByRole('button', { name: messages.common.buttons.clear });
    fireEvent.click(clearBtn);
    await waitFor(() => {
      expect(screen.getByText(/Selected 0 \/ 4 page\(s\)/i)).toBeInTheDocument();
    });

    const input = screen.getByPlaceholderText(/e\.g\. 1, 3-5/i);
    input.focus();

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    input.dispatchEvent(event);

    // Selection should remain 0
    expect(screen.getByText(/Selected 0 \/ 4 page\(s\)/i)).toBeInTheDocument();
  });

  it('does NOT trigger when altKey is pressed (Ctrl+Alt+A)', async () => {
    renderRotatePDFTool();

    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByText(/Selected 4 \/ 4 page\(s\)/i);

    // Clear selection
    const clearBtn = screen.getByRole('button', { name: messages.common.buttons.clear });
    fireEvent.click(clearBtn);
    await waitFor(() => {
      expect(screen.getByText(/Selected 0 \/ 4 page\(s\)/i)).toBeInTheDocument();
    });

    const event = new KeyboardEvent('keydown', {
      key: 'a',
      ctrlKey: true,
      altKey: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);

    // Selection should remain 0
    expect(screen.getByText(/Selected 0 \/ 4 page\(s\)/i)).toBeInTheDocument();
  });
});

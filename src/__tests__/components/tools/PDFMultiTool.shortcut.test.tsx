import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { PDFMultiTool } from '@/components/tools/pdf-multi-tool/PDFMultiTool';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const map: Record<string, string> = {
      'pdfMultiTool.selectAll': 'Select All',
      'pdfMultiTool.deselectAll': 'Deselect',
      'pdfMultiTool.addBlank': 'Add Blank',
      'pdfMultiTool.addBlankPageTitle': 'Add Blank Pages',
      'pdfMultiTool.delete': 'Delete',
      'pdfMultiTool.clearAll': 'Clear All',
      'status.loading': 'Loading...',
    };
    return map[key] || key;
  },
  useLocale: () => 'en',
}));

vi.mock('@/lib/pdf/loader', () => ({
  configurePdfjsWorker: vi.fn(),
}));

vi.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: { workerSrc: 'mock-worker.js' },
  getDocument: () => ({
    promise: Promise.resolve({
      numPages: 3,
      getPage: async () => ({
        getViewport: () => ({ width: 100, height: 150 }),
        render: () => ({ promise: Promise.resolve() }),
      }),
    }),
  }),
}));

vi.mock('@/components/tools/FileUploader', () => ({
  FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => (
    <button
      data-testid="mock-uploader"
      onClick={() => {
        const file = new File(['%PDF-1.4'], 'test.pdf', { type: 'application/pdf' });
        Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(8) });
        onFilesSelected([file]);
      }}
    >
      Upload PDF
    </button>
  ),
}));

vi.mock('@/components/tools/ProcessingProgress', () => ({
  ProcessingProgress: () => <div data-testid="processing-progress" />,
}));

vi.mock('@/components/tools/DownloadButton', () => ({
  DownloadButton: () => <button data-testid="download-btn">Download</button>,
}));

vi.mock('@/lib/tauri-bridge', () => ({
  saveBlobFile: vi.fn(),
}));

describe('PDFMultiTool - Select All Shortcut (Issue #176)', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
      drawImage: vi.fn(),
      fillRect: vi.fn(),
    } as any);
    vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,mock');
  });

  const loadPdf = async () => {
    render(<PDFMultiTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByText(/3 pages/i);
  };

  it('selects all pages on Ctrl+A when pages are loaded and blank modal is closed', async () => {
    await loadPdf();

    expect(screen.queryByText(/3 selected/i)).not.toBeInTheDocument();

    fireEvent.keyDown(window, {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    await waitFor(() => {
      expect(screen.getByText(/3 selected/i)).toBeInTheDocument();
    });
  });

  it('selects all pages on Cmd+A (macOS)', async () => {
    await loadPdf();

    expect(screen.queryByText(/3 selected/i)).not.toBeInTheDocument();

    fireEvent.keyDown(window, {
      key: 'a',
      metaKey: true,
      bubbles: true,
      cancelable: true,
    });

    await waitFor(() => {
      expect(screen.getByText(/3 selected/i)).toBeInTheDocument();
    });
  });

  it('does NOT trigger shortcut when pagePreviews is empty', () => {
    render(<PDFMultiTool />);

    fireEvent.keyDown(window, {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    expect(screen.queryByText(/selected/i)).not.toBeInTheDocument();
  });

  it('does NOT trigger shortcut when showAddBlankModal is true', async () => {
    await loadPdf();

    // Open add blank page modal
    const addBlankBtn = screen.getByRole('button', { name: /Add Blank/i });
    fireEvent.click(addBlankBtn);

    // Modal is now open
    expect(screen.getByText('Add Blank Pages')).toBeInTheDocument();

    fireEvent.keyDown(window, {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    expect(screen.queryByText(/3 selected/i)).not.toBeInTheDocument();
  });

  it('does NOT trigger shortcut when an input element is focused', async () => {
    await loadPdf();

    const input = document.createElement('input');
    document.body.appendChild(input);
    input.focus();

    fireEvent.keyDown(input, {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    expect(screen.queryByText(/3 selected/i)).not.toBeInTheDocument();

    document.body.removeChild(input);
  });
});

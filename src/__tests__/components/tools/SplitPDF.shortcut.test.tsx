import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { SplitPDFTool } from '@/components/tools/split/SplitPDFTool';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const map: Record<string, string> = {
      'buttons.selectAll': 'Select All',
      'buttons.deselectAll': 'Deselect All',
      'splitPdf.pagePreviewTitle': 'Select Pages',
      'splitPdf.modeRanges': 'Page Range',
      'splitPdf.modeVisualShort': 'Visual Select',
      'splitPdf.modeEvenOdd': 'Even/Odd',
      'splitPdf.modeEveryPage': 'Every Page',
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
      getOutline: async () => [],
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

describe('SplitPDFTool - Select All Shortcut (Issue #176)', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
      drawImage: vi.fn(),
      fillRect: vi.fn(),
    } as any);
    vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,mock');
  });

  const loadPdf = async () => {
    render(<SplitPDFTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));
    await screen.findByText(/Select Pages/i);
  };

  it('activates Ctrl+A shortcut to select all pages when in "ranges" mode', async () => {
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

  it('activates Cmd+A shortcut to select all pages when in "visual" mode', async () => {
    await loadPdf();

    const visualBtn = screen.getByText('Visual Select');
    fireEvent.click(visualBtn);

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

  it('does NOT select all pages on Ctrl+A when splitMode is not "ranges" or "visual"', async () => {
    await loadPdf();

    const evenOddBtn = screen.getByText('Even/Odd');
    fireEvent.click(evenOddBtn);

    fireEvent.keyDown(window, {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    expect(screen.queryByText(/selected/i)).not.toBeInTheDocument();
  });

  it('does NOT trigger page selection when an input element is focused', async () => {
    await loadPdf();

    const input = screen.getByPlaceholderText('e.g., 1-5, 8, 10-15');
    input.focus();

    fireEvent.keyDown(input, {
      key: 'a',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    expect(screen.queryByText(/3 selected/i)).not.toBeInTheDocument();
  });
});

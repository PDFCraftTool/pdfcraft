import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup, act } from '@testing-library/react';
import React from 'react';
import { PDFReaderTool, SELECTED_PRINTER_STORAGE_KEY } from '@/components/tools/pdf-reader/PDFReaderTool';
import * as tauriBridge from '@/lib/tauri-bridge';

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      'pdfReader.uploadLabel': 'Open PDF File',
      'pdfReader.uploadDescription': 'Open a PDF file to read and view.',
      'pdfReader.print': 'Print (Ctrl+P)',
      'pdfReader.printModalTitle': 'Print Document',
    };
    return translations[key] || key;
  },
}));

// Mock path util
vi.mock('@/lib/utils/path', () => ({
  withBasePath: (path: string) => path,
}));

// Mock FileUploader
vi.mock('@/components/tools/FileUploader', () => ({
  FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => (
    <button
      data-testid="mock-uploader"
      onClick={() => onFilesSelected([new File(['test content'], 'sample.pdf', { type: 'application/pdf' })])}
    >
      Upload PDF
    </button>
  ),
}));

const originalCreateObjectURL = URL.createObjectURL;
const originalRevokeObjectURL = URL.revokeObjectURL;

describe('PDFReaderTool', () => {
  beforeEach(() => {
    URL.createObjectURL = vi.fn(() => 'blob:mock-url');
    URL.revokeObjectURL = vi.fn();
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    URL.createObjectURL = originalCreateObjectURL;
    URL.revokeObjectURL = originalRevokeObjectURL;
    localStorage.clear();
    cleanup();
  });

  it('renders upload component initially', () => {
    render(<PDFReaderTool />);
    expect(screen.getByTestId('mock-uploader')).toBeInTheDocument();
  });

  it('renders viewer and print button after file is selected', async () => {
    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    const printBtn = screen.getByTitle('打印 (Ctrl+P)');
    expect(printBtn).toBeInTheDocument();
  });

  it('falls back to window.print in browser mode when print button is clicked', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
    const printSpy = vi.fn();
    window.print = printSpy;
    const originalGetter = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentWindow');
    Object.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', {
      configurable: true,
      get: () => ({ print: printSpy }),
    });

    try {
      render(<PDFReaderTool />);
      fireEvent.click(screen.getByTestId('mock-uploader'));

      await waitFor(() => {
        expect(screen.getByText('sample.pdf')).toBeInTheDocument();
      });

      const printBtn = screen.getByTitle('打印 (Ctrl+P)');
      fireEvent.click(printBtn);

      expect(printSpy).toHaveBeenCalled();
    } finally {
      if (originalGetter) {
        Object.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', originalGetter);
      }
    }
  });

  it('opens native print modal in Tauri desktop mode when print button is clicked', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([
      { name: 'HP LaserJet M14', is_default: true, port_name: 'USB001' },
      { name: 'SHARP MX-M3558NV', is_default: false, port_name: '192.168.1.100' },
    ]);

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    const printBtn = screen.getByTitle('打印 (Ctrl+P)');
    fireEvent.click(printBtn);

    await waitFor(() => {
      expect(screen.getByText('打印文档')).toBeInTheDocument();
      expect(screen.getByText('HP LaserJet M14 (默认)')).toBeInTheDocument();
    });
  });

  it('responds to pdfcraft-print-requested message posted by viewer iframe', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([
      { name: 'Office Printer', is_default: true, port_name: 'NET' },
    ]);

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    // Simulate postMessage event from viewer iframe
    act(() => {
      window.dispatchEvent(
        new MessageEvent('message', {
          data: { type: 'pdfcraft-print-requested' },
        })
      );
    });

    await waitFor(() => {
      expect(screen.getByText('打印文档')).toBeInTheDocument();
      expect(screen.getByText('Office Printer (默认)')).toBeInTheDocument();
    });
  });

  it('exports SELECTED_PRINTER_STORAGE_KEY with expected identifier', () => {
    expect(SELECTED_PRINTER_STORAGE_KEY).toBe('pdfcraft-selected-printer');
  });

  it('does NOT trigger print or preventDefault on Ctrl+P when no PDF file is loaded', () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
    const printSpy = vi.fn();
    window.print = printSpy;
    render(<PDFReaderTool />);

    const event = new KeyboardEvent('keydown', { key: 'p', ctrlKey: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
    window.dispatchEvent(event);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(printSpy).not.toHaveBeenCalled();
  });

  it('triggers browser print on Ctrl+P when a PDF is loaded in browser mode', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
    const printSpy = vi.fn();
    window.print = printSpy;
    const originalGetter = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentWindow');
    Object.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', {
      configurable: true,
      get: () => ({ print: printSpy }),
    });

    try {
      render(<PDFReaderTool />);
      fireEvent.click(screen.getByTestId('mock-uploader'));

      await waitFor(() => {
        expect(screen.getByText('sample.pdf')).toBeInTheDocument();
      });

      const event = new KeyboardEvent('keydown', { key: 'p', ctrlKey: true, cancelable: true });
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
      window.dispatchEvent(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(printSpy).toHaveBeenCalled();
    } finally {
      if (originalGetter) {
        Object.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', originalGetter);
      }
    }
  });

  it('triggers print modal on Cmd+P (metaKey) and uppercase P in Tauri desktop mode', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([
      { name: 'HP LaserJet M14', is_default: true, port_name: 'USB001' },
    ]);

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    const event = new KeyboardEvent('keydown', { key: 'P', metaKey: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
    act(() => {
      window.dispatchEvent(event);
    });

    expect(preventDefaultSpy).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByText('打印文档')).toBeInTheDocument();
      expect(screen.getByText('HP LaserJet M14 (默认)')).toBeInTheDocument();
    });
  });

  it('ignores Ctrl+Alt+P due to altKey guard', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    const getPrintersSpy = vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([]);

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    const event = new KeyboardEvent('keydown', { key: 'p', ctrlKey: true, altKey: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
    act(() => {
      window.dispatchEvent(event);
    });

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(getPrintersSpy).not.toHaveBeenCalled();
    expect(screen.queryByText('打印文档')).not.toBeInTheDocument();
  });

  it('does not re-trigger loadPrinters when print modal is already open', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    const getPrintersSpy = vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([
      { name: 'Office Printer', is_default: true, port_name: 'NET' },
    ]);

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    // First shortcut press opens modal and loads printers
    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'p', ctrlKey: true, cancelable: true }));
    });

    await waitFor(() => {
      expect(screen.getByText('打印文档')).toBeInTheDocument();
    });
    expect(getPrintersSpy).toHaveBeenCalledTimes(1);

    // Second shortcut press while modal is open should preventDefault but not trigger loadPrinters again
    const secondEvent = new KeyboardEvent('keydown', { key: 'p', ctrlKey: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(secondEvent, 'preventDefault');
    act(() => {
      window.dispatchEvent(secondEvent);
    });

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(getPrintersSpy).toHaveBeenCalledTimes(1);
  });

  it('removes keydown listener cleanly on unmount', async () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });

  it('persists newly selected printer to localStorage on dropdown change', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([
      { name: 'HP LaserJet M14', is_default: true, port_name: 'USB001' },
      { name: 'SHARP MX-M3558NV', is_default: false, port_name: '192.168.1.100' },
    ]);
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    const printBtn = screen.getByTitle('打印 (Ctrl+P)');
    fireEvent.click(printBtn);

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'SHARP MX-M3558NV' } });

    expect(setItemSpy).toHaveBeenCalledWith(
      SELECTED_PRINTER_STORAGE_KEY,
      'SHARP MX-M3558NV'
    );
    expect(localStorage.getItem(SELECTED_PRINTER_STORAGE_KEY)).toBe('SHARP MX-M3558NV');
  });

  it('restores previously saved printer from localStorage over default when opening print modal', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([
      { name: 'HP LaserJet M14', is_default: true, port_name: 'USB001' },
      { name: 'SHARP MX-M3558NV', is_default: false, port_name: '192.168.1.100' },
    ]);
    localStorage.setItem(SELECTED_PRINTER_STORAGE_KEY, 'SHARP MX-M3558NV');

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    const printBtn = screen.getByTitle('打印 (Ctrl+P)');
    fireEvent.click(printBtn);

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('SHARP MX-M3558NV');
  });

  it('falls back to default printer if saved localStorage printer is not in list', async () => {
    vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
    vi.spyOn(tauriBridge, 'getSystemPrinters').mockResolvedValue([
      { name: 'HP LaserJet M14', is_default: true, port_name: 'USB001' },
      { name: 'SHARP MX-M3558NV', is_default: false, port_name: '192.168.1.100' },
    ]);
    localStorage.setItem(SELECTED_PRINTER_STORAGE_KEY, 'Ghost-Printer-9000');

    render(<PDFReaderTool />);
    fireEvent.click(screen.getByTestId('mock-uploader'));

    await waitFor(() => {
      expect(screen.getByText('sample.pdf')).toBeInTheDocument();
    });

    const printBtn = screen.getByTitle('打印 (Ctrl+P)');
    fireEvent.click(printBtn);

    await waitFor(() => {
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('HP LaserJet M14');
  });
});

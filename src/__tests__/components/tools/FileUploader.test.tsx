import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileUploader } from '@/components/tools/FileUploader';
import { PDFDocument } from 'pdf-lib';
import { decryptPDF } from '@/lib/pdf/processors/decrypt';

vi.mock('pdf-lib', () => ({
  PDFDocument: {
    load: vi.fn(),
  },
}));

vi.mock('@/lib/pdf/processors/decrypt', () => ({
  decryptPDF: vi.fn(),
}));

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string, params?: Record<string, unknown>) => {
    const translations: Record<string, string> = {
      'buttons.upload': 'Upload Files',
      'buttons.cancel': 'Cancel',
      'fileUploader.dragDrop': 'Drag and drop files here, or click to browse',
      'fileUploader.dropToUpload': 'Drop files here',
      'fileUploader.support': 'Support',
      'fileUploader.paste': 'Paste (Ctrl+V)',
    };
    if (key === 'fileTooLarge') {
      return `File size exceeds ${params?.maxSize}MB limit`;
    }
    if (key === 'fileTypeInvalid') {
      return `Invalid file type. Accepted: ${params?.acceptedTypes}`;
    }
    return translations[key] || key;
  },
}));

/**
 * Create a mock File object
 */
function createMockFile(
  name: string,
  size: number,
  type: string
): File {
  const content = new Array(size).fill('a').join('');
  return new File([content], name, { type });
}

/**
 * Create a mock DataTransfer object for drag-drop tests
 */
function createDataTransfer(files: File[]): DataTransfer {
  const dataTransfer = {
    files: files,
    items: files.map(file => ({
      kind: 'file',
      type: file.type,
      getAsFile: () => file,
    })),
    types: ['Files'],
    getData: vi.fn(),
    setData: vi.fn(),
    clearData: vi.fn(),
    setDragImage: vi.fn(),
  } as unknown as DataTransfer;
  
  return dataTransfer;
}

describe('FileUploader', () => {
  const mockOnFilesSelected = vi.fn();
  const mockOnError = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(PDFDocument.load).mockResolvedValue({} as any);
    vi.mocked(decryptPDF).mockResolvedValue({ success: false });
  });

  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      expect(screen.getByRole('button', { name: /upload/i })).toBeInTheDocument();
      expect(screen.getByText(/drag and drop/i)).toBeInTheDocument();
    });

    it('renders with custom label', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          label="Select PDF Files"
        />
      );
      
      expect(screen.getByText('Select PDF Files')).toBeInTheDocument();
    });

    it('renders with custom description', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          description="Custom upload description"
        />
      );
      
      expect(screen.getByText('Custom upload description')).toBeInTheDocument();
    });

    it('displays accepted file types', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          accept={['application/pdf', 'image/png']}
        />
      );
      
      expect(screen.getByText(/application\/pdf, image\/png/)).toBeInTheDocument();
    });

    it('displays max file size', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          maxSize={50 * 1024 * 1024} // 50MB
        />
      );
      
      expect(screen.getByText(/50MB/)).toBeInTheDocument();
    });

    it('displays max files when multiple is enabled', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          multiple={true}
          maxFiles={5}
        />
      );
      
      expect(screen.getByText(/Max files: 5/)).toBeInTheDocument();
    });
  });

  describe('File Picker', () => {
    it('opens file picker on click', async () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      const clickSpy = vi.spyOn(fileInput, 'click');
      
      fireEvent.click(dropZone);
      
      expect(clickSpy).toHaveBeenCalled();
    });

    it('opens file picker on Enter key', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      const clickSpy = vi.spyOn(fileInput, 'click');
      
      fireEvent.keyDown(dropZone, { key: 'Enter' });
      
      expect(clickSpy).toHaveBeenCalled();
    });

    it('opens file picker on Space key', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      const clickSpy = vi.spyOn(fileInput, 'click');
      
      fireEvent.keyDown(dropZone, { key: ' ' });
      
      expect(clickSpy).toHaveBeenCalled();
    });

    it('handles file selection from input', async () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');
      
      Object.defineProperty(fileInput, 'files', {
        value: [mockFile],
        writable: false,
      });
      
      fireEvent.change(fileInput);
      
      await waitFor(() => {
        expect(mockOnFilesSelected).toHaveBeenCalledWith([mockFile]);
      });
    });
  });

  describe('Drag and Drop', () => {
    it('shows drag overlay when dragging over', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');
      const dataTransfer = createDataTransfer([mockFile]);
      
      fireEvent.dragEnter(dropZone, { dataTransfer });
      
      expect(screen.getByText('Drop files here')).toBeInTheDocument();
    });

    it('hides drag overlay when dragging leaves', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');
      const dataTransfer = createDataTransfer([mockFile]);
      
      fireEvent.dragEnter(dropZone, { dataTransfer });
      expect(screen.getByText('Drop files here')).toBeInTheDocument();
      
      fireEvent.dragLeave(dropZone, { dataTransfer });
      expect(screen.queryByText('Drop files here')).not.toBeInTheDocument();
    });

    it('handles file drop', async () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');
      const dataTransfer = createDataTransfer([mockFile]);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      await waitFor(() => {
        expect(mockOnFilesSelected).toHaveBeenCalledWith([mockFile]);
      });
    });

    it('handles multiple file drop when multiple is enabled', async () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          multiple={true}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const mockFiles = [
        createMockFile('test1.pdf', 1024, 'application/pdf'),
        createMockFile('test2.pdf', 1024, 'application/pdf'),
      ];
      const dataTransfer = createDataTransfer(mockFiles);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      await waitFor(() => {
        expect(mockOnFilesSelected).toHaveBeenCalledWith(mockFiles);
      });
    });
  });

  describe('Validation', () => {
    it('rejects files exceeding max size', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          onError={mockOnError}
          maxSize={1024} // 1KB
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const largeFile = createMockFile('large.pdf', 2048, 'application/pdf');
      const dataTransfer = createDataTransfer([largeFile]);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      expect(mockOnError).toHaveBeenCalled();
      expect(mockOnFilesSelected).not.toHaveBeenCalled();
    });

    it('rejects invalid file types', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          onError={mockOnError}
          accept={['application/pdf']}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const invalidFile = createMockFile('test.txt', 1024, 'text/plain');
      const dataTransfer = createDataTransfer([invalidFile]);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      expect(mockOnError).toHaveBeenCalled();
      expect(mockOnFilesSelected).not.toHaveBeenCalled();
    });

    it('accepts files with .pdf extension even without MIME type', async () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          onError={mockOnError}
          accept={['application/pdf']}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      // File with .pdf extension but empty MIME type
      const pdfFile = createMockFile('test.pdf', 1024, '');
      const dataTransfer = createDataTransfer([pdfFile]);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      await waitFor(() => {
        expect(mockOnFilesSelected).toHaveBeenCalledWith([pdfFile]);
      });
    });

    it('limits files to maxFiles when multiple is enabled', async () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          onError={mockOnError}
          multiple={true}
          maxFiles={2}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const mockFiles = [
        createMockFile('test1.pdf', 1024, 'application/pdf'),
        createMockFile('test2.pdf', 1024, 'application/pdf'),
        createMockFile('test3.pdf', 1024, 'application/pdf'),
      ];
      const dataTransfer = createDataTransfer(mockFiles);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      await waitFor(() => {
        expect(mockOnError).toHaveBeenCalled();
        expect(mockOnFilesSelected).toHaveBeenCalledWith([mockFiles[0], mockFiles[1]]);
      });
    });

    it('only accepts first file when multiple is disabled', async () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          onError={mockOnError}
          multiple={false}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const mockFiles = [
        createMockFile('test1.pdf', 1024, 'application/pdf'),
        createMockFile('test2.pdf', 1024, 'application/pdf'),
      ];
      const dataTransfer = createDataTransfer(mockFiles);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      await waitFor(() => {
        expect(mockOnFilesSelected).toHaveBeenCalledWith([mockFiles[0]]);
      });
    });
  });

  describe('Disabled State', () => {
    it('does not open file picker when disabled', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          disabled={true}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      
      const clickSpy = vi.spyOn(fileInput, 'click');
      
      fireEvent.click(dropZone);
      
      expect(clickSpy).not.toHaveBeenCalled();
    });

    it('does not handle drop when disabled', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          disabled={true}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      const mockFile = createMockFile('test.pdf', 1024, 'application/pdf');
      const dataTransfer = createDataTransfer([mockFile]);
      
      fireEvent.drop(dropZone, { dataTransfer });
      
      expect(mockOnFilesSelected).not.toHaveBeenCalled();
    });

    it('has aria-disabled attribute when disabled', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          disabled={true}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      expect(dropZone).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Accessibility', () => {
    it('has proper role and aria-label', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      expect(dropZone).toBeInTheDocument();
    });

    it('is focusable when not disabled', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      expect(dropZone).toHaveAttribute('tabIndex', '0');
    });

    it('is not focusable when disabled', () => {
      render(
        <FileUploader 
          onFilesSelected={mockOnFilesSelected}
          disabled={true}
        />
      );
      
      const dropZone = screen.getByRole('button', { name: /upload/i });
      expect(dropZone).toHaveAttribute('tabIndex', '-1');
    });

    it('hides file input from accessibility tree', () => {
      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      
      const fileInput = document.querySelector('input[type="file"]');
      expect(fileInput).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Encryption and Silent Unlocking', () => {
    it('silently unlocks PDFs that only have owner restrictions (e.g. bank statements)', async () => {
      vi.mocked(PDFDocument.load).mockRejectedValue(
        new Error('Input document to load is encrypted. You must provide a password to decrypt it.')
      );

      const mockUnlockedBlob = new Blob(['unlocked content'], { type: 'application/pdf' });
      vi.mocked(decryptPDF).mockResolvedValue({
        success: true,
        result: mockUnlockedBlob,
      });

      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      const bankStatement = new File(['%PDF-1.4 restricted'], 'bank_statement.pdf', {
        type: 'application/pdf',
      });

      Object.defineProperty(fileInput, 'files', {
        value: [bankStatement],
        writable: true,
      });
      fireEvent.change(fileInput);

      await waitFor(() => {
        expect(mockOnFilesSelected).toHaveBeenCalled();
      });

      expect(PDFDocument.load).toHaveBeenCalled();
      expect(decryptPDF).toHaveBeenCalled();

      const calledFiles = mockOnFilesSelected.mock.calls[0][0];
      expect(calledFiles).toHaveLength(1);
      expect(calledFiles[0].name).toBe('bank_statement.pdf');
      expect(screen.queryByText(/This Document is Encrypted/i)).not.toBeInTheDocument();
    });

    it('prompts password modal when silent unlock fails (true user password protected)', async () => {
      vi.mocked(PDFDocument.load).mockRejectedValue(
        new Error('Input document to load is encrypted. You must provide a password to decrypt it.')
      );

      vi.mocked(decryptPDF).mockResolvedValue({
        success: false,
        error: { code: 'PDF_ENCRYPTED', message: 'INVALID_PASSWORD' } as any,
      });

      render(<FileUploader onFilesSelected={mockOnFilesSelected} />);
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;

      const securePdf = new File(['%PDF-1.4 locked'], 'confidential.pdf', {
        type: 'application/pdf',
      });

      Object.defineProperty(fileInput, 'files', {
        value: [securePdf],
        writable: true,
      });
      fireEvent.change(fileInput);

      await waitFor(() => {
        const passInput = document.querySelector('input[type="password"]');
        expect(passInput).not.toBeNull();
      });

      // Files should not be selected yet
      expect(mockOnFilesSelected).not.toHaveBeenCalled();
    });
  });
});

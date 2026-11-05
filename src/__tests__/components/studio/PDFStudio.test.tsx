import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import { PDFStudio } from '@/components/studio/PDFStudio';
import * as tauriBridge from '@/lib/tauri-bridge';
import * as studioProcessors from '@/components/studio/studio-processors';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

// Mock path util
vi.mock('@/lib/utils/path', () => ({
  withBasePath: (path: string) => path,
}));

// Mock tauri-bridge
vi.mock('@/lib/tauri-bridge', () => ({
  isTauri: vi.fn(() => false),
  saveBlobFile: vi.fn().mockResolvedValue(true),
  getSystemPrinters: vi.fn().mockResolvedValue([]),
  printPdfFile: vi.fn().mockResolvedValue(true),
}));

const originalCreateObjectURL = URL.createObjectURL;
const originalRevokeObjectURL = URL.revokeObjectURL;

describe('PDFStudio Component', () => {
  beforeEach(() => {
    localStorage.clear();
    URL.createObjectURL = vi.fn(() => 'blob:mock-studio-url');
    URL.revokeObjectURL = vi.fn();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
    URL.createObjectURL = originalCreateObjectURL;
    URL.revokeObjectURL = originalRevokeObjectURL;
    cleanup();
  });

  const createDummyPdfFile = (name = 'test-doc.pdf') => {
    return new File(['%PDF-1.4 dummy content'], name, { type: 'application/pdf' });
  };

  it('renders initial empty workspace with upload dropzone and classic grid switch link in Chinese', () => {
    render(<PDFStudio locale="zh" />);

    expect(screen.getByText(/PDFCraft/i)).toBeInTheDocument();
    expect(screen.getByText(/导入 PDF 开启 Studio 工作台/i)).toBeInTheDocument();
    expect(screen.getByText(/选择 PDF 文件/i)).toBeInTheDocument();
    expect(screen.getByText(/经典网格视图/i)).toBeInTheDocument();
  });

  it('defaults to English when locale prop is omitted or unsupported', () => {
    render(<PDFStudio />);

    expect(screen.getByText(/PDFCraft/i)).toBeInTheDocument();
    expect(screen.getByText(/Import PDF to Launch Studio Workspace/i)).toBeInTheDocument();
    expect(screen.getByText(/Select PDF Files/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to All Tools/i)).toBeInTheDocument();
  });

  it('renders English UI when locale="en" with initialFile', () => {
    const file = createDummyPdfFile('my-invoice.pdf');
    render(<PDFStudio locale="en" initialFile={file} />);

    expect(screen.getByText('my-invoice.pdf')).toBeInTheDocument();
    expect(screen.getByText('Print')).toBeInTheDocument();
    expect(screen.getByText('Save & Export')).toBeInTheDocument();
  });

  it('renders central viewer and toolbar controls when loaded with initialFile', () => {
    const file = createDummyPdfFile('my-invoice.pdf');
    render(<PDFStudio locale="zh" initialFile={file} />);

    // Shows file name in header
    expect(screen.getByText('my-invoice.pdf')).toBeInTheDocument();

    // Undo and Redo buttons exist and disabled initially
    const undoBtn = screen.getByLabelText('Undo');
    const redoBtn = screen.getByLabelText('Redo');
    expect(undoBtn).toBeDisabled();
    expect(redoBtn).toBeDisabled();

    // Print and Export buttons
    expect(screen.getByText('打印')).toBeInTheDocument();
    expect(screen.getByText('保存导出')).toBeInTheDocument();

    // Iframe with viewer src and title matching file name
    const iframe = screen.getByTitle('my-invoice.pdf');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', expect.stringContaining('viewer.html'));
  });

  it('collapses and expands left toolbar rail', () => {
    const file = createDummyPdfFile();
    render(<PDFStudio locale="zh" initialFile={file} />);

    const collapseBtn = screen.getByLabelText('Collapse sidebar');
    fireEvent.click(collapseBtn);

    // After collapsing, button should have Expand sidebar label
    expect(screen.getByLabelText('Expand sidebar')).toBeInTheDocument();

    // Expand again
    const expandBtn = screen.getByLabelText('Expand sidebar');
    fireEvent.click(expandBtn);
    expect(screen.getByLabelText('Collapse sidebar')).toBeInTheDocument();
  });

  it('opens tool drawer when clicking a tool icon on the left rail', () => {
    const file = createDummyPdfFile();
    render(<PDFStudio locale="zh" initialFile={file} />);

    // Click rotate tool (matches 旋转PDF in featured)
    const rotateBtn = screen.getAllByRole('button', { name: /旋转/i })[0];
    fireEvent.click(rotateBtn);

    // Tool drawer should open with Apply button and Cancel button
    expect(screen.getByText('应用更改')).toBeInTheDocument();
    expect(screen.getByText('取消')).toBeInTheDocument();

    // Click cancel in drawer
    const cancelBtn = screen.getByText('取消');
    fireEvent.click(cancelBtn);
    expect(screen.queryByText('应用更改')).not.toBeInTheDocument();
  });

  it('executes operation, updates history stack, enables undo and export', async () => {
    const mockOutputBlob = new Blob(['%PDF-1.4 modified'], { type: 'application/pdf' });
    vi.spyOn(studioProcessors, 'executeStudioOperation').mockResolvedValue(mockOutputBlob);

    const file = createDummyPdfFile('sample.pdf');
    render(<PDFStudio locale="zh" initialFile={file} />);

    // Open Rotate tool
    const rotateBtn = screen.getAllByRole('button', { name: /旋转/i })[0];
    fireEvent.click(rotateBtn);

    // Click Apply
    const applyBtn = screen.getByText('应用更改');
    fireEvent.click(applyBtn);

    // Wait for operation to complete
    await waitFor(() => {
      expect(studioProcessors.executeStudioOperation).toHaveBeenCalled();
    });

    // Undo button should now be enabled
    const undoBtn = screen.getByLabelText('Undo');
    await waitFor(() => {
      expect(undoBtn).not.toBeDisabled();
    });

    // Click Undo
    fireEvent.click(undoBtn);

    // Redo button should now be enabled
    const redoBtn = screen.getByLabelText('Redo');
    await waitFor(() => {
      expect(redoBtn).not.toBeDisabled();
    });

    // Export document
    const exportBtn = screen.getByText('保存导出');
    fireEvent.click(exportBtn);

    await waitFor(() => {
      expect(tauriBridge.saveBlobFile).toHaveBeenCalled();
    });
  });

  it('filters tools by search query in the left rail', () => {
    const file = createDummyPdfFile();
    render(<PDFStudio locale="zh" initialFile={file} />);

    const searchInput = screen.getByPlaceholderText(/搜索全部 67\+ 工具/i);
    fireEvent.change(searchInput, { target: { value: '水印' } });

    // Should find matching tools
    expect(screen.getByText(/找到/i)).toBeInTheDocument();
    expect(screen.getByText(/添加水印/i)).toBeInTheDocument();
  });

  it('handles export convert tools without altering central PDF viewer', async () => {
    const mockExportBlob = new Blob(['dummy docx'], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    vi.spyOn(studioProcessors, 'executeStudioExport').mockResolvedValue({
      blob: mockExportBlob,
      filename: 'sample_converted.docx',
    });

    const file = createDummyPdfFile('sample.pdf');
    render(<PDFStudio locale="zh" initialFile={file} />);

    // Filter for Word tool
    const searchInput = screen.getByPlaceholderText(/搜索全部 67\+ 工具/i);
    fireEvent.change(searchInput, { target: { value: 'Word' } });

    // Click PDF to Word
    const wordToolBtn = screen.getByRole('button', { name: /PDF转Word/i });
    fireEvent.click(wordToolBtn);

    // Drawer opens with export button
    const exportBtn = screen.getByText('开始导出');
    expect(exportBtn).toBeInTheDocument();
    fireEvent.click(exportBtn);

    await waitFor(() => {
      expect(studioProcessors.executeStudioExport).toHaveBeenCalled();
      expect(tauriBridge.saveBlobFile).toHaveBeenCalledWith(
        mockExportBlob,
        'sample_converted.docx'
      );
    });

    // Original iframe is still present and valid
    expect(screen.getByTitle('sample.pdf')).toBeInTheDocument();
  });

  it('toggles favorite tools and filters via favorites pill', () => {
    const file = createDummyPdfFile();
    render(<PDFStudio locale="zh" initialFile={file} />);

    // Find favorite button for rotate tool
    const favButtons = screen.getAllByTitle('添加收藏');
    expect(favButtons.length).toBeGreaterThan(0);
    fireEvent.click(favButtons[0]);

    // Check filter pill for favorites
    const favPill = screen.getByTestId('filter-pill-favorites');
    fireEvent.click(favPill);

    // Should show at least 1 tool in favorites
    expect(screen.getByText(/找到/i)).toBeInTheDocument();
  });

  it('opens history timeline popover and split export dropdown', async () => {
    const mockOutputBlob = new Blob(['%PDF-1.4 modified'], { type: 'application/pdf' });
    vi.spyOn(studioProcessors, 'executeStudioOperation').mockResolvedValue(mockOutputBlob);

    const file = createDummyPdfFile('history-doc.pdf');
    render(<PDFStudio locale="zh" initialFile={file} />);

    // Apply a tool to build history
    const rotateBtn = screen.getAllByRole('button', { name: /旋转/i })[0];
    fireEvent.click(rotateBtn);
    fireEvent.click(screen.getByText('应用更改'));

    await waitFor(() => {
      expect(studioProcessors.executeStudioOperation).toHaveBeenCalled();
    });

    // Open history popover
    const historyBadge = screen.getByTitle('查看操作历史记录');
    fireEvent.click(historyBadge);
    expect(screen.getByText('操作历史时间线')).toBeInTheDocument();

    // Open export dropdown
    const moreExportBtn = screen.getByLabelText('More export formats');
    fireEvent.click(moreExportBtn);
    expect(screen.getByText(/导出为 Word/i)).toBeInTheDocument();
    expect(screen.getByText(/导出为图片包/i)).toBeInTheDocument();
  });

  it('renders non-scrolling two-tier filter controls and toggles category filters', () => {
    const file = createDummyPdfFile();
    render(<PDFStudio locale="zh" initialFile={file} />);

    // Tier 1 pills
    expect(screen.getByTestId('filter-pill-all')).toBeInTheDocument();
    expect(screen.getByTestId('filter-pill-featured')).toBeInTheDocument();
    expect(screen.getByTestId('filter-pill-favorites')).toBeInTheDocument();
    expect(screen.getByTestId('filter-pill-recent')).toBeInTheDocument();

    // Tier 2 category pills
    const orgPill = screen.getByTestId('filter-pill-organize-manage');
    expect(orgPill).toBeInTheDocument();

    // Click category pill to filter
    fireEvent.click(orgPill);
    expect(screen.getByText(/找到/i)).toBeInTheDocument();

    // Click again to toggle back to all
    fireEvent.click(orgPill);
    expect(screen.getByText(/按大类浏览/i)).toBeInTheDocument();
  });

  it('supports multi-document tabs, switching active document, and batch ZIP export', async () => {
    const file1 = createDummyPdfFile('contract_part1.pdf');
    const file2 = createDummyPdfFile('contract_part2.pdf');

    render(<PDFStudio locale="zh" />);

    // Batch load multiple files via file input in empty workspace
    const uploadInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    expect(uploadInput).toBeInTheDocument();

    fireEvent.change(uploadInput, {
      target: { files: [file1, file2] },
    });

    // Both tabs should now be rendered in the document tabs bar
    await waitFor(() => {
      expect(screen.getByText('contract_part1.pdf')).toBeInTheDocument();
      expect(screen.getByText('contract_part2.pdf')).toBeInTheDocument();
    });

    // Currently active viewer iframe should be the first document
    expect(screen.getByTitle('contract_part1.pdf')).toBeInTheDocument();

    // Click the second tab to switch active document
    const tab2 = screen.getByText('contract_part2.pdf');
    fireEvent.click(tab2);

    // Active viewer iframe should now switch to contract_part2.pdf
    await waitFor(() => {
      expect(screen.getByTitle('contract_part2.pdf')).toBeInTheDocument();
    });

    // Open export dropdown - should show batch export option for 2 documents
    const moreExportBtn = screen.getByLabelText('More export formats');
    fireEvent.click(moreExportBtn);
    expect(screen.getByText(/打包导出全部文档 \(2篇 \.zip\)/i)).toBeInTheDocument();

    // Open Merge PDF tool - drawer should show contract_part1.pdf as quick-add option
    const searchInput = screen.getByPlaceholderText(/搜索全部 67\+ 工具/i);
    fireEvent.change(searchInput, { target: { value: '合并' } });

    const mergeBtn = screen.getByTestId('tool-item-merge-pdf');
    fireEvent.click(mergeBtn);

    // Check quick add button exists for the other open document
    expect(screen.getByText(/快捷并入工作台中已打开的文档/i)).toBeInTheDocument();

    // Close the second tab
    const closeBtn2 = screen.getByLabelText('Close contract_part2.pdf');
    fireEvent.click(closeBtn2);

    // After closing tab 2, active document reverts to contract_part1.pdf
    await waitFor(() => {
      expect(screen.queryByTitle('contract_part2.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('contract_part1.pdf')).toBeInTheDocument();
    });
  });

  it('renders rich parameters in tool drawer for extract-pages, decrypt-pdf, and n-up-pdf', async () => {
    const file = createDummyPdfFile('test-tools.pdf');
    render(<PDFStudio locale="zh" initialFile={file} />);

    const searchInput = screen.getByPlaceholderText(/搜索全部 67\+ 工具/i);

    // 1. Check extract-pages parameters
    fireEvent.change(searchInput, { target: { value: '提取页面' } });
    const extractBtn = screen.getByTestId('tool-item-extract-pages');
    fireEvent.click(extractBtn);

    expect(screen.getByText(/提取页码范围/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('1-3, 5')).toBeInTheDocument();

    // 2. Check decrypt-pdf parameters
    fireEvent.change(searchInput, { target: { value: '解密' } });
    const decryptBtn = screen.getByTestId('tool-item-decrypt-pdf');
    fireEvent.click(decryptBtn);

    expect(screen.getByText(/文档密码 \/ 口令/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/若有打开密码请输入/i)).toBeInTheDocument();

    // 3. Check n-up-pdf parameters
    fireEvent.change(searchInput, { target: { value: '多页' } });
    const nUpBtn = screen.getByTestId('tool-item-n-up-pdf');
    fireEvent.click(nUpBtn);

    expect(screen.getByText(/每张纸拼排页数/i)).toBeInTheDocument();
    expect(screen.getByText('2-Up')).toBeInTheDocument();
    expect(screen.getByText('4-Up')).toBeInTheDocument();
  });

  describe('Document Tab Cycling Keyboard Shortcuts', () => {
    const setupThreeDocs = () => {
      const file1 = createDummyPdfFile('doc1.pdf');
      const file2 = createDummyPdfFile('doc2.pdf');
      const file3 = createDummyPdfFile('doc3.pdf');
      render(<PDFStudio locale="en" />);
      const uploadInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      fireEvent.change(uploadInput, {
        target: { files: [file1, file2, file3] },
      });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      return { file1, file2, file3 };
    };

    it('cycles forward with Ctrl+PageDown and Alt+] sequentially and wraps around', () => {
      setupThreeDocs();

      // Forward 1: doc1 -> doc2 with Ctrl+PageDown
      fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();

      // Forward 2: doc2 -> doc3 with Alt+]
      fireEvent.keyDown(window, { key: ']', altKey: true });
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();

      // Forward wrap-around: doc3 -> doc1 with Ctrl+PageDown
      fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc3.pdf')).not.toBeInTheDocument();
    });

    it('cycles backward with Ctrl+PageUp and Alt+[ sequentially and wraps around', () => {
      setupThreeDocs();

      // Backward wrap-around from first: doc1 -> doc3 with Ctrl+PageUp
      fireEvent.keyDown(window, { key: 'PageUp', code: 'PageUp', ctrlKey: true });
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();

      // Backward 1: doc3 -> doc2 with Alt+[
      fireEvent.keyDown(window, { key: '[', altKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc3.pdf')).not.toBeInTheDocument();

      // Backward 2: doc2 -> doc1 with Ctrl+PageUp
      fireEvent.keyDown(window, { key: 'PageUp', code: 'PageUp', ctrlKey: true });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();
    });

    it('cycles forward with Ctrl+Tab and backward with Shift+Ctrl+Tab in Tauri desktop environment', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
      setupThreeDocs();

      // Ctrl+Tab forward: doc1 -> doc2
      fireEvent.keyDown(window, { key: 'Tab', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Ctrl+Tab forward: doc2 -> doc3
      fireEvent.keyDown(window, { key: 'Tab', ctrlKey: true });
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

      // Ctrl+Tab forward wrap: doc3 -> doc1
      fireEvent.keyDown(window, { key: 'Tab', ctrlKey: true });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();

      // Shift+Ctrl+Tab backward wrap: doc1 -> doc3
      fireEvent.keyDown(window, { key: 'Tab', ctrlKey: true, shiftKey: true });
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

      // Shift+Ctrl+Tab backward: doc3 -> doc2
      fireEvent.keyDown(window, { key: 'Tab', ctrlKey: true, shiftKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });

    it('does not cycle with Ctrl+Tab in standard web browser environment (prevents browser tab clash)', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
      setupThreeDocs();

      // Ctrl+Tab should be ignored in web mode
      fireEvent.keyDown(window, { key: 'Tab', ctrlKey: true });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();

      // Shift+Ctrl+Tab should also be ignored in web mode
      fireEvent.keyDown(window, { key: 'Tab', ctrlKey: true, shiftKey: true });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
    });

    it('cycles forward and backward on macOS with Cmd+Shift+] and Cmd+Shift+[', () => {
      const originalPlatform = navigator.platform;
      try {
        Object.defineProperty(navigator, 'platform', {
          value: 'MacIntel',
          configurable: true,
        });

        setupThreeDocs();

        // Cmd+Shift+] forward: doc1 -> doc2
        fireEvent.keyDown(window, { key: ']', metaKey: true, shiftKey: true });
        expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

        // Cmd+Shift+] forward: doc2 -> doc3
        fireEvent.keyDown(window, { key: ']', metaKey: true, shiftKey: true });
        expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

        // Cmd+Shift+[ backward: doc3 -> doc2
        fireEvent.keyDown(window, { key: '[', metaKey: true, shiftKey: true });
        expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

        // Also test with '}' and '{' keys (real keyboard layout shift output)
        fireEvent.keyDown(window, { key: '}', code: 'BracketRight', metaKey: true, shiftKey: true });
        expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

        fireEvent.keyDown(window, { key: '{', code: 'BracketLeft', metaKey: true, shiftKey: true });
        expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
      } finally {
        Object.defineProperty(navigator, 'platform', {
          value: originalPlatform,
          configurable: true,
        });
      }
    });

    it('dismisses active tool drawer when cycling document tabs', () => {
      setupThreeDocs();

      // Open a tool drawer on doc1
      const rotateBtn = screen.getAllByRole('button', { name: /旋转|Rotate/i })[0];
      fireEvent.click(rotateBtn);
      expect(screen.getByText(/应用更改|Apply Changes/i)).toBeInTheDocument();

      // Cycle to next document
      fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Active tool drawer must be dismissed
      expect(screen.queryByText(/应用更改|Apply Changes/i)).not.toBeInTheDocument();
    });

    it('safely performs no-op when single document is loaded', () => {
      const file = createDummyPdfFile('single.pdf');
      render(<PDFStudio locale="en" initialFile={file} />);

      expect(screen.getByTitle('single.pdf')).toBeInTheDocument();

      // Cycle forward and backward
      fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('single.pdf')).toBeInTheDocument();

      fireEvent.keyDown(window, { key: 'PageUp', code: 'PageUp', ctrlKey: true });
      expect(screen.getByTitle('single.pdf')).toBeInTheDocument();
    });

    it('safely performs no-op when no documents are loaded (empty workspace)', () => {
      render(<PDFStudio locale="en" />);

      // Cycle on empty workspace should not throw
      expect(() => {
        fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
        fireEvent.keyDown(window, { key: 'PageUp', code: 'PageUp', ctrlKey: true });
      }).not.toThrow();
    });

    it('suppresses tab cycling when isApplying is true', async () => {
      let resolveOperation: (blob: Blob) => void = () => {};
      const pendingPromise = new Promise<Blob>((resolve) => {
        resolveOperation = resolve;
      });
      vi.spyOn(studioProcessors, 'executeStudioOperation').mockImplementation(() => pendingPromise);

      setupThreeDocs();

      // Open tool and trigger apply
      const rotateBtn = screen.getAllByRole('button', { name: /旋转|Rotate/i })[0];
      fireEvent.click(rotateBtn);
      const applyBtn = screen.getByText(/应用更改|Apply Changes/i);
      fireEvent.click(applyBtn);

      // Processing overlay should appear
      await waitFor(() => {
        expect(screen.getByText(/正在就地处理文档|Processing document in-place/i)).toBeInTheDocument();
      });

      // Try cycling forward while applying
      fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      // Should still be doc1.pdf!
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();

      // Finish operation
      resolveOperation(new Blob(['%PDF-1.4 done'], { type: 'application/pdf' }));
      await waitFor(() => {
        expect(screen.queryByText(/正在就地处理文档|Processing document in-place/i)).not.toBeInTheDocument();
      });

      // Now cycling works again
      fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });

    it('allows tab cycling even when an input element is focused', () => {
      setupThreeDocs();

      const searchInput = screen.getByTestId('studio-tool-search');
      searchInput.focus();
      expect(document.activeElement).toBe(searchInput);

      // Cycle forward while focused inside input
      fireEvent.keyDown(searchInput, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });
  });

  describe('Active Document Tab Closing Shortcuts', () => {
    beforeEach(() => {
      vi.spyOn(window, 'confirm').mockImplementation(() => true);
    });

    const setupThreeDocs = () => {
      const file1 = createDummyPdfFile('doc1.pdf');
      const file2 = createDummyPdfFile('doc2.pdf');
      const file3 = createDummyPdfFile('doc3.pdf');
      render(<PDFStudio locale="en" />);
      const uploadInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      fireEvent.change(uploadInput, {
        target: { files: [file1, file2, file3] },
      });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      return { file1, file2, file3 };
    };

    it('closes active document tab with Ctrl+F4 in web mode', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
      setupThreeDocs();

      // Ctrl+F4 closes active doc1.pdf
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });

    it('closes active document tab with Ctrl+W in Tauri desktop environment on Windows/Linux', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
      setupThreeDocs();

      // Ctrl+W closes active doc1.pdf
      fireEvent.keyDown(window, { key: 'w', code: 'KeyW', ctrlKey: true });
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Ctrl+W again closes active doc2.pdf
      fireEvent.keyDown(window, { key: 'w', code: 'KeyW', ctrlKey: true });
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();
    });

    it('does not close active document tab with Ctrl+W in web browser mode (prevents native browser hijack)', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
      setupThreeDocs();

      // Ctrl+W in web should be ignored
      fireEvent.keyDown(window, { key: 'w', code: 'KeyW', ctrlKey: true });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      expect(screen.getByText('doc2.pdf')).toBeInTheDocument();
      expect(screen.getByText('doc3.pdf')).toBeInTheDocument();
    });

    it('closes active document tab with Cmd+W in Tauri desktop environment on macOS', () => {
      const originalPlatform = navigator.platform;
      try {
        Object.defineProperty(navigator, 'platform', {
          value: 'MacIntel',
          configurable: true,
        });
        vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);

        setupThreeDocs();

        // Cmd+W closes active doc1.pdf on macOS desktop
        fireEvent.keyDown(window, { key: 'w', code: 'KeyW', metaKey: true });
        expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();
        expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
      } finally {
        Object.defineProperty(navigator, 'platform', {
          value: originalPlatform,
          configurable: true,
        });
      }
    });

    it('does not close active tab with Cmd+W in web mode on macOS', () => {
      const originalPlatform = navigator.platform;
      try {
        Object.defineProperty(navigator, 'platform', {
          value: 'MacIntel',
          configurable: true,
        });
        vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);

        setupThreeDocs();

        // Cmd+W in macOS web should not be intercepted
        fireEvent.keyDown(window, { key: 'w', code: 'KeyW', metaKey: true });
        expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      } finally {
        Object.defineProperty(navigator, 'platform', {
          value: originalPlatform,
          configurable: true,
        });
      }
    });

    it('determines next active tab according to Math.min(closedIndex, remainingCount - 1)', () => {
      setupThreeDocs();

      // Cycle to middle tab: doc2.pdf (closedIndex = 1)
      fireEvent.keyDown(window, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Close middle tab: remainingCount is 2, nextIndex = Math.min(1, 1) = 1 -> doc3.pdf
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

      // Now active is doc3.pdf which is at index 1 in [doc1, doc3]
      // Close last tab: remainingCount is 1, nextIndex = Math.min(1, 0) = 0 -> doc1.pdf
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.queryByTitle('doc3.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
    });

    it('transitions to empty dropzone when the sole remaining document is closed', () => {
      const file = createDummyPdfFile('only.pdf');
      render(<PDFStudio locale="en" initialFile={file} />);

      expect(screen.getByTitle('only.pdf')).toBeInTheDocument();

      // Close sole document with Ctrl+F4
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });

      // Document removed and empty dropzone visible
      expect(screen.queryByTitle('only.pdf')).not.toBeInTheDocument();
      expect(screen.getByText('Import PDF to Launch Studio Workspace')).toBeInTheDocument();
    });

    it('prompts confirmation when closing modified document and respects cancellation', async () => {
      const confirmSpy = vi.spyOn(window, 'confirm');
      setupThreeDocs();

      // Modify doc1 by applying a tool operation
      const rotateBtn = screen.getAllByRole('button', { name: /Rotate/i })[0];
      fireEvent.click(rotateBtn);
      const applyBtn = screen.getByText('Apply Changes');
      fireEvent.click(applyBtn);

      await waitFor(() => {
        expect(studioProcessors.executeStudioOperation).toHaveBeenCalled();
      });

      // 1. User cancels prompt
      confirmSpy.mockReturnValueOnce(false);
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });

      expect(confirmSpy).toHaveBeenCalled();
      // doc1.pdf should NOT be closed
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();

      // 2. User confirms prompt
      confirmSpy.mockReturnValueOnce(true);
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });

      // doc1.pdf should be closed and doc2.pdf active
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });

    it('suppresses tab closure when isApplying is true', async () => {
      let resolveOperation: (blob: Blob) => void = () => {};
      const pendingPromise = new Promise<Blob>((resolve) => {
        resolveOperation = resolve;
      });
      vi.spyOn(studioProcessors, 'executeStudioOperation').mockImplementation(() => pendingPromise);

      setupThreeDocs();

      // Start applying operation
      const rotateBtn = screen.getAllByRole('button', { name: /Rotate/i })[0];
      fireEvent.click(rotateBtn);
      const applyBtn = screen.getByText('Apply Changes');
      fireEvent.click(applyBtn);

      await waitFor(() => {
        expect(screen.getByText('Processing document in-place...')).toBeInTheDocument();
      });

      // Try closing active tab while processing
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();

      // Finish operation
      resolveOperation(new Blob(['%PDF-1.4 done'], { type: 'application/pdf' }));
      await waitFor(() => {
        expect(screen.queryByText('Processing document in-place...')).not.toBeInTheDocument();
      });

      // Tab closure now works
      fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });

    it('allows tab closure when an input element is focused', () => {
      setupThreeDocs();

      const searchInput = screen.getByTestId('studio-tool-search');
      searchInput.focus();
      expect(document.activeElement).toBe(searchInput);

      // Close while focused in input
      fireEvent.keyDown(searchInput, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });

    it('safely performs no-op when no documents are loaded', () => {
      render(<PDFStudio locale="en" />);

      expect(() => {
        fireEvent.keyDown(window, { key: 'F4', code: 'F4', ctrlKey: true });
        fireEvent.keyDown(window, { key: 'w', code: 'KeyW', ctrlKey: true });
      }).not.toThrow();
    });
  });

  describe('PDF Viewer Iframe Keystroke Relay Bridge & Focus Resilience', () => {
    beforeEach(() => {
      vi.spyOn(window, 'confirm').mockImplementation(() => true);
    });

    const setupThreeDocs = () => {
      const file1 = createDummyPdfFile('doc1.pdf');
      const file2 = createDummyPdfFile('doc2.pdf');
      const file3 = createDummyPdfFile('doc3.pdf');
      render(<PDFStudio locale="en" />);
      const uploadInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      fireEvent.change(uploadInput, {
        target: { files: [file1, file2, file3] },
      });
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      return { file1, file2, file3 };
    };

    it('relays tab navigation shortcuts originating from iframe contentWindow or document to parent Studio', () => {
      setupThreeDocs();

      const iframe = screen.getByTitle('doc1.pdf') as HTMLIFrameElement;
      expect(iframe).toBeInTheDocument();
      expect(iframe.contentWindow).toBeTruthy();

      // Trigger keydown on iframe.contentWindow (e.g. user focused inside PDF viewer)
      fireEvent.keyDown(iframe.contentWindow!, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Trigger keydown on new active document's iframe.contentDocument
      const iframe2 = screen.getByTitle('doc2.pdf') as HTMLIFrameElement;
      fireEvent.keyDown(iframe2.contentDocument!, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

      // Backward navigation via Ctrl+PageUp from iframe contentWindow
      const iframe3 = screen.getByTitle('doc3.pdf') as HTMLIFrameElement;
      fireEvent.keyDown(iframe3.contentWindow!, { key: 'PageUp', code: 'PageUp', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();
    });

    it('relays tab closure shortcuts originating from iframe contentWindow or document to parent Studio', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
      setupThreeDocs();

      const iframe1 = screen.getByTitle('doc1.pdf') as HTMLIFrameElement;

      // Close active doc1 with Ctrl+F4 from iframe.contentWindow
      fireEvent.keyDown(iframe1.contentWindow!, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.queryByTitle('doc1.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Close active doc2 with Ctrl+W in Tauri from iframe.contentWindow
      const iframe2 = screen.getByTitle('doc2.pdf') as HTMLIFrameElement;
      fireEvent.keyDown(iframe2.contentWindow!, { key: 'w', code: 'KeyW', ctrlKey: true });
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();
    });

    it('cleans up iframe event listener on unmount and active document change without memory leak', () => {
      const file = createDummyPdfFile('test-clean.pdf');
      const { unmount } = render(<PDFStudio locale="en" initialFile={file} />);

      const iframe = screen.getByTitle('test-clean.pdf') as HTMLIFrameElement;
      expect(iframe.contentWindow).toBeTruthy();

      const removeEventListenerSpy = vi.spyOn(iframe.contentWindow!, 'removeEventListener');

      // Unmount the component
      unmount();

      // The keydown listener on iframe contentWindow should have been cleaned up
      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    });

    it('cleans up previous listener when iframe reloads or onLoad fires repeatedly', () => {
      const file = createDummyPdfFile('test-reload.pdf');
      render(<PDFStudio locale="en" initialFile={file} />);

      const iframe = screen.getByTitle('test-reload.pdf') as HTMLIFrameElement;
      const removeSpy = vi.spyOn(iframe.contentWindow!, 'removeEventListener');
      const addSpy = vi.spyOn(iframe.contentWindow!, 'addEventListener');

      // Trigger iframe load event (simulating iframe reload)
      fireEvent.load(iframe);

      // Verify remove was called before adding new listener, preventing listener accumulation
      expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
      expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    });

    it('executes modifier tab hotkeys (Ctrl+Tab, Ctrl+PageDown, Ctrl+F4, Ctrl+W) when an input element has focus', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
      setupThreeDocs();

      const searchInput = screen.getByTestId('studio-tool-search');
      searchInput.focus();
      expect(document.activeElement).toBe(searchInput);

      // Forward with Ctrl+Tab while input is focused
      fireEvent.keyDown(searchInput, { key: 'Tab', code: 'Tab', ctrlKey: true });
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Forward with Ctrl+PageDown while input is focused
      fireEvent.keyDown(searchInput, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
      expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

      // Close doc3 with Ctrl+W while input is focused
      fireEvent.keyDown(searchInput, { key: 'w', code: 'KeyW', ctrlKey: true });
      expect(screen.queryByTitle('doc3.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

      // Close doc2 with Ctrl+F4 while input is focused
      fireEvent.keyDown(searchInput, { key: 'F4', code: 'F4', ctrlKey: true });
      expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();
      expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
    });

    it('executes modifier tab hotkeys (Ctrl+Tab, Ctrl+PageDown, Ctrl+F4, Ctrl+W) when a textarea element has focus', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
      setupThreeDocs();

      const textarea = document.createElement('textarea');
      textarea.setAttribute('data-testid', 'test-custom-textarea');
      document.body.appendChild(textarea);
      textarea.focus();
      expect(document.activeElement).toBe(textarea);

      try {
        // Forward with Ctrl+Tab while textarea is focused
        fireEvent.keyDown(textarea, { key: 'Tab', code: 'Tab', ctrlKey: true });
        expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

        // Forward with Ctrl+PageDown while textarea is focused
        fireEvent.keyDown(textarea, { key: 'PageDown', code: 'PageDown', ctrlKey: true });
        expect(screen.getByTitle('doc3.pdf')).toBeInTheDocument();

        // Close doc3 with Ctrl+W while textarea is focused
        fireEvent.keyDown(textarea, { key: 'w', code: 'KeyW', ctrlKey: true });
        expect(screen.queryByTitle('doc3.pdf')).not.toBeInTheDocument();
        expect(screen.getByTitle('doc2.pdf')).toBeInTheDocument();

        // Close doc2 with Ctrl+F4 while textarea is focused
        fireEvent.keyDown(textarea, { key: 'F4', code: 'F4', ctrlKey: true });
        expect(screen.queryByTitle('doc2.pdf')).not.toBeInTheDocument();
        expect(screen.getByTitle('doc1.pdf')).toBeInTheDocument();
      } finally {
        document.body.removeChild(textarea);
      }
    });

    it('does not trigger search focus when / is pressed inside an input or textarea', () => {
      setupThreeDocs();

      const searchInput = screen.getByTestId('studio-tool-search');
      const focusSpy = vi.spyOn(searchInput, 'focus');

      // Create a dummy input simulating an input inside the viewer/iframe
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.focus();

      try {
        fireEvent.keyDown(input, { key: '/' });
        expect(focusSpy).not.toHaveBeenCalled();

        // Now test textarea
        const textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.focus();

        try {
          fireEvent.keyDown(textarea, { key: '/' });
          expect(focusSpy).not.toHaveBeenCalled();
        } finally {
          document.body.removeChild(textarea);
        }
      } finally {
        document.body.removeChild(input);
      }
    });

    it('focuses search input when / is pressed outside of input and textarea elements', () => {
      setupThreeDocs();

      const searchInput = screen.getByTestId('studio-tool-search');
      const focusSpy = vi.spyOn(searchInput, 'focus');

      // Focus on document body / window
      document.body.focus();
      fireEvent.keyDown(window, { key: '/' });

      expect(focusSpy).toHaveBeenCalled();
    });
  });

  describe('UI Shortcut Tooltip Hints & Accessibility Affordances', () => {
    const originalPlatform = navigator.platform;
    const originalUserAgent = navigator.userAgent;

    afterEach(() => {
      Object.defineProperty(navigator, 'platform', {
        value: originalPlatform,
        configurable: true,
      });
      Object.defineProperty(navigator, 'userAgent', {
        value: originalUserAgent,
        configurable: true,
      });
    });

    it('renders Windows/Linux Desktop shortcut tooltips in English and Chinese', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
      Object.defineProperty(navigator, 'platform', {
        value: 'Win32',
        configurable: true,
      });
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        configurable: true,
      });

      // English
      const { unmount: unmountEn } = render(
        <PDFStudio locale="en" initialFile={createDummyPdfFile('doc-win-en.pdf')} />
      );
      const tabCloseEn = screen.getByLabelText('Close doc-win-en.pdf');
      const headerCloseEn = screen.getByLabelText('Close file');
      expect(tabCloseEn).toHaveAttribute('title', 'Close document (Ctrl+F4 or Ctrl+W)');
      expect(headerCloseEn).toHaveAttribute('title', 'Close document (Ctrl+F4 or Ctrl+W)');
      unmountEn();

      // Chinese
      const { unmount: unmountZh } = render(
        <PDFStudio locale="zh" initialFile={createDummyPdfFile('doc-win-zh.pdf')} />
      );
      const tabCloseZh = screen.getByLabelText('Close doc-win-zh.pdf');
      const headerCloseZh = screen.getByLabelText('Close file');
      expect(tabCloseZh).toHaveAttribute('title', '关闭文档 (Ctrl+F4 / Ctrl+W)');
      expect(headerCloseZh).toHaveAttribute('title', '关闭文档 (Ctrl+F4 / Ctrl+W)');
      unmountZh();
    });

    it('renders Windows/Linux Web shortcut tooltips in English and Chinese', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
      Object.defineProperty(navigator, 'platform', {
        value: 'Linux x86_64',
        configurable: true,
      });
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (X11; Linux x86_64)',
        configurable: true,
      });

      // English
      const { unmount: unmountEn } = render(
        <PDFStudio locale="en" initialFile={createDummyPdfFile('doc-web-en.pdf')} />
      );
      const tabCloseEn = screen.getByLabelText('Close doc-web-en.pdf');
      const headerCloseEn = screen.getByLabelText('Close file');
      expect(tabCloseEn).toHaveAttribute('title', 'Close document (Ctrl+F4)');
      expect(headerCloseEn).toHaveAttribute('title', 'Close document (Ctrl+F4)');
      unmountEn();

      // Chinese
      const { unmount: unmountZh } = render(
        <PDFStudio locale="zh" initialFile={createDummyPdfFile('doc-web-zh.pdf')} />
      );
      const tabCloseZh = screen.getByLabelText('Close doc-web-zh.pdf');
      const headerCloseZh = screen.getByLabelText('Close file');
      expect(tabCloseZh).toHaveAttribute('title', '关闭文档 (Ctrl+F4)');
      expect(headerCloseZh).toHaveAttribute('title', '关闭文档 (Ctrl+F4)');
      unmountZh();
    });

    it('renders macOS Desktop shortcut tooltips in English and Chinese', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(true);
      Object.defineProperty(navigator, 'platform', {
        value: 'MacIntel',
        configurable: true,
      });
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        configurable: true,
      });

      // English
      const { unmount: unmountEn } = render(
        <PDFStudio locale="en" initialFile={createDummyPdfFile('doc-mac-en.pdf')} />
      );
      const tabCloseEn = screen.getByLabelText('Close doc-mac-en.pdf');
      const headerCloseEn = screen.getByLabelText('Close file');
      expect(tabCloseEn).toHaveAttribute('title', 'Close document (Cmd+W)');
      expect(headerCloseEn).toHaveAttribute('title', 'Close document (Cmd+W)');
      unmountEn();

      // Chinese
      const { unmount: unmountZh } = render(
        <PDFStudio locale="zh" initialFile={createDummyPdfFile('doc-mac-zh.pdf')} />
      );
      const tabCloseZh = screen.getByLabelText('Close doc-mac-zh.pdf');
      const headerCloseZh = screen.getByLabelText('Close file');
      expect(tabCloseZh).toHaveAttribute('title', '关闭文档 (Cmd+W)');
      expect(headerCloseZh).toHaveAttribute('title', '关闭文档 (Cmd+W)');
      unmountZh();
    });

    it('renders macOS Web shortcut tooltips in English and Chinese', () => {
      vi.spyOn(tauriBridge, 'isTauri').mockReturnValue(false);
      Object.defineProperty(navigator, 'platform', {
        value: 'MacIntel',
        configurable: true,
      });
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        configurable: true,
      });

      // English
      const { unmount: unmountEn } = render(
        <PDFStudio locale="en" initialFile={createDummyPdfFile('doc-macweb-en.pdf')} />
      );
      const tabCloseEn = screen.getByLabelText('Close doc-macweb-en.pdf');
      const headerCloseEn = screen.getByLabelText('Close file');
      expect(tabCloseEn).toHaveAttribute('title', 'Close document (Ctrl+F4)');
      expect(headerCloseEn).toHaveAttribute('title', 'Close document (Ctrl+F4)');
      unmountEn();

      // Chinese
      const { unmount: unmountZh } = render(
        <PDFStudio locale="zh" initialFile={createDummyPdfFile('doc-macweb-zh.pdf')} />
      );
      const tabCloseZh = screen.getByLabelText('Close doc-macweb-zh.pdf');
      const headerCloseZh = screen.getByLabelText('Close file');
      expect(tabCloseZh).toHaveAttribute('title', '关闭文档 (Ctrl+F4)');
      expect(headerCloseZh).toHaveAttribute('title', '关闭文档 (Ctrl+F4)');
      unmountZh();
    });
  });
});




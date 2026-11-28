import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import { StudioToolDrawer } from '@/components/studio/StudioToolDrawer';

describe('StudioToolDrawer - Full Tool Parameters Alignment', () => {
  const onApplyMock = vi.fn().mockResolvedValue(undefined);
  const onExportMock = vi.fn().mockResolvedValue(undefined);
  const onCloseMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders split-pdf with full options (ranges, everyN, all, evenOdd)', async () => {
    render(
      <StudioToolDrawer
        toolId="split-pdf"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
        totalPages={10}
      />
    );

    expect(screen.getByText('拆分模式')).toBeInTheDocument();
    expect(screen.getByText('自定义区间')).toBeInTheDocument();
    expect(screen.getByText('每隔 N 页')).toBeInTheDocument();
    expect(screen.getByText('奇偶页拆分')).toBeInTheDocument();

    // Select everyN mode
    fireEvent.click(screen.getByText('每隔 N 页'));
    expect(screen.getByText('每隔几页拆为一个文档')).toBeInTheDocument();

    // Click submit
    fireEvent.click(screen.getByRole('button', { name: /应用更改/i }));
    await waitFor(() => {
      expect(onApplyMock).toHaveBeenCalledWith('split-pdf', expect.objectContaining({
        splitMode: 'everyN',
      }));
    });
  });

  it('renders table-of-contents with title, font and bookmark options', async () => {
    render(
      <StudioToolDrawer
        toolId="table-of-contents"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );

    expect(screen.getByText('目录生成选项')).toBeInTheDocument();
    expect(screen.getByText('目录标题')).toBeInTheDocument();
    expect(screen.getByText('同步生成 PDF 侧边栏书签')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /应用更改/i }));
    await waitFor(() => {
      expect(onApplyMock).toHaveBeenCalledWith('table-of-contents', expect.objectContaining({
        title: expect.any(String),
      }));
    });
  });

  it('renders sanitize-pdf with full item checklist', async () => {
    render(
      <StudioToolDrawer
        toolId="sanitize-pdf"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );

    expect(screen.getByText('安全深度脱敏项勾选')).toBeInTheDocument();
    expect(screen.getByText('剔除所有可执行 JavaScript 脚本')).toBeInTheDocument();
    expect(screen.getByText('剥离嵌入的内嵌文件附件')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /应用更改/i }));
    await waitFor(() => {
      expect(onApplyMock).toHaveBeenCalledWith('sanitize-pdf', expect.objectContaining({
        removeJavaScript: true,
      }));
    });
  });

  it('renders pdf-to-markdown export options', async () => {
    render(
      <StudioToolDrawer
        toolId="pdf-to-markdown"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );

    expect(screen.getByText('导出 Markdown 结构化选项')).toBeInTheDocument();
    expect(screen.getByText('在各节标注页码来源注释')).toBeInTheDocument();
    expect(screen.getByText('忠实保留原文物理硬换行')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /开始导出/i }));
    await waitFor(() => {
      expect(onExportMock).toHaveBeenCalledWith('pdf-to-markdown', expect.objectContaining({
        preserveLineBreaks: true,
      }));
    });
  });

  it('renders pdf-booklet saddle-stitch binding parameters', async () => {
    render(
      <StudioToolDrawer
        toolId="pdf-booklet"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );

    expect(screen.getByText('小册子装订拼版')).toBeInTheDocument();
    expect(screen.getByText('1x2 骑马订 (双页并排)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /应用更改/i }));
    await waitFor(() => {
      expect(onApplyMock).toHaveBeenCalledWith('pdf-booklet', expect.any(Object));
    });
  });

  it('renders text-color options with custom color and mode', async () => {
    render(
      <StudioToolDrawer
        toolId="text-color"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );

    expect(screen.getByText('文本颜色替换与染色')).toBeInTheDocument();
    expect(screen.getByText('深色字替换')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /应用更改/i }));
    await waitFor(() => {
      expect(onApplyMock).toHaveBeenCalledWith('text-color', expect.any(Object));
    });
  });

  it('renders rich options for organize-pdf, rotate-custom, and overlay-pdf', async () => {
    // 1. organize-pdf
    const { unmount: unmount1 } = render(
      <StudioToolDrawer
        toolId="organize-pdf"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );
    expect(screen.getByText('页面组织与排序参数')).toBeInTheDocument();
    expect(screen.getByText('保持原序')).toBeInTheDocument();
    expect(screen.getByText('逆序倒排')).toBeInTheDocument();
    unmount1();

    // 2. rotate-custom
    const { unmount: unmount2 } = render(
      <StudioToolDrawer
        toolId="rotate-custom"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );
    expect(screen.getByText('自定义旋转参数')).toBeInTheDocument();
    expect(screen.getByText('快捷旋转预设')).toBeInTheDocument();
    expect(screen.getByText('顺时针 ↻')).toBeInTheDocument();
    unmount2();

    // 3. overlay-pdf
    const { unmount: unmount3 } = render(
      <StudioToolDrawer
        toolId="overlay-pdf"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );
    expect(screen.getByText('覆叠与垫底图层参数')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /前景覆叠/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /背景垫底/i })).toBeInTheDocument();
    unmount3();
  });

  it('renders rich options for ocr-pdf, add-attachments, edit-pdf, and sign-pdf', async () => {
    // 1. ocr-pdf
    const { unmount: unmount1 } = render(
      <StudioToolDrawer
        toolId="ocr-pdf"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );
    expect(screen.getByText('OCR 光学字符识别参数')).toBeInTheDocument();
    expect(screen.getByText('主要识别语言')).toBeInTheDocument();
    unmount1();

    // 2. add-attachments
    const { unmount: unmount2 } = render(
      <StudioToolDrawer
        toolId="add-attachments"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );
    expect(screen.getByText('添加附件嵌入参数')).toBeInTheDocument();
    expect(screen.getByText('整篇文档级附件')).toBeInTheDocument();
    unmount2();

    // 3. edit-pdf
    const { unmount: unmount3 } = render(
      <StudioToolDrawer
        toolId="edit-pdf"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );
    expect(screen.getByText('PDF 编辑与批注选项')).toBeInTheDocument();
    expect(screen.getByText('文本流直接内联编辑')).toBeInTheDocument();
    unmount3();

    // 4. sign-pdf
    const { unmount: unmount4 } = render(
      <StudioToolDrawer
        toolId="sign-pdf"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
        locale="zh"
      />
    );
    expect(screen.getByText('电子签名配置参数')).toBeInTheDocument();
    expect(screen.getByText('手写')).toBeInTheDocument();
    unmount4();
  });

  it('renders English default options for compare-pdfs, view-metadata, and edit-attachments when locale is omitted', async () => {
    // 1. compare-pdfs
    const { unmount: unmount1 } = render(
      <StudioToolDrawer
        toolId="compare-pdfs"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
      />
    );
    expect(screen.getByText('Document Comparison Rules')).toBeInTheDocument();
    expect(screen.getByText('Side-by-Side')).toBeInTheDocument();
    unmount1();

    // 2. view-metadata
    const { unmount: unmount2 } = render(
      <StudioToolDrawer
        toolId="view-metadata"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
      />
    );
    expect(screen.getByText('Document Metadata & Properties')).toBeInTheDocument();
    expect(screen.getByText('Export Report Format')).toBeInTheDocument();
    unmount2();

    // 3. edit-attachments
    const { unmount: unmount3 } = render(
      <StudioToolDrawer
        toolId="edit-attachments"
        onClose={onCloseMock}
        onApply={onApplyMock}
        onExport={onExportMock}
        isApplying={false}
      />
    );
    expect(screen.getByText('Manage Attachments Settings')).toBeInTheDocument();
    expect(screen.getByText('View & Delete')).toBeInTheDocument();
    unmount3();
  });
});

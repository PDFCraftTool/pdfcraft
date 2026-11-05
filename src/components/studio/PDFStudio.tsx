'use client';

import React, { useState, useCallback, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Undo2,
  Redo2,
  RotateCcw,
  Download,
  Printer,
  X,
  Sparkles,
  LayoutGrid,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  ChevronDown,
  History,
  FileType,
  Image as ImageIcon,
  Clock,
  Loader2,
  Plus,
  Files,
} from 'lucide-react';
import JSZip from 'jszip';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { StudioLeftRail } from './StudioLeftRail';
import { StudioToolDrawer } from './StudioToolDrawer';
import {
  executeStudioOperation,
  executeStudioExport,
  type StudioToolId,
  STUDIO_TOOLS,
  findStudioToolConfig,
  addStudioRecentTool,
} from './studio-processors';
import { saveBlobFile, isTauri, getSystemPrinters, printPdfFile } from '@/lib/tauri-bridge';
import { withBasePath } from '@/lib/utils/path';
import { getToolContent, type Locale } from '@/config/tool-content';

interface PDFStudioProps {
  locale?: string;
  className?: string;
  initialFile?: File | null;
}

interface HistoryItem {
  blob: Blob;
  name: string;
  action: string;
}

export interface StudioDocument {
  id: string;
  name: string;
  file: File;
  currentBlob: Blob;
  historyStack: HistoryItem[];
  redoStack: HistoryItem[];
}

function checkIsMac(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    Boolean(
      (navigator.platform && navigator.platform.toUpperCase().indexOf('MAC') >= 0) ||
        (navigator.userAgent && navigator.userAgent.toUpperCase().indexOf('MAC') >= 0)
    )
  );
}

export const PDFStudio: React.FC<PDFStudioProps> = ({
  locale = 'en',
  className = '',
  initialFile = null,
}) => {
  const router = useRouter();
  const validLocale = (locale as string) || 'en';
  const isZh = validLocale.toLowerCase().startsWith('zh');
  const isMac = checkIsMac();

  const closeDocTooltip = isTauri()
    ? isMac
      ? isZh
        ? '关闭文档 (Cmd+W)'
        : 'Close document (Cmd+W)'
      : isZh
        ? '关闭文档 (Ctrl+F4 / Ctrl+W)'
        : 'Close document (Ctrl+F4 or Ctrl+W)'
    : isZh
      ? '关闭文档 (Ctrl+F4)'
      : 'Close document (Ctrl+F4)';

  // Multi-document states
  const [documents, setDocuments] = useState<StudioDocument[]>(() => {
    if (initialFile) {
      return [
        {
          id: 'doc-init',
          name: initialFile.name,
          file: initialFile,
          currentBlob: initialFile,
          historyStack: [],
          redoStack: [],
        },
      ];
    }
    return [];
  });
  const [activeDocId, setActiveDocId] = useState<string | null>(() => {
    return initialFile ? 'doc-init' : null;
  });

  const activeDoc = useMemo(() => {
    return documents.find((d) => d.id === activeDocId) || documents[0] || null;
  }, [documents, activeDocId]);

  const file = activeDoc ? activeDoc.file : null;
  const currentBlob = activeDoc ? activeDoc.currentBlob : null;
  const historyStack = activeDoc ? activeDoc.historyStack : [];
  const redoStack = activeDoc ? activeDoc.redoStack : [];

  const availableDocuments = useMemo(() => {
    if (!activeDoc) return [];
    return documents.filter((d) => d.id !== activeDoc.id);
  }, [documents, activeDoc]);

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Studio UI states
  const [activeToolId, setActiveToolId] = useState<StudioToolId | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isApplying, setIsApplying] = useState<boolean>(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isExportMenuOpen, setIsExportMenuOpen] = useState<boolean>(false);

  // Feedback notifications
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const multiFileInputRef = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeCleanupRef = useRef<(() => void) | null>(null);
  const handleKeyDownRef = useRef<((e: KeyboardEvent) => void) | null>(null);

  // Synchronized state refs for stable event listeners
  const documentsRef = useRef(documents);
  const activeDocIdRef = useRef(activeDocId);
  const isApplyingRef = useRef(isApplying);
  const handleCloseDocumentRef = useRef<((docId: string, e?: React.MouseEvent) => void) | null>(null);

  // Keep refs synchronized via layout effect (no mutations during render, synchronous before events)
  useLayoutEffect(() => {
    documentsRef.current = documents;
    activeDocIdRef.current = activeDocId;
    isApplyingRef.current = isApplying;
  }, [documents, activeDocId, isApplying]);

  // Restore sidebar collapse state
  useEffect(() => {
    try {
      const saved = localStorage.getItem('pdfcraft_studio_sidebar_collapsed');
      if (saved !== null) {
        setIsSidebarCollapsed(saved === 'true');
      }
    } catch {}
  }, []);

  const toggleSidebarCollapse = useCallback(() => {
    setIsSidebarCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('pdfcraft_studio_sidebar_collapsed', String(next));
      } catch {}
      return next;
    });
  }, []);

  // Update object URL when currentBlob changes
  useEffect(() => {
    if (!currentBlob) {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
        setPdfUrl(null);
      }
      return;
    }

    const newUrl = URL.createObjectURL(currentBlob);
    setPdfUrl(newUrl);

    return () => {
      URL.revokeObjectURL(newUrl);
    };
  }, [currentBlob]);

  // Show auto-dismiss notifications
  const notify = useCallback((type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification((curr) => (curr?.message === message ? null : curr));
    }, 3000);
  }, []);

  // Handle loading multiple files (or single file)
  const handleAddFiles = useCallback(
    (incomingFiles: FileList | File[]) => {
      const validPdfs = Array.from(incomingFiles).filter(
        (f) => f.name.toLowerCase().endsWith('.pdf') || f.type === 'application/pdf'
      );

      if (validPdfs.length === 0) {
        notify('error', isZh ? '请选择有效的 PDF 文件' : 'Please select a valid PDF file');
        return;
      }

      const newDocs: StudioDocument[] = validPdfs.map((f, idx) => ({
        id: `doc_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 7)}`,
        name: f.name,
        file: f,
        currentBlob: f,
        historyStack: [],
        redoStack: [],
      }));

      documentsRef.current = [...documentsRef.current, ...newDocs];
      activeDocIdRef.current = newDocs[0].id;
      setDocuments((prev) => [...prev, ...newDocs]);
      setActiveDocId(newDocs[0].id);
      setActiveToolId(null);
      notify(
        'success',
        isZh
          ? `已成功载入 ${newDocs.length} 个 PDF 文档`
          : `Successfully loaded ${newDocs.length} PDF document(s)`
      );
    },
    [notify, isZh]
  );

  const handleLoadFile = useCallback(
    (selectedFile: File) => {
      handleAddFiles([selectedFile]);
    },
    [handleAddFiles]
  );

  const handleSelectDocument = useCallback((docId: string) => {
    activeDocIdRef.current = docId;
    setActiveDocId(docId);
    setActiveToolId(null);
  }, []);

  // Sequentially cycle through open document tabs (wraps circularly, dismisses tool drawer)
  const cycleDocumentTab = useCallback(
    (direction: 'forward' | 'backward') => {
      if (isApplyingRef.current) return;
      const docs = documentsRef.current;
      if (docs.length <= 1) return;

      const currentId = activeDocIdRef.current;
      const currentIndex = docs.findIndex((d) => d.id === currentId);
      const validIndex = currentIndex === -1 ? 0 : currentIndex;

      const nextIndex =
        direction === 'forward'
          ? (validIndex + 1) % docs.length
          : (validIndex - 1 + docs.length) % docs.length;

      const nextDoc = docs[nextIndex];
      if (nextDoc) {
        activeDocIdRef.current = nextDoc.id;
        handleSelectDocument(nextDoc.id);
      }
    },
    [handleSelectDocument]
  );

  const handleCloseDocument = useCallback(
    (docId: string, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (isApplyingRef.current) return;

      const currentDocs = documentsRef.current;
      const targetDoc = currentDocs.find((d) => d.id === docId);
      if (!targetDoc) return;

      if (targetDoc.historyStack.length > 0) {
        if (
          !window.confirm(
            isZh
              ? `文档「${targetDoc.name}」包含未保存的修改，确定要关闭吗？`
              : `Document "${targetDoc.name}" contains unsaved changes. Are you sure you want to close it?`
          )
        ) {
          return;
        }
      }

      const closedIdx = currentDocs.findIndex((d) => d.id === docId);
      const remaining = currentDocs.filter((d) => d.id !== docId);

      if (activeDocIdRef.current === docId) {
        const next = remaining.length > 0 ? remaining[Math.min(closedIdx, remaining.length - 1)] : null;
        const nextDocId = next ? next.id : null;
        activeDocIdRef.current = nextDocId;
        setActiveDocId(nextDocId);
        setActiveToolId(null);
      }

      documentsRef.current = remaining;
      setDocuments(remaining);
    },
    [isZh]
  );

  useLayoutEffect(() => {
    handleCloseDocumentRef.current = handleCloseDocument;
  }, [handleCloseDocument]);

  // Handle Drag & Drop on Empty State and View Area
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleAddFiles(e.dataTransfer.files);
      }
    },
    [handleAddFiles]
  );

  // Apply a tool operation in-place on current active document
  const handleApplyTool = useCallback(
    async (toolId: StudioToolId, options: Record<string, any> = {}) => {
      if (!currentBlob || !file || !activeDoc) return;

      setIsApplying(true);
      try {
        const tempFile = new File([currentBlob], file.name, { type: 'application/pdf' });
        const newBlob = await executeStudioOperation(tempFile, toolId, options);

        const toolConfig = findStudioToolConfig(toolId);
        const localizedContent = getToolContent(validLocale as Locale, toolId);
        const toolName = localizedContent?.title || toolConfig?.name || toolId;

        // Push current state to active document undo history
        setDocuments((prevDocs) =>
          prevDocs.map((doc) => {
            if (doc.id === activeDoc.id) {
              return {
                ...doc,
                currentBlob: newBlob,
                historyStack: [
                  ...doc.historyStack,
                  { blob: doc.currentBlob, name: doc.name, action: toolName },
                ],
                redoStack: [],
              };
            }
            return doc;
          })
        );

        setActiveToolId(null); // Close drawer
        addStudioRecentTool(toolId);
        notify(
          'success',
          isZh
            ? `已就地应用「${toolName}」，可在左侧继续选择下一项操作`
            : `Applied "${toolName}" in-place. Select another action on the left`
        );
      } catch (err: any) {
        notify(
          'error',
          err?.message || (isZh ? '操作应用失败，请检查参数' : 'Failed to apply operation. Please check options')
        );
      } finally {
        setIsApplying(false);
      }
    },
    [currentBlob, file, activeDoc, notify, validLocale, isZh]
  );

  // Handle export/convert operation without altering central PDF viewer
  const handleExportTool = useCallback(
    async (toolId: StudioToolId, options: Record<string, any> = {}) => {
      if (!currentBlob || !file) return;

      setIsApplying(true);
      try {
        const tempFile = new File([currentBlob], file.name, { type: 'application/pdf' });
        const { blob, filename } = await executeStudioExport(tempFile, toolId, options);

        await saveBlobFile(blob, filename);
        setActiveToolId(null);
        addStudioRecentTool(toolId);
        notify(
          'success',
          isZh
            ? `转换导出完成，已触发下载「${filename}」`
            : `Export completed, downloading "${filename}"`
        );
      } catch (err: any) {
        notify('error', err?.message || (isZh ? '导出转换失败' : 'Export conversion failed'));
      } finally {
        setIsApplying(false);
      }
    },
    [currentBlob, file, notify, isZh]
  );

  // Undo last operation on active document
  const handleUndo = useCallback(() => {
    if (!activeDoc || activeDoc.historyStack.length === 0) return;

    const previousItem = activeDoc.historyStack[activeDoc.historyStack.length - 1];
    const newHistory = activeDoc.historyStack.slice(0, -1);

    setDocuments((prev) =>
      prev.map((doc) => {
        if (doc.id === activeDoc.id) {
          return {
            ...doc,
            currentBlob: previousItem.blob,
            historyStack: newHistory,
            redoStack: [
              ...doc.redoStack,
              { blob: doc.currentBlob, name: doc.name, action: previousItem.action },
            ],
          };
        }
        return doc;
      })
    );
    notify('success', isZh ? `已撤销「${previousItem.action}」` : `Undone "${previousItem.action}"`);
  }, [activeDoc, notify, isZh]);

  // Redo operation on active document
  const handleRedo = useCallback(() => {
    if (!activeDoc || activeDoc.redoStack.length === 0) return;

    const nextItem = activeDoc.redoStack[activeDoc.redoStack.length - 1];
    const newRedo = activeDoc.redoStack.slice(0, -1);

    setDocuments((prev) =>
      prev.map((doc) => {
        if (doc.id === activeDoc.id) {
          return {
            ...doc,
            currentBlob: nextItem.blob,
            historyStack: [
              ...doc.historyStack,
              { blob: doc.currentBlob, name: doc.name, action: nextItem.action },
            ],
            redoStack: newRedo,
          };
        }
        return doc;
      })
    );
    notify('success', isZh ? `已重做「${nextItem.action}」` : `Redone "${nextItem.action}"`);
  }, [activeDoc, notify, isZh]);

  // Revert all changes on active document back to initial version
  const handleRevert = useCallback(() => {
    if (!activeDoc || activeDoc.historyStack.length === 0) return;
    if (
      window.confirm(
        isZh
          ? `确定要放弃文档「${activeDoc.name}」的所有更改，还原到最初上传的版本吗？`
          : `Discard all changes to "${activeDoc.name}" and revert to the original version?`
      )
    ) {
      setDocuments((prev) =>
        prev.map((doc) => {
          if (doc.id === activeDoc.id) {
            return {
              ...doc,
              currentBlob: doc.file,
              historyStack: [],
              redoStack: [],
            };
          }
          return doc;
        })
      );
      setActiveToolId(null);
      setIsHistoryOpen(false);
      notify(
        'success',
        isZh ? `已还原「${activeDoc.name}」至最初版本` : `Reverted "${activeDoc.name}" to original version`
      );
    }
  }, [activeDoc, notify, isZh]);

  // Batch Export all opened documents as a single ZIP archive
  const handleExportAllZip = useCallback(async () => {
    if (documents.length === 0) return;
    setIsApplying(true);
    try {
      const zip = new JSZip();
      for (let i = 0; i < documents.length; i++) {
        const doc = documents[i];
        const cleanName = doc.name.replace(/\.pdf$/i, '');
        const filename = `${cleanName}_crafted.pdf`;
        zip.file(filename, doc.currentBlob);
      }
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipName = `pdfcraft_studio_batch_${Date.now()}.zip`;
      await saveBlobFile(zipBlob, zipName);
      notify(
        'success',
        isZh
          ? `成功打包并导出全部 ${documents.length} 个文档`
          : `Packaged and exported all ${documents.length} documents`
      );
    } catch (err: any) {
      notify('error', err?.message || (isZh ? '打包导出失败' : 'Failed to package export'));
    } finally {
      setIsApplying(false);
      setIsExportMenuOpen(false);
    }
  }, [documents, notify, isZh]);

  // Export / Save final document
  const handleExport = useCallback(async () => {
    if (!currentBlob || !file) return;

    try {
      const fileName = file.name.replace(/\.pdf$/i, '_crafted.pdf');
      const isDownloaded = await saveBlobFile(currentBlob, fileName);
      if (isDownloaded) {
        notify(
          'success',
          isZh ? `文档已保存并导出「${fileName}」` : `Document saved and exported as "${fileName}"`
        );
      }
    } catch (err: any) {
      notify('error', err?.message || (isZh ? '保存导出失败' : 'Failed to save and export document'));
    }
  }, [currentBlob, file, notify, isZh]);

  // Print current in-memory document
  const handlePrint = useCallback(async () => {
    if (!currentBlob) return;

    try {
      if (isTauri()) {
        const printers = await getSystemPrinters();
        if (printers.length > 0) {
          await printPdfFile(currentBlob, printers[0].name);
          notify('success', isZh ? '已发送打印任务' : 'Print job sent');
          return;
        }
      }

      // Web fallback: trigger iframe print
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.print();
      } else {
        window.print();
      }
    } catch (err: any) {
      notify('error', err?.message || (isZh ? '打印触发失败' : 'Failed to trigger print'));
    }
  }, [currentBlob, notify, isZh]);

  // Keyboard shortcuts (Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+P, Escape, /, and tab cycling shortcuts)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = checkIsMac();
      const modKey = isMac ? e.metaKey : e.ctrlKey;

      const isStandalone =
        typeof window !== 'undefined' &&
        Boolean(
          window.matchMedia?.('(display-mode: standalone)').matches ||
            (window.navigator as any)?.standalone
        );
      const isDesktopOrStandalone = isTauri() || isStandalone;

      // Document Tab Cycling Shortcuts
      const isForwardTabShortcut =
        (isDesktopOrStandalone && e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && e.key === 'Tab') ||
        (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && (e.key === 'PageDown' || e.code === 'PageDown')) ||
        (e.altKey && !e.ctrlKey && !e.metaKey && e.key === ']') ||
        (isMac && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey && (e.key === ']' || e.key === '}' || e.code === 'BracketRight'));

      const isBackwardTabShortcut =
        (isDesktopOrStandalone && e.ctrlKey && e.shiftKey && !e.altKey && !e.metaKey && e.key === 'Tab') ||
        (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && (e.key === 'PageUp' || e.code === 'PageUp')) ||
        (e.altKey && !e.ctrlKey && !e.metaKey && e.key === '[') ||
        (isMac && e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey && (e.key === '[' || e.key === '{' || e.code === 'BracketLeft'));

      // Document Tab Closing Shortcuts
      const isF4Close =
        (e.ctrlKey || (isMac && e.metaKey)) && !e.altKey && !e.shiftKey && (e.key === 'F4' || e.code === 'F4');

      const isTauriWClose =
        isTauri() &&
        modKey &&
        !e.altKey &&
        !e.shiftKey &&
        !(isMac ? e.ctrlKey : e.metaKey) &&
        (e.key.toLowerCase() === 'w' || e.code === 'KeyW');

      const isTabCloseShortcut = isF4Close || isTauriWClose;

      if (isForwardTabShortcut) {
        e.preventDefault();
        e.stopPropagation();
        cycleDocumentTab('forward');
        return;
      }

      if (isBackwardTabShortcut) {
        e.preventDefault();
        e.stopPropagation();
        cycleDocumentTab('backward');
        return;
      }

      if (isTabCloseShortcut) {
        e.preventDefault();
        e.stopPropagation();
        if (isApplyingRef.current) return;
        const currentDocId = activeDocIdRef.current;
        if (currentDocId && handleCloseDocumentRef.current) {
          handleCloseDocumentRef.current(currentDocId);
        }
        return;
      }

      if (modKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          handleRedo();
        } else {
          handleUndo();
        }
      } else if (modKey && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        handleRedo();
      } else if (modKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        handleExport();
      } else if (modKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        handlePrint();
      } else if (e.key === 'Escape') {
        setActiveToolId(null);
        setIsHistoryOpen(false);
        setIsExportMenuOpen(false);
      } else if (
        (modKey && e.key.toLowerCase() === 'k') ||
        (e.key === '/' &&
          document.activeElement?.tagName !== 'INPUT' &&
          document.activeElement?.tagName !== 'TEXTAREA' &&
          (e.target as HTMLElement)?.tagName !== 'INPUT' &&
          (e.target as HTMLElement)?.tagName !== 'TEXTAREA')
      ) {
        e.preventDefault();
        const searchInput = document.querySelector<HTMLInputElement>('input[data-testid="studio-tool-search"]');
        searchInput?.focus();
        searchInput?.select();
      }
    };

    handleKeyDownRef.current = handleKeyDown;
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (handleKeyDownRef.current === handleKeyDown) {
        handleKeyDownRef.current = null;
      }
    };
  }, [handleUndo, handleRedo, handleExport, handlePrint, cycleDocumentTab]);

  // PDF Viewer Iframe Keystroke Relay Bridge
  const attachIframeListener = useCallback(() => {
    // Clean up any previously attached listener first
    if (iframeCleanupRef.current) {
      iframeCleanupRef.current();
      iframeCleanupRef.current = null;
    }

    const iframeWin = iframeRef.current?.contentWindow;
    if (!iframeWin) return;

    const handleIframeKeyDown = (e: KeyboardEvent) => {
      handleKeyDownRef.current?.(e);
    };

    try {
      iframeWin.addEventListener('keydown', handleIframeKeyDown);
      iframeCleanupRef.current = () => {
        try {
          iframeWin.removeEventListener('keydown', handleIframeKeyDown);
        } catch {}
      };
    } catch {}
  }, []);

  // Sync iframe listener when active document or pdfUrl changes, and clean up on unmount
  useEffect(() => {
    attachIframeListener();
    return () => {
      if (iframeCleanupRef.current) {
        iframeCleanupRef.current();
        iframeCleanupRef.current = null;
      }
    };
  }, [activeDocId, pdfUrl, attachIframeListener]);

  return (
    <div className={`h-screen flex flex-col bg-[hsl(var(--color-background))] select-none ${className}`.trim()}>
      {/* Studio Header (Compact Toolbar - 52px) */}
      <header className="h-[52px] flex-shrink-0 border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-card)/0.9)] backdrop-blur-md px-4 flex items-center justify-between z-30 relative">
        {/* Left: Brand & File Info */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
            title={isZh ? '返回首页' : 'Home'}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--color-primary))] to-[hsl(var(--color-accent))] shadow-sm">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:inline text-[hsl(var(--color-foreground))]">
              PDFCraft <span className="text-[hsl(var(--color-primary))] font-medium">Studio</span>
            </span>
          </Link>

          {file && (
            <>
              <span className="text-[hsl(var(--color-border))] shrink-0">|</span>
              <div className="flex items-center gap-2">
                {/* History Badge button */}
                <button
                  type="button"
                  onClick={() => setIsHistoryOpen((prev) => !prev)}
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 flex items-center gap-1 transition-all ${
                    historyStack.length > 0
                      ? 'bg-[hsl(var(--color-primary)/0.15)] text-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary)/0.25)]'
                      : 'bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]'
                  }`}
                  title={isZh ? '查看操作历史记录' : 'View Action History'}
                >
                  <History className="w-2.5 h-2.5" />
                  <span>+{historyStack.length} {isZh ? '操作' : 'action(s)'}</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Center: Undo / Redo & Revert Controls */}
        {file && (
          <div className="flex items-center gap-1 bg-[hsl(var(--color-muted)/0.5)] p-1 rounded-xl border border-[hsl(var(--color-border)/0.6)]">
            <button
              onClick={handleUndo}
              disabled={historyStack.length === 0}
              className="p-1.5 rounded-lg text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-background))] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              title={isZh ? '撤销 (Ctrl+Z)' : 'Undo (Ctrl+Z)'}
              aria-label="Undo"
            >
              <Undo2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleRedo}
              disabled={redoStack.length === 0}
              className="p-1.5 rounded-lg text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-background))] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
              title={isZh ? '重做 (Ctrl+Y)' : 'Redo (Ctrl+Y)'}
              aria-label="Redo"
            >
              <Redo2 className="w-4 h-4" />
            </button>
            {historyStack.length > 0 && (
              <>
                <div className="w-[1px] h-3.5 bg-[hsl(var(--color-border))] mx-1" />
                <button
                  onClick={handleRevert}
                  className="px-2 py-1 text-[11px] font-medium text-[hsl(var(--color-muted-foreground))] hover:text-red-500 rounded-lg hover:bg-[hsl(var(--color-background))] transition-all flex items-center gap-1"
                  title={isZh ? '恢复至初始未编辑版本' : 'Revert to Initial Version'}
                >
                  <RotateCcw className="w-3 h-3" />
                  <span className="hidden md:inline">{isZh ? '还原初始' : 'Revert'}</span>
                </button>
              </>
            )}
          </div>
        )}

        {/* Right: Actions & Mode Switch */}
        <div className="flex items-center gap-2 shrink-0">
          {file ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrint}
                title={isZh ? '打印文档 (Ctrl+P)' : 'Print Document (Ctrl+P)'}
                className="h-8 px-2.5 text-xs gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isZh ? '打印' : 'Print'}</span>
              </Button>

              {/* Split Export Button */}
              <div className="relative inline-flex items-center shadow-sm rounded-lg">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleExport}
                  title={isZh ? '导出并保存最终 PDF (Ctrl+S)' : 'Save & Export Final PDF (Ctrl+S)'}
                  className="h-8 px-3 text-xs gap-1.5 rounded-r-none border-r border-white/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isZh ? '保存导出' : 'Save & Export'}</span>
                </Button>
                <button
                  type="button"
                  onClick={() => setIsExportMenuOpen((prev) => !prev)}
                  className="h-8 px-1.5 rounded-r-lg bg-[hsl(var(--color-primary))] text-white hover:bg-[hsl(var(--color-primary-hover))] transition-colors flex items-center justify-center border-l border-white/20"
                  title={isZh ? '更多导出格式' : 'More Export Formats'}
                  aria-label="More export formats"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {/* Export Dropdown Popover */}
                {isExportMenuOpen && (
                  <div className="absolute right-0 top-10 w-56 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <button
                      onClick={() => {
                        setIsExportMenuOpen(false);
                        handleExport();
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 text-xs text-left rounded-lg hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] font-medium transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-[hsl(var(--color-primary))]" />
                      <span>{isZh ? '保存修改后 PDF (Ctrl+S)' : 'Save Edited PDF (Ctrl+S)'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsExportMenuOpen(false);
                        handleExportTool('pdf-to-docx', {});
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 text-xs text-left rounded-lg hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] font-medium transition-colors"
                    >
                      <FileType className="w-3.5 h-3.5 text-blue-500" />
                      <span>{isZh ? '导出为 Word (.docx)' : 'Export as Word (.docx)'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsExportMenuOpen(false);
                        handleExportTool('pdf-to-image', { quality: 90 });
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 text-xs text-left rounded-lg hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] font-medium transition-colors"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isZh ? '导出为图片包 (.zip)' : 'Export as Images (.zip)'}</span>
                    </button>
                    {documents.length > 1 && (
                      <>
                        <div className="my-1 border-t border-[hsl(var(--color-border)/0.5)]" />
                        <button
                          onClick={handleExportAllZip}
                          className="w-full flex items-center gap-2.5 px-2.5 py-2 text-xs text-left rounded-lg hover:bg-[hsl(var(--color-muted))] text-emerald-600 dark:text-emerald-400 font-semibold transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>
                            {isZh
                              ? `打包导出全部文档 (${documents.length}篇 .zip)`
                              : `Export All Documents (${documents.length} files .zip)`}
                          </span>
                        </button>
                      </>
                    )}
                    <div className="my-1 border-t border-[hsl(var(--color-border)/0.5)]" />
                    <button
                      onClick={() => {
                        setIsExportMenuOpen(false);
                        handlePrint();
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 text-xs text-left rounded-lg hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] font-medium transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{isZh ? '原生打印 (Ctrl+P)' : 'Native Print (Ctrl+P)'}</span>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  if (activeDoc) {
                    handleCloseDocument(activeDoc.id);
                  }
                }}
                className="p-1.5 rounded-lg text-[hsl(var(--color-muted-foreground))] hover:text-red-500 hover:bg-[hsl(var(--color-muted))] transition-colors ml-1"
                title={closeDocTooltip}
                aria-label="Close file"
              >
                <X className="w-4 h-4" />
              </button>
            </>
          ) : (
            <Link
              href={`/${locale}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[hsl(var(--color-border))] text-xs font-medium text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-all"
              title={isZh ? '切换到经典工具网格模式' : 'Classic Tool Grid View'}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{isZh ? '经典网格视图' : 'Classic Grid View'}</span>
            </Link>
          )}
        </div>

        {/* History Timeline Popover */}
        {isHistoryOpen && file && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-80 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-2xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[hsl(var(--color-border))]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[hsl(var(--color-foreground))]">
                <History className="w-3.5 h-3.5 text-[hsl(var(--color-primary))]" />
                <span>{isZh ? '操作历史时间线' : 'Operation Timeline'}</span>
              </div>
              <button
                onClick={() => setIsHistoryOpen(false)}
                className="p-1 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-1.5 max-h-64 overflow-y-auto">
              <div className="flex items-center justify-between p-2 rounded-xl text-xs bg-[hsl(var(--color-muted)/0.3)]">
                <div className="flex items-center gap-2 truncate">
                  <FileText className="w-3.5 h-3.5 text-[hsl(var(--color-muted-foreground))] shrink-0" />
                  <span className="truncate font-medium">{file.name} ({isZh ? '初始' : 'Original'})</span>
                </div>
                {historyStack.length > 0 && (
                  <button
                    onClick={handleRevert}
                    className="text-[10px] text-[hsl(var(--color-primary))] font-semibold hover:underline"
                  >
                    {isZh ? '还原' : 'Revert'}
                  </button>
                )}
              </div>
              {historyStack.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-xl text-xs bg-[hsl(var(--color-muted)/0.5)] border border-[hsl(var(--color-border)/0.4)]"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-4 h-4 rounded-full bg-[hsl(var(--color-primary)/0.2)] text-[hsl(var(--color-primary))] text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="truncate font-semibold text-[hsl(var(--color-foreground))]">
                      {item.action}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Multi-Document Tabs Bar */}
      {documents.length > 0 && (
        <div className="h-10 flex-shrink-0 border-b border-[hsl(var(--color-border)/0.8)] bg-[hsl(var(--color-muted)/0.35)] px-3 flex items-center justify-between z-20">
          {/* Scrollable Document Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 flex-1 min-w-0 mr-2">
            {documents.map((doc) => {
              const isActive = doc.id === activeDoc?.id;
              const isModified = doc.historyStack.length > 0;
              return (
                <div
                  key={doc.id}
                  onClick={() => handleSelectDocument(doc.id)}
                  className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all border shrink-0 max-w-[220px] select-none ${
                    isActive
                      ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-primary))] border-[hsl(var(--color-border))] shadow-xs font-semibold'
                      : 'bg-transparent text-[hsl(var(--color-muted-foreground))] border-transparent hover:bg-[hsl(var(--color-card)/0.6)] hover:text-[hsl(var(--color-foreground))]'
                  }`}
                  title={isZh ? `文档: ${doc.name}${isModified ? ' (已修改)' : ''}` : `Document: ${doc.name}${isModified ? ' (Modified)' : ''}`}
                >
                  <FileText
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? 'text-[hsl(var(--color-primary))]' : 'text-[hsl(var(--color-muted-foreground))]'
                    }`}
                  />
                  <span className="truncate">{doc.name}</span>
                  {isModified && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--color-primary))] shrink-0"
                      title={isZh ? '有尚未保存的修改' : 'Unsaved changes'}
                    />
                  )}
                  <button
                    type="button"
                    onClick={(e) => handleCloseDocument(doc.id, e)}
                    className="p-0.5 rounded-md hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:text-red-500 opacity-60 group-hover:opacity-100 transition-all ml-0.5"
                    title={closeDocTooltip}
                    aria-label={`Close ${doc.name}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Action: Import More Documents */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => multiFileInputRef.current?.click()}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-dashed border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary)/0.08)] text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] text-xs font-medium transition-all"
              title={isZh ? '打开或导入更多 PDF (支持多选)' : 'Open or import more PDFs (multi-select)'}
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isZh ? '导入更多 PDF' : 'Import More PDFs'}</span>
            </button>
            <input
              ref={multiFileInputRef}
              type="file"
              multiple
              accept="application/pdf,.pdf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleAddFiles(e.target.files);
                  e.target.value = '';
                }
              }}
            />
            {documents.length > 1 && (
              <span className="text-[10px] font-medium text-[hsl(var(--color-muted-foreground))] px-1.5 py-0.5 rounded bg-[hsl(var(--color-muted))]">
                {isZh ? `共 ${documents.length} 个文档` : `${documents.length} Documents`}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Main Workspace Body */}
      <div className="flex-1 flex overflow-hidden relative">
        {file && pdfUrl ? (
          <>
            {/* Left Rail Toolbar */}
            <StudioLeftRail
              activeToolId={activeToolId}
              onSelectTool={setActiveToolId}
              isCollapsed={isSidebarCollapsed}
              onToggleCollapse={toggleSidebarCollapse}
              disabled={isApplying}
              locale={validLocale}
              onQuickApply={(toolId) => handleApplyTool(toolId, {})}
            />

            {/* Center: Single Seamless PDF Viewer */}
            <main className="flex-1 relative bg-zinc-900/10 dark:bg-black/40 overflow-hidden">
              <iframe
                ref={iframeRef}
                onLoad={attachIframeListener}
                src={withBasePath(`/pdfjs-viewer/viewer.html?file=${encodeURIComponent(pdfUrl)}`)}
                className="w-full h-full border-0 absolute inset-0"
                title={file.name}
              />

              {/* Processing Overlay Feedback */}
              {isApplying && (
                <div className="absolute inset-0 bg-background/50 backdrop-blur-xs z-30 flex flex-col items-center justify-center animate-in fade-in duration-200">
                  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[hsl(var(--color-card)/0.95)] border border-[hsl(var(--color-border))] shadow-2xl">
                    <Loader2 className="w-8 h-8 text-[hsl(var(--color-primary))] animate-spin" />
                    <div className="text-center">
                      <p className="text-xs font-bold text-[hsl(var(--color-foreground))]">{isZh ? '正在就地处理文档...' : 'Processing document in-place...'}</p>
                      <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] mt-0.5">{isZh ? '100% 浏览器内存安全运行，零网络上传' : '100% Client-side safe, zero network upload'}</p>
                    </div>
                  </div>
                </div>
              )}
            </main>

            {/* Right: Context Tool Parameter Drawer */}
            <StudioToolDrawer
              toolId={activeToolId}
              onClose={() => setActiveToolId(null)}
              onApply={(tid: StudioToolId, opts: Record<string, any>) => handleApplyTool(tid, opts)}
              onExport={(tid: StudioToolId, opts: Record<string, any>) => handleExportTool(tid, opts)}
              isApplying={isApplying}
              locale={validLocale}
              availableDocuments={availableDocuments}
            />
          </>
        ) : (
          /* Empty Workspace Welcome & Import Screen */
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="flex-1 flex flex-col items-center justify-center p-6 text-center"
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="application/pdf,.pdf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleAddFiles(e.target.files);
                  e.target.value = '';
                }
              }}
            />

            <div className="max-w-md w-full p-8 rounded-3xl border-2 border-dashed border-[hsl(var(--color-border))] bg-[hsl(var(--color-card)/0.4)] backdrop-blur-md flex flex-col items-center shadow-xl hover:border-[hsl(var(--color-primary))] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--color-primary)/0.2)] to-[hsl(var(--color-accent))] text-[hsl(var(--color-primary))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8" />
              </div>

              <h2 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                {isZh ? '导入 PDF 开启 Studio 工作台' : 'Import PDF to Launch Studio Workspace'}
              </h2>
              <p className="text-xs text-[hsl(var(--color-muted-foreground))] mb-6 leading-relaxed">
                {isZh
                  ? '无需在不同工具页面反复跳转和重新上传。在单一视图中就地旋转、加水印、压缩、签名、提取页面，一气呵成。'
                  : 'No more jumping between tools or re-uploading. Rotate, watermark, compress, sign, and organize pages seamlessly in a single in-place view.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 gap-2 shadow-lg shadow-[hsl(var(--color-primary)/0.2)] text-xs font-semibold py-2.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isZh ? '选择 PDF 文件 (支持多选)' : 'Select PDF Files (Multi-Select)'}</span>
                </Button>

                <Link
                  href={`/${locale}`}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[hsl(var(--color-border))] text-xs font-semibold text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-all"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>{isZh ? '返回所有工具' : 'Back to All Tools'}</span>
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-4 text-[11px] text-[hsl(var(--color-muted-foreground)/0.7)]">
                <span>{isZh ? '支持拖拽多个 PDF 至此' : 'Drag & drop multiple PDFs here'}</span>
                <span>•</span>
                <span>{isZh ? '全本地纯离线处理' : '100% Offline & Private'}</span>
                <span>•</span>
                <span>{isZh ? '多标签快速切换' : 'Multi-Tab Document Switch'}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      {notification && (
        <div
          role="status"
          className={`fixed bottom-6 right-6 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-medium z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 ${
            notification.type === 'success'
              ? 'bg-emerald-600 text-white shadow-emerald-600/20'
              : 'bg-red-600 text-white shadow-red-600/20'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          <span>{notification.message}</span>
        </div>
      )}
    </div>
  );
};

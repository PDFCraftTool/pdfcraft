'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { saveBlobFile } from '@/lib/tauri-bridge';
import { useSelectAllShortcut } from '@/hooks/useSelectAllShortcut';

export interface PDFMultiToolProps {
  className?: string;
}

interface PagePreview {
  pageNumber: number;
  originalPageNumber: number;
  sourceFileIndex: number;
  sourceFileName: string;
  thumbnail?: string;
  rotation: number;
  selected: boolean;
}

interface SourceFile {
  file: File;
  pageCount: number;
}

interface HistoryState {
  pages: PagePreview[];
}

/**
 * PDFMultiTool Component
 * All-in-one PDF editor with multi-file support
 */
export function PDFMultiTool({ className = '' }: PDFMultiToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [sourceFiles, setSourceFiles] = useState<SourceFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Page management
  const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
  const [isLoadingPreviews, setIsLoadingPreviews] = useState(false);

  // History for undo/redo
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Drag state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Add blank page modal
  const [showAddBlankModal, setShowAddBlankModal] = useState(false);
  const [blankPagePosition, setBlankPagePosition] = useState(1);
  const [blankPageCount, setBlankPageCount] = useState(1);

  const cancelledRef = useRef(false);

  // Save to history
  const saveToHistory = useCallback((pages: PagePreview[]) => {
    setHistory(prev => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push({ pages: JSON.parse(JSON.stringify(pages)) });
      return newHistory.slice(-30);
    });
    setHistoryIndex(prev => Math.min(prev + 1, 29));
  }, [historyIndex]);

  // Update pages with history
  const updatePages = useCallback((newPages: PagePreview[], skipHistory = false) => {
    if (!skipHistory) {
      saveToHistory(newPages);
    }
    setPagePreviews(newPages);
  }, [saveToHistory]);

  /**
   * Load PDF and generate page previews
   */
  const loadPdfPreviews = useCallback(async (files: File[], existingPages: PagePreview[] = []) => {
    setIsLoadingPreviews(true);
    setError(null);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const newPreviews: PagePreview[] = [...existingPages];
      const newSourceFiles: SourceFile[] = [...sourceFiles];

      for (let fileIdx = 0; fileIdx < files.length; fileIdx++) {
        const file = files[fileIdx];
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        const sourceFileIndex = newSourceFiles.length;
        newSourceFiles.push({ file, pageCount: pdf.numPages });

        const maxPreviewPages = Math.min(pdf.numPages, 50);

        for (let i = 1; i <= pdf.numPages; i++) {
          let thumbnail: string | undefined;

          if (i <= maxPreviewPages) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 0.2 });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (context) {
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              await page.render({
                canvasContext: context,
                viewport: viewport,
              }).promise;

              thumbnail = canvas.toDataURL('image/jpeg', 0.7);
            }
          }

          newPreviews.push({
            pageNumber: newPreviews.length + 1,
            originalPageNumber: i,
            sourceFileIndex,
            sourceFileName: file.name,
            thumbnail,
            rotation: 0,
            selected: false,
          });
        }
      }

      setSourceFiles(newSourceFiles);
      setPagePreviews(newPreviews);
      setHistory([{ pages: JSON.parse(JSON.stringify(newPreviews)) }]);
      setHistoryIndex(0);
    } catch (err) {
      console.error('Failed to load PDF:', err);
      setError('Failed to load PDF. The file may be corrupted or encrypted.');
    } finally {
      setIsLoadingPreviews(false);
    }
  }, [sourceFiles]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setResult(null);
      loadPdfPreviews(files, pagePreviews);
    }
  }, [loadPdfPreviews, pagePreviews]);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  const handleClearAll = useCallback(() => {
    setSourceFiles([]);
    setPagePreviews([]);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setHistory([]);
    setHistoryIndex(-1);
  }, []);

  // Undo
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      setPagePreviews(JSON.parse(JSON.stringify(history[historyIndex - 1].pages)));
    }
  }, [history, historyIndex]);

  // Redo
  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1);
      setPagePreviews(JSON.parse(JSON.stringify(history[historyIndex + 1].pages)));
    }
  }, [history, historyIndex]);

  // Reset
  const handleReset = useCallback(() => {
    if (history.length > 0) {
      setPagePreviews(JSON.parse(JSON.stringify(history[0].pages)));
      setHistoryIndex(0);
    }
    setResult(null);
  }, [history]);

  // Drag handlers
  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', String(index));
      e.dataTransfer.effectAllowed = 'move';
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  }, [draggedIndex]);

  const handleDrop = useCallback((e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      const newPreviews = [...pagePreviews];
      const [draggedPage] = newPreviews.splice(draggedIndex, 1);
      newPreviews.splice(targetIndex, 0, draggedPage);
      updatePages(newPreviews);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex, pagePreviews, updatePages]);

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, []);

  // Move page position
  const handleMovePage = useCallback((fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= pagePreviews.length) return;
    const newPreviews = [...pagePreviews];
    const [movedPage] = newPreviews.splice(fromIndex, 1);
    newPreviews.splice(toIndex, 0, movedPage);
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  // Selection
  const handleToggleSelect = useCallback((index: number) => {
    const newPreviews = pagePreviews.map((p, i) =>
      i === index ? { ...p, selected: !p.selected } : p
    );
    setPagePreviews(newPreviews);
  }, [pagePreviews]);

  const handleSelectAll = useCallback(() => {
    setPagePreviews(prev => prev.map(p => ({ ...p, selected: true })));
  }, []);

  const handleDeselectAll = useCallback(() => {
    setPagePreviews(prev => prev.map(p => ({ ...p, selected: false })));
  }, []);

  useSelectAllShortcut({
    onSelectAll: handleSelectAll,
    enabled: pagePreviews.length > 0 && !showAddBlankModal,
  });

  // Delete
  const handleDeletePage = useCallback((index: number) => {
    const newPreviews = pagePreviews.filter((_, i) => i !== index);
    if (newPreviews.length > 0) {
      updatePages(newPreviews);
    } else {
      setError('Cannot delete all pages.');
    }
  }, [pagePreviews, updatePages]);

  const handleDeleteSelected = useCallback(() => {
    const newPreviews = pagePreviews.filter(p => !p.selected);
    if (newPreviews.length > 0) {
      updatePages(newPreviews);
    } else {
      setError('Cannot delete all pages.');
    }
  }, [pagePreviews, updatePages]);

  // Rotate
  const handleRotatePage = useCallback((index: number, degrees: number) => {
    const newPreviews = pagePreviews.map((p, i) =>
      i === index ? { ...p, rotation: (p.rotation + degrees + 360) % 360 } : p
    );
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  const handleRotateSelected = useCallback((degrees: number) => {
    const hasSelected = pagePreviews.some(p => p.selected);
    const newPreviews = pagePreviews.map(p =>
      (hasSelected ? p.selected : true) ? { ...p, rotation: (p.rotation + degrees + 360) % 360 } : p
    );
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  // Duplicate
  const handleDuplicatePage = useCallback((index: number) => {
    const newPreviews = [...pagePreviews];
    const dup = { ...pagePreviews[index], selected: false };
    newPreviews.splice(index + 1, 0, dup);
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  const handleDuplicateSelected = useCallback(() => {
    const newPreviews: PagePreview[] = [];
    pagePreviews.forEach(p => {
      newPreviews.push(p);
      if (p.selected) {
        newPreviews.push({ ...p, selected: false });
      }
    });
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  // Add blank page
  const handleAddBlankPage = useCallback(() => {
    const insertIndex = Math.max(0, Math.min(blankPagePosition - 1, pagePreviews.length));
    const newPages: PagePreview[] = [];

    for (let i = 0; i < blankPageCount; i++) {
      newPages.push({
        pageNumber: -1,
        originalPageNumber: -1,
        sourceFileIndex: -1,
        sourceFileName: 'Blank Page',
        rotation: 0,
        selected: false,
      });
    }

    const newPreviews = [...pagePreviews];
    newPreviews.splice(insertIndex, 0, ...newPages);
    updatePages(newPreviews);
    setShowAddBlankModal(false);
  }, [blankPagePosition, blankPageCount, pagePreviews, updatePages]);

  // Download selected
  const handleDownloadSelected = useCallback(async () => {
    const selectedPages = pagePreviews.filter(p => p.selected);
    if (selectedPages.length === 0) return;

    setStatus('processing');
    setProgress(0);

    try {
      const pdfLib = await import('pdf-lib');
      const newPdf = await pdfLib.PDFDocument.create();

      // Load all source files
      const loadedPdfs: any[] = [];
      for (const sf of sourceFiles) {
        const arrayBuffer = await sf.file.arrayBuffer();
        const pdf = await pdfLib.PDFDocument.load(arrayBuffer);
        loadedPdfs.push(pdf);
      }

      for (const pageInfo of selectedPages) {
        if (pageInfo.sourceFileIndex >= 0) {
          const sourcePdf = loadedPdfs[pageInfo.sourceFileIndex];
          const [copiedPage] = await newPdf.copyPages(sourcePdf, [pageInfo.originalPageNumber - 1]);
          if (pageInfo.rotation !== 0) {
            copiedPage.setRotation(pdfLib.degrees(pageInfo.rotation));
          }
          newPdf.addPage(copiedPage);
        } else {
          // Blank page
          newPdf.addPage([595, 842]); // A4 size
        }
      }

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      await saveBlobFile(blob, 'selected_pages.pdf');

      setStatus('idle');
    } catch (err) {
      setError('Failed to download selected pages');
      setStatus('error');
    }
  }, [sourceFiles, pagePreviews]);

  // Export PDF
  const handleExport = useCallback(async () => {
    if (pagePreviews.length === 0) {
      setError('No pages to export.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      setProgress(5);
      setProgressMessage('Loading PDF library...');

      const pdfLib = await import('pdf-lib');

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      setProgress(10);
      setProgressMessage('Loading source files...');

      // Load all source PDFs
      const loadedPdfs: any[] = [];
      for (const sf of sourceFiles) {
        const arrayBuffer = await sf.file.arrayBuffer();
        const pdf = await pdfLib.PDFDocument.load(arrayBuffer);
        loadedPdfs.push(pdf);
      }

      setProgress(20);
      setProgressMessage('Creating new document...');

      const newPdf = await pdfLib.PDFDocument.create();
      const progressPerPage = 70 / pagePreviews.length;

      for (let i = 0; i < pagePreviews.length; i++) {
        if (cancelledRef.current) {
          setStatus('idle');
          return;
        }

        const pageInfo = pagePreviews[i];
        setProgress(20 + (i * progressPerPage));
        setProgressMessage(`Processing page ${i + 1} of ${pagePreviews.length}...`);

        if (pageInfo.sourceFileIndex >= 0) {
          const sourcePdf = loadedPdfs[pageInfo.sourceFileIndex];
          const [copiedPage] = await newPdf.copyPages(sourcePdf, [pageInfo.originalPageNumber - 1]);

          if (pageInfo.rotation !== 0) {
            copiedPage.setRotation(pdfLib.degrees(pageInfo.rotation));
          }

          newPdf.addPage(copiedPage);
        } else {
          // Blank page
          newPdf.addPage([595, 842]);
        }
      }

      setProgress(90);
      setProgressMessage('Saving PDF...');

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      setProgress(100);
      setProgressMessage('Complete!');
      setResult(blob);
      setStatus('complete');

    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [sourceFiles, pagePreviews]);

  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing';
  const canExport = pagePreviews.length > 0 && !isProcessing;
  const selectedCount = pagePreviews.filter(p => p.selected).length;
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  const totalPages = pagePreviews.length;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={true}
        maxFiles={1000}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={sourceFiles.length > 0
          ? (tTools('pdfMultiTool.addMoreFiles') || 'Add More PDF Files')
          : (tTools('pdfMultiTool.uploadLabel') || 'Upload PDF Files')
        }
        description={tTools('pdfMultiTool.uploadDescription') || 'Drag and drop PDF files here, or click to browse. You can upload multiple files.'}
      />

      {/* Error Message */}
      {error && (
        <Card variant="outlined" className="!bg-red-50 dark:!bg-red-900/20 !border-red-200 dark:!border-red-800">
          <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
        </Card>
      )}

      {/* Editor Panel */}
      {pagePreviews.length > 0 && (
        <Card variant="outlined" size="lg">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-2 pb-4 mb-4 border-b border-[hsl(var(--color-border))]">
            {/* Edit Actions */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleUndo}
                disabled={!canUndo || isProcessing}
                title="Undo"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                {tTools('pdfMultiTool.undo') || 'Undo'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRedo}
                disabled={!canRedo || isProcessing}
                title="Redo"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
                </svg>
                {tTools('pdfMultiTool.redo') || 'Redo'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                disabled={isProcessing}
                title="Reset"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {tTools('pdfMultiTool.reset') || 'Reset'}
              </Button>
            </div>

            <div className="w-px h-6 bg-[hsl(var(--color-border))]" />

            {/* Selection Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={handleSelectAll} disabled={isProcessing}>
                {tTools('pdfMultiTool.selectAll') || 'Select All'}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDeselectAll} disabled={selectedCount === 0 || isProcessing}>
                {tTools('pdfMultiTool.deselectAll') || 'Deselect'}
              </Button>
            </div>

            <div className="w-px h-6 bg-[hsl(var(--color-border))]" />

            {/* Rotate Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => handleRotateSelected(-90)} disabled={isProcessing}>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8M3 3v5h5" />
                </svg>
                {tTools('pdfMultiTool.rotateLeft') || 'Left'}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleRotateSelected(90)} disabled={isProcessing}>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-9-9 9.75 9.75 0 016.74 2.74L21 8M21 3v5h-5" />
                </svg>
                {tTools('pdfMultiTool.rotateRight') || 'Right'}
              </Button>
            </div>

            <div className="w-px h-6 bg-[hsl(var(--color-border))]" />

            {/* Transform Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={handleDuplicateSelected} disabled={selectedCount === 0 || isProcessing}>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                {tTools('pdfMultiTool.duplicate') || 'Duplicate'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAddBlankModal(true)}
                disabled={isProcessing}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {tTools('pdfMultiTool.addBlank') || 'Add Blank'}
              </Button>
            </div>

            <div className="w-px h-6 bg-[hsl(var(--color-border))]" />

            {/* Delete Action */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeleteSelected}
              disabled={selectedCount === 0 || isProcessing}
              className="!text-red-600 !border-red-200 hover:!bg-red-50 dark:!border-red-800 dark:hover:!bg-red-900/20"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              {tTools('pdfMultiTool.delete') || 'Delete'}
            </Button>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Info */}
            <div className="text-sm text-[hsl(var(--color-muted-foreground))]">
              {totalPages} {totalPages === 1 ? 'page' : 'pages'}
              {selectedCount > 0 && ` • ${selectedCount} selected`}
            </div>

            {/* Clear All */}
            <Button variant="ghost" size="sm" onClick={handleClearAll} disabled={isProcessing}>
              {tTools('pdfMultiTool.clearAll') || 'Clear All'}
            </Button>
          </div>

          {/* Page Grid */}
          {isLoadingPreviews ? (
            <div className="flex items-center justify-center py-16">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[hsl(var(--color-primary))] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {t('status.loading') || 'Loading previews...'}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-h-[500px] overflow-y-auto p-1">
              {pagePreviews.map((page, index) => (
                <div
                  key={`page-${index}`}
                  draggable={!isProcessing}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`
                    group relative rounded-lg cursor-grab transition-all duration-200
                    ${draggedIndex === index ? 'opacity-50 scale-95' : ''}
                    ${dragOverIndex === index ? 'ring-2 ring-[hsl(var(--color-primary))] ring-offset-2' : ''}
                  `}
                >
                  {/* Page Card */}
                  <div
                    onClick={() => handleToggleSelect(index)}
                    className={`
                      relative aspect-[3/4] rounded-lg border-2 overflow-hidden transition-all cursor-pointer
                      ${page.selected
                        ? 'border-[hsl(var(--color-primary))] ring-2 ring-[hsl(var(--color-primary)/0.3)]'
                        : 'border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary)/0.5)]'
                      }
                    `}
                  >
                    {page.thumbnail ? (
                      <img
                        src={page.thumbnail}
                        alt={`Page ${index + 1}`}
                        className="w-full h-full object-contain bg-white dark:bg-slate-800"
                        style={{ transform: `rotate(${page.rotation}deg)` }}
                        draggable={false}
                      />
                    ) : (
                      <div className="w-full h-full bg-[hsl(var(--color-muted))] flex items-center justify-center">
                        <span className="text-lg font-medium text-[hsl(var(--color-muted-foreground))]">
                          {page.sourceFileIndex === -1 ? '◻' : page.originalPageNumber}
                        </span>
                      </div>
                    )}

                    {/* Selection indicator */}
                    {page.selected && (
                      <div className="absolute top-2 left-2 w-5 h-5 bg-[hsl(var(--color-primary))] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}

                    {/* Move buttons */}
                    <div className="absolute bottom-1 left-1 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleMovePage(index, index - 1); }}
                        disabled={index === 0 || isProcessing}
                        className="w-5 h-5 bg-white/90 dark:bg-slate-800/90 rounded shadow flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Move left"
                        title="Move left"
                      >
                        <svg className="w-3 h-3 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleMovePage(index, index + 1); }}
                        disabled={index === pagePreviews.length - 1 || isProcessing}
                        className="w-5 h-5 bg-white/90 dark:bg-slate-800/90 rounded shadow flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Move right"
                        title="Move right"
                      >
                        <svg className="w-3 h-3 text-slate-700 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Page Info */}
                  <div className="mt-1 text-center">
                    <p className="text-xs font-medium text-[hsl(var(--color-foreground))]">
                      {index + 1}
                      {page.rotation !== 0 && <span className="text-[hsl(var(--color-muted-foreground))]"> ({page.rotation}°)</span>}
                    </p>
                    {sourceFiles.length > 1 && page.sourceFileIndex >= 0 && (
                      <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] truncate" title={page.sourceFileName}>
                        {page.sourceFileName.length > 12 ? page.sourceFileName.slice(0, 10) + '...' : page.sourceFileName}
                      </p>
                    )}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute top-1 right-1 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => { e.stopPropagation(); handleRotatePage(index, -90); }}
                      className="w-6 h-6 bg-white/90 dark:bg-slate-800/90 rounded shadow flex items-center justify-center hover:bg-white dark:hover:bg-slate-700"
                      title="Rotate left"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8M3 3v5h5" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleRotatePage(index, 90); }}
                      className="w-6 h-6 bg-white/90 dark:bg-slate-800/90 rounded shadow flex items-center justify-center hover:bg-white dark:hover:bg-slate-700"
                      title="Rotate right"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-9-9 9.75 9.75 0 016.74 2.74L21 8M21 3v5h-5" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDuplicatePage(index); }}
                      className="w-6 h-6 bg-white/90 dark:bg-slate-800/90 rounded shadow flex items-center justify-center hover:bg-white dark:hover:bg-slate-700"
                      title="Duplicate"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="9" y="9" width="13" height="13" rx="2" strokeWidth={2} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeletePage(index); }}
                      className="w-6 h-6 bg-red-500/90 rounded shadow flex items-center justify-center hover:bg-red-600 text-white"
                      title="Delete"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-[hsl(var(--color-border))]">
            <Button
              variant="outline"
              size="md"
              onClick={handleDownloadSelected}
              disabled={selectedCount === 0 || isProcessing}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {tTools('pdfMultiTool.downloadSelected') || 'Download Selected'}
            </Button>

            <Button
              variant="primary"
              size="md"
              onClick={handleExport}
              disabled={!canExport}
              loading={isProcessing}
            >
              {isProcessing
                ? (t('status.processing') || 'Processing...')
                : (tTools('pdfMultiTool.exportPDF') || 'Export PDF')
              }
            </Button>

            {result && (
              <DownloadButton
                file={result}
                filename="edited.pdf"
                variant="secondary"
                size="md"
                showFileSize
              />
            )}
          </div>
        </Card>
      )}

      {/* Add Blank Page Modal */}
      {showAddBlankModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setShowAddBlankModal(false)}>
          <Card
            variant="elevated"
            className="max-w-sm w-full mx-4"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <h3 className="text-lg font-semibold mb-4">
              {tTools('pdfMultiTool.addBlankPageTitle') || 'Add Blank Pages'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--color-muted-foreground))]">
                  {tTools('pdfMultiTool.numberOfPages') || 'Number of pages'}
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={blankPageCount}
                  onChange={(e) => setBlankPageCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                  className="w-full px-3 py-2 border border-[hsl(var(--color-border))] rounded-lg bg-[hsl(var(--color-background))]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--color-muted-foreground))]">
                  {tTools('pdfMultiTool.insertPosition') || 'Insert at position'}
                </label>
                <input
                  type="number"
                  min="1"
                  max={pagePreviews.length + 1}
                  value={blankPagePosition}
                  onChange={(e) => setBlankPagePosition(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2 border border-[hsl(var(--color-border))] rounded-lg bg-[hsl(var(--color-background))]"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setShowAddBlankModal(false)} className="flex-1">
                  {t('buttons.cancel') || 'Cancel'}
                </Button>
                <Button variant="primary" onClick={handleAddBlankPage} className="flex-1">
                  {t('buttons.add') || 'Add'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Processing Progress */}
      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={handleCancel}
          showPercentage
        />
      )}

      {/* Success Message */}
      {status === 'complete' && result && (
        <Card variant="outlined" className="!bg-green-50 dark:!bg-green-900/20 !border-green-200 dark:!border-green-800">
          <p className="text-sm font-medium text-green-700 dark:text-green-400">
            {tTools('pdfMultiTool.successMessage') || 'PDF processed successfully! Click the download button to save your file.'}
          </p>
        </Card>
      )}
    </div>
  );
}

export default PDFMultiTool;

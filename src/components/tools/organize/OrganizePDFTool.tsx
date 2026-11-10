'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { organizePDF } from '@/lib/pdf/processors/organize';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import type { ProcessOutput } from '@/types/pdf';

export interface OrganizePDFToolProps {
  /** Custom class name */
  className?: string;
}

interface PagePreview {
  pageNumber: number;
  thumbnail?: string;
}

/**
 * OrganizePDFTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for reordering PDF pages with drag-and-drop functionality.
 */
export function OrganizePDFTool({ className = '' }: OrganizePDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Page previews and order
  const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
  const [pageOrder, setPageOrder] = useState<number[]>([]);
  const [isLoadingPreviews, setIsLoadingPreviews] = useState(false);

  // Drag state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Load PDF and generate page previews
   */
  const loadPdfPreviews = useCallback(async (pdfFile: File) => {
    setIsLoadingPreviews(true);
    setPagePreviews([]);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      setTotalPages(pdf.numPages);

      // Initialize page order
      const initialOrder = Array.from({ length: pdf.numPages }, (_, i) => i + 1);
      setPageOrder(initialOrder);

      // Generate thumbnails for each page
      const previews: PagePreview[] = [];
      const maxPreviewPages = Math.min(pdf.numPages, 100);

      for (let i = 1; i <= maxPreviewPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 0.3 });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;

          previews.push({
            pageNumber: i,
            thumbnail: canvas.toDataURL('image/jpeg', 0.85),
          });
        }
      }

      // Add remaining pages without thumbnails
      for (let i = maxPreviewPages + 1; i <= pdf.numPages; i++) {
        previews.push({ pageNumber: i });
      }

      setPagePreviews(previews);
    } catch (err) {
      console.error('Failed to load PDF previews:', err);
      setError('Failed to load PDF preview. The file may be corrupted or encrypted.');
    } finally {
      setIsLoadingPreviews(false);
    }
  }, []);

  /**
   * Handle file selected from uploader
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setResult(null);
      loadPdfPreviews(selectedFile);
    }
  }, [loadPdfPreviews]);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Clear file and reset state
   */
  const handleClearFile = useCallback(() => {
    setFile(null);
    setTotalPages(0);
    setPagePreviews([]);
    setPageOrder([]);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Handle drag start
   */
  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', String(index));
      e.dataTransfer.effectAllowed = 'move';
    }
  }, []);

  /**
   * Handle drag over
   */
  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  }, [draggedIndex]);

  /**
   * Handle drop
   */
  const handleDrop = useCallback((e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      setPageOrder(prev => {
        const newOrder = [...prev];
        const [draggedPage] = newOrder.splice(draggedIndex, 1);
        newOrder.splice(targetIndex, 0, draggedPage);
        return newOrder;
      });
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex]);

  /**
   * Handle drag end
   */
  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, []);

  /**
   * Move page to a new position
   */
  const handleMovePage = useCallback((fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= pageOrder.length) return;
    setPageOrder(prev => {
      const newOrder = [...prev];
      const [movedPage] = newOrder.splice(fromIndex, 1);
      newOrder.splice(toIndex, 0, movedPage);
      return newOrder;
    });
  }, [pageOrder.length]);

  /**
   * Reset to original order
   */
  const handleResetOrder = useCallback(() => {
    setPageOrder(Array.from({ length: totalPages }, (_, i) => i + 1));
    setResult(null);
  }, [totalPages]);

  /**
   * Reverse page order
   */
  const handleReverseOrder = useCallback(() => {
    setPageOrder(prev => [...prev].reverse());
    setResult(null);
  }, []);

  /**
   * Duplicate a page at the given index
   */
  const handleDuplicatePage = useCallback((index: number) => {
    setPageOrder(prev => {
      const newOrder = [...prev];
      const pageToDuplicate = newOrder[index];
      newOrder.splice(index + 1, 0, pageToDuplicate);
      return newOrder;
    });
    setResult(null);
  }, []);

  /**
   * Delete a page at the given index
   */
  const handleDeletePage = useCallback((index: number) => {
    if (pageOrder.length <= 1) return; // Prevent deleting the last page
    setPageOrder(prev => {
      const newOrder = [...prev];
      newOrder.splice(index, 1);
      return newOrder;
    });
    setResult(null);
  }, [pageOrder.length]);

  /**
   * Check if order has changed
   */
  const hasOrderChanged = useCallback(() => {
    const originalOrder = Array.from({ length: totalPages }, (_, i) => i + 1);
    return JSON.stringify(pageOrder) !== JSON.stringify(originalOrder);
  }, [pageOrder, totalPages]);

  /**
   * Handle organize operation
   */
  const handleOrganize = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    if (pageOrder.length === 0) {
      setError('No pages to organize.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await organizePDF(
        file,
        pageOrder,
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || '');
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to organize PDF file.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, pageOrder]);

  /**
   * Handle cancel operation
   */
  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Format file size
   */
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  /**
   * Get preview for a page number
   */
  const getPreviewForPage = (pageNum: number): PagePreview | undefined => {
    return pagePreviews.find(p => p.pageNumber === pageNum);
  };

  const isProcessing = status === 'processing' || status === 'uploading';
  const canOrganize = file && totalPages > 0 && !isProcessing;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('organizePdf.uploadLabel') || 'Upload PDF File'}
          description={tTools('organizePdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
        />
      )}

      {/* Error Message */}
      {error && (
        <div
          className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700"
          role="alert"
        >
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* File Info */}
      {file && (
        <Card variant="outlined">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 2v6h6" fill="white" />
                <text x="7" y="17" fontSize="6" fill="white" fontWeight="bold">PDF</text>
              </svg>
              <div>
                <p className="font-medium text-[hsl(var(--color-foreground))]">{file.name}</p>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {formatSize(file.size)} • {totalPages} {totalPages === 1 ? 'page' : 'pages'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFile}
              disabled={isProcessing}
            >
              {t('buttons.remove') || 'Remove'}
            </Button>
          </div>
        </Card>
      )}

      {/* Page Reorder Grid */}
      {file && pagePreviews.length > 0 && (
        <Card variant="outlined" size="lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
              {tTools('organizePdf.reorderTitle') || 'Drag to Reorder Pages'}
            </h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReverseOrder}
                disabled={isProcessing}
              >
                {tTools('organizePdf.reverseOrder') || 'Reverse Order'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResetOrder}
                disabled={isProcessing || !hasOrderChanged()}
              >
                {tTools('organizePdf.resetOrder') || 'Reset Order'}
              </Button>
            </div>
          </div>

          <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">
            {tTools('organizePdf.reorderHint') || 'Drag and drop pages to reorder them. Use the arrows to move pages up or down.'}
          </p>

          {isLoadingPreviews ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-[hsl(var(--color-primary))] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {t('status.loading') || 'Loading previews...'}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 max-h-[500px] overflow-y-auto p-1">
              {pageOrder.map((pageNum, index) => {
                const preview = getPreviewForPage(pageNum);
                return (
                  <div
                    key={`${pageNum}-${index}`}
                    draggable={!isProcessing}
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragEnd={handleDragEnd}
                    className={`
                      relative aspect-[3/4] rounded-[var(--radius-md)] border-2 overflow-hidden transition-all
                      ${draggedIndex === index ? 'opacity-50 border-dashed scale-95' : ''}
                      ${dragOverIndex === index ? 'border-[hsl(var(--color-primary))] ring-2 ring-[hsl(var(--color-primary)/0.3)]' : 'border-[hsl(var(--color-border))]'}
                      ${!isProcessing ? 'cursor-grab hover:border-[hsl(var(--color-primary)/0.5)]' : ''}
                    `}
                  >
                    {preview?.thumbnail ? (
                      <img
                        src={preview.thumbnail}
                        alt={`Page ${pageNum}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    ) : (
                      <div className="w-full h-full bg-[hsl(var(--color-muted))] flex items-center justify-center">
                        <span className="text-lg font-medium text-[hsl(var(--color-muted-foreground))]">
                          {pageNum}
                        </span>
                      </div>
                    )}

                    {/* Page number badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 text-center font-medium">
                      {pageNum}
                    </div>

                    {/* Position indicator */}
                    <div className="absolute top-1 left-1 w-5 h-5 bg-[hsl(var(--color-primary))] rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                      {index + 1}
                    </div>

                    {/* Move buttons */}
                    <div className="absolute top-1 right-1 flex flex-col gap-0.5">
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleMovePage(index, index - 1); }}
                        disabled={index === 0 || isProcessing}
                        className="w-5 h-5 bg-white/90 rounded flex items-center justify-center hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Move up"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M18 15l-6-6-6 6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleMovePage(index, index + 1); }}
                        disabled={index === pageOrder.length - 1 || isProcessing}
                        className="w-5 h-5 bg-white/90 rounded flex items-center justify-center hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Move down"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {/* Duplicate and Delete buttons */}
                    <div className="absolute bottom-6 right-1 flex gap-0.5">
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleDuplicatePage(index); }}
                        disabled={isProcessing}
                        className="w-5 h-5 bg-blue-500/90 rounded flex items-center justify-center hover:bg-blue-600 text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Duplicate page"
                        title="Duplicate"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleDeletePage(index); }}
                        disabled={pageOrder.length <= 1 || isProcessing}
                        className="w-5 h-5 bg-red-500/90 rounded flex items-center justify-center hover:bg-red-600 text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Delete page"
                        title="Delete"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3,6 5,6 21,6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {hasOrderChanged() && (
            <div className="mt-4 p-3 rounded-[var(--radius-md)] bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-700">
                {tTools('organizePdf.orderChanged') || 'Page order has been changed. Click "Apply Changes" to save.'}
              </p>
            </div>
          )}
        </Card>
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

      {/* Action Buttons */}
      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleOrganize}
            disabled={!canOrganize}
            loading={isProcessing}
          >
            {isProcessing
              ? (t('status.processing') || 'Processing...')
              : (tTools('organizePdf.applyButton') || 'Apply Changes')
            }
          </Button>

          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace(/\.pdf$/i, '_organized.pdf')}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}

      {/* Success Message */}
      {status === 'complete' && result && (
        <div
          className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
          role="status"
        >
          <p className="text-sm font-medium">
            {tTools('organizePdf.successMessage') || 'PDF pages reorganized successfully! Click the download button to save your file.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default OrganizePDFTool;

'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { deletePages, parsePageSelection } from '@/lib/pdf/processors/delete';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { useSelectAllShortcut } from '@/hooks/useSelectAllShortcut';
import type { ProcessOutput } from '@/types/pdf';

export interface DeletePagesToolProps {
  /** Custom class name */
  className?: string;
}

interface PagePreview {
  pageNumber: number;
  thumbnail?: string;
}

/**
 * DeletePagesTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for deleting specific pages from a PDF.
 */
export function DeletePagesTool({ className = '' }: DeletePagesToolProps) {
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
  
  // Page selection
  const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [pageInput, setPageInput] = useState('');
  const [isLoadingPreviews, setIsLoadingPreviews] = useState(false);
  
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
      
      // Generate thumbnails for each page
      const previews: PagePreview[] = [];
      const maxPreviewPages = Math.min(pdf.numPages, 50);
      
      for (let i = 1; i <= maxPreviewPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 0.15 });
        
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
            thumbnail: canvas.toDataURL('image/jpeg', 0.6),
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
      setSelectedPages(new Set());
      setPageInput('');
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
    setSelectedPages(new Set());
    setPageInput('');
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Toggle page selection
   */
  const handleTogglePage = useCallback((pageNumber: number) => {
    setSelectedPages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(pageNumber)) {
        newSet.delete(pageNumber);
      } else {
        newSet.add(pageNumber);
      }
      return newSet;
    });
    setResult(null);
  }, []);

  /**
   * Select all pages
   */
  const handleSelectAll = useCallback(() => {
    // Select all but one page (can't delete all pages)
    const allButOne = pagePreviews.slice(0, -1).map(p => p.pageNumber);
    setSelectedPages(new Set(allButOne));
    setResult(null);
  }, [pagePreviews]);

  useSelectAllShortcut({
    onSelectAll: handleSelectAll,
    enabled: pagePreviews.length > 0,
  });

  /**
   * Deselect all pages
   */
  const handleDeselectAll = useCallback(() => {
    setSelectedPages(new Set());
    setResult(null);
  }, []);

  /**
   * Apply page input to selection
   */
  const handleApplyPageInput = useCallback(() => {
    if (pageInput.trim() && totalPages > 0) {
      const pages = parsePageSelection(pageInput, totalPages);
      // Ensure we don't select all pages
      if (pages.length >= totalPages) {
        setError('Cannot delete all pages. At least one page must remain.');
        return;
      }
      setSelectedPages(new Set(pages));
      setResult(null);
      setError(null);
    }
  }, [pageInput, totalPages]);

  /**
   * Handle delete operation
   */
  const handleDelete = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    if (selectedPages.size === 0) {
      setError('Please select at least one page to delete.');
      return;
    }

    if (selectedPages.size >= totalPages) {
      setError('Cannot delete all pages. At least one page must remain.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const pages = Array.from(selectedPages).sort((a, b) => a - b);

    try {
      const output: ProcessOutput = await deletePages(
        file,
        pages,
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
        setError(output.error?.message || 'Failed to delete pages.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, selectedPages, totalPages]);

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

  const isProcessing = status === 'processing' || status === 'uploading';
  const canDelete = file && totalPages > 0 && selectedPages.size > 0 && selectedPages.size < totalPages && !isProcessing;
  const remainingPages = totalPages - selectedPages.size;

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
          label={tTools('deletePages.uploadLabel') || 'Upload PDF File'}
          description={tTools('deletePages.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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

      {/* Page Selection */}
      {file && totalPages > 0 && (
        <Card variant="outlined" size="lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
              {tTools('deletePages.selectTitle') || 'Select Pages to Delete'}
              {selectedPages.size > 0 && (
                <span className="ml-2 text-red-600">
                  ({selectedPages.size} selected, {remainingPages} will remain)
                </span>
              )}
            </h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleSelectAll} disabled={isProcessing || totalPages <= 1}>
                {t('buttons.selectAll') || 'Select All'}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDeselectAll} disabled={isProcessing}>
                {t('buttons.deselectAll') || 'Deselect All'}
              </Button>
            </div>
          </div>

          {/* Warning about deletion */}
          <div className="mb-4 p-3 rounded-[var(--radius-md)] bg-amber-50 border border-amber-200 text-amber-800">
            <p className="text-sm">
              <strong>⚠️ {tTools('deletePages.warning') || 'Warning'}:</strong>{' '}
              {tTools('deletePages.warningText') || 'Selected pages will be permanently removed from the PDF. At least one page must remain.'}
            </p>
          </div>

          {/* Page range input */}
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              placeholder="e.g., 1-5, 8, 10-15"
              disabled={isProcessing}
              className="flex-1 px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] placeholder:text-[hsl(var(--color-muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
            />
            <Button
              variant="secondary"
              size="md"
              onClick={handleApplyPageInput}
              disabled={isProcessing || !pageInput.trim()}
            >
              {t('buttons.apply') || 'Apply'}
            </Button>
          </div>

          <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">
            {tTools('deletePages.selectHint') || 'Click pages to select them for deletion, or enter page numbers/ranges above.'}
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
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 max-h-[400px] overflow-y-auto p-1">
              {pagePreviews.map((preview) => (
                <button
                  key={preview.pageNumber}
                  type="button"
                  onClick={() => handleTogglePage(preview.pageNumber)}
                  disabled={isProcessing}
                  className={`relative aspect-[3/4] rounded-[var(--radius-md)] border-2 overflow-hidden transition-all ${
                    selectedPages.has(preview.pageNumber)
                      ? 'border-red-500 ring-2 ring-red-300 opacity-60'
                      : 'border-[hsl(var(--color-border))] hover:border-red-300'
                  }`}
                  aria-label={`Page ${preview.pageNumber}${selectedPages.has(preview.pageNumber) ? ' (selected for deletion)' : ''}`}
                >
                  {preview.thumbnail ? (
                    <img
                      src={preview.thumbnail}
                      alt={`Page ${preview.pageNumber}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[hsl(var(--color-muted))] flex items-center justify-center">
                      <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                        {preview.pageNumber}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-0.5 text-center">
                    {preview.pageNumber}
                  </div>
                  {selectedPages.has(preview.pageNumber) && (
                    <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
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
            onClick={handleDelete}
            disabled={!canDelete}
            loading={isProcessing}
            className="bg-red-600 hover:bg-red-700"
          >
            {isProcessing 
              ? (t('status.processing') || 'Processing...') 
              : (tTools('deletePages.deleteButton') || `Delete ${selectedPages.size} Page${selectedPages.size !== 1 ? 's' : ''}`)
            }
          </Button>

          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace('.pdf', '_pages_deleted.pdf')}
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
            {tTools('deletePages.successMessage') || `Successfully deleted ${selectedPages.size} page(s)! The PDF now has ${remainingPages} page(s). Click the download button to save your file.`}
          </p>
        </div>
      )}
    </div>
  );
}

export default DeletePagesTool;

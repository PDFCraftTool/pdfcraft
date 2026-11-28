'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Image as ImageIcon, FileText, FileSpreadsheet, Presentation } from 'lucide-react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { mergePDFs } from '@/lib/pdf';
import type { MergeOptions, UploadedFile, ProcessOutput } from '@/types/pdf';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff', '.tif', '.svg', '.heic', '.heif'];
const TEXT_EXTENSIONS = ['.txt', '.text', '.md', '.markdown', '.log'];
const WORD_EXTENSIONS = ['.docx', '.doc', '.odt', '.rtf'];
const EXCEL_EXTENSIONS = ['.xlsx', '.xls', '.ods', '.csv'];
const PPT_EXTENSIONS = ['.pptx', '.ppt', '.odp'];

function getFileTypeCategory(file: File): 'pdf' | 'image' | 'text' | 'word' | 'excel' | 'powerpoint' {
  const mime = file.type?.toLowerCase() || '';
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  if (mime === 'application/pdf' || ext === '.pdf') return 'pdf';
  if (mime.startsWith('image/') || IMAGE_EXTENSIONS.includes(ext)) return 'image';
  if (mime.startsWith('text/') || TEXT_EXTENSIONS.includes(ext)) return 'text';
  if (WORD_EXTENSIONS.includes(ext)) return 'word';
  if (EXCEL_EXTENSIONS.includes(ext)) return 'excel';
  if (PPT_EXTENSIONS.includes(ext)) return 'powerpoint';
  return 'pdf';
}

function FileThumbnail({ file }: { file: File }) {
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const category = getFileTypeCategory(file);

  useEffect(() => {
    if (category === 'image') {
      const url = URL.createObjectURL(file);
      setThumbUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file, category]);

  if (category === 'image' && thumbUrl) {
    return (
      <div className="flex-shrink-0 w-8 h-8 rounded border border-[hsl(var(--color-border))] overflow-hidden bg-[hsl(var(--color-muted)/0.3)] flex items-center justify-center">
        <img src={thumbUrl} alt={file.name} className="w-full h-full object-cover" />
      </div>
    );
  }

  if (category === 'image') {
    return (
      <div className="flex-shrink-0 w-8 h-8 rounded bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center">
        <ImageIcon className="w-4 h-4" />
      </div>
    );
  }

  if (category === 'text') {
    return (
      <div className="flex-shrink-0 w-8 h-8 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
        <FileText className="w-4 h-4" />
      </div>
    );
  }

  if (category === 'word') {
    return (
      <div className="flex-shrink-0 w-8 h-8 rounded bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
        <FileText className="w-4 h-4" />
      </div>
    );
  }

  if (category === 'excel') {
    return (
      <div className="flex-shrink-0 w-8 h-8 rounded bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center">
        <FileSpreadsheet className="w-4 h-4" />
      </div>
    );
  }

  if (category === 'powerpoint') {
    return (
      <div className="flex-shrink-0 w-8 h-8 rounded bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400 flex items-center justify-center">
        <Presentation className="w-4 h-4" />
      </div>
    );
  }

  // PDF
  return (
    <div className="flex-shrink-0">
      <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6" fill="white" />
        <text x="7" y="17" fontSize="6" fill="white" fontWeight="bold">PDF</text>
      </svg>
    </div>
  );
}

/**
 * Generate a unique ID for files
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface MergePDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * MergePDFTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for merging multiple PDF files with drag-to-reorder functionality.
 */
export function MergePDFTool({ className = '' }: MergePDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preserveBookmarks, setPreserveBookmarks] = useState(true);
  
  // Drag state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle files selected from uploader
   */
  const handleFilesSelected = useCallback((newFiles: File[]) => {
    const uploadedFiles: UploadedFile[] = newFiles.map(file => ({
      id: generateId(),
      file,
      status: 'pending' as const,
    }));
    
    setFiles(prev => [...prev, ...uploadedFiles]);
    setError(null);
    setResult(null);
  }, []);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Remove a file from the list
   */
  const handleRemoveFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setResult(null);
  }, []);

  /**
   * Clear all files
   */
  const handleClearAll = useCallback(() => {
    setFiles([]);
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
      setFiles(prev => {
        const newFiles = [...prev];
        const [draggedFile] = newFiles.splice(draggedIndex, 1);
        newFiles.splice(targetIndex, 0, draggedFile);
        return newFiles;
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
   * Move file up in the list
   */
  const handleMoveUp = useCallback((index: number) => {
    if (index === 0) return;
    setFiles(prev => {
      const newFiles = [...prev];
      [newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]];
      return newFiles;
    });
  }, []);

  /**
   * Move file down in the list
   */
  const handleMoveDown = useCallback((index: number) => {
    setFiles(prev => {
      if (index === prev.length - 1) return prev;
      const newFiles = [...prev];
      [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
      return newFiles;
    });
  }, []);

  /**
   * Handle merge operation
   */
  const handleMerge = useCallback(async () => {
    if (files.length < 2) {
      setError('Please add at least 2 files to merge.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: MergeOptions = {
      preserveBookmarks,
      pageOrder: 'sequential',
    };

    try {
      const output: ProcessOutput = await mergePDFs(
        files.map(f => f.file),
        options,
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
        setError(output.error?.message || 'Failed to merge files.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [files, preserveBookmarks]);

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
  const canMerge = files.length >= 2 && !isProcessing;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={[
          'application/pdf',
          '.pdf',
          'image/*',
          '.jpg',
          '.jpeg',
          '.png',
          '.webp',
          '.bmp',
          '.tiff',
          '.svg',
          '.heic',
          'text/plain',
          'text/markdown',
          '.txt',
          '.md',
          '.docx',
          '.doc',
          '.odt',
          '.rtf',
          '.xlsx',
          '.xls',
          '.ods',
          '.csv',
          '.pptx',
          '.ppt',
          '.odp',
        ]}
        multiple
        maxFiles={100}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={tTools('mergePdf.uploadLabel') || 'Upload Files'}
        description={tTools('mergePdf.uploadDescription') || 'Drag and drop PDF, image, Word, Excel, PowerPoint, or text files here to combine into a single PDF.'}
      />

      {/* Error Message */}
      {error && (
        <div 
          className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700"
          role="alert"
        >
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <Card variant="outlined" size="lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
              {tTools('mergePdf.filesTitle') || 'Files to Merge'} ({files.length})
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              disabled={isProcessing}
            >
              {t('buttons.clearAll') || 'Clear All'}
            </Button>
          </div>

          <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">
            {tTools('mergePdf.reorderHint') || 'Drag and drop to reorder files. Files will be merged in the order shown.'}
          </p>

          <ul className="space-y-2" role="list" aria-label="Files to merge">
            {files.map((file, index) => (
              <li
                key={file.id}
                draggable={!isProcessing}
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                className={`
                  flex items-center gap-3 p-3 rounded-[var(--radius-md)] border
                  transition-all duration-200
                  ${draggedIndex === index ? 'opacity-50 border-dashed' : ''}
                  ${dragOverIndex === index ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.05)]' : 'border-[hsl(var(--color-border))]'}
                  ${!isProcessing ? 'cursor-grab hover:bg-[hsl(var(--color-muted)/0.5)]' : ''}
                `}
              >
                {/* Drag Handle */}
                <div 
                  className="flex-shrink-0 text-[hsl(var(--color-muted-foreground))]"
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="9" cy="6" r="1.5" />
                    <circle cx="15" cy="6" r="1.5" />
                    <circle cx="9" cy="12" r="1.5" />
                    <circle cx="15" cy="12" r="1.5" />
                    <circle cx="9" cy="18" r="1.5" />
                    <circle cx="15" cy="18" r="1.5" />
                  </svg>
                </div>

                {/* File Number */}
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))] text-xs font-medium flex items-center justify-center">
                  {index + 1}
                </span>

                {/* Thumbnail / File Icon */}
                <FileThumbnail file={file.file} />

                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-[hsl(var(--color-foreground))] truncate">
                      {file.file.name}
                    </p>
                    {(() => {
                      const cat = getFileTypeCategory(file.file);
                      const fileExt = file.file.name.split('.').pop()?.toUpperCase() || '';
                      if (cat === 'image') {
                        return (
                          <span className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                            IMAGE
                          </span>
                        );
                      }
                      if (cat === 'text') {
                        return (
                          <span className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                            TEXT
                          </span>
                        );
                      }
                      if (cat === 'word') {
                        return (
                          <span className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                            {fileExt || 'DOC'}
                          </span>
                        );
                      }
                      if (cat === 'excel') {
                        return (
                          <span className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300">
                            {fileExt || 'XLS'}
                          </span>
                        );
                      }
                      if (cat === 'powerpoint') {
                        return (
                          <span className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300">
                            {fileExt || 'PPT'}
                          </span>
                        );
                      }
                      return (
                        <span className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.2 rounded bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300">
                          PDF
                        </span>
                      );
                    })()}
                  </div>
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                    {formatSize(file.file.size)}
                  </p>
                </div>

                {/* Reorder Buttons */}
                <div className="flex-shrink-0 flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleMoveUp(index)}
                    disabled={index === 0 || isProcessing}
                    className="p-1 rounded hover:bg-[hsl(var(--color-muted))] disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Move up"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveDown(index)}
                    disabled={index === files.length - 1 || isProcessing}
                    className="p-1 rounded hover:bg-[hsl(var(--color-muted))] disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Move down"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={() => handleRemoveFile(file.id)}
                  disabled={isProcessing}
                  className="flex-shrink-0 p-1 rounded hover:bg-red-100 text-[hsl(var(--color-muted-foreground))] hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed"
                  aria-label={`Remove ${file.file.name}`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Options Panel */}
      {files.length >= 2 && (
        <Card variant="outlined">
          <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
            {tTools('mergePdf.optionsTitle') || 'Merge Options'}
          </h3>
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="preserve-bookmarks"
              checked={preserveBookmarks}
              onChange={(e) => setPreserveBookmarks(e.target.checked)}
              disabled={isProcessing}
              aria-describedby="preserve-bookmarks-description"
              className="w-4 h-4 rounded border-[hsl(var(--color-border))] text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
            />
            <span id="preserve-bookmarks-description" className="text-sm text-[hsl(var(--color-foreground))]">
              {tTools('mergePdf.preserveBookmarks') || 'Preserve bookmarks (create bookmark for each file)'}
            </span>
          </label>
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
      <div className="flex flex-wrap items-center gap-4">
        <Button
          variant="primary"
          size="lg"
          onClick={handleMerge}
          disabled={!canMerge}
          loading={isProcessing}
        >
          {isProcessing 
            ? (t('status.processing') || 'Processing...') 
            : (tTools('mergePdf.mergeButton') || 'Merge PDFs')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename="merged.pdf"
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {/* Success Message */}
      {status === 'complete' && result && (
        <div 
          className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
          role="status"
        >
          <p className="text-sm font-medium">
            {tTools('mergePdf.successMessage') || 'PDFs merged successfully! Click the download button to save your file.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default MergePDFTool;

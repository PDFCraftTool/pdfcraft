'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { dividePages, type DivideOptions, type DivisionType } from '@/lib/pdf/processors/divide';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import type { ProcessOutput } from '@/types/pdf';

export interface DividePagesToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * DividePagesTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for dividing PDF pages into multiple sections.
 */
export function DividePagesTool({ className = '' }: DividePagesToolProps) {
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
  
  // Options
  const [divisionType, setDivisionType] = useState<DivisionType>('vertical');
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Load PDF to get page count
   */
  const loadPdfInfo = useCallback(async (pdfFile: File) => {
    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);
      
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      
      setTotalPages(pdf.numPages);
    } catch (err) {
      console.error('Failed to load PDF info:', err);
      setError('Failed to load PDF. The file may be corrupted or encrypted.');
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
      loadPdfInfo(selectedFile);
    }
  }, [loadPdfInfo]);

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
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Handle divide operation
   */
  const handleDivide = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: Partial<DivideOptions> = {
      divisionType,
    };

    try {
      const output: ProcessOutput = await dividePages(
        file,
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
        setError(output.error?.message || 'Failed to divide PDF pages.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, divisionType]);

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
   * Get sections per page based on division type
   */
  const getSectionsPerPage = (type: DivisionType): number => {
    switch (type) {
      case 'vertical':
      case 'horizontal':
        return 2;
      case 'grid-2x2':
        return 4;
      case 'grid-3x3':
        return 9;
      default:
        return 2;
    }
  };

  const isProcessing = status === 'processing' || status === 'uploading';
  const canProcess = file && totalPages > 0 && !isProcessing;
  const sectionsPerPage = getSectionsPerPage(divisionType);
  const outputPages = totalPages * sectionsPerPage;

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
          label={tTools('dividePages.uploadLabel') || 'Upload PDF File'}
          description={tTools('dividePages.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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

      {/* Options */}
      {file && totalPages > 0 && (
        <Card variant="outlined" size="lg">
          <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
            {tTools('dividePages.optionsTitle') || 'Division Options'}
          </h3>

          <div className="space-y-4">
            {/* Division Type */}
            <div>
              <label htmlFor="divisionType" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                {tTools('dividePages.divisionType') || 'Division Type'}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {/* Vertical Split */}
                <button
                  type="button"
                  onClick={() => setDivisionType('vertical')}
                  disabled={isProcessing}
                  className={`p-4 rounded-[var(--radius-md)] border-2 transition-all ${
                    divisionType === 'vertical'
                      ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)]'
                      : 'border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary)/0.5)]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-16 border-2 border-current rounded flex">
                      <div className="flex-1 border-r border-current" />
                      <div className="flex-1" />
                    </div>
                    <span className="text-xs font-medium">
                      {tTools('dividePages.vertical') || 'Vertical'}
                    </span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">2 parts</span>
                  </div>
                </button>

                {/* Horizontal Split */}
                <button
                  type="button"
                  onClick={() => setDivisionType('horizontal')}
                  disabled={isProcessing}
                  className={`p-4 rounded-[var(--radius-md)] border-2 transition-all ${
                    divisionType === 'horizontal'
                      ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)]'
                      : 'border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary)/0.5)]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-16 border-2 border-current rounded flex flex-col">
                      <div className="flex-1 border-b border-current" />
                      <div className="flex-1" />
                    </div>
                    <span className="text-xs font-medium">
                      {tTools('dividePages.horizontal') || 'Horizontal'}
                    </span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">2 parts</span>
                  </div>
                </button>

                {/* 2x2 Grid */}
                <button
                  type="button"
                  onClick={() => setDivisionType('grid-2x2')}
                  disabled={isProcessing}
                  className={`p-4 rounded-[var(--radius-md)] border-2 transition-all ${
                    divisionType === 'grid-2x2'
                      ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)]'
                      : 'border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary)/0.5)]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-16 border-2 border-current rounded grid grid-cols-2 grid-rows-2">
                      <div className="border-r border-b border-current" />
                      <div className="border-b border-current" />
                      <div className="border-r border-current" />
                      <div />
                    </div>
                    <span className="text-xs font-medium">
                      {tTools('dividePages.grid2x2') || '2×2 Grid'}
                    </span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">4 parts</span>
                  </div>
                </button>

                {/* 3x3 Grid */}
                <button
                  type="button"
                  onClick={() => setDivisionType('grid-3x3')}
                  disabled={isProcessing}
                  className={`p-4 rounded-[var(--radius-md)] border-2 transition-all ${
                    divisionType === 'grid-3x3'
                      ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.1)]'
                      : 'border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-primary)/0.5)]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-16 border-2 border-current rounded grid grid-cols-3 grid-rows-3">
                      {[...Array(9)].map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`${idx % 3 !== 2 ? 'border-r' : ''} ${idx < 6 ? 'border-b' : ''} border-current`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium">
                      {tTools('dividePages.grid3x3') || '3×3 Grid'}
                    </span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">9 parts</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Preview info */}
            <div className="p-3 rounded-[var(--radius-md)] bg-[hsl(var(--color-muted))]">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                {tTools('dividePages.previewInfo') || 
                  `Each of the ${totalPages} page${totalPages !== 1 ? 's' : ''} will be divided into ${sectionsPerPage} parts, resulting in ${outputPages} output page${outputPages !== 1 ? 's' : ''}.`
                }
              </p>
            </div>
          </div>
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
            onClick={handleDivide}
            disabled={!canProcess}
            loading={isProcessing}
          >
            {isProcessing 
              ? (t('status.processing') || 'Processing...') 
              : (tTools('dividePages.divideButton') || 'Divide Pages')
            }
          </Button>

          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace(/\.pdf$/i, `_divided_${divisionType}.pdf`)}
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
            {tTools('dividePages.successMessage') || 'Pages divided successfully! Click the download button to save your file.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default DividePagesTool;

'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { combineSinglePage, type CombineSinglePageOptions, type CombineOrientation } from '@/lib/pdf/processors/combine-single-page';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import type { ProcessOutput } from '@/types/pdf';

export interface CombineSinglePageToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * CombineSinglePageTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for combining PDF pages into a single continuous page.
 */
export function CombineSinglePageTool({ className = '' }: CombineSinglePageToolProps) {
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
  const [orientation, setOrientation] = useState<CombineOrientation>('vertical');
  const [spacing, setSpacing] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [addSeparator, setAddSeparator] = useState(false);
  const [separatorThickness, setSeparatorThickness] = useState(0.5);
  const [separatorColor, setSeparatorColor] = useState('#000000');
  
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
   * Handle combine operation
   */
  const handleCombine = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: Partial<CombineSinglePageOptions> = {
      orientation,
      spacing,
      backgroundColor,
      addSeparator,
      separatorThickness,
      separatorColor,
    };

    try {
      const output: ProcessOutput = await combineSinglePage(
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
        setError(output.error?.message || 'Failed to combine PDF pages.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, orientation, spacing, backgroundColor, addSeparator, separatorThickness, separatorColor]);

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
  const canProcess = file && totalPages > 0 && !isProcessing;

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
          label={tTools('combineSinglePage.uploadLabel') || 'Upload PDF File'}
          description={tTools('combineSinglePage.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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
            {tTools('combineSinglePage.optionsTitle') || 'Combine Options'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Orientation */}
            <div>
              <label htmlFor="orientation" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('combineSinglePage.orientation') || 'Orientation'}
              </label>
              <select
                id="orientation"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value as CombineOrientation)}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              >
                <option value="vertical">{tTools('combineSinglePage.vertical') || 'Vertical (Top to Bottom)'}</option>
                <option value="horizontal">{tTools('combineSinglePage.horizontal') || 'Horizontal (Left to Right)'}</option>
              </select>
            </div>

            {/* Spacing */}
            <div>
              <label htmlFor="spacing" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('combineSinglePage.spacing') || 'Page Spacing (points)'}
              </label>
              <input
                type="number"
                id="spacing"
                value={spacing}
                onChange={(e) => setSpacing(Math.max(0, parseInt(e.target.value) || 0))}
                min={0}
                max={200}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              />
            </div>

            {/* Background Color */}
            <div>
              <label htmlFor="backgroundColor" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('combineSinglePage.backgroundColor') || 'Background Color'}
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  id="backgroundColor"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  disabled={isProcessing}
                  className="w-12 h-10 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] cursor-pointer"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  disabled={isProcessing}
                  className="flex-1 px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                />
              </div>
            </div>

            {/* Add Separator */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="addSeparator"
                checked={addSeparator}
                onChange={(e) => setAddSeparator(e.target.checked)}
                disabled={isProcessing}
                className="w-4 h-4 rounded border-[hsl(var(--color-border))]"
              />
              <label htmlFor="addSeparator" className="text-sm text-[hsl(var(--color-foreground))]">
                {tTools('combineSinglePage.addSeparator') || 'Add separator lines between pages'}
              </label>
            </div>

            {/* Separator Options */}
            {addSeparator && (
              <>
                <div>
                  <label htmlFor="separatorThickness" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                    {tTools('combineSinglePage.separatorThickness') || 'Separator Thickness (points)'}
                  </label>
                  <input
                    type="number"
                    id="separatorThickness"
                    value={separatorThickness}
                    onChange={(e) => setSeparatorThickness(Math.max(0.1, parseFloat(e.target.value) || 0.5))}
                    min={0.1}
                    max={10}
                    step={0.1}
                    disabled={isProcessing}
                    className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                  />
                </div>

                <div>
                  <label htmlFor="separatorColor" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                    {tTools('combineSinglePage.separatorColor') || 'Separator Color'}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      id="separatorColor"
                      value={separatorColor}
                      onChange={(e) => setSeparatorColor(e.target.value)}
                      disabled={isProcessing}
                      className="w-12 h-10 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={separatorColor}
                      onChange={(e) => setSeparatorColor(e.target.value)}
                      disabled={isProcessing}
                      className="flex-1 px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Preview info */}
          <div className="mt-4 p-3 rounded-[var(--radius-md)] bg-[hsl(var(--color-muted))]">
            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
              {tTools('combineSinglePage.previewInfo', { pages: totalPages, orientation: orientation === 'vertical' ? tTools('combineSinglePage.vertical') : tTools('combineSinglePage.horizontal') }) || 
                `${totalPages} pages will be combined into 1 continuous ${orientation === 'vertical' ? 'vertical' : 'horizontal'} page.`
              }
            </p>
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
            onClick={handleCombine}
            disabled={!canProcess}
            loading={isProcessing}
          >
            {isProcessing 
              ? (t('status.processing') || 'Processing...') 
              : (tTools('combineSinglePage.combineButton') || 'Combine Pages')
            }
          </Button>

          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace(/\.pdf$/i, '_combined.pdf')}
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
            {tTools('combineSinglePage.successMessage') || 'Pages combined successfully! Click the download button to save your file.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default CombineSinglePageTool;

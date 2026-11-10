'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createNUpPDF, type NUpOptions } from '@/lib/pdf/processors/n-up';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import type { ProcessOutput } from '@/types/pdf';

export interface NUpPDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * NUpPDFTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for creating N-Up PDF layouts.
 */
export function NUpPDFTool({ className = '' }: NUpPDFToolProps) {
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
  const [pagesPerSheet, setPagesPerSheet] = useState<2 | 4 | 9 | 16 | 'custom'>(4);
  const [customCols, setCustomCols] = useState(2);
  const [customRows, setCustomRows] = useState(2);
  const [pageSize, setPageSize] = useState<'A4' | 'Letter' | 'Legal' | 'A3'>('A4');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape' | 'auto'>('auto');
  const [layoutDirection, setLayoutDirection] = useState<'horizontal' | 'vertical'>('horizontal');
  const [useMargins, setUseMargins] = useState(true);
  const [addBorder, setAddBorder] = useState(false);
  const [borderColor, setBorderColor] = useState('#000000');

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
   * Handle N-Up operation
   */
  const handleCreateNUp = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: Partial<NUpOptions> = {
      pagesPerSheet,
      customCols,
      customRows,
      pageSize,
      orientation,
      layoutDirection,
      useMargins,
      addBorder,
      borderColor,
    };

    try {
      const output: ProcessOutput = await createNUpPDF(
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
        setError(output.error?.message || 'Failed to create N-Up PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, pagesPerSheet, customCols, customRows, pageSize, orientation, layoutDirection, useMargins, addBorder, borderColor]);

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

  // Calculate grid dimensions based on current options
  const getGridDimensions = (): [number, number] => {
    if (pagesPerSheet === 'custom') {
      return [Math.max(1, customCols), Math.max(1, customRows)];
    }
    if (layoutDirection === 'vertical' && pagesPerSheet === 2) {
      return [1, 2];
    }
    switch (pagesPerSheet) {
      case 2: return [2, 1];
      case 4: return [2, 2];
      case 9: return [3, 3];
      case 16: return [4, 4];
      default: return [2, 2];
    }
  };

  const [gridCols, gridRows] = getGridDimensions();
  const actualPagesPerSheet = gridCols * gridRows;
  const outputSheets = Math.ceil(totalPages / actualPagesPerSheet);

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
          label={tTools('nUpPdf.uploadLabel') || 'Upload PDF File'}
          description={tTools('nUpPdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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
            {tTools('nUpPdf.optionsTitle') || 'N-Up Options'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pages per sheet */}
            <div>
              <label htmlFor="pagesPerSheet" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('nUpPdf.pagesPerSheet') || 'Pages per Sheet'}
              </label>
              <select
                id="pagesPerSheet"
                value={pagesPerSheet}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === 'custom') {
                    setPagesPerSheet('custom');
                  } else {
                    setPagesPerSheet(parseInt(value) as 2 | 4 | 9 | 16);
                  }
                }}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              >
                <option value={2}>2-up (2×1)</option>
                <option value={4}>4-up (2×2)</option>
                <option value={9}>9-up (3×3)</option>
                <option value={16}>16-up (4×4)</option>
                <option value="custom">{tTools('nUpPdf.customLayout') || 'Custom...'}</option>
              </select>
            </div>

            {/* Custom layout inputs */}
            {pagesPerSheet === 'custom' && (
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="customCols" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                    {tTools('nUpPdf.columns') || 'Columns'}
                  </label>
                  <input
                    type="number"
                    id="customCols"
                    min={1}
                    max={10}
                    value={customCols}
                    onChange={(e) => setCustomCols(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    disabled={isProcessing}
                    className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="customRows" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                    {tTools('nUpPdf.rows') || 'Rows'}
                  </label>
                  <input
                    type="number"
                    id="customRows"
                    min={1}
                    max={10}
                    value={customRows}
                    onChange={(e) => setCustomRows(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    disabled={isProcessing}
                    className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                  />
                </div>
              </div>
            )}

            {/* Page size */}
            <div>
              <label htmlFor="pageSize" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('nUpPdf.pageSize') || 'Output Page Size'}
              </label>
              <select
                id="pageSize"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value as 'A4' | 'Letter' | 'Legal' | 'A3')}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              >
                <option value="A4">A4</option>
                <option value="Letter">Letter</option>
                <option value="Legal">Legal</option>
                <option value="A3">A3</option>
              </select>
            </div>

            {/* Orientation */}
            <div>
              <label htmlFor="orientation" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('nUpPdf.orientation') || 'Orientation'}
              </label>
              <select
                id="orientation"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value as 'portrait' | 'landscape' | 'auto')}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              >
                <option value="auto">{t('options.auto') || 'Auto'}</option>
                <option value="portrait">{t('options.portrait') || 'Portrait'}</option>
                <option value="landscape">{t('options.landscape') || 'Landscape'}</option>
              </select>
            </div>

            {/* Layout Direction - only show for 2-up */}
            {pagesPerSheet === 2 && (
              <div>
                <label htmlFor="layoutDirection" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                  {tTools('nUpPdf.layoutDirection') || 'Layout Direction'}
                </label>
                <select
                  id="layoutDirection"
                  value={layoutDirection}
                  onChange={(e) => setLayoutDirection(e.target.value as 'horizontal' | 'vertical')}
                  disabled={isProcessing}
                  className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                >
                  <option value="horizontal">{tTools('nUpPdf.layoutHorizontal') || 'Horizontal (side by side)'}</option>
                  <option value="vertical">{tTools('nUpPdf.layoutVertical') || 'Vertical (stacked)'}</option>
                </select>
                <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                  {layoutDirection === 'horizontal'
                    ? (tTools('nUpPdf.layoutHorizontalDesc') || 'Pages are placed side by side (left-right)')
                    : (tTools('nUpPdf.layoutVerticalDesc') || 'Pages are stacked top to bottom')
                  }
                </p>
              </div>
            )}

            {/* Margins */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="useMargins"
                checked={useMargins}
                onChange={(e) => setUseMargins(e.target.checked)}
                disabled={isProcessing}
                className="w-4 h-4 rounded border-[hsl(var(--color-border))]"
              />
              <label htmlFor="useMargins" className="text-sm text-[hsl(var(--color-foreground))]">
                {tTools('nUpPdf.useMargins') || 'Add margins and gutters'}
              </label>
            </div>

            {/* Border */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="addBorder"
                checked={addBorder}
                onChange={(e) => setAddBorder(e.target.checked)}
                disabled={isProcessing}
                className="w-4 h-4 rounded border-[hsl(var(--color-border))]"
              />
              <label htmlFor="addBorder" className="text-sm text-[hsl(var(--color-foreground))]">
                {tTools('nUpPdf.addBorder') || 'Add border around pages'}
              </label>
            </div>

            {/* Border color */}
            {addBorder && (
              <div>
                <label htmlFor="borderColor" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                  {tTools('nUpPdf.borderColor') || 'Border Color'}
                </label>
                <input
                  type="color"
                  id="borderColor"
                  value={borderColor}
                  onChange={(e) => setBorderColor(e.target.value)}
                  disabled={isProcessing}
                  className="w-full h-10 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Layout Preview */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-[hsl(var(--color-muted))] to-[hsl(var(--color-background))] border border-[hsl(var(--color-border))]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--color-primary))]"></div>
              <h4 className="text-sm font-semibold text-[hsl(var(--color-foreground))]">
                {tTools('nUpPdf.layoutPreview') || 'Layout Preview'}
              </h4>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              {/* Grid visualization */}
              <div className="relative">
                <div
                  className="relative border-2 border-[hsl(var(--color-primary)/0.3)] rounded-lg p-3 bg-white dark:bg-[hsl(var(--color-card))] shadow-sm"
                  style={{
                    width: orientation === 'landscape' ? '180px' : '140px',
                    height: orientation === 'landscape' ? '140px' : '180px',
                  }}
                >
                  {/* Page label */}
                  <div className="absolute -top-2.5 left-3 px-2 py-0.5 text-[10px] font-medium bg-[hsl(var(--color-primary))] text-white rounded">
                    {pageSize}
                  </div>

                  <div
                    className="w-full h-full grid gap-1.5"
                    style={{
                      gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
                      gridTemplateRows: `repeat(${gridRows}, 1fr)`,
                    }}
                  >
                    {Array.from({ length: actualPagesPerSheet }).map((_, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] to-[hsl(var(--color-primary)/0.05)] border border-[hsl(var(--color-primary)/0.2)] rounded flex items-center justify-center text-xs font-bold text-[hsl(var(--color-primary))] shadow-inner"
                      >
                        {idx + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Orientation indicator */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-medium bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] rounded-full border border-[hsl(var(--color-border))]">
                  {orientation === 'landscape' ? t('options.landscape') : orientation === 'portrait' ? t('options.portrait') : t('options.auto')}
                </div>
              </div>

              {/* Info panel */}
              <div className="flex-1 space-y-3 text-center sm:text-left">
                {/* Main stats */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-white dark:bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] shadow-sm">
                    <div className="text-2xl font-bold text-[hsl(var(--color-primary))]">{gridCols} × {gridRows}</div>
                    <div className="text-xs text-[hsl(var(--color-muted-foreground))]">{tTools('nUpPdf.gridLabel')}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] shadow-sm">
                    <div className="text-2xl font-bold text-[hsl(var(--color-foreground))]">{outputSheets}</div>
                    <div className="text-xs text-[hsl(var(--color-muted-foreground))]">{tTools('nUpPdf.outputPages')}</div>
                  </div>
                </div>

                {/* Summary */}
                <div className="p-3 rounded-lg bg-[hsl(var(--color-muted)/0.5)] text-sm">
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    <span className="font-medium text-[hsl(var(--color-foreground))]">{totalPages}</span> {tTools('nUpPdf.pagesLabel')} →
                    <span className="font-medium text-[hsl(var(--color-foreground))]"> {outputSheets}</span> {tTools('nUpPdf.sheetsLabel')}
                    <span className="opacity-70"> ({actualPagesPerSheet} {tTools('nUpPdf.perSheetLabel')})</span>
                  </p>
                </div>

                {/* Reading order */}
                <div className="flex items-center gap-2 text-xs text-[hsl(var(--color-muted-foreground))]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {pagesPerSheet === 2 && layoutDirection === 'vertical'
                      ? <path d="M12 5v14M12 19l-4-4M12 19l4-4" />
                      : <path d="M5 12h14M17 8l4 4-4 4" />
                    }
                  </svg>
                  <span>
                    {pagesPerSheet === 2 && layoutDirection === 'vertical'
                      ? tTools('nUpPdf.topToBottom')
                      : tTools('nUpPdf.leftToRight')
                    }
                  </span>
                </div>
              </div>
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
            onClick={handleCreateNUp}
            disabled={!canProcess}
            loading={isProcessing}
          >
            {isProcessing
              ? (t('status.processing') || 'Processing...')
              : pagesPerSheet === 'custom'
                ? (tTools('nUpPdf.createCustomButton', { cols: gridCols, rows: gridRows }) || `Create ${gridCols}×${gridRows} PDF`)
                : (tTools('nUpPdf.createButton', { pages: actualPagesPerSheet }) || `Create ${actualPagesPerSheet}-Up PDF`)
            }
          </Button>

          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace(/\.pdf$/i, `_${pagesPerSheet}-up.pdf`)}
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
            {tTools('nUpPdf.successMessage') || 'N-Up PDF created successfully! Click the download button to save your file.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default NUpPDFTool;

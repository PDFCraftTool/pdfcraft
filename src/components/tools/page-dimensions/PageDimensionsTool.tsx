'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { analyzePageDimensions, type PageDimensionsResult, type PageDimension } from '@/lib/pdf/processors/page-dimensions';
import type { ProcessOutput } from '@/types/pdf';

export interface PageDimensionsToolProps {
  /** Custom class name */
  className?: string;
}

type DisplayUnit = 'pt' | 'in' | 'mm';

/**
 * PageDimensionsTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for analyzing PDF page dimensions.
 * Displays detailed information about each page's size, orientation, and standard size match.
 */
export function PageDimensionsTool({ className = '' }: PageDimensionsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [dimensionsResult, setDimensionsResult] = useState<PageDimensionsResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Display options
  const [displayUnit, setDisplayUnit] = useState<DisplayUnit>('pt');
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle file selected from uploader
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      setDimensionsResult(null);
    }
  }, []);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Clear file
   */
  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setDimensionsResult(null);
  }, []);

  /**
   * Handle analyze operation
   */
  const handleAnalyze = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file to analyze.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setDimensionsResult(null);

    try {
      const output: ProcessOutput = await analyzePageDimensions(
        file,
        { displayUnit },
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
        
        // Set dimensions result
        if (output.metadata?.result) {
          setDimensionsResult(output.metadata.result as PageDimensionsResult);
        }
      } else {
        setError(output.error?.message || 'Failed to analyze PDF page dimensions.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, displayUnit]);

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
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  /**
   * Get dimension value based on selected unit
   */
  const getDimensionValue = (page: PageDimension, dimension: 'width' | 'height'): string => {
    switch (displayUnit) {
      case 'pt':
        return `${dimension === 'width' ? page.widthPt : page.heightPt} pt`;
      case 'in':
        return `${dimension === 'width' ? page.widthIn : page.heightIn} in`;
      case 'mm':
        return `${dimension === 'width' ? page.widthMm : page.heightMm} mm`;
      default:
        return `${dimension === 'width' ? page.widthPt : page.heightPt} pt`;
    }
  };

  const isProcessing = status === 'processing';
  const canAnalyze = file && !isProcessing;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={false}
        maxFiles={1}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={tTools('pageDimensions.uploadLabel') || 'Upload PDF File'}
        description={tTools('pageDimensions.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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

      {/* Selected File */}
      {file && (
        <Card variant="outlined" size="lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 2v6h6" fill="white" />
                  <text x="7" y="17" fontSize="6" fill="white" fontWeight="bold">PDF</text>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                  {file.name}
                </p>
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {formatSize(file.size)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              disabled={isProcessing}
            >
              {t('buttons.remove') || 'Remove'}
            </Button>
          </div>
        </Card>
      )}

      {/* Display Options */}
      {file && (
        <Card variant="outlined">
          <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
            {tTools('pageDimensions.displayOptions') || 'Display Options'}
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
              {tTools('pageDimensions.unitLabel') || 'Measurement Unit'}
            </label>
            <div className="flex gap-2">
              {(['pt', 'in', 'mm'] as DisplayUnit[]).map((unit) => (
                <button
                  key={unit}
                  type="button"
                  onClick={() => setDisplayUnit(unit)}
                  disabled={isProcessing}
                  className={`
                    px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium
                    transition-colors duration-200
                    ${displayUnit === unit 
                      ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]' 
                      : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                    }
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {unit === 'pt' && (tTools('pageDimensions.unitPoints') || 'Points')}
                  {unit === 'in' && (tTools('pageDimensions.unitInches') || 'Inches')}
                  {unit === 'mm' && (tTools('pageDimensions.unitMm') || 'Millimeters')}
                </button>
              ))}
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
      <div className="flex flex-wrap items-center gap-4">
        <Button
          variant="primary"
          size="lg"
          onClick={handleAnalyze}
          disabled={!canAnalyze}
          loading={isProcessing}
        >
          {isProcessing 
            ? (t('status.processing') || 'Processing...') 
            : (tTools('pageDimensions.analyzeButton') || 'Analyze Dimensions')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace(/\.pdf$/i, '')}_dimensions.json` : 'dimensions.json'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {/* Results */}
      {status === 'complete' && dimensionsResult && (
        <div className="space-y-4">
          {/* Summary */}
          <Card variant="outlined">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
              {tTools('pageDimensions.summary') || 'Summary'}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 rounded-[var(--radius-sm)] bg-[hsl(var(--color-muted)/0.3)]">
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {tTools('pageDimensions.totalPages') || 'Total Pages'}
                </p>
                <p className="text-xl font-semibold text-[hsl(var(--color-foreground))]">
                  {dimensionsResult.pageCount}
                </p>
              </div>
              <div className="p-3 rounded-[var(--radius-sm)] bg-[hsl(var(--color-muted)/0.3)]">
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {tTools('pageDimensions.uniqueSizes') || 'Unique Sizes'}
                </p>
                <p className="text-xl font-semibold text-[hsl(var(--color-foreground))]">
                  {dimensionsResult.uniqueSizes.length}
                </p>
              </div>
              <div className="p-3 rounded-[var(--radius-sm)] bg-[hsl(var(--color-muted)/0.3)] col-span-2">
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {tTools('pageDimensions.uniformSize') || 'Uniform Size'}
                </p>
                <p className="text-xl font-semibold text-[hsl(var(--color-foreground))]">
                  {dimensionsResult.uniformSize 
                    ? (tTools('pageDimensions.yes') || 'Yes') 
                    : (tTools('pageDimensions.no') || 'No')
                  }
                </p>
              </div>
            </div>
          </Card>

          {/* Unique Sizes */}
          {dimensionsResult.uniqueSizes.length > 0 && (
            <Card variant="outlined">
              <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
                {tTools('pageDimensions.sizeDistribution') || 'Size Distribution'}
              </h3>
              
              <div className="space-y-2">
                {dimensionsResult.uniqueSizes.map((sizeInfo, index) => {
                  const [width, height] = sizeInfo.size.split('x').map(Number);
                  const page = dimensionsResult.pages.find(p => 
                    Math.round(p.widthPt) === width && Math.round(p.heightPt) === height
                  );
                  
                  return (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-[var(--radius-sm)] bg-[hsl(var(--color-muted)/0.2)]"
                    >
                      <div>
                        <p className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                          {page?.standardSize || `${sizeInfo.size} pt`}
                        </p>
                        <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                          {sizeInfo.count} {sizeInfo.count === 1 ? 'page' : 'pages'}
                          {sizeInfo.pages.length <= 5 && ` (${sizeInfo.pages.join(', ')})`}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[hsl(var(--color-foreground))]">
                          {page && getDimensionValue(page, 'width')} × {page && getDimensionValue(page, 'height')}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          {/* Page Details */}
          <Card variant="outlined">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
              {tTools('pageDimensions.pageDetails') || 'Page Details'}
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[hsl(var(--color-border))]">
                    <th className="text-left py-2 px-3 font-medium text-[hsl(var(--color-muted-foreground))]">
                      {tTools('pageDimensions.page') || 'Page'}
                    </th>
                    <th className="text-left py-2 px-3 font-medium text-[hsl(var(--color-muted-foreground))]">
                      {tTools('pageDimensions.width') || 'Width'}
                    </th>
                    <th className="text-left py-2 px-3 font-medium text-[hsl(var(--color-muted-foreground))]">
                      {tTools('pageDimensions.height') || 'Height'}
                    </th>
                    <th className="text-left py-2 px-3 font-medium text-[hsl(var(--color-muted-foreground))]">
                      {tTools('pageDimensions.orientation') || 'Orientation'}
                    </th>
                    <th className="text-left py-2 px-3 font-medium text-[hsl(var(--color-muted-foreground))]">
                      {tTools('pageDimensions.standardSize') || 'Standard Size'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dimensionsResult.pages.slice(0, 50).map((page) => (
                    <tr 
                      key={page.pageNumber}
                      className="border-b border-[hsl(var(--color-border)/0.5)] hover:bg-[hsl(var(--color-muted)/0.2)]"
                    >
                      <td className="py-2 px-3 text-[hsl(var(--color-foreground))]">
                        {page.pageNumber}
                      </td>
                      <td className="py-2 px-3 text-[hsl(var(--color-foreground))]">
                        {getDimensionValue(page, 'width')}
                      </td>
                      <td className="py-2 px-3 text-[hsl(var(--color-foreground))]">
                        {getDimensionValue(page, 'height')}
                      </td>
                      <td className="py-2 px-3 text-[hsl(var(--color-foreground))] capitalize">
                        {page.orientation}
                      </td>
                      <td className="py-2 px-3 text-[hsl(var(--color-foreground))]">
                        {page.standardSize || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {dimensionsResult.pages.length > 50 && (
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] mt-2 text-center">
                  {tTools('pageDimensions.showingFirst50') || 'Showing first 50 pages. Download JSON for complete data.'}
                </p>
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default PageDimensionsTool;

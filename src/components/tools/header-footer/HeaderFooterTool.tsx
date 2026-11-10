'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { addHeaderFooter, HeaderFooterOptions } from '@/lib/pdf/processors/header-footer';
import type { ProcessOutput } from '@/types/pdf';

// Store pdfjs module reference
let pdfjsModule: typeof import('pdfjs-dist') | null = null;

// Load pdfjs module dynamically
const loadPdfjsLib = async () => {
  if (pdfjsModule) return pdfjsModule;

  const pdfjsLib = await import('pdfjs-dist');
  const { configurePdfjsWorker } = await import('@/lib/pdf/loader');

  if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
    configurePdfjsWorker(pdfjsLib);
  }

  pdfjsModule = pdfjsLib;
  return pdfjsLib;
};

export interface HeaderFooterToolProps {
  className?: string;
}

export function HeaderFooterTool({ className = '' }: HeaderFooterToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Header/Footer options
  const [headerLeft, setHeaderLeft] = useState('');
  const [headerCenter, setHeaderCenter] = useState('');
  const [headerRight, setHeaderRight] = useState('');
  const [footerLeft, setFooterLeft] = useState('');
  const [footerCenter, setFooterCenter] = useState('Page {page} of {total}');
  const [footerRight, setFooterRight] = useState('{date}');
  const [fontSize, setFontSize] = useState(10);
  const [fontColor, setFontColor] = useState('#000000');
  const [margin, setMargin] = useState(30);
  const [skipFirstPage, setSkipFirstPage] = useState(false);
  const [pageRange, setPageRange] = useState('all');

  // Preview state
  const [totalPages, setTotalPages] = useState(0);
  const [currentPreviewPage, setCurrentPreviewPage] = useState(1);

  const cancelledRef = useRef(false);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // Load PDF and generate preview
  const loadPdfPreview = useCallback(async (pdfFile: File) => {
    try {
      const pdfjsLib = await loadPdfjsLib();
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      setTotalPages(pdf.numPages);
      renderPagePreview(pdf, 1);
    } catch (err) {
      console.error('Failed to load PDF preview:', err);
    }
  }, []);

  // Render page preview with header/footer overlay
  const renderPagePreview = async (pdf: any, pageNum: number) => {
    if (!previewCanvasRef.current) return;

    try {
      const page = await pdf.getPage(pageNum);
      const scale = 0.6;
      const viewport = page.getViewport({ scale });

      const canvas = previewCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: ctx, viewport }).promise;

      // Check if page should show header/footer
      const shouldShowContent = isPageInRange(pageNum) && !(skipFirstPage && pageNum === 1);
      if (shouldShowContent) {
        drawHeaderFooterOverlay(ctx, viewport.width, viewport.height, pageNum, pdf.numPages);
      }

    } catch (err) {
      console.error('Failed to render page:', err);
    }
  };

  // Check if page is in range
  const isPageInRange = (pageNum: number): boolean => {
    if (!pageRange || pageRange.toLowerCase() === 'all' || pageRange.trim() === '') {
      return true;
    }
    const ranges = pageRange.split(',').map(s => s.trim());
    for (const range of ranges) {
      if (range.includes('-')) {
        const [start, end] = range.split('-').map(s => parseInt(s.trim()));
        if (!isNaN(start) && !isNaN(end) && pageNum >= start && pageNum <= end) {
          return true;
        }
      } else {
        const page = parseInt(range);
        if (!isNaN(page) && pageNum === page) {
          return true;
        }
      }
    }
    return false;
  };

  // Draw header and footer text on canvas
  const drawHeaderFooterOverlay = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    page: number,
    total: number
  ) => {
    const scaledMargin = margin * 0.6;
    const scaledFontSize = fontSize * 0.6;

    ctx.font = `${scaledFontSize}px Arial`;
    ctx.fillStyle = fontColor;

    const today = new Date().toLocaleDateString();

    const replaceVars = (text: string) => {
      return text
        .replace(/{page}/g, String(page))
        .replace(/{total}/g, String(total))
        .replace(/{date}/g, today);
    };

    // Draw header
    if (headerLeft) {
      ctx.textAlign = 'left';
      ctx.fillText(replaceVars(headerLeft), scaledMargin, scaledMargin + scaledFontSize);
    }
    if (headerCenter) {
      ctx.textAlign = 'center';
      ctx.fillText(replaceVars(headerCenter), width / 2, scaledMargin + scaledFontSize);
    }
    if (headerRight) {
      ctx.textAlign = 'right';
      ctx.fillText(replaceVars(headerRight), width - scaledMargin, scaledMargin + scaledFontSize);
    }

    // Draw footer
    if (footerLeft) {
      ctx.textAlign = 'left';
      ctx.fillText(replaceVars(footerLeft), scaledMargin, height - scaledMargin);
    }
    if (footerCenter) {
      ctx.textAlign = 'center';
      ctx.fillText(replaceVars(footerCenter), width / 2, height - scaledMargin);
    }
    if (footerRight) {
      ctx.textAlign = 'right';
      ctx.fillText(replaceVars(footerRight), width - scaledMargin, height - scaledMargin);
    }
  };

  // Re-render preview when options change
  useEffect(() => {
    if (file && totalPages > 0) {
      const loadAndRender = async () => {
        const pdfjsLib = await loadPdfjsLib();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        renderPagePreview(pdf, currentPreviewPage);
      };
      loadAndRender();
    }
  }, [file, headerLeft, headerCenter, headerRight, footerLeft, footerCenter, footerRight, fontSize, fontColor, margin, skipFirstPage, pageRange, currentPreviewPage, totalPages]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      loadPdfPreview(files[0]);
    }
  }, [loadPdfPreview]);

  const handleClearFile = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setTotalPages(0);
    setCurrentPreviewPage(1);
  }, []);

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const options: HeaderFooterOptions = {
        header: { left: headerLeft, center: headerCenter, right: headerRight },
        footer: { left: footerLeft, center: footerCenter, right: footerRight },
        fontSize,
        fontColor,
        margin,
        skipFirstPage,
        pageRange: pageRange === 'all' ? undefined : pageRange,
      };

      const output: ProcessOutput = await addHeaderFooter(file, options, (prog, message) => {
        if (!cancelledRef.current) {
          setProgress(prog);
          setProgressMessage(message || '');
        }
      });

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to add header/footer.');
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error');
      setStatus('error');
    }
  }, [file, headerLeft, headerCenter, headerRight, footerLeft, footerCenter, footerRight, fontSize, fontColor, margin, skipFirstPage, pageRange]);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing';
  const hasContent = headerLeft || headerCenter || headerRight || footerLeft || footerCenter || footerRight;

  // Quick insert buttons
  const quickInserts = [
    { label: '{page}', desc: 'Page number' },
    { label: '{total}', desc: 'Total pages' },
    { label: '{date}', desc: 'Current date' },
  ];

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={isProcessing}
          label={tTools('headerFooter.uploadLabel') || 'Upload PDF File'}
          description={tTools('headerFooter.uploadDescription') || 'Drag and drop a PDF file here.'}
        />
      )}

      {error && (
        <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {file && (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Options Panel */}
          <div className="space-y-6">
            <Card variant="outlined">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 2v6h6" fill="white" />
                  </svg>
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                      {formatSize(file.size)} • {totalPages} pages
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
                  {t('buttons.remove') || 'Remove'}
                </Button>
              </div>
            </Card>

            <Card variant="outlined" size="lg">
              <h3 className="text-lg font-medium mb-4">
                {tTools('headerFooter.headerTitle') || 'Header'}
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm mb-1">Left</label>
                  <input
                    type="text"
                    value={headerLeft}
                    onChange={(e) => setHeaderLeft(e.target.value)}
                    placeholder="e.g., Company Name"
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Center</label>
                  <input
                    type="text"
                    value={headerCenter}
                    onChange={(e) => setHeaderCenter(e.target.value)}
                    placeholder="e.g., Document Title"
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Right</label>
                  <input
                    type="text"
                    value={headerRight}
                    onChange={(e) => setHeaderRight(e.target.value)}
                    placeholder="e.g., {date}"
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                    disabled={isProcessing}
                  />
                </div>
              </div>

              <h3 className="text-lg font-medium mb-4">
                {tTools('headerFooter.footerTitle') || 'Footer'}
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm mb-1">Left</label>
                  <input
                    type="text"
                    value={footerLeft}
                    onChange={(e) => setFooterLeft(e.target.value)}
                    placeholder="e.g., Confidential"
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Center</label>
                  <input
                    type="text"
                    value={footerCenter}
                    onChange={(e) => setFooterCenter(e.target.value)}
                    placeholder="e.g., Page {page} of {total}"
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Right</label>
                  <input
                    type="text"
                    value={footerRight}
                    onChange={(e) => setFooterRight(e.target.value)}
                    placeholder="e.g., {date}"
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                    disabled={isProcessing}
                  />
                </div>
              </div>

              {/* Quick Insert Buttons */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quick Insert</label>
                <div className="flex flex-wrap gap-2">
                  {quickInserts.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => navigator.clipboard.writeText(item.label)}
                      className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      title={`Copy "${item.label}" - ${item.desc}`}
                    >
                      <code>{item.label}</code>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">Click to copy, then paste into any field</p>
              </div>

              {/* Style Options */}
              <h3 className="text-lg font-medium mb-4">
                {tTools('headerFooter.styleTitle') || 'Style'}
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">Font Size</label>
                  <input
                    type="number"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value) || 10)}
                    min={6}
                    max={24}
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)]"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Margin (pt)</label>
                  <input
                    type="number"
                    value={margin}
                    onChange={(e) => setMargin(parseInt(e.target.value) || 30)}
                    min={10}
                    max={100}
                    className="w-full px-3 py-2 border rounded-[var(--radius-md)]"
                    disabled={isProcessing}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Text Color</label>
                  <input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="w-full h-10 p-1 cursor-pointer rounded border border-gray-300"
                    disabled={isProcessing}
                  />
                </div>
              </div>

              {/* Page Range */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Page Range</label>
                <input
                  type="text"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g., 1-5, 8, 10-12 or 'all'"
                  className="w-full px-3 py-2 border rounded-[var(--radius-md)] text-sm"
                  disabled={isProcessing}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use "all" for all pages, or specify ranges like "1-5, 8, 10-12"
                </p>
              </div>

              {/* Skip First Page */}
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={skipFirstPage}
                  onChange={(e) => setSkipFirstPage(e.target.checked)}
                  className="w-4 h-4"
                  disabled={isProcessing}
                />
                <span className="text-sm">Skip first page (cover page)</span>
              </label>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-4">
            <Card variant="outlined" size="lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">
                  {tTools('headerFooter.preview') || 'Preview'}
                </h3>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPreviewPage(p => Math.max(1, p - 1))}
                    disabled={currentPreviewPage <= 1}
                  >
                    ←
                  </Button>
                  <span className="text-sm">
                    Page {currentPreviewPage} of {totalPages}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPreviewPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPreviewPage >= totalPages}
                  >
                    →
                  </Button>
                </div>
              </div>

              <div className="bg-gray-100 rounded-[var(--radius-md)] p-4 flex justify-center">
                <canvas
                  ref={previewCanvasRef}
                  className="shadow-lg bg-white max-w-full h-auto"
                  style={{ maxHeight: '500px' }}
                />
              </div>

              {/* Page status indicator */}
              <div className="mt-4 text-center">
                {isPageInRange(currentPreviewPage) && !(skipFirstPage && currentPreviewPage === 1) ? (
                  <span className="inline-flex items-center gap-1 text-sm text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Header/Footer will be added to this page
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    This page will be skipped
                  </span>
                )}
              </div>

              {!hasContent && (
                <p className="text-sm text-center text-gray-500 mt-4">
                  {tTools('headerFooter.previewHint') || 'Enter header or footer text to see preview'}
                </p>
              )}
            </Card>
          </div>
        </div>
      )}

      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}

      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleProcess}
            disabled={!file || !hasContent || isProcessing}
            loading={isProcessing}
          >
            {isProcessing ? 'Processing...' : (tTools('headerFooter.addButton') || 'Add Header & Footer')}
          </Button>
          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace(/\.pdf$/i, '_headerfooter.pdf')}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}

      {status === 'complete' && result && (
        <div className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700">
          <p className="text-sm font-medium">
            {tTools('headerFooter.successMessage') || 'Header & footer added successfully!'}
          </p>
        </div>
      )}
    </div>
  );
}

export default HeaderFooterTool;

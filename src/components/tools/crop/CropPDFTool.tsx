'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cropPDF, CropData } from '@/lib/pdf/processors/crop';
import type { ProcessOutput } from '@/types/pdf';

export interface CropPDFToolProps {
  className?: string;
}

interface CropState {
  file: File | null;
  numPages: number;
  currentPage: number;
  pdfDoc: any | null; // PDFDocumentProxy
  pageImage: string | null; // Data URL
  crops: Record<number, CropData>; // Store crops for each page
}

export function CropPDFTool({ className = '' }: CropPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  const [state, setState] = useState<CropState>({
    file: null,
    numPages: 0,
    currentPage: 1,
    pdfDoc: null,
    pageImage: null,
    crops: {},
  });

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [applyToAll, setApplyToAll] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(1); // Track actual zoom ratio
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pageInputValue, setPageInputValue] = useState('1'); // For page jump input

  const cropperRef = useRef<ReactCropperElement>(null);
  const cropperContainerRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef(false);

  // Fullscreen toggle
  const handleToggleFullscreen = useCallback(() => {
    if (!cropperContainerRef.current) return;

    if (!isFullscreen) {
      // Enter fullscreen
      if (cropperContainerRef.current.requestFullscreen) {
        cropperContainerRef.current.requestFullscreen();
      } else if ((cropperContainerRef.current as any).webkitRequestFullscreen) {
        (cropperContainerRef.current as any).webkitRequestFullscreen();
      } else if ((cropperContainerRef.current as any).msRequestFullscreen) {
        (cropperContainerRef.current as any).msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  }, [isFullscreen]);

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      // Trigger cropper to recalculate after fullscreen change
      setTimeout(() => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
          // Force cropper to recalculate by getting and setting canvas data
          const canvasData = cropper.getCanvasData();
          cropper.setCanvasData(canvasData);
        }
      }, 100);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Zoom controls - zoom to center of the container
  const handleZoomIn = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const containerData = cropper.getContainerData();
      const newZoom = currentZoom * 1.2; // 20% zoom in
      // Zoom to center of container
      cropper.zoomTo(newZoom, {
        x: containerData.width / 2,
        y: containerData.height / 2
      });
      setCurrentZoom(newZoom);
    }
  }, [currentZoom]);

  const handleZoomOut = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const containerData = cropper.getContainerData();
      const newZoom = Math.max(0.1, currentZoom / 1.2); // 20% zoom out, min 0.1
      // Zoom to center of container
      cropper.zoomTo(newZoom, {
        x: containerData.width / 2,
        y: containerData.height / 2
      });
      setCurrentZoom(newZoom);
    }
  }, [currentZoom]);

  const handleResetZoom = useCallback(() => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      cropper.reset();
      setCurrentZoom(1);
    }
  }, []);

  // Load PDF when file is selected
  const handleFilesSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];

    setError(null);
    setResult(null);
    setStatus('idle');

    try {
      // Dynamic import to avoid SSR issues with Promise.withResolvers
      const pdfjsLib = await import('pdfjs-dist');
      const { configurePdfjsWorker } = await import('@/lib/pdf/loader');

      // Configure worker (only happens once, loader checks internally)
      if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
        configurePdfjsWorker(pdfjsLib);
      }

      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await pdfjsLib.getDocument(arrayBuffer).promise;

      setState(prev => ({
        ...prev,
        file,
        numPages: pdfDoc.numPages,
        currentPage: 1,
        pdfDoc,
        crops: {},
      }));
      setPageInputValue('1');

      // Render first page
      renderPage(pdfDoc, 1);
    } catch (err) {
      console.error('Error loading PDF:', err);
      setError('Failed to load PDF file.');
    }
  }, []);

  // Render PDF page to image
  const renderPage = async (pdfDoc: any, pageNum: number) => {
    try {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.5 }); // Good quality for cropping

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      if (!context) throw new Error('Could not get canvas context');

      await page.render({
        canvasContext: context,
        viewport: viewport
      }).promise;

      setState(prev => ({
        ...prev,
        pageImage: canvas.toDataURL('image/jpeg'),
        currentPage: pageNum
      }));

    } catch (err) {
      console.error('Error rendering page:', err);
      setError('Failed to render PDF page.');
    }
  };

  // Save current crop data when changing pages
  const saveCurrentCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper && state.pageImage) {
      const data = cropper.getData(true); // Get true values based on image size
      const imageData = cropper.getImageData();

      // Convert to percentages for resolution independence
      const cropData: CropData = {
        x: data.x / imageData.naturalWidth,
        y: data.y / imageData.naturalHeight,
        width: data.width / imageData.naturalWidth,
        height: data.height / imageData.naturalHeight,
      };

      setState(prev => ({
        ...prev,
        crops: {
          ...prev.crops,
          [prev.currentPage]: cropData
        }
      }));
    }
  };

  // Change page
  const changePage = async (delta: number) => {
    if (!state.pdfDoc) return;

    saveCurrentCrop(); // Save before moving

    const newPage = state.currentPage + delta;
    if (newPage >= 1 && newPage <= state.numPages) {
      setPageInputValue(String(newPage));
      await renderPage(state.pdfDoc, newPage);
    }
  };

  // Jump to specific page
  const goToPage = async (pageNum: number) => {
    if (!state.pdfDoc) return;
    const targetPage = Math.max(1, Math.min(pageNum, state.numPages));
    if (targetPage === state.currentPage) {
      setPageInputValue(String(targetPage));
      return;
    }
    saveCurrentCrop();
    setPageInputValue(String(targetPage));
    await renderPage(state.pdfDoc, targetPage);
  };

  // Handle page input submission
  const handlePageInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const num = parseInt(pageInputValue, 10);
      if (!isNaN(num)) {
        goToPage(num);
      } else {
        setPageInputValue(String(state.currentPage));
      }
    }
  };

  const handlePageInputBlur = () => {
    const num = parseInt(pageInputValue, 10);
    if (!isNaN(num)) {
      goToPage(num);
    } else {
      setPageInputValue(String(state.currentPage));
    }
  };

  // Handle actual cropping process
  const handleProcess = useCallback(async () => {
    if (!state.file) return;

    saveCurrentCrop(); // Save current page first

    // Get latest state (need to use functional update to be sure? No, logic above updates state asynchronousy)
    // Wait a tick or force update? actually hooks state might be stale inside callback if not careful.
    // Better: Read from ref or trust state flow.
    // Let's grab the LATEST crops including the current page manually here to be safe.

    const cropper = cropperRef.current?.cropper;
    let currentCrops = { ...state.crops };

    if (cropper) {
      const data = cropper.getData(true);
      const imageData = cropper.getImageData();
      const currentCropData: CropData = {
        x: data.x / imageData.naturalWidth,
        y: data.y / imageData.naturalHeight,
        width: data.width / imageData.naturalWidth,
        height: data.height / imageData.naturalHeight,
      };
      currentCrops[state.currentPage] = currentCropData;
    }

    // Prepare final crop data
    let finalCrops: Record<number, CropData> = {};

    if (applyToAll) {
      // Use current page crop for ALL pages
      const cropToApply = currentCrops[state.currentPage];
      if (!cropToApply) {
        setError('Please select a crop area.');
        return;
      }
      for (let i = 1; i <= state.numPages; i++) {
        finalCrops[i] = cropToApply;
      }
    } else {
      // Use individual crops. If a page wasn't visited/cropped, it won't be in the list.
      // We should probably assume full page or warn? 
      // If user only cropped page 1, should we only crop page 1?
      // Logic: Only crop pages that have data.
      if (Object.keys(currentCrops).length === 0) {
        setError('Please crop at least one page.');
        return;
      }
      finalCrops = currentCrops;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await cropPDF(
        state.file,
        { cropData: finalCrops, mode: 'metadata' },
        (prog) => { if (!cancelledRef.current) setProgress(prog); }
      );

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed.');
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error');
      setStatus('error');
    }
  }, [state.file, state.crops, state.currentPage, state.numPages, applyToAll]);

  const isProcessing = status === 'processing';

  // Set initial crop box when image loads if we have saved data
  const onCropperReady = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      // Reset zoom level when new image loads
      setCurrentZoom(1);

      if (state.crops[state.currentPage]) {
        const saved = state.crops[state.currentPage];
        const imageData = cropper.getImageData();
        cropper.setData({
          x: saved.x * imageData.naturalWidth,
          y: saved.y * imageData.naturalHeight,
          width: saved.width * imageData.naturalWidth,
          height: saved.height * imageData.naturalHeight,
          rotate: 0,
          scaleX: 1,
          scaleY: 1
        });
      }
    }
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!state.file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={isProcessing}
          label={tTools('cropPdf.uploadLabel') || "Upload PDF File"}
          description={tTools('cropPdf.uploadDescription') || "Drag and drop a PDF file to crop."}
        />
      )}

      {error && (
        <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {state.file && (
        <>
          {/* File Info */}
          <Card variant="outlined">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{state.file.name}</h3>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                    {state.numPages} {tTools('cropPdf.pages') || 'pages'}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setState({ file: null, numPages: 0, currentPage: 1, pdfDoc: null, pageImage: null, crops: {} })} disabled={isProcessing}>
                {t('buttons.remove') || 'Remove'}
              </Button>
            </div>
          </Card>

          {/* Visual Cropper */}
          <Card variant="outlined" className="p-0 overflow-hidden bg-gray-100">
            <div
              ref={cropperContainerRef}
              className={`relative ${isFullscreen ? 'bg-gray-900 flex flex-col' : ''}`}
              style={{ minHeight: isFullscreen ? '100vh' : '400px' }}
            >
              {state.pageImage ? (
                <Cropper
                  src={state.pageImage}
                  style={{ height: isFullscreen ? 'calc(100vh - 80px)' : 500, width: '100%' }}
                  initialAspectRatio={NaN} // Free crop
                  guides={true}
                  ref={cropperRef}
                  ready={onCropperReady}
                  viewMode={1}
                  background={false}
                  autoCropArea={1}
                  zoomOnWheel={false}
                />
              ) : (
                <div className="flex items-center justify-center h-[500px]">
                  <span className="text-gray-400">Loading page...</span>
                </div>
              )}

              {/* Zoom Controls - positioned at bottom center of cropper */}
              {state.pageImage && (
                <div className={`${isFullscreen ? 'fixed' : 'absolute'} left-1/2 bottom-4 -translate-x-1/2 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 border border-gray-200`}>
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    disabled={isProcessing}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title={tTools('cropPdf.zoomOut') || 'Zoom Out'}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                    </svg>
                  </button>

                  <span className="px-2 text-sm font-medium text-gray-600 min-w-[60px] text-center">
                    {Math.round(currentZoom * 100)}%
                  </span>

                  <button
                    type="button"
                    onClick={handleResetZoom}
                    disabled={isProcessing}
                    className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title={tTools('cropPdf.resetZoom') || 'Reset Zoom'}
                  >
                    {tTools('cropPdf.reset') || 'Reset'}
                  </button>

                  <button
                    type="button"
                    onClick={handleZoomIn}
                    disabled={isProcessing}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title={tTools('cropPdf.zoomIn') || 'Zoom In'}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </button>

                  <div className="w-px h-6 bg-gray-300 mx-1"></div>

                  <button
                    type="button"
                    onClick={handleToggleFullscreen}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    title={isFullscreen ? (tTools('cropPdf.exitFullscreen') || 'Exit Fullscreen') : (tTools('cropPdf.fullscreen') || 'Fullscreen')}
                  >
                    {isFullscreen ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    )}
                  </button>
                </div>
              )}

              {/* Fullscreen page navigation */}
              {isFullscreen && state.pageImage && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 border border-gray-200">
                  <button
                    type="button"
                    onClick={() => changePage(-1)}
                    disabled={state.currentPage <= 1 || isProcessing}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                    <input
                      type="text"
                      value={pageInputValue}
                      onChange={(e) => setPageInputValue(e.target.value)}
                      onKeyDown={handlePageInputKeyDown}
                      onBlur={handlePageInputBlur}
                      disabled={isProcessing}
                      className="w-12 text-center border border-gray-300 rounded px-1 py-0.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                      aria-label="Go to page"
                    />
                    <span>/ {state.numPages}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => changePage(1)}
                    disabled={state.currentPage >= state.numPages || isProcessing}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-4 border-t bg-white flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changePage(-1)}
                  disabled={state.currentPage <= 1 || isProcessing}
                  aria-label="Previous page"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <div className="flex items-center gap-1 text-sm font-medium min-w-[120px] justify-center">
                  <span>{tTools('cropPdf.page') || 'Page'}</span>
                  <input
                    type="text"
                    value={pageInputValue}
                    onChange={(e) => setPageInputValue(e.target.value)}
                    onKeyDown={handlePageInputKeyDown}
                    onBlur={handlePageInputBlur}
                    disabled={isProcessing}
                    className="w-14 text-center border border-gray-300 rounded px-1 py-0.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    aria-label="Go to page"
                  />
                  <span>/ {state.numPages}</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => changePage(1)}
                  disabled={state.currentPage >= state.numPages || isProcessing}
                  aria-label="Next page"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={applyToAll}
                    onChange={(e) => setApplyToAll(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    disabled={isProcessing}
                  />
                  <span className="text-sm font-medium">{tTools('cropPdf.applyToAll') || 'Apply to all pages'}</span>
                </label>

                <Button
                  variant="primary"
                  onClick={handleProcess}
                  loading={isProcessing}
                  disabled={isProcessing}
                >
                  {tTools('cropPdf.cropButton') || 'Crop PDF'}
                </Button>
              </div>
            </div>
          </Card>
        </>
      )}

      {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} showPercentage />}

      {state.file && result && status === 'complete' && (
        <div className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-green-700 font-medium">
              {tTools('cropPdf.successMessage') || 'PDF cropped successfully!'}
            </div>
            <DownloadButton file={result} filename={state.file.name.replace(/\.pdf$/i, '_cropped.pdf')} variant="primary" size="lg" />
          </div>
        </div>
      )}
    </div>
  );
}

export default CropPDFTool;

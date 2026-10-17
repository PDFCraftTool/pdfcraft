'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { rotatePDF } from '@/lib/pdf/processors/rotate';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { useSelectAllShortcut } from '@/hooks/useSelectAllShortcut';
import type { ProcessOutput } from '@/types/pdf';

export interface RotatePDFToolProps {
  /** Custom class name */
  className?: string;
}

interface PagePreview {
  pageNumber: number;
  thumbnail?: string;
  rotation: number;
}

/**
 * 角度标准化函数，将任意浮点数转换为 [-180, 180] 范围
 */
const normalizeInputAngle = (value: string | number, fallbackValue: number = 0): number => {
  const parsed = typeof value === 'number' ? value : parseFloat(value);
  if (isNaN(parsed)) return fallbackValue;

  let angle = parsed % 360;
  if (angle > 180) angle -= 360;
  if (angle <= -180) angle += 360;

  return Math.round(angle * 10) / 10; // 保留一位小数
};

/**
 * RotatePDFTool Component
 * 
 * Provides an extremely premium, smooth UI for rotating PDF pages by 90-degree steps or arbitrary angles.
 * Includes interactive dials, smooth sliders, angle input validation, multi-selection, and elastic transitions.
 */
export function RotatePDFTool({ className = '' }: RotatePDFToolProps) {
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

  // Page previews and rotations
  const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
  const [isLoadingPreviews, setIsLoadingPreviews] = useState(false);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [customPageInput, setCustomPageInput] = useState<string>('');

  // Custom calibration states
  const [calibrationTab, setCalibrationTab] = useState<'preset' | 'stepless'>('preset');
  const [steplessAngle, setSteplessAngle] = useState<string>('0');
  const [isDialDragging, setIsDialDragging] = useState(false);

  // Ref for cancellation
  const cancelledRef = useRef(false);
  const dialContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Load PDF and generate page previews
   */
  const loadPdfPreviews = useCallback(async (pdfFile: File) => {
    setIsLoadingPreviews(true);
    setPagePreviews([]);
    setSelectedPages(new Set());

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      setTotalPages(pdf.numPages);

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
            rotation: 0,
          });
        }
      }

      for (let i = maxPreviewPages + 1; i <= pdf.numPages; i++) {
        previews.push({ pageNumber: i, rotation: 0 });
      }

      setPagePreviews(previews);
      // Default to select all pages initially
      setSelectedPages(new Set(Array.from({ length: pdf.numPages }, (_, i) => i + 1)));
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
    setSelectedPages(new Set());
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setSteplessAngle('0');
  }, []);

  /**
   * Toggle select/deselect for a page preview
   */
  const handleToggleSelectPage = useCallback((pageNum: number) => {
    setSelectedPages(prev => {
      const next = new Set(prev);
      if (next.has(pageNum)) {
        next.delete(pageNum);
      } else {
        next.add(pageNum);
      }
      return next;
    });
  }, []);

  /**
   * Select all pages
   */
  const handleSelectAll = useCallback(() => {
    setSelectedPages(new Set(Array.from({ length: totalPages }, (_, i) => i + 1)));
  }, [totalPages]);

  useSelectAllShortcut({
    onSelectAll: handleSelectAll,
    enabled: pagePreviews.length > 0,
  });

  /**
   * Clear selection
   */
  const handleClearSelection = useCallback(() => {
    setSelectedPages(new Set());
  }, []);

  /**
   * Select odd pages
   */
  const handleSelectOdd = useCallback(() => {
    const odds = Array.from({ length: totalPages }, (_, i) => i + 1).filter(num => num % 2 !== 0);
    setSelectedPages(new Set(odds));
  }, [totalPages]);

  /**
   * Select even pages
   */
  const handleSelectEven = useCallback(() => {
    const evens = Array.from({ length: totalPages }, (_, i) => i + 1).filter(num => num % 2 === 0);
    setSelectedPages(new Set(evens));
  }, [totalPages]);

  /**
   * Apply custom page selection
   */
  const handleApplyCustomPages = useCallback(() => {
    if (!customPageInput.trim()) return;
    const pages = new Set<number>();
    const parts = customPageInput.split(',');

    for (const part of parts) {
      const trimmed = part.trim();
      if (!trimmed) continue;

      if (trimmed.includes('-')) {
        const [startStr, endStr] = trimmed.split('-');
        const start = parseInt(startStr, 10);
        const end = parseInt(endStr, 10);

        if (!isNaN(start) && !isNaN(end) && start <= end) {
          for (let i = start; i <= end; i++) {
            if (i >= 1 && i <= totalPages) {
              pages.add(i);
            }
          }
        }
      } else {
        const num = parseInt(trimmed, 10);
        if (!isNaN(num) && num >= 1 && num <= totalPages) {
          pages.add(num);
        }
      }
    }

    if (pages.size > 0) {
      setSelectedPages(pages);
    }
  }, [customPageInput, totalPages]);

  /**
   * Update rotation on specified pages
   */
  const updateRotationOnPages = useCallback((targetPages: Set<number> | number[], angleUpdater: (current: number) => number) => {
    const targetSet = targetPages instanceof Set ? targetPages : new Set(targetPages);
    setPagePreviews(prev => prev.map(p => {
      if (targetSet.has(p.pageNumber)) {
        const nextRotation = angleUpdater(p.rotation);
        // Normalize rotation to [-180, 180]
        let norm = nextRotation % 360;
        if (norm > 180) norm -= 360;
        if (norm <= -180) norm += 360;
        return { ...p, rotation: Math.round(norm * 10) / 10 };
      }
      return p;
    }));
    setResult(null);
  }, []);

  /**
   * Apply preset rotation incremental addition (e.g. +90 or -90)
   */
  const handleApplyPresetRotation = useCallback((angle: number) => {
    const target = selectedPages.size > 0
      ? selectedPages
      : new Set(Array.from({ length: totalPages }, (_, i) => i + 1));

    updateRotationOnPages(target, current => current + angle);
  }, [selectedPages, totalPages, updateRotationOnPages]);

  /**
   * Directly set absolute fine-grain angle for selected pages (or all if none selected)
   */
  const handleApplyAbsoluteRotation = useCallback((angle: number) => {
    const target = selectedPages.size > 0
      ? selectedPages
      : new Set(Array.from({ length: totalPages }, (_, i) => i + 1));

    updateRotationOnPages(target, () => angle);
  }, [selectedPages, totalPages, updateRotationOnPages]);

  /**
   * Reset all page rotations
   */
  const handleResetAll = useCallback(() => {
    setPagePreviews(prev => prev.map(p => ({ ...p, rotation: 0 })));
    setSteplessAngle('0');
    setResult(null);
  }, []);

  /**
   * Interactive Dial Angle Calculation
   */
  const handleDialPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (status === 'processing') return;
    setIsDialDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    calculateDialAngle(e);
  };

  const handleDialPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDialDragging || status === 'processing') return;
    calculateDialAngle(e);
  };

  const handleDialPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDialDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const calculateDialAngle = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dialContainerRef.current) return;
    const rect = dialContainerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    // Calculate angle in radians, convert to degrees
    let angleRad = Math.atan2(dy, dx);
    let angleDeg = (angleRad * 180) / Math.PI;

    // Offset standard mathematical angle (0 is positive x axis) 
    // to put 0 at positive y axis (top) and make it clockwise
    angleDeg = angleDeg + 90;

    // Normalize to [-180, 180]
    let normalized = angleDeg % 360;
    if (normalized > 180) normalized -= 360;
    if (normalized <= -180) normalized += 360;

    // Round to 0.5 deg steps for high tactile precision
    normalized = Math.round(normalized * 2) / 2;

    setSteplessAngle(normalized.toString());
    handleApplyAbsoluteRotation(normalized);
  };

  /**
   * Mouse Wheel support on dial to precision adjust angle
   */
  const handleDialWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (status === 'processing') return;

    const step = e.shiftKey ? 5 : 0.5;
    const direction = e.deltaY < 0 ? 1 : -1;

    setSteplessAngle(prev => {
      const current = parseFloat(prev) || 0;
      let next = current + direction * step;
      if (next > 180) next -= 360;
      if (next <= -180) next += 360;
      const rounded = Math.round(next * 10) / 10;
      handleApplyAbsoluteRotation(rounded);
      return rounded.toString();
    });
  };

  /**
   * Handle text input change for manual angle entry
   */
  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow typing leading minus sign or decimals
    if (val === '' || val === '-' || val.endsWith('.') || val.endsWith('.0')) {
      setSteplessAngle(val);
      return;
    }

    const parsed = parseFloat(val);
    if (!isNaN(parsed)) {
      setSteplessAngle(val);
      // Soft-apply during typing
      handleApplyAbsoluteRotation(normalizeInputAngle(parsed));
    }
  };

  /**
   * Handle loss of focus on angle input to strictly sanitize/modularize
   */
  const handleTextInputBlur = () => {
    const finalAngle = normalizeInputAngle(steplessAngle);
    setSteplessAngle(finalAngle.toString());
    handleApplyAbsoluteRotation(finalAngle);
  };

  /**
   * Handle key press on text input (Enter to apply & submit)
   */
  const handleTextInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const finalAngle = normalizeInputAngle(steplessAngle);
      setSteplessAngle(finalAngle.toString());
      handleApplyAbsoluteRotation(finalAngle);
      e.currentTarget.blur();
    }
  };

  /**
   * Sync range slider input
   */
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = parseFloat(e.target.value) || 0;
    setSteplessAngle(parsed.toString());
    handleApplyAbsoluteRotation(parsed);
  };

  /**
   * Handle rotate operation
   */
  const handleRotate = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    // Check if any pages have rotation
    const hasRotations = pagePreviews.some(p => p.rotation !== 0);
    if (!hasRotations) {
      setError('Please rotate at least one page before processing.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    // Build rotations map (1-indexed for processors, converted to non-negative 0-359 degree values)
    const rotations: Record<number, number> = {};
    pagePreviews.forEach(p => {
      if (p.rotation !== 0) {
        // Convert [-180, 180] to [0, 360) non-negative floats/ints
        const norm360 = (p.rotation % 360 + 360) % 360;
        rotations[p.pageNumber] = Math.round(norm360 * 10) / 10;
      }
    });

    try {
      const output: ProcessOutput = await rotatePDF(
        file,
        { rotations },
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
        setError(output.error?.message || 'Failed to rotate PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, pagePreviews]);

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
  const hasRotations = pagePreviews.some(p => p.rotation !== 0);
  const canRotate = file && totalPages > 0 && hasRotations && !isProcessing;
  const rotatedCount = pagePreviews.filter(p => p.rotation !== 0).length;

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
          label={tTools('rotatePdf.uploadLabel') || 'Upload PDF File'}
          description={tTools('rotatePdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
        />
      )}

      {/* Error Message */}
      {error && (
        <div
          className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 dark:bg-red-950/40 dark:border-red-900/50 dark:text-red-400"
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

      {/* Master Interactive Workspace Grid */}
      {file && totalPages > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT: Rotational Calibration Hub (Glassmorphism Control Area) */}
          <div className="lg:col-span-4 space-y-6">
            <Card
              variant="default"
              className="backdrop-blur-md border border-white/20 dark:border-zinc-800/40 shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 border-b border-[hsl(var(--color-border))]">
                <h3 className="text-lg font-bold tracking-tight text-[hsl(var(--color-foreground))] flex items-center gap-2">
                  <svg className="w-5 h-5 text-[hsl(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('rotate.optionsTitle')}
                </h3>
                <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                  {t('rotate.optionsHelp')}
                </p>
              </div>

              {/* Selection Summary Block */}
              <div className="px-5 py-3 bg-[hsl(var(--color-muted)/0.3)] border-b border-[hsl(var(--color-border))] flex items-center justify-between">
                <span className="text-xs font-semibold text-[hsl(var(--color-foreground))]">
                  {t('rotate.selectedPages', { selected: selectedPages.size, total: totalPages })}
                </span>
                <div className="flex gap-1.5">
                  <button
                    onClick={handleSelectAll}
                    className="text-[10px] px-2 py-1 rounded bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] font-medium transition-colors"
                  >
                    {t('buttons.selectAll')}
                  </button>
                  <button
                    onClick={handleClearSelection}
                    className="text-[10px] px-2 py-1 rounded bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] font-medium transition-colors"
                  >
                    {t('buttons.clear')}
                  </button>
                </div>
              </div>

              {/* Tabs Panel */}
              <div className="p-5 space-y-6">
                {/* Mode Selector Tab buttons */}
                <div className="flex bg-[hsl(var(--color-muted)/0.5)] p-1 rounded-[var(--radius-md)]">
                  <button
                    onClick={() => setCalibrationTab('preset')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-all ${calibrationTab === 'preset'
                        ? 'bg-[hsl(var(--card-background, var(--color-card)))] text-[hsl(var(--color-foreground))] shadow-sm'
                        : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                      }`}
                  >
                    {t('rotate.quickRotate')}
                  </button>
                  <button
                    onClick={() => setCalibrationTab('stepless')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-[var(--radius-sm)] transition-all ${calibrationTab === 'stepless'
                        ? 'bg-[hsl(var(--card-background, var(--color-card)))] text-[hsl(var(--color-foreground))] shadow-sm'
                        : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                      }`}
                  >
                    {t('rotate.fineRotate')}
                  </button>
                </div>

                {/* TAB 1: PRESET ROTATION PANEL */}
                {calibrationTab === 'preset' && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleApplyPresetRotation(-90)}
                        disabled={isProcessing || selectedPages.size === 0}
                        className="py-3 flex flex-col items-center gap-1.5 text-xs font-medium"
                      >
                        <svg className="w-5 h-5 text-[hsl(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        {t('rotate.rotateLeft90')}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleApplyPresetRotation(90)}
                        disabled={isProcessing || selectedPages.size === 0}
                        className="py-3 flex flex-col items-center gap-1.5 text-xs font-medium"
                      >
                        <svg className="w-5 h-5 text-[hsl(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                        </svg>
                        {t('rotate.rotateRight90')}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleApplyPresetRotation(180)}
                        disabled={isProcessing || selectedPages.size === 0}
                        className="py-3 flex flex-col items-center gap-1.5 text-xs font-medium"
                      >
                        <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H17.5" />
                        </svg>
                        {t('rotate.rotate180')}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleResetAll}
                        disabled={isProcessing || !hasRotations}
                        className="py-3 flex flex-col items-center gap-1.5 text-xs font-medium border border-dashed border-[hsl(var(--color-border))]"
                      >
                        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        {t('rotate.resetRotate')}
                      </Button>
                    </div>

                    {/* Pre-defined Range Selection Quick Filters */}
                    <div className="pt-2 border-t border-[hsl(var(--color-border))]">
                      <p className="text-[11px] font-semibold text-[hsl(var(--color-muted-foreground))] mb-2">{t('rotate.quickSelectLabel')}</p>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={handleSelectOdd}
                          className="flex-1 text-[11px] py-1 rounded bg-[hsl(var(--color-muted))] hover:bg-[hsl(var(--color-muted-foreground)/0.2)] text-[hsl(var(--color-foreground))] transition-colors font-medium"
                        >
                          {t('rotate.selectOdd')}
                        </button>
                        <button
                          type="button"
                          onClick={handleSelectEven}
                          className="flex-1 text-[11px] py-1 rounded bg-[hsl(var(--color-muted))] hover:bg-[hsl(var(--color-muted-foreground)/0.2)] text-[hsl(var(--color-foreground))] transition-colors font-medium"
                        >
                          {t('rotate.selectEven')}
                        </button>
                      </div>
                      <div className="mt-2 flex gap-1.5">
                        <input
                          type="text"
                          value={customPageInput}
                          onChange={(e) => setCustomPageInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleApplyCustomPages();
                            }
                          }}
                          placeholder="e.g. 1, 3-5"
                          className="flex-1 text-[11px] px-2 py-1 rounded bg-[hsl(var(--color-background))] border border-[hsl(var(--color-border))] text-[hsl(var(--color-foreground))] placeholder:text-[hsl(var(--color-muted-foreground))]/50 focus:outline-none focus:ring-1 focus:ring-[hsl(var(--color-primary))]"
                        />
                        <button
                          type="button"
                          onClick={handleApplyCustomPages}
                          disabled={!customPageInput.trim()}
                          className="text-[11px] px-3 py-1 rounded bg-[hsl(var(--color-primary))] text-white hover:bg-[hsl(var(--color-primary))/0.9] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: STEPLESS STEP ROTATION (FINE GRAIN DIAL + SLIDER) */}
                {calibrationTab === 'stepless' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-1 duration-200">

                    {/* Visual Rotating Circle Dial Container */}
                    <div className="flex flex-col items-center justify-center">
                      <div
                        ref={dialContainerRef}
                        onPointerDown={handleDialPointerDown}
                        onPointerMove={handleDialPointerMove}
                        onPointerUp={handleDialPointerUp}
                        onPointerCancel={handleDialPointerUp}
                        onWheel={handleDialWheel}
                        className="relative w-36 h-36 rounded-full border-2 border-[hsl(var(--color-primary)/0.25)] dark:border-zinc-700/60 bg-[hsl(var(--color-card))] shadow-inner flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
                        style={{ touchAction: 'none' }}
                      >
                        {/* Angular Scale marks background */}
                        <svg className="absolute w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                          {Array.from({ length: 12 }, (_, i) => {
                            const angle = (i * 30 * Math.PI) / 180;
                            const x1 = 50 + 40 * Math.cos(angle);
                            const y1 = 50 + 40 * Math.sin(angle);
                            const x2 = 50 + (i % 3 === 0 ? 33 : 36) * Math.cos(angle);
                            const y2 = 50 + (i % 3 === 0 ? 33 : 36) * Math.sin(angle);
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke={i % 3 === 0 ? 'hsl(var(--color-primary)/0.5)' : 'hsl(var(--color-muted-foreground)/0.3)'}
                                strokeWidth={i % 3 === 0 ? 1 : 0.6}
                              />
                            );
                          })}
                        </svg>

                        {/* Interactive dial pointer dial handle */}
                        <div
                          className="absolute w-full h-full pointer-events-none transition-transform"
                          style={{ transform: `rotate(${parseFloat(steplessAngle) || 0}deg)` }}
                        >
                          {/* Radial indicator line */}
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-[hsl(var(--color-primary))] rounded-full" />
                          {/* Dial Knob Handle */}
                          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[hsl(var(--color-primary))] border-2 border-white dark:border-black shadow-md" />
                        </div>

                        {/* Inner readout display */}
                        <div className="text-center z-10 pointer-events-none">
                          <p className="text-[10px] uppercase font-bold tracking-widest text-[hsl(var(--color-muted-foreground))]">{t('rotate.correctionLabel')}</p>
                          <p className="text-2xl font-black text-[hsl(var(--color-foreground))] tracking-tighter">
                            {parseFloat(steplessAngle) > 0 ? `+${steplessAngle}` : steplessAngle}°
                          </p>
                          <p className="text-[9px] text-[hsl(var(--color-primary))] font-semibold">{t('rotate.wheelHelp')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Stepless Smooth Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-semibold text-[hsl(var(--color-muted-foreground))]">
                        <span>{t('rotate.sliderLeft')}</span>
                        <span className="text-[hsl(var(--color-primary))] font-bold">{t('rotate.sliderTitle')}</span>
                        <span>{t('rotate.sliderRight')}</span>
                      </div>
                      <input
                        type="range"
                        min="-180"
                        max="180"
                        step="0.5"
                        value={parseFloat(steplessAngle) || 0}
                        onChange={handleSliderChange}
                        disabled={isProcessing || selectedPages.size === 0}
                        className="w-full h-1.5 rounded-lg appearance-none bg-[hsl(var(--color-muted))] accent-[hsl(var(--color-primary))] outline-none cursor-pointer"
                      />
                    </div>

                    {/* Numeric Precision Input Block with quick -0.5 and +0.5 */}
                    <div className="pt-2 border-t border-[hsl(var(--color-border))] flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold text-[hsl(var(--color-muted-foreground))]">{t('rotate.preciseInput')}</span>

                      <div className="flex items-center bg-[hsl(var(--color-muted)/0.4)] border border-[hsl(var(--color-input))] rounded-[var(--radius-md)] overflow-hidden pr-2">
                        <button
                          type="button"
                          onClick={() => {
                            const val = Math.max(-180, (parseFloat(steplessAngle) || 0) - 0.5);
                            setSteplessAngle(val.toString());
                            handleApplyAbsoluteRotation(val);
                          }}
                          disabled={isProcessing || selectedPages.size === 0}
                          className="w-8 h-8 font-bold text-sm flex items-center justify-center hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] transition-colors"
                        >
                          -
                        </button>

                        <div className="relative flex items-center max-w-[70px]">
                          <input
                            type="text"
                            value={steplessAngle}
                            onChange={handleTextInputChange}
                            onBlur={handleTextInputBlur}
                            onKeyDown={handleTextInputKeyDown}
                            disabled={isProcessing || selectedPages.size === 0}
                            className="w-full text-center bg-transparent font-bold text-sm text-[hsl(var(--color-foreground))] border-none outline-none py-1 focus:ring-0"
                          />
                          <span className="absolute right-0.5 text-xs text-[hsl(var(--color-muted-foreground))] select-none">°</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            const val = Math.min(180, (parseFloat(steplessAngle) || 0) + 0.5);
                            setSteplessAngle(val.toString());
                            handleApplyAbsoluteRotation(val);
                          }}
                          disabled={isProcessing || selectedPages.size === 0}
                          className="w-8 h-8 font-bold text-sm flex items-center justify-center hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Range Alert Message */}
                    <div className="text-[10px] text-[hsl(var(--color-muted-foreground))] bg-[hsl(var(--color-muted)/0.25)] p-2.5 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] leading-relaxed">
                      {t.rich('rotate.inputTip', { b: (chunks) => <strong>{chunks}</strong>, code: (chunks) => <code>{chunks}</code> })}
                    </div>

                  </div>
                )}
              </div>
            </Card>

            {/* Run Operations Button Area */}
            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleRotate}
                disabled={!canRotate}
                loading={isProcessing}
                className="w-full py-4 font-bold shadow-lg shadow-[hsl(var(--color-primary)/0.15)] flex gap-2 items-center justify-center"
              >
                {!isProcessing && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H17.5" />
                  </svg>
                )}
                {isProcessing
                  ? t('status.processing')
                  : t('rotate.processButton', { count: rotatedCount })
                }
              </Button>

              {result && (
                <DownloadButton
                  file={result}
                  filename={file.name.replace('.pdf', '_rotated.pdf')}
                  variant="secondary"
                  size="lg"
                  className="w-full py-4 border-2 border-[hsl(var(--color-secondary-hover))]"
                  showFileSize
                />
              )}
            </div>

            {/* Success Prompt */}
            {status === 'complete' && result && (
              <div
                className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700 dark:bg-green-950/20 dark:border-green-900/50 dark:text-green-400 text-center animate-in fade-in"
                role="status"
              >
                <p className="text-sm font-semibold">
                  {t('rotate.successMessage')}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Live Physics Preview Grid */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between bg-[hsl(var(--color-card))] px-4 py-3 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[hsl(var(--color-primary))] animate-pulse" />
                <span className="text-sm font-semibold text-[hsl(var(--color-foreground))]">{t('rotate.previewTitle')}</span>
              </div>
              <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                {t('rotate.previewHelp')}
              </span>
            </div>

            {isLoadingPreviews ? (
              <div className="flex items-center justify-center py-32 bg-[hsl(var(--color-card))] rounded-[var(--radius-lg)] border border-[hsl(var(--color-border))]">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-4 border-[hsl(var(--color-primary))] border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm font-semibold text-[hsl(var(--color-muted-foreground))]">
                    {t('rotate.loadingPreview')}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[hsl(var(--color-card))] rounded-[var(--radius-lg)] border border-[hsl(var(--color-border))] p-5 max-h-[640px] overflow-y-auto shadow-inner">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-1">
                  {pagePreviews.map((preview) => {
                    const isSelected = selectedPages.has(preview.pageNumber);
                    const isRotated = preview.rotation !== 0;

                    return (
                      <div
                        key={preview.pageNumber}
                        onClick={() => handleToggleSelectPage(preview.pageNumber)}
                        className={`group relative flex flex-col items-center rounded-[var(--radius-lg)] border-2 bg-[hsl(var(--color-muted)/0.25)] overflow-hidden transition-all duration-300 cursor-pointer select-none ${isSelected
                            ? 'border-[hsl(var(--color-primary))] shadow-[0_0_12px_hsl(var(--color-primary)/0.2)]'
                            : 'border-[hsl(var(--color-border))] hover:border-[hsl(var(--color-muted-foreground)/0.4)]'
                          }`}
                      >
                        {/* Selection Checkbox corner Badge */}
                        <div className={`absolute top-2.5 right-2.5 z-20 w-5 h-5 rounded-full flex items-center justify-center transition-all ${isSelected
                            ? 'bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))] scale-100'
                            : 'bg-black/40 text-transparent scale-90 group-hover:scale-100 group-hover:bg-black/60'
                          }`}>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>

                        {/* Custom Fine-grain rotation degree angle Badge (Gold/Purple premium) */}
                        {isRotated && (
                          <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 text-[10px] font-black tracking-wider text-amber-950 bg-amber-400 border border-amber-300 dark:text-amber-100 dark:bg-amber-900/80 dark:border-amber-800 rounded-md shadow-md">
                            {preview.rotation > 0 ? `+${preview.rotation}` : preview.rotation}°
                          </div>
                        )}

                        {/* Thumbnail View Frame */}
                        <div className="relative aspect-[3/4] w-full p-4 flex items-center justify-center overflow-hidden bg-[hsl(var(--color-muted)/0.15)] border-b border-[hsl(var(--color-border))]">
                          {/* Rotated Container applying Smooth Damping CSS Spring */}
                          <div
                            className="w-full h-full flex items-center justify-center transition-transform duration-[400ms]"
                            style={{
                              transform: `rotate(${preview.rotation}deg)`,
                              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // Elastic bounce effect
                            }}
                          >
                            {preview.thumbnail ? (
                              <img
                                src={preview.thumbnail}
                                alt={`Page ${preview.pageNumber}`}
                                className="max-w-full max-h-full object-contain shadow-[var(--shadow-sm)] rounded-[var(--radius-sm)] pointer-events-none"
                              />
                            ) : (
                              <div className="w-16 h-20 rounded border border-dashed border-[hsl(var(--color-border))] flex items-center justify-center text-sm font-semibold text-[hsl(var(--color-muted-foreground))]">
                                Page {preview.pageNumber}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Footer details & micro quick rotation buttons */}
                        <div className="w-full px-3 py-2.5 bg-[hsl(var(--color-card))] flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[hsl(var(--color-foreground))]">
                            {t('rotate.pageNumber', { page: preview.pageNumber })}
                          </span>

                          {/* micro discrete actions block */}
                          <div
                            className="flex items-center gap-1 z-10"
                            onClick={(e) => e.stopPropagation()} // Prevent card selecting toggle when clicking buttons
                          >
                            <button
                              type="button"
                              onClick={() => updateRotationOnPages([preview.pageNumber], current => current - 90)}
                              disabled={isProcessing}
                              className="w-6 h-6 flex items-center justify-center rounded bg-[hsl(var(--color-muted))] hover:bg-[hsl(var(--color-muted-foreground)/0.2)] text-[hsl(var(--color-foreground))] transition-colors disabled:opacity-50"
                              aria-label={`Rotate page ${preview.pageNumber} left`}
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                              </svg>
                            </button>

                            <button
                              type="button"
                              onClick={() => updateRotationOnPages([preview.pageNumber], current => current + 90)}
                              disabled={isProcessing}
                              className="w-6 h-6 flex items-center justify-center rounded bg-[hsl(var(--color-muted))] hover:bg-[hsl(var(--color-muted-foreground)/0.2)] text-[hsl(var(--color-foreground))] transition-colors disabled:opacity-50"
                              aria-label={`Rotate page ${preview.pageNumber} right`}
                            >
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

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
    </div>
  );
}

export default RotatePDFTool;

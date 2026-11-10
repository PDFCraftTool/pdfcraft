'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { removeBlankPages } from '@/lib/pdf/processors/remove-blank-pages';
import type { ProcessOutput } from '@/types/pdf';
import { 
  Trash2, 
  RefreshCw, 
  Check, 
  AlertCircle, 
  Loader2, 
  X, 
  Sliders, 
  FileText,
  Eye,
  Settings2,
  Undo2,
  FileCheck
} from 'lucide-react';

interface PageInfo {
  pageNumber: number;
  entropy: number;
  dataUrl: string;
  aspectRatio: number;
}

export interface RemoveBlankPagesToolProps { 
  className?: string; 
}

export function RemoveBlankPagesTool({ className = '' }: RemoveBlankPagesToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // File states
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageInfo[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzingProgress, setAnalyzingProgress] = useState(0);

  // Configuration states
  const [threshold, setThreshold] = useState(99);
  const [userOverrides, setUserOverrides] = useState<Record<number, boolean>>({});
  const [filterMode, setFilterMode] = useState<'all' | 'blanks' | 'keeps'>('all');

  // Process & outcome states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [removedCount, setRemovedCount] = useState(0);

  const cancelledRef = useRef(false);

  // Helper: calculate Shannon entropy on imageData
  const calculateEntropy = (imageData: ImageData): number => {
    const data = imageData.data;
    const totalPixels = data.length / 4;
    const histogram = new Float32Array(256);
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
      histogram[gray]++;
    }

    let entropy = 0;
    const eps = 1e-10;
    
    for (let i = 0; i < 256; i++) {
      const prob = histogram[i] / totalPixels;
      if (prob > 0) {
        entropy -= prob * Math.log2(prob + eps);
      }
    }
    return entropy;
  };

  // Check if a page is considered blank (auto + override)
  const isPageBlankAuto = (entropy: number, currentThreshold: number): boolean => {
    const entropyLimit = (100 - currentThreshold) * 0.02;
    return entropy < Math.max(0.01, entropyLimit);
  };

  const isPageRemoved = useCallback((page: PageInfo) => {
    const override = userOverrides[page.pageNumber];
    if (override !== undefined) {
      return override;
    }
    return isPageBlankAuto(page.entropy, threshold);
  }, [userOverrides, threshold]);

  /**
   * Render and analyze PDF pages in the background
   */
  const loadAndAnalyzePdf = async (selectedFile: File) => {
    setIsAnalyzing(true);
    setAnalyzingProgress(0);
    setPages([]);
    setUserOverrides({});
    setError(null);
    setResult(null);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdfDoc.numPages;

      const loadedPages: PageInfo[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdfDoc.getPage(i);
        const viewport = page.getViewport({ scale: 0.3 }); // Small preview for faster rendering

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (context) {
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;

          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const entropy = calculateEntropy(imageData);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.6);

          loadedPages.push({
            pageNumber: i,
            entropy,
            dataUrl,
            aspectRatio: viewport.width / viewport.height,
          });
        }
        
        setAnalyzingProgress(Math.round((i / totalPages) * 100));
        // Progressive update for responsive loading feel
        setPages([...loadedPages]);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to analyze PDF pages.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      loadAndAnalyzePdf(selectedFile);
    }
  }, []);

  const handleTogglePage = (pageNumber: number) => {
    const page = pages.find(p => p.pageNumber === pageNumber);
    if (!page) return;

    const autoIsBlank = isPageBlankAuto(page.entropy, threshold);
    const currentlyRemoved = isPageRemoved(page);

    setUserOverrides(prev => ({
      ...prev,
      // If toggle flips it from normal state, we mark the opposite as override.
      // If toggle returns it to auto state, we clear override.
      [pageNumber]: !currentlyRemoved === autoIsBlank ? undefined : !currentlyRemoved
    } as Record<number, boolean>));
  };

  const handleResetOverrides = () => {
    setUserOverrides({});
  };

  const handleSelectAllAsBlank = () => {
    const overrides: Record<number, boolean> = {};
    pages.forEach(p => {
      overrides[p.pageNumber] = true;
    });
    setUserOverrides(overrides);
  };

  const handleKeepAll = () => {
    const overrides: Record<number, boolean> = {};
    pages.forEach(p => {
      overrides[p.pageNumber] = false;
    });
    setUserOverrides(overrides);
  };

  const handleProcess = useCallback(async () => {
    if (!file || pages.length === 0) return;
    cancelledRef.current = false;
    setStatus('processing'); 
    setProgress(0); 
    setError(null); 
    setResult(null); 
    setRemovedCount(0);

    // Collect 1-indexed pages that are flagged for deletion
    const explicitPagesToRemove = pages
      .filter(p => isPageRemoved(p))
      .map(p => p.pageNumber);

    if (explicitPagesToRemove.length === pages.length) {
      setError('Cannot remove all pages from PDF. Keep at least 1 page.');
      setStatus('error');
      return;
    }

    try {
      const output: ProcessOutput = await removeBlankPages(
        file, 
        { explicitPagesToRemove }, 
        (prog) => { 
          if (!cancelledRef.current) setProgress(prog); 
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setRemovedCount(explicitPagesToRemove.length);
        setStatus('complete');
      } else { 
        setError(output.error?.message || 'Failed to apply blank page filter.'); 
        setStatus('error'); 
      }
    } catch (err) { 
      setError(err instanceof Error ? err.message : 'Error processing PDF'); 
      setStatus('error'); 
    }
  }, [file, pages, isPageRemoved]);

  const handleClear = () => {
    setFile(null);
    setPages([]);
    setResult(null);
    setError(null);
    setUserOverrides({});
    setStatus('idle');
  };

  const isProcessing = status === 'processing';

  // Computed visual counters
  const blankPagesCount = pages.filter(p => isPageRemoved(p)).length;
  const keepPagesCount = pages.length - blankPagesCount;

  // Filter pages to display in grid
  const displayedPages = pages.filter(p => {
    const removed = isPageRemoved(p);
    if (filterMode === 'blanks') return removed;
    if (filterMode === 'keeps') return !removed;
    return true;
  });

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      
      {/* Upload Zone */}
      {!file && (
        <FileUploader 
          accept={['application/pdf', '.pdf']} 
          multiple={false} 
          maxFiles={1} 
          onFilesSelected={handleFileSelected} 
          onError={setError} 
          disabled={isProcessing} 
          label={tTools('removeBlankPages.uploadLabel')} 
          description={tTools('removeBlankPages.uploadDescription')} 
        />
      )}

      {/* Error message */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Analyzing Phase */}
      {isAnalyzing && (
        <Card variant="outlined" className="p-8 border border-white/20 dark:border-zinc-800/40 bg-white/40 dark:bg-black/30 backdrop-blur-md rounded-3xl text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-[hsl(var(--color-primary))] animate-spin" />
              <div className="absolute inset-0 rounded-full border-4 border-[hsl(var(--color-primary)/0.15)] border-t-[hsl(var(--color-primary))] animate-pulse" />
            </div>
          </div>
          <div className="space-y-2 max-w-sm mx-auto">
            <h3 className="text-sm font-black text-[hsl(var(--color-foreground))] tracking-wider">
              {tTools('removeBlankPages.analyzingPages')}
            </h3>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
              {analyzingProgress}% Completed
            </p>
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${analyzingProgress}%` }}
              />
            </div>
          </div>
        </Card>
      )}

      {/* Main Workspace (After file loaded and analyzed) */}
      {file && !isAnalyzing && status !== 'complete' && (
        <div className="space-y-6">
          
          {/* File Header Bar */}
          <Card variant="outlined" className="p-4 flex flex-wrap items-center justify-between border border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/20 backdrop-blur-sm rounded-2xl gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-950/20 text-red-500">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm text-[hsl(var(--color-foreground))] truncate max-w-[280px]" title={file.name}>
                  {file.name}
                </p>
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {t('removeBlankPages.pagesCount', { count: pages.length, size: (file.size / (1024 * 1024)).toFixed(2) })}
                </p>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" onClick={handleClear} disabled={isProcessing} className="hover:bg-red-500/10 hover:text-red-500">
              {t('buttons.remove') || 'Remove'}
            </Button>
          </Card>

          {/* Control Workshop Controls */}
          <Card variant="default" className="p-6 border border-zinc-200/60 dark:border-zinc-800/40 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md rounded-[2rem] shadow-xl space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Left Column: Sensitivity Threshold Slider */}
              <div className="md:col-span-7 space-y-3.5">
                <h4 className="text-sm font-bold text-[hsl(var(--color-foreground))] flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[hsl(var(--color-primary))]" />
                  {tTools('removeBlankPages.sensitivity')}
                </h4>
                
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    value={threshold} 
                    onChange={(e) => setThreshold(parseInt(e.target.value))} 
                    min={90} 
                    max={100} 
                    className="flex-1 accent-[hsl(var(--color-primary))] cursor-pointer h-2 bg-zinc-200 dark:bg-zinc-700 rounded-lg appearance-none" 
                    disabled={isProcessing} 
                  />
                  <span className="font-mono text-sm px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md font-bold text-[hsl(var(--color-primary))]">
                    {threshold}%
                  </span>
                </div>
                
                <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] leading-relaxed">
                  {tTools('removeBlankPages.sensitivityHint')}
                </p>
              </div>

              {/* Right Column: Summaries & Quick Action buttons */}
              <div className="md:col-span-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-6 md:pt-0 md:pl-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                    {t('removeBlankPages.summaryTitle')}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {t('removeBlankPages.totalLabel', { count: pages.length })}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400">
                      {t('removeBlankPages.blankLabel', { count: blankPagesCount })}
                    </span>
                    <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
                      {t('removeBlankPages.keepLabel', { count: keepPagesCount })}
                    </span>
                  </div>
                </div>

                {/* Batch Actions */}
                <div className="flex flex-wrap gap-2">
                  <Button variant="ghost" size="sm" onClick={handleResetOverrides} disabled={Object.keys(userOverrides).length === 0} className="text-xs flex items-center gap-1">
                    <Undo2 className="w-3 h-3" /> {t('removeBlankPages.resetBtn')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleKeepAll} className="text-xs">
                    {t('removeBlankPages.keepAllBtn')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleSelectAllAsBlank} className="text-xs text-red-500 hover:text-red-600">
                    {t('removeBlankPages.deleteAllBtn')}
                  </Button>
                </div>
              </div>
              
            </div>

            {/* View filter mode tabs */}
            <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-4 flex items-center justify-between flex-wrap gap-4">
              <div className="flex rounded-xl bg-zinc-100 dark:bg-zinc-900 p-1">
                <button
                  onClick={() => setFilterMode('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filterMode === 'all' 
                      ? 'bg-white dark:bg-zinc-800 text-[hsl(var(--color-foreground))] shadow-sm' 
                      : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                  }`}
                >
                  {t('removeBlankPages.tabAll', { count: pages.length })}
                </button>
                <button
                  onClick={() => setFilterMode('blanks')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filterMode === 'blanks' 
                      ? 'bg-red-500 text-white shadow-sm' 
                      : 'text-red-500/80 hover:text-red-500'
                  }`}
                >
                  {t('removeBlankPages.tabBlanks', { count: blankPagesCount })}
                </button>
                <button
                  onClick={() => setFilterMode('keeps')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filterMode === 'keeps' 
                      ? 'bg-emerald-500 text-white shadow-sm' 
                      : 'text-emerald-500/80 hover:text-emerald-500'
                  }`}
                >
                  {t('removeBlankPages.tabKeeps', { count: keepPagesCount })}
                </button>
              </div>

              {/* Apply action triggers */}
              <div className="flex gap-2">
                <Button 
                  variant="primary" 
                  size="md" 
                  onClick={handleProcess} 
                  disabled={isProcessing || keepPagesCount === 0} 
                  loading={isProcessing}
                  className="font-bold shadow-lg shadow-primary-500/10 flex items-center gap-1.5"
                >
                  <Trash2 className="w-4 h-4" />
                  {isProcessing ? t('status.processing') : tTools('removeBlankPages.removeButton')}
                </Button>
              </div>
            </div>
            
          </Card>

          {/* 3D Pages Queue Grid */}
          {displayedPages.length === 0 ? (
            <Card variant="outlined" className="p-12 text-center rounded-[2rem] border-dashed border-zinc-200 dark:border-zinc-800">
              <Eye className="w-10 h-10 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] font-bold">
                {t('removeBlankPages.noPagesToDisplay') || 'No pages to display'}
              </p>
            </Card>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 [perspective:1000px] py-4">
              {displayedPages.map((page) => {
                const autoIsBlank = isPageBlankAuto(page.entropy, threshold);
                const removed = isPageRemoved(page);
                const override = userOverrides[page.pageNumber];
                
                const isManualKeep = override === false;
                const isManualRemove = override === true;

                return (
                  <PageCard
                    key={page.pageNumber}
                    page={page}
                    isRemoved={removed}
                    isAutoBlank={autoIsBlank}
                    isManualKeep={isManualKeep}
                    isManualRemove={isManualRemove}
                    onToggle={() => handleTogglePage(page.pageNumber)}
                  />
                );
              })}
            </div>
          )}

        </div>
      )}

      {/* Complete State Screen */}
      {status === 'complete' && result && (
        <Card variant="default" className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-zinc-800/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <FileCheck className="w-10 h-10" />
          </div>

          <div className="space-y-2 max-w-sm mx-auto">
            <h3 className="text-base font-extrabold text-[hsl(var(--color-foreground))]">
              {tTools('removeBlankPages.successMessage')}
            </h3>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
              {removedCount > 0 
                ? t('removeBlankPages.successPurged', { count: removedCount }) 
                : t('removeBlankPages.successNoChange')
              }
            </p>
          </div>

          <div className="flex gap-3 justify-center max-w-xs mx-auto">
            <DownloadButton 
              file={result} 
              filename={file?.name.replace(/\.pdf$/i, '_no_blanks.pdf') || 'cleaned_document.pdf'} 
              variant="primary" 
              size="lg" 
              className="flex-1 font-bold shadow-lg"
              showFileSize 
            />
            <Button variant="ghost" size="lg" onClick={handleClear} className="border border-zinc-200 dark:border-zinc-800">
              {t('removeBlankPages.processNewFile') || 'Process New File'}
            </Button>
          </div>
        </Card>
      )}

      {/* In-processing spinner overlay */}
      {isProcessing && (
        <ProcessingProgress 
          progress={progress} 
          status={status} 
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} 
          showPercentage 
        />
      )}
      
    </div>
  );
}

/**
 * 3D Page Card Component with physical tilting micro-animation
 */
interface PageCardProps {
  key?: number;
  page: PageInfo;
  isRemoved: boolean;
  isAutoBlank: boolean;
  isManualKeep: boolean;
  isManualRemove: boolean;
  onToggle: () => void;
}

function PageCard({ page, isRemoved, isAutoBlank, isManualKeep, isManualRemove, onToggle }: PageCardProps) {
  const t = useTranslations('common');
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Physical spring factor: tilt up to 25deg
    const rX = -(y / rect.height) * 25;
    const rY = (x / rect.width) * 25;
    
    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.05, 1.05, 1.05) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // High-damping rebound
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onToggle}
      className={`relative group cursor-pointer transition-all duration-300 ease-out rounded-2xl overflow-hidden select-none bg-white dark:bg-zinc-900 border ${
        isRemoved 
          ? 'border-red-500/40 shadow-inner ring-2 ring-red-500/25' 
          : 'border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Aspect Ratio Box */}
      <div 
        className="w-full relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-3"
        style={{ aspectRatio: page.aspectRatio ? `${page.aspectRatio}` : '0.707' }}
      >
        <img 
          src={page.dataUrl} 
          alt={`Page ${page.pageNumber}`} 
          className={`w-full h-auto object-contain rounded shadow-sm select-none pointer-events-none transition-transform duration-500 ${
            isRemoved ? 'filter grayscale opacity-30 scale-[0.98]' : 'group-hover:scale-[1.02]'
          }`}
        />

        {/* Gray blur overlay for removed pages */}
        {isRemoved && (
          <div className="absolute inset-0 bg-zinc-950/40 dark:bg-zinc-950/60 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-2 z-10 transition-all duration-300">
            {/* Shaking red diagonal bar symbol */}
            <div className="p-2.5 rounded-full bg-red-500/10 text-red-500 animate-[bounce_1.5s_infinite] border border-red-500/25 shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="12" cy="12" r="10" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
              </svg>
            </div>
          </div>
        )}

        {/* Hover action overlay indicator */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200 z-20 pointer-events-none">
          <span className="text-[10px] font-bold text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md shadow-md border border-white/10 uppercase tracking-wider">
            {isRemoved ? t('removeBlankPages.clickToKeep') : t('removeBlankPages.clickToDelete')}
          </span>
        </div>
      </div>

      {/* Card Header & Page Number Indicator */}
      <div className={`p-2 flex items-center justify-between text-[11px] font-bold border-t ${
        isRemoved 
          ? 'bg-red-50/50 dark:bg-red-950/10 border-red-100 dark:border-red-950/40' 
          : 'bg-zinc-50 dark:bg-zinc-900/60 border-zinc-100 dark:border-zinc-800'
      }`}>
        <span className={isRemoved ? 'text-red-500' : 'text-zinc-500'}>
          {t('removeBlankPages.pageNumberLabel', { num: page.pageNumber })}
        </span>
        
        {/* Entropy Tag */}
        <span className="text-[9px] font-medium text-zinc-400 font-mono tracking-tighter" title={`Shannon Entropy: ${page.entropy.toFixed(4)}`}>
          {t('removeBlankPages.entropyLabel', { val: page.entropy.toFixed(3) })}
        </span>
      </div>

      {/* Floating Badge Indicator (Top Right) */}
      <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
        {isManualRemove && (
          <span className="px-2 py-0.5 text-[8px] font-extrabold rounded-md shadow-md bg-red-500 text-white border border-red-600 tracking-wider">
            {t('removeBlankPages.badgeForceDelete')}
          </span>
        )}
        {isManualKeep && (
          <span className="px-2 py-0.5 text-[8px] font-extrabold rounded-md shadow-md bg-emerald-500 text-white border border-emerald-600 tracking-wider animate-pulse">
            {t('removeBlankPages.badgeForceKeep')}
          </span>
        )}
        {!isManualKeep && !isManualRemove && isAutoBlank && (
          <span className="px-2 py-0.5 text-[8px] font-extrabold rounded-md shadow-md bg-red-600/90 text-white border border-red-700 tracking-wider">
            {t('removeBlankPages.badgeEmptyPage')}
          </span>
        )}
      </div>

    </div>
  );
}

export default RemoveBlankPagesTool;

'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { linkCitations, type CitationLinkerOptions } from '@/lib/pdf/processors/citation-linker';
import type { ProcessOutput } from '@/types/pdf';
import { 
  GitBranch, 
  Settings2, 
  Link2, 
  Edit3, 
  Check, 
  RotateCw, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  FileText
} from 'lucide-react';

export interface CitationLinkerToolProps {
  className?: string;
}

interface CitationItem {
  id: string;
  marker: string;
  pageNum: number;
  rect: number[];
  url: string;
  refText: string;
  refPage?: number;
}

export function CitationLinkerTool({ className = '' }: CitationLinkerToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // File States
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  // Status & Outcomes
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Citation Data
  const [citations, setCitations] = useState<CitationItem[]>([]);
  const [selectedCitation, setSelectedCitation] = useState<CitationItem | null>(null);
  
  // Customization
  const [detectDoi, setDetectDoi] = useState(true);
  const [fallbackToPageJump, setFallbackToPageJump] = useState(true);
  const [editUrl, setEditUrl] = useState('');

  // Rotation angle for gear animation
  const [gearAngle, setGearAngle] = useState(0);

  const cancelledRef = useRef(false);

  // Animate gear during processing
  useEffect(() => {
    let interval: any;
    if (status === 'processing') {
      interval = setInterval(() => {
        setGearAngle((prev) => (prev + 8) % 360);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [status]);

  /**
   * Handle uploaded file and trigger scan
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setIsLoadingMetadata(true);
    setError(null);
    setResult(null);
    setCitations([]);
    setSelectedCitation(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true } as any);
      setTotalPages(pdf.getPageCount());
      
      // Auto run scan first
      setTimeout(() => {
        handleScanCitations(selectedFile);
      }, 500);

    } catch (err) {
      console.error(err);
      setError('Failed to parse PDF metadata. File might be corrupted.');
    } finally {
      setIsLoadingMetadata(false);
    }
  }, []);

  /**
   * Scan Citations from PDF
   */
  const handleScanCitations = async (targetFile: File) => {
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      // Just scan without citationsList to find existing citations
      const output: ProcessOutput = await linkCitations(
        targetFile,
        {
          detectDoi,
          fallbackToPageJump,
        },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Analyzing bibliography patterns...');
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success) {
        setStatus('idle'); // Back to idle so user can review and edit in UI
        if (output.metadata && output.metadata.citations) {
          const list = output.metadata.citations as CitationItem[];
          setCitations(list);
          if (list.length > 0) {
            setSelectedCitation(list[0]);
            setEditUrl(list[0].url);
          }
        }
      } else {
        setError(output.error?.message || 'Scanning citations failed.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error scanning citations.');
        setStatus('error');
      }
    }
  };

  /**
   * Apply edits and compile final PDF with links injected
   */
  const handleApplyLinks = async () => {
    if (!file) return;

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(70);
    setProgressMessage('Injecting PDF link elements...');
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await linkCitations(
        file,
        {
          detectDoi,
          fallbackToPageJump,
          citationsList: citations, // Pass modified list back to processor
        },
        (prog) => {
          if (!cancelledRef.current) {
            setProgress(prog);
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
        setError(output.error?.message || 'Failed to inject links.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Linking process error.');
        setStatus('error');
      }
    }
  };

  /**
   * Save edited URL for the currently selected citation item
   */
  const handleSaveUrl = () => {
    if (!selectedCitation) return;
    setCitations((prev) =>
      prev.map((c) =>
        c.id === selectedCitation.id ? { ...c, url: editUrl } : c
      )
    );
    setSelectedCitation((prev) => prev ? { ...prev, url: editUrl } : null);
  };

  const handleClearFile = () => {
    setFile(null);
    setTotalPages(0);
    setResult(null);
    setCitations([]);
    setSelectedCitation(null);
    setStatus('idle');
  };

  const handleCancel = () => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      
      {/* File Upload Zone */}
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={isProcessing || isLoadingMetadata}
          label={t('citationLinker.uploadLabel')}
          description={t('citationLinker.uploadDescription')}
        />
      )}

      {/* Error Alert */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400">
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      {/* File Metadata Overview */}
      {file && (
        <Card variant="outlined" className="p-4 flex items-center justify-between border-2 border-[hsl(var(--color-primary)/0.25)] rounded-2xl">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <path d="M14 2v6h6" fill="white" />
              <text x="7" y="17" fontSize="6" fill="white" fontWeight="bold">PDF</text>
            </svg>
            <div>
              <p className="font-semibold text-sm text-[hsl(var(--color-foreground))] truncate max-w-[280px]" title={file.name}>
                {file.name}
              </p>
              <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                {totalPages > 0 ? `${totalPages} ${t('pdfToCbz.pagesLabel') || 'pages'}` : t('citationLinker.scanningMetadata')} • {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
            {t('buttons.remove') || 'Remove'}
          </Button>
        </Card>
      )}

      {/* Main Workspace (Visible after citation scanning completes) */}
      {file && citations.length > 0 && status !== 'processing' && status !== 'complete' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Citation Configuration & List */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Card variant="default" className="flex-1 p-6 rounded-[2rem] border border-white/20 dark:border-zinc-800/40 bg-white/40 dark:bg-black/30 backdrop-blur-md flex flex-col justify-between shadow-xl">
              
              <div className="space-y-4">
                <div className="border-b border-[hsl(var(--color-border))] pb-3">
                  <h3 className="text-base font-bold text-[hsl(var(--color-foreground))] flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-[hsl(var(--color-primary))]" />
                    {t('citationLinker.optionsTitle')}
                  </h3>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={detectDoi}
                      onChange={(e) => setDetectDoi(e.target.checked)}
                      className="w-4.5 h-4.5 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    <span className="text-xs font-semibold text-[hsl(var(--color-foreground))]">{t('citationLinker.detectDoi')}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={fallbackToPageJump}
                      onChange={(e) => setFallbackToPageJump(e.target.checked)}
                      className="w-4.5 h-4.5 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    <span className="text-xs font-semibold text-[hsl(var(--color-foreground))]">{t('citationLinker.enableGoto')}</span>
                  </label>
                </div>

                {/* Edit Link input */}
                {selectedCitation && (
                  <div className="p-4 bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-border))] rounded-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-500">{t('citationLinker.editingCitation', { marker: selectedCitation.marker })}</span>
                      <span className="text-[10px] opacity-60">{t('citationLinker.citationPage', { page: selectedCitation.pageNum })}</span>
                    </div>
                    
                    <p className="text-[11px] leading-relaxed line-clamp-2 text-zinc-500 dark:text-zinc-400">
                      {t('citationLinker.citationRef', { ref: selectedCitation.refText })}
                    </p>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        placeholder={t('citationLinker.doiPlaceholder')}
                        className="flex-1 px-3 py-2 text-xs rounded-xl bg-white dark:bg-zinc-800 border border-[hsl(var(--color-border))] focus:ring-1 focus:ring-[hsl(var(--color-primary))]"
                      />
                      <Button size="sm" variant="primary" onClick={handleSaveUrl}>
                        <Check className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Citations checklist */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                    {t('citationLinker.citationListTitle', { count: citations.length })}
                  </label>
                  <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                    {citations.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          setSelectedCitation(c);
                          setEditUrl(c.url);
                        }}
                        className={`p-2.5 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                          selectedCitation?.id === c.id
                            ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.035)]'
                            : 'border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] hover:bg-[hsl(var(--color-muted)/0.3)]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[hsl(var(--color-foreground))]">{c.marker}</span>
                          <span className="text-[10px] text-zinc-400">Page {c.pageNum}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {c.url ? (
                            <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
                              <Link2 className="w-3 h-3" /> DOI
                            </span>
                          ) : (
                            <span className="text-[10px] text-zinc-400 font-medium">{t('citationLinker.gotoPage')}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Apply Button */}
              <div className="pt-4 border-t border-[hsl(var(--color-border))]">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full py-4 font-bold shadow-lg flex items-center justify-center gap-2"
                  onClick={handleApplyLinks}
                >
                  <GitBranch className="w-5 h-5" />
                  {t('citationLinker.injectLink')}
                </Button>
              </div>
            </Card>
          </div>

          {/* RIGHT: Interactive Glassmorphism Citation Star Map */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Card variant="outlined" className="flex-1 p-6 bg-[hsl(var(--color-card))] border-2 border-dashed border-[hsl(var(--color-border))] rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden shadow-inner h-full min-h-[420px]">
              
              {/* Star Topology SVG Map */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full opacity-60">
                  <defs>
                    <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(var(--color-primary))" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="hsl(var(--color-primary))" stopOpacity="0" />
                    </radialGradient>
                    {/* Glowing path filter */}
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Central Glow */}
                  <circle cx="50%" cy="50%" r="150" fill="url(#star-glow)" />

                  {/* Connected line graphs */}
                  {citations.slice(0, 10).map((c, idx) => {
                    const angle = (idx * (2 * Math.PI)) / Math.min(10, citations.length);
                    const x = 50 + 35 * Math.cos(angle);
                    const y = 50 + 35 * Math.sin(angle);
                    
                    const isSelected = selectedCitation?.id === c.id;
                    const strokeColor = isSelected 
                      ? 'hsl(var(--color-primary))' 
                      : c.url 
                        ? 'rgba(16, 185, 129, 0.4)' 
                        : 'rgba(156, 163, 175, 0.3)';
                    const strokeDash = isSelected ? 'none' : c.url ? 'none' : '4,4';

                    return (
                      <g key={c.id}>
                        {/* Connecting line */}
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`${x}%`}
                          y2={`${y}%`}
                          stroke={strokeColor}
                          strokeWidth={isSelected ? 2.5 : 1.2}
                          strokeDasharray={strokeDash}
                          filter={isSelected ? 'url(#glow)' : ''}
                        />
                        {/* Shimmer pulse effect along active link lines */}
                        {c.url && (
                          <circle r="3" fill="#10b981">
                            <animateMotion
                              path={`M 170 210 L ${1.7 * x + 85} ${2.1 * y + 105}`}
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Topology Nodes (DOM Elements overlaid on SVG space) */}
              <div className="w-full h-full relative z-20 flex items-center justify-center">
                
                {/* Central paper node */}
                <div className="w-20 h-20 rounded-full border-4 border-[hsl(var(--color-primary)/0.6)] bg-white dark:bg-zinc-800 shadow-2xl flex flex-col items-center justify-center text-center p-2 z-30 transform hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6 text-[hsl(var(--color-primary))]" />
                  <span className="text-[9px] font-black mt-1 leading-none uppercase">Paper</span>
                </div>

                {/* Circumferential nodes (slice first 10 for layout clarity) */}
                {citations.slice(0, 10).map((c, idx) => {
                  const angle = (idx * (2 * Math.PI)) / Math.min(10, citations.length);
                  const radiusX = 130;
                  const radiusY = 130;
                  const x = radiusX * Math.cos(angle);
                  const y = radiusY * Math.sin(angle);

                  const isSelected = selectedCitation?.id === c.id;

                  return (
                    <div
                      key={c.id}
                      onClick={() => {
                        setSelectedCitation(c);
                        setEditUrl(c.url);
                      }}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                      className={`absolute w-12 h-12 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:scale-110 shadow-lg border-2 z-30 ${
                        isSelected
                          ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.15)] ring-2 ring-[hsl(var(--color-primary)/0.3)]'
                          : c.url
                            ? 'border-emerald-500/50 bg-emerald-50/90 dark:bg-emerald-950/20'
                            : 'border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90'
                      }`}
                    >
                      <span className="text-[10px] font-bold leading-none">{c.marker}</span>
                      <span className="text-[8px] opacity-50 mt-1">P{c.pageNum}</span>
                    </div>
                  );
                })}

              </div>

              {/* Topology Instructions Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] text-zinc-400 dark:text-zinc-500 z-30">
                <span>{t('citationLinker.doiExternalLink')}</span>
                <span>{t('citationLinker.gotoPageLink')}</span>
              </div>

            </Card>
          </div>

        </div>
      )}

      {/* Processing State (Rotating gear dynamic panel) */}
      {isProcessing && (
        <Card variant="default" className="p-10 rounded-[2.5rem] bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-zinc-800/40 flex flex-col items-center justify-center space-y-6 shadow-2xl">
          {/* 3D Gear rotate animation */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div 
              style={{ transform: `rotate(${gearAngle}deg)` }}
              className="absolute w-20 h-20 text-[hsl(var(--color-primary))] opacity-80"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            
            {/* Small offset gear */}
            <div 
              style={{ transform: `rotate(${-gearAngle * 1.5}deg)` }}
              className="absolute -top-1 -right-1 w-10 h-10 text-zinc-500 opacity-60"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h4 className="text-sm font-bold text-[hsl(var(--color-foreground))]">{t('citationLinker.injectingMessage')}</h4>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">{progressMessage}</p>
          </div>
        </Card>
      )}

      {/* Finished Stage (Success screen) */}
      {status === 'complete' && result && (
        <Card variant="default" className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-zinc-800/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10" />
          </div>
          
          <div className="space-y-2 max-w-sm mx-auto">
            <h3 className="text-base font-extrabold text-[hsl(var(--color-foreground))]">{t('citationLinker.injectLink')}</h3>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
              {t('citationLinker.successDesc', { count: citations.length })}
            </p>
          </div>

          <div className="flex gap-3 justify-center max-w-xs mx-auto">
            <DownloadButton
              file={result}
              filename={file?.name.replace(/\.pdf$/i, '_linked.pdf') || 'citations_linked.pdf'}
              variant="primary"
              size="lg"
              className="flex-1 font-bold shadow-lg"
              showFileSize
            />
          </div>
        </Card>
      )}

    </div>
  );
}

export default CitationLinkerTool;

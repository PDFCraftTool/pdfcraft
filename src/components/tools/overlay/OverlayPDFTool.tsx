'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { overlayPDF } from '@/lib/pdf/processors/overlay';
import type { ProcessOutput } from '@/types/pdf';

export interface OverlayPDFToolProps {
  className?: string;
}

export function OverlayPDFTool({ className = '' }: OverlayPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // Files state
  const [baseFile, setBaseFile] = useState<File | null>(null);
  const [layerFile, setLayerFile] = useState<File | null>(null);
  
  // Loaded state
  const [basePages, setBasePages] = useState<number>(0);
  const [layerPages, setLayerPages] = useState<number>(0);
  const [isLoadingBase, setIsLoadingBase] = useState(false);
  const [isLoadingLayer, setIsLoadingLayer] = useState(false);

  // Configuration options
  const [mode, setMode] = useState<'overlay' | 'underlay'>('overlay');
  const [pageRange, setPageRange] = useState<string>('');
  const [loop, setLoop] = useState<boolean>(true);

  // Processing & result states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Cancellation ref
  const cancelledRef = useRef(false);

  /**
   * Load metadata for Base PDF
   */
  const handleBaseSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setBaseFile(file);
    setIsLoadingBase(true);
    setError(null);
    setResult(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setBasePages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError('Failed to parse main base PDF metadata. The file may be corrupt.');
    } finally {
      setIsLoadingBase(false);
    }
  }, []);

  /**
   * Load metadata for Layer PDF
   */
  const handleLayerSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setLayerFile(file);
    setIsLoadingLayer(true);
    setError(null);
    setResult(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setLayerPages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError('Failed to parse overlay layer PDF metadata. The file may be corrupt.');
    } finally {
      setIsLoadingLayer(false);
    }
  }, []);

  const handleClearBase = () => {
    setBaseFile(null);
    setBasePages(0);
    setResult(null);
  };

  const handleClearLayer = () => {
    setLayerFile(null);
    setLayerPages(0);
    setResult(null);
  };

  const handleProcess = async () => {
    if (!baseFile || !layerFile) {
      setError('Please upload both the main PDF and overlay layer PDF.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await overlayPDF(
        [baseFile, layerFile],
        { mode, pageRange, loop },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Processing page composition...');
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
        setError(output.error?.message || 'Failed to overlay pages.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  };

  const handleCancel = () => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Zone (Double layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Slot A: Base/Underlay PDF */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-[hsl(var(--color-foreground))] block">
            {t('overlayPdf.uploadBaseLabel')}
          </label>
          {baseFile ? (
            <Card variant="outlined" className="relative group p-4 flex items-center justify-between border-2 border-[hsl(var(--color-primary)/0.3)] bg-[hsl(var(--color-muted)/0.15)] rounded-2xl">
              <div className="flex items-center gap-3">
                <svg className="w-10 h-10 text-[hsl(var(--color-primary))]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 2v6h6" fill="white" />
                  <text x="7" y="17" fontSize="6" fill="white" fontWeight="bold">BASE</text>
                </svg>
                <div>
                  <p className="font-semibold text-sm text-[hsl(var(--color-foreground))] truncate max-w-[200px]" title={baseFile.name}>
                    {baseFile.name}
                  </p>
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                    {basePages > 0 ? t('overlayPdf.uploadBaseSuccess', { count: basePages, size: (baseFile.size / (1024 * 1024)).toFixed(2) }) : (t('aiPdfReflower.scanningMetadata') || 'Loading...')}
                  </p>
                </div>
              </div>
              <button 
                onClick={handleClearBase}
                disabled={isProcessing}
                className="p-1 rounded-full hover:bg-[hsl(var(--color-muted))] text-zinc-400 hover:text-red-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Card>
          ) : (
            <FileUploader
              accept={['application/pdf']}
              multiple={false}
              onFilesSelected={handleBaseSelected}
              onError={setError}
              disabled={isProcessing || isLoadingBase}
              label={t('overlayPdf.uploadBaseButton')}
              description={t('overlayPdf.uploadBaseDesc')}
              className="min-h-[160px] p-6 rounded-2xl"
            />
          )}
        </div>

        {/* Slot B: Overlay Layer PDF */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-[hsl(var(--color-foreground))] block">
            {t('overlayPdf.uploadLayerLabel')}
          </label>
          {layerFile ? (
            <Card variant="outlined" className="relative group p-4 flex items-center justify-between border-2 border-emerald-500/35 bg-emerald-500/5 rounded-2xl">
              <div className="flex items-center gap-3">
                <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 2v6h6" fill="white" />
                  <text x="7" y="17" fontSize="5.5" fill="white" fontWeight="bold">LAYER</text>
                </svg>
                <div>
                  <p className="font-semibold text-sm text-[hsl(var(--color-foreground))] truncate max-w-[200px]" title={layerFile.name}>
                    {layerFile.name}
                  </p>
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                    {layerPages > 0 ? t('overlayPdf.uploadLayerSuccess', { count: layerPages, size: (layerFile.size / (1024 * 1024)).toFixed(2) }) : (t('aiPdfReflower.scanningMetadata') || 'Loading...')}
                  </p>
                </div>
              </div>
              <button 
                onClick={handleClearLayer}
                disabled={isProcessing}
                className="p-1 rounded-full hover:bg-[hsl(var(--color-muted))] text-zinc-400 hover:text-red-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Card>
          ) : (
            <FileUploader
              accept={['application/pdf']}
              multiple={false}
              onFilesSelected={handleLayerSelected}
              onError={setError}
              disabled={isProcessing || isLoadingLayer}
              label={t('overlayPdf.uploadLayerButton')}
              description={t('overlayPdf.uploadLayerDesc')}
              className="min-h-[160px] p-6 rounded-2xl border-emerald-500/25 hover:border-emerald-500"
            />
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400">
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      {/* Main Workspace Configuration Panel */}
      {baseFile && layerFile && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT: 3D Visualization layer layout preview (Pure CSS awesome show) */}
          <div className="lg:col-span-5 space-y-4">
            <Card variant="outlined" className="p-6 bg-[hsl(var(--color-card))] rounded-2xl flex flex-col items-center justify-center min-h-[300px] overflow-hidden">
              <span className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] mb-8">
                {t('overlayPdf.previewTitle')}
              </span>
              
              {/* 3D Paper Layer frame container */}
              <div 
                className="relative w-44 h-48 transform-gpu transition-all duration-700 ease-in-out"
                style={{ 
                  perspective: '800px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Layer A (Base PDF sheet) */}
                <div 
                  className="absolute inset-0 bg-white dark:bg-zinc-900 border-2 border-[hsl(var(--color-primary))] shadow-xl rounded-xl flex items-center justify-center font-black text-[hsl(var(--color-primary))] select-none transition-all duration-700 ease-in-out"
                  style={{
                    transform: mode === 'overlay' 
                      ? 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(0px)'
                      : 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(40px)',
                    opacity: 0.95,
                    boxShadow: mode === 'underlay' ? '0 20px 40px rgba(0,0,0,0.3)' : '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="text-center">
                    <p className="text-sm">{t('overlayPdf.basePageLabel')}</p>
                    <p className="text-[10px] opacity-60">Base Document</p>
                  </div>
                </div>

                {/* Layer B (Overlay PDF sheet) */}
                <div 
                  className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-950/20 border-2 border-emerald-500 shadow-2xl rounded-xl flex items-center justify-center font-black text-emerald-500 select-none transition-all duration-700 ease-in-out"
                  style={{
                    transform: mode === 'overlay' 
                      ? 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(40px)'
                      : 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(0px)',
                    opacity: 0.9,
                    boxShadow: mode === 'overlay' ? '0 20px 40px rgba(16,185,129,0.35)' : '0 4px 10px rgba(16,185,129,0.1)'
                  }}
                >
                  <div className="text-center">
                    <p className="text-sm">{t('overlayPdf.layerPageLabel')}</p>
                    <p className="text-[10px] opacity-70">Overlay Layer</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center max-w-xs">
                <p className="text-xs font-semibold text-[hsl(var(--color-foreground))]">
                  {mode === 'overlay' 
                    ? t('overlayPdf.placementModeOverlay')
                    : t('overlayPdf.placementModeUnderlay')
                  }
                </p>
              </div>
            </Card>
          </div>

          {/* RIGHT: Parameter adjustments */}
          <div className="lg:col-span-7 space-y-6">
            <Card variant="default" className="p-6 rounded-2xl space-y-6 backdrop-blur-md bg-white/40 dark:bg-black/30 border border-white/20 dark:border-zinc-800/40">
              <h3 className="text-md font-bold text-[hsl(var(--color-foreground))] border-b border-[hsl(var(--color-border))] pb-3">
                {t('overlayPdf.optionsTitle')}
              </h3>

              {/* Mode Button Switcher */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[hsl(var(--color-muted-foreground))]">
                  {t('overlayPdf.placementModeLabel')}
                </span>
                <div className="flex bg-[hsl(var(--color-muted)/0.5)] p-1 rounded-xl">
                  <button
                    onClick={() => setMode('overlay')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                      mode === 'overlay'
                        ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] shadow'
                        : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                    }`}
                  >
                    {t('overlayPdf.placementOverlayBtn')}
                  </button>
                  <button
                    onClick={() => setMode('underlay')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${
                      mode === 'underlay'
                        ? 'bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))] shadow'
                        : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'
                    }`}
                  >
                    {t('overlayPdf.placementUnderlayBtn')}
                  </button>
                </div>
              </div>

              {/* Target Page Range */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-[hsl(var(--color-muted-foreground))]">
                    {t('overlayPdf.targetRangeLabel')}
                  </span>
                  <span className="text-[10px] text-[hsl(var(--color-muted-foreground))]">
                    {t('overlayPdf.targetRangeHelp')}
                  </span>
                </div>
                <input
                  type="text"
                  placeholder={t('overlayPdf.targetRangePlaceholder')}
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-input))] text-[hsl(var(--color-foreground))] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] transition-all"
                />
              </div>

              {/* Loop Switch Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-[hsl(var(--color-border))]">
                <div>
                  <span className="text-xs font-bold text-[hsl(var(--color-foreground))] block">
                    {t('overlayPdf.loopOverlayLabel')}
                  </span>
                  <span className="text-[10px] text-[hsl(var(--color-muted-foreground))] mt-0.5 block leading-normal max-w-md">
                    {t('overlayPdf.loopOverlayDesc')}
                  </span>
                </div>
                <button
                  onClick={() => setLoop(prev => !prev)}
                  className={`relative w-12 h-6.5 rounded-full transition-colors duration-300 focus:outline-none ${
                    loop ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-700'
                  }`}
                >
                  <div 
                    className={`absolute top-0.5 left-0.5 bg-white w-5.5 h-5.5 rounded-full shadow transition-transform duration-300 ${
                      loop ? 'translate-x-5.5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </Card>

            {/* Run Button */}
            <div className="space-y-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleProcess}
                disabled={isProcessing}
                className="w-full py-4 font-bold shadow-lg shadow-[hsl(var(--color-primary)/0.15)]"
              >
                {isProcessing ? (t('overlayPdf.processing') || 'Processing...') : t('overlayPdf.processButton')}
              </Button>

              {result && (
                <DownloadButton
                  file={result}
                  filename={baseFile.name.replace(/\.pdf$/i, '_overlay.pdf')}
                  variant="secondary"
                  size="lg"
                  className="w-full py-4"
                  showFileSize
                />
              )}
            </div>

            {/* Complete Prompt */}
            {status === 'complete' && result && (
              <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 text-green-700 dark:text-green-400 text-center animate-in fade-in">
                <p className="text-sm font-semibold">
                  {t('overlayPdf.successMessage')}
                </p>
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

export default OverlayPDFTool;

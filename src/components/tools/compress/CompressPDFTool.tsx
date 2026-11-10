'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { compressPDF, type CompressionQuality, type CompressionAlgorithm } from '@/lib/pdf/processors/compress';
import { useBatchProcessing, type BatchFile } from '@/lib/hooks/useBatchProcessing';
import { loadPdfjs } from '@/lib/pdf/loader';
import { Trash2, FileArchive, Check, AlertCircle, Loader2, X, Scaling, Eye, Sliders } from 'lucide-react';

export interface CompressPDFToolProps {
  className?: string;
}

export function CompressPDFTool({ className = '' }: CompressPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // Options
  const [algorithm, setAlgorithm] = useState<CompressionAlgorithm>('condense');
  const [quality, setQuality] = useState<CompressionQuality>('medium');
  const [removeMetadata, setRemoveMetadata] = useState(false);
  const [optimizeImages, setOptimizeImages] = useState(true);
  const [photonDpi, setPhotonDpi] = useState(150);
  const [error, setError] = useState<string | null>(null);

  // Single File Workspace (Magnifier & Physics balance)
  const [singleFile, setSingleFile] = useState<File | null>(null);
  const [pdfPageImage, setPdfPageImage] = useState<string>('');
  const [compressedImage, setCompressedImage] = useState<string>('');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [showCompare, setShowCompare] = useState<boolean>(true);

  // Magnifier positioning
  const [magCoords, setMagCoords] = useState<{ x: number; y: number; show: boolean }>({ x: 0, y: 0, show: false });
  const viewContainerRef = useRef<HTMLDivElement>(null);

  // Batch processing hook
  const {
    files,
    isProcessing,
    overallProgress,
    completedCount,
    errorCount,
    addFiles,
    removeFile,
    clearFiles,
    startProcessing,
    cancelProcessing,
    downloadAsZip,
  } = useBatchProcessing({
    maxConcurrent: 2,
  });

  /**
   * Render first page to Canvas for magnifier preview comparison
   */
  const renderPreview = async (fileToRender: File) => {
    try {
      const pdfjs = await loadPdfjs();
      const arrayBuffer = await fileToRender.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      const page = await pdf.getPage(1);
      
      const viewport = page.getViewport({ scale: 1.0 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        await page.render({ canvasContext: ctx, viewport }).promise;
        const originalUrl = canvas.toDataURL('image/jpeg', 1.0);
        setPdfPageImage(originalUrl);
        
        // Frontend simulated compression based on current selected quality
        const compQuality = quality === 'low' ? 0.35 : quality === 'medium' ? 0.6 : quality === 'high' ? 0.8 : 0.95;
        const compressedUrl = canvas.toDataURL('image/jpeg', compQuality);
        setCompressedImage(compressedUrl);
      }
    } catch (e) {
      console.error('Failed to render PDF page comparison preview:', e);
    }
  };

  // Re-generate preview when quality changes
  useEffect(() => {
    if (singleFile && pdfPageImage) {
      const canvas = document.createElement('canvas');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const compQuality = quality === 'low' ? 0.35 : quality === 'medium' ? 0.6 : quality === 'high' ? 0.8 : 0.95;
          const compressedUrl = canvas.toDataURL('image/jpeg', compQuality);
          setCompressedImage(compressedUrl);
        }
      };
      img.src = pdfPageImage;
    }
  }, [quality, singleFile, pdfPageImage]);

  /**
   * Handle files selected from uploader
   */
  const handleFilesSelected = useCallback((newFiles: File[]) => {
    if (newFiles.length > 0) {
      addFiles(newFiles);
      setError(null);
      
      // Load first file as preview metadata if single
      if (newFiles.length === 1) {
        setSingleFile(newFiles[0]);
        renderPreview(newFiles[0]);
      } else {
        setSingleFile(null);
      }
    }
  }, [addFiles]);

  /**
   * Handle single file drop removal
   */
  const handleClearSingleFile = () => {
    handleClearFile();
    setSingleFile(null);
    setPdfPageImage('');
    setCompressedImage('');
  };

  const handleClearFile = () => {
    clearFiles();
    setSingleFile(null);
    setPdfPageImage('');
    setCompressedImage('');
  };

  /**
   * Compress processor for batch processing
   */
  const compressProcessor = useCallback(async (
    file: File,
    onProgress: (progress: number) => void
  ): Promise<Blob> => {
    const options = {
      algorithm,
      quality,
      removeMetadata,
      optimizeImages,
      removeUnusedObjects: true,
      photonDpi,
      photonFormat: 'jpeg' as const,
      photonQuality: quality === 'low' ? 60 : quality === 'medium' ? 75 : 85,
    };

    const output = await compressPDF(
      file,
      options,
      (prog) => onProgress(prog)
    );

    if (output.success && output.result) {
      return output.result as Blob;
    }

    throw new Error(output.error?.message || 'Failed to compress PDF file.');
  }, [algorithm, quality, removeMetadata, optimizeImages, photonDpi]);

  /**
   * Handle compress operation
   */
  const handleCompress = useCallback(async () => {
    if (files.length === 0) {
      setError('Please select PDF files to compress.');
      return;
    }
    setError(null);
    
    // For single file mode, clear preview during processing
    if (singleFile && pdfPageImage) {
      setPdfPageImage('');
      setCompressedImage('');
    }
    
    await startProcessing(compressProcessor);
  }, [files.length, singleFile, pdfPageImage, startProcessing, compressProcessor]);

  /**
   * Handle download as ZIP
   */
  const handleDownloadZip = useCallback(async () => {
    await downloadAsZip('compressed-pdfs.zip');
  }, [downloadAsZip]);

  /**
   * Physics balancing beam rotation based on Quality preset
   * Low: beam tilts left (size is lighter, visual quality is heavier)
   */
  const getBalanceBeamRotation = () => {
    switch (quality) {
      case 'low': return -15; // beam tilts left (left side goes up)
      case 'medium': return -5;
      case 'high': return 5;
      case 'maximum': return 15; // beam tilts right (right side goes up)
      default: return 0;
    }
  };

  /**
   * Magnifier Hover Coordinates Tracking
   */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!viewContainerRef.current) return;
    const rect = viewContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check boundaries
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setMagCoords({ x, y, show: true });
    } else {
      setMagCoords((prev) => ({ ...prev, show: false }));
    }
  };

  const hasFiles = files.length > 0;
  const canCompress = hasFiles && !isProcessing;
  const hasCompletedFiles = completedCount > 0;
  const allCompleted = hasFiles && completedCount === files.length;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      
      {/* File Upload Area */}
      {!hasFiles && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={true}
          maxFiles={10}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={isProcessing}
          label={tTools('compressPdf.uploadLabel') || 'Upload PDF Files'}
          description={tTools('compressPdf.batchUploadDescription') || 'Drag and drop PDF files here. Support up to 10 files.'}
        />
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400">
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      {/* File List / Multi-file Grid */}
      {hasFiles && !singleFile && (
        <Card variant="outlined">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-[hsl(var(--color-foreground))]">
              {t('compress.waitingFiles', { count: files.length })}
            </h3>
            <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
              {t('compress.clearAll')}
            </Button>
          </div>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {files.map((bf) => (
              <div key={bf.id} className="flex items-center justify-between p-3 bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-border))] rounded-xl">
                <span className="text-xs font-semibold truncate max-w-sm">{bf.file.name}</span>
                {bf.status === 'completed' && bf.result && (
                  <DownloadButton
                    file={bf.result}
                    filename={`${bf.file.name.replace(/\.pdf$/i, '')}_compressed.pdf`}
                    variant="ghost"
                    size="sm"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Batch Processing Options & Start Button */}
          <div className="mt-4 space-y-4">
            {/* Quality Options */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                {t('compress.qualityTitle')}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {(['low', 'medium', 'high', 'maximum'] as CompressionQuality[]).map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuality(q)}
                    disabled={isProcessing}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                      quality === q
                        ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.08)] text-[hsl(var(--color-foreground))]'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/20 text-zinc-500'
                    }`}
                  >
                    {q === 'low' && t('compress.qualityLow')}
                    {q === 'medium' && t('compress.qualityMedium')}
                    {q === 'high' && t('compress.qualityHigh')}
                    {q === 'maximum' && t('compress.qualityMaximum')}
                  </button>
                ))}
              </div>
            </div>

            {/* Algorithm Options */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider">
                Compression Algorithm
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['standard', 'condense', 'photon'] as CompressionAlgorithm[]).map((alg) => (
                  <button
                    key={alg}
                    onClick={() => setAlgorithm(alg)}
                    disabled={isProcessing}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                      algorithm === alg
                        ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.08)] text-[hsl(var(--color-foreground))]'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/20 text-zinc-500'
                    }`}
                  >
                    {alg.charAt(0).toUpperCase() + alg.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Options */}
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={optimizeImages}
                  onChange={(e) => setOptimizeImages(e.target.checked)}
                  disabled={isProcessing}
                  className="w-4 h-4 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                />
                <span className="text-sm">{t('compress.optimizeGraphics')}</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={removeMetadata}
                  onChange={(e) => setRemoveMetadata(e.target.checked)}
                  disabled={isProcessing}
                  className="w-4 h-4 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                />
                <span className="text-sm">{t('compress.clearMetadata')}</span>
              </label>
            </div>

            {/* Start Compression Button */}
            <Button
              variant="primary"
              size="lg"
              className="w-full font-bold shadow-lg"
              onClick={handleCompress}
              disabled={!canCompress}
              loading={isProcessing}
            >
              {isProcessing ? t('compress.processingButton') : (tTools('compressPdf.compressButton') || 'Compress PDF')}
            </Button>
          </div>
        </Card>
      )}

      {/* Single File preview Workspace (Compare + Physics balance) */}
      {singleFile && pdfPageImage && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Split screen live comparison */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <Card variant="outlined" className="p-4 bg-zinc-100 dark:bg-zinc-950 rounded-[2rem] flex flex-col justify-between shadow-inner h-full min-h-[480px]">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-bold text-[hsl(var(--color-foreground))] flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-zinc-400" />
                  {t('compress.sliderTooltip')}
                </span>
                <span className="text-[10px] text-zinc-400">
                  {t('compress.qualityCompare', { quality: quality.toUpperCase() })}
                </span>
              </div>

              {/* Split screen content workspace */}
              <div 
                ref={viewContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMagCoords((prev) => ({ ...prev, show: false }))}
                className="flex-1 flex items-center justify-center p-4 relative overflow-hidden select-none cursor-crosshair min-h-[380px]"
              >
                
                {/* 1. Original Base Page image */}
                <img 
                  src={pdfPageImage} 
                  alt="Original layout" 
                  className="max-h-[380px] object-contain select-none"
                  draggable={false}
                />

                {/* 2. Compressed Overlaid Image with dynamic clip-path */}
                {compressedImage && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      clipPath: `inset(0 0 0 ${sliderPosition}%)`
                    }}
                  >
                    <img 
                      src={compressedImage} 
                      alt="Compressed preview" 
                      className="max-h-[380px] object-contain select-none"
                      draggable={false}
                    />
                  </div>
                )}

                {/* 3. Sliding split line */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-amber-500 cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-3 w-7.5 h-7.5 rounded-full bg-amber-500 border-2 border-white shadow flex items-center justify-center">
                    <span className="text-[9px] font-black text-white">◀▶</span>
                  </div>
                </div>

                {/* Split line cover panel for dragging */}
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize z-30"
                />

                {/* 4. WOW 3D refractive floating Magnifier loupe */}
                {magCoords.show && (
                  <div 
                    className="absolute w-32 h-32 rounded-full border-4 border-white/80 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.3)] z-40 pointer-events-none overflow-hidden"
                    style={{
                      left: magCoords.x - 64,
                      top: magCoords.y - 64,
                      transform: 'perspective(400px) rotateX(4deg) translateZ(10px)',
                    }}
                  >
                    {/* Zoomed in Canvas snapshot reflection */}
                    <div 
                      className="absolute w-[200%] h-[200%]"
                      style={{
                        backgroundImage: `url(${magCoords.x / (viewContainerRef.current?.getBoundingClientRect().width || 1) * 100 > sliderPosition ? compressedImage : pdfPageImage})`,
                        backgroundSize: '380px',
                        backgroundPosition: `-${(magCoords.x * 2) - 64}px -${(magCoords.y * 2) - 64}px`,
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    {/* Glass glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
                  </div>
                )}

              </div>

            </Card>
          </div>

          {/* RIGHT: Controls & Physics Balance Beam */}
          <div className="lg:col-span-5 flex flex-col space-y-6 justify-between">
            <Card variant="default" className="p-6 rounded-[2rem] border border-white/20 dark:border-zinc-800/40 bg-white/40 dark:bg-black/30 backdrop-blur-md flex flex-col justify-between h-full shadow-xl">
              
              <div className="space-y-6">
                
                {/* 3D Physics Balance beam representation */}
                <div className="flex flex-col items-center justify-center p-4 bg-zinc-900/35 border border-zinc-800 rounded-2xl relative overflow-hidden">
                  
                  {/* Balancing Scale SVG */}
                  <svg className="w-full h-24" viewBox="0 0 200 80">
                    <defs>
                      <radialGradient id="weight-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(var(--color-primary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--color-primary))" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    
                    {/* Center stand column */}
                    <line x1="100" y1="20" x2="100" y2="70" stroke="#71717a" strokeWidth="4" />
                    <line x1="80" y1="70" x2="120" y2="70" stroke="#71717a" strokeWidth="6" strokeLinecap="round" />

                    {/* Rotatable beam */}
                    <g 
                      style={{ 
                        transform: `rotate(${getBalanceBeamRotation()}deg)`,
                        transformOrigin: '100px 30px',
                        transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }}
                    >
                      <line x1="30" y1="30" x2="170" y2="30" stroke="#a1a1aa" strokeWidth="3" />
                      <circle cx="100" cy="30" r="4" fill="#18181b" />

                      {/* Left pan assembly (size / volume weight) */}
                      <line x1="30" y1="30" x2="30" y2="55" stroke="#71717a" strokeWidth="1" />
                      <path d="M15 55 L45 55" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
                      {/* Weight item (becomes bigger/smaller based on quality) */}
                      <circle 
                        cx="30" 
                        cy="48" 
                        r={quality === 'low' ? 4 : quality === 'medium' ? 7 : quality === 'high' ? 10 : 13} 
                        fill={quality === 'low' ? '#10b981' : '#f59e0b'} 
                        className="transition-all duration-500"
                      />

                      {/* Right pan assembly (visual quality details weight) */}
                      <line x1="170" y1="30" x2="170" y2="55" stroke="#71717a" strokeWidth="1" />
                      <path d="M155 55 L185 55" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
                      {/* Quality details item (brighter as quality goes up) */}
                      <circle 
                        cx="170" 
                        cy="48" 
                        r={quality === 'low' ? 13 : quality === 'medium' ? 10 : quality === 'high' ? 7 : 4} 
                        fill="#3b82f6" 
                        className="transition-all duration-500"
                        opacity={quality === 'low' ? 0.3 : quality === 'medium' ? 0.6 : quality === 'high' ? 0.8 : 1.0}
                      />
                    </g>
                  </svg>
                  
                  <div className="flex w-full justify-between px-6 text-[10px] font-bold text-zinc-400">
                    {t('compress.sizeShrink')}
                    {t('compress.pixelSharpness')}
                  </div>

                </div>

                {/* Quality options */}
                <div className="space-y-3.5">
                  <label className="text-xs font-bold text-[hsl(var(--color-muted-foreground))] uppercase tracking-wider flex items-center gap-1.5">
                    {t('compress.qualityTitle')}
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {(['low', 'medium', 'high', 'maximum'] as CompressionQuality[]).map((q) => (
                      <button
                        key={q}
                        onClick={() => setQuality(q)}
                        className={`py-2 rounded-xl text-xs font-extrabold transition-all border ${
                          quality === q
                            ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.08)] text-[hsl(var(--color-foreground))]'
                            : 'border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/20 text-zinc-500'
                        }`}
                      >
                        {q === 'low' && t('compress.qualityLow')}
                        {q === 'medium' && t('compress.qualityMedium')}
                        {q === 'high' && t('compress.qualityHigh')}
                        {q === 'maximum' && t('compress.qualityMaximum')}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-zinc-400 leading-normal">
                    {quality === 'low' && t('compress.descLow')}
                    {quality === 'medium' && t('compress.descMedium')}
                    {quality === 'high' && t('compress.descHigh')}
                    {quality === 'maximum' && t('compress.descMaximum')}
                  </p>
                </div>

                {/* Extra Options */}
                <div className="space-y-2 border-t border-[hsl(var(--color-border))] pt-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={optimizeImages}
                      onChange={(e) => setOptimizeImages(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    {t('compress.optimizeGraphics')}
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={removeMetadata}
                      onChange={(e) => setRemoveMetadata(e.target.checked)}
                      className="w-4 h-4 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    {t('compress.clearMetadata')}
                  </label>
                </div>

              </div>

              {/* Compression Actions */}
              <div className="pt-6 border-t border-[hsl(var(--color-border))]">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={handleClearSingleFile} disabled={isProcessing}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className="flex-1 font-bold shadow-lg shadow-[hsl(var(--color-primary)/0.15)]"
                    onClick={handleCompress}
                    disabled={!canCompress}
                    loading={isProcessing}
                  >
                    {isProcessing ? t('compress.processingButton') : (tTools('compressPdf.compressButton') || 'Compress PDF')}
                  </Button>
                </div>
              </div>

            </Card>
          </div>

        </div>
      )}

      {/* Progress View */}
      {isProcessing && !pdfPageImage && (
        <ProcessingProgress
          progress={overallProgress}
          status="processing"
          message={`Compressing ${completedCount + 1}/${files.length}...`}
          onCancel={cancelProcessing}
          showPercentage
        />
      )}

      {/* Download Zip Panel for Batch */}
      {allCompleted && !singleFile && (
        <Card variant="default" className="p-6 rounded-[2rem] text-center space-y-4">
          {t('compress.successTitle')}
          <div className="flex gap-2 justify-center">
            <Button variant="secondary" onClick={handleDownloadZip}>
              <FileArchive className="w-4 h-4 mr-2" />
              {t('compress.zipDownload', { count: completedCount })}
            </Button>
          </div>
        </Card>
      )}

      {/* Single download outcome */}
      {allCompleted && singleFile && completedCount > 0 && (
        <Card variant="default" className="p-8 rounded-[2rem] text-center space-y-6 shadow-xl animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div className="space-y-2 max-w-sm mx-auto">
            {t('compress.successDone')}
            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
              {t('compress.sizeInfo', { size: (singleFile.size / (1024 * 1024)).toFixed(2) })}
            </p>
          </div>

          <div className="flex gap-2 justify-center max-w-sm mx-auto">
            <Button
              variant="secondary"
              size="lg"
              className="font-bold"
              onClick={handleClearSingleFile}
            >
              {t('buttons.clear') || 'Clear'}
            </Button>
            <DownloadButton
              file={files[0].result!}
              filename={`${singleFile.name.replace(/\.pdf$/i, '')}_compressed.pdf`}
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

export default CompressPDFTool;

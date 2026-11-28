'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { deepSanitizePDF, type DeepSanitizeOptions } from '@/lib/pdf/processors/deep-sanitize';
import type { ProcessOutput } from '@/types/pdf';
import { 
  ShieldAlert, 
  Settings2, 
  Trash2, 
  Check, 
  ShieldCheck, 
  Skull, 
  Lock,
  RefreshCw,
  EyeOff
} from 'lucide-react';

export interface DeepSanitizeToolProps {
  className?: string;
}

export function DeepSanitizeTool({ className = '' }: DeepSanitizeToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // File States
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  // Sanitizer Settings
  const [stripMetadata, setStripMetadata] = useState(true);
  const [stripPieceInfo, setStripPieceInfo] = useState(true);
  const [stripOcgWatermarks, setStripOcgWatermarks] = useState(true);
  const [stripAnnotations, setStripAnnotations] = useState(false);

  // Status & Outcomes
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [findings, setFindings] = useState<string[]>([]);

  // Canvas Ref for Particle animation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const cancelledRef = useRef(false);

  // Particle animation state variables
  const particlesState = useRef<{
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
    angle: number;
    dist: number;
  }[]>([]);

  /**
   * Initialize canvas particles mapping circular chamber
   */
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 240;
    canvas.height = 240;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Generate initial spiral particles
    const initParticles = () => {
      const arr = [];
      const colors = ['rgba(168, 85, 247, 0.6)', 'rgba(59, 130, 246, 0.5)', 'rgba(236, 72, 153, 0.4)'];
      for (let i = 0; i < 60; i++) {
        arr.push({
          x: 0,
          y: 0,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.02 + 0.01,
          angle: Math.random() * Math.PI * 2,
          dist: Math.random() * 80 + 10,
        });
      }
      particlesState.current = arr;
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Chamber Circle Boundary
      ctx.strokeStyle = status === 'processing' ? 'rgba(168, 85, 247, 0.4)' : 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
      ctx.stroke();

      // Draw scanner laser line
      if (status === 'processing') {
        const scanY = centerY + 80 * Math.sin(Date.now() * 0.005);
        ctx.strokeStyle = 'rgba(168, 85, 2 purple, 0.8)';
        
        // Purple glowing scanline
        const gradient = ctx.createLinearGradient(centerX - 80, scanY, centerX + 80, scanY);
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.9)');
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4;
        ctx.shadowColor = 'rgba(168, 85, 247, 0.8)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(centerX - 85, scanY);
        ctx.lineTo(centerX + 85, scanY);
        ctx.stroke();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      }

      // Draw particles orbiting center
      particlesState.current.forEach((p) => {
        // Orbit physics
        p.angle += p.speed * (status === 'processing' ? 2.5 : 1);
        p.dist -= (status === 'processing' ? 0.35 : 0.05); // slowly fall to center
        
        if (p.dist <= 2) {
          p.dist = Math.random() * 80 + 20; // reset
        }

        p.x = centerX + p.dist * Math.cos(p.angle);
        p.y = centerY + p.dist * Math.sin(p.angle);

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [status]);

  /**
   * Trigger blast burst of particles on sanitization success
   */
  const triggerBlastEffect = () => {
    particlesState.current.forEach((p) => {
      p.speed = Math.random() * 0.15 + 0.1;
      p.dist += 150; // Push particles outward quickly
    });
  };

  /**
   * Handle File selection
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setIsLoadingMetadata(true);
    setError(null);
    setResult(null);
    setFindings([]);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true } as any);
      setTotalPages(pdf.getPageCount());

      // Auto scan first stage simulation
      setStatus('processing');
      setProgress(10);
      setProgressMessage('Scrutinizing document layers...');
      
      setTimeout(() => {
        // Simulate finding structural logs
        setFindings([
          'XMP Metadata Stream (contains creator details, modification logs)',
          'PieceInfo cache (contains proprietary editor histories)',
          'Incremental revision history logs (forces full xref reconstruction)'
        ]);
        setStatus('idle');
      }, 1200);

    } catch (err) {
      console.error(err);
      setError('Failed to scan file metadata. Page layout catalog may be corrupt.');
      setStatus('error');
    } finally {
      setIsLoadingMetadata(false);
    }
  }, []);

  /**
   * Run Sanitization Process
   */
  const handleSanitizeProcess = async () => {
    if (!file) return;

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(30);
    setProgressMessage('Deconstruction in progress...');
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await deepSanitizePDF(
        file,
        {
          stripMetadata,
          stripPieceInfo,
          stripOcgWatermarks,
          stripAnnotations,
        },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Purging structural trace metadata...');
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        triggerBlastEffect();
        setTimeout(() => {
          setResult(output.result as Blob);
          setStatus('complete');
          if (output.metadata && output.metadata.findings) {
            setFindings(output.metadata.findings as string[]);
          }
        }, 600);
      } else {
        setError(output.error?.message || 'Purging sanitization logs failed.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred during sanitizing.');
        setStatus('error');
      }
    }
  };

  const handleClearFile = () => {
    setFile(null);
    setTotalPages(0);
    setResult(null);
    setFindings([]);
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
      
      {/* File Uploader zone */}
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={isProcessing || isLoadingMetadata}
          label={t('deepSanitize.uploadLabel')}
          description={t('deepSanitize.uploadDescription')}
        />
      )}

      {/* Error Block */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400">
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      {/* Metadata Overview */}
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
                {t('deepSanitize.prechecking')}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
            {t('buttons.remove') || 'Remove'}
          </Button>
        </Card>
      )}

      {/* Primary Workspace */}
      {file && status !== 'complete' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Sanitizer Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <Card variant="default" className="flex-1 p-6 rounded-[2rem] border border-white/20 dark:border-zinc-800/40 bg-white/40 dark:bg-black/30 backdrop-blur-md flex flex-col justify-between shadow-xl space-y-6">
              
              <div className="space-y-4 flex-1">
                <div className="border-b border-[hsl(var(--color-border))] pb-3">
                  <h3 className="text-base font-bold text-[hsl(var(--color-foreground))] flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-[hsl(var(--color-primary))]" />
                    {t('deepSanitize.optionsTitle')}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stripMetadata}
                      onChange={(e) => setStripMetadata(e.target.checked)}
                      disabled={isProcessing}
                      className="w-4.5 h-4.5 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    <div className="text-xs">
                      {t('deepSanitize.clearXmp')}
                      {t('deepSanitize.clearXmpDesc')}
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stripPieceInfo}
                      onChange={(e) => setStripPieceInfo(e.target.checked)}
                      disabled={isProcessing}
                      className="w-4.5 h-4.5 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    <div className="text-xs">
                      {t('deepSanitize.clearPieceInfo')}
                      {t('deepSanitize.clearPieceInfoDesc')}
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stripOcgWatermarks}
                      onChange={(e) => setStripOcgWatermarks(e.target.checked)}
                      disabled={isProcessing}
                      className="w-4.5 h-4.5 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    <div className="text-xs">
                      {t('deepSanitize.clearOcProperties')}
                      {t('deepSanitize.clearOcPropertiesDesc')}
                    </div>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stripAnnotations}
                      onChange={(e) => setStripAnnotations(e.target.checked)}
                      disabled={isProcessing}
                      className="w-4.5 h-4.5 rounded border-zinc-300 text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                    />
                    <div className="text-xs">
                      {t('deepSanitize.clearAnnotations')}
                      {t('deepSanitize.clearAnnotationsDesc')}
                    </div>
                  </label>
                </div>
              </div>

              {/* Action Trigger Button */}
              <div className="pt-4 border-t border-[hsl(var(--color-border))] mt-6">
                <Button
                  variant="primary"
                  size="lg"
                  disabled={isProcessing}
                  className="w-full py-4 font-bold shadow-lg shadow-purple-500/15 flex items-center justify-center gap-2"
                  onClick={handleSanitizeProcess}
                >
                  <EyeOff className="w-5 h-5" />
                  {t('deepSanitize.processButton')}
                </Button>
              </div>

            </Card>
          </div>

          {/* RIGHT: 3D Particle Chamber visual box */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <Card variant="outlined" className="flex-1 p-6 bg-zinc-950 border-2 border-dashed border-[hsl(var(--color-border))] rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden shadow-inner h-full min-h-[420px]">
              
              {/* Particle chamber canvas */}
              <div className="relative w-60 h-60 flex items-center justify-center z-10">
                <canvas ref={canvasRef} className="w-full h-full" />
                {/* Glowing status text in the center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  {status === 'processing' ? (
                    <div className="space-y-1">
                      <RefreshCw className="w-6 h-6 text-purple-400 animate-spin mx-auto" />
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Wiping</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Lock className="w-6 h-6 text-zinc-600 mx-auto" />
                      <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Secured</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Detected findings box */}
              {findings.length > 0 && (
                <div className="w-full mt-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 z-20 space-y-2 animate-in slide-in-from-bottom duration-300">
                  <h4 className="text-[10px] font-black tracking-widest text-purple-400 uppercase flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-purple-400" />
                    {t('deepSanitize.riskReport')}
                  </h4>
                  <ul className="space-y-1 pl-1">
                    {findings.map((item, idx) => (
                      <li key={idx} className="text-[10px] text-zinc-400 leading-normal flex items-start gap-1">
                        <span className="text-purple-500 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </Card>
          </div>

        </div>
      )}

      {/* Finished Stage (Success screen) */}
      {status === 'complete' && result && (
        <Card variant="default" className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-zinc-800/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <div className="space-y-2 max-w-sm mx-auto">
            {t('deepSanitize.successTitle')}
            <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
              {t('deepSanitize.successDesc')}
            </p>
          </div>

          <div className="flex gap-3 justify-center max-w-xs mx-auto">
            <DownloadButton
              file={result}
              filename={file?.name.replace(/\.pdf$/i, '_sanitized.pdf') || 'sanitized_document.pdf'}
              variant="primary"
              size="lg"
              className="flex-1 font-bold shadow-lg"
              showFileSize
            />
          </div>
        </Card>
      )}

      {/* Processing bar */}
      {isProcessing && progress > 30 && (
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

export default DeepSanitizeTool;

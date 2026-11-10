'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { timestampPDF } from '@/lib/pdf/processors/timestamp';
import type { ProcessOutput } from '@/types/pdf';

export interface TimestampPDFToolProps {
  className?: string;
}

interface AuditLog {
  tsaAuthority: string;
  hash: string;
  timestamp: string;
  serial: string;
}

const TSA_SERVERS = [
  { id: 'MeSign', name: 'MeSign TSA', speedKey: 'fast' },
  { id: 'DigiCert', name: 'DigiCert TSA', speedKey: 'blazing' },
  { id: 'Sectigo', name: 'Sectigo TSA', speedKey: 'blazing' },
  { id: 'SSL.com', name: 'SSL.com TSA', speedKey: 'stable' },
  { id: 'FreeTSA', name: 'FreeTSA.org', speedKey: 'medium' },
];

export function TimestampPDFTool({ className = '' }: TimestampPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // File State
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  // Settings
  const [selectedTSA, setSelectedTSA] = useState<string>('MeSign');

  // Status & Outcomes
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [auditLog, setAuditLog] = useState<AuditLog | null>(null);

  // Cancellation ref
  const cancelledRef = useRef(false);

  /**
   * Load PDF metadata on selection
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setIsLoadingMetadata(true);
    setError(null);
    setResult(null);
    setAuditLog(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true } as any);
      setTotalPages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError('Failed to parse PDF metadata. The file may be corrupt.');
    } finally {
      setIsLoadingMetadata(false);
    }
  }, []);

  const handleClearFile = () => {
    setFile(null);
    setTotalPages(0);
    setResult(null);
    setAuditLog(null);
  };

  /**
   * Trigger timestamp signing processor
   */
  const handleTimestampProcess = async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setAuditLog(null);

    try {
      const output: ProcessOutput = await timestampPDF(
        [file],
        { tsaServer: selectedTSA },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Requesting TSA certificate...');
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
        
        // Save audit logs metadata returned from cryptographic signer
        if (output.metadata) {
          setAuditLog({
            tsaAuthority: output.metadata.tsaAuthority as string,
            hash: output.metadata.hash as string,
            timestamp: output.metadata.timestamp as string,
            serial: output.metadata.serial as string,
          });
        }
      } else {
        setError(output.error?.message || 'Failed to apply RFC 3161 timestamp.');
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
      
      {/* File Upload Zone */}
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={isProcessing || isLoadingMetadata}
          label={t('timestamp.uploadLabel')}
          description={t('timestamp.uploadDescription')}
        />
      )}

      {/* Error Block */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400 animate-in fade-in">
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
                {totalPages > 0 ? t('comparePdfs.pageNumber', { page: totalPages }) : t('status.loading')} • {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFile}
            disabled={isProcessing}
          >
            {t('buttons.remove')}
          </Button>
        </Card>
      )}

      {/* Primary Calibration Workspace */}
      {file && totalPages > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: TSA Authority Selection Hub */}
          <div className="lg:col-span-6 flex flex-col">
            <Card variant="default" className="flex-1 p-6 rounded-[2rem] space-y-6 backdrop-blur-md bg-white/40 dark:bg-black/30 border border-white/20 dark:border-zinc-800/40 flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="border-b border-[hsl(var(--color-border))] pb-3">
                  <h3 className="text-base font-bold text-[hsl(var(--color-foreground))] flex items-center gap-2">
                    <svg className="w-5 h-5 text-[hsl(var(--color-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {tTools('timestampPdf.selectTsaTitle')}
                  </h3>
                  <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] mt-1">
                    {tTools('timestampPdf.privacyGuaranteed')}
                  </p>
                </div>

                {/* TSA List selector recreate user screenshot beauty */}
                <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {TSA_SERVERS.map((tsa) => {
                    const isSelected = selectedTSA === tsa.id;
                    const isFast = tsa.speedKey === 'fast' || tsa.speedKey === 'blazing';
                    return (
                      <div
                        key={tsa.id}
                        onClick={() => !isProcessing && setSelectedTSA(tsa.id)}
                        className={`group p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.03)] shadow-[0_0_12px_hsl(var(--color-primary)/0.15)]'
                            : 'border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] hover:border-[hsl(var(--color-muted-foreground)/0.4)]'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-[hsl(var(--color-foreground))]">
                              {tsa.name}
                            </span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] uppercase">
                              {tsa.id}
                            </span>
                          </div>
                          <p className="text-[11px] text-[hsl(var(--color-muted-foreground))] leading-normal max-w-sm">
                            {tTools(`timestampPdf.tsa.desc.${tsa.id}`)}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            isFast
                              ? 'bg-green-100 text-green-700 dark:bg-green-950/20 dark:text-green-400'
                              : 'bg-amber-100 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400'
                          }`}>
                            {tTools(`timestampPdf.tsa.speed.${tsa.speedKey}`)}
                          </span>
                          
                          {/* Inner selected circle indicator */}
                          <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected 
                              ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))]' 
                              : 'border-zinc-400 dark:border-zinc-600'
                          }`}>
                            {isSelected && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Timestamp action button */}
              <div className="pt-4 border-t border-[hsl(var(--color-border))]">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleTimestampProcess}
                  disabled={isProcessing}
                  className="w-full py-4 font-bold shadow-lg shadow-[hsl(var(--color-primary)/0.15)] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {tTools('timestampPdf.processButton')}
                </Button>
              </div>
            </Card>
          </div>

          {/* RIGHT: Dynamic Audit & Validation Certificate Panel */}
          <div className="lg:col-span-6 flex flex-col">
            <Card variant="outlined" className="flex-1 p-6 bg-[hsl(var(--color-card))] border-2 border-dashed border-[hsl(var(--color-border))] rounded-[2rem] flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
              
              {!auditLog ? (
                // Awaiting signing state
                <div className="text-center space-y-3 p-6 text-[hsl(var(--color-muted-foreground))]">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--color-muted)/0.5)] border border-[hsl(var(--color-border))] flex items-center justify-center mx-auto text-zinc-400 mb-2">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-[hsl(var(--color-foreground))]">{tTools('timestampPdf.waitingTitle')}</h4>
                  <p className="text-xs leading-relaxed max-w-[260px] mx-auto">
                    {tTools('timestampPdf.waitingDescription')}
                  </p>
                </div>
              ) : (
                // Successfully signed certificate voucher
                <div className="w-full space-y-5 animate-in zoom-in-95 duration-500 flex flex-col justify-between h-full">
                  
                  {/* Premium Seal Emblem */}
                  <div className="flex items-start justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 font-bold uppercase tracking-wider">
                        TSA Verified & Secured
                      </span>
                      <h4 className="text-base font-black tracking-tight text-[hsl(var(--color-foreground))]">
                        {tTools('timestampPdf.certificateTitle')}
                      </h4>
                    </div>
                    {/* Golden luxury seal */}
                    <div className="w-14 h-14 rounded-full border-4 border-amber-400/40 bg-amber-400/10 flex items-center justify-center shadow-lg transform rotate-12 relative animate-in fade-in zoom-in-75 duration-700 delay-100">
                      <div className="text-center font-black text-amber-500 uppercase tracking-tighter" style={{ fontSize: '7px', lineHeight: '1' }}>
                        TSA<br/>
                        <span className="text-[9px]">SEAL</span><br/>
                        RFC 3161
                      </div>
                    </div>
                  </div>

                  {/* Audit Details */}
                  <div className="space-y-4 flex-1 py-1">
                    {/* Timestamp clock */}
                    <div className="bg-[hsl(var(--color-muted)/0.3)] border border-[hsl(var(--color-border))] p-3.5 rounded-2xl flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] uppercase font-bold tracking-wider">{tTools('timestampPdf.tsaTime')}</p>
                        <p className="text-sm font-extrabold text-[hsl(var(--color-foreground))] mt-0.5">
                          {new Date(auditLog.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Cryptographic Hash */}
                    <div className="space-y-1">
                      <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] uppercase font-bold tracking-wider">{tTools('timestampPdf.fileHash')}</p>
                      <code className="text-[10px] bg-[hsl(var(--color-muted)/0.35)] border border-[hsl(var(--color-border))] px-3 py-2 rounded-xl block font-mono text-[hsl(var(--color-foreground))] break-all leading-normal">
                        {auditLog.hash}
                      </code>
                    </div>

                    {/* Metadata fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] uppercase font-bold tracking-wider">{tTools('timestampPdf.authority')}</p>
                        <p className="text-xs font-bold text-[hsl(var(--color-foreground))] mt-1">
                          {auditLog.tsaAuthority}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-[hsl(var(--color-muted-foreground))] uppercase font-bold tracking-wider">{tTools('timestampPdf.serialNumber')}</p>
                        <p className="text-xs font-bold text-[hsl(var(--color-foreground))] mt-1 font-mono">
                          {auditLog.serial}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Complete Action Area */}
                  {result && (
                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
                      <DownloadButton
                        file={result}
                        filename={file.name.replace(/\.pdf$/i, '_timestamped.pdf')}
                        variant="secondary"
                        size="md"
                        className="flex-1 font-bold"
                        showFileSize
                      />
                    </div>
                  )}

                </div>
              )}

            </Card>
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

export default TimestampPDFTool;

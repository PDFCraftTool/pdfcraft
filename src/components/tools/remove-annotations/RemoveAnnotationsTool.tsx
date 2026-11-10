'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { removeAnnotations } from '@/lib/pdf/processors/remove-annotations';
import type { ProcessOutput } from '@/types/pdf';

export interface RemoveAnnotationsToolProps { className?: string; }

export function RemoveAnnotationsTool({ className = '' }: RemoveAnnotationsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [removeAll, setRemoveAll] = useState(true);
  const cancelledRef = useRef(false);

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing'); setProgress(0); setError(null); setResult(null);
    try {
      const output: ProcessOutput = await removeAnnotations(file, { removeAll, pages: 'all' }, (prog) => { if (!cancelledRef.current) setProgress(prog); });
      if (output.success && output.result) { setResult(output.result as Blob); setStatus('complete'); }
      else { setError(output.error?.message || 'Failed.'); setStatus('error'); }
    } catch (err) { setError(err instanceof Error ? err.message : 'Error'); setStatus('error'); }
  }, [file, removeAll]);

  const isProcessing = status === 'processing';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1} onFilesSelected={(files) => { if (files.length > 0) { setFile(files[0]); setError(null); setResult(null); } }} onError={setError} disabled={isProcessing} label={tTools('removeAnnotations.uploadLabel') || t('buttons.upload')} description={tTools('removeAnnotations.uploadDescription')} />}
      {error && <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700"><p className="text-sm">{error}</p></div>}
      {file && (
        <>
          <Card variant="outlined"><div className="flex items-center justify-between"><p className="font-medium">{file.name}</p><Button variant="ghost" size="sm" onClick={() => { setFile(null); setResult(null); }} disabled={isProcessing}>{t('buttons.remove')}</Button></div></Card>
          <Card variant="outlined" size="lg">
            <h3 className="text-lg font-medium mb-4">{tTools('removeAnnotations.optionsTitle') || 'Options'}</h3>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={removeAll} onChange={(e) => setRemoveAll(e.target.checked)} disabled={isProcessing} className="w-4 h-4" />
              <span>{tTools('removeAnnotations.removeAllLabel') || 'Remove all annotations (comments, highlights, links, etc.)'}</span>
            </label>
          </Card>
        </>
      )}
      {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} showPercentage />}
      {file && <div className="flex flex-wrap items-center gap-4"><Button variant="primary" size="lg" onClick={handleProcess} disabled={!file || isProcessing} loading={isProcessing}>{isProcessing ? t('status.processing') : tTools('removeAnnotations.processButton') || 'Remove Annotations'}</Button>{result && <DownloadButton file={result} filename={file.name.replace(/\.pdf$/i, '_no_annotations.pdf')} variant="secondary" size="lg" showFileSize />}</div>}
      {status === 'complete' && result && <div className="p-4 rounded bg-green-50 border border-green-200 text-green-700"><p className="text-sm font-medium">{tTools('removeAnnotations.successMessage') || 'Annotations removed successfully!'}</p></div>}
    </div>
  );
}

export default RemoveAnnotationsTool;

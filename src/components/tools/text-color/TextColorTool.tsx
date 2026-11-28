'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { changeTextColor } from '@/lib/pdf/processors/text-color';
import type { ProcessOutput } from '@/types/pdf';

export interface TextColorToolProps { className?: string; }

export function TextColorTool({ className = '' }: TextColorToolProps) {
  const t = useTranslations('tools.textColor');
  const tCommon = useTranslations('common.buttons');
  
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState('#0000ff');
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const [threshold, setThreshold] = useState(128);
  const cancelledRef = useRef(false);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16) / 255, g: parseInt(result[2], 16) / 255, b: parseInt(result[3], 16) / 255 } : { r: 0, g: 0, b: 0 };
  };

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing'); setProgress(0); setError(null); setResult(null);
    try {
      const output: ProcessOutput = await changeTextColor(file, { 
        color: hexToRgb(color), 
        pages: 'all',
        mode,
        threshold,
      }, (prog) => { if (!cancelledRef.current) setProgress(prog); });
      if (output.success && output.result) { setResult(output.result as Blob); setStatus('complete'); }
      else { setError(output.error?.message || 'Failed.'); setStatus('error'); }
    } catch (err) { setError(err instanceof Error ? err.message : 'Error'); setStatus('error'); }
  }, [file, color, mode, threshold]);

  const isProcessing = status === 'processing';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader 
          accept={['application/pdf', '.pdf']} 
          multiple={false} 
          maxFiles={1} 
          onFilesSelected={(files) => { if (files.length > 0) { setFile(files[0]); setError(null); setResult(null); } }} 
          onError={setError} 
          disabled={isProcessing} 
          label={t('uploadLabel')} 
          description={t('uploadDescription')} 
        />
      )}
      
      {error && (
        <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700">
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      {file && (
        <>
          <Card variant="outlined">
            <div className="flex items-center justify-between">
              <p className="font-medium">{file.name}</p>
              <Button variant="ghost" size="sm" onClick={() => { setFile(null); setResult(null); }} disabled={isProcessing}>
                {tCommon('remove')}
              </Button>
            </div>
          </Card>
          
          <Card variant="outlined" size="lg">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{t('colorLabel')}</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                    className="w-16 h-10 border rounded cursor-pointer" 
                    disabled={isProcessing} 
                  />
                  <input 
                    type="text" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                    className="px-3 py-2 border rounded w-32" 
                    disabled={isProcessing} 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('modeLabel') || 'Mode'}</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="mode" 
                      value="dark" 
                      checked={mode === 'dark'} 
                      onChange={() => setMode('dark')} 
                      disabled={isProcessing}
                    />
                    <span className="text-sm">{t('modeDark') || 'Dark text (light background)'}</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="mode" 
                      value="light" 
                      checked={mode === 'light'} 
                      onChange={() => setMode('light')} 
                      disabled={isProcessing}
                    />
                    <span className="text-sm">{t('modeLight') || 'Light text (dark background)'}</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('thresholdLabel') || 'Threshold'}: {threshold}
                </label>
                <input 
                  type="range" 
                  min="0" 
                  max="255" 
                  value={threshold} 
                  onChange={(e) => setThreshold(Number(e.target.value))} 
                  className="w-full" 
                  disabled={isProcessing}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {t('thresholdHint') || 'Adjust to control which pixels are affected'}
                </p>
              </div>
            </div>
          </Card>
        </>
      )}
      
      {isProcessing && (
        <ProcessingProgress 
          progress={progress} 
          status={status} 
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} 
          showPercentage 
        />
      )}
      
      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="lg" onClick={handleProcess} disabled={!file || isProcessing} loading={isProcessing}>
            {isProcessing ? tCommon('process') + '...' : t('applyButton')}
          </Button>
          {result && (
            <DownloadButton 
              file={result} 
              filename={file.name.replace(/\.pdf$/i, '_textcolor.pdf')} 
              variant="secondary" 
              size="lg" 
              showFileSize 
            />
          )}
        </div>
      )}
      
      {status === 'complete' && result && (
        <div className="p-4 rounded bg-green-50 border border-green-200 text-green-700">
          <p className="text-sm font-medium">{t('successMessage')}</p>
        </div>
      )}
    </div>
  );
}

export default TextColorTool;

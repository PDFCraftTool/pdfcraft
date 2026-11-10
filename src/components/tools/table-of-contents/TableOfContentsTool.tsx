'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { generateTableOfContents, TOCOptions } from '@/lib/pdf/processors/table-of-contents';
import type { ProcessOutput } from '@/types/pdf';

export interface TableOfContentsToolProps {
  className?: string;
}

export function TableOfContentsTool({ className = '' }: TableOfContentsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.tableOfContents');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // TOC options
  const [title, setTitle] = useState('Table of Contents');
  const [fontSize, setFontSize] = useState(12);
  const [fontFamily, setFontFamily] = useState('helv');
  const [fontOptions] = useState([
    { label: 'Times Roman', value: 'times' },
    { label: 'Times Bold', value: 'tibo' },
    { label: 'Times Italic', value: 'tiit' },
    { label: 'Times Bold Italic', value: 'tibi' },
    { label: 'Helvetica', value: 'helv' },
    { label: 'Helvetica Bold', value: 'hebo' },
    { label: 'Helvetica Oblique', value: 'heit' },
    { label: 'Helvetica Bold Oblique', value: 'hebi' },
    { label: 'Courier', value: 'cour' },
    { label: 'Courier Bold', value: 'cobo' },
    { label: 'Courier Oblique', value: 'coit' },
    { label: 'Courier Bold Oblique', value: 'cobi' },
  ]);


  const [addBookmark, setAddBookmark] = useState(true);

  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
    }
  }, []);

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const options: TOCOptions = {
        title,
        fontSize,
        fontFamily, // Pass current selection
        addBookmark,
      };

      const output: ProcessOutput = await generateTableOfContents(file, options, (prog) => {
        if (!cancelledRef.current) setProgress(prog);
      });

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to generate table of contents.');
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setStatus('error');
    }
  }, [file, title, fontSize, fontFamily, addBookmark]);

  const isProcessing = status === 'processing';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={isProcessing}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      )}

      {error && (
        <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {file && (
        <>
          <Card variant="outlined">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900 dark:text-gray-100">{file.name}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setFile(null);
                  setResult(null);
                  setError(null);
                }}
                disabled={isProcessing}
              >
                {t('buttons.remove')}
              </Button>
            </div>
          </Card>

          <Card variant="outlined" size="lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {tTools('options')}
            </h3>

            <div className="space-y-4">
              {/* TOC Title */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  {tTools('tocTitle')}
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  disabled={isProcessing}
                  placeholder="Table of Contents"
                />
              </div>

              {/* Font Size */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  {tTools('fontSize')}
                </label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
                  className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  disabled={isProcessing}
                >
                  <option value={8}>8pt</option>
                  <option value={10}>10pt</option>
                  <option value={12}>12pt</option>
                  <option value={14}>14pt</option>
                  <option value={16}>16pt</option>
                  <option value={18}>18pt</option>
                  <option value={24}>24pt</option>
                </select>
              </div>

              {/* Font Family - Dynamic based on OS */}
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  {tTools('fontFamily')}
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                  disabled={isProcessing}
                >
                  {fontOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add Bookmark Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="addBookmark"
                  checked={addBookmark}
                  onChange={(e) => setAddBookmark(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 dark:border-gray-600"
                  disabled={isProcessing}
                />
                <label
                  htmlFor="addBookmark"
                  className="text-sm text-gray-700 dark:text-gray-300"
                >
                  {tTools('addBookmark')}
                </label>
              </div>
            </div>

            {/* Info message */}
            <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-400">
                {tTools('bookmarkRequired')}
              </p>
            </div>
          </Card>
        </>
      )}

      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          onCancel={() => {
            cancelledRef.current = true;
            setStatus('idle');
          }}
          showPercentage
        />
      )}

      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={handleProcess}
            disabled={!file || isProcessing}
            loading={isProcessing}
          >
            {isProcessing ? t('status.processing') : tTools('generate')}
          </Button>
          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace(/\.pdf$/i, '_with_toc.pdf')}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}

      {status === 'complete' && result && (
        <div className="p-4 rounded bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
          <p className="text-sm font-medium">{tTools('success')}</p>
        </div>
      )}
    </div>
  );
}

export default TableOfContentsTool;

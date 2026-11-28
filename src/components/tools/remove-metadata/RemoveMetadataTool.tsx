'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { removeMetadata, type RemoveMetadataOptions } from '@/lib/pdf/processors/remove-metadata';
import type { ProcessOutput } from '@/types/pdf';

export interface RemoveMetadataToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * RemoveMetadataTool Component
 * Requirements: 5.1
 * 
 * Provides the UI for removing metadata from PDF files.
 */
export function RemoveMetadataTool({ className = '' }: RemoveMetadataToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [removedFields, setRemovedFields] = useState<string[]>([]);
  
  // Options
  const [options, setOptions] = useState<RemoveMetadataOptions>({
    removeTitle: true,
    removeAuthor: true,
    removeSubject: true,
    removeKeywords: true,
    removeCreator: true,
    removeProducer: true,
    removeCreationDate: true,
    removeModificationDate: true,
  });
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      setRemovedFields([]);
    }
  }, []);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setRemovedFields([]);
  }, []);

  const handleOptionChange = useCallback((key: keyof RemoveMetadataOptions) => {
    setOptions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const selectAll = useCallback(() => {
    setOptions({
      removeTitle: true,
      removeAuthor: true,
      removeSubject: true,
      removeKeywords: true,
      removeCreator: true,
      removeProducer: true,
      removeCreationDate: true,
      removeModificationDate: true,
    });
  }, []);

  const deselectAll = useCallback(() => {
    setOptions({
      removeTitle: false,
      removeAuthor: false,
      removeSubject: false,
      removeKeywords: false,
      removeCreator: false,
      removeProducer: false,
      removeCreationDate: false,
      removeModificationDate: false,
    });
  }, []);

  const handleRemoveMetadata = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setRemovedFields([]);

    try {
      const output: ProcessOutput = await removeMetadata(
        file,
        options,
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
        if (output.metadata?.removedFields) {
          setRemovedFields(output.metadata.removedFields as string[]);
        }
      } else {
        setError(output.error?.message || 'Failed to remove metadata.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, options]);

  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isProcessing = status === 'processing';
  const canProcess = file && !isProcessing;

  const metadataFields = [
    { key: 'removeTitle' as const, label: tTools('removeMetadata.title') || 'Title' },
    { key: 'removeAuthor' as const, label: tTools('removeMetadata.author') || 'Author' },
    { key: 'removeSubject' as const, label: tTools('removeMetadata.subject') || 'Subject' },
    { key: 'removeKeywords' as const, label: tTools('removeMetadata.keywords') || 'Keywords' },
    { key: 'removeCreator' as const, label: tTools('removeMetadata.creator') || 'Creator' },
    { key: 'removeProducer' as const, label: tTools('removeMetadata.producer') || 'Producer' },
    { key: 'removeCreationDate' as const, label: tTools('removeMetadata.creationDate') || 'Creation Date' },
    { key: 'removeModificationDate' as const, label: tTools('removeMetadata.modificationDate') || 'Modification Date' },
  ];

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={false}
        maxFiles={1}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={tTools('removeMetadata.uploadLabel') || 'Upload PDF File'}
        description={tTools('removeMetadata.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
      />

      {/* Error Message */}
      {error && (
        <div 
          className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700"
          role="alert"
        >
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Selected File */}
      {file && (
        <Card variant="outlined" size="lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 2v6h6" fill="white" />
                  <text x="7" y="17" fontSize="6" fill="white" fontWeight="bold">PDF</text>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                  {file.name}
                </p>
                <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  {formatSize(file.size)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              disabled={isProcessing}
            >
              {t('buttons.remove') || 'Remove'}
            </Button>
          </div>
        </Card>
      )}

      {/* Metadata Options */}
      {file && (
        <Card variant="outlined">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
              {tTools('removeMetadata.optionsTitle') || 'Select Metadata to Remove'}
            </h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={selectAll} disabled={isProcessing}>
                {tTools('removeMetadata.selectAll') || 'Select All'}
              </Button>
              <Button variant="ghost" size="sm" onClick={deselectAll} disabled={isProcessing}>
                {tTools('removeMetadata.deselectAll') || 'Deselect All'}
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Info */}
            <div className="p-3 rounded-[var(--radius-sm)] bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-700">
                {tTools('removeMetadata.info') || 'Removing metadata helps protect your privacy by stripping identifying information from the PDF.'}
              </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {metadataFields.map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={options[key]}
                    onChange={() => handleOptionChange(key)}
                    disabled={isProcessing}
                    className="w-4 h-4 rounded border-[hsl(var(--color-border))] text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                  />
                  <span className="text-sm text-[hsl(var(--color-foreground))]">
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </Card>
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

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <Button
          variant="primary"
          size="lg"
          onClick={handleRemoveMetadata}
          disabled={!canProcess}
          loading={isProcessing}
        >
          {isProcessing 
            ? (t('status.processing') || 'Processing...') 
            : (tTools('removeMetadata.removeButton') || 'Remove Metadata')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace(/\.pdf$/i, '')}_no_metadata.pdf` : 'no_metadata.pdf'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {/* Success Message */}
      {status === 'complete' && result && (
        <div 
          className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
          role="status"
        >
          <p className="text-sm font-medium">
            {tTools('removeMetadata.successMessage') || 'Metadata removed successfully!'}
          </p>
          {removedFields.length > 0 && (
            <p className="text-xs mt-1 text-green-600">
              {tTools('removeMetadata.removedFields') || 'Removed:'} {removedFields.join(', ')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default RemoveMetadataTool;

'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { removeRestrictions, type RemoveRestrictionsOptions } from '@/lib/pdf/processors/remove-restrictions';
import type { ProcessOutput } from '@/types/pdf';
import { Eye, EyeOff } from 'lucide-react';

export interface RemoveRestrictionsToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * RemoveRestrictionsTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for removing security restrictions from PDF files.
 * This removes owner password restrictions that prevent printing, copying, and editing.
 */
export function RemoveRestrictionsTool({ className = '' }: RemoveRestrictionsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{
    originalSize: number;
    newSize: number;
  } | null>(null);
  
  // Options
  const [ownerPassword, setOwnerPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Password error modal
  const [showPasswordErrorModal, setShowPasswordErrorModal] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle file selected from uploader
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      setStats(null);
    }
  }, []);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Clear file
   */
  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setStats(null);
    setOwnerPassword('');
  }, []);

  /**
   * Handle remove restrictions operation
   */
  const handleRemoveRestrictions = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setStats(null);

    const options: RemoveRestrictionsOptions = {
      ownerPassword: ownerPassword || undefined,
    };

    try {
      const output: ProcessOutput = await removeRestrictions(
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
        
        // Set stats
        if (output.metadata) {
          setStats({
            originalSize: output.metadata.originalSize as number,
            newSize: output.metadata.newSize as number,
          });
        }
      } else {
        // Check for invalid password error
        const errorMsg = output.error?.message || '';
        const errorCode = output.error?.code || '';
        
        if (
          errorCode === 'INVALID_PASSWORD' ||
          errorMsg === 'INVALID_PASSWORD'
        ) {
          setPasswordErrorMessage(tTools('removeRestrictions.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errorMsg || 'Failed to remove PDF restrictions.');
        }
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        const errMsg = err instanceof Error ? err.message : String(err);
        // Check for invalid password error in catch block
        if (errMsg === 'INVALID_PASSWORD') {
          setPasswordErrorMessage(tTools('removeRestrictions.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errMsg || 'An unexpected error occurred.');
        }
        setStatus('error');
      }
    }
  }, [file, ownerPassword, tTools]);

  /**
   * Handle cancel operation
   */
  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Format file size
   */
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isProcessing = status === 'processing';
  const canProcess = file && !isProcessing;

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
        label={tTools('removeRestrictions.uploadLabel') || 'Upload PDF File'}
        description={tTools('removeRestrictions.uploadDescription') || 'Drag and drop a restricted PDF file here, or click to browse.'}
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

      {/* Options */}
      {file && (
        <Card variant="outlined">
          <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
            {tTools('removeRestrictions.optionsTitle') || 'Options'}
          </h3>
          
          <div className="space-y-4">
            {/* Owner Password Input */}
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                {tTools('removeRestrictions.ownerPasswordLabel') || 'Owner Password (optional)'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={ownerPassword}
                  onChange={(e) => setOwnerPassword(e.target.value)}
                  disabled={isProcessing}
                  placeholder={tTools('removeRestrictions.ownerPasswordPlaceholder') || 'Enter owner password if known'}
                  className="w-full px-3 py-2 pr-10 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] placeholder:text-[hsl(var(--color-muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                {tTools('removeRestrictions.ownerPasswordHint') || 'If the PDF has an owner password, enter it here for better results.'}
              </p>
            </div>

            {/* Info about restrictions */}
            <div className="p-3 rounded-[var(--radius-sm)] bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-700">
                {tTools('removeRestrictions.info') || 'This tool removes owner password restrictions that prevent printing, copying, and editing. It works on PDFs with permission restrictions but cannot remove user passwords required to open the document.'}
              </p>
            </div>

            {/* Warning */}
            <div className="p-3 rounded-[var(--radius-sm)] bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-yellow-700">
                {tTools('removeRestrictions.warning') || 'Only use this tool on PDFs you own or have permission to modify. Removing restrictions from copyrighted material without authorization may violate copyright laws.'}
              </p>
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
          onClick={handleRemoveRestrictions}
          disabled={!canProcess}
          loading={isProcessing}
        >
          {isProcessing 
            ? (t('status.processing') || 'Processing...') 
            : (tTools('removeRestrictions.removeButton') || 'Remove Restrictions')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace(/\.pdf$/i, '')}_unrestricted.pdf` : 'unrestricted.pdf'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {/* Results */}
      {status === 'complete' && result && stats && (
        <div 
          className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
          role="status"
        >
          <p className="text-sm font-medium mb-2">
            {tTools('removeRestrictions.successMessage') || 'PDF restrictions removed successfully!'}
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-green-600">{tTools('removeRestrictions.originalSize') || 'Original:'}</span>
              <span className="ml-1 font-medium">{formatSize(stats.originalSize)}</span>
            </div>
            <div>
              <span className="text-green-600">{tTools('removeRestrictions.newSize') || 'New Size:'}</span>
              <span className="ml-1 font-medium">{formatSize(stats.newSize)}</span>
            </div>
          </div>
          <p className="text-xs mt-2 text-green-600">
            {tTools('removeRestrictions.successHint') || 'The PDF can now be printed, copied, and edited without restrictions.'}
          </p>
        </div>
      )}

      {/* Password Error Modal */}
      <Modal
        isOpen={showPasswordErrorModal}
        onClose={() => setShowPasswordErrorModal(false)}
        title={t('status.error') || 'Error'}
        size="sm"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-[hsl(var(--color-foreground))]">
                {passwordErrorMessage}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowPasswordErrorModal(false)}
            >
              {t('buttons.close') || 'Close'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default RemoveRestrictionsTool;

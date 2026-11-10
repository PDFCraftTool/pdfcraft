'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { decryptPDF, type DecryptPDFOptions } from '@/lib/pdf/processors/decrypt';
import type { ProcessOutput } from '@/types/pdf';

export interface DecryptPDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * DecryptPDFTool Component
 * Requirements: 5.1, 11.4
 * 
 * Provides the UI for decrypting password-protected PDF files.
 * All decryption is performed client-side - passwords are never transmitted.
 */
export function DecryptPDFTool({ className = '' }: DecryptPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Password
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Password error modal
  const [showPasswordErrorModal, setShowPasswordErrorModal] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
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
    setPassword('');
  }, []);

  const handleDecrypt = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file to decrypt.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: DecryptPDFOptions = {
      password,
    };

    try {
      const output: ProcessOutput = await decryptPDF(
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
      } else {
        // Check for invalid password error
        const errorMsg = output.error?.message || '';
        const errorDetails = output.error?.details || '';
        const combinedError = `${errorMsg} ${errorDetails}`.toLowerCase();
       
        if (
          errorMsg === 'INVALID_PASSWORD' || 
          combinedError.includes('invalid password') ||
          combinedError.includes('incorrect password')
        ) {
          setPasswordErrorMessage(tTools('decryptPdf.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errorMsg || 'Failed to decrypt PDF file.');
        }
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        const errMsg = err instanceof Error ? err.message : String(err);
        // Check for invalid password error in catch block
        if (errMsg.toLowerCase().includes('invalid password')) {
          setPasswordErrorMessage(tTools('decryptPdf.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errMsg || 'An unexpected error occurred.');
        }
        setStatus('error');
      }
    }
  }, [file, password, tTools]);

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
  const canDecrypt = file && !isProcessing;

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
        label={tTools('decryptPdf.uploadLabel') || 'Upload Encrypted PDF'}
        description={tTools('decryptPdf.uploadDescription') || 'Drag and drop an encrypted PDF file here, or click to browse.'}
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

      {/* Password Input */}
      {file && (
        <Card variant="outlined">
          <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
            {tTools('decryptPdf.passwordTitle') || 'Enter Password'}
          </h3>
          
          <div className="space-y-4">
            {/* Privacy Notice */}
            <div className="p-3 rounded-[var(--radius-sm)] bg-green-50 border border-green-200">
              <p className="text-sm text-green-700">
                {tTools('decryptPdf.privacyNotice') || '🔒 Your password is processed locally and never sent to any server.'}
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="decrypt-password" className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                {tTools('decryptPdf.passwordLabel') || 'PDF Password'}
              </label>
              <div className="relative">
                <input
                  id="decrypt-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isProcessing}
                  placeholder={tTools('decryptPdf.passwordPlaceholder') || 'Enter the PDF password'}
                  aria-describedby="decrypt-password-hint"
                  className="w-full px-3 py-2 pr-10 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <p id="decrypt-password-hint" className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                {tTools('decryptPdf.passwordHint') || 'Leave empty if the PDF only has owner password restrictions.'}
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
          onClick={handleDecrypt}
          disabled={!canDecrypt}
          loading={isProcessing}
        >
          {isProcessing 
            ? (t('status.processing') || 'Processing...') 
            : (tTools('decryptPdf.decryptButton') || 'Decrypt PDF')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace(/\.pdf$/i, '')}_decrypted.pdf` : 'decrypted.pdf'}
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
            {tTools('decryptPdf.successMessage') || 'PDF decrypted successfully!'}
          </p>
          <p className="text-xs mt-1 text-green-600">
            {tTools('decryptPdf.successHint') || 'The PDF is now unlocked and can be opened without a password.'}
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

export default DecryptPDFTool;

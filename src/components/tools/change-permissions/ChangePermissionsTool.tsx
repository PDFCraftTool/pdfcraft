'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { changePermissions, type ChangePermissionsOptions, type PDFPermissionSettings } from '@/lib/pdf/processors/change-permissions';
import type { ProcessOutput } from '@/types/pdf';

export interface ChangePermissionsToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * ChangePermissionsTool Component
 * Requirements: 5.1
 * 
 * Provides the UI for changing PDF document permissions.
 */
export function ChangePermissionsTool({ className = '' }: ChangePermissionsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Password fields
  const [currentPassword, setCurrentPassword] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newOwnerPassword, setNewOwnerPassword] = useState('');
  
  // Password error modal
  const [showPasswordErrorModal, setShowPasswordErrorModal] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  
  // Permission options
  const [permissions, setPermissions] = useState<PDFPermissionSettings>({
    allowPrinting: true,
    allowHighQualityPrinting: true,
    allowModifying: true,
    allowCopying: true,
    allowAnnotating: true,
    allowFillingForms: true,
    allowContentAccessibility: true,
    allowDocumentAssembly: true,
  });
  
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
    setCurrentPassword('');
    setNewUserPassword('');
    setNewOwnerPassword('');
  }, []);

  const handlePermissionChange = useCallback((key: keyof PDFPermissionSettings) => {
    setPermissions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const allowAll = useCallback(() => {
    setPermissions({
      allowPrinting: true,
      allowHighQualityPrinting: true,
      allowModifying: true,
      allowCopying: true,
      allowAnnotating: true,
      allowFillingForms: true,
      allowContentAccessibility: true,
      allowDocumentAssembly: true,
    });
  }, []);

  const restrictAll = useCallback(() => {
    setPermissions({
      allowPrinting: false,
      allowHighQualityPrinting: false,
      allowModifying: false,
      allowCopying: false,
      allowAnnotating: false,
      allowFillingForms: false,
      allowContentAccessibility: false,
      allowDocumentAssembly: false,
    });
  }, []);

  const handleChangePermissions = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: ChangePermissionsOptions = {
      permissions,
      currentPassword: currentPassword || undefined,
      newUserPassword: newUserPassword || undefined,
      newOwnerPassword: newOwnerPassword || undefined,
    };

    try {
      const output: ProcessOutput = await changePermissions(
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
          setPasswordErrorMessage(tTools('changePermissions.invalidPassword') || 'The current password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else if (
          errorMsg === 'PASSWORD_REQUIRED' ||
          combinedError.includes('password required') ||
          combinedError.includes('password-protected')
        ) {
          setPasswordErrorMessage(tTools('changePermissions.passwordRequired') || 'This PDF is password-protected. Please enter the current password to proceed.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errorMsg || 'Failed to change permissions.');
        }
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        const errMsg = err instanceof Error ? err.message : String(err);
        const errMsgLower = errMsg.toLowerCase();
        // Check for invalid password error in catch block
        if (
          errMsgLower.includes('invalid password') ||
          errMsgLower.includes('incorrect password')
        ) {
          setPasswordErrorMessage(tTools('changePermissions.invalidPassword') || 'The current password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else if (
          errMsgLower.includes('password required') ||
          errMsgLower.includes('password-protected')
        ) {
          setPasswordErrorMessage(tTools('changePermissions.passwordRequired') || 'This PDF is password-protected. Please enter the current password to proceed.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errMsg || 'An unexpected error occurred.');
        }
        setStatus('error');
      }
    }
  }, [file, permissions, currentPassword, newUserPassword, newOwnerPassword, tTools]);

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

  const permissionFields = [
    { key: 'allowPrinting' as const, label: tTools('changePermissions.allowPrinting') || 'Allow Printing', desc: tTools('changePermissions.allowPrintingDesc') || 'Users can print the document' },
    { key: 'allowHighQualityPrinting' as const, label: tTools('changePermissions.allowHighQualityPrinting') || 'Allow High-Quality Printing', desc: tTools('changePermissions.allowHighQualityPrintingDesc') || 'Users can print at high resolution' },
    { key: 'allowModifying' as const, label: tTools('changePermissions.allowModifying') || 'Allow Modifying', desc: tTools('changePermissions.allowModifyingDesc') || 'Users can edit the document' },
    { key: 'allowCopying' as const, label: tTools('changePermissions.allowCopying') || 'Allow Copying', desc: tTools('changePermissions.allowCopyingDesc') || 'Users can copy text and images' },
    { key: 'allowAnnotating' as const, label: tTools('changePermissions.allowAnnotating') || 'Allow Annotating', desc: tTools('changePermissions.allowAnnotatingDesc') || 'Users can add comments and annotations' },
    { key: 'allowFillingForms' as const, label: tTools('changePermissions.allowFillingForms') || 'Allow Filling Forms', desc: tTools('changePermissions.allowFillingFormsDesc') || 'Users can fill in form fields' },
    { key: 'allowContentAccessibility' as const, label: tTools('changePermissions.allowAccessibility') || 'Allow Accessibility', desc: tTools('changePermissions.allowAccessibilityDesc') || 'Screen readers can access content' },
    { key: 'allowDocumentAssembly' as const, label: tTools('changePermissions.allowAssembly') || 'Allow Assembly', desc: tTools('changePermissions.allowAssemblyDesc') || 'Users can insert, delete, or rotate pages' },
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
        label={tTools('changePermissions.uploadLabel') || 'Upload PDF File'}
        description={tTools('changePermissions.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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

      {/* Permission Options */}
      {file && (
        <Card variant="outlined">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
              {tTools('changePermissions.optionsTitle') || 'Document Permissions'}
            </h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={allowAll} disabled={isProcessing}>
                {tTools('changePermissions.allowAll') || 'Allow All'}
              </Button>
              <Button variant="ghost" size="sm" onClick={restrictAll} disabled={isProcessing}>
                {tTools('changePermissions.restrictAll') || 'Restrict All'}
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Info */}
            <div className="p-3 rounded-[var(--radius-sm)] bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-yellow-700">
                {tTools('changePermissions.info') || 'Note: Permission enforcement requires PDF encryption. Set an owner password below to enforce restrictions.'}
              </p>
            </div>

            {/* Permissions List */}
            <div className="space-y-3">
              {permissionFields.map(({ key, label, desc }) => (
                <label key={key} className="flex items-start gap-3 cursor-pointer p-2 rounded-[var(--radius-sm)] hover:bg-[hsl(var(--color-muted)/0.3)]">
                  <input
                    type="checkbox"
                    checked={permissions[key]}
                    onChange={() => handlePermissionChange(key)}
                    disabled={isProcessing}
                    className="w-4 h-4 mt-0.5 rounded border-[hsl(var(--color-border))] text-[hsl(var(--color-primary))] focus:ring-[hsl(var(--color-primary))]"
                  />
                  <div>
                    <span className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                      {label}
                    </span>
                    <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                      {desc}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Password Settings */}
      {file && (
        <Card variant="outlined">
          <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
            {tTools('changePermissions.passwordTitle') || 'Password Settings'}
          </h3>
          
          <div className="space-y-4">
            {/* Privacy Notice */}
            <div className="p-3 rounded-[var(--radius-sm)] bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-700">
                {tTools('changePermissions.privacyNotice') || '🔒 Your passwords are processed locally and never sent to any server.'}
              </p>
            </div>

            {/* Current Password */}
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('changePermissions.currentPasswordLabel') || 'Current Password (if PDF is encrypted)'}
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder={tTools('changePermissions.currentPasswordPlaceholder') || 'Enter current password'}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              />
              <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                {tTools('changePermissions.currentPasswordHint') || 'Required if the PDF is already password-protected.'}
              </p>
            </div>

            {/* New User Password */}
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('changePermissions.newUserPasswordLabel') || 'New User Password (to open document)'}
              </label>
              <input
                type="password"
                value={newUserPassword}
                onChange={(e) => setNewUserPassword(e.target.value)}
                placeholder={tTools('changePermissions.newUserPasswordPlaceholder') || 'Enter user password'}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              />
              <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                {tTools('changePermissions.newUserPasswordHint') || 'Users will need this password to open the PDF.'}
              </p>
            </div>

            {/* New Owner Password */}
            <div>
              <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-1">
                {tTools('changePermissions.newOwnerPasswordLabel') || 'New Owner Password (to change permissions)'}
              </label>
              <input
                type="password"
                value={newOwnerPassword}
                onChange={(e) => setNewOwnerPassword(e.target.value)}
                placeholder={tTools('changePermissions.newOwnerPasswordPlaceholder') || 'Enter owner password'}
                disabled={isProcessing}
                className="w-full px-3 py-2 rounded-[var(--radius-sm)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
              />
              <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-1">
                {tTools('changePermissions.newOwnerPasswordHint') || 'Required to enforce permission restrictions.'}
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
          onClick={handleChangePermissions}
          disabled={!canProcess}
          loading={isProcessing}
        >
          {isProcessing 
            ? (t('status.processing') || 'Processing...') 
            : (tTools('changePermissions.applyButton') || 'Apply Permissions')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace(/\.pdf$/i, '')}_permissions.pdf` : 'permissions.pdf'}
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
            {tTools('changePermissions.successMessage') || 'Permissions updated successfully!'}
          </p>
          <p className="text-xs mt-1 text-green-600">
            {tTools('changePermissions.successHint') || 'For full permission enforcement, encrypt the PDF with an owner password.'}
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

export default ChangePermissionsTool;

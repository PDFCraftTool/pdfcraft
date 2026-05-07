'use client';

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { UploadCloud, File, Plus, X } from 'lucide-react';

export interface FileUploaderProps {
  /** Accepted file types (MIME types or extensions) */
  accept?: string[];
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Callback when files are selected */
  onFilesSelected: (files: File[]) => void;
  /** Callback when an error occurs */
  onError?: (error: string) => void;
  /** Custom class name */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Custom label text */
  label?: string;
  /** Custom description text */
  description?: string;
}

/**
 * FileUploader Component
 * Requirements: 5.2
 * 
 * Supports drag-and-drop, file picker, and paste from clipboard.
 * Beautified with premium UI and glassmorphism.
 */
export const FileUploader: React.FC<FileUploaderProps> = ({
  accept = ['application/pdf'],
  multiple = false,
  maxSize = Infinity, // No limit by default
  maxFiles = 10,
  onFilesSelected,
  onError,
  className = '',
  disabled = false,
  label,
  description,
}) => {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');

  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // Generate accept string for input element
  const acceptString = accept.join(',');

  /**
   * Validate files against constraints
   */
  const validateFiles = useCallback((files: File[]): { valid: File[]; errors: string[] } => {
    const valid: File[] = [];
    const errors: string[] = [];

    // Check max files
    if (!multiple && files.length > 1) {
      errors.push('Only one file can be uploaded at a time.');
      return { valid: [files[0]], errors };
    }

    if (files.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed.`);
      files = files.slice(0, maxFiles);
    }

    for (const file of files) {
      // Check file size (skip if no limit)
      if (maxSize !== Infinity && file.size > maxSize) {
        const maxSizeMB = Math.round(maxSize / (1024 * 1024));
        errors.push(tErrors('fileTooLarge', { maxSize: maxSizeMB }));
        continue;
      }

      // Check file type
      const isValidType = accept.some(type => {
        // Accept all files
        if (type === '*/*' || type === '*') {
          return true;
        }
        if (type.startsWith('.')) {
          // Extension check
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        if (type.endsWith('/*')) {
          // Wildcard MIME type
          const baseType = type.slice(0, -2);
          return file.type.startsWith(baseType);
        }
        // Exact MIME type match
        return file.type === type;
      });

      // Also check by extension for PDF files
      const isPdfByExtension = file.name.toLowerCase().endsWith('.pdf');
      const acceptsPdf = accept.includes('application/pdf');

      if (!isValidType && !(acceptsPdf && isPdfByExtension)) {
        errors.push(tErrors('fileTypeInvalid', { acceptedTypes: accept.join(', ') }));
        continue;
      }

      valid.push(file);
    }

    return { valid, errors };
  }, [accept, maxSize, maxFiles, multiple, tErrors]);

  /**
   * Handle file selection
   */
  const handleFiles = useCallback((files: FileList | File[]) => {
    if (disabled) return;

    const fileArray = Array.from(files);
    if (fileArray.length === 0) return;

    const { valid, errors } = validateFiles(fileArray);

    if (errors.length > 0 && onError) {
      onError(errors[0]);
    }

    if (valid.length > 0) {
      onFilesSelected(valid);
    }
  }, [disabled, validateFiles, onError, onFilesSelected]);

  /**
   * Handle drag enter
   */
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (disabled) return;

    setDragCounter(prev => prev + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, [disabled]);

  /**
   * Handle drag leave
   */
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragCounter(prev => {
      const newCount = prev - 1;
      if (newCount === 0) {
        setIsDragging(false);
      }
      return newCount;
    });
  }, []);

  /**
   * Handle drag over
   */
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  /**
   * Handle drop
   */
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
    setDragCounter(0);

    if (disabled) return;

    const files = e.dataTransfer.files;
    handleFiles(files);
  }, [disabled, handleFiles]);

  /**
   * Handle file input change
   */
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
    // Reset input value to allow selecting the same file again
    e.target.value = '';
  }, [handleFiles]);

  /**
   * Handle click to open file picker
   */
  const handleClick = useCallback(() => {
    if (disabled) return;
    fileInputRef.current?.click();
  }, [disabled]);

  /**
   * Handle keyboard interaction
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  }, [disabled]);

  /**
   * Handle paste from clipboard
   */
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (disabled) return;

      const items = e.clipboardData?.items;
      if (!items) return;

      const files: File[] = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file) {
            files.push(file);
          }
        }
      }

      if (files.length > 0) {
        e.preventDefault();
        handleFiles(files);
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, [disabled, handleFiles]);

  const baseStyles = `
    relative flex flex-col items-center justify-center
    w-full min-h-[220px] p-8
    border-2 border-dashed
    rounded-2xl
    transition-all duration-200
    cursor-pointer
    group
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-primary))/0.5]
  `;

  const stateStyles = disabled
    ? 'border-[hsl(var(--color-muted))] bg-[hsl(var(--color-muted)/0.3)] cursor-not-allowed opacity-50'
    : isDragging
      ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.04)]'
      : 'border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] hover:border-[hsl(var(--color-primary)/0.6)] hover:bg-[hsl(var(--color-muted)/0.3)]';

  return (
    <div
      ref={dropZoneRef}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={label || t('buttons.upload')}
      aria-disabled={disabled}
      className={`${baseStyles} ${stateStyles} ${className}`.trim()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptString}
        multiple={multiple}
        onChange={handleInputChange}
        className="hidden"
        aria-hidden="true"
        disabled={disabled}
      />

      {/* Upload icon */}
      <div className={`mb-4 transition-colors duration-200 ${isDragging ? 'text-[hsl(var(--color-primary))]' : 'text-[hsl(var(--color-muted-foreground))] group-hover:text-[hsl(var(--color-primary))]'}`}>
        <UploadCloud className="w-9 h-9" aria-hidden="true" />
      </div>

      {/* Label */}
      <p className="text-base font-semibold text-[hsl(var(--color-foreground))] mb-1.5 text-center">
        {label || 'Drag and drop files here or click to browse'}
      </p>

      {/* Description / size hint */}
      <p className="text-xs text-[hsl(var(--color-muted-foreground))] text-center mb-2">
        {description || (
          maxSize !== Infinity
            ? `Up to ${Math.round(maxSize / 1024 / 1024)}MB · ${multiple ? 'Multiple files' : 'Single file'}`
            : (multiple ? 'Multiple files' : 'Single file')
        )}
      </p>

      {/* File type info */}
      {accept && accept.length > 0 && (
        <p className="text-xs text-[hsl(var(--color-muted-foreground))] text-center mb-1">
          {accept.join(', ')}
        </p>
      )}

      {/* Max files info */}
      {multiple && maxFiles && (
        <p className="text-xs text-[hsl(var(--color-muted-foreground))] text-center mb-4">
          Max files: {maxFiles}
        </p>
      )}

      {/* Select button */}
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className="px-5 py-2 text-sm font-semibold text-white bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-hover))] rounded-lg transition-colors shadow-sm disabled:opacity-50"
        tabIndex={-1}
        aria-hidden="true"
      >
        Select PDF
      </button>

      {/* Drag overlay */}
      {isDragging && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[hsl(var(--color-primary)/0.06)] rounded-2xl z-10 pointer-events-none">
          <Plus className="w-8 h-8 text-[hsl(var(--color-primary))] mb-2" aria-hidden="true" />
          <p className="text-sm font-semibold text-[hsl(var(--color-primary))]">
            Drop files here
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;

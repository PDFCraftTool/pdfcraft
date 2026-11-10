'use client';

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { UploadCloud, File, Plus, X, Lock, Loader2 } from 'lucide-react';
import { isTauri } from '@/lib/tauri-bridge';

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
 * Safely create a virtual File object from a Blob across browser and runtime environments
 */
function createVirtualPdfFile(blob: Blob, name: string): File {
  try {
    const Ctor = typeof File !== 'undefined' ? File : (window as any)?.File;
    if (typeof Ctor === 'function') {
      return new Ctor([blob], name, { type: 'application/pdf' }) as File;
    }
  } catch {}

  const file = blob as any;
  file.name = name;
  file.lastModified = Date.now();
  return file as File;
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

  // Encryption & Decryption states
  const [encryptPendingFiles, setEncryptPendingFiles] = useState<File[]>([]);
  const [encryptCurrentIndex, setEncryptCurrentIndex] = useState<number>(-1);
  const [password, setPassword] = useState<string>('');
  const [decryptError, setDecryptError] = useState<string | null>(null);
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);
  const [shouldShake, setShouldShake] = useState<boolean>(false);
  const [decryptedFilesAccumulator, setDecryptedFilesAccumulator] = useState<File[]>([]);

  const [isDragging, setIsDragging] = useState(false);
  const [dragCounter, setDragCounter] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // Helper to check if a PDF file is encrypted, and silently unlock it if it only has
  // owner/permissions restrictions (i.e. empty user password, common in bank statements).
  const inspectAndUnlockPdf = async (file: File): Promise<{ needsPassword: boolean; file: File }> => {
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      return { needsPassword: false, file };
    }
    try {
      const arrayBuffer = typeof file.arrayBuffer === 'function'
        ? await file.arrayBuffer()
        : await new Response(file).arrayBuffer();
      const { PDFDocument } = await import('pdf-lib');
      await PDFDocument.load(arrayBuffer);
      return { needsPassword: false, file };
    } catch (err: any) {
      const msg = err?.message || '';
      const isEncryptError = msg.includes('encrypt') || msg.includes('password') || msg.includes('decrypt');
      if (!isEncryptError) {
        // Non-encryption parse error, let downstream processors handle it
        return { needsPassword: false, file };
      }

      // Document has /Encrypt dictionary.
      // Attempt silent decryption with empty password using qpdf-wasm.
      // Many documents (such as bank statements, invoices, official letters)
      // only set an Owner Password to restrict editing/copying, but have an empty User Password.
      try {
        const { decryptPDF } = await import('@/lib/pdf/processors/decrypt');
        const silentOutput = await decryptPDF(file, { password: '' });
        if (silentOutput.success && silentOutput.result) {
          const unlockedFile = createVirtualPdfFile(silentOutput.result as Blob, file.name);
          return { needsPassword: false, file: unlockedFile };
        }
      } catch {
        // Silent unlock failed, fall through to user prompt
      }

      return { needsPassword: true, file };
    }
  };

  const resetDecryptStates = () => {
    setEncryptPendingFiles([]);
    setEncryptCurrentIndex(-1);
    setPassword('');
    setDecryptError(null);
    setIsDecrypting(false);
    setDecryptedFilesAccumulator([]);
  };

  const handleDecryptCancel = () => {
    resetDecryptStates();
  };

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
   * Handle decryption submit action
   */
  const handleDecryptSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isDecrypting || encryptCurrentIndex === -1) return;

    const fileToDecrypt = encryptPendingFiles[encryptCurrentIndex];
    setIsDecrypting(true);
    setDecryptError(null);

    try {
      // Decrypt with qpdf-wasm (same engine as the dedicated Decrypt PDF tool).
      // NOTE: pdf-lib cannot decrypt password-protected PDFs at all, so we must
      // not use PDFDocument.load here — it throws for every encrypted input.
      const { decryptPDF } = await import('@/lib/pdf/processors/decrypt');
      const output = await decryptPDF(fileToDecrypt, { password });

      if (!output.success || !output.result) {
        throw new Error(output.error?.message || 'INVALID_PASSWORD');
      }

      const decryptedBlob = output.result as Blob;

      // Create a fresh unlocked virtual File object
      const unlockedFile = createVirtualPdfFile(
        decryptedBlob,
        fileToDecrypt.name.replace(/\.pdf$/i, '_unlocked.pdf')
      );

      const updatedAccumulator = [...decryptedFilesAccumulator, unlockedFile];
      setDecryptedFilesAccumulator(updatedAccumulator);
      setPassword('');

      const nextIndex = encryptCurrentIndex + 1;
      if (nextIndex < encryptPendingFiles.length) {
        setEncryptCurrentIndex(nextIndex);
      } else {
        // Complete! Notify tool components of the unlocked files alongside native plain files
        onFilesSelected(updatedAccumulator);
        resetDecryptStates();
      }
    } catch (err: any) {
      console.error('PDF Decryption failed:', err);
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 500);
      setDecryptError(tErrors('incorrectPassword') || 'Incorrect password. Please try again.');
    } finally {
      setIsDecrypting(false);
    }
  };

  /**
   * Handle file selection
   */
  const handleFiles = useCallback(async (files: FileList | File[]) => {
    if (disabled) return;

    const fileArray = Array.from(files);
    if (fileArray.length === 0) return;

    const { valid, errors } = validateFiles(fileArray);

    if (errors.length > 0 && onError) {
      onError(errors[0]);
    }

    if (valid.length > 0) {
      // Async scan for encrypted PDF files
      const encryptedList: File[] = [];
      const unencryptedList: File[] = [];

      for (const file of valid) {
        const { needsPassword, file: processedFile } = await inspectAndUnlockPdf(file);
        if (needsPassword) {
          encryptedList.push(processedFile);
        } else {
          unencryptedList.push(processedFile);
        }
      }

      if (encryptedList.length > 0) {
        // Initialize the decryption state machine queue
        setEncryptPendingFiles(encryptedList);
        setDecryptedFilesAccumulator(unencryptedList);
        setEncryptCurrentIndex(0);
        setPassword('');
        setDecryptError(null);
      } else {
        // All files are already plain/unencrypted or silently unlocked, transmit directly
        onFilesSelected(unencryptedList);
      }
    }
  }, [disabled, validateFiles, onError, onFilesSelected]);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (disabled) return;

    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }

    setDragCounter(prev => prev + 1);
    const hasFiles = e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files');
    if (hasFiles || (e.dataTransfer.items && e.dataTransfer.items.length > 0)) {
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
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }
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
   * Handle Tauri native drag-and-drop events
   */
  useEffect(() => {
    if (!isTauri() || disabled) return;

    let active = true;
    const unlisteners: (() => void)[] = [];

    const setupTauriDragDrop = async () => {
      try {
        const { getCurrentWebviewWindow } = await import('@tauri-apps/api/webviewWindow');
        const { readFile } = await import('@tauri-apps/plugin-fs');
        const appWindow = getCurrentWebviewWindow();

        if (!active) return;

        const uOver = await appWindow.listen<{ paths: string[] }>('tauri://drag-over', () => {
          setIsDragging(true);
        });
        unlisteners.push(uOver);

        const uLeave = await appWindow.listen('tauri://drag-leave', () => {
          setIsDragging(false);
        });
        unlisteners.push(uLeave);

        const uDrop = await appWindow.listen<{ paths: string[] }>('tauri://drag-drop', async (event) => {
          setIsDragging(false);
          const paths = event.payload.paths;
          if (!paths || paths.length === 0) return;

          const fileObjects: File[] = [];
          for (const filePath of paths) {
            try {
              const bytes = await readFile(filePath);
              const name = filePath.split(/[/\\]/).pop() || 'file.pdf';
              
              let mimeType = 'application/octet-stream';
              if (name.toLowerCase().endsWith('.pdf')) {
                mimeType = 'application/pdf';
              } else if (name.toLowerCase().endsWith('.png')) {
                mimeType = 'image/png';
              } else if (name.toLowerCase().endsWith('.jpg') || name.toLowerCase().endsWith('.jpeg')) {
                mimeType = 'image/jpeg';
              }

              const file = new (window as any).File([bytes], name, { type: mimeType }) as File;
              fileObjects.push(file);
            } catch (err) {
              console.error(`Tauri failed to read dragged file: ${filePath}`, err);
            }
          }

          if (fileObjects.length > 0) {
            handleFiles(fileObjects);
          }
        });
        unlisteners.push(uDrop);

        if (!active) {
          unlisteners.forEach(u => u());
        }
      } catch (err) {
        console.error('Failed to set up Tauri drag and drop listeners:', err);
      }
    };

    setupTauriDragDrop();

    return () => {
      active = false;
      unlisteners.forEach(u => u());
    };
  }, [disabled, handleFiles]);

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

  /**
   * Prevent default browser drag/drop behavior to avoid file navigation (only for file drags)
   */
  useEffect(() => {
    const handleGlobalDragOver = (e: DragEvent) => {
      const hasFiles = e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files');
      if (hasFiles) {
        e.preventDefault();
      }
    };
    
    const handleGlobalDrop = (e: DragEvent) => {
      const hasFiles = e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files');
      if (hasFiles) {
        e.preventDefault();
      }
    };

    window.addEventListener('dragover', handleGlobalDragOver);
    window.addEventListener('drop', handleGlobalDrop);
    return () => {
      window.removeEventListener('dragover', handleGlobalDragOver);
      window.removeEventListener('drop', handleGlobalDrop);
    };
  }, []);

  const baseStyles = `
    relative flex flex-col items-center justify-center
    w-full min-h-[250px] p-10
    border-2 border-dashed
    rounded-[2rem]
    transition-all duration-300
    cursor-pointer
    group
  `;

  // Dynamic styles based on state
  const stateStyles = disabled
    ? 'border-[hsl(var(--color-muted))] bg-[hsl(var(--color-muted)/0.3)] cursor-not-allowed opacity-50'
    : isDragging
      ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.05)] scale-[1.01] shadow-2xl shadow-primary/10'
      : `
      border-[hsl(var(--color-border))] 
      bg-[hsl(var(--color-card)/0.5)] 
      hover:border-[hsl(var(--color-primary))] 
      hover:bg-[hsl(var(--color-background))] 
      hover:shadow-xl hover:shadow-[hsl(var(--color-primary)/0.05)]
      glass-card
    `;

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

      {/* Decorative background blob */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--color-primary)/0.03)] rounded-full blur-3xl" />
      </div>

      {/* Upload icon */}
      <div className={`
        mb-6 p-4 rounded-full transition-transform duration-300 group-hover:scale-110
        ${isDragging ? 'bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))]' : 'bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] group-hover:bg-[hsl(var(--color-primary)/0.1)] group-hover:text-[hsl(var(--color-primary))]'}
      `}>
        <UploadCloud className="w-10 h-10" aria-hidden="true" />
      </div>

      {/* Label */}
      <p className="text-xl font-semibold text-[hsl(var(--color-foreground))] mb-3 text-center">
        {label || t('buttons.upload')}
      </p>

      {/* Description */}
      <div className="text-sm text-[hsl(var(--color-muted-foreground))] text-center max-w-sm leading-relaxed">
        {description || (
          <>
            <p className="mb-2">{t('fileUploader.dragDrop')}</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--color-muted)/0.5)] text-xs font-medium">
              <span className="opacity-70">{t('fileUploader.support')}:</span>
              <span>{accept && accept.length > 0 ? accept.join(', ') : t('fileUploader.paste')}</span>
              {maxSize && maxSize !== Infinity && (
                <span className="ml-1 opacity-70">
                  ({Math.round(maxSize / (1024 * 1024))}MB)
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* File info hints - only show when multiple files allowed */}
      {multiple && (
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <span className="text-xs px-2 py-1 rounded-md bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]">
            Max files: {maxFiles}
          </span>
        </div>
      )}

      {/* Drag overlay */}
      {isDragging && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[hsl(var(--color-background)/0.9)] backdrop-blur-sm rounded-[2rem] z-10 transition-opacity duration-200">
          <div className="p-4 rounded-full bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] mb-4 motion-safe:animate-bounce">
            <Plus className="w-8 h-8" />
          </div>
          <p className="text-xl font-bold text-[hsl(var(--color-primary))]">
            {t('fileUploader.dropToUpload')}
          </p>
        </div>
      )}

      {/* Decryption Password Prompt Modal */}
      {encryptCurrentIndex !== -1 && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300 cursor-default"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          {/* Custom shake keyframe injection */}
          <style>{`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              10%, 30%, 50%, 70%, 90% { transform: translateX(-6px); }
              20%, 40%, 60%, 80% { transform: translateX(6px); }
            }
            .modal-shake {
              animation: shake 0.5s ease-in-out;
            }
          `}</style>
          
          <div 
            className={`bg-[hsl(var(--color-card))] border border-white/10 dark:border-zinc-800/40 p-6 rounded-[2rem] max-w-sm w-full shadow-2xl mx-4 transition-all duration-300 transform scale-100 ${
              shouldShake ? 'modal-shake' : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div className="flex flex-col items-center text-center">
              {/* Lock Circle Icon */}
              <div className="p-4 rounded-full bg-red-500/10 text-red-500 mb-4 animate-pulse">
                <Lock className="w-8 h-8" />
              </div>
              
              <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-1">
                {t('fileUploader.encryptedTitle')}
              </h3>
              
              <p className="text-xs text-[hsl(var(--color-muted-foreground))] mb-4 max-w-[280px] break-all leading-relaxed">
                {t('fileUploader.enterPasswordHelp')}
                <span className="font-semibold text-[hsl(var(--color-foreground))]">{encryptPendingFiles[encryptCurrentIndex]?.name}</span>
              </p>
              
              {/* Form */}
              <form 
                onSubmit={handleDecryptSubmit} 
                className="w-full space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder={t('fileUploader.passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    disabled={isDecrypting}
                    className="w-full px-4 py-2.5 rounded-[var(--radius-md)] bg-[hsl(var(--color-muted)/0.4)] border border-[hsl(var(--color-input))] text-sm text-[hsl(var(--color-foreground))] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent transition-all"
                  />
                </div>
                
                {decryptError && (
                  <p className="text-xs text-red-500 font-semibold animate-in fade-in">
                    {decryptError}
                  </p>
                )}
                
                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleDecryptCancel}
                    disabled={isDecrypting}
                    className="flex-1 px-4 py-2 text-xs font-semibold rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-foreground))] transition-colors disabled:opacity-50"
                  >
                    {t('fileUploader.cancelButton')}
                  </button>
                  <button
                    type="submit"
                    disabled={isDecrypting || !password}
                    className="flex-1 px-4 py-2 text-xs font-semibold rounded-[var(--radius-md)] bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-hover))] text-[hsl(var(--color-primary-foreground))] transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDecrypting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        {t('fileUploader.decrypting')}
                      </>
                    ) : (
                      t('fileUploader.decryptAndContinue')
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;

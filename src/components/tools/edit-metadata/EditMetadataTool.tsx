'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { editPDFMetadata, EditableMetadata } from '@/lib/pdf/processors/edit-metadata';
import { configurePdfjsWorker } from '@/lib/pdf/loader';

/**
 * Current PDF metadata for display and editing
 */
interface CurrentMetadata {
  title: string;
  author: string;
  subject: string;
  keywords: string;
  creator: string;
  producer: string;
  creationDate: string;
  modificationDate: string;
}

/**
 * Props for MetadataField component
 */
interface MetadataFieldProps {
  label: string;
  field: keyof CurrentMetadata;
  value: string;
  onChange: (field: keyof CurrentMetadata, value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  disabled?: boolean;
}

/**
 * Metadata input field component - defined outside to prevent re-creation on parent render
 */
function MetadataField({
  label,
  field,
  value,
  onChange,
  placeholder,
  multiline = false,
  disabled = false,
}: MetadataFieldProps) {
  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="space-y-1">
      <label
        htmlFor={`metadata-${field}`}
        className="block text-sm font-medium text-[hsl(var(--color-foreground))]"
      >
        {label}
      </label>
      <InputComponent
        id={`metadata-${field}`}
        type={multiline ? undefined : 'text'}
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] 
          bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]
          placeholder:text-[hsl(var(--color-muted-foreground))]
          focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          ${multiline ? 'min-h-[80px] resize-y' : ''}`}
      />
    </div>
  );
}

/**
 * Props for DateField component
 */
interface DateFieldProps {
  label: string;
  field: keyof CurrentMetadata;
  value: string;
  onChange: (field: keyof CurrentMetadata, value: string) => void;
  disabled?: boolean;
  helpText?: string;
}

/**
 * Date input field component using datetime-local
 */
function DateField({
  label,
  field,
  value,
  onChange,
  disabled = false,
  helpText,
}: DateFieldProps) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={`metadata-${field}`}
        className="block text-sm font-medium text-[hsl(var(--color-foreground))]"
      >
        {label}
      </label>
      <input
        id={`metadata-${field}`}
        type="datetime-local"
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        disabled={disabled}
        className="w-full px-3 py-2 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] 
          bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]
          focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed"
      />
      {helpText && (
        <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
          {helpText}
        </p>
      )}
    </div>
  );
}

/**
 * Parse a PDF date string (D:YYYYMMDDHHmmSS or Date object) to datetime-local format
 */
function parsePdfDateToInputValue(pdfDate: string | Date | undefined): string {
  if (!pdfDate) return '';

  try {
    let date: Date;

    if (typeof pdfDate === 'object' && pdfDate instanceof Date) {
      date = pdfDate;
    } else if (typeof pdfDate === 'string' && pdfDate.startsWith('D:')) {
      // PDF date format: D:YYYYMMDDHHmmSS+TZ
      const year = pdfDate.substring(2, 6);
      const month = pdfDate.substring(6, 8) || '01';
      const day = pdfDate.substring(8, 10) || '01';
      const hour = pdfDate.substring(10, 12) || '00';
      const minute = pdfDate.substring(12, 14) || '00';
      const second = pdfDate.substring(14, 16) || '00';
      date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
    } else {
      date = new Date(pdfDate);
    }

    if (isNaN(date.getTime())) return '';

    // Format as datetime-local value: YYYY-MM-DDTHH:mm
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  } catch {
    return '';
  }
}

export interface EditMetadataToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * EditMetadataTool Component
 * Requirements: 5.1
 * 
 * Provides the UI for editing PDF document metadata including
 * title, author, subject, keywords, creation date, and modification date.
 */
export function EditMetadataTool({ className = '' }: EditMetadataToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [resultFilename, setResultFilename] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  
  // Metadata form state
  const [metadata, setMetadata] = useState<CurrentMetadata>({
    title: '',
    author: '',
    subject: '',
    keywords: '',
    creator: '',
    producer: '',
    creationDate: '',
    modificationDate: '',
  });
  const [originalMetadata, setOriginalMetadata] = useState<CurrentMetadata | null>(null);
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Extract current metadata from PDF
   */
  const extractMetadata = useCallback(async (pdfFile: File) => {
    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);
      
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const metadataResult = await pdf.getMetadata();
      
      const info = metadataResult.info as Record<string, unknown> | null;
      
      const extracted: CurrentMetadata = {
        title: (info?.Title as string) || '',
        author: (info?.Author as string) || '',
        subject: (info?.Subject as string) || '',
        keywords: (info?.Keywords as string) || '',
        creator: (info?.Creator as string) || '',
        producer: (info?.Producer as string) || '',
        creationDate: parsePdfDateToInputValue(info?.CreationDate as string | Date | undefined),
        modificationDate: parsePdfDateToInputValue(info?.ModDate as string | Date | undefined),
      };
      
      setMetadata(extracted);
      setOriginalMetadata(extracted);
    } catch (err) {
      console.error('Failed to extract metadata:', err);
      // Set empty metadata if extraction fails
      const empty: CurrentMetadata = {
        title: '',
        author: '',
        subject: '',
        keywords: '',
        creator: '',
        producer: '',
        creationDate: '',
        modificationDate: '',
      };
      setMetadata(empty);
      setOriginalMetadata(empty);
    }
  }, []);

  /**
   * Handle file selected from uploader
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setResultBlob(null);
      setStatus('idle');
      extractMetadata(selectedFile);
    }
  }, [extractMetadata]);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Clear file and reset state
   */
  const handleClearFile = useCallback(() => {
    setFile(null);
    setMetadata({
      title: '',
      author: '',
      subject: '',
      keywords: '',
      creator: '',
      producer: '',
      creationDate: '',
      modificationDate: '',
    });
    setOriginalMetadata(null);
    setResultBlob(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Handle metadata field change
   */
  const handleMetadataChange = useCallback((field: keyof CurrentMetadata, value: string) => {
    setMetadata(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  /**
   * Reset metadata to original values
   */
  const handleResetMetadata = useCallback(() => {
    if (originalMetadata) {
      setMetadata(originalMetadata);
    }
  }, [originalMetadata]);

  /**
   * Handle progress updates
   */
  const handleProgress = useCallback((prog: number, message?: string) => {
    setProgress(prog);
    if (message) {
      setProgressMessage(message);
    }
  }, []);

  /**
   * Handle cancel operation
   */
  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Process the PDF with updated metadata
   */
  const handleSaveMetadata = useCallback(async () => {
    if (!file) return;

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResultBlob(null);

    try {
      // Convert keywords string to array
      const keywordsArray = metadata.keywords
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0);

      const editableMetadata: EditableMetadata = {
        title: metadata.title,
        author: metadata.author,
        subject: metadata.subject,
        keywords: keywordsArray,
        creator: metadata.creator,
        producer: metadata.producer,
      };

      // Parse and set creation date if provided
      if (metadata.creationDate) {
        const creationDate = new Date(metadata.creationDate);
        if (!isNaN(creationDate.getTime())) {
          editableMetadata.creationDate = creationDate;
        }
      }

      // Parse and set modification date if provided
      if (metadata.modificationDate) {
        const modificationDate = new Date(metadata.modificationDate);
        if (!isNaN(modificationDate.getTime())) {
          editableMetadata.modificationDate = modificationDate;
        }
      }

      // Only auto-update modification date if user hasn't explicitly set one
      const shouldAutoUpdateModDate = !metadata.modificationDate;

      const result = await editPDFMetadata(
        file,
        editableMetadata,
        { updateModificationDate: shouldAutoUpdateModDate },
        handleProgress
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (result.success && result.result) {
        setResultBlob(result.result as Blob);
        setResultFilename(result.filename || 'edited.pdf');
        setStatus('complete');
      } else {
        setError(result.error?.message || 'Failed to edit metadata.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        console.error('Failed to edit metadata:', err);
        setError(err instanceof Error ? err.message : 'Failed to edit metadata.');
        setStatus('error');
      }
    }
  }, [file, metadata, handleProgress]);

  /**
   * Check if metadata has changed
   */
  const hasChanges = originalMetadata && (
    metadata.title !== originalMetadata.title ||
    metadata.author !== originalMetadata.author ||
    metadata.subject !== originalMetadata.subject ||
    metadata.keywords !== originalMetadata.keywords ||
    metadata.creator !== originalMetadata.creator ||
    metadata.producer !== originalMetadata.producer ||
    metadata.creationDate !== originalMetadata.creationDate ||
    metadata.modificationDate !== originalMetadata.modificationDate
  );

  /**
   * Format file size
   */
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('editMetadata.uploadLabel') || 'Upload PDF File'}
          description={tTools('editMetadata.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
        />
      )}

      {/* Error Message */}
      {error && (
        <div 
          className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700"
          role="alert"
        >
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* File Info */}
      {file && (
        <Card variant="outlined">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                <path d="M14 2v6h6" fill="white" />
                <text x="7" y="17" fontSize="6" fill="white" fontWeight="bold">PDF</text>
              </svg>
              <div>
                <p className="font-medium text-[hsl(var(--color-foreground))]">{file.name}</p>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                  {formatSize(file.size)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFile}
              disabled={isProcessing}
            >
              {t('buttons.remove') || 'Remove'}
            </Button>
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

      {/* Metadata Edit Form */}
      {file && !isProcessing && status !== 'complete' && (
        <Card variant="outlined" size="lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
              {tTools('editMetadata.editTitle') || 'Edit Document Properties'}
            </h3>
            {hasChanges && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleResetMetadata}
              >
                {tTools('editMetadata.resetButton') || 'Reset'}
              </Button>
            )}
          </div>
          
          <div className="space-y-4">
            <MetadataField 
              label={tTools('editMetadata.title') || 'Title'} 
              field="title"
              value={metadata.title}
              onChange={handleMetadataChange}
              placeholder={tTools('editMetadata.titlePlaceholder') || 'Enter document title'}
              disabled={isProcessing}
            />
            <MetadataField 
              label={tTools('editMetadata.author') || 'Author'} 
              field="author"
              value={metadata.author}
              onChange={handleMetadataChange}
              placeholder={tTools('editMetadata.authorPlaceholder') || 'Enter author name'}
              disabled={isProcessing}
            />
            <MetadataField 
              label={tTools('editMetadata.subject') || 'Subject'} 
              field="subject"
              value={metadata.subject}
              onChange={handleMetadataChange}
              placeholder={tTools('editMetadata.subjectPlaceholder') || 'Enter document subject'}
              disabled={isProcessing}
            />
            <MetadataField 
              label={tTools('editMetadata.keywords') || 'Keywords'} 
              field="keywords"
              value={metadata.keywords}
              onChange={handleMetadataChange}
              placeholder={tTools('editMetadata.keywordsPlaceholder') || 'Enter keywords separated by commas'}
              disabled={isProcessing}
            />
            <MetadataField 
              label={tTools('editMetadata.creator') || 'Creator Application'} 
              field="creator"
              value={metadata.creator}
              onChange={handleMetadataChange}
              placeholder={tTools('editMetadata.creatorPlaceholder') || 'Enter creator application'}
              disabled={isProcessing}
            />
            <MetadataField 
              label={tTools('editMetadata.producer') || 'PDF Producer'} 
              field="producer"
              value={metadata.producer}
              onChange={handleMetadataChange}
              placeholder={tTools('editMetadata.producerPlaceholder') || 'Enter PDF producer'}
              disabled={isProcessing}
            />
          </div>

          {/* Date Fields Section */}
          <div className="mt-6 pt-4 border-t border-[hsl(var(--color-border))]">
            <h4 className="text-md font-medium text-[hsl(var(--color-foreground))] mb-4">
              {tTools('editMetadata.datesSection') || 'Document Dates'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DateField
                label={tTools('editMetadata.creationDate') || 'Creation Date'}
                field="creationDate"
                value={metadata.creationDate}
                onChange={handleMetadataChange}
                disabled={isProcessing}
                helpText={tTools('editMetadata.creationDateHelp') || 'The date the document was originally created.'}
              />
              <DateField
                label={tTools('editMetadata.modificationDate') || 'Modification Date'}
                field="modificationDate"
                value={metadata.modificationDate}
                onChange={handleMetadataChange}
                disabled={isProcessing}
                helpText={tTools('editMetadata.modificationDateHelp') || 'Leave empty to auto-set to current date/time on save.'}
              />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[hsl(var(--color-border))]">
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">
              {tTools('editMetadata.modificationNote') || 'The modification date will be updated automatically when you save.'}
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleSaveMetadata}
              disabled={!file}
              className="w-full sm:w-auto"
            >
              {tTools('editMetadata.saveButton') || 'Save Metadata'}
            </Button>
          </div>
        </Card>
      )}

      {/* Download Result */}
      {status === 'complete' && resultBlob && (
        <>
          <div className="flex flex-wrap items-center gap-4">
            <DownloadButton
              file={resultBlob}
              filename={resultFilename}
              variant="primary"
              size="lg"
            />
            <Button
              variant="secondary"
              size="lg"
              onClick={handleClearFile}
            >
              {tTools('editMetadata.editAnother') || 'Edit Another PDF'}
            </Button>
          </div>

          {/* Success Message */}
          <div 
            className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
            role="status"
          >
            <p className="text-sm font-medium">
              {tTools('editMetadata.successMessage') || 'Metadata updated successfully! Click the download button to save your file.'}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default EditMetadataTool;

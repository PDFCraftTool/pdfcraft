'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { saveBlobFile } from '@/lib/tauri-bridge';

/**
 * PDF Metadata interface
 */
export interface PDFMetadata {
  // Info Dictionary
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  creator?: string;
  producer?: string;
  creationDate?: string;
  modificationDate?: string;
  
  // Document Info
  pageCount: number;
  pdfVersion?: string;
  isEncrypted: boolean;
  isLinearized?: boolean;
  fileSize: number;
  
  // Additional Info
  customMetadata?: Record<string, string>;
}

export interface ViewMetadataToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * PDF Info Dictionary type from pdfjs-dist
 */
interface PDFInfoDict {
  Title?: string;
  Author?: string;
  Subject?: string;
  Keywords?: string;
  Creator?: string;
  Producer?: string;
  CreationDate?: string;
  ModDate?: string;
  PDFFormatVersion?: string;
  IsAcroFormPresent?: boolean;
  IsLinearized?: boolean;
  [key: string]: unknown;
}

/**
 * Parse PDF date string to readable format
 */
function parsePdfDate(pdfDate: string | Date | undefined): string {
  if (!pdfDate) return '- Not Set -';
  
  // Handle Date objects
  if (typeof pdfDate === 'object' && pdfDate instanceof Date) {
    return pdfDate.toLocaleString();
  }
  
  // Handle PDF date format: D:YYYYMMDDHHmmSS
  if (typeof pdfDate === 'string' && pdfDate.startsWith('D:')) {
    try {
      const year = pdfDate.substring(2, 6);
      const month = pdfDate.substring(6, 8);
      const day = pdfDate.substring(8, 10);
      const hour = pdfDate.substring(10, 12) || '00';
      const minute = pdfDate.substring(12, 14) || '00';
      const second = pdfDate.substring(14, 16) || '00';
      return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}Z`).toLocaleString();
    } catch {
      return String(pdfDate);
    }
  }
  
  return String(pdfDate);
}

/**
 * ViewMetadataTool Component
 * Requirements: 5.1
 * 
 * Provides the UI for viewing PDF document metadata and properties.
 */
export function ViewMetadataTool({ className = '' }: ViewMetadataToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [metadata, setMetadata] = useState<PDFMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Extract metadata from PDF
   */
  const extractMetadata = useCallback(async (pdfFile: File) => {
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setMetadata(null);

    try {
      setProgressMessage('Loading PDF library...');
      setProgress(10);

      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);
      
      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      setProgressMessage('Reading PDF file...');
      setProgress(30);

      const arrayBuffer = await pdfFile.arrayBuffer();
      
      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      setProgressMessage('Extracting metadata...');
      setProgress(50);

      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      
      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      setProgress(70);
      const metadataResult = await pdf.getMetadata();
      
      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      setProgress(90);
      
      // Cast info to our typed interface
      const info = metadataResult.info as PDFInfoDict | null;
      
      // Build metadata object
      const extractedMetadata: PDFMetadata = {
        title: info?.Title || undefined,
        author: info?.Author || undefined,
        subject: info?.Subject || undefined,
        keywords: info?.Keywords || undefined,
        creator: info?.Creator || undefined,
        producer: info?.Producer || undefined,
        creationDate: info?.CreationDate ? parsePdfDate(info.CreationDate) : undefined,
        modificationDate: info?.ModDate ? parsePdfDate(info.ModDate) : undefined,
        pageCount: pdf.numPages,
        pdfVersion: info?.PDFFormatVersion || undefined,
        isEncrypted: !!info?.IsAcroFormPresent || false,
        isLinearized: info?.IsLinearized || false,
        fileSize: pdfFile.size,
        customMetadata: {},
      };

      // Extract any additional custom metadata
      if (info) {
        const standardKeys = ['Title', 'Author', 'Subject', 'Keywords', 'Creator', 'Producer', 'CreationDate', 'ModDate', 'PDFFormatVersion', 'IsAcroFormPresent', 'IsLinearized'];
        for (const key in info) {
          if (!standardKeys.includes(key) && info[key] !== null && info[key] !== undefined) {
            extractedMetadata.customMetadata![key] = String(info[key]);
          }
        }
      }

      setMetadata(extractedMetadata);
      setProgress(100);
      setStatus('complete');
    } catch (err) {
      if (!cancelledRef.current) {
        console.error('Failed to extract metadata:', err);
        setError(err instanceof Error ? err.message : 'Failed to extract metadata from PDF.');
        setStatus('error');
      }
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
      setMetadata(null);
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
    setMetadata(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
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
   * Export metadata as JSON
   */
  const handleExportJson = useCallback(() => {
    if (!metadata || !file) return;
    
    const exportData = {
      filename: file.name,
      ...metadata,
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const filename = file.name.replace(/\.pdf$/i, '_metadata.json');
    saveBlobFile(blob, filename);
  }, [metadata, file]);

  /**
   * Format file size
   */
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  /**
   * Render metadata row
   */
  const MetadataRow = ({ label, value }: { label: string; value: string | number | boolean | undefined }) => {
    const displayValue = value === undefined || value === null || value === '' 
      ? '- Not Set -' 
      : typeof value === 'boolean' 
        ? (value ? 'Yes' : 'No')
        : String(value);
    
    const isNotSet = displayValue === '- Not Set -';
    
    return (
      <div className="flex flex-col sm:flex-row py-2 border-b border-[hsl(var(--color-border)/0.5)] last:border-b-0">
        <span className="w-full sm:w-48 flex-shrink-0 font-medium text-[hsl(var(--color-muted-foreground))]">
          {label}
        </span>
        <span className={`flex-grow ${isNotSet ? 'text-[hsl(var(--color-muted-foreground))] italic' : 'text-[hsl(var(--color-foreground))]'} break-all`}>
          {displayValue}
        </span>
      </div>
    );
  };

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
          label={tTools('viewMetadata.uploadLabel') || 'Upload PDF File'}
          description={tTools('viewMetadata.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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

      {/* Metadata Display */}
      {metadata && status === 'complete' && (
        <>
          {/* Document Properties */}
          <Card variant="outlined" size="lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                {tTools('viewMetadata.documentProperties') || 'Document Properties'}
              </h3>
            </div>
            
            <div className="space-y-1">
              <MetadataRow label={tTools('viewMetadata.title') || 'Title'} value={metadata.title} />
              <MetadataRow label={tTools('viewMetadata.author') || 'Author'} value={metadata.author} />
              <MetadataRow label={tTools('viewMetadata.subject') || 'Subject'} value={metadata.subject} />
              <MetadataRow label={tTools('viewMetadata.keywords') || 'Keywords'} value={metadata.keywords} />
              <MetadataRow label={tTools('viewMetadata.creator') || 'Creator'} value={metadata.creator} />
              <MetadataRow label={tTools('viewMetadata.producer') || 'Producer'} value={metadata.producer} />
            </div>
          </Card>

          {/* Dates */}
          <Card variant="outlined" size="lg">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
              {tTools('viewMetadata.dates') || 'Dates'}
            </h3>
            
            <div className="space-y-1">
              <MetadataRow label={tTools('viewMetadata.creationDate') || 'Creation Date'} value={metadata.creationDate} />
              <MetadataRow label={tTools('viewMetadata.modificationDate') || 'Modification Date'} value={metadata.modificationDate} />
            </div>
          </Card>

          {/* Document Info */}
          <Card variant="outlined" size="lg">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
              {tTools('viewMetadata.documentInfo') || 'Document Information'}
            </h3>
            
            <div className="space-y-1">
              <MetadataRow label={tTools('viewMetadata.pageCount') || 'Page Count'} value={metadata.pageCount} />
              <MetadataRow label={tTools('viewMetadata.fileSize') || 'File Size'} value={formatSize(metadata.fileSize)} />
              <MetadataRow label={tTools('viewMetadata.pdfVersion') || 'PDF Version'} value={metadata.pdfVersion} />
              <MetadataRow label={tTools('viewMetadata.isLinearized') || 'Linearized (Fast Web View)'} value={metadata.isLinearized} />
            </div>
          </Card>

          {/* Custom Metadata */}
          {metadata.customMetadata && Object.keys(metadata.customMetadata).length > 0 && (
            <Card variant="outlined" size="lg">
              <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
                {tTools('viewMetadata.customMetadata') || 'Additional Metadata'}
              </h3>
              
              <div className="space-y-1">
                {Object.entries(metadata.customMetadata).map(([key, value]) => (
                  <MetadataRow key={key} label={key} value={value} />
                ))}
              </div>
            </Card>
          )}

          {/* Export Button */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleExportJson}
            >
              {tTools('viewMetadata.exportJson') || 'Export as JSON'}
            </Button>
          </div>

          {/* Success Message */}
          <div 
            className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
            role="status"
          >
            <p className="text-sm font-medium">
              {tTools('viewMetadata.successMessage') || 'Metadata extracted successfully! You can export it as JSON if needed.'}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewMetadataTool;

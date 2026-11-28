'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { deskewPDF, type DeskewPDFOptions } from '@/lib/pdf/processors/deskew';
import { useBatchProcessing, type BatchFile } from '@/lib/hooks/useBatchProcessing';
import { Trash2, FileArchive, Check, AlertCircle, Loader2, X, ScanLine } from 'lucide-react';

export interface DeskewPDFToolProps {
    /** Custom class name */
    className?: string;
}

/**
 * DeskewPDFTool Component
 * 
 * Provides the UI for automatically straightening scanned or tilted PDF pages.
 * Supports batch processing of multiple files with ZIP download.
 */
export function DeskewPDFTool({ className = '' }: DeskewPDFToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // Options
    const [threshold, setThreshold] = useState<number>(10);
    const [dpi, setDpi] = useState<number>(150);
    const [error, setError] = useState<string | null>(null);

    // Batch processing hook
    const {
        files,
        isProcessing,
        overallProgress,
        completedCount,
        errorCount,
        addFiles,
        removeFile,
        clearFiles,
        startProcessing,
        cancelProcessing,
        downloadAsZip,
    } = useBatchProcessing({
        maxConcurrent: 2,
    });

    /**
     * Handle files selected from uploader
     */
    const handleFilesSelected = useCallback((newFiles: File[]) => {
        if (newFiles.length > 0) {
            addFiles(newFiles);
            setError(null);
        }
    }, [addFiles]);

    /**
     * Handle file upload error
     */
    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    /**
     * Deskew processor for batch processing
     */
    const deskewProcessor = useCallback(async (
        file: File,
        onProgress: (progress: number) => void
    ): Promise<Blob> => {
        const options: DeskewPDFOptions = {
            threshold,
            dpi,
        };

        const output = await deskewPDF(
            file,
            options,
            (prog) => onProgress(prog)
        );

        if (output.success && output.result) {
            return output.result as Blob;
        }

        throw new Error(output.error?.message || 'Failed to deskew PDF file.');
    }, [threshold, dpi]);

    /**
     * Handle deskew operation
     */
    const handleDeskew = useCallback(async () => {
        if (files.length === 0) {
            setError('Please select PDF files to deskew.');
            return;
        }
        setError(null);
        await startProcessing(deskewProcessor);
    }, [files.length, startProcessing, deskewProcessor]);

    /**
     * Handle download as ZIP
     */
    const handleDownloadZip = useCallback(async () => {
        await downloadAsZip('deskewed-pdfs.zip');
    }, [downloadAsZip]);

    /**
     * Format file size
     */
    const formatSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    /**
     * Get status icon for a file
     */
    const getStatusIcon = (status: BatchFile['status']) => {
        switch (status) {
            case 'pending':
                return <div className="w-4 h-4 rounded-full bg-gray-300" />;
            case 'processing':
                return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
            case 'completed':
                return <Check className="w-4 h-4 text-green-500" />;
            case 'error':
                return <AlertCircle className="w-4 h-4 text-red-500" />;
        }
    };

    const hasFiles = files.length > 0;
    const canProcess = hasFiles && !isProcessing;
    const hasCompletedFiles = completedCount > 0;
    const allCompleted = hasFiles && completedCount === files.length;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* File Upload Area */}
            <FileUploader
                accept={['application/pdf', '.pdf']}
                multiple={true}
                maxFiles={10}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('deskewPdf.uploadLabel') || 'Upload Scanned PDF Files'}
                description={tTools('deskewPdf.uploadDescription') || 'Drag and drop PDF files here. You can process up to 10 files at once.'}
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

            {/* File List */}
            {hasFiles && (
                <Card variant="outlined" size="lg">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                            {tTools('deskewPdf.filesTitle') || 'Files to Deskew'} ({files.length})
                        </h3>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearFiles}
                            disabled={isProcessing}
                        >
                            <Trash2 className="w-4 h-4 mr-1" />
                            {t('buttons.clearAll') || 'Clear All'}
                        </Button>
                    </div>

                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        {files.map((batchFile) => (
                            <div
                                key={batchFile.id}
                                className="flex items-center justify-between p-3 bg-[hsl(var(--color-muted)/0.3)] rounded-[var(--radius-md)]"
                            >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    {getStatusIcon(batchFile.status)}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-[hsl(var(--color-foreground))] truncate">
                                            {batchFile.file.name}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                                                {formatSize(batchFile.file.size)}
                                            </span>
                                            {batchFile.status === 'processing' && (
                                                <span className="text-xs text-blue-500">
                                                    {batchFile.progress}%
                                                </span>
                                            )}
                                            {batchFile.status === 'completed' && batchFile.result && (
                                                <span className="text-xs text-green-500">
                                                    ✓ Deskewed
                                                </span>
                                            )}
                                            {batchFile.status === 'error' && (
                                                <span className="text-xs text-red-500">
                                                    {batchFile.error}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Individual download for completed files */}
                                {batchFile.status === 'completed' && batchFile.result && (
                                    <DownloadButton
                                        file={batchFile.result}
                                        filename={`${batchFile.file.name.replace(/\.pdf$/i, '')}_deskewed.pdf`}
                                        variant="ghost"
                                        size="sm"
                                    />
                                )}

                                {/* Remove button for pending files */}
                                {batchFile.status === 'pending' && !isProcessing && (
                                    <button
                                        onClick={() => removeFile(batchFile.id)}
                                        className="p-1 text-[hsl(var(--color-muted-foreground))] hover:text-red-500 transition-colors"
                                        aria-label="Remove file"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            )}

            {/* Deskew Options */}
            {hasFiles && (
                <Card variant="outlined">
                    <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
                        {tTools('deskewPdf.optionsTitle') || 'Deskew Options'}
                    </h3>

                    <div className="space-y-4">
                        {/* Threshold Setting */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('deskewPdf.thresholdLabel') || 'Sensitivity Level'}: {threshold}
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={threshold}
                                onChange={(e) => setThreshold(Number(e.target.value))}
                                disabled={isProcessing}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[hsl(var(--color-muted))]"
                            />
                            <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                                {tTools('deskewPdf.thresholdDesc') || 'Higher values detect more subtle skew angles. Lower values only correct obvious tilts. Default: 10'}
                            </p>
                        </div>

                        {/* DPI Setting */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('deskewPdf.dpiLabel') || 'Analysis DPI'}: {dpi}
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[72, 150, 300].map((d) => (
                                    <button
                                        key={d}
                                        type="button"
                                        onClick={() => setDpi(d)}
                                        disabled={isProcessing}
                                        className={`
                      px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium
                      transition-colors duration-200
                      ${dpi === d
                                                ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]'
                                                : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                            }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                                    >
                                        {d} DPI
                                    </button>
                                ))}
                            </div>
                            <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                                {tTools('deskewPdf.dpiDesc') || 'Higher DPI provides more accurate detection but takes longer.'}
                            </p>
                        </div>
                    </div>
                </Card>
            )}

            {/* Processing Progress */}
            {isProcessing && (
                <ProcessingProgress
                    progress={overallProgress}
                    status="processing"
                    message={`Deskewing ${completedCount + 1}/${files.length}...`}
                    onCancel={cancelProcessing}
                    showPercentage
                />
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleDeskew}
                    disabled={!canProcess}
                    loading={isProcessing}
                >
                    <ScanLine className="w-4 h-4 mr-2" />
                    {isProcessing
                        ? (t('status.processing') || 'Processing...')
                        : (tTools('deskewPdf.processButton') || 'Deskew PDFs')
                    }
                </Button>

                {hasCompletedFiles && (
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={handleDownloadZip}
                        disabled={isProcessing}
                    >
                        <FileArchive className="w-4 h-4 mr-2" />
                        {tTools('deskewPdf.downloadAllZip') || 'Download All as ZIP'}
                    </Button>
                )}
            </div>

            {/* Batch Completion Status */}
            {allCompleted && (
                <div
                    className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
                    role="status"
                >
                    <p className="text-sm font-medium">
                        {tTools('deskewPdf.successMessage') || `Successfully deskewed ${completedCount} PDF file(s)!`}
                    </p>
                    {errorCount > 0 && (
                        <p className="text-sm text-red-600 mt-1">
                            {errorCount} file(s) failed to process.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default DeskewPDFTool;

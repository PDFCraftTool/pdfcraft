'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { fontToOutline, type FontToOutlineOptions } from '@/lib/pdf/processors/font-to-outline';
import { useBatchProcessing, type BatchFile } from '@/lib/hooks/useBatchProcessing';
import { Trash2, FileArchive, Check, AlertCircle, Loader2, X, Type } from 'lucide-react';

export interface FontToOutlineToolProps {
    className?: string;
}

export function FontToOutlineTool({ className = '' }: FontToOutlineToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    const [dpi, setDpi] = useState(300);
    const [preserveSelectableText, setPreserveSelectableText] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
    } = useBatchProcessing({ maxConcurrent: 2 });

    const handleFilesSelected = useCallback((newFiles: File[]) => {
        if (newFiles.length > 0) {
            addFiles(newFiles);
            setError(null);
        }
    }, [addFiles]);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    const processor = useCallback(async (file: File, onProgress: (progress: number) => void): Promise<Blob> => {
        const options: FontToOutlineOptions = { dpi, preserveSelectableText };
        const output = await fontToOutline(file, options, (prog) => onProgress(prog));
        if (output.success && output.result) return output.result as Blob;
        throw new Error(output.error?.message || 'Failed to convert fonts to outlines.');
    }, [dpi, preserveSelectableText]);

    const handleConvert = useCallback(async () => {
        if (files.length === 0) {
            setError('Please select PDF files.');
            return;
        }
        setError(null);
        await startProcessing(processor);
    }, [files.length, startProcessing, processor]);

    const handleDownloadZip = useCallback(async () => {
        await downloadAsZip('outlined-pdfs.zip');
    }, [downloadAsZip]);

    const formatSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const getStatusIcon = (status: BatchFile['status']) => {
        switch (status) {
            case 'pending': return <div className="w-4 h-4 rounded-full bg-gray-300" />;
            case 'processing': return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
            case 'completed': return <Check className="w-4 h-4 text-green-500" />;
            case 'error': return <AlertCircle className="w-4 h-4 text-red-500" />;
        }
    };

    const hasFiles = files.length > 0;
    const canProcess = hasFiles && !isProcessing;
    const hasCompletedFiles = completedCount > 0;
    const allCompleted = hasFiles && completedCount === files.length;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            <FileUploader
                accept={['application/pdf', '.pdf']}
                multiple={true}
                maxFiles={10}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('fontToOutline.uploadLabel') || 'Upload PDF Files'}
                description={tTools('fontToOutline.uploadDescription') || 'Drag and drop PDF files to convert fonts to outlines.'}
            />

            {error && (
                <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700" role="alert">
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {hasFiles && (
                <Card variant="outlined" size="lg">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                            {tTools('fontToOutline.filesTitle') || 'Files'} ({files.length})
                        </h3>
                        <Button variant="ghost" size="sm" onClick={clearFiles} disabled={isProcessing}>
                            <Trash2 className="w-4 h-4 mr-1" />
                            {t('buttons.clearAll') || 'Clear All'}
                        </Button>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        {files.map((batchFile) => (
                            <div key={batchFile.id} className="flex items-center justify-between p-3 bg-[hsl(var(--color-muted)/0.3)] rounded-[var(--radius-md)]">
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                    {getStatusIcon(batchFile.status)}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-[hsl(var(--color-foreground))] truncate">{batchFile.file.name}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-[hsl(var(--color-muted-foreground))]">{formatSize(batchFile.file.size)}</span>
                                            {batchFile.status === 'processing' && <span className="text-xs text-blue-500">{batchFile.progress}%</span>}
                                            {batchFile.status === 'completed' && <span className="text-xs text-green-500">✓ Outlined</span>}
                                            {batchFile.status === 'error' && <span className="text-xs text-red-500">{batchFile.error}</span>}
                                        </div>
                                    </div>
                                </div>
                                {batchFile.status === 'completed' && batchFile.result && (
                                    <DownloadButton file={batchFile.result} filename={`${batchFile.file.name.replace(/\.pdf$/i, '')}_outlined.pdf`} variant="ghost" size="sm" />
                                )}
                                {batchFile.status === 'pending' && !isProcessing && (
                                    <button onClick={() => removeFile(batchFile.id)} className="p-1 text-[hsl(var(--color-muted-foreground))] hover:text-red-500 transition-colors">
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            )}

            {hasFiles && (
                <Card variant="outlined">
                    <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
                        {tTools('fontToOutline.optionsTitle') || 'Conversion Options'}
                    </h3>
                    <div className="space-y-4">
                        {/* DPI Setting */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('fontToOutline.dpiLabel') || 'Output Quality (DPI)'}: {dpi}
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[150, 300, 600].map((d) => (
                                    <button
                                        key={d}
                                        type="button"
                                        onClick={() => setDpi(d)}
                                        disabled={isProcessing}
                                        className={`px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium transition-colors duration-200
                        ${dpi === d ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]' : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'}
                        disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {d} DPI
                                    </button>
                                ))}
                            </div>
                            <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                                {tTools('fontToOutline.dpiDesc') || 'Higher DPI produces better quality but larger files. 300 DPI recommended for print.'}
                            </p>
                        </div>

                        {/* Preserve Text Option */}
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={preserveSelectableText}
                                onChange={(e) => setPreserveSelectableText(e.target.checked)}
                                disabled={isProcessing}
                                className="w-4 h-4 rounded"
                            />
                            <div className="flex-1">
                                <span className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                                    {tTools('fontToOutline.preserveTextLabel') || 'Preserve searchable text (experimental)'}
                                </span>
                                <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-0.5">
                                    {tTools('fontToOutline.preserveTextDesc') || 'Adds invisible text layer for search. May increase file size.'}
                                </p>
                            </div>
                        </label>
                    </div>
                </Card>
            )}

            {isProcessing && (
                <ProcessingProgress progress={overallProgress} status="processing" message={`Processing ${completedCount + 1}/${files.length}...`} onCancel={cancelProcessing} showPercentage />
            )}

            <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" onClick={handleConvert} disabled={!canProcess} loading={isProcessing}>
                    <Type className="w-4 h-4 mr-2" />
                    {isProcessing ? (t('status.processing') || 'Processing...') : (tTools('fontToOutline.convertButton') || 'Convert Fonts to Outlines')}
                </Button>
                {hasCompletedFiles && (
                    <Button variant="secondary" size="lg" onClick={handleDownloadZip} disabled={isProcessing}>
                        <FileArchive className="w-4 h-4 mr-2" />
                        {tTools('fontToOutline.downloadAllZip') || 'Download All as ZIP'}
                    </Button>
                )}
            </div>

            {allCompleted && (
                <div className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700" role="status">
                    <p className="text-sm font-medium">{tTools('fontToOutline.successMessage') || `Successfully converted ${completedCount} file(s)!`}</p>
                    {errorCount > 0 && <p className="text-sm text-red-600 mt-1">{errorCount} file(s) failed.</p>}
                </div>
            )}
        </div>
    );
}

export default FontToOutlineTool;

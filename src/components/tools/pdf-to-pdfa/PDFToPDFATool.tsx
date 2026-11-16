'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { pdfToPdfA, type PdfToPdfAOptions, type PdfALevel, PDFA_LEVEL_INFO } from '@/lib/pdf/processors/pdf-to-pdfa';
import { useBatchProcessing, type BatchFile } from '@/lib/hooks/useBatchProcessing';
import { Trash2, FileArchive, Check, AlertCircle, Loader2, X, Archive } from 'lucide-react';

export interface PDFToPDFAToolProps {
    /** Custom class name */
    className?: string;
}

/**
 * PDFToPDFATool Component
 * 
 * Converts PDF files to PDF/A archival format.
 */
export function PDFToPDFATool({ className = '' }: PDFToPDFAToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // Options
    const [level, setLevel] = useState<PdfALevel>('2b');
    const [embedFonts, setEmbedFonts] = useState(true);
    const [flattenTransparency, setFlattenTransparency] = useState(true);
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

    const handleFilesSelected = useCallback((newFiles: File[]) => {
        if (newFiles.length > 0) {
            addFiles(newFiles);
            setError(null);
        }
    }, [addFiles]);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    const pdfaProcessor = useCallback(async (
        file: File,
        onProgress: (progress: number) => void
    ): Promise<Blob> => {
        const options: PdfToPdfAOptions = {
            level,
            embedFonts,
            flattenTransparency,
        };

        const output = await pdfToPdfA(file, options, (prog) => onProgress(prog));

        if (output.success && output.result) {
            return output.result as Blob;
        }

        throw new Error(output.error?.message || 'Failed to convert to PDF/A.');
    }, [level, embedFonts, flattenTransparency]);

    const handleConvert = useCallback(async () => {
        if (files.length === 0) {
            setError('Please select PDF files to convert.');
            return;
        }
        setError(null);
        await startProcessing(pdfaProcessor);
    }, [files.length, startProcessing, pdfaProcessor]);

    const handleDownloadZip = useCallback(async () => {
        await downloadAsZip('pdfa-files.zip');
    }, [downloadAsZip]);

    const formatSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

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
            <FileUploader
                accept={['application/pdf', '.pdf']}
                multiple={true}
                maxFiles={10}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('pdfToPdfa.uploadLabel') || 'Upload PDF Files'}
                description={tTools('pdfToPdfa.uploadDescription') || 'Drag and drop PDF files to convert to PDF/A format.'}
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
                            {tTools('pdfToPdfa.filesTitle') || 'Files to Convert'} ({files.length})
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
                                            {batchFile.status === 'completed' && <span className="text-xs text-green-500">✓ PDF/A</span>}
                                            {batchFile.status === 'error' && <span className="text-xs text-red-500">{batchFile.error}</span>}
                                        </div>
                                    </div>
                                </div>
                                {batchFile.status === 'completed' && batchFile.result && (
                                    <DownloadButton file={batchFile.result} filename={`${batchFile.file.name.replace(/\.pdf$/i, '')}_pdfa.pdf`} variant="ghost" size="sm" />
                                )}
                                {batchFile.status === 'pending' && !isProcessing && (
                                    <button onClick={() => removeFile(batchFile.id)} className="p-1 text-[hsl(var(--color-muted-foreground))] hover:text-red-500 transition-colors" aria-label="Remove file">
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
                        {tTools('pdfToPdfa.optionsTitle') || 'PDF/A Options'}
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('pdfToPdfa.levelLabel') || 'PDF/A Level'}
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {(Object.keys(PDFA_LEVEL_INFO) as PdfALevel[]).map((lvl) => (
                                    <button
                                        key={lvl}
                                        type="button"
                                        onClick={() => setLevel(lvl)}
                                        disabled={isProcessing}
                                        className={`px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium transition-colors duration-200
                      ${level === lvl
                                                ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]'
                                                : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'}
                      disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        PDF/A-{lvl.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-2 text-xs text-[hsl(var(--color-muted-foreground))]">
                                {PDFA_LEVEL_INFO[level].description}
                            </p>
                        </div>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={embedFonts}
                                onChange={(e) => setEmbedFonts(e.target.checked)}
                                disabled={isProcessing}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-sm text-[hsl(var(--color-foreground))]">
                                {tTools('pdfToPdfa.embedFontsLabel') || 'Embed all fonts'}
                            </span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={flattenTransparency}
                                onChange={(e) => setFlattenTransparency(e.target.checked)}
                                disabled={isProcessing}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-sm text-[hsl(var(--color-foreground))]">
                                {tTools('pdfToPdfa.flattenTransparencyLabel') || 'Flatten transparency (required for PDF/A-1b)'}
                            </span>
                        </label>
                    </div>
                </Card>
            )}

            {isProcessing && (
                <ProcessingProgress
                    progress={overallProgress}
                    status="processing"
                    message={`Converting ${completedCount + 1}/${files.length}...`}
                    onCancel={cancelProcessing}
                    showPercentage
                />
            )}

            <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" onClick={handleConvert} disabled={!canProcess} loading={isProcessing}>
                    <Archive className="w-4 h-4 mr-2" />
                    {isProcessing ? (t('status.processing') || 'Processing...') : (tTools('pdfToPdfa.convertButton') || 'Convert to PDF/A')}
                </Button>

                {hasCompletedFiles && (
                    <Button variant="secondary" size="lg" onClick={handleDownloadZip} disabled={isProcessing}>
                        <FileArchive className="w-4 h-4 mr-2" />
                        {tTools('pdfToPdfa.downloadAllZip') || 'Download All as ZIP'}
                    </Button>
                )}
            </div>

            {allCompleted && (
                <div className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700" role="status">
                    <p className="text-sm font-medium">
                        {tTools('pdfToPdfa.successMessage') || `Successfully converted ${completedCount} file(s) to PDF/A!`}
                    </p>
                    {errorCount > 0 && <p className="text-sm text-red-600 mt-1">{errorCount} file(s) failed.</p>}
                </div>
            )}
        </div>
    );
}

export default PDFToPDFATool;

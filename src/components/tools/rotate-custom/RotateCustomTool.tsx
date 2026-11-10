'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { rotateCustom } from '@/lib/pdf/processors/rotate-custom-processor';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import type { ProcessOutput } from '@/types/pdf';

export interface RotateCustomToolProps {
    /** Custom class name */
    className?: string;
}

interface PagePreview {
    pageNumber: number;
    thumbnail?: string;
    rotation: number;
}

/**
 * RotateCustomTool Component
 * 
 * Provides the UI for rotating PDF pages by arbitrary degrees.
 */
export function RotateCustomTool({ className = '' }: RotateCustomToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // State
    const [file, setFile] = useState<File | null>(null);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [result, setResult] = useState<Blob | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [batchAngle, setBatchAngle] = useState<string>('0');

    // Page previews and rotations
    const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
    const [isLoadingPreviews, setIsLoadingPreviews] = useState(false);

    // Ref for cancellation
    const cancelledRef = useRef(false);

    /**
     * Load PDF and generate page previews
     */
    const loadPdfPreviews = useCallback(async (pdfFile: File) => {
        setIsLoadingPreviews(true);
        setPagePreviews([]);

        try {
            const pdfjsLib = await import('pdfjs-dist');
            configurePdfjsWorker(pdfjsLib);

            const arrayBuffer = await pdfFile.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

            setTotalPages(pdf.numPages);

            // Generate thumbnails for each page
            const previews: PagePreview[] = [];
            const maxPreviewPages = Math.min(pdf.numPages, 50);

            for (let i = 1; i <= maxPreviewPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: 0.15 });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                if (context) {
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                    }).promise;

                    previews.push({
                        pageNumber: i,
                        thumbnail: canvas.toDataURL('image/jpeg', 0.6),
                        rotation: 0,
                    });
                }
            }

            // Add remaining pages without thumbnails
            for (let i = maxPreviewPages + 1; i <= pdf.numPages; i++) {
                previews.push({ pageNumber: i, rotation: 0 });
            }

            setPagePreviews(previews);
        } catch (err) {
            console.error('Failed to load PDF previews:', err);
            setError(t('errors.fileCorrupted') || 'Failed to load PDF preview.');
        } finally {
            setIsLoadingPreviews(false);
        }
    }, [t]);

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);
            setError(null);
            setResult(null);
            loadPdfPreviews(selectedFile);
        }
    }, [loadPdfPreviews]);

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
        setTotalPages(0);
        setPagePreviews([]);
        setResult(null);
        setError(null);
        setStatus('idle');
        setProgress(0);
        setBatchAngle('0');
    }, []);

    /**
     * Update page rotation
     */
    const updatePageRotation = useCallback((pageNumber: number, angle: number) => {
        setPagePreviews(prev => prev.map(p =>
            p.pageNumber === pageNumber
                ? { ...p, rotation: angle }
                : p
        ));
        setResult(null);
    }, []);

    /**
     * Increment/decrement page rotation
     */
    const adjustPageRotation = useCallback((pageNumber: number, amount: number) => {
        setPagePreviews(prev => prev.map(p => {
            if (p.pageNumber === pageNumber) {
                return { ...p, rotation: p.rotation + amount };
            }
            return p;
        }));
        setResult(null);
    }, []);

    /**
     * Apply batch rotation
     */
    const handleBatchApply = useCallback(() => {
        const angle = parseFloat(batchAngle) || 0;
        setPagePreviews(prev => prev.map(p => ({
            ...p,
            rotation: angle,
        })));
        setResult(null);
    }, [batchAngle]);

    /**
     * Reset all rotations
     */
    const handleResetAll = useCallback(() => {
        setPagePreviews(prev => prev.map(p => ({ ...p, rotation: 0 })));
        setBatchAngle('0');
        setResult(null);
    }, []);

    /**
     * Handle rotate operation
     */
    const handleRotate = useCallback(async () => {
        if (!file) {
            setError(t('errors.uploadFile') || 'Please upload a PDF file.');
            return;
        }

        // Check if any pages have rotation
        const hasRotations = pagePreviews.some(p => p.rotation !== 0);
        if (!hasRotations) {
            setError('Please rotate at least one page before processing.');
            return;
        }

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);

        // Build rotations map (0-indexed for processor)
        const rotations: Record<number, number> = {};
        pagePreviews.forEach(p => {
            if (p.rotation !== 0) {
                rotations[p.pageNumber - 1] = p.rotation;
            }
        });

        try {
            const output: ProcessOutput = await rotateCustom(
                file,
                { rotations },
                (prog) => {
                    if (!cancelledRef.current) {
                        setProgress(prog);
                        setProgressMessage(t('status.processing') || 'Processing...');
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
                setError(output.error?.message || t('errors.processingFailed') || 'Failed to rotate PDF.');
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                setError(err instanceof Error ? err.message : t('errors.unknown') || 'An unexpected error occurred.');
                setStatus('error');
            }
        }
    }, [file, pagePreviews, t]);

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
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const isProcessing = status === 'processing' || status === 'uploading';
    const hasRotations = pagePreviews.some(p => p.rotation !== 0);
    const canRotate = file && totalPages > 0 && hasRotations && !isProcessing;
    const rotatedCount = pagePreviews.filter(p => p.rotation !== 0).length;

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
                    label={tTools('rotateCustom.uploadLabel') || t('buttons.upload')}
                    description={tTools('rotateCustom.uploadDescription')}
                />
            )}

            {/* Error Message */}
            {error && (
                <div
                    className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700 animate-in fade-in slide-in-from-top-2"
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
                                    {formatSize(file.size)} • {totalPages} {totalPages === 1 ? 'page' : 'pages'}
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

            {/* Rotation Controls */}
            {file && totalPages > 0 && (
                <Card variant="outlined" size="lg">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[hsl(var(--color-border))]">
                        <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))]">
                            Custom Rotation
                            {rotatedCount > 0 && (
                                <span className="ml-2 text-[hsl(var(--color-primary))] text-sm">
                                    ({rotatedCount} page{rotatedCount !== 1 ? 's' : ''} set)
                                </span>
                            )}
                        </h3>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-[hsl(var(--color-muted-foreground))]">Set all pages to:</span>
                            <div className="flex items-center">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-9 w-9 rounded-r-none border-r-0"
                                    onClick={() => setBatchAngle((prev) => (parseFloat(prev) - 1).toString())}
                                >
                                    -
                                </Button>
                                <input
                                    type="number"
                                    className="h-9 w-16 text-center border-y border-[hsl(var(--color-input))] bg-[hsl(var(--color-background))] text-sm"
                                    value={batchAngle}
                                    onChange={(e) => setBatchAngle(e.target.value)}
                                />
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-9 w-9 rounded-l-none border-l-0"
                                    onClick={() => setBatchAngle((prev) => (parseFloat(prev) + 1).toString())}
                                >
                                    +
                                </Button>
                            </div>
                            <Button variant="secondary" size="sm" onClick={handleBatchApply}>
                                Apply to All
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleResetAll} disabled={!hasRotations}>
                                {t('buttons.reset') || 'Reset'}
                            </Button>
                        </div>
                    </div>

                    {isLoadingPreviews ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-8 h-8 border-2 border-[hsl(var(--color-primary))] border-t-transparent rounded-full animate-spin" />
                                <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                    {t('status.loading') || 'Loading previews...'}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 max-h-[500px] overflow-y-auto p-1">
                            {pagePreviews.map((preview) => (
                                <div
                                    key={preview.pageNumber}
                                    className="bg-[hsl(var(--color-card))] rounded-lg border border-[hsl(var(--color-border))] overflow-hidden flex flex-col"
                                >
                                    <div className="relative aspect-[3/4] bg-[hsl(var(--color-muted))] overflow-hidden flex items-center justify-center p-2">
                                        <div
                                            className="w-full h-full flex items-center justify-center transition-transform duration-300 origin-center"
                                            style={{ transform: `rotate(${preview.rotation}deg)` }}
                                        >
                                            {preview.thumbnail ? (
                                                <img
                                                    src={preview.thumbnail}
                                                    alt={`Page ${preview.pageNumber}`}
                                                    className="max-w-full max-h-full object-contain shadow-sm"
                                                />
                                            ) : (
                                                <span className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                                    {preview.pageNumber}
                                                </span>
                                            )}
                                        </div>
                                        <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                                            {preview.pageNumber}
                                        </div>
                                    </div>

                                    {/* Per-page rotation controls */}
                                    <div className="p-2 flex items-center justify-center gap-1 border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)]">
                                        <button
                                            type="button"
                                            onClick={() => adjustPageRotation(preview.pageNumber, -1)}
                                            className="w-6 h-6 flex items-center justify-center rounded hover:bg-[hsl(var(--color-muted))]"
                                        >
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            className="w-12 h-6 text-center text-xs bg-transparent border border-[hsl(var(--color-input))] rounded"
                                            value={preview.rotation}
                                            onChange={(e) => updatePageRotation(preview.pageNumber, parseFloat(e.target.value) || 0)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => adjustPageRotation(preview.pageNumber, 1)}
                                            className="w-6 h-6 flex items-center justify-center rounded hover:bg-[hsl(var(--color-muted))]"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
            {file && (
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={handleRotate}
                        disabled={!canRotate}
                        loading={isProcessing}
                        className="min-w-[200px]"
                    >
                        {isProcessing
                            ? (t('status.processing') || 'Processing...')
                            : 'Rotate PDF'
                        }
                    </Button>

                    {result && (
                        <DownloadButton
                            file={result}
                            filename={file.name.replace(/\.pdf$/i, '_custom_rotated.pdf')}
                            variant="secondary"
                            size="lg"
                            showFileSize
                        />
                    )}
                </div>
            )}

            {/* Success Message */}
            {status === 'complete' && result && (
                <div
                    className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700 text-center animate-in fade-in"
                    role="status"
                >
                    <p className="text-sm font-medium">
                        Rotation completed successfully! Click the download button to save your file.
                    </p>
                </div>
            )}
        </div>
    );
}

export default RotateCustomTool;

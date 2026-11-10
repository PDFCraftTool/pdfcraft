'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createBooklet, type BookletPDFOptions, type BookletGridMode, type BookletPaperSize, type BookletRotation } from '@/lib/pdf/processors/booklet';
import { BookOpen } from 'lucide-react';

export interface PDFBookletToolProps {
    /** Custom class name */
    className?: string;
}

/**
 * PDFBookletTool Component
 * 
 * Creates booklet layouts from PDF files for printing.
 */
export function PDFBookletTool({ className = '' }: PDFBookletToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // State
    const [file, setFile] = useState<File | null>(null);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // Options
    const [gridMode, setGridMode] = useState<BookletGridMode>('1x2');
    const [paperSize, setPaperSize] = useState<BookletPaperSize>('a4');
    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
    const [rotation, setRotation] = useState<BookletRotation>('none');
    const [padding, setPadding] = useState(20);

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setResultBlob(null);
            setError(null);
        }
    }, []);

    /**
     * Handle file upload error
     */
    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    /**
     * Handle booklet creation
     */
    const handleCreateBooklet = useCallback(async () => {
        if (!file) {
            setError('Please select a PDF file.');
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        setError(null);

        try {
            const options: BookletPDFOptions = {
                gridMode,
                paperSize,
                orientation,
                rotation,
                padding,
            };

            const output = await createBooklet(
                file,
                options,
                (prog) => setProgress(prog)
            );

            if (output.success && output.result) {
                setResultBlob(output.result as Blob);
            } else {
                setError(output.error?.message || 'Failed to create booklet.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred.');
        } finally {
            setIsProcessing(false);
        }
    }, [file, gridMode, paperSize, orientation, rotation, padding]);

    /**
     * Reset state
     */
    const handleReset = useCallback(() => {
        setFile(null);
        setResultBlob(null);
        setError(null);
        setProgress(0);
    }, []);

    const hasFile = file !== null;
    const canProcess = hasFile && !isProcessing;

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
                label={tTools('pdfBooklet.uploadLabel') || 'Upload PDF File'}
                description={tTools('pdfBooklet.uploadDescription') || 'Drag and drop a PDF file to create a booklet layout.'}
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

            {/* File Info */}
            {hasFile && (
                <Card variant="outlined">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-[hsl(var(--color-foreground))]">{file.name}</p>
                            <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>
                            {t('buttons.clear') || 'Clear'}
                        </Button>
                    </div>
                </Card>
            )}

            {/* Booklet Options */}
            {hasFile && (
                <Card variant="outlined">
                    <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] mb-4">
                        {tTools('pdfBooklet.optionsTitle') || 'Booklet Options'}
                    </h3>

                    <div className="space-y-4">
                        {/* Grid Mode */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('pdfBooklet.gridModeLabel') || 'Grid Mode'}
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {(['1x2', '2x2', '2x4', '4x4'] as BookletGridMode[]).map((mode) => (
                                    <button
                                        key={mode}
                                        type="button"
                                        onClick={() => setGridMode(mode)}
                                        disabled={isProcessing}
                                        className={`
                      px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium
                      transition-colors duration-200
                      ${gridMode === mode
                                                ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]'
                                                : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                            }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                                    >
                                        {mode}
                                    </button>
                                ))}
                            </div>
                            <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                                {tTools('pdfBooklet.gridModeDesc') || '1x2 is standard for booklets. Use larger grids to save paper.'}
                            </p>
                        </div>

                        {/* Paper Size */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('pdfBooklet.paperSizeLabel') || 'Paper Size'}
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {(['a4', 'letter', 'legal'] as BookletPaperSize[]).map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setPaperSize(size)}
                                        disabled={isProcessing}
                                        className={`
                      px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium uppercase
                      transition-colors duration-200
                      ${paperSize === size
                                                ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]'
                                                : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                            }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Orientation */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('pdfBooklet.orientationLabel') || 'Orientation'}
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                                {(['portrait', 'landscape'] as const).map((orient) => (
                                    <button
                                        key={orient}
                                        type="button"
                                        onClick={() => setOrientation(orient)}
                                        disabled={isProcessing}
                                        className={`
                      px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium capitalize
                      transition-colors duration-200
                      ${orientation === orient
                                                ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]'
                                                : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                            }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                                    >
                                        {orient}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Rotation */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('pdfBooklet.rotationLabel') || 'Page Rotation'}
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {(['none', '90cw', '90ccw', 'alternate'] as BookletRotation[]).map((rot) => (
                                    <button
                                        key={rot}
                                        type="button"
                                        onClick={() => setRotation(rot)}
                                        disabled={isProcessing}
                                        className={`
                      px-4 py-2 rounded-[var(--radius-md)] border text-sm font-medium
                      transition-colors duration-200
                      ${rotation === rot
                                                ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))]'
                                                : 'border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-muted)/0.5)]'
                                            }
                      disabled:opacity-50 disabled:cursor-not-allowed
                    `}
                                    >
                                        {rot === 'none' && 'None'}
                                        {rot === '90cw' && '90° CW'}
                                        {rot === '90ccw' && '90° CCW'}
                                        {rot === 'alternate' && 'Alternate'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Padding */}
                        <div>
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-2">
                                {tTools('pdfBooklet.paddingLabel') || 'Padding'}: {padding}pt
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={padding}
                                onChange={(e) => setPadding(Number(e.target.value))}
                                disabled={isProcessing}
                                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[hsl(var(--color-muted))]"
                            />
                        </div>

                        {/* Live Preview */}
                        <div className="pt-4 border-t border-[hsl(var(--color-border))]">
                            <label className="block text-sm font-medium text-[hsl(var(--color-foreground))] mb-3">
                                {tTools('pdfBooklet.previewLabel') || 'Layout Preview'}
                            </label>
                            <div
                                className="relative bg-gray-100 rounded-[var(--radius-md)] p-4 flex items-center justify-center"
                                style={{ minHeight: '200px' }}
                            >
                                {/* Preview Paper */}
                                <div
                                    className="bg-white shadow-lg border border-gray-300 relative"
                                    style={{
                                        width: orientation === 'landscape' ? '280px' : '200px',
                                        height: orientation === 'landscape' ? '200px' : '280px',
                                    }}
                                >
                                    {/* Grid Lines */}
                                    <div
                                        className="absolute inset-0 grid"
                                        style={{
                                            gridTemplateColumns: `repeat(${gridMode.split('x')[0]}, 1fr)`,
                                            gridTemplateRows: `repeat(${gridMode.split('x')[1]}, 1fr)`,
                                            padding: `${padding / 4}px`,
                                            gap: '2px',
                                        }}
                                    >
                                        {Array.from({ length: parseInt(gridMode.split('x')[0]) * parseInt(gridMode.split('x')[1]) }).map((_, i) => (
                                            <div
                                                key={i}
                                                className="bg-blue-50 border border-blue-200 flex items-center justify-center text-xs text-blue-500 font-medium"
                                                style={{
                                                    transform: rotation === '90cw' ? 'rotate(90deg)' : rotation === '90ccw' ? 'rotate(-90deg)' : rotation === 'alternate' && i % 2 === 1 ? 'rotate(180deg)' : 'none',
                                                }}
                                            >
                                                {i + 1}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Preview Info */}
                                <div className="absolute bottom-2 left-2 right-2 text-center">
                                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded shadow-sm">
                                        {paperSize.toUpperCase()} • {orientation} • {gridMode} grid
                                    </span>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[hsl(var(--color-muted-foreground))] text-center">
                                {tTools('pdfBooklet.previewDesc') || 'This preview shows how pages will be arranged on each sheet.'}
                            </p>
                        </div>
                    </div>
                </Card>
            )}

            {/* Processing Progress */}
            {isProcessing && (
                <ProcessingProgress
                    progress={progress}
                    status="processing"
                    message="Creating booklet layout..."
                    showPercentage
                />
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleCreateBooklet}
                    disabled={!canProcess}
                    loading={isProcessing}
                >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {isProcessing
                        ? (t('status.processing') || 'Processing...')
                        : (tTools('pdfBooklet.createButton') || 'Create Booklet')
                    }
                </Button>

                {resultBlob && (
                    <DownloadButton
                        file={resultBlob}
                        filename={file ? `${file.name.replace(/\.pdf$/i, '')}_booklet.pdf` : 'booklet.pdf'}
                        variant="secondary"
                        size="lg"
                    />
                )}
            </div>

            {/* Success Message */}
            {resultBlob && (
                <div
                    className="p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
                    role="status"
                >
                    <p className="text-sm font-medium">
                        {tTools('pdfBooklet.successMessage') || 'Booklet created successfully! Click download to save.'}
                    </p>
                </div>
            )}
        </div>
    );
}

export default PDFBookletTool;

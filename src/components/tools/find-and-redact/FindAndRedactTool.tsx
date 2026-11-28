'use client';

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
    searchTextInPDF,
    applyFindAndRedact,
    TextMatch,
    parseSearchTerms,
} from '@/lib/pdf/processors/find-and-redact';
import { loadPdfjs } from '@/lib/pdf/loader';

export interface FindAndRedactToolProps {
    className?: string;
}

/**
 * FindAndRedactTool Component
 * 
 * Provides functionality to search for text across all pages of a PDF
 * and redact matching content. Useful for removing sensitive information
 * like account numbers, names, etc. from multi-page documents.
 */
export function FindAndRedactTool({ className = '' }: FindAndRedactToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools.findAndRedact');

    // File state
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [result, setResult] = useState<Blob | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Search state
    const [searchTermsInput, setSearchTermsInput] = useState('');
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [wholeWord, setWholeWord] = useState(false);
    const [useRegex, setUseRegex] = useState(false);
    const [matches, setMatches] = useState<TextMatch[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    // Redaction options
    const [redactionColor, setRedactionColor] = useState('#000000');
    const [addBorder, setAddBorder] = useState(false);
    const [replacementText, setReplacementText] = useState('');

    // Page filter for viewing matches
    const [selectedPage, setSelectedPage] = useState<number | 'all'>('all');

    // Preview state
    const [showPreview, setShowPreview] = useState(false);
    const [previewPage, setPreviewPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [previewScale, setPreviewScale] = useState(1.0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pdfDocRef = useRef<any>(null);

    const cancelledRef = useRef(false);

    // Parse search terms from input
    const parsedTerms = useMemo(() => parseSearchTerms(searchTermsInput), [searchTermsInput]);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setError(null);
            setResult(null);
            setMatches([]);
            setHasSearched(false);
            setShowPreview(false);
            setPreviewPage(1);
            pdfDocRef.current = null;
        }
    }, []);

    const handleClearFile = useCallback(() => {
        setFile(null);
        setResult(null);
        setError(null);
        setStatus('idle');
        setMatches([]);
        setHasSearched(false);
        setSearchTermsInput('');
        setShowPreview(false);
        pdfDocRef.current = null;
    }, []);

    // Load PDF for preview
    const loadPdfForPreview = useCallback(async () => {
        if (!file) return;

        try {
            const pdfjs = await loadPdfjs();
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
            pdfDocRef.current = pdf;
            setTotalPages(pdf.numPages);

            // Immediately render the first page after loading
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                if (context) {
                    const page = await pdf.getPage(previewPage);
                    const viewport = page.getViewport({ scale: previewScale });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                    }).promise;

                    // Draw match highlights
                    const pageMatches = matches.filter(m => m.page === previewPage);
                    for (const match of pageMatches) {
                        const x = match.x * previewScale;
                        const y = (viewport.height / previewScale - match.y - match.height) * previewScale;
                        const width = match.width * previewScale;
                        const height = match.height * previewScale;

                        if (match.selected) {
                            context.fillStyle = 'rgba(255, 0, 0, 0.3)';
                        } else {
                            context.fillStyle = 'rgba(255, 200, 0, 0.3)';
                        }
                        context.fillRect(x, y, width, height);

                        context.strokeStyle = match.selected ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 200, 0, 0.8)';
                        context.lineWidth = 2;
                        context.strokeRect(x, y, width, height);
                    }
                }
            }
        } catch (err) {
            console.error('Failed to load PDF for preview:', err);
        }
    }, [file, previewPage, previewScale, matches]);

    // Render preview page with match highlights
    const renderPreviewPage = useCallback(async () => {
        if (!pdfDocRef.current || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        try {
            const page = await pdfDocRef.current.getPage(previewPage);
            const viewport = page.getViewport({ scale: previewScale });

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Clear canvas
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Render the PDF page
            await page.render({
                canvasContext: context,
                viewport: viewport,
            }).promise;

            // Draw match highlights
            const pageMatches = matches.filter(m => m.page === previewPage);
            for (const match of pageMatches) {
                // Convert PDF coordinates to canvas coordinates
                // PDF has origin at bottom-left, canvas has origin at top-left
                const x = match.x * previewScale;
                const y = (viewport.height / previewScale - match.y - match.height) * previewScale;
                const width = match.width * previewScale;
                const height = match.height * previewScale;

                // Draw highlight rectangle
                if (match.selected) {
                    context.fillStyle = 'rgba(255, 0, 0, 0.3)';
                } else {
                    context.fillStyle = 'rgba(255, 200, 0, 0.3)';
                }
                context.fillRect(x, y, width, height);

                // Draw border
                context.strokeStyle = match.selected ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 200, 0, 0.8)';
                context.lineWidth = 2;
                context.strokeRect(x, y, width, height);
            }
        } catch (err) {
            console.error('Failed to render preview page:', err);
        }
    }, [previewPage, previewScale, matches]);

    // Load PDF when file changes and preview is enabled
    useEffect(() => {
        if (file && showPreview) {
            loadPdfForPreview();
        }
    }, [file, showPreview, loadPdfForPreview]);

    // Render preview when page or matches change (only if PDF is already loaded)
    useEffect(() => {
        if (showPreview && pdfDocRef.current) {
            renderPreviewPage();
        }
    }, [showPreview, previewPage, matches, previewScale, renderPreviewPage]);

    // Search for matches
    const handleSearch = useCallback(async () => {
        if (!file || parsedTerms.length === 0) {
            setError(tTools('enterSearchTerm'));
            return;
        }

        setIsSearching(true);
        setError(null);
        setMatches([]);
        setProgress(0);

        try {
            const searchResult = await searchTextInPDF(
                file,
                {
                    searchTerms: parsedTerms,
                    caseSensitive,
                    useRegex,
                    wholeWord,
                },
                (prog, message) => {
                    setProgress(prog);
                    setProgressMessage(message || '');
                }
            );

            if (searchResult.success) {
                setMatches(searchResult.matches);
                setHasSearched(true);
                if (searchResult.matches.length === 0) {
                    setError(tTools('noMatchesFound'));
                } else {
                    // Show preview if matches found
                    setShowPreview(true);
                    // Jump to the first page with matches
                    if (searchResult.pagesWithMatches.length > 0) {
                        setPreviewPage(searchResult.pagesWithMatches[0]);
                    }
                }
            } else {
                setError(searchResult.error || tTools('searchFailed'));
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : tTools('searchFailed'));
        } finally {
            setIsSearching(false);
            setProgress(0);
        }
    }, [file, parsedTerms, caseSensitive, useRegex, wholeWord, tTools]);

    // Toggle individual match selection
    const toggleMatchSelection = useCallback((matchId: string) => {
        setMatches(prev =>
            prev.map(match =>
                match.id === matchId ? { ...match, selected: !match.selected } : match
            )
        );
    }, []);

    // Select/deselect all matches
    const toggleSelectAll = useCallback((selected: boolean) => {
        setMatches(prev => prev.map(match => ({ ...match, selected })));
    }, []);

    // Select/deselect all matches on a specific page
    const toggleSelectPage = useCallback((pageNum: number, selected: boolean) => {
        setMatches(prev =>
            prev.map(match =>
                match.page === pageNum ? { ...match, selected } : match
            )
        );
    }, []);

    // Apply redactions
    const handleRedact = useCallback(async () => {
        if (!file) return;

        const selectedMatches = matches.filter(m => m.selected);
        if (selectedMatches.length === 0) {
            setError(tTools('selectMatchesToRedact'));
            return;
        }

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);

        try {
            // Parse hex color to RGB
            const hexToRgb = (hex: string) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return { r, g, b };
            };

            const redactionResult = await applyFindAndRedact(
                file,
                matches,
                {
                    color: hexToRgb(redactionColor),
                    addBorder,
                    replacementText: replacementText.trim() || undefined,
                    selectedMatchIds: selectedMatches.map(m => m.id),
                },
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

            if (redactionResult.success && redactionResult.result) {
                setResult(redactionResult.result);
                setStatus('complete');
            } else {
                setError(redactionResult.error || tTools('redactFailed'));
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                setError(err instanceof Error ? err.message : tTools('redactFailed'));
                setStatus('error');
            }
        }
    }, [file, matches, redactionColor, addBorder, replacementText, tTools]);

    const formatSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const isProcessing = status === 'processing';
    const selectedCount = matches.filter(m => m.selected).length;
    const pagesWithMatches = [...new Set(matches.map(m => m.page))].sort((a, b) => a - b);

    // Filter matches by selected page
    const filteredMatches = selectedPage === 'all'
        ? matches
        : matches.filter(m => m.page === selectedPage);

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* File Upload */}
            {!file && (
                <FileUploader
                    accept={['application/pdf', '.pdf']}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={handleFilesSelected}
                    onError={setError}
                    disabled={isProcessing}
                    label={tTools('uploadLabel')}
                    description={tTools('uploadDescription')}
                />
            )}

            {error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {file && (
                <>
                    {/* File Info */}
                    <Card variant="outlined">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <svg className="w-10 h-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                </svg>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-gray-100">{file.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatSize(file.size)}</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing || isSearching}>
                                {t('buttons.remove')}
                            </Button>
                        </div>
                    </Card>

                    {/* Search Section */}
                    <Card variant="outlined" size="lg">
                        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                            {tTools('searchTitle')}
                        </h3>

                        {/* Search Input - Multiple Terms */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                    {tTools('searchTermLabel')}
                                </label>

                                {/* Main Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchTermsInput}
                                        onChange={(e) => setSearchTermsInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && parsedTerms.length > 0) {
                                                e.preventDefault();
                                                handleSearch();
                                            }
                                        }}
                                        placeholder={tTools('searchInputPlaceholder')}
                                        className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        disabled={isProcessing || isSearching}
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Help text */}
                                <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                                    {tTools('searchInputHelp')}
                                </p>

                                {/* Parsed Terms Tags */}
                                {parsedTerms.length > 0 && (
                                    <div className="mt-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                {tTools('termsCount', { count: parsedTerms.length })}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => setSearchTermsInput('')}
                                                className="text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                                                disabled={isProcessing || isSearching}
                                            >
                                                {t('buttons.clearAll')}
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {parsedTerms.map((term, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                    {term}
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            const newTerms = parsedTerms.filter((_, i) => i !== index);
                                                            setSearchTermsInput(newTerms.join(', '));
                                                        }}
                                                        className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                                                        disabled={isProcessing || isSearching}
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Search Options */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 border-t border-gray-200 dark:border-gray-700">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={caseSensitive}
                                        onChange={(e) => setCaseSensitive(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                        disabled={isProcessing || isSearching}
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {tTools('caseSensitive')}
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={wholeWord}
                                        onChange={(e) => setWholeWord(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                        disabled={isProcessing || isSearching || useRegex}
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {tTools('wholeWord')}
                                    </span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={useRegex}
                                        onChange={(e) => {
                                            setUseRegex(e.target.checked);
                                            if (e.target.checked) setWholeWord(false);
                                        }}
                                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                        disabled={isProcessing || isSearching}
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {tTools('useRegex')}
                                    </span>
                                </label>
                            </div>

                            {/* Search Button */}
                            <div className="flex justify-end">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={handleSearch}
                                    disabled={parsedTerms.length === 0 || isProcessing || isSearching}
                                    loading={isSearching}
                                    className="px-8"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    {isSearching ? tTools('searching') : tTools('searchButton')}
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Preview and Results - Side by Side Layout */}
                    {showPreview && hasSearched && matches.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                            {/* Left Side - Preview (60%) */}
                            <div className="lg:col-span-3">
                                <Card variant="outlined" size="lg" className="h-full">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                            {tTools('previewTitle') || 'Preview'}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setPreviewPage(Math.max(1, previewPage - 1))}
                                                disabled={previewPage <= 1}
                                            >
                                                ←
                                            </Button>
                                            <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[60px] text-center">
                                                {previewPage} / {totalPages}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setPreviewPage(Math.min(totalPages, previewPage + 1))}
                                                disabled={previewPage >= totalPages}
                                            >
                                                →
                                            </Button>
                                            <select
                                                value={previewScale}
                                                onChange={(e) => setPreviewScale(parseFloat(e.target.value))}
                                                className="ml-2 px-2 py-1 text-sm border rounded bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                                            >
                                                <option value="0.5">50%</option>
                                                <option value="0.75">75%</option>
                                                <option value="1">100%</option>
                                                <option value="1.5">150%</option>
                                                <option value="2">200%</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Quick page navigation */}
                                    {pagesWithMatches.length > 1 && (
                                        <div className="mb-3 flex flex-wrap gap-1">
                                            <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">
                                                {tTools('pagesWithMatches') || 'Pages with matches:'}
                                            </span>
                                            {pagesWithMatches.map(page => (
                                                <button
                                                    key={page}
                                                    onClick={() => {
                                                        setPreviewPage(page);
                                                        setSelectedPage(page);
                                                    }}
                                                    className={`px-2 py-1 text-xs rounded ${previewPage === page
                                                        ? 'bg-blue-500 text-white'
                                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Preview Legend */}
                                    <div className="mb-3 flex gap-4 text-xs">
                                        <div className="flex items-center gap-1">
                                            <span className="inline-block w-4 h-4 bg-red-500/30 border-2 border-red-500 rounded"></span>
                                            <span className="text-gray-600 dark:text-gray-400">{tTools('selectedMatch') || 'Selected'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="inline-block w-4 h-4 bg-yellow-500/30 border-2 border-yellow-500 rounded"></span>
                                            <span className="text-gray-600 dark:text-gray-400">{tTools('unselectedMatch') || 'Not selected'}</span>
                                        </div>
                                    </div>

                                    <div className="border rounded-lg overflow-auto bg-gray-100 dark:bg-gray-900" style={{ maxHeight: 'calc(100vh - 400px)', minHeight: '400px' }}>
                                        <canvas ref={canvasRef} className="mx-auto" />
                                    </div>
                                </Card>
                            </div>

                            {/* Right Side - Results (40%) */}
                            <div className="lg:col-span-2 space-y-4">
                                {/* Matches Header */}
                                <Card variant="outlined" size="lg">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                            {tTools('matchesFound', { count: matches.length })}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleSelectAll(true)}
                                                disabled={isProcessing}
                                            >
                                                {t('buttons.selectAll')}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleSelectAll(false)}
                                                disabled={isProcessing}
                                            >
                                                {t('buttons.deselectAll')}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Page Filter - Compact */}
                                    {pagesWithMatches.length > 1 && (
                                        <div className="mb-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                <button
                                                    onClick={() => setSelectedPage('all')}
                                                    className={`px-2 py-1 text-xs rounded-full border transition-all ${selectedPage === 'all'
                                                        ? 'bg-blue-600 text-white border-blue-600'
                                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                                                        }`}
                                                    disabled={isProcessing}
                                                >
                                                    {tTools('allMatches', { count: matches.length })}
                                                </button>
                                                {pagesWithMatches.map(page => {
                                                    const pageMatchCount = matches.filter(m => m.page === page).length;
                                                    const isSelected = selectedPage === page;
                                                    return (
                                                        <button
                                                            key={page}
                                                            onClick={() => {
                                                                setSelectedPage(page);
                                                                setPreviewPage(page);
                                                            }}
                                                            className={`px-2 py-1 text-xs rounded-full border transition-all ${isSelected
                                                                ? 'bg-blue-600 text-white border-blue-600'
                                                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                                                                }`}
                                                            disabled={isProcessing}
                                                        >
                                                            P{page} ({pageMatchCount})
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Matches List - Scrollable */}
                                    <div className="border rounded-lg divide-y dark:border-gray-700 dark:divide-gray-700 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 380px)', minHeight: '300px' }}>
                                        {filteredMatches.map((match) => (
                                            <div
                                                key={match.id}
                                                className={`flex items-center gap-2 p-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${match.selected ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                                    } ${previewPage === match.page ? 'border-l-2 border-l-blue-500' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={match.selected}
                                                    onChange={() => toggleMatchSelection(match.id)}
                                                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0"
                                                    disabled={isProcessing}
                                                />
                                                <div
                                                    className="flex-1 min-w-0"
                                                    onClick={() => {
                                                        setPreviewPage(match.page);
                                                        setSelectedPage(match.page);
                                                    }}
                                                >
                                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                                        "{match.text}"
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                                        {tTools('pageInfo', { page: match.page })}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        {tTools('selectedCount', { selected: selectedCount, total: matches.length })}
                                    </p>
                                </Card>
                            </div>
                        </div>
                    )}

                    {/* No Preview Mode - Results Only */}
                    {!showPreview && hasSearched && matches.length > 0 && (
                        <Card variant="outlined" size="lg">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                    {tTools('matchesFound', { count: matches.length })}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSelectAll(true)}
                                        disabled={isProcessing}
                                    >
                                        {t('buttons.selectAll')}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSelectAll(false)}
                                        disabled={isProcessing}
                                    >
                                        {t('buttons.deselectAll')}
                                    </Button>
                                </div>
                            </div>

                            {/* Matches List */}
                            <div className="max-h-60 overflow-y-auto border rounded-lg divide-y dark:border-gray-700 dark:divide-gray-700">
                                {filteredMatches.map((match) => (
                                    <div
                                        key={match.id}
                                        className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${match.selected ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={match.selected}
                                            onChange={() => toggleMatchSelection(match.id)}
                                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                            disabled={isProcessing}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                                "{match.text}"
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {tTools('pageInfo', { page: match.page })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                {tTools('selectedCount', { selected: selectedCount, total: matches.length })}
                            </p>
                        </Card>
                    )}

                    {/* Redaction Options */}
                    {hasSearched && matches.length > 0 && (
                        <Card variant="outlined" size="lg">
                            <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                                {tTools('redactionOptions')}
                            </h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                            {tTools('redactionColor')}
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="color"
                                                value={redactionColor}
                                                onChange={(e) => setRedactionColor(e.target.value)}
                                                className="w-10 h-10 p-1 cursor-pointer rounded border border-gray-300 dark:border-gray-600"
                                                disabled={isProcessing}
                                            />
                                            <input
                                                type="text"
                                                value={redactionColor}
                                                onChange={(e) => setRedactionColor(e.target.value)}
                                                className="flex-1 px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm"
                                                disabled={isProcessing}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                                            {tTools('replacementText')}
                                        </label>
                                        <input
                                            type="text"
                                            value={replacementText}
                                            onChange={(e) => setReplacementText(e.target.value)}
                                            placeholder={tTools('replacementTextPlaceholder')}
                                            className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                                            disabled={isProcessing}
                                        />
                                    </div>
                                </div>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={addBorder}
                                        onChange={(e) => setAddBorder(e.target.checked)}
                                        className="w-4 h-4 text-blue-600"
                                        disabled={isProcessing}
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {tTools('addBorder')}
                                    </span>
                                </label>

                                {/* Warning */}
                                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400">
                                    <p className="text-sm">
                                        <strong>{tTools('warningTitle')}:</strong> {tTools('warningText')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    )}

                    {/* Progress */}
                    {isProcessing && (
                        <ProcessingProgress
                            progress={progress}
                            status={status}
                            message={progressMessage}
                            onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
                            showPercentage
                        />
                    )}

                    {/* Action Buttons */}
                    {hasSearched && matches.length > 0 && (
                        <div className="flex flex-wrap items-center gap-4">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={handleRedact}
                                disabled={selectedCount === 0 || isProcessing}
                                loading={isProcessing}
                            >
                                {isProcessing
                                    ? t('status.processing')
                                    : tTools('redactButton', { count: selectedCount })
                                }
                            </Button>
                            {result && (
                                <DownloadButton
                                    file={result}
                                    filename={file.name.replace(/\.pdf$/i, '_redacted.pdf')}
                                    variant="secondary"
                                    size="lg"
                                    showFileSize
                                />
                            )}
                        </div>
                    )}

                    {/* Success Message */}
                    {status === 'complete' && result && (
                        <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                            <p className="text-sm font-medium">{tTools('successMessage')}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default FindAndRedactTool;

'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Download, X, CopyCheck, Printer, RefreshCw, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { saveBlobFile, isTauri, getSystemPrinters, printPdfFile, type SystemPrinter } from '@/lib/tauri-bridge';
import { Modal } from '@/components/ui';
import { withBasePath } from '@/lib/utils/path';

export const SELECTED_PRINTER_STORAGE_KEY = 'pdfcraft-selected-printer';

export interface PDFReaderToolProps {
    className?: string;
}

/**
 * PDFReaderTool Component
 * 
 * A full-featured PDF reader with automatic selection-to-clipboard synchronization.
 */
export function PDFReaderTool({ className = '' }: PDFReaderToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    const [file, setFile] = useState<File | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [autoCopyEnabled, setAutoCopyEnabled] = useState(true);
    const [copiedNotify, setCopiedNotify] = useState<string | null>(null);

    // Native printing state
    const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
    const [printers, setPrinters] = useState<SystemPrinter[]>([]);
    const [selectedPrinter, setSelectedPrinter] = useState<string>('');
    const [isLoadingPrinters, setIsLoadingPrinters] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);
    const [printStatus, setPrintStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const lastCopiedRef = useRef<string>('');

    // Sync selected text to clipboard
    const syncSelection = useCallback((targetWindow?: Window | null) => {
        if (!autoCopyEnabled) return;
        try {
            const win = targetWindow || window;
            const sel = win.getSelection();
            const text = sel ? sel.toString().trim() : '';
            if (text && text.length > 0 && text !== lastCopiedRef.current) {
                lastCopiedRef.current = text;
                if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                    navigator.clipboard.writeText(text).then(() => {
                        setCopiedNotify(text.slice(0, 30) + (text.length > 30 ? '...' : ''));
                        setTimeout(() => setCopiedNotify(null), 2000);
                    }).catch(() => {});
                }
            }
        } catch {}
    }, [autoCopyEnabled]);

    // Attach selection listener to host document
    useEffect(() => {
        const handleMouseUp = () => syncSelection(window);
        document.addEventListener('mouseup', handleMouseUp);
        return () => document.removeEventListener('mouseup', handleMouseUp);
    }, [syncSelection]);

    // Attach selection listener into iframe contentDocument once loaded
    const handleIframeLoad = useCallback(() => {
        try {
            const iframe = iframeRef.current;
            if (iframe?.contentDocument && iframe.contentWindow) {
                const doc = iframe.contentDocument;
                const win = iframe.contentWindow;
                doc.addEventListener('mouseup', () => syncSelection(win));
                doc.addEventListener('touchend', () => syncSelection(win));
            }
        } catch {}
    }, [syncSelection]);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);

            // Revoke previous URL
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }

            // Create new URL for the PDF
            const url = URL.createObjectURL(selectedFile);
            setPdfUrl(url);
            setError(null);
        }
    }, [pdfUrl]);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    // Cleanup URL on unmount
    useEffect(() => {
        return () => {
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [pdfUrl]);

    const handleDownload = useCallback(() => {
        if (file) {
            saveBlobFile(file, file.name);
        }
    }, [file]);

    const loadPrinters = useCallback(async () => {
        setIsLoadingPrinters(true);
        setPrintStatus(null);
        try {
            const list = await getSystemPrinters();
            setPrinters(list);
            if (list.length > 0) {
                let savedPrinter: string | null = null;
                try {
                    savedPrinter = localStorage.getItem(SELECTED_PRINTER_STORAGE_KEY);
                } catch {}

                if (savedPrinter && list.some((p) => p.name === savedPrinter)) {
                    setSelectedPrinter(savedPrinter);
                } else {
                    const defaultPrinter = list.find((p) => p.is_default);
                    setSelectedPrinter(defaultPrinter ? defaultPrinter.name : list[0].name);
                }
            } else {
                setSelectedPrinter('');
            }
        } catch {
            setPrinters([]);
        } finally {
            setIsLoadingPrinters(false);
        }
    }, []);

    const handlePrinterChange = useCallback((printerName: string) => {
        setSelectedPrinter(printerName);
        try {
            localStorage.setItem(SELECTED_PRINTER_STORAGE_KEY, printerName);
        } catch {}
    }, []);

    const handleTriggerPrint = useCallback(() => {
        if (!file) return;

        if (!isTauri()) {
            // Web browser fallback
            try {
                if (iframeRef.current?.contentWindow) {
                    iframeRef.current.contentWindow.print();
                } else {
                    window.print();
                }
            } catch {
                window.print();
            }
            return;
        }

        // Native Tauri desktop: open physical printer selection modal
        setIsPrintModalOpen(true);
        setPrintStatus(null);
        loadPrinters();
    }, [file, loadPrinters]);

    // Listen for print requests emitted from PDF.js viewer iframe
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'pdfcraft-print-requested') {
                handleTriggerPrint();
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [handleTriggerPrint]);

    // Listen for Ctrl+P / Cmd+P print shortcut
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!file) return;

            if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'p') {
                event.preventDefault();
                if (!isPrintModalOpen && !isPrinting) {
                    handleTriggerPrint();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [file, isPrintModalOpen, isPrinting, handleTriggerPrint]);

    const handleExecutePrint = useCallback(async () => {
        if (!file) return;
        if (selectedPrinter) {
            try {
                localStorage.setItem(SELECTED_PRINTER_STORAGE_KEY, selectedPrinter);
            } catch {}
        }
        setIsPrinting(true);
        setPrintStatus(null);
        try {
            const res = await printPdfFile(file, selectedPrinter || undefined);
            if (res.success) {
                setPrintStatus({
                    type: 'success',
                    message: selectedPrinter
                        ? `打印任务已成功发送到 "${selectedPrinter}"`
                        : '打印任务已发送到系统默认打印机',
                });
                setTimeout(() => {
                    setIsPrintModalOpen(false);
                    setPrintStatus(null);
                }, 2000);
            } else {
                setPrintStatus({
                    type: 'error',
                    message: res.error || '打印失败，请检查打印机状态或重试。',
                });
            }
        } catch (err: unknown) {
            setPrintStatus({
                type: 'error',
                message: err instanceof Error ? err.message : '打印执行出错',
            });
        } finally {
            setIsPrinting(false);
        }
    }, [file, selectedPrinter]);

    const handleReset = useCallback(() => {
        if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl);
        }
        setFile(null);
        setPdfUrl(null);
        setError(null);
        setCopiedNotify(null);
        setIsPrintModalOpen(false);
        setPrintStatus(null);
    }, [pdfUrl]);

    const hasFile = file !== null;

    return (
        <div className={`space-y-4 ${className}`.trim()} ref={containerRef}>
            {!hasFile && (
                <FileUploader
                    accept={['application/pdf', '.pdf']}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={handleFilesSelected}
                    onError={handleUploadError}
                    label={tTools('pdfReader.uploadLabel') || 'Open PDF File'}
                    description={tTools('pdfReader.uploadDescription') || 'Open a PDF file to read and view.'}
                />
            )}

            {error && (
                <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700" role="alert">
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {hasFile && pdfUrl && (
                <>
                    {/* Simple Header with File Info */}
                    <Card variant="outlined" className="!p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                                    {file.name}
                                </span>
                                <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Auto-copy selection toggle (Ubuntu / Linux Primary Selection feature) */}
                                <Button
                                    variant={autoCopyEnabled ? "secondary" : "ghost"}
                                    size="sm"
                                    onClick={() => setAutoCopyEnabled(!autoCopyEnabled)}
                                    className="text-xs h-7 gap-1"
                                    title={autoCopyEnabled ? "划选自动存入剪贴板 (已开启)" : "划选自动存入剪贴板 (已关闭)"}
                                >
                                    <CopyCheck className={`w-3.5 h-3.5 ${autoCopyEnabled ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span className="hidden sm:inline">选中文本自动复制</span>
                                </Button>

                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleTriggerPrint}
                                    title="打印 (Ctrl+P)"
                                >
                                    <Printer className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={handleDownload} title="Download">
                                    <Download className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={handleReset} title="Close">
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Copied to clipboard toast feedback */}
                    {copiedNotify && (
                        <div className="fixed bottom-6 right-6 z-50 px-3 py-2 rounded-lg bg-foreground text-background text-xs shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                            <CopyCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>已自动存入剪贴板: <strong>{copiedNotify}</strong></span>
                        </div>
                    )}

                    {/* PDF Viewer - Using full-featured PDF.js Viewer */}
                    <div
                        className="relative bg-gray-100 rounded-[var(--radius-md)] overflow-hidden"
                        style={{ height: '80vh', minHeight: '600px' }}
                    >
                        <iframe
                            ref={iframeRef}
                            src={withBasePath(`/pdfjs-viewer/viewer.html?file=${encodeURIComponent(pdfUrl)}`)}
                            onLoad={handleIframeLoad}
                            className="w-full h-full absolute inset-0 border-0"
                            title={file.name}
                        />
                    </div>

                    {/* Native Printer Selection Modal (Tauri Desktop) */}
                    <Modal
                        isOpen={isPrintModalOpen}
                        onClose={() => !isPrinting && setIsPrintModalOpen(false)}
                        title="打印文档"
                        size="md"
                    >
                        <div className="space-y-4 py-2">
                            {isLoadingPrinters ? (
                                <div className="flex flex-col items-center justify-center py-8 gap-3 text-muted-foreground">
                                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                                    <span className="text-sm">正在检索系统可用打印机...</span>
                                </div>
                            ) : printers.length === 0 ? (
                                <div className="space-y-3">
                                    <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 text-amber-800 dark:text-amber-200 text-sm flex items-start gap-3">
                                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">未检测到系统可用物理打印机</p>
                                            <p className="text-xs mt-1 text-amber-700 dark:text-amber-300">
                                                请确保打印机已开启连接并已在 Windows 设置中添加，然后点击重新扫描。
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline" size="sm" onClick={loadPrinters}>
                                            <RefreshCw className="w-3.5 h-3.5 mr-1" />
                                            重新扫描
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                            选择打印机
                                        </label>
                                        <select
                                            value={selectedPrinter}
                                            onChange={(e) => handlePrinterChange(e.target.value)}
                                            disabled={isPrinting}
                                            className="w-full px-3 py-2 text-sm rounded-md border border-[hsl(var(--color-input))] bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        >
                                            {printers.map((p) => (
                                                <option key={p.name} value={p.name}>
                                                    {p.name} {p.is_default ? ' (默认)' : ''}
                                                </option>
                                            ))}
                                        </select>
                                        {selectedPrinter && (
                                            <p className="text-xs text-muted-foreground mt-1.5 truncate">
                                                端口 / 连接: {printers.find((p) => p.name === selectedPrinter)?.port_name || '默认通道'}
                                            </p>
                                        )}
                                    </div>

                                    {printStatus && (
                                        <div
                                            className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                                                printStatus.type === 'success'
                                                    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                                                    : 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                                            }`}
                                        >
                                            {printStatus.type === 'success' ? (
                                                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                            )}
                                            <span className="truncate">{printStatus.message}</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-2 border-t border-[hsl(var(--color-border))]">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={loadPrinters}
                                            disabled={isPrinting}
                                            title="刷新打印机列表"
                                        >
                                            <RefreshCw className="w-3.5 h-3.5 mr-1" />
                                            刷新
                                        </Button>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setIsPrintModalOpen(false)}
                                                disabled={isPrinting}
                                            >
                                                取消
                                            </Button>
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                onClick={handleExecutePrint}
                                                disabled={isPrinting || !selectedPrinter}
                                            >
                                                {isPrinting ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin mr-1" />
                                                        正在打印...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Printer className="w-4 h-4 mr-1" />
                                                        打印
                                                    </>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Modal>
                </>
            )}
        </div>
    );
}

export default PDFReaderTool;

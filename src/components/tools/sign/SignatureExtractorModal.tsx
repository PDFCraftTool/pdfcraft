'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  scanPdfForSignatures,
  renderPdfPage,
  extractInkFromCanvas,
  DetectedSignatureZone,
  InkColorMode,
  ExtractedSignatureResult,
} from '@/lib/pdf/processors/signature-extractor';
import { saveSignature } from '@/lib/pdf/signature-storage';
import { saveBlobFile } from '@/lib/tauri-bridge';
import { loadPdfjs } from '@/lib/pdf/loader';
import { withBasePath } from '@/lib/utils/path';

export interface SignatureExtractorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignatureExtracted?: (result: { blob: Blob; dataUrl: string; name: string }) => void;
  viewerWindow?: Window | null;
}

interface CropRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function SignatureExtractorModal({
  isOpen,
  onClose,
  onSignatureExtracted,
  viewerWindow,
}: SignatureExtractorModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // PDF Document & Page info
  const pdfDocRef = useRef<any>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [detectedZones, setDetectedZones] = useState<DetectedSignatureZone[]>([]);

  // Page canvas & viewport
  const pageCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Selection / Crop rect (in page canvas pixel coordinates)
  const [cropRect, setCropRect] = useState<CropRect | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);

  // Refinement options
  const [threshold, setThreshold] = useState<number>(215);
  const [smoothness, setSmoothness] = useState<number>(25);
  const [colorMode, setColorMode] = useState<InkColorMode>('original');
  const [signatureName, setSignatureName] = useState<string>('Extracted Signature');

  // Extracted preview result
  const [extractedResult, setExtractedResult] = useState<ExtractedSignatureResult | null>(null);
  const [isExtracting, setIsExtracting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  /**
   * Reset all state
   */
  const handleReset = useCallback(() => {
    setFile(null);
    pdfDocRef.current = null;
    pageCanvasRef.current = null;
    setPageCount(0);
    setCurrentPage(1);
    setDetectedZones([]);
    setCropRect(null);
    setExtractedResult(null);
    setError(null);
    setStatusMessage(null);
  }, []);

  /**
   * Handle modal close
   */
  const handleModalClose = useCallback(() => {
    handleReset();
    onClose();
  }, [handleReset, onClose]);

  /**
   * Load and parse selected PDF
   */
  const handleFileChange = useCallback(async (selectedFile: File) => {
    try {
      setIsLoading(true);
      setError(null);
      setFile(selectedFile);
      setSignatureName(selectedFile.name.replace(/\.[^/.]+$/, '') + ' - 签名');

      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfjs = await loadPdfjs();
      const doc = await pdfjs.getDocument({
        data: arrayBuffer,
        cMapUrl: withBasePath('/pdfjs-viewer/cmaps/'),
        cMapPacked: true,
        standardFontDataUrl: withBasePath('/pdfjs-viewer/standard_fonts/'),
      }).promise;

      pdfDocRef.current = doc;
      setPageCount(doc.numPages);

      // Scan for signature fields, stamps, ink annotations
      const scanRes = await scanPdfForSignatures(arrayBuffer);
      setDetectedZones(scanRes.zones);

      // Default to first detected zone or page 1
      if (scanRes.zones.length > 0) {
        const firstZone = scanRes.zones[0];
        setCurrentPage(firstZone.pageNumber);
      } else {
        setCurrentPage(1);
      }
    } catch (err) {
      console.error('Failed to parse signed PDF:', err);
      setError(err instanceof Error ? err.message : '无法解析所选 PDF 文件');
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Render current page to canvas
   */
  const renderCurrentPage = useCallback(async () => {
    const doc = pdfDocRef.current;
    if (!doc || !displayCanvasRef.current) return;

    try {
      setIsLoading(true);
      const scale = 2.0; // Render at 2x resolution for crisp crop & extraction
      const { canvas } = await renderPdfPage(doc, currentPage, scale);
      pageCanvasRef.current = canvas;

      // Copy rendered page to the display canvas
      const displayCanvas = displayCanvasRef.current;
      displayCanvas.width = canvas.width;
      displayCanvas.height = canvas.height;
      const ctx = displayCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, displayCanvas.width, displayCanvas.height);
        ctx.drawImage(canvas, 0, 0);
      }

      // Check if current page has any detected zones
      const zonesOnPage = detectedZones.filter(z => z.pageNumber === currentPage);
      if (zonesOnPage.length > 0 && (!cropRect || !detectedZones.some(z => z.pageNumber === currentPage))) {
        // Automatically select the first detected zone on this page
        const zone = zonesOnPage[0];
        const initialCrop: CropRect = {
          x: zone.viewportRect.x * scale,
          y: zone.viewportRect.y * scale,
          width: zone.viewportRect.width * scale,
          height: zone.viewportRect.height * scale,
        };
        setCropRect(initialCrop);
      } else if (!cropRect) {
        // Default center box if no zone detected
        const defW = canvas.width * 0.45;
        const defH = canvas.height * 0.2;
        setCropRect({
          x: (canvas.width - defW) / 2,
          y: canvas.height * 0.65,
          width: defW,
          height: defH,
        });
      }
    } catch (err) {
      console.error('Failed to render PDF page:', err);
      setError('渲染页面失败，请重试');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, detectedZones, cropRect]);

  useEffect(() => {
    if (file && pdfDocRef.current) {
      renderCurrentPage();
    }
  }, [file, currentPage, renderCurrentPage]);

  /**
   * Re-extract ink whenever cropRect, threshold, smoothness or colorMode changes
   */
  useEffect(() => {
    const pageCanvas = pageCanvasRef.current;
    if (!pageCanvas || !cropRect || cropRect.width < 5 || cropRect.height < 5) {
      setExtractedResult(null);
      return;
    }

    let isMounted = true;
    setIsExtracting(true);

    extractInkFromCanvas(pageCanvas, cropRect, {
      threshold,
      smoothness,
      colorMode,
      autoTrim: true,
    })
      .then((res) => {
        if (isMounted) {
          setExtractedResult(res);
          setIsExtracting(false);
        }
      })
      .catch((err) => {
        console.warn('Extraction error:', err);
        if (isMounted) setIsExtracting(false);
      });

    return () => {
      isMounted = false;
    };
  }, [cropRect, threshold, smoothness, colorMode]);

  /**
   * Canvas mouse interaction for dragging crop selection
   */
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    dragStartRef.current = { x, y };
    setIsDragging(true);
    setCropRect({ x, y, width: 0, height: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || !dragStartRef.current || !displayCanvasRef.current) return;
    const canvas = displayCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const currentX = (e.clientX - rect.left) * scaleX;
    const currentY = (e.clientY - rect.top) * scaleY;

    const minX = Math.min(dragStartRef.current.x, currentX);
    const minY = Math.min(dragStartRef.current.y, currentY);
    const width = Math.abs(currentX - dragStartRef.current.x);
    const height = Math.abs(currentY - dragStartRef.current.y);

    setCropRect({ x: minX, y: minY, width, height });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragStartRef.current = null;
  };

  /**
   * Jump to detected zone
   */
  const handleSelectZone = (zone: DetectedSignatureZone) => {
    setCurrentPage(zone.pageNumber);
    const scale = 2.0;
    setCropRect({
      x: zone.viewportRect.x * scale,
      y: zone.viewportRect.y * scale,
      width: zone.viewportRect.width * scale,
      height: zone.viewportRect.height * scale,
    });
  };

  /**
   * Action 1: Save to PDFCraft Signature Library (and inject into Viewer if active)
   */
  const handleSaveToLibrary = async () => {
    if (!extractedResult) return;

    try {
      const name = signatureName.trim() || 'Extracted Signature';
      saveSignature({
        name,
        dataUrl: extractedResult.dataUrl,
        width: extractedResult.width,
        height: extractedResult.height,
        sourceDoc: file?.name,
      });

      // If active viewer window is available, inject signature
      if (viewerWindow && (viewerWindow as any).pdfcraftImportSignature) {
        await (viewerWindow as any).pdfcraftImportSignature(extractedResult.blob, name);
      }

      if (onSignatureExtracted) {
        onSignatureExtracted({
          blob: extractedResult.blob,
          dataUrl: extractedResult.dataUrl,
          name,
        });
      }

      setStatusMessage('已成功存入签名库！当前签名工具已准备就绪。');
      setTimeout(() => {
        handleModalClose();
      }, 1200);
    } catch (err) {
      console.error('Failed to save signature:', err);
      setError('保存签名失败，请重试');
    }
  };

  /**
   * Action 2: Download transparent PNG
   */
  const handleDownloadPng = async () => {
    if (!extractedResult) return;
    try {
      const filename = `${signatureName.trim() || 'signature'}_transparent.png`;
      await saveBlobFile(extractedResult.blob, filename);
      setStatusMessage('透明签名 PNG 已开始下载！');
    } catch (err) {
      console.error('Failed to download PNG:', err);
      setError('下载签名图片失败');
    }
  };

  /**
   * Action 3: Copy transparent PNG to clipboard
   */
  const handleCopyToClipboard = async () => {
    if (!extractedResult) return;
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': extractedResult.blob,
          }),
        ]);
        setStatusMessage('透明签名已成功复制到剪贴板！');
      } else {
        setError('当前浏览器环境不支持直接复制图片到剪贴板，请使用下载功能');
      }
    } catch (err) {
      console.error('Clipboard copy error:', err);
      setError('复制到剪贴板失败');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      title="从已签署 PDF 提取签名 / 印章"
      size="xl"
      className="!max-w-5xl"
    >
      <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-1">
        {/* Step 1: Upload signed PDF */}
        {!file && (
          <div className="py-8 px-4 text-center border-2 border-dashed border-[hsl(var(--color-border))] rounded-[var(--radius-lg)] hover:border-blue-500 transition-colors bg-[hsl(var(--color-muted)/0.2)]">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[hsl(var(--color-foreground))] mb-1">
              上传已签署的 PDF 文件
            </h3>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] max-w-md mx-auto mb-5">
              支持自动提取 Adobe Acrobat 等各类工具签署的数字签名、电子印章与手写签名，自动剔除纸张白底，生成高精透明签名并存入签名库。
            </p>

            <label className="inline-flex">
              <input
                type="file"
                accept="application/pdf,.pdf"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleFileChange(f);
                }}
              />
              <span className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-sm transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                选择已签署 PDF 文件
              </span>
            </label>
          </div>
        )}

        {/* Error / Status Messages */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-[var(--radius-md)]">
            {error}
          </div>
        )}
        {statusMessage && (
          <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-[var(--radius-md)] flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Step 2: Extraction Workspace */}
        {file && (
          <div className="space-y-4">
            {/* Top Toolbar & Detection summary */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-[hsl(var(--color-muted)/0.4)] rounded-[var(--radius-md)]">
              <div className="flex items-center gap-2 text-sm text-[hsl(var(--color-foreground))]">
                <span className="font-medium truncate max-w-[220px]" title={file.name}>
                  📄 {file.name}
                </span>
                <span className="text-xs text-[hsl(var(--color-muted-foreground))]">
                  (共 {pageCount} 页)
                </span>
              </div>

              {/* Page navigation */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={currentPage <= 1 || isLoading}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                >
                  ◀ 上一页
                </Button>
                <span className="text-xs font-medium px-2 py-1 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded">
                  {currentPage} / {pageCount}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  disabled={currentPage >= pageCount || isLoading}
                  onClick={() => setCurrentPage(p => Math.min(pageCount, p + 1))}
                >
                  下一页 ▶
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="text-xs ml-2"
                >
                  更换文件
                </Button>
              </div>
            </div>

            {/* Detected zones pill list */}
            {detectedZones.length > 0 && (
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-[var(--radius-md)]">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-800 mb-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>检测到 {detectedZones.length} 处签名/印章区域，点击可快速定位：</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {detectedZones.map((z) => (
                    <button
                      key={z.id}
                      type="button"
                      onClick={() => handleSelectZone(z)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition flex items-center gap-1.5 ${
                        z.pageNumber === currentPage
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white text-blue-700 border-blue-300 hover:bg-blue-100'
                      }`}
                    >
                      <span>📍</span>
                      <span>{z.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Split layout: Canvas view (left) + Ink Refinement & Preview (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left Column: Canvas & Crop selection (8 cols) */}
              <div className="lg:col-span-7 flex flex-col space-y-2">
                <div className="flex items-center justify-between text-xs text-[hsl(var(--color-muted-foreground))]">
                  <span>拖拽鼠标拉框选择要提取的签名区域：</span>
                  <span className="text-[11px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
                    💡 提示：选框尽量紧贴笔迹或印章
                  </span>
                </div>

                <div
                  ref={canvasContainerRef}
                  className="relative border border-[hsl(var(--color-border))] rounded-[var(--radius-md)] overflow-auto bg-gray-100 max-h-[460px] flex items-center justify-center select-none"
                  style={{ minHeight: '340px' }}
                >
                  {isLoading && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-20">
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <svg className="animate-spin h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>正在渲染页面...</span>
                      </div>
                    </div>
                  )}

                  <div className="relative inline-block m-auto">
                    <canvas
                      ref={displayCanvasRef}
                      className="cursor-crosshair max-w-full block shadow-md"
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                    />

                    {/* Crop Overlay Rect */}
                    {cropRect && displayCanvasRef.current && (
                      <div
                        className="absolute border-2 border-dashed border-blue-500 bg-blue-500/15 pointer-events-none transition-all shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]"
                        style={{
                          left: `${(cropRect.x / displayCanvasRef.current.width) * 100}%`,
                          top: `${(cropRect.y / displayCanvasRef.current.height) * 100}%`,
                          width: `${(cropRect.width / displayCanvasRef.current.width) * 100}%`,
                          height: `${(cropRect.height / displayCanvasRef.current.height) * 100}%`,
                        }}
                      >
                        <span className="absolute -top-5 left-0 text-[10px] bg-blue-600 text-white px-1.5 py-0.5 rounded shadow">
                          签名选区
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Transparent Preview & Color Tuning (5 cols) */}
              <div className="lg:col-span-5 flex flex-col space-y-4">
                <Card variant="outlined" className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-[hsl(var(--color-foreground))]">
                        透明化提取预览
                      </h4>
                      {isExtracting && (
                        <span className="text-[11px] text-blue-600 animate-pulse">正在处理...</span>
                      )}
                    </div>

                    {/* Checkerboard Transparent Preview Canvas Container */}
                    <div
                      className="w-full h-44 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] flex items-center justify-center p-3 relative overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(45deg, #e5e7eb 25%, transparent 25%), 
                                          linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), 
                                          linear-gradient(45deg, transparent 75%, #e5e7eb 75%), 
                                          linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)`,
                        backgroundSize: '16px 16px',
                        backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
                        backgroundColor: '#ffffff',
                      }}
                    >
                      {extractedResult ? (
                        <img
                          src={extractedResult.dataUrl}
                          alt="Extracted Signature Preview"
                          className="max-h-full max-w-full object-contain drop-shadow-sm select-none"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">请在左侧框选签名</span>
                      )}
                    </div>

                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-medium text-[hsl(var(--color-muted-foreground))] mb-1">
                        签名名称：
                      </label>
                      <input
                        type="text"
                        value={signatureName}
                        onChange={(e) => setSignatureName(e.target.value)}
                        placeholder="例如：张三签名 / 财务专用章"
                        className="w-full text-xs px-3 py-1.5 rounded-[var(--radius-md)] border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] text-[hsl(var(--color-foreground))]"
                      />
                    </div>

                    {/* Color Modes */}
                    <div>
                      <label className="block text-xs font-medium text-[hsl(var(--color-muted-foreground))] mb-1.5">
                        笔迹色彩增强：
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setColorMode('original')}
                          className={`p-1.5 rounded border text-left transition flex items-center gap-1.5 ${
                            colorMode === 'original'
                              ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                              : 'border-[hsl(var(--color-border))] hover:bg-gray-50'
                          }`}
                        >
                          <span className="w-3 h-3 rounded-full bg-gradient-to-tr from-blue-500 to-red-500 inline-block" />
                          <span>保持原色</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setColorMode('black')}
                          className={`p-1.5 rounded border text-left transition flex items-center gap-1.5 ${
                            colorMode === 'black'
                              ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                              : 'border-[hsl(var(--color-border))] hover:bg-gray-50'
                          }`}
                        >
                          <span className="w-3 h-3 rounded-full bg-gray-900 inline-block" />
                          <span>纯黑墨水</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setColorMode('blue')}
                          className={`p-1.5 rounded border text-left transition flex items-center gap-1.5 ${
                            colorMode === 'blue'
                              ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                              : 'border-[hsl(var(--color-border))] hover:bg-gray-50'
                          }`}
                        >
                          <span className="w-3 h-3 rounded-full bg-blue-800 inline-block" />
                          <span>公文深蓝</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setColorMode('seal_red')}
                          className={`p-1.5 rounded border text-left transition flex items-center gap-1.5 ${
                            colorMode === 'seal_red'
                              ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                              : 'border-[hsl(var(--color-border))] hover:bg-gray-50'
                          }`}
                        >
                          <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
                          <span>公章朱红</span>
                        </button>
                      </div>
                    </div>

                    {/* Fine-tuning Sliders */}
                    <div className="space-y-2 pt-1 border-t border-[hsl(var(--color-border))]">
                      <div>
                        <div className="flex justify-between text-xs text-[hsl(var(--color-muted-foreground))] mb-1">
                          <span>去白底灵敏度：</span>
                          <span className="font-mono text-gray-700">{threshold}</span>
                        </div>
                        <input
                          type="range"
                          min="160"
                          max="245"
                          step="1"
                          value={threshold}
                          onChange={(e) => setThreshold(Number(e.target.value))}
                          className="w-full accent-blue-600"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-[hsl(var(--color-muted-foreground))] mb-1">
                          <span>边缘抗锯齿平滑：</span>
                          <span className="font-mono text-gray-700">{smoothness}</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="40"
                          step="1"
                          value={smoothness}
                          onChange={(e) => setSmoothness(Number(e.target.value))}
                          className="w-full accent-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-3 border-t border-[hsl(var(--color-border))]">
                    <Button
                      variant="primary"
                      className="w-full flex items-center justify-center gap-2"
                      disabled={!extractedResult || isExtracting}
                      onClick={handleSaveToLibrary}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>一键存入签名库</span>
                    </Button>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!extractedResult || isExtracting}
                        onClick={handleDownloadPng}
                      >
                        下载透明 PNG
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        disabled={!extractedResult || isExtracting}
                        onClick={handleCopyToClipboard}
                      >
                        复制到剪贴板
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
export default SignatureExtractorModal;

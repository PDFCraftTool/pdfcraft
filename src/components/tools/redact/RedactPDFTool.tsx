'use client';

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import {
  Shield,
  Eye,
  EyeOff,
  Layers,
  Trash2,
  Undo2,
  Redo2,
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ChevronFirst,
  ChevronLast,
  LayoutGrid,
  List,
  Maximize2,
  Lock,
  Sparkles,
  Palette,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Info,
  Maximize,
  FileCheck,
  Paintbrush,
  Square,
} from 'lucide-react';

import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { loadPdfjs } from '@/lib/pdf/loader';
import { PDFJS_CONFIG } from '@/lib/pdf/config';
import { withBasePath } from '@/lib/utils/path';
import { saveBlobFile } from '@/lib/tauri-bridge';
import {
  redactPDF,
  renderRedactionAreaOnCanvas,
  applyPixelate,
  applyBlur,
  applySolidFill,
  type RedactionArea,
  type RedactionStyle,
  type RedactOptions,
  type Point,
} from '@/lib/pdf/processors/redact';

export interface RedactPDFToolProps {
  className?: string;
}

function isPointNearBrushPath(
  px: number,
  py: number,
  path: Point[],
  strokeWidth: number,
  tolerance = 6
): boolean {
  if (!path || path.length === 0) return false;
  const maxDistSq = Math.pow(strokeWidth / 2 + tolerance, 2);

  if (path.length === 1) {
    const distSq = Math.pow(px - path[0].x, 2) + Math.pow(py - path[0].y, 2);
    return distSq <= maxDistSq;
  }

  for (let i = 0; i < path.length - 1; i++) {
    const p1 = path[i];
    const p2 = path[i + 1];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const l2 = dx * dx + dy * dy;
    let t = 0;
    if (l2 > 0) {
      t = Math.max(0, Math.min(1, ((px - p1.x) * dx + (py - p1.y) * dy) / l2));
    }
    const projX = p1.x + t * dx;
    const projY = p1.y + t * dy;
    const distSq = Math.pow(px - projX, 2) + Math.pow(py - projY, 2);
    if (distSq <= maxDistSq) return true;
  }
  return false;
}

const DRAFT_COLORS = [
  { id: 'red', name: 'Red', fill: 'rgba(239, 68, 68, 0.25)', stroke: '#ef4444', text: '#ef4444' },
  { id: 'blue', name: 'Blue', fill: 'rgba(59, 130, 246, 0.25)', stroke: '#3b82f6', text: '#3b82f6' },
  { id: 'green', name: 'Green', fill: 'rgba(34, 197, 94, 0.25)', stroke: '#22c55e', text: '#22c55e' },
  { id: 'yellow', name: 'Yellow', fill: 'rgba(234, 179, 8, 0.25)', stroke: '#eab308', text: '#eab308' },
  { id: 'purple', name: 'Purple', fill: 'rgba(168, 85, 247, 0.25)', stroke: '#a855f7', text: '#a855f7' },
];

export function RedactPDFTool({ className = '' }: RedactPDFToolProps) {
  const t = useTranslations('common');

  // File state
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // PDF Document state
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageScale, setPageScale] = useState(1.2);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [canvasReady, setCanvasReady] = useState(false);
  const [jumpInput, setJumpInput] = useState('1');
  const [sidebarViewMode, setSidebarViewMode] = useState<'grid' | 'list'>('grid');
  const [filterRedactedOnly, setFilterRedactedOnly] = useState(false);
  const activePageButtonRef = useRef<HTMLButtonElement | null>(null);
  const pdfDocRef = useRef<any>(null);

  // Redaction areas by page
  const [redactions, setRedactions] = useState<Record<number, RedactionArea[]>>({});
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);

  // History stack for Undo/Redo
  const [history, setHistory] = useState<Record<number, RedactionArea[]>[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Active redaction tool settings
  const [activeTool, setActiveTool] = useState<'brush' | 'rect'>('brush');
  const [brushWidth, setBrushWidth] = useState<number>(20);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const activeBrushPathRef = useRef<Point[]>([]);

  const [activeStyle, setActiveStyle] = useState<RedactionStyle>('blackout');
  const [activeColor, setActiveColor] = useState('#000000');
  const [activeDraftColor, setActiveDraftColor] = useState('red');
  const [activeBlockSize, setActiveBlockSize] = useState(10);
  const [activeBlurRadius, setActiveBlurRadius] = useState(8);
  const [previewMode, setPreviewMode] = useState(false);

  // Security & Privacy options
  const [stripMetadata, setStripMetadata] = useState(true);
  const [flattenAllPages, setFlattenAllPages] = useState(false);
  const [purgeAnnotations, setPurgeAnnotations] = useState(true);
  const [renderScale, setRenderScale] = useState(2.0);

  // Canvas Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const baseCanvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<any>(null);

  // Interaction State
  const [isDrawing, setIsDrawing] = useState(false);
  const drawingStartRef = useRef<{ x: number; y: number } | null>(null);
  const tempAreaRef = useRef<RedactionArea | null>(null);

  const isDraggingRef = useRef(false);
  const isResizingRef = useRef(false);
  const resizeHandleRef = useRef<string | null>(null);
  const dragStartPointRef = useRef<{ x: number; y: number } | null>(null);
  const dragStartAreaRef = useRef<RedactionArea | null>(null);

  // Record history
  const pushHistory = useCallback((newRedactions: Record<number, RedactionArea[]>) => {
    setHistory((prev) => {
      const next = prev.slice(0, historyIndex + 1);
      return [...next, newRedactions];
    });
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const prevRedactions = history[historyIndex - 1];
      setRedactions(prevRedactions);
      setHistoryIndex(historyIndex - 1);
      setSelectedAreaId(null);
    }
  }, [history, historyIndex]);

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextRedactions = history[historyIndex + 1];
      setRedactions(nextRedactions);
      setHistoryIndex(historyIndex + 1);
      setSelectedAreaId(null);
    }
  }, [history, historyIndex]);

  // Load PDF file
  const handleFilesSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setError(null);
    setResult(null);
    setRedactions({});
    setHistory([]);
    setHistoryIndex(-1);
    setSelectedAreaId(null);
    setCurrentPage(1);
    setJumpInput('1');

    try {
      setIsPageLoading(true);
      const pdfjsLib = await loadPdfjs();
      const buffer = await selectedFile.arrayBuffer();
      const doc = await pdfjsLib.getDocument({
        data: buffer,
        cMapUrl: withBasePath(PDFJS_CONFIG.cMapUrl),
        cMapPacked: PDFJS_CONFIG.cMapPacked,
        standardFontDataUrl: withBasePath(PDFJS_CONFIG.standardFontDataUrl),
        disableFontFace: false,
        useSystemFonts: true,
      }).promise;

      pdfDocRef.current = doc;
      setPdfDoc(doc);
      setNumPages(doc.numPages);
      pushHistory({});

      // Auto-fit initial scale based on container width to prevent overflow
      try {
        const firstPage = await doc.getPage(1);
        const unscaledViewport = firstPage.getViewport({ scale: 1.0 });
        const containerW = containerRef.current?.clientWidth || 800;
        const targetW = Math.max(280, containerW - 48);
        const initialFit = Math.min(1.5, Math.max(0.6, Number((targetW / unscaledViewport.width).toFixed(2))));
        setPageScale(initialFit);
      } catch {}
    } catch (err: any) {
      console.error('Failed to load PDF:', err);
      setError(err?.message || 'Failed to load PDF document');
    } finally {
      setIsPageLoading(false);
    }
  }, [pushHistory]);

  const handleClear = useCallback(() => {
    if (renderTaskRef.current) {
      try {
        renderTaskRef.current.cancel();
      } catch {}
      renderTaskRef.current = null;
    }
    setFile(null);
    setPdfDoc(null);
    pdfDocRef.current = null;
    setRedactions({});
    setHistory([]);
    setHistoryIndex(-1);
    setSelectedAreaId(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setCanvasReady(false);
  }, []);

  // Cancel any running render task on unmount
  useEffect(() => {
    return () => {
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {}
        renderTaskRef.current = null;
      }
    };
  }, []);

  // Canvas callback ref to ensure ready notification
  const setBaseCanvas = useCallback((node: HTMLCanvasElement | null) => {
    baseCanvasRef.current = node;
    if (node) {
      setCanvasReady(true);
    }
  }, []);

  // Synchronize jump input with current page
  useEffect(() => {
    setJumpInput(String(currentPage));
  }, [currentPage]);

  // Jump to specific page
  const handleJumpPage = useCallback((targetPage?: number) => {
    const p = targetPage !== undefined ? targetPage : parseInt(jumpInput, 10);
    if (!isNaN(p) && p >= 1 && p <= numPages) {
      setCurrentPage(p);
    } else {
      setJumpInput(String(currentPage));
    }
  }, [jumpInput, numPages, currentPage]);

  // Pages that have at least one redaction
  const pagesWithRedactions = useMemo(() => {
    return Object.keys(redactions)
      .map(Number)
      .filter((p) => (redactions[p] || []).length > 0)
      .sort((a, b) => a - b);
  }, [redactions]);

  // Displayed pages in sidebar considering filter
  const displayedPages = useMemo(() => {
    const all = Array.from({ length: numPages }, (_, i) => i + 1);
    if (filterRedactedOnly) {
      return all.filter((p) => (redactions[p] || []).length > 0);
    }
    return all;
  }, [numPages, filterRedactedOnly, redactions]);

  // Auto-scroll active page button into view in sidebar
  useEffect(() => {
    if (activePageButtonRef.current) {
      activePageButtonRef.current.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [currentPage, sidebarViewMode]);

  // Total count of redactions
  const totalRedactionsCount = useMemo(() => {
    return Object.values(redactions).reduce((sum, list) => sum + list.length, 0);
  }, [redactions]);

  // Fit to container width
  const handleFitWidth = useCallback(async () => {
    const doc = pdfDocRef.current || pdfDoc;
    if (!doc || !containerRef.current) return;
    try {
      const page = await doc.getPage(currentPage);
      const unscaledViewport = page.getViewport({ scale: 1.0 });
      const containerW = containerRef.current.clientWidth;
      const targetW = Math.max(280, containerW - 48);
      const calculatedScale = Math.min(2.5, Math.max(0.4, Number((targetW / unscaledViewport.width).toFixed(2))));
      setPageScale(calculatedScale);
    } catch (err) {
      console.warn('Failed to calculate fit width:', err);
      setPageScale(1.0);
    }
  }, [currentPage, pdfDoc]);

  // Fit whole page into container viewport
  const handleFitPage = useCallback(async () => {
    const doc = pdfDocRef.current || pdfDoc;
    if (!doc || !containerRef.current) return;
    try {
      const page = await doc.getPage(currentPage);
      const unscaledViewport = page.getViewport({ scale: 1.0 });
      const containerW = containerRef.current.clientWidth;
      const containerH = containerRef.current.clientHeight || 550;
      const targetW = Math.max(280, containerW - 48);
      const targetH = Math.max(300, containerH - 48);
      const scaleW = targetW / unscaledViewport.width;
      const scaleH = targetH / unscaledViewport.height;
      const calculatedScale = Math.min(2.5, Math.max(0.4, Number(Math.min(scaleW, scaleH).toFixed(2))));
      setPageScale(calculatedScale);
    } catch (err) {
      console.warn('Failed to calculate fit page:', err);
      setPageScale(1.0);
    }
  }, [currentPage, pdfDoc]);

  // Render Base PDF page
  const renderCurrentPage = useCallback(async () => {
    const doc = pdfDocRef.current || pdfDoc;
    if (!doc || !baseCanvasRef.current || !overlayCanvasRef.current) return;

    // Cancel any running render task before starting a new one
    if (renderTaskRef.current) {
      try {
        renderTaskRef.current.cancel();
      } catch {
        // ignore cancellation errors
      }
      renderTaskRef.current = null;
    }

    try {
      setIsPageLoading(true);
      const page = await doc.getPage(currentPage);
      const viewport = page.getViewport({ scale: pageScale });

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const MAX_CANVAS_DIM = 4096;

      let outputScale = dpr;
      const maxDim = Math.max(viewport.width * outputScale, viewport.height * outputScale);
      if (maxDim > MAX_CANVAS_DIM) {
        outputScale = MAX_CANVAS_DIM / Math.max(viewport.width, viewport.height);
      }

      const baseCanvas = baseCanvasRef.current;
      const overlayCanvas = overlayCanvasRef.current;

      const canvasWidth = Math.floor(viewport.width * outputScale);
      const canvasHeight = Math.floor(viewport.height * outputScale);
      const cssWidthStr = `${Math.floor(viewport.width)}px`;
      const cssHeightStr = `${Math.floor(viewport.height)}px`;

      // Base canvas
      baseCanvas.width = canvasWidth;
      baseCanvas.height = canvasHeight;
      baseCanvas.style.width = cssWidthStr;
      baseCanvas.style.height = cssHeightStr;

      // Overlay canvas
      overlayCanvas.width = canvasWidth;
      overlayCanvas.height = canvasHeight;
      overlayCanvas.style.width = cssWidthStr;
      overlayCanvas.style.height = cssHeightStr;

      const ctx = baseCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

        const renderTask = page.render({
          canvasContext: ctx,
          viewport,
          transform: transform || undefined,
          intent: 'display',
        });
        renderTaskRef.current = renderTask;

        await renderTask.promise;
      }
    } catch (err: any) {
      if (err?.name === 'RenderingCancelledException') {
        // Normal collision cancellation, do not treat as error
        return;
      }
      console.error('Render page error:', err);
      setError(err?.message || 'Failed to render PDF page');
    } finally {
      setIsPageLoading(false);
    }
  }, [currentPage, pageScale, pdfDoc]);

  // Redraw Overlay Canvas (handles drawing & live preview)
  const drawOverlay = useCallback(() => {
    const overlay = overlayCanvasRef.current;
    const baseCanvas = baseCanvasRef.current;
    if (!overlay || !baseCanvas) return;

    const ctx = overlay.getContext('2d');
    if (!ctx) return;

    const cssWidth = parseFloat(overlay.style.width) || overlay.width;
    const cssHeight = parseFloat(overlay.style.height) || overlay.height;
    const dpr = cssWidth > 0 ? overlay.width / cssWidth : 1;

    ctx.clearRect(0, 0, overlay.width, overlay.height);
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const pageAreas = redactions[currentPage] || [];

    pageAreas.forEach((area, index) => {
      const isSelected = area.id === selectedAreaId;
      const areaToDraw =
        (isDraggingRef.current || isResizingRef.current) && isSelected && tempAreaRef.current
          ? tempAreaRef.current
          : area;

      const pw = areaToDraw.pageWidth || cssWidth;
      const ph = areaToDraw.pageHeight || cssHeight;
      const scaleX = cssWidth / pw;
      const scaleY = cssHeight / ph;

      const x = areaToDraw.x * scaleX;
      const y = areaToDraw.y * scaleY;
      const w = areaToDraw.width * scaleX;
      const h = areaToDraw.height * scaleY;
      const style = areaToDraw.style || 'blackout';

      if (areaToDraw.type === 'brush' && areaToDraw.path && areaToDraw.path.length > 0) {
        const pts = areaToDraw.path.map((p) => ({
          x: p.x * scaleX,
          y: p.y * scaleY,
        }));
        const sw = Math.max(1, (areaToDraw.strokeWidth || 20) * scaleX);

        if (previewMode) {
          if (style === 'whiteout' || style === 'custom-color' || style === 'blackout') {
            ctx.save();
            const fillCol =
              style === 'whiteout'
                ? '#ffffff'
                : style === 'custom-color'
                ? areaToDraw.color || '#000000'
                : '#000000';
            ctx.strokeStyle = fillCol;
            ctx.fillStyle = fillCol;
            ctx.lineWidth = sw;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            if (pts.length === 1) {
              ctx.arc(pts[0].x, pts[0].y, sw / 2, 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.moveTo(pts[0].x, pts[0].y);
              for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
              ctx.stroke();
            }
            ctx.restore();
          } else {
            // Mosaic or blur in preview mode
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            for (const p of pts) {
              if (p.x < minX) minX = p.x;
              if (p.x > maxX) maxX = p.x;
              if (p.y < minY) minY = p.y;
              if (p.y > maxY) maxY = p.y;
            }
            const pad = Math.ceil(sw / 2) + 2;
            const bx = Math.max(0, Math.floor(minX - pad));
            const by = Math.max(0, Math.floor(minY - pad));
            const bw = Math.min(cssWidth - bx, Math.ceil(maxX + pad) - bx);
            const bh = Math.min(cssHeight - by, Math.ceil(maxY + pad) - by);

            const baseCtx = baseCanvas.getContext('2d');
            if (baseCtx && bw > 0 && bh > 0) {
              const physBx = Math.floor(bx * dpr);
              const physBy = Math.floor(by * dpr);
              const physBw = Math.ceil(bw * dpr);
              const physBh = Math.ceil(bh * dpr);

              const imgData = baseCtx.getImageData(physBx, physBy, physBw, physBh);
              if (style === 'mosaic') {
                const block = Math.max(2, Math.floor((areaToDraw.blockSize || 10) * dpr));
                for (let rby = 0; rby < physBh; rby += block) {
                  for (let rbx = 0; rbx < physBw; rbx += block) {
                    let rSum = 0, gSum = 0, bSum = 0, count = 0;
                    const bH = Math.min(block, physBh - rby);
                    const bW = Math.min(block, physBw - rbx);
                    for (let dy = 0; dy < bH; dy++) {
                      for (let dx = 0; dx < bW; dx++) {
                        const idx = ((rby + dy) * physBw + (rbx + dx)) * 4;
                        rSum += imgData.data[idx];
                        gSum += imgData.data[idx + 1];
                        bSum += imgData.data[idx + 2];
                        count++;
                      }
                    }
                    if (count > 0) {
                      const rAvg = Math.round(rSum / count);
                      const gAvg = Math.round(gSum / count);
                      const bAvg = Math.round(bSum / count);
                      for (let dy = 0; dy < bH; dy++) {
                        for (let dx = 0; dx < bW; dx++) {
                          const idx = ((rby + dy) * physBw + (rbx + dx)) * 4;
                          imgData.data[idx] = rAvg;
                          imgData.data[idx + 1] = gAvg;
                          imgData.data[idx + 2] = bAvg;
                        }
                      }
                    }
                  }
                }
              } else if (style === 'blur') {
                const rad = Math.max(1, Math.floor((areaToDraw.blurRadius || 8) * dpr));
                const data = imgData.data;
                const temp = new Uint8ClampedArray(data);
                for (let row = 0; row < physBh; row++) {
                  for (let col = 0; col < physBw; col++) {
                    let r = 0, g = 0, b = 0, count = 0;
                    const start = Math.max(0, col - rad);
                    const end = Math.min(physBw - 1, col + rad);
                    for (let k = start; k <= end; k++) {
                      const idx = (row * physBw + k) * 4;
                      r += temp[idx]; g += temp[idx + 1]; b += temp[idx + 2]; count++;
                    }
                    const outIdx = (row * physBw + col) * 4;
                    data[outIdx] = Math.round(r / count);
                    data[outIdx + 1] = Math.round(g / count);
                    data[outIdx + 2] = Math.round(b / count);
                  }
                }
              }

              const effectCanvas = document.createElement('canvas');
              effectCanvas.width = physBw;
              effectCanvas.height = physBh;
              const effectCtx = effectCanvas.getContext('2d');
              if (effectCtx) {
                effectCtx.putImageData(imgData, 0, 0);

                const maskCanvas = document.createElement('canvas');
                maskCanvas.width = physBw;
                maskCanvas.height = physBh;
                const maskCtx = maskCanvas.getContext('2d');
                if (maskCtx) {
                  maskCtx.scale(dpr, dpr);
                  maskCtx.fillStyle = '#ffffff';
                  maskCtx.strokeStyle = '#ffffff';
                  maskCtx.lineWidth = sw;
                  maskCtx.lineCap = 'round';
                  maskCtx.lineJoin = 'round';
                  maskCtx.beginPath();
                  if (pts.length === 1) {
                    maskCtx.arc(pts[0].x - bx, pts[0].y - by, sw / 2, 0, Math.PI * 2);
                    maskCtx.fill();
                  } else {
                    maskCtx.moveTo(pts[0].x - bx, pts[0].y - by);
                    for (let i = 1; i < pts.length; i++) maskCtx.lineTo(pts[i].x - bx, pts[i].y - by);
                    maskCtx.stroke();
                  }

                  maskCtx.globalCompositeOperation = 'source-in';
                  maskCtx.drawImage(effectCanvas, 0, 0, bw, bh);

                  ctx.save();
                  ctx.drawImage(maskCanvas, bx, by, bw, bh);
                  ctx.restore();
                }
              }
            }
          }
        } else {
          // Edit mode for brush
          const draftStyle = DRAFT_COLORS.find((c) => c.id === areaToDraw.draftColor) || DRAFT_COLORS[0];
          ctx.save();
          ctx.lineWidth = sw;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = isSelected ? draftStyle.stroke : draftStyle.fill.replace('0.25', '0.55');
          ctx.fillStyle = ctx.strokeStyle;

          ctx.beginPath();
          if (pts.length === 1) {
            ctx.arc(pts[0].x, pts[0].y, sw / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
            ctx.stroke();
          }

          if (isSelected) {
            ctx.lineWidth = sw + 4;
            ctx.strokeStyle = '#2563eb';
            ctx.setLineDash([4, 4]);
            ctx.stroke();
          }

          // Badge at start point
          ctx.setLineDash([]);
          ctx.fillStyle = draftStyle.stroke;
          ctx.font = 'bold 11px sans-serif';
          const labelText = `#${index + 1} 🖌️ ${style.toUpperCase()}`;
          const textMetrics = ctx.measureText(labelText);
          const badgeW = textMetrics.width + 8;
          const badgeH = 18;
          const badgeX = Math.max(0, pts[0].x - 4);
          const badgeY = pts[0].y > 20 ? pts[0].y - 20 : pts[0].y + 8;

          ctx.fillRect(badgeX, badgeY, badgeW, badgeH);
          ctx.fillStyle = '#ffffff';
          ctx.fillText(labelText, badgeX + 4, badgeY + 13);
          ctx.restore();
        }
        return;
      }

      if (previewMode) {
        // In preview mode: copy pixels from baseCanvas and apply real redaction (mosaic/blur/blackout)
        ctx.save();
        if (style === 'mosaic') {
          // Pixelate
          const physX = Math.floor(x * dpr);
          const physY = Math.floor(y * dpr);
          const physW = Math.ceil(w * dpr);
          const physH = Math.ceil(h * dpr);

          const baseCtx = baseCanvas.getContext('2d');
          if (baseCtx && physW > 0 && physH > 0) {
            const imgData = baseCtx.getImageData(physX, physY, physW, physH);
            const block = Math.max(2, Math.floor((areaToDraw.blockSize || 10) * dpr));

            for (let by = 0; by < physH; by += block) {
              for (let bx = 0; bx < physW; bx += block) {
                let rSum = 0, gSum = 0, bSum = 0, count = 0;
                const bH = Math.min(block, physH - by);
                const bW = Math.min(block, physW - bx);

                for (let dy = 0; dy < bH; dy++) {
                  for (let dx = 0; dx < bW; dx++) {
                    const idx = ((by + dy) * physW + (bx + dx)) * 4;
                    rSum += imgData.data[idx];
                    gSum += imgData.data[idx + 1];
                    bSum += imgData.data[idx + 2];
                    count++;
                  }
                }

                if (count > 0) {
                  const rAvg = Math.round(rSum / count);
                  const gAvg = Math.round(gSum / count);
                  const bAvg = Math.round(bSum / count);

                  for (let dy = 0; dy < bH; dy++) {
                    for (let dx = 0; dx < bW; dx++) {
                      const idx = ((by + dy) * physW + (bx + dx)) * 4;
                      imgData.data[idx] = rAvg;
                      imgData.data[idx + 1] = gAvg;
                      imgData.data[idx + 2] = bAvg;
                    }
                  }
                }
              }
            }
            ctx.putImageData(imgData, physX, physY);
          }
        } else if (style === 'blur') {
          // Blur
          const physX = Math.floor(x * dpr);
          const physY = Math.floor(y * dpr);
          const physW = Math.ceil(w * dpr);
          const physH = Math.ceil(h * dpr);

          const baseCtx = baseCanvas.getContext('2d');
          if (baseCtx && physW > 0 && physH > 0) {
            const imgData = baseCtx.getImageData(physX, physY, physW, physH);
            const rad = Math.max(1, Math.floor((areaToDraw.blurRadius || 8) * dpr));
            const data = imgData.data;
            const temp = new Uint8ClampedArray(data);

            for (let row = 0; row < physH; row++) {
              for (let col = 0; col < physW; col++) {
                let r = 0, g = 0, b = 0, count = 0;
                const start = Math.max(0, col - rad);
                const end = Math.min(physW - 1, col + rad);
                for (let k = start; k <= end; k++) {
                  const idx = (row * physW + k) * 4;
                  r += temp[idx];
                  g += temp[idx + 1];
                  b += temp[idx + 2];
                  count++;
                }
                const outIdx = (row * physW + col) * 4;
                data[outIdx] = Math.round(r / count);
                data[outIdx + 1] = Math.round(g / count);
                data[outIdx + 2] = Math.round(b / count);
              }
            }
            ctx.putImageData(imgData, physX, physY);
          }
        } else if (style === 'whiteout') {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x, y, w, h);
        } else if (style === 'custom-color') {
          ctx.fillStyle = areaToDraw.color || '#000000';
          ctx.fillRect(x, y, w, h);
        } else {
          // Blackout
          ctx.fillStyle = '#000000';
          ctx.fillRect(x, y, w, h);
        }
        ctx.restore();
      } else {
        // Edit mode: draw bounding box, number badge, handles
        const draftStyle =
          DRAFT_COLORS.find((c) => c.id === areaToDraw.draftColor) || DRAFT_COLORS[0];

        ctx.fillStyle = isSelected
          ? draftStyle.fill.replace('0.25', '0.4')
          : draftStyle.fill;
        ctx.strokeStyle = draftStyle.stroke;
        ctx.lineWidth = isSelected ? 2.5 : 1.5;
        ctx.setLineDash(isSelected ? [] : [4, 4]);

        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);

        // Number badge & style tag
        ctx.setLineDash([]);
        ctx.fillStyle = draftStyle.stroke;
        ctx.font = 'bold 11px sans-serif';
        const labelText = `#${index + 1} ${style.toUpperCase()}`;
        const textMetrics = ctx.measureText(labelText);
        const badgeW = textMetrics.width + 8;
        const badgeH = 18;

        ctx.fillRect(x, y > 20 ? y - 18 : y, badgeW, badgeH);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(labelText, x + 4, y > 20 ? y - 5 : y + 13);

        // Draw 8 resize handles if selected
        if (isSelected) {
          const handleSize = 8;
          ctx.fillStyle = '#ffffff';
          ctx.strokeStyle = draftStyle.stroke;
          ctx.lineWidth = 2;

          const handles = [
            { x: x - handleSize / 2, y: y - handleSize / 2 }, // nw
            { x: x + w / 2 - handleSize / 2, y: y - handleSize / 2 }, // n
            { x: x + w - handleSize / 2, y: y - handleSize / 2 }, // ne
            { x: x + w - handleSize / 2, y: y + h / 2 - handleSize / 2 }, // e
            { x: x + w - handleSize / 2, y: y + h - handleSize / 2 }, // se
            { x: x + w / 2 - handleSize / 2, y: y + h - handleSize / 2 }, // s
            { x: x - handleSize / 2, y: y + h - handleSize / 2 }, // sw
            { x: x - handleSize / 2, y: y + h / 2 - handleSize / 2 }, // w
          ];

          handles.forEach((handle) => {
            ctx.fillRect(handle.x, handle.y, handleSize, handleSize);
            ctx.strokeRect(handle.x, handle.y, handleSize, handleSize);
          });
        }
      }
    });

    // Draw active drawing during drag / brush
    if (isDrawing && tempAreaRef.current) {
      if (tempAreaRef.current.type === 'brush' && tempAreaRef.current.path) {
        const pts = tempAreaRef.current.path;
        if (pts.length > 0) {
          ctx.save();
          const sw = tempAreaRef.current.strokeWidth || brushWidth;
          ctx.lineWidth = sw;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          const draftStyle = DRAFT_COLORS.find((c) => c.id === activeDraftColor) || DRAFT_COLORS[0];
          ctx.strokeStyle =
            activeStyle === 'blackout'
              ? 'rgba(0, 0, 0, 0.85)'
              : activeStyle === 'whiteout'
              ? 'rgba(255, 255, 255, 0.9)'
              : draftStyle.stroke;
          ctx.fillStyle = ctx.strokeStyle;
          ctx.beginPath();
          if (pts.length === 1) {
            ctx.arc(pts[0].x, pts[0].y, sw / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i++) {
              ctx.lineTo(pts[i].x, pts[i].y);
            }
            ctx.stroke();
          }
          ctx.restore();
        }
      } else {
        const area = tempAreaRef.current;
        const pw = area.pageWidth || cssWidth;
        const ph = area.pageHeight || cssHeight;
        const scaleX = cssWidth / pw;
        const scaleY = cssHeight / ph;
        const x = area.x * scaleX;
        const y = area.y * scaleY;
        const w = area.width * scaleX;
        const h = area.height * scaleY;

        ctx.setLineDash([3, 3]);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        ctx.fillRect(x, y, w, h);
        ctx.strokeRect(x, y, w, h);
      }
    }

    // Draw brush hover cursor preview circle
    if (!previewMode && activeTool === 'brush' && cursorPos) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cursorPos.x, cursorPos.y, brushWidth / 2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.65)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cursorPos.x, cursorPos.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
  }, [
    redactions,
    currentPage,
    selectedAreaId,
    previewMode,
    isDrawing,
    activeTool,
    brushWidth,
    cursorPos,
    activeDraftColor,
    activeStyle,
  ]);

  // Re-render PDF page when doc, canvas ready, current page, or scale changes
  useEffect(() => {
    if ((pdfDoc || pdfDocRef.current) && canvasReady) {
      renderCurrentPage();
    }
  }, [pdfDoc, canvasReady, currentPage, pageScale, renderCurrentPage]);

  // Redraw overlay when redactions, preview, or selection changes
  useEffect(() => {
    drawOverlay();
  }, [drawOverlay]);

  // Coordinate conversion helper
  const getCanvasCoords = useCallback((e: React.MouseEvent) => {
    const overlay = overlayCanvasRef.current;
    if (!overlay) return null;
    const rect = overlay.getBoundingClientRect();
    const cssWidth = parseFloat(overlay.style.width) || rect.width;
    const cssHeight = parseFloat(overlay.style.height) || rect.height;

    const scaleX = rect.width > 0 ? cssWidth / rect.width : 1;
    const scaleY = rect.height > 0 ? cssHeight / rect.height : 1;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      cssWidth,
      cssHeight,
    };
  }, []);

  // Determine which resize handle (if any) was clicked
  const checkResizeHandle = useCallback(
    (coords: { x: number; y: number }, area: RedactionArea, cssWidth: number, cssHeight: number) => {
      const pw = area.pageWidth || cssWidth;
      const ph = area.pageHeight || cssHeight;
      const scaleX = cssWidth / pw;
      const scaleY = cssHeight / ph;
      const x = area.x * scaleX;
      const y = area.y * scaleY;
      const w = area.width * scaleX;
      const h = area.height * scaleY;
      const tolerance = 10;

      if (Math.abs(coords.x - x) < tolerance && Math.abs(coords.y - y) < tolerance) return 'nw';
      if (Math.abs(coords.x - (x + w)) < tolerance && Math.abs(coords.y - y) < tolerance) return 'ne';
      if (Math.abs(coords.x - (x + w)) < tolerance && Math.abs(coords.y - (y + h)) < tolerance) return 'se';
      if (Math.abs(coords.x - x) < tolerance && Math.abs(coords.y - (y + h)) < tolerance) return 'sw';

      if (Math.abs(coords.y - y) < tolerance && coords.x >= x && coords.x <= x + w) return 'n';
      if (Math.abs(coords.y - (y + h)) < tolerance && coords.x >= x && coords.x <= x + w) return 's';
      if (Math.abs(coords.x - x) < tolerance && coords.y >= y && coords.y <= y + h) return 'w';
      if (Math.abs(coords.x - (x + w)) < tolerance && coords.y >= y && coords.y <= y + h) return 'e';

      return null;
    },
    []
  );

  // Mouse Down handler
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (previewMode) return;
      const coords = getCanvasCoords(e);
      if (!coords) return;

      const pageAreas = redactions[currentPage] || [];

      // Brush mode: immediately begin freehand painting
      if (activeTool === 'brush') {
        setSelectedAreaId(null);
        setIsDrawing(true);
        activeBrushPathRef.current = [{ x: coords.x, y: coords.y }];
        tempAreaRef.current = {
          id: `brush-${Date.now()}`,
          type: 'brush',
          page: currentPage,
          x: coords.x,
          y: coords.y,
          width: brushWidth,
          height: brushWidth,
          path: [{ x: coords.x, y: coords.y }],
          strokeWidth: brushWidth,
          pageWidth: coords.cssWidth,
          pageHeight: coords.cssHeight,
          style: activeStyle,
          color: activeColor,
          draftColor: activeDraftColor,
          blockSize: activeBlockSize,
          blurRadius: activeBlurRadius,
        };
        requestAnimationFrame(drawOverlay);
        return;
      }

      // 1. Check if clicking on resize handles of selected area (rect mode)
      if (selectedAreaId) {
        const selectedArea = pageAreas.find((a) => a.id === selectedAreaId);
        if (selectedArea && selectedArea.type !== 'brush') {
          const handle = checkResizeHandle(coords, selectedArea, coords.cssWidth, coords.cssHeight);
          if (handle) {
            isResizingRef.current = true;
            resizeHandleRef.current = handle;
            dragStartPointRef.current = coords;
            dragStartAreaRef.current = { ...selectedArea };
            e.stopPropagation();
            return;
          }
        }
      }

      // 2. Check if clicking inside an existing area to drag/select
      for (let i = pageAreas.length - 1; i >= 0; i--) {
        const area = pageAreas[i];
        const pw = area.pageWidth || coords.cssWidth;
        const ph = area.pageHeight || coords.cssHeight;
        const scaleX = coords.cssWidth / pw;
        const scaleY = coords.cssHeight / ph;

        if (area.type === 'brush' && area.path) {
          const scaledPath = area.path.map((pt) => ({ x: pt.x * scaleX, y: pt.y * scaleY }));
          const sw = (area.strokeWidth || brushWidth) * scaleX;
          if (isPointNearBrushPath(coords.x, coords.y, scaledPath, sw)) {
            setSelectedAreaId(area.id || null);
            isDraggingRef.current = true;
            dragStartPointRef.current = coords;
            dragStartAreaRef.current = { ...area };
            tempAreaRef.current = { ...area };
            drawOverlay();
            e.stopPropagation();
            return;
          }
        } else {
          const ax = area.x * scaleX;
          const ay = area.y * scaleY;
          const aw = area.width * scaleX;
          const ah = area.height * scaleY;

          if (coords.x >= ax && coords.x <= ax + aw && coords.y >= ay && coords.y <= ay + ah) {
            setSelectedAreaId(area.id || null);
            isDraggingRef.current = true;
            dragStartPointRef.current = coords;
            dragStartAreaRef.current = { ...area };
            tempAreaRef.current = { ...area };
            drawOverlay();
            e.stopPropagation();
            return;
          }
        }
      }

      // 3. Start drawing a new redaction rectangle
      setSelectedAreaId(null);
      setIsDrawing(true);
      drawingStartRef.current = coords;
      tempAreaRef.current = {
        id: `redact-${Date.now()}`,
        type: 'rect',
        page: currentPage,
        x: coords.x,
        y: coords.y,
        width: 0,
        height: 0,
        pageWidth: coords.cssWidth,
        pageHeight: coords.cssHeight,
        style: activeStyle,
        color: activeColor,
        draftColor: activeDraftColor,
        blockSize: activeBlockSize,
        blurRadius: activeBlurRadius,
      };
    },
    [
      previewMode,
      getCanvasCoords,
      redactions,
      currentPage,
      selectedAreaId,
      checkResizeHandle,
      activeTool,
      brushWidth,
      activeStyle,
      activeColor,
      activeDraftColor,
      activeBlockSize,
      activeBlurRadius,
      drawOverlay,
    ]
  );

  // Mouse Move handler
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (previewMode) return;
      const coords = getCanvasCoords(e);
      if (!coords) return;

      setCursorPos({ x: coords.x, y: coords.y });

      // Handle drawing brush stroke
      if (isDrawing && activeTool === 'brush' && activeBrushPathRef.current.length > 0 && tempAreaRef.current) {
        const lastPt = activeBrushPathRef.current[activeBrushPathRef.current.length - 1];
        const dist = Math.hypot(coords.x - lastPt.x, coords.y - lastPt.y);
        if (dist >= 2) {
          activeBrushPathRef.current.push({ x: coords.x, y: coords.y });
          tempAreaRef.current.path = [...activeBrushPathRef.current];
          requestAnimationFrame(drawOverlay);
        }
        return;
      }

      // Handle dragging existing area
      if (isDraggingRef.current && dragStartPointRef.current && dragStartAreaRef.current) {
        const pw = dragStartAreaRef.current.pageWidth || coords.cssWidth;
        const ph = dragStartAreaRef.current.pageHeight || coords.cssHeight;
        const deltaX = coords.x - dragStartPointRef.current.x;
        const deltaY = coords.y - dragStartPointRef.current.y;
        const scaleX = pw / coords.cssWidth;
        const scaleY = ph / coords.cssHeight;

        if (dragStartAreaRef.current.type === 'brush' && dragStartAreaRef.current.path) {
          const shiftX = deltaX * scaleX;
          const shiftY = deltaY * scaleY;
          tempAreaRef.current = {
            ...dragStartAreaRef.current,
            x: Math.max(0, dragStartAreaRef.current.x + shiftX),
            y: Math.max(0, dragStartAreaRef.current.y + shiftY),
            path: dragStartAreaRef.current.path.map((pt) => ({
              x: Math.max(0, pt.x + shiftX),
              y: Math.max(0, pt.y + shiftY),
            })),
          };
        } else {
          tempAreaRef.current = {
            ...dragStartAreaRef.current,
            x: Math.max(0, dragStartAreaRef.current.x + deltaX * scaleX),
            y: Math.max(0, dragStartAreaRef.current.y + deltaY * scaleY),
          };
        }
        requestAnimationFrame(drawOverlay);
        return;
      }

      // Handle resizing existing area
      if (isResizingRef.current && dragStartPointRef.current && dragStartAreaRef.current && resizeHandleRef.current) {
        const pw = dragStartAreaRef.current.pageWidth || coords.cssWidth;
        const ph = dragStartAreaRef.current.pageHeight || coords.cssHeight;
        const deltaX = (coords.x - dragStartPointRef.current.x) * (pw / coords.cssWidth);
        const deltaY = (coords.y - dragStartPointRef.current.y) * (ph / coords.cssHeight);
        const handle = resizeHandleRef.current;
        const updated = { ...dragStartAreaRef.current };

        if (handle.includes('e')) updated.width = Math.max(10, dragStartAreaRef.current.width + deltaX);
        if (handle.includes('w')) {
          const newW = Math.max(10, dragStartAreaRef.current.width - deltaX);
          updated.x = dragStartAreaRef.current.x + (dragStartAreaRef.current.width - newW);
          updated.width = newW;
        }
        if (handle.includes('s')) updated.height = Math.max(10, dragStartAreaRef.current.height + deltaY);
        if (handle.includes('n')) {
          const newH = Math.max(10, dragStartAreaRef.current.height - deltaY);
          updated.y = dragStartAreaRef.current.y + (dragStartAreaRef.current.height - newH);
          updated.height = newH;
        }

        tempAreaRef.current = updated;
        requestAnimationFrame(drawOverlay);
        return;
      }

      // Handle drawing new rectangle area
      if (isDrawing && activeTool === 'rect' && drawingStartRef.current && tempAreaRef.current) {
        const startX = drawingStartRef.current.x;
        const startY = drawingStartRef.current.y;

        const left = Math.min(startX, coords.x);
        const top = Math.min(startY, coords.y);
        const width = Math.abs(coords.x - startX);
        const height = Math.abs(coords.y - startY);

        tempAreaRef.current = {
          ...tempAreaRef.current,
          x: left,
          y: top,
          width,
          height,
        };
        requestAnimationFrame(drawOverlay);
        return;
      }

      // If hovering in brush mode, redraw to update preview cursor circle
      if (activeTool === 'brush') {
        requestAnimationFrame(drawOverlay);
      }
    },
    [previewMode, getCanvasCoords, isDrawing, activeTool, drawOverlay]
  );

  // Mouse Up handler
  const handleMouseUp = useCallback(() => {
    if (previewMode) return;

    if (isDraggingRef.current && tempAreaRef.current && selectedAreaId) {
      isDraggingRef.current = false;
      const updatedArea = { ...tempAreaRef.current };
      tempAreaRef.current = null;

      setRedactions((prev) => {
        const pageList = prev[currentPage] || [];
        const nextList = pageList.map((a) => (a.id === selectedAreaId ? updatedArea : a));
        const next = { ...prev, [currentPage]: nextList };
        pushHistory(next);
        return next;
      });
      return;
    }

    if (isResizingRef.current && tempAreaRef.current && selectedAreaId) {
      isResizingRef.current = false;
      resizeHandleRef.current = null;
      const updatedArea = { ...tempAreaRef.current };
      tempAreaRef.current = null;

      setRedactions((prev) => {
        const pageList = prev[currentPage] || [];
        const nextList = pageList.map((a) => (a.id === selectedAreaId ? updatedArea : a));
        const next = { ...prev, [currentPage]: nextList };
        pushHistory(next);
        return next;
      });
      return;
    }

    if (isDrawing && activeTool === 'brush' && tempAreaRef.current) {
      setIsDrawing(false);
      const area = tempAreaRef.current;
      tempAreaRef.current = null;
      const pts = [...activeBrushPathRef.current];
      activeBrushPathRef.current = [];

      if (pts.length > 0) {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const p of pts) {
          if (p.x < minX) minX = p.x;
          if (p.x > maxX) maxX = p.x;
          if (p.y < minY) minY = p.y;
          if (p.y > maxY) maxY = p.y;
        }
        const radius = (area.strokeWidth || brushWidth) / 2;
        const left = Math.max(0, minX - radius);
        const top = Math.max(0, minY - radius);
        const width = Math.max(radius * 2, maxX - minX + radius * 2);
        const height = Math.max(radius * 2, maxY - minY + radius * 2);

        const finalizedArea: RedactionArea = {
          ...area,
          x: left,
          y: top,
          width,
          height,
          path: pts,
        };

        setRedactions((prev) => {
          const pageList = prev[currentPage] || [];
          const next = { ...prev, [currentPage]: [...pageList, finalizedArea] };
          pushHistory(next);
          return next;
        });
        setSelectedAreaId(finalizedArea.id || null);
      }
      return;
    }

    if (isDrawing && activeTool === 'rect' && tempAreaRef.current) {
      setIsDrawing(false);
      drawingStartRef.current = null;
      const area = tempAreaRef.current;
      tempAreaRef.current = null;

      // Filter out tiny clicks (< 8px)
      if (area.width > 8 && area.height > 8) {
        setRedactions((prev) => {
          const pageList = prev[currentPage] || [];
          const next = { ...prev, [currentPage]: [...pageList, area] };
          pushHistory(next);
          return next;
        });
        setSelectedAreaId(area.id || null);
      }
    }
  }, [previewMode, currentPage, selectedAreaId, isDrawing, activeTool, brushWidth, pushHistory]);

  // Remove selected area
  const handleRemoveSelected = useCallback(() => {
    if (!selectedAreaId) return;
    setRedactions((prev) => {
      const pageList = prev[currentPage] || [];
      const nextList = pageList.filter((a) => a.id !== selectedAreaId);
      const next = { ...prev, [currentPage]: nextList };
      pushHistory(next);
      return next;
    });
    setSelectedAreaId(null);
  }, [selectedAreaId, currentPage, pushHistory]);

  // Clear all areas on current page
  const handleClearCurrentPage = useCallback(() => {
    setRedactions((prev) => {
      const next = { ...prev, [currentPage]: [] };
      pushHistory(next);
      return next;
    });
    setSelectedAreaId(null);
  }, [currentPage, pushHistory]);

  // Clear all redactions across all pages
  const handleClearAll = useCallback(() => {
    const next = {};
    setRedactions(next);
    pushHistory(next);
    setSelectedAreaId(null);
  }, [pushHistory]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in an input/textarea/select
      const tagName = (e.target as HTMLElement)?.tagName;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tagName)) {
        return;
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedAreaId) {
          e.preventDefault();
          handleRemoveSelected();
        }
      } else if (e.key === 'z' && (e.ctrlKey || e.metaKey)) {
        if (e.shiftKey) {
          e.preventDefault();
          handleRedo();
        } else {
          e.preventDefault();
          handleUndo();
        }
      } else if (e.key === 'y' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handleRedo();
      } else if (e.key === 'Escape') {
        setSelectedAreaId(null);
      } else if (e.key === 'PageUp' || (e.key === 'ArrowLeft' && !selectedAreaId && !isDrawing)) {
        e.preventDefault();
        setCurrentPage((p) => Math.max(1, p - 1));
      } else if (e.key === 'PageDown' || (e.key === 'ArrowRight' && !selectedAreaId && !isDrawing)) {
        e.preventDefault();
        setCurrentPage((p) => Math.min(numPages, p + 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentPage(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentPage(numPages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAreaId, isDrawing, numPages, handleRemoveSelected, handleUndo, handleRedo]);

  // Process and download redacted PDF
  const handleProcess = useCallback(async () => {
    if (!file) return;

    try {
      setStatus('processing');
      setProgress(5);
      setProgressMessage('正在准备文档与安全选项...');
      setError(null);

      const options: RedactOptions = {
        flattenAllPages,
        stripMetadata,
        purgeAnnotations,
        renderScale,
        outputQuality: 0.95,
      };

      const resultBytes = await redactPDF(
        file,
        redactions,
        options,
        (pct, msg) => {
          setProgress(pct);
          setProgressMessage(msg);
        }
      );

      const outputBlob = new Blob([resultBytes as unknown as BlobPart], { type: 'application/pdf' });
      setResult(outputBlob);
      setStatus('complete');
      setProgress(100);
      setProgressMessage('脱敏完成，正在启动下载...');

      // Automatically trigger file download
      const downloadFilename = file.name
        ? `${file.name.replace(/\.pdf$/i, '')}_redacted.pdf`
        : 'redacted.pdf';
      await saveBlobFile(outputBlob, downloadFilename);
    } catch (err: any) {
      console.error('Redaction failed:', err);
      setError(err?.message || '处理脱敏 PDF 时出错');
      setStatus('error');
    }
  }, [file, redactions, flattenAllPages, stripMetadata, purgeAnnotations, renderScale]);

  return (
    <div className={`w-full max-w-7xl mx-auto p-4 space-y-6 ${className}`}>
      {/* Upload Screen */}
      {!file && (
        <Card className="p-8 text-center bg-card border border-border shadow-sm rounded-xl">
          <div className="max-w-xl mx-auto space-y-6">
            <FileUploader
              accept={['application/pdf', '.pdf']}
              maxFiles={1}
              onFilesSelected={handleFilesSelected}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 text-left border-t border-border">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/40">
                <Lock className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-foreground">不可逆物理销毁</div>
                  <div className="text-muted-foreground mt-0.5">彻底消灭底层文字与矢量流，杜绝复制或文本提取</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/40">
                <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-foreground">深度元数据擦除</div>
                  <div className="text-muted-foreground mt-0.5">清空作者、标题、创建日期及 XMP 扩展隐私指纹</div>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/40">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-foreground">100% 本地计算</div>
                  <div className="text-muted-foreground mt-0.5">文件无需上传至云端服务器，保障极致安全</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Editor Main Interface */}
      {file && (
        <div className="space-y-4">
          {/* Top Control Bar */}
          <Card className="p-3 sm:p-3.5 bg-card border border-border rounded-xl shadow-sm">
            {/* ROW 1: Tool Mode, Redaction Style & Main Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Left: Tools & Styles */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Tool Selector: Brush vs Rect */}
                <div className="flex items-center bg-muted/60 p-0.5 rounded-lg border border-border/80">
                  <Button
                    size="sm"
                    variant={activeTool === 'brush' ? 'primary' : 'ghost'}
                    onClick={() => setActiveTool('brush')}
                    className="gap-1.5 text-xs h-8 font-medium"
                    title="自由画笔涂抹模式"
                  >
                    <Paintbrush className="w-3.5 h-3.5" />
                    自由画笔
                  </Button>
                  <Button
                    size="sm"
                    variant={activeTool === 'rect' ? 'primary' : 'ghost'}
                    onClick={() => setActiveTool('rect')}
                    className="gap-1.5 text-xs h-8 font-medium"
                    title="矩形选区框选模式"
                  >
                    <Square className="w-3.5 h-3.5" />
                    矩形选区
                  </Button>
                </div>

                <div className="hidden sm:block h-5 w-px bg-border/80" />

                {/* Redaction Style Selector */}
                <div className="flex items-center bg-muted/60 p-0.5 rounded-lg border border-border/80">
                  <Button
                    size="sm"
                    variant={activeStyle === 'blackout' ? 'primary' : 'ghost'}
                    onClick={() => setActiveStyle('blackout')}
                    className="gap-1.5 text-xs h-8"
                  >
                    <span className="w-3 h-3 bg-black rounded-sm border border-neutral-600 inline-block" />
                    涂黑遮蔽
                  </Button>
                  <Button
                    size="sm"
                    variant={activeStyle === 'whiteout' ? 'primary' : 'ghost'}
                    onClick={() => setActiveStyle('whiteout')}
                    className="gap-1.5 text-xs h-8"
                  >
                    <span className="w-3 h-3 bg-white rounded-sm border border-neutral-400 inline-block" />
                    白条遮盖
                  </Button>
                  <Button
                    size="sm"
                    variant={activeStyle === 'mosaic' ? 'primary' : 'ghost'}
                    onClick={() => setActiveStyle('mosaic')}
                    className="gap-1.5 text-xs h-8"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    马赛克
                  </Button>
                  <Button
                    size="sm"
                    variant={activeStyle === 'blur' ? 'primary' : 'ghost'}
                    onClick={() => setActiveStyle('blur')}
                    className="gap-1.5 text-xs h-8"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    高斯模糊
                  </Button>
                </div>
              </div>

              {/* Right: Preview, History & Clear */}
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={previewMode ? 'primary' : 'outline'}
                  onClick={() => setPreviewMode(!previewMode)}
                  className="gap-1.5 text-xs h-8"
                >
                  {previewMode ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  {previewMode ? '正在实时预览' : '预览脱敏效果'}
                </Button>

                <div className="flex items-center border-l border-border pl-1.5 gap-0.5">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleUndo}
                    disabled={historyIndex <= 0}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                    title="撤销 (Ctrl+Z)"
                  >
                    <Undo2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleRedo}
                    disabled={historyIndex >= history.length - 1}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                    title="重做 (Ctrl+Y)"
                  >
                    <Redo2 className="w-4 h-4" />
                  </Button>
                </div>

                {selectedAreaId && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleRemoveSelected}
                    className="gap-1 text-xs text-destructive hover:bg-destructive/10 h-8 border-destructive/30"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    删除选中
                  </Button>
                )}

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleClearCurrentPage}
                  disabled={(redactions[currentPage] || []).length === 0}
                  className="text-xs text-muted-foreground hover:text-foreground h-8"
                >
                  清空本页
                </Button>
              </div>
            </div>

            {/* Subtle Divider */}
            <div className="border-t border-border/60 my-2.5" />

            {/* ROW 2: Contextual Parameters & Draft Color Picker */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Left: Dynamic Parameter Controls */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Brush Thickness Controls (when in Brush mode) */}
                {activeTool === 'brush' && (
                  <div className="flex items-center gap-2.5">
                    <span className="text-muted-foreground font-medium whitespace-nowrap">画笔粗细:</span>
                    <div className="flex items-center bg-muted/60 p-0.5 rounded-lg border border-border/70">
                      {[
                        { label: '细', size: 8 },
                        { label: '中', size: 16 },
                        { label: '粗', size: 28 },
                        { label: '特粗', size: 44 },
                      ].map((preset) => (
                        <button
                          key={preset.size}
                          type="button"
                          onClick={() => setBrushWidth(preset.size)}
                          className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                            brushWidth === preset.size
                              ? 'bg-background text-foreground shadow-xs font-bold'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <input
                        type="range"
                        min="4"
                        max="64"
                        step="2"
                        value={brushWidth}
                        onChange={(e) => setBrushWidth(Number(e.target.value))}
                        className="w-24 cursor-pointer accent-primary"
                        title="滑动调节画笔粗细"
                      />
                      <span className="font-mono text-xs font-semibold w-8 text-foreground">{brushWidth}px</span>

                      {/* Circle Preview */}
                      <div
                        className="flex items-center justify-center w-5 h-5 rounded bg-muted/80 border border-border/80"
                        title={`当前画笔粗细: ${brushWidth}px`}
                      >
                        <span
                          className="rounded-full bg-foreground inline-block"
                          style={{
                            width: Math.min(16, Math.max(3, brushWidth / 2.5)),
                            height: Math.min(16, Math.max(3, brushWidth / 2.5)),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Mosaic Block Size Slider */}
                {activeStyle === 'mosaic' && (
                  <div className={`flex items-center gap-2 ${activeTool === 'brush' ? 'pl-3 border-l border-border/70' : ''}`}>
                    <span className="text-muted-foreground font-medium whitespace-nowrap">马赛克颗粒:</span>
                    <input
                      type="range"
                      min="4"
                      max="24"
                      step="2"
                      value={activeBlockSize}
                      onChange={(e) => setActiveBlockSize(Number(e.target.value))}
                      className="w-20 cursor-pointer accent-primary"
                    />
                    <span className="font-mono text-xs font-semibold w-7 text-foreground">{activeBlockSize}px</span>
                  </div>
                )}

                {/* Blur Radius Slider */}
                {activeStyle === 'blur' && (
                  <div className={`flex items-center gap-2 ${activeTool === 'brush' ? 'pl-3 border-l border-border/70' : ''}`}>
                    <span className="text-muted-foreground font-medium whitespace-nowrap">模糊强度:</span>
                    <input
                      type="range"
                      min="2"
                      max="16"
                      step="1"
                      value={activeBlurRadius}
                      onChange={(e) => setActiveBlurRadius(Number(e.target.value))}
                      className="w-20 cursor-pointer accent-primary"
                    />
                    <span className="font-mono text-xs font-semibold w-7 text-foreground">{activeBlurRadius}px</span>
                  </div>
                )}

                {/* Hint for Rect mode without sliders */}
                {activeTool === 'rect' && activeStyle !== 'mosaic' && activeStyle !== 'blur' && (
                  <span className="text-muted-foreground text-[11px] flex items-center gap-1">
                    <span className="text-primary font-bold">💡</span>
                    <span>按住鼠标左键在页面拖拽可绘制矩形遮盖区，点击选区可拖动或通过手柄缩放。</span>
                  </span>
                )}
              </div>

              {/* Right: Draft Color Picker */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Palette className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>框选标色:</span>
                </span>
                <div className="flex items-center gap-1 bg-muted/40 px-2 py-1 rounded-lg border border-border/60">
                  {DRAFT_COLORS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setActiveDraftColor(c.id)}
                      className={`w-4 h-4 rounded-full border transition-all ${
                        activeDraftColor === c.id
                          ? 'ring-2 ring-primary ring-offset-1 scale-110 shadow-xs'
                          : 'opacity-70 hover:opacity-100 hover:scale-110'
                      }`}
                      style={{ backgroundColor: c.stroke }}
                      title={`${c.name} 标色`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Main Grid: Thumbnails/Security + Canvas Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start">
            {/* Left Sidebar: Page List & Security Settings */}
            <div className="space-y-4 lg:col-span-1">
              {/* 1. Page Navigator Card */}
              <Card className="p-3 bg-card border border-border rounded-xl space-y-2.5">
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-foreground">页面导航</span>
                    <span className="text-[11px] text-muted-foreground">({numPages} 页)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Filter Redacted Pages */}
                    <button
                      type="button"
                      onClick={() => setFilterRedactedOnly(!filterRedactedOnly)}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors flex items-center gap-1 ${
                        filterRedactedOnly
                          ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 font-semibold border border-rose-500/30'
                          : 'text-muted-foreground hover:text-foreground bg-muted/40 hover:bg-muted'
                      }`}
                      title="仅查看已有脱敏标记的页面"
                    >
                      <Shield className="w-3 h-3 text-rose-500" />
                      <span>已脱敏</span>
                      <span className="font-mono font-bold">({pagesWithRedactions.length})</span>
                    </button>

                    {/* Grid / List Switcher */}
                    <div className="flex items-center bg-muted/60 p-0.5 rounded border border-border">
                      <button
                        type="button"
                        onClick={() => setSidebarViewMode('grid')}
                        className={`p-1 rounded transition-colors ${
                          sidebarViewMode === 'grid'
                            ? 'bg-background text-foreground shadow-xs'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        title="网格视图（紧凑）"
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setSidebarViewMode('list')}
                        className={`p-1 rounded transition-colors ${
                          sidebarViewMode === 'list'
                            ? 'bg-background text-foreground shadow-xs'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        title="列表视图"
                      >
                        <List className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Page list scrollable container */}
                <div className="max-h-72 overflow-y-auto pr-1">
                  {displayedPages.length === 0 ? (
                    <div className="text-center py-6 text-xs text-muted-foreground">
                      暂无已脱敏页面
                    </div>
                  ) : sidebarViewMode === 'grid' ? (
                    /* Grid Mode: 4 columns of compact page chips */
                    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-1.5 p-0.5">
                      {displayedPages.map((p) => {
                        const count = (redactions[p] || []).length;
                        const isSelected = currentPage === p;
                        return (
                          <button
                            key={p}
                            ref={isSelected ? activePageButtonRef : null}
                            type="button"
                            onClick={() => setCurrentPage(p)}
                            className={`relative flex flex-col items-center justify-center h-10 rounded-lg text-xs font-mono transition-all ${
                              isSelected
                                ? 'bg-primary text-primary-foreground font-bold shadow-xs scale-105 z-10'
                                : 'bg-muted/40 hover:bg-muted text-foreground border border-border/50'
                            }`}
                          >
                            <span>{p}</span>
                            {count > 0 && (
                              <span
                                className={`absolute -top-1 -right-1 min-w-[15px] h-[15px] px-0.5 flex items-center justify-center rounded-full text-[9px] font-sans font-bold ${
                                  isSelected
                                    ? 'bg-rose-500 text-white shadow-xs'
                                    : 'bg-rose-500 text-white'
                                }`}
                                title={`第 ${p} 页有 ${count} 处脱敏`}
                              >
                                {count}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    /* List Mode */
                    <div className="space-y-1.5">
                      {displayedPages.map((p) => {
                        const count = (redactions[p] || []).length;
                        const isSelected = currentPage === p;
                        return (
                          <button
                            key={p}
                            ref={isSelected ? activePageButtonRef : null}
                            type="button"
                            onClick={() => setCurrentPage(p)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                              isSelected
                                ? 'bg-primary text-primary-foreground font-semibold'
                                : 'bg-muted/40 hover:bg-muted text-foreground'
                            }`}
                          >
                            <span>第 {p} 页</span>
                            {count > 0 && (
                              <span
                                className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                                  isSelected
                                    ? 'bg-primary-foreground/20 text-primary-foreground'
                                    : 'bg-rose-500/15 text-rose-500 font-semibold'
                                }`}
                              >
                                {count} 处脱敏
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </Card>

              {/* 2. Redaction Statistics & Action */}
              <Card className="p-4 bg-card border border-border rounded-xl space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">当前页面脱敏区:</span>
                  <span className="font-bold text-foreground">{(redactions[currentPage] || []).length} 处</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">全文档总脱敏区:</span>
                  <span className="font-bold text-primary">{totalRedactionsCount} 处</span>
                </div>

                {/* In-sidebar processing progress feedback */}
                {status === 'processing' && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground truncate max-w-[170px]">{progressMessage || '正在处理中...'}</span>
                      <span className="font-mono font-bold text-primary">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* In-sidebar error feedback */}
                {error && (
                  <div className="p-2.5 rounded-lg bg-destructive/10 border border-destructive/20 text-xs text-destructive flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">{error}</span>
                  </div>
                )}

                {/* In-sidebar success feedback */}
                {status === 'complete' && result && (
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>脱敏完成！已自动启动下载。</span>
                  </div>
                )}

                {/* Action buttons */}
                {status === 'complete' && result ? (
                  <div className="space-y-2">
                    <DownloadButton
                      file={result}
                      filename={file ? `${file.name.replace(/\.pdf$/i, '')}_redacted.pdf` : 'redacted.pdf'}
                      className="w-full gap-2 font-medium"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleProcess}
                      className="w-full text-xs text-muted-foreground"
                    >
                      重新生成脱敏 PDF
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleProcess}
                    disabled={status === 'processing' || totalRedactionsCount === 0}
                    className="w-full gap-2 font-medium"
                  >
                    {status === 'processing' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>正在生成 ({progress}%)...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>生成脱敏安全 PDF</span>
                      </>
                    )}
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  className="w-full text-xs text-muted-foreground hover:text-foreground"
                >
                  更换其他文件
                </Button>
              </Card>

              {/* 3. Security Configuration Panel */}
              <Card className="p-4 bg-card border border-border rounded-xl space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-border">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider">安全与隐私加固</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled={true}
                      className="mt-0.5 rounded border-muted-foreground accent-emerald-500"
                    />
                    <div>
                      <span className="font-semibold text-foreground">物理不可逆销毁 (必选)</span>
                      <p className="text-[11px] text-muted-foreground">脱敏区域以像素合并烧录，彻底清除底层文字与对象流</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={stripMetadata}
                      onChange={(e) => setStripMetadata(e.target.checked)}
                      className="mt-0.5 rounded border-muted-foreground accent-primary"
                    />
                    <div>
                      <span className="font-medium text-foreground">深度擦除元数据</span>
                      <p className="text-[11px] text-muted-foreground">清空作者、标题、修改日期及 XMP 扩展隐私指纹</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={purgeAnnotations}
                      onChange={(e) => setPurgeAnnotations(e.target.checked)}
                      className="mt-0.5 rounded border-muted-foreground accent-primary"
                    />
                    <div>
                      <span className="font-medium text-foreground">清除残留批注与脚本</span>
                      <p className="text-[11px] text-muted-foreground">移除浮动注释、AcroForm 脚本与潜在外链泄露</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={flattenAllPages}
                      onChange={(e) => setFlattenAllPages(e.target.checked)}
                      className="mt-0.5 rounded border-muted-foreground accent-primary"
                    />
                    <div>
                      <span className="font-medium text-foreground">全局统一栅格化</span>
                      <p className="text-[11px] text-muted-foreground">将未涂黑页面也全部光栅化（体积增大但安全最高）</p>
                    </div>
                  </label>
                </div>
              </Card>
            </div>

            {/* Right: Canvas Viewport & Navigation */}
            <div className="lg:col-span-3 space-y-3">
              {/* Viewport Toolbar */}
              <div className="flex flex-wrap items-center justify-between bg-muted/40 p-2 rounded-xl border border-border text-xs gap-2">
                {/* Page Navigation Dock */}
                <div className="flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage <= 1}
                    className="h-8 w-8 p-0"
                    title="第一页 (Home)"
                  >
                    <ChevronFirst className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage <= 1}
                    className="h-8 px-2 text-xs gap-1"
                    title="上一页 (PageUp / ←)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">上一页</span>
                  </Button>

                  <div className="flex items-center gap-1 px-2 py-0.5 bg-background rounded-lg border border-border shadow-xs">
                    <span className="text-muted-foreground text-xs">第</span>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleJumpPage();
                      }}
                      className="inline-flex"
                    >
                      <input
                        type="text"
                        value={jumpInput}
                        onChange={(e) => setJumpInput(e.target.value)}
                        onBlur={() => handleJumpPage()}
                        className="w-10 h-6 text-center font-mono font-bold text-xs bg-transparent focus:outline-none focus:bg-muted/50 rounded"
                        title="输入页码按 Enter 跳转"
                      />
                    </form>
                    <span className="text-muted-foreground text-xs">/ {numPages} 页</span>
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
                    disabled={currentPage >= numPages}
                    className="h-8 px-2 text-xs gap-1"
                    title="下一页 (PageDown / →)"
                  >
                    <span className="hidden sm:inline">下一页</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCurrentPage(numPages)}
                    disabled={currentPage >= numPages}
                    className="h-8 w-8 p-0"
                    title="最后一页 (End)"
                  >
                    <ChevronLast className="w-4 h-4" />
                  </Button>
                </div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setPageScale((s) => Math.max(0.6, Number((s - 0.2).toFixed(1))))}
                    className="h-8 w-8 p-0"
                    title="缩小"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="font-mono w-12 text-center text-xs">{Math.round(pageScale * 100)}%</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setPageScale((s) => Math.min(2.5, Number((s + 0.2).toFixed(1))))}
                    className="h-8 w-8 p-0"
                    title="放大"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setPageScale(1.0)}
                    className="h-8 px-2 text-xs"
                    title="原始尺寸 (100%)"
                  >
                    100%
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleFitWidth}
                    className="h-8 px-2 text-xs gap-1"
                    title="自适应页面宽度"
                  >
                    <Maximize className="w-3.5 h-3.5" />
                    自适应宽
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleFitPage}
                    className="h-8 px-2 text-xs gap-1"
                    title="自适应整页（显示完整页面）"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    自适应页
                  </Button>
                </div>
              </div>

              {/* Canvas Viewport Container with Side Hover Chevrons */}
              <div className="relative group">
                <div
                  ref={containerRef}
                  className="relative overflow-auto p-4 bg-muted/20 border border-border rounded-xl flex justify-center min-h-[520px] select-none"
                >
                  {isPageLoading && (
                    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-20 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        渲染页面中...
                      </div>
                    </div>
                  )}

                  <div className="relative shadow-md border border-border rounded overflow-hidden">
                    {/* Base PDF Render Canvas */}
                    <canvas ref={setBaseCanvas} className="block" />

                    {/* Interactive Redaction Overlay Canvas */}
                    <canvas
                      ref={overlayCanvasRef}
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={() => {
                        setCursorPos(null);
                        requestAnimationFrame(drawOverlay);
                      }}
                      className={`absolute inset-0 z-10 ${
                        previewMode ? 'cursor-default' : 'cursor-crosshair'
                      }`}
                    />
                  </div>
                </div>

                {/* Floating Previous & Next Page Chevrons */}
                {numPages > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage <= 1}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-background/85 hover:bg-background shadow-lg backdrop-blur border border-border text-foreground transition-all opacity-40 group-hover:opacity-90 hover:!opacity-100 disabled:opacity-0 disabled:pointer-events-none hover:scale-110 active:scale-95"
                      title="上一页 (PageUp / ←)"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
                      disabled={currentPage >= numPages}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-background/85 hover:bg-background shadow-lg backdrop-blur border border-border text-foreground transition-all opacity-40 group-hover:opacity-90 hover:!opacity-100 disabled:opacity-0 disabled:pointer-events-none hover:scale-110 active:scale-95"
                      title="下一页 (PageDown / →)"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Interaction Hint */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-muted-foreground px-2 gap-2">
                <div className="flex items-center gap-2">
                  <span>
                    {activeTool === 'brush'
                      ? '💡 提示：按住鼠标左键可直接在 PDF 上自由涂抹遮盖，松开鼠标完成绘制。'
                      : '💡 提示：按住鼠标左键拖拽可绘制脱敏选区，拖拽边缘手柄调整尺寸或拖动移动。'}
                  </span>
                  <span className="hidden sm:inline-block text-border">|</span>
                  <span className="hidden sm:inline">快捷键：<kbd className="px-1 py-0.5 rounded bg-muted font-mono text-[10px]">Del</kbd> 删除 / <kbd className="px-1 py-0.5 rounded bg-muted font-mono text-[10px]">Ctrl+Z</kbd> 撤销 / <kbd className="px-1 py-0.5 rounded bg-muted font-mono text-[10px]">PgUp/PgDn</kbd> 翻页</span>
                </div>
                <span className="font-medium">
                  当前模式：{previewMode ? '真实脱敏预览' : activeTool === 'brush' ? '自由画笔涂抹' : '选区标定编辑'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Processing Progress & Download */}
      {status === 'processing' && (
        <Card className="p-6 bg-card border border-border shadow-sm rounded-xl">
          <ProcessingProgress
            status={status}
            progress={progress}
            message={progressMessage}
          />
        </Card>
      )}

      {status === 'complete' && result && (
        <Card className="p-6 bg-card border border-border shadow-sm rounded-xl text-center space-y-4">
          <div className="inline-flex p-3 bg-emerald-500/10 text-emerald-500 rounded-full">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">PDF 脱敏处理已完成！</h3>
            <p className="text-xs text-muted-foreground">
              敏感信息已被物理像素级不可逆抹除，元数据与隐私指纹均已清除。
            </p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <DownloadButton
              file={result}
              filename={file ? `${file.name.replace(/\.pdf$/i, '')}_redacted.pdf` : 'redacted.pdf'}
              className="gap-2"
            />
            <Button variant="outline" onClick={() => setStatus('idle')}>
              继续编辑
            </Button>
          </div>
        </Card>
      )}

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-xl text-sm flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

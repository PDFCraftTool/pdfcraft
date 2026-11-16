'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
  replaceExistingText,
  type ReplaceExistingTextDiagnostics,
  type TextFitMode,
} from '@/lib/pdf/processors/replace-existing-text';
import { withBasePath } from '@/lib/utils/path';

export interface LegacyAnnotatorToolProps {
  className?: string;
  file?: File | null;
  onFileChange?: (file: File | null) => void;
  hideHeaderCard?: boolean;
  onClear?: () => void;
}

/**
 * LegacyAnnotatorTool Component
 * 
 * Provides PDF editing capabilities using PDF.js viewer with annotation support.
 * Users can add text, draw, highlight, and add images to PDFs.
 * The PDF.js viewer has built-in save functionality (export button in toolbar).
 */
export function LegacyAnnotatorTool({
  className = '',
  file: externalFile,
  onFileChange,
  hideHeaderCard = false,
  onClear,
}: LegacyAnnotatorToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.editPdf');
  
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const file = externalFile !== undefined ? externalFile : internalFile;

  const setFile = useCallback(
    (newFile: File | null) => {
      if (externalFile !== undefined) {
        onFileChange?.(newFile);
      } else {
        setInternalFile(newFile);
      }
    },
    [externalFile, onFileChange]
  );

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isTextReplacing, setIsTextReplacing] = useState(false);
  const [replacementNotice, setReplacementNotice] = useState<string | null>(null);
  const [replacementDiagnostics, setReplacementDiagnostics] =
    useState<ReplaceExistingTextDiagnostics | null>(null);
  const [textUndoCount, setTextUndoCount] = useState(0);
  const [textRedoCount, setTextRedoCount] = useState(0);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textUndoStackRef = useRef<File[]>([]);
  const textRedoStackRef = useRef<File[]>([]);

  // Sync external file prop changes
  useEffect(() => {
    if (externalFile) {
      setError(null);
      setReplacementNotice(null);
      setReplacementDiagnostics(null);
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(externalFile);
      });
    } else if (externalFile === null) {
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
    }
  }, [externalFile]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setReplacementNotice(null);
      setReplacementDiagnostics(null);
      textUndoStackRef.current = [];
      textRedoStackRef.current = [];
      setTextUndoCount(0);
      setTextRedoCount(0);
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(selectedFile);
      });
    }
  }, [setFile]);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfUrl]);

  const handleIframeLoad = useCallback(() => {
    setTimeout(() => {
      setIsEditorReady(true);
      
      try {
        const iframe = iframeRef.current;
        if (iframe?.contentDocument) {
          const doc = iframe.contentDocument;

          // 1. Hide native PDF.js download/save buttons
          const downloadBtn = doc.getElementById('download');
          const secondaryDownloadBtn = doc.getElementById('secondaryDownload');
          if (downloadBtn) downloadBtn.style.display = 'none';
          if (secondaryDownloadBtn) secondaryDownloadBtn.style.display = 'none';
          
          // 2. Hide save button from CustomToolbar (pdfjs-annotation-extension)
          const customToolbar = doc.querySelector('.CustomToolbar');
          if (customToolbar) {
            const buttons = customToolbar.querySelectorAll('li, button');
            buttons.forEach((btn: Element) => {
              const text = btn.textContent?.trim();
              if (text === '\u4fdd\u5b58' || text === 'Save') {
                (btn as HTMLElement).style.display = 'none';
              }
            });
          }          // 3. Inject PDFCraft Enrichment Script
          const patchScript = doc.createElement('script');
          patchScript.textContent = `
            (function() {
              console.log('[PDFCraft Patch] Initializing annotation patches...');

              let undoStack = [];
              let redoStack = [];
              let lastStateStr = '';
              let isDoingUndoRedo = false;

              const toolNameTranslations = {
                'cloud': '${t('editPdf.annCloud')}',
                'rectangle': '${t('editPdf.annRectangle')}',
                'circle': '${t('editPdf.annCircle')}',
                'arrow': '${t('editPdf.annArrow')}',
                'freehand': '${t('editPdf.annFreehand')}',
                'freeText': '${t('editPdf.annFreeText')}',
                'freeHighlight': '${t('editPdf.annFreeHighlight')}',
                'note': '${t('editPdf.annNote')}',
                'signature': '${t('editPdf.annSignature')}',
                'stamp': '${t('editPdf.annStamp')}'
              };

              const initInterval = setInterval(() => {
                const ext = window.pdfjsAnnotationExtensionInstance;
                if (ext) {
                  clearInterval(initInterval);
                  console.log('[PDFCraft Patch] pdfjsAnnotationExtensionInstance found! Setting up patches...');
                  setupCloudFix();
                  setupColorPickerAndStroke();
                  setupUndoRedoAndAuthorPatch();
                  setupSnapping();
                  setupArrowEndpointHandles();
                  setupChineseFontPatch();
                  setupExistingTextEditing();
                }
              }, 200);

              function setupExistingTextEditing() {
                if (document.getElementById('pdfcraft-edit-existing-text')) return;
                const toolbar = document.querySelector('.CustomToolbar ul.buttons');
                if (!toolbar) return;

                const parentLang = window.parent?.document?.documentElement?.lang || 'en';
                const parentLocale = window.parent?.location?.pathname?.split('/')[1] || parentLang;
                const isSpanish = parentLocale.toLowerCase().startsWith('es');
                const labels = isSpanish
                  ? {
                      tool: 'Editar texto',
                      heading: 'Editar texto existente',
                      original: 'Texto original',
                      replacement: 'Texto nuevo',
                      apply: 'Aplicar',
                      confirm: 'Confirmar cambio',
                      cancel: 'Cancelar',
                      hint: 'Haz clic sobre un bloque de texto del PDF',
                      overflow: 'El texto nuevo no cabe en el área original.',
                      fit: 'Si no cabe',
                      preserve: 'Mantener tamaño',
                      shrink: 'Reducir para encajar',
                      expand: 'Ampliar el área',
                      signature: 'Editar el contenido invalida las firmas digitales existentes.'
                    }
                  : {
                      tool: 'Edit text',
                      heading: 'Edit existing text',
                      original: 'Original text',
                      replacement: 'New text',
                      apply: 'Apply',
                      confirm: 'Confirm change',
                      cancel: 'Cancel',
                      hint: 'Click a text block in the PDF',
                      overflow: 'The new text does not fit in the original area.',
                      fit: 'If it does not fit',
                      preserve: 'Keep original size',
                      shrink: 'Shrink to fit',
                      expand: 'Expand the area',
                      signature: 'Editing content invalidates existing digital signatures.'
                    };

                const item = document.createElement('li');
                item.id = 'pdfcraft-edit-existing-text';
                item.title = labels.tool;
                item.innerHTML =
                  '<div class="icon"><span role="img" aria-label="' + labels.tool + '"' +
                  ' style="font-size:18px;font-weight:700;line-height:1">T✎</span></div>' +
                  '<div class="name">' + labels.tool + '</div>';

                const selectItem = toolbar.querySelector('li[title="Select"]');
                if (selectItem?.nextSibling) {
                  toolbar.insertBefore(item, selectItem.nextSibling);
                } else {
                  toolbar.insertBefore(item, toolbar.firstChild);
                }

                const style = document.createElement('style');
                style.id = 'pdfcraft-existing-text-styles';
                style.textContent = \`
                  body.pdfcraft-text-edit-mode .textLayer { pointer-events: auto !important; }
                  body.pdfcraft-text-edit-mode .textLayer span {
                    cursor: text !important;
                    pointer-events: auto !important;
                    border-radius: 2px;
                    transition: outline-color .12s, background .12s;
                  }
                  body.pdfcraft-text-edit-mode .textLayer span:hover {
                    outline: 2px solid #2563eb !important;
                    background: rgba(37, 99, 235, .14) !important;
                  }
                  #pdfcraft-edit-existing-text.pdfcraft-active {
                    background: rgba(37, 99, 235, .18) !important;
                    color: #2563eb !important;
                  }
                  #pdfcraft-text-edit-hint {
                    position: fixed; left: 50%; top: 74px; transform: translateX(-50%);
                    z-index: 100000; padding: 7px 12px; border-radius: 999px;
                    color: white; background: #1d4ed8; box-shadow: 0 5px 18px rgba(0,0,0,.2);
                    font: 500 12px/1.2 system-ui, sans-serif; pointer-events: none;
                  }
                  #pdfcraft-text-edit-popover {
                    position: fixed; z-index: 100001; width: min(380px, calc(100vw - 24px));
                    padding: 14px; border: 1px solid #cbd5e1; border-radius: 10px;
                    background: white; color: #0f172a; box-shadow: 0 16px 40px rgba(15,23,42,.28);
                    font: 13px/1.4 system-ui, sans-serif;
                  }
                  #pdfcraft-text-edit-popover textarea {
                    box-sizing: border-box; width: 100%; min-height: 62px; resize: vertical;
                    margin-top: 4px; padding: 8px; border: 1px solid #94a3b8; border-radius: 6px;
                    color: #0f172a; background: white; font: inherit;
                  }
                  #pdfcraft-text-edit-popover .pdfcraft-actions {
                    display: flex; justify-content: flex-end; gap: 8px; margin-top: 10px;
                  }
                  #pdfcraft-text-edit-popover button {
                    padding: 6px 11px; border: 1px solid #94a3b8; border-radius: 6px;
                    cursor: pointer; background: white; color: #0f172a; font: inherit;
                  }
                  #pdfcraft-text-edit-popover button[data-action="apply"] {
                    border-color: #2563eb; background: #2563eb; color: white;
                  }
                  #pdfcraft-text-edit-popover .pdfcraft-overflow {
                    display: none; margin-top: 8px; padding: 7px 8px; border-radius: 6px;
                    color: #92400e; background: #fffbeb; border: 1px solid #fde68a;
                  }
                  #pdfcraft-text-edit-popover select {
                    box-sizing: border-box; width: 100%; margin-top: 4px; padding: 7px;
                    border: 1px solid #94a3b8; border-radius: 6px; background: white;
                  }
                  .pdfcraft-live-text-preview {
                    outline: 2px dashed #16a34a !important;
                    background: rgba(22, 163, 74, .10) !important;
                  }
                \`;
                document.head.appendChild(style);

                let active = false;
                let popover = null;
                let previewSpan = null;
                let previewOriginalText = '';

                function restorePreview() {
                  if (previewSpan) {
                    previewSpan.textContent = previewOriginalText;
                    previewSpan.classList.remove('pdfcraft-live-text-preview');
                  }
                  previewSpan = null;
                  previewOriginalText = '';
                }

                function closePopover(restore = true) {
                  if (restore) restorePreview();
                  if (popover) popover.remove();
                  popover = null;
                }

                function setActive(nextActive) {
                  active = nextActive;
                  document.body.classList.toggle('pdfcraft-text-edit-mode', active);
                  item.classList.toggle('pdfcraft-active', active);
                  closePopover();

                  document.getElementById('pdfcraft-text-edit-hint')?.remove();
                  if (active) {
                    const hint = document.createElement('div');
                    hint.id = 'pdfcraft-text-edit-hint';
                    hint.textContent = labels.hint;
                    document.body.appendChild(hint);
                  }
                }

                item.addEventListener('click', function(event) {
                  event.preventDefault();
                  event.stopPropagation();
                  setActive(!active);
                });

                document.addEventListener('keydown', function(event) {
                  if (event.key === 'Escape' && (active || popover)) {
                    if (popover) closePopover();
                    else setActive(false);
                  }
                });

                document.addEventListener('click', async function(event) {
                  if (!active) return;
                  const target = event.target;
                  if (!(target instanceof HTMLElement)) return;
                  const span = target.closest('.textLayer span');
                  if (!span || !span.textContent?.trim()) return;

                  event.preventDefault();
                  event.stopPropagation();

                  const pageElement = span.closest('.page');
                  const pageNumber = Number(pageElement?.getAttribute('data-page-number'));
                  const app = window.PDFViewerApplication;
                  const pageView = app?.pdfViewer?.getPageView(pageNumber - 1);
                  const pdfPage = pageView?.pdfPage;
                  if (!pageElement || !pageNumber || !pdfPage) return;

                  const viewport = pdfPage.getViewport({ scale: 1 });
                  const pageRect = pageElement.getBoundingClientRect();
                  const textRect = span.getBoundingClientRect();
                  const originalWidth = textRect.width;
                  const originalHeight = textRect.height;
                  const x = (textRect.left - pageRect.left) / pageRect.width * viewport.width;
                  const top = (textRect.top - pageRect.top) / pageRect.height * viewport.height;
                  const width = textRect.width / pageRect.width * viewport.width;
                  const height = textRect.height / pageRect.height * viewport.height;
                  const y = viewport.height - top - height;

                  closePopover();
                  previewSpan = span;
                  previewOriginalText = span.textContent;
                  popover = document.createElement('div');
                  popover.id = 'pdfcraft-text-edit-popover';
                  popover.innerHTML =
                    '<strong>' + labels.heading + '</strong>' +
                    '<div style="margin-top:8px;color:#64748b">' + labels.original + '</div>' +
                    '<div style="max-height:48px;overflow:auto">' +
                      span.textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;') +
                    '</div>' +
                    '<label style="display:block;margin-top:8px">' + labels.replacement +
                      '<textarea></textarea>' +
                    '</label>' +
                    '<div class="pdfcraft-overflow" role="status">' + labels.overflow + '</div>' +
                    '<label style="display:block;margin-top:8px">' + labels.fit +
                      '<select data-fit-mode>' +
                        '<option value="preserve">' + labels.preserve + '</option>' +
                        '<option value="shrink">' + labels.shrink + '</option>' +
                        '<option value="expand">' + labels.expand + '</option>' +
                      '</select>' +
                    '</label>' +
                    '<div style="margin-top:8px;color:#92400e;font-size:11px">' + labels.signature + '</div>' +
                    '<div class="pdfcraft-actions">' +
                      '<button type="button" data-action="cancel">' + labels.cancel + '</button>' +
                      '<button type="button" data-action="apply">' + labels.apply + '</button>' +
                    '</div>';

                  const left = Math.min(Math.max(12, textRect.left), window.innerWidth - 392);
                  const topPosition = Math.min(
                    window.innerHeight - 245,
                    Math.max(90, textRect.bottom + 8)
                  );
                  popover.style.left = left + 'px';
                  popover.style.top = topPosition + 'px';
                  document.body.appendChild(popover);

                  const textarea = popover.querySelector('textarea');
                  textarea.value = span.textContent;
                  textarea.focus();
                  textarea.select();
                  const overflowNotice = popover.querySelector('.pdfcraft-overflow');

                  function updatePreview() {
                    span.textContent = textarea.value;
                    span.classList.add('pdfcraft-live-text-preview');
                    const previewRect = span.getBoundingClientRect();
                    const lineCount = Math.max(1, textarea.value.split(/\\r?\\n/).length);
                    const overflow = previewRect.width > originalWidth + 1 ||
                      lineCount * originalHeight > originalHeight + 1;
                    overflowNotice.style.display = overflow ? 'block' : 'none';
                  }
                  textarea.addEventListener('input', updatePreview);
                  updatePreview();

                  popover.querySelector('[data-action="cancel"]').addEventListener('click', closePopover);
                  popover.querySelector('[data-action="apply"]').addEventListener('click', function() {
                    const newText = textarea.value;
                    if (newText === previewOriginalText) {
                      closePopover();
                      return;
                    }

                    const applyButton = popover.querySelector('[data-action="apply"]');
                    applyButton.disabled = true;
                    applyButton.textContent = '…';
                    window.parent.postMessage({
                      type: 'pdfcraft:replace-existing-text',
                      payload: {
                        page: pageNumber,
                        text: previewOriginalText,
                        replacementText: newText,
                        fitMode: popover.querySelector('[data-fit-mode]').value,
                        x, y, width, height
                      }
                    }, window.location.origin);
                    closePopover(false);
                  });
                }, true);
              }

              function setupSnapping() {
                const ext = window.pdfjsAnnotationExtensionInstance;
                const stage = ext?.stage || ext?.konvaStage || (window.Konva && window.Konva.stages[0]);
                if (!stage) return;
                
                console.log('[PDFCraft Patch] Setting up Konva Snapping Alignment...');
                
                stage.on('dragmove', function(e) {
                  const activeShape = e.target;
                  if (!activeShape || activeShape === stage) return;
                  
                  const shapes = stage.find('.annotation') || stage.find('Group') || stage.getChildren();
                  const snapOffset = 8;
                  let snapX = null;
                  let snapY = null;
                  
                  const activeBox = activeShape.getClientRect();
                  if (!activeBox) return;

                  shapes.forEach(shape => {
                    if (shape === activeShape || shape.name() === 'guideline') return;
                    const box = shape.getClientRect();
                    if (!box) return;
                    
                    // X-axis alignment
                    if (Math.abs(activeBox.x - box.x) < snapOffset) snapX = box.x;
                    if (Math.abs((activeBox.x + activeBox.width/2) - (box.x + box.width/2)) < snapOffset) {
                      snapX = box.x + box.width/2 - activeBox.width/2;
                    }
                    if (Math.abs((activeBox.x + activeBox.width) - (box.x + box.width)) < snapOffset) {
                      snapX = box.x + box.width - activeBox.width;
                    }
                    
                    // Y-axis alignment
                    if (Math.abs(activeBox.y - box.y) < snapOffset) snapY = box.y;
                    if (Math.abs((activeBox.y + activeBox.height/2) - (box.y + box.height/2)) < snapOffset) {
                      snapY = box.y + box.height/2 - activeBox.height/2;
                    }
                    if (Math.abs((activeBox.y + activeBox.height) - (box.y + box.height)) < snapOffset) {
                      snapY = box.y + box.height - activeBox.height;
                    }
                  });
                  
                  // Snap coordinates
                  if (snapX !== null) activeShape.x(snapX);
                  if (snapY !== null) activeShape.y(snapY);
                  
                  // Render red guide dashed lines as DOM overlays
                  drawGuides(stage, snapX, snapY);
                });
                
                stage.on('dragend', function() {
                  clearGuides();
                });
                
                function drawGuides(stg, sx, sy) {
                  let container = document.getElementById('pdfcraft-alignment-guides');
                  if (!container) {
                    container = document.createElement('div');
                    container.id = 'pdfcraft-alignment-guides';
                    container.style.cssText = 'position:absolute; inset:0; pointer-events:none; z-index:99999;';
                    stg.container().appendChild(container);
                  }
                  container.innerHTML = '';
                  
                  if (sx !== null) {
                    const l = document.createElement('div');
                    l.style.cssText = 'position:absolute; left:' + sx + 'px; top:0; bottom:0; border-left:1.5px dashed red;';
                    container.appendChild(l);
                  }
                  if (sy !== null) {
                    const l = document.createElement('div');
                    l.style.cssText = 'position:absolute; top:' + sy + 'px; left:0; right:0; border-top:1.5px dashed red;';
                    container.appendChild(l);
                  }
                }
                
                function clearGuides() {
                  const container = document.getElementById('pdfcraft-alignment-guides');
                  if (container) container.innerHTML = '';
                }
              }

              // Arrows get a draggable handle at the base and at the tip instead of the generic
              // resize box, so dragging an end re-aims and stretches the arrow without scaling
              // the arrowhead. Dragging the arrow body still moves the whole arrow.
              function setupArrowEndpointHandles() {
                const Konva = window.Konva;
                if (!Konva || !Konva.Transformer) return;
                const proto = Konva.Transformer.prototype;
                if (proto.__pdfcraftArrowHandlesPatched) return;
                proto.__pdfcraftArrowHandlesPatched = true;

                console.log('[PDFCraft Patch] Setting up arrow endpoint handles...');

                const HANDLE_RADIUS = 6;
                const HANDLE_HIT_RADIUS = 10;
                const HANDLE_NS = '.pdfcraftArrowHandles';
                const originalSetNodes = proto.setNodes;
                const originalDetach = proto.detach;

                proto.setNodes = function(nodes) {
                  const result = originalSetNodes.apply(this, arguments);
                  const group = nodes && nodes.length === 1 ? nodes[0] : null;
                  const arrow = group ? getArrowShape(group) : null;
                  if (arrow) {
                    // Hide the resize box but keep its bounds, which position the annotation menu
                    this.resizeEnabled(false);
                    this.borderStrokeWidth(0);
                    // The extension adds the transformer to its layer right after setting its nodes
                    const transformer = this;
                    Promise.resolve().then(function() {
                      if (transformer.nodes()[0] === group) attachHandles(transformer, group, arrow);
                    });
                  }
                  return result;
                };

                proto.detach = function() {
                  removeHandles(this);
                  return originalDetach.apply(this, arguments);
                };

                // The comment pane's connector line ends at the right edge of the (now hidden) box,
                // which misses slanted arrows. Point it at the arrow's midpoint instead.
                const ext = window.pdfjsAnnotationExtensionInstance;
                const connectorLine = ext && (ext._connectorLine || ext.connectorLine);
                const connectorProto = connectorLine && Object.getPrototypeOf(connectorLine);
                if (connectorProto && typeof connectorProto.drawConnection === 'function') {
                  const originalDrawConnection = connectorProto.drawConnection;
                  connectorProto.drawConnection = function(annotation, rect) {
                    const midpoint = annotation && annotation.subtype === 'Arrow' ? getArrowMidpoint(annotation) : null;
                    const target = midpoint ? { x: midpoint.x, y: midpoint.y, width: 0, height: 0 } : rect;
                    return originalDrawConnection.call(this, annotation, target);
                  };
                }

                function getArrowMidpoint(annotation) {
                  const canvas = ext.painter && ext.painter.konvaCanvasStore && ext.painter.konvaCanvasStore.get(annotation.pageNumber);
                  const group = canvas && canvas.konvaStage.findOne(function(node) {
                    return node.id() === annotation.id;
                  });
                  const arrow = group ? getArrowShape(group) : null;
                  if (!arrow) return null;
                  const points = arrow.points();
                  return arrow.getAbsoluteTransform().point({
                    x: (points[0] + points[2]) / 2,
                    y: (points[1] + points[3]) / 2
                  });
                }

                function getArrowShape(group) {
                  if (typeof group.getChildren !== 'function') return null;
                  const children = group.getChildren();
                  return children.length === 1 && children[0].getClassName() === 'Arrow' ? children[0] : null;
                }

                // Arrows resized by the old resize box store the stretch as group scale, which also
                // enlarges the arrowhead. Fold it into the points so the head returns to normal size.
                function bakeGroupScale(group, arrow) {
                  const scaleX = group.scaleX();
                  const scaleY = group.scaleY();
                  if (scaleX === 1 && scaleY === 1) return;
                  arrow.points(arrow.points().map(function(value, i) {
                    return value * (i % 2 === 0 ? scaleX : scaleY);
                  }));
                  group.scale({ x: 1, y: 1 });
                }

                function attachHandles(transformer, group, arrow) {
                  const layer = transformer.getLayer();
                  const stage = transformer.getStage();
                  if (!layer || !stage) return;

                  // Draw at a constant on-screen size regardless of the page zoom
                  function drawCircle(radius) {
                    return function(ctx, shape) {
                      const scale = Math.abs(shape.getAbsoluteScale().x) || 1;
                      ctx.beginPath();
                      ctx.arc(0, 0, radius / scale, 0, Math.PI * 2);
                      ctx.closePath();
                      ctx.fillStrokeShape(shape);
                    };
                  }

                  const handles = [0, 1].map(function(index) {
                    const handle = new Konva.Shape({
                      name: 'pdfcraft-arrow-handle',
                      draggable: true,
                      fill: '#ffffff',
                      stroke: transformer.anchorStroke(),
                      strokeWidth: 2,
                      strokeScaleEnabled: false,
                      sceneFunc: drawCircle(HANDLE_RADIUS),
                      hitFunc: drawCircle(HANDLE_HIT_RADIUS),
                      dragBoundFunc: function(pos) {
                        return {
                          x: Math.max(0, Math.min(stage.width(), pos.x)),
                          y: Math.max(0, Math.min(stage.height(), pos.y))
                        };
                      }
                    });

                    // Keep handle presses away from the page, where a drawing tool or deselection could react
                    handle.on('mousedown touchstart pointerdown mouseup touchend pointerup click tap pointerclick', function(e) {
                      e.cancelBubble = true;
                    });
                    handle.on('mouseenter', function() {
                      stage.container().style.cursor = 'move';
                    });
                    handle.on('mouseleave', function() {
                      stage.container().style.cursor = '';
                    });
                    handle.on('dragstart', function(e) {
                      e.cancelBubble = true;
                      bakeGroupScale(group, arrow);
                      // Same notifications as the resize box, so the extension hides and re-shows its menu
                      transformer.fire('transformstart');
                    });
                    handle.on('dragmove', function(e) {
                      e.cancelBubble = true;
                      const local = arrow.getAbsoluteTransform().copy().invert().point(handle.getAbsolutePosition());
                      const points = arrow.points().slice();
                      points[index * 2] = local.x;
                      points[index * 2 + 1] = local.y;
                      arrow.points(points);
                      transformer.forceUpdate();
                    });
                    handle.on('dragend', function(e) {
                      e.cancelBubble = true;
                      // The extension saves the arrow's new points to its store on transformend
                      transformer.fire('transformend');
                    });

                    layer.add(handle);
                    return handle;
                  });

                  function syncHandles() {
                    const transform = arrow.getAbsoluteTransform();
                    const points = arrow.points();
                    handles.forEach(function(handle, index) {
                      if (handle.isDragging()) return;
                      handle.setAbsolutePosition(transform.point({ x: points[index * 2], y: points[index * 2 + 1] }));
                    });
                  }

                  syncHandles();
                  group.on('dragmove' + HANDLE_NS + ' dragend' + HANDLE_NS, syncHandles);
                  transformer.on('dragmove' + HANDLE_NS + ' dragend' + HANDLE_NS, syncHandles);
                  transformer.__pdfcraftArrowHandles = { group: group, handles: handles, stage: stage };
                  layer.batchDraw();
                }

                function removeHandles(transformer) {
                  const state = transformer.__pdfcraftArrowHandles;
                  if (!state) return;
                  transformer.__pdfcraftArrowHandles = null;
                  state.group.off(HANDLE_NS);
                  transformer.off(HANDLE_NS);
                  state.handles.forEach(function(handle) {
                    handle.destroy();
                  });
                  state.stage.container().style.cursor = '';
                }
              }

              function setupChineseFontPatch() {
                const ext = window.pdfjsAnnotationExtensionInstance;
                const pdfLib = window.pdfLib || ext?.pdfLib;
                if (!pdfLib) return;

                const originalSave = pdfLib.PDFDocument.prototype.save;
                pdfLib.PDFDocument.prototype.save = async function(saveOptions) {
                  console.log('[PDFCraft Patch] Intercepting save to inspect for Chinese text...');
                  
                  let hasChinese = false;
                  
                  // Inspect the annotation store inside PDFJS Annotation Extension
                  const annotationExtension = window.pdfjsAnnotationExtensionInstance;
                  const store = typeof annotationExtension?.getAnnotationStore === 'function'
                    ? annotationExtension.getAnnotationStore()
                    : null;
                  if (store && store.annotations) {
                    store.annotations.forEach(ann => {
                      if (ann.name === 'freeText' && /[\u4e00-\u9fa5]/.test(ann.text || '')) {
                        hasChinese = true;
                      }
                    });
                  }

                  if (hasChinese) {
                    try {
                      console.log('[PDFCraft Patch] Chinese text found. Embedding NotoSansSC-Regular font...');
                      const fontBytes = await fetch('/fonts/NotoSansSC-Regular.ttf').then(res => res.arrayBuffer());
                      const customFont = await this.embedFont(fontBytes, { subset: true });
                      
                      // Intercept subsequent font loading requests for Helvetica inside pdf-lib
                      const originalEmbedFont = this.embedFont;
                      this.embedFont = async function(fontToEmbed, embedOpts) {
                        if (fontToEmbed === pdfLib.StandardFonts.Helvetica || fontToEmbed === 'Helvetica') {
                          console.log('[PDFCraft Patch] Redirected Helvetica embed to NotoSansSC font');
                          return customFont;
                        }
                        return originalEmbedFont.call(this, fontToEmbed, embedOpts);
                      };
                    } catch (e) {
                      console.error('[PDFCraft Patch] Failed to embed Chinese font subset', e);
                    }
                  }

                  return originalSave.call(this, saveOptions);
                };
              }

              function setupCloudFix() {
                // Ensure double-click bypasses text layer blocking to complete drawing
                document.addEventListener('dblclick', function(e) {
                  const ext = window.pdfjsAnnotationExtensionInstance;
                  const activeTool = ext?.activeAnnotation?.name;
                  if (activeTool === 'cloud') {
                    const konvaContent = document.querySelector('.konvajs-content');
                    if (konvaContent) {
                      console.log('[PDFCraft Patch] Intercepted dblclick for cloud tool, dispatching to Konva stage.');
                      const dblEvent = new MouseEvent('dblclick', {
                        bubbles: true,
                        cancelable: true,
                        view: window,
                        clientX: e.clientX,
                        clientY: e.clientY
                      });
                      konvaContent.dispatchEvent(dblEvent);
                    }
                  }
                }, true);

                // Add Enter key support to elegantly complete and close polygon drawing
                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Enter') {
                    const ext = window.pdfjsAnnotationExtensionInstance;
                    const activeTool = ext?.activeAnnotation?.name;
                    if (activeTool === 'cloud') {
                      const konvaContent = document.querySelector('.konvajs-content');
                      if (konvaContent) {
                        console.log('[PDFCraft Patch] Intercepted Enter key for cloud tool, dispatching dblclick to end drawing.');
                        const dblEvent = new MouseEvent('dblclick', {
                          bubbles: true,
                          cancelable: true,
                          view: window
                        });
                        konvaContent.dispatchEvent(dblEvent);
                      }
                    }
                  }
                });
              }

              function setupColorPickerAndStroke() {
                // Inject picker for Highlight tool
                const hlColorPicker = document.getElementById('editorHighlightColorPicker');
                if (hlColorPicker) {
                  if (!hlColorPicker.querySelector('.pdfcraft-custom-hl-picker')) {
                    const picker = document.createElement('input');
                    picker.type = 'color';
                    picker.className = 'pdfcraft-custom-hl-picker';
                    picker.style.cssText = 'width:28px; height:28px; border:2px solid #ccc; border-radius:50%; padding:0; cursor:pointer; margin-left:8px; vertical-align:middle; background:none;';
                    
                    picker.addEventListener('input', function(e) {
                      const ext = window.pdfjsAnnotationExtensionInstance;
                      const selected = ext?.selectedAnnotation;
                      if (selected) {
                        ext.updateAnnotationStyle(selected, { color: e.target.value });
                      }
                    });
                    hlColorPicker.appendChild(picker);
                  }
                }

                // Dynamically observe CustomAnnotationMenu popups to inject controls
                const observer = new MutationObserver(function() {
                  const menu = document.querySelector('.CustomAnnotationMenu');
                  if (menu && menu.style.display !== 'none') {
                    injectCustomMenuControls(menu);
                  }
                });

                observer.observe(document.body, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['style', 'class']
                });
              }

              function injectCustomMenuControls(menu) {
                if (menu.querySelector('.pdfcraft-custom-controls')) return;

                console.log('[PDFCraft Patch] CustomAnnotationMenu opened, injecting custom controls...');

                const container = document.createElement('div');
                container.className = 'pdfcraft-custom-controls';
                container.style.cssText = 'border-top:1px solid #ccc; margin-top:8px; padding-top:8px; font-size:12px; display:flex; flex-direction:column; gap:8px; color:var(--toolbar-fg-color, #333);';

                const ext = window.pdfjsAnnotationExtensionInstance;
                const selected = ext?.selectedAnnotation;
                if (!selected) return;

                // 1. Custom Stroke Color Picker
                const colorRow = document.createElement('div');
                colorRow.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:8px;';
                
                const colorLabel = document.createElement('span');
                {t('editPdf.strokeColorLabel')}
                
                const colorPicker = document.createElement('input');
                colorPicker.type = 'color';
                colorPicker.style.cssText = 'width:50px; height:24px; border:1px solid #ccc; border-radius:4px; padding:0; cursor:pointer;';
                colorPicker.value = selected.style?.color || '#ff0000';

                colorPicker.addEventListener('change', function(e) {
                  const curSelected = window.pdfjsAnnotationExtensionInstance?.selectedAnnotation;
                  if (curSelected) {
                    window.pdfjsAnnotationExtensionInstance.updateAnnotationStyle(curSelected, { color: e.target.value });
                  }
                });

                colorRow.appendChild(colorLabel);
                colorRow.appendChild(colorPicker);
                container.appendChild(colorRow);

                // 2. Allow stroke width of 0 by adjusting native slider min
                const nativeSliders = menu.querySelectorAll('input[type="range"]');
                nativeSliders.forEach(slider => {
                  if (slider.getAttribute('min') === '1') {
                    slider.setAttribute('min', '0');
                    console.log('[PDFCraft Patch] Stroke width slider updated min to 0');
                  }
                });

                // 3. Shape Fill support (Rectangle, Circle, Cloud)
                const allowedFillTools = ['rectangle', 'circle', 'cloud'];
                if (allowedFillTools.includes(selected.name)) {
                  const fillRow = document.createElement('div');
                  fillRow.style.cssText = 'display:flex; align-items:center; justify-content:space-between; gap:8px;';
                  
                  const leftPart = document.createElement('div');
                  leftPart.style.cssText = 'display:flex; align-items:center; gap:6px;';
                  
                  const fillCheckbox = document.createElement('input');
                  fillCheckbox.type = 'checkbox';
                  fillCheckbox.id = 'pdfcraft-fill-enabled';
                  fillCheckbox.style.cssText = 'cursor:pointer;';
                  fillCheckbox.checked = selected.style?.fillEnabled || false;
                  
                  const fillLabel = document.createElement('label');
                  fillLabel.htmlFor = 'pdfcraft-fill-enabled';
                  {t('editPdf.fillColorLabel')}
                  fillLabel.style.cssText = 'cursor:pointer; user-select:none;';

                  leftPart.appendChild(fillCheckbox);
                  leftPart.appendChild(fillLabel);

                  const fillColorPicker = document.createElement('input');
                  fillColorPicker.type = 'color';
                  fillColorPicker.style.cssText = 'width:50px; height:24px; border:1px solid #ccc; border-radius:4px; padding:0; cursor:pointer;';
                  fillColorPicker.value = selected.style?.fillColor || '#ffffff';
                  fillColorPicker.disabled = !fillCheckbox.checked;

                  fillCheckbox.addEventListener('change', function(e) {
                    fillColorPicker.disabled = !e.target.checked;
                    const curSelected = window.pdfjsAnnotationExtensionInstance?.selectedAnnotation;
                    if (curSelected) {
                      window.pdfjsAnnotationExtensionInstance.updateAnnotationStyle(curSelected, {
                        fillEnabled: e.target.checked,
                        fillColor: fillColorPicker.value
                      });
                    }
                  });

                  fillColorPicker.addEventListener('change', function(e) {
                    const curSelected = window.pdfjsAnnotationExtensionInstance?.selectedAnnotation;
                    if (curSelected && fillCheckbox.checked) {
                      window.pdfjsAnnotationExtensionInstance.updateAnnotationStyle(curSelected, {
                        fillColor: e.target.value
                      });
                    }
                  });

                  fillRow.appendChild(leftPart);
                  fillRow.appendChild(fillColorPicker);
                  container.appendChild(fillRow);
                }

                const styleContainer = menu.querySelector('.styleContainer') || menu;
                styleContainer.appendChild(container);
              }

              // D. Undo/Redo & Comment list labels auto-override
              function getAnnotationsSnapshot() {
                const ext = window.pdfjsAnnotationExtensionInstance;
                if (!ext) return null;
                if (typeof ext.getAnnotationStore !== 'function') return null;
                const store = ext.getAnnotationStore();
                if (!store) return null;
                return JSON.stringify(store);
              }

              function setupUndoRedoAndAuthorPatch() {
                // Initialize undo stack with initial state
                const initialState = getAnnotationsSnapshot();
                if (initialState) {
                  undoStack.push(initialState);
                  lastStateStr = initialState;
                }

                // Periodically check for state changes and update UI elements
                setInterval(() => {
                  const ext = window.pdfjsAnnotationExtensionInstance;
                  if (!ext) return;

                  // Dynamic author override for tool name labels in comments list
                  const store = typeof ext.getAnnotationStore === 'function'
                    ? ext.getAnnotationStore()
                    : null;
                  let authorUpdated = false;
                  if (store && store.annotations) {
                    store.annotations.forEach(ann => {
                      const transName = toolNameTranslations[ann.name] || 'Annotation';
                      const targetAuthor = transName + ' (${t('editPdf.unnamedUser')})';
                      if (ann.author !== targetAuthor && ann.author === '${t('editPdf.unnamedUser')}') {
                        ann.author = targetAuthor;
                        authorUpdated = true;
                      }
                    });
                  }

                  const currentState = getAnnotationsSnapshot();
                  if (currentState && currentState !== lastStateStr) {
                    if (!isDoingUndoRedo) {
                      undoStack.push(currentState);
                      redoStack = []; // Reset redo stack on new operation
                      updateUndoRedoButtonsState();
                    }
                    lastStateStr = currentState;
                  }
                }, 500);

                // Inject Undo/Redo buttons UI
                injectUndoRedoButtons();
              }

              function performUndo() {
                if (undoStack.length <= 1) return;
                isDoingUndoRedo = true;
                const current = undoStack.pop();
                redoStack.push(current);
                const prev = undoStack[undoStack.length - 1];
                loadState(prev);
              }

              function performRedo() {
                if (redoStack.length === 0) return;
                isDoingUndoRedo = true;
                const next = redoStack.pop();
                undoStack.push(next);
                loadState(next);
              }

              function loadState(stateStr) {
                const ext = window.pdfjsAnnotationExtensionInstance;
                if (!ext) return;

                try {
                  const stateObj = JSON.parse(stateStr);
                  if (typeof ext.resetPdfjsAnnotationStorage === 'function') {
                    ext.resetPdfjsAnnotationStorage();
                  }
                  if (typeof ext.initAnnotations === 'function') {
                    ext.initAnnotations(stateObj);
                  }
                  if (typeof ext.reDrawAnnotation === 'function') {
                    ext.reDrawAnnotation();
                  }
                  lastStateStr = stateStr;
                  updateUndoRedoButtonsState();
                } catch (err) {
                  console.error('[PDFCraft Patch] Failed to load state', err);
                } finally {
                  setTimeout(() => {
                    isDoingUndoRedo = false;
                  }, 100);
                }
              }

              function injectUndoRedoButtons() {
                const customToolbar = document.querySelector('.CustomToolbar');
                if (customToolbar) {
                  if (customToolbar.querySelector('.pdfcraft-undo-btn')) return;
                  const btnList = customToolbar.querySelector('ul') || customToolbar;

                  const undoLi = document.createElement('li');
                  undoLi.className = 'pdfcraft-undo-btn';
                  undoLi.style.cssText = 'display:inline-block; margin-right:8px;';

                  const undoBtn = document.createElement('button');
                  undoBtn.type = 'button';
                  undoBtn.innerHTML = '<span style="margin-right:2px; font-weight:bold;">↩</span>${t('editPdf.undo')}';
                  undoBtn.className = 'toolbarButton';
                  undoBtn.style.cssText = 'padding:4px 8px; font-size:12px; cursor:pointer; border-radius:4px; opacity:0.5; border:1px solid var(--toolbar-border-color, #ccc); background-color:var(--toolbar-bg-color, #f5f5f5); color:var(--toolbar-fg-color, #333); font-family:inherit;';
                  undoBtn.disabled = true;
                  undoBtn.addEventListener('click', performUndo);
                  undoLi.appendChild(undoBtn);

                  const redoLi = document.createElement('li');
                  redoLi.className = 'pdfcraft-redo-btn';
                  redoLi.style.cssText = 'display:inline-block; margin-right:8px;';

                  const redoBtn = document.createElement('button');
                  redoBtn.type = 'button';
                  redoBtn.innerHTML = '<span style="margin-right:2px; font-weight:bold;">↪</span>${t('editPdf.redo')}';
                  redoBtn.className = 'toolbarButton';
                  redoBtn.style.cssText = 'padding:4px 8px; font-size:12px; cursor:pointer; border-radius:4px; opacity:0.5; border:1px solid var(--toolbar-border-color, #ccc); background-color:var(--toolbar-bg-color, #f5f5f5); color:var(--toolbar-fg-color, #333); font-family:inherit;';
                  redoBtn.disabled = true;
                  redoBtn.addEventListener('click', performRedo);
                  redoLi.appendChild(redoBtn);

                  if (btnList.firstChild) {
                    btnList.insertBefore(undoLi, btnList.firstChild);
                    btnList.insertBefore(redoLi, undoLi.nextSibling);
                  } else {
                    btnList.appendChild(undoLi);
                    btnList.appendChild(redoLi);
                  }
                }
              }

              function updateUndoRedoButtonsState() {
                const undoBtn = document.querySelector('.pdfcraft-undo-btn button');
                const redoBtn = document.querySelector('.pdfcraft-redo-btn button');
                
                if (undoBtn) {
                  const canUndo = undoStack.length > 1;
                  undoBtn.disabled = !canUndo;
                  undoBtn.style.opacity = canUndo ? '1' : '0.5';
                }
                if (redoBtn) {
                  const canRedo = redoStack.length > 0;
                  redoBtn.disabled = !canRedo;
                  redoBtn.style.opacity = canRedo ? '1' : '0.5';
                }
              }
            })();
          `;
          doc.body.appendChild(patchScript);
          console.log('[PDFCraft Patch] Enrichment script successfully injected into iframe!');
        }
      } catch (e) {
        console.warn('Could not access iframe content to inject patches', e);
      }
    }, 1000);
  }, []);

  const handleClear = useCallback(() => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setFile(null);
    setPdfUrl(null);
    setError(null);
    setIsEditorReady(false);
    setReplacementNotice(null);
    setReplacementDiagnostics(null);
    textUndoStackRef.current = [];
    textRedoStackRef.current = [];
    setTextUndoCount(0);
    setTextRedoCount(0);
    onClear?.();
  }, [pdfUrl, setFile, onClear]);

  const showFileVersion = useCallback((nextFile: File) => {
    setFile(nextFile);
    setIsEditorReady(false);
    setPdfUrl(URL.createObjectURL(nextFile));
  }, []);

  const handleExistingTextReplaced = useCallback((
    result: Blob,
    count: number,
    diagnostics?: ReplaceExistingTextDiagnostics
  ) => {
    if (!file) return;
    const editedFile = new File([result], file.name, { type: 'application/pdf' });
    textUndoStackRef.current.push(file);
    textRedoStackRef.current = [];
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(0);
    setReplacementNotice(`${count} text occurrence${count === 1 ? '' : 's'} replaced.`);
    setReplacementDiagnostics(diagnostics ?? null);
    showFileVersion(editedFile);
  }, [file, showFileVersion]);

  const handleTextUndo = useCallback(() => {
    if (!file || textUndoStackRef.current.length === 0 || isTextReplacing) return;
    const previousFile = textUndoStackRef.current.pop();
    if (!previousFile) return;
    textRedoStackRef.current.push(file);
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(textRedoStackRef.current.length);
    setReplacementNotice(tTools('textUndoApplied'));
    setReplacementDiagnostics(null);
    showFileVersion(previousFile);
  }, [file, isTextReplacing, showFileVersion, tTools]);

  const handleTextRedo = useCallback(() => {
    if (!file || textRedoStackRef.current.length === 0 || isTextReplacing) return;
    const nextFile = textRedoStackRef.current.pop();
    if (!nextFile) return;
    textUndoStackRef.current.push(file);
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(textRedoStackRef.current.length);
    setReplacementNotice(tTools('textRedoApplied'));
    setReplacementDiagnostics(null);
    showFileVersion(nextFile);
  }, [file, isTextReplacing, showFileVersion, tTools]);

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== iframeRef.current?.contentWindow ||
        event.data?.type !== 'pdfcraft:replace-existing-text' ||
        !file ||
        isTextReplacing
      ) {
        return;
      }

      const payload = event.data.payload as {
        page: number;
        text: string;
        replacementText: string;
        x: number;
        y: number;
        width: number;
        height: number;
        fitMode?: TextFitMode;
      };

      if (
        !payload ||
        !Number.isFinite(payload.page) ||
        !Number.isFinite(payload.x) ||
        !Number.isFinite(payload.y) ||
        !Number.isFinite(payload.width) ||
        !Number.isFinite(payload.height)
      ) {
        return;
      }

      setIsTextReplacing(true);
      setError(null);
      const match = {
        page: payload.page,
        text: payload.text,
        x: payload.x,
        y: payload.y,
        width: payload.width,
        height: payload.height,
        id: `inline-${payload.page}-${payload.x}-${payload.y}`,
        selected: true,
      };

      const result = await replaceExistingText(
        file,
        [match],
        {
          replacementText: payload.replacementText,
          fitMode: payload.fitMode ?? 'preserve',
        }
      );

      if (result.success && result.result) {
        handleExistingTextReplaced(
          result.result,
          result.replacedCount,
          result.diagnostics
        );
      } else {
        setError(result.error || 'Unable to edit the selected text.');
      }
      setIsTextReplacing(false);
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [file, handleExistingTextReplaced, isTextReplacing]);

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      )}

      {error && (
        <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {file && pdfUrl && (
        <div className="space-y-4">
          {!hideHeaderCard && (
            <Card variant="outlined" size="sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 2v6h6" fill="white" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-[hsl(var(--color-foreground))]">{file.name}</p>
                    <p className="text-xs text-[hsl(var(--color-muted-foreground))]">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleClear}>
                  {t('buttons.clear') || 'Clear'}
                </Button>
              </div>
            </Card>
          )}

          {replacementNotice && (
            <div className="rounded-md border border-green-200 bg-green-50 p-3">
              <p className="text-sm text-green-800">{replacementNotice}</p>
            </div>
          )}

          <div
            className="flex flex-wrap items-center gap-2 rounded-md border border-[hsl(var(--color-border))] bg-white p-2"
            aria-label={tTools('textHistory')}
          >
            <span className="mr-1 text-xs font-medium text-[hsl(var(--color-muted-foreground))]">
              {tTools('textHistory')}:
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleTextUndo}
              disabled={textUndoCount === 0 || isTextReplacing}
            >
              ↩ {tTools('textUndo')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleTextRedo}
              disabled={textRedoCount === 0 || isTextReplacing}
            >
              ↪ {tTools('textRedo')}
            </Button>
          </div>

          {replacementDiagnostics?.overflowDetected && (
            <div className="rounded-md border border-amber-200 bg-amber-50 p-3" role="status">
              <p className="text-sm text-amber-900">{tTools('overflowAppliedWarning')}</p>
            </div>
          )}

          {replacementDiagnostics?.usedFallbackFont && (
            <div className="rounded-md border border-amber-200 bg-amber-50 p-3" role="status">
              <p className="text-sm text-amber-900">{tTools('fallbackFontWarning')}</p>
            </div>
          )}

          {replacementDiagnostics?.hasDigitalSignatures && (
            <div className="rounded-md border border-red-200 bg-red-50 p-3" role="alert">
              <p className="text-sm font-medium text-red-800">{tTools('signatureInvalidatedWarning')}</p>
            </div>
          )}

          {/* PDF Viewer iframe */}
          <div className="relative border border-[hsl(var(--color-border))] rounded-[var(--radius-md)] overflow-hidden bg-gray-100">
            <iframe
              ref={iframeRef}
              src={withBasePath(`/pdfjs-annotation-viewer/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`)}
              className="w-full h-[700px] border-0"
              title="PDF Editor"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
              onLoad={handleIframeLoad}
            />
            {!isEditorReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[hsl(var(--color-primary))] mx-auto mb-2"></div>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))]">{t('status.loading') || 'Loading...'}</p>
                </div>
              </div>
            )}
            {isTextReplacing && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/70">
                <div className="rounded-lg bg-white px-5 py-4 text-center shadow-lg">
                  <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-[hsl(var(--color-primary))]" />
                  <p className="text-sm font-medium">Updating PDF text…</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LegacyAnnotatorTool;

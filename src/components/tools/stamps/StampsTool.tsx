'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { isTauri, saveBlobFile } from '@/lib/tauri-bridge';
import { withBasePath } from '@/lib/utils/path';

export interface StampsToolProps {
  className?: string;
}

interface StampState {
  file: File | null;
  blobUrl: string | null;
  viewerReady: boolean;
}

export function StampsTool({ className = '' }: StampsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.stamps');

  const [stampState, setStampState] = useState<StampState>({
    file: null,
    blobUrl: null,
    viewerReady: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    return () => {
      if (stampState.blobUrl) URL.revokeObjectURL(stampState.blobUrl);
    };
  }, [stampState.blobUrl]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      if (stampState.blobUrl) URL.revokeObjectURL(stampState.blobUrl);
      const blobUrl = URL.createObjectURL(file);
      setStampState({ file, blobUrl, viewerReady: false });
      setError(null);
    }
  }, [stampState.blobUrl]);

  const handleUploadError = useCallback((msg: string) => setError(msg), []);

  const handleIframeLoad = useCallback(() => {
    setTimeout(() => setStampState(prev => ({ ...prev, viewerReady: true })), 1500);
  }, []);

  const handleSave = useCallback(async () => {
    if (!stampState.viewerReady || !iframeRef.current) {
      setError(tTools('viewerNotReady') || 'Viewer not ready.');
      return;
    }
    try {
      setIsProcessing(true);
      const win = iframeRef.current.contentWindow as any;
      const doc = win?.document;

      if (!win || !doc) {
        setError(tTools('saveFailed') || 'PDF viewer not accessible.');
        setIsProcessing(false);
        return;
      }

      // The stamps are managed by pdfjs-annotation-extension (not PDF.js core),
      // and are stored in the extension's internal painter store — NOT in
      // PDFViewerApplication.pdfDocument.annotationStorage. Calling
      // pdfDocument.saveDocument() would only export the original PDF without
      // any stamps. The extension exposes its own exportPdf() method which
      // fetches the source PDF, embeds annotations via pdf-lib, and triggers
      // a download via file-saver (which uses an <a download> anchor click).
      //
      // In an iframe context that anchor click may silently fail in some
      // browsers (no save dialog). To make the download reliable we
      // temporarily patch HTMLAnchorElement.prototype.click inside the iframe
      // and forward any download-triggering click to the top-level window,
      // which is always allowed to initiate a download.

      const downloadFromParent = async (href: string, name: string) => {
        try {
          if (isTauri()) {
            const res = await fetch(href);
            const blob = await res.blob();
            await saveBlobFile(blob, name || 'annotated.pdf');
            return;
          }
          const a = document.createElement('a');
          a.href = href;
          a.download = name || 'annotated.pdf';
          a.rel = 'noopener';
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            try {
              document.body.removeChild(a);
            } catch {
              /* noop */
            }
          }, 0);
        } catch (e) {
          console.error('[stamps] parent-window download failed:', e);
        }
      };

      let triggered = false;
      const AnchorProto = (win as any).HTMLAnchorElement?.prototype;
      const originalClick = AnchorProto ? AnchorProto.click : null;
      if (AnchorProto && typeof originalClick === 'function') {
        AnchorProto.click = function patchedClick(this: HTMLAnchorElement) {
          try {
            const href = this.getAttribute('href') || (this as any).href;
            const dl = this.getAttribute('download');
            if (href && (dl !== null || /^blob:/.test(String(href)))) {
              triggered = true;
              downloadFromParent(String(href), dl || 'annotated.pdf');
              return;
            }
          } catch (e) {
            console.warn('[stamps] anchor.click hook error:', e);
          }
          return originalClick.apply(this, arguments as any);
        };
      }

      const restoreAnchor = () => {
        if (AnchorProto && typeof originalClick === 'function') {
          AnchorProto.click = originalClick;
        }
      };

      // Strategy 1: Walk React fibers to locate either
      //   (a) an object exposing exportPdf() directly (unlikely, since the
      //       extension's main class is a plain JS class, not a React
      //       component), or
      //   (b) the CustomToolbar's memoizedProps.onExport (a closure that
      //       forwards to the main class's exportPdf).
      const findExportEntry = (): { call: () => any; kind: string } | null => {
        const anchor = doc.querySelector('.CustomToolbar');
        if (!anchor) return null;

        const walkFromNode = (
          node: any
        ): { call: () => any; kind: string } | null => {
          const keys = Object.keys(node);
          for (const key of keys) {
            if (
              key.startsWith('__reactFiber$') ||
              key.startsWith('__reactInternalInstance$') ||
              key.startsWith('__reactProps$')
            ) {
              let fiber: any = (node as any)[key];
              while (fiber) {
                // (a) exportPdf on stateNode
                const inst = fiber.stateNode;
                if (inst && typeof inst.exportPdf === 'function') {
                  return {
                    kind: 'stateNode.exportPdf',
                    call: () => inst.exportPdf(),
                  };
                }
                // (b) onExport in props
                const props = fiber.memoizedProps || fiber.pendingProps;
                if (props && typeof props.onExport === 'function') {
                  return {
                    kind: 'props.onExport("pdf")',
                    call: () => props.onExport('pdf'),
                  };
                }
                fiber = fiber.return;
              }
            }
          }
          return null;
        };

        let el: HTMLElement | null = anchor as HTMLElement;
        while (el) {
          const found = walkFromNode(el);
          if (found) return found;
          el = el.parentElement;
        }
        return null;
      };

      const exportEntry = findExportEntry();
      console.log(
        '[stamps] export entry:',
        exportEntry ? exportEntry.kind : 'not found'
      );

      if (exportEntry) {
        try {
          await Promise.resolve(exportEntry.call());
        } catch (e) {
          console.warn('[stamps] direct export entry threw:', e);
          setError(tTools('saveFailed') || 'Failed to save.');
        } finally {
          // Give file-saver a tick to fire its anchor.click before we restore.
          await new Promise((r) => setTimeout(r, 1500));
          restoreAnchor();
        }
        // NOTE: we cannot reliably detect whether the download dialog was
        // actually shown (browsers do not fire any observable event). The
        // extension itself surfaces a success/failure Modal, so we trust its
        // outcome and avoid a false-negative error toast here.
        if (!triggered) {
          console.info(
            '[stamps] anchor.click hook did not fire; the extension likely triggered the download through its own path.'
          );
        }
        setIsProcessing(false);
        return;
      }

      // Strategy 2 (fallback): simulate clicking the extension's Export
      // button, then the "PDF" option inside its popover.
      const clickExportPdf = async (): Promise<boolean> => {
        const toolbarItems = doc.querySelectorAll(
          '.CustomToolbar .buttons li'
        ) as NodeListOf<HTMLElement>;
        let exportLi: HTMLElement | null = null;
        for (const li of Array.from(toolbarItems)) {
          const title = li.getAttribute('title') || '';
          const name = li.querySelector('.name')?.textContent || '';
          if (/export|导出|匯出|導出/i.test(title + ' ' + name)) {
            exportLi = li;
            break;
          }
        }
        console.log('[stamps] export <li> found:', !!exportLi);
        if (!exportLi) return false;
        exportLi.click();
        // Wait for the popover to render.
        await new Promise((r) => setTimeout(r, 400));
        const candidates = doc.querySelectorAll(
          'button, .ant-btn'
        ) as NodeListOf<HTMLElement>;
        for (const b of Array.from(candidates)) {
          const text = (b.textContent || '').trim();
          if (text === 'PDF') {
            b.click();
            return true;
          }
        }
        return false;
      };

      try {
        const ok = await clickExportPdf();
        // Wait for extension to finish and anchor.click to fire.
        await new Promise((r) => setTimeout(r, 1500));
        if (!ok) {
          setError(
            tTools('saveFailed') ||
              'Failed to save. Please use the Export button in the toolbar.'
          );
        } else if (!triggered) {
          console.info(
            '[stamps] anchor.click hook did not fire; the extension likely triggered the download through its own path.'
          );
        }
      } finally {
        restoreAnchor();
      }
      setIsProcessing(false);
    } catch (err) {
      console.error('Save failed:', err);
      setError(tTools('saveFailed') || 'Failed to save.');
      setIsProcessing(false);
    }
  }, [stampState.viewerReady, tTools]);

  const handleClear = useCallback(() => {
    if (stampState.blobUrl) URL.revokeObjectURL(stampState.blobUrl);
    setStampState({ file: null, blobUrl: null, viewerReady: false });
    setError(null);
  }, [stampState.blobUrl]);

  const viewerUrl = stampState.blobUrl
    ? withBasePath(`/pdfjs-annotation-viewer/web/viewer.html?file=${encodeURIComponent(stampState.blobUrl)}`)
    : null;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!stampState.file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('uploadLabel') || 'Upload PDF File'}
          description={tTools('uploadDescription') || 'Drag and drop a PDF file here.'}
        />
      )}

      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {stampState.file && viewerUrl && (
        <>
          <Card variant="outlined">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 2v6h6" fill="white" />
                </svg>
                <div>
                  <p className="text-sm font-medium">{stampState.file.name}</p>
                  <p className="text-xs text-gray-500">{(stampState.file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={handleClear} disabled={isProcessing}>
                {t('buttons.remove') || 'Remove'}
              </Button>
            </div>
          </Card>

          <Card variant="outlined" className="bg-blue-50 border-blue-200">
            <div className="flex gap-3">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-blue-700">
                <p className="font-medium mb-1">{tTools('instructionsTitle') || 'How to Add Stamps'}</p>
                <ol className="list-decimal list-inside space-y-1 text-blue-600">
                  <li>{tTools('instruction1') || 'Click the Stamp tool in the toolbar'}</li>
                  <li>{tTools('instruction2') || 'Click Add image to upload your stamp'}</li>
                  <li>{tTools('instruction3') || 'Click on the PDF to place the stamp'}</li>
                  <li>{tTools('instruction4') || 'Drag to resize or reposition'}</li>
                  <li>{tTools('instruction5') || 'Click Save Stamped PDF when done'}</li>
                </ol>
              </div>
            </div>
          </Card>

          <div className="border rounded-lg overflow-hidden">
            <iframe
              ref={iframeRef}
              src={viewerUrl}
              onLoad={handleIframeLoad}
              className="w-full bg-gray-100"
              style={{ height: '700px', border: 'none' }}
              title="PDF Stamp Editor"
            />
          </div>

          <Card variant="outlined">
            <Button
              variant="primary"
              size="lg"
              onClick={handleSave}
              disabled={!stampState.viewerReady || isProcessing}
              loading={isProcessing}
            >
              {isProcessing ? (t('status.processing') || 'Processing...') : (tTools('saveButton') || 'Save Stamped PDF')}
            </Button>
          </Card>
        </>
      )}
    </div>
  );
}

export default StampsTool;

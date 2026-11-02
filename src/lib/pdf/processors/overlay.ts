/**
 * PDF Overlay & Underlay Processor
 * 
 * Implements overlaying or underlaying pages from one PDF onto another.
 * Supports loop rendering, targeted page ranges, and scale composition using pdf-lib.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { ensurePageContents } from '../page-contents';

export interface OverlayOptions {
  /** 'overlay' puts the layer PDF on top, 'underlay' puts it underneath */
  mode?: 'overlay' | 'underlay';
  /** 1-based page range selector (e.g. "1-5, 8, odd, even" or empty for all) */
  pageRange?: string;
  /** Whether to loop the overlay/underlay document if it is shorter than the base document */
  loop?: boolean;
}

const DEFAULT_OVERLAY_OPTIONS: OverlayOptions = {
  mode: 'overlay',
  pageRange: '',
  loop: true,
};

export class OverlayPDFProcessor extends BasePDFProcessor {
  /**
   * Process and overlay pages
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const overlayOptions: OverlayOptions = {
      ...DEFAULT_OVERLAY_OPTIONS,
      ...(options as Partial<OverlayOptions>),
    };

    // Validate we have exactly 2 files (base PDF and overlay PDF)
    if (files.length !== 2) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 2 PDF files (Base PDF and Layer PDF) are required for overlay/underlay.',
        `Received ${files.length} file(s).`
      );
    }

    try {
      this.updateProgress(5, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
      }

      this.updateProgress(10, 'Loading documents...');
      const baseFile = files[0];
      const layerFile = files[1];

      const baseBuffer = await baseFile.arrayBuffer();
      const layerBuffer = await layerFile.arrayBuffer();

      let basePdf;
      let layerPdf;

      try {
        basePdf = await pdfLib.PDFDocument.load(baseBuffer, { ignoreEncryption: true });
      } catch (err) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_ENCRYPTED,
          'The Base PDF file is protected.',
          'Please decrypt the file first.'
        );
      }

      try {
        layerPdf = await pdfLib.PDFDocument.load(layerBuffer, { ignoreEncryption: true });
      } catch (err) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_ENCRYPTED,
          'The Layer PDF file is protected.',
          'Please decrypt the file first.'
        );
      }

      const totalBasePages = basePdf.getPageCount();
      const totalLayerPages = layerPdf.getPageCount();

      this.updateProgress(20, `Target has ${totalBasePages} pages. Layer has ${totalLayerPages} pages.`);

      // Parse target page ranges
      const targetPages = parsePageRange(overlayOptions.pageRange || '', totalBasePages);
      
      this.updateProgress(25, 'Composing overlay tree...');
      const outputPdf = await pdfLib.PDFDocument.create();
      
      const progressChunk = 65 / totalBasePages;

      for (let i = 0; i < totalBasePages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const pageNum = i + 1;
        this.updateProgress(
          25 + (i * progressChunk),
          `Composing page ${pageNum} of ${totalBasePages}...`
        );

        const basePage = basePdf.getPage(i);
        const { width, height } = basePage.getSize();

        const shouldApply = targetPages.has(pageNum);
        // Compute overlay page index based on loop option
        let layerIndex = -1;
        if (shouldApply) {
          if (overlayOptions.loop) {
            layerIndex = i % totalLayerPages;
          } else if (i < totalLayerPages) {
            layerIndex = i;
          }
        }

        if (layerIndex !== -1) {
          // Perform embed and draw overlays
          const layerPage = layerPdf.getPage(layerIndex);
          const { width: lWidth, height: lHeight } = layerPage.getSize();

          // Embed pages
          const [embeddedBase] = await outputPdf.embedPages([ensurePageContents(basePage)]);
          const [embeddedLayer] = await outputPdf.embedPages([ensurePageContents(layerPage)]);

          // Create destination page matching original size
          const destinationPage = outputPdf.addPage([width, height]);

          if (overlayOptions.mode === 'underlay') {
            // Underlay: Draw layer first, then base document
            destinationPage.drawPage(embeddedLayer, {
              x: 0,
              y: 0,
              width: width,
              height: height,
            });
            destinationPage.drawPage(embeddedBase, {
              x: 0,
              y: 0,
              width: width,
              height: height,
            });
          } else {
            // Overlay: Draw base first, then layer document on top
            destinationPage.drawPage(embeddedBase, {
              x: 0,
              y: 0,
              width: width,
              height: height,
            });
            destinationPage.drawPage(embeddedLayer, {
              x: 0,
              y: 0,
              width: width,
              height: height,
            });
          }
        } else {
          // Simply copy original base page unchanged
          const [copiedPage] = await outputPdf.copyPages(basePdf, [i]);
          outputPdf.addPage(copiedPage);
        }
      }

      this.updateProgress(90, 'Saving compiled PDF...');
      const compiledBytes = await outputPdf.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(compiledBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      
      const baseName = baseFile.name.substring(0, baseFile.name.lastIndexOf('.')) || baseFile.name;
      const outputFilename = `${baseName}_overlay.pdf`;

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount: totalBasePages,
        mode: overlayOptions.mode,
      });

    } catch (err) {
      console.error('Overlay error:', err);
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to apply overlay/underlay.',
        err instanceof Error ? err.message : 'Unknown error during composition'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Parses page range selector supporting odd, even, ranges (1-5), and comma lists
 */
function parsePageRange(rangeStr: string, totalPages: number): Set<number> {
  const result = new Set<number>();
  const normalized = rangeStr.trim().toLowerCase();

  if (!normalized) {
    // Default: Apply to all pages
    return new Set(Array.from({ length: totalPages }, (_, i) => i + 1));
  }

  if (normalized === 'odd') {
    for (let i = 1; i <= totalPages; i += 2) result.add(i);
    return result;
  }

  if (normalized === 'even') {
    for (let i = 2; i <= totalPages; i += 2) result.add(i);
    return result;
  }

  const parts = normalized.split(',');
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [startStr, endStr] = trimmed.split('-');
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        const from = Math.min(start, end);
        const to = Math.max(start, end);
        for (let i = from; i <= to; i++) {
          if (i >= 1 && i <= totalPages) result.add(i);
        }
      }
    } else {
      const val = parseInt(trimmed, 10);
      if (!isNaN(val) && val >= 1 && val <= totalPages) {
        result.add(val);
      }
    }
  }
  return result;
}

export function createOverlayProcessor(): OverlayPDFProcessor {
  return new OverlayPDFProcessor();
}

export async function overlayPDF(
  files: File[],
  options: OverlayOptions,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createOverlayProcessor();
  return processor.process({ files, options: options as Record<string, unknown> }, onProgress);
}

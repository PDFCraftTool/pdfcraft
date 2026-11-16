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

      // Work on the base document itself so forms, bookmarks, links, page
      // labels and /Rotate survive; only the pages that get a layer change.
      const embeddedLayers = new Map<number, Awaited<ReturnType<typeof basePdf.embedPage>>>();
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

        // Compute overlay page index based on loop option
        let layerIndex = -1;
        if (targetPages.has(pageNum)) {
          if (overlayOptions.loop) {
            layerIndex = i % totalLayerPages;
          } else if (i < totalLayerPages) {
            layerIndex = i;
          }
        }
        if (layerIndex === -1) continue;

        const basePage = basePdf.getPage(i);
        let embeddedLayer = embeddedLayers.get(layerIndex);
        if (!embeddedLayer) {
          [embeddedLayer] = await basePdf.embedPages([ensurePageContents(layerPdf.getPage(layerIndex))]);
          embeddedLayers.set(layerIndex, embeddedLayer);
        }

        // The layer has to look upright and cover the page as it is displayed,
        // so counter-turn it by the page's /Rotate (origin offsets keep the
        // turned layer inside the unrotated page box).
        const { x: boxX, y: boxY, width, height } = basePage.getMediaBox();
        const quarterTurns = ((basePage.getRotation().angle % 360) + 360) % 360 / 90;
        const turned = quarterTurns % 2 === 1;
        const shownWidth = turned ? height : width;
        const shownHeight = turned ? width : height;

        basePage.drawPage(embeddedLayer, {
          x: boxX + (quarterTurns === 1 || quarterTurns === 2 ? width : 0),
          y: boxY + (quarterTurns === 2 || quarterTurns === 3 ? height : 0),
          xScale: shownWidth / embeddedLayer.width,
          yScale: shownHeight / embeddedLayer.height,
          rotate: pdfLib.degrees(quarterTurns * 90),
        });

        if (overlayOptions.mode === 'underlay') {
          // drawPage appended its own balanced q ... Q stream above the
          // (now wrapped) page content; move it to the bottom of the stack.
          const contents = basePage.node.Contents();
          if (contents instanceof pdfLib.PDFArray && contents.size() > 1) {
            const layer = contents.get(contents.size() - 1);
            contents.remove(contents.size() - 1);
            contents.insert(0, layer);
          }
        }
      }

      this.updateProgress(90, 'Saving compiled PDF...');
      const compiledBytes = await basePdf.save({ useObjectStreams: true });
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

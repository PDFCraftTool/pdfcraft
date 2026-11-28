/**
 * Smart Data Redactor Processor
 * 
 * Implements automatic scanning and physical redaction of sensitive patterns (e.g., Email, Phone, SSN/ID Card).
 * Detects patterns, overlays opaque blocking blocks, and sanitizes underlying content streams.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, loadPdfjs } from '../loader';
import { redactPDF, type RedactionArea } from './redact';

export interface SmartRedactOptions {
  patterns: ('email' | 'phone' | 'idcard' | 'custom')[];
  customKeywords?: string[];
  redactColor?: { r: number; g: number; b: number };
}

const DEFAULT_OPTIONS: SmartRedactOptions = {
  patterns: ['email', 'phone'],
  customKeywords: [],
  redactColor: { r: 0, g: 0, b: 0 }, // Black
};

const REGEX_PATTERNS = {
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  phone: /(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/g,
  idcard: /\d{17}[\dXx]|\d{3}-\d{2}-\d{4}/g, // Generic 18-digit ID or SSN
};

interface MatchBox {
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export class SmartDataRedactorProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const redactOptions: SmartRedactOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<SmartRedactOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF documents...');
      const pdfjs = await loadPdfjs();
      const pdfLib = await loadPdfLib();

      const fileBytes = await file.arrayBuffer();
      
      // Load both PDFJS and PDF-Lib docs
      const pdfjsDoc = await pdfjs.getDocument({ data: fileBytes.slice(0) }).promise;
      const pdfLibDoc = await pdfLib.PDFDocument.load(fileBytes);
      const totalPages = pdfLibDoc.getPageCount();

      const progressInterval = 70 / totalPages;
      const redactionAreas: RedactionArea[] = [];
      const hexColor = redactOptions.redactColor
        ? '#' + [redactOptions.redactColor.r, redactOptions.redactColor.g, redactOptions.redactColor.b]
            .map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0'))
            .join('')
        : '#000000';

      for (let i = 1; i <= totalPages; i++) {
        this.updateProgress(15 + (i - 1) * progressInterval, `Scanning & analyzing page ${i}...`);

        const pdfjsPage = await pdfjsDoc.getPage(i);
        const pdfLibPage = pdfLibDoc.getPage(i - 1);
        const { width: pageWidth, height: pageHeight } = pdfLibPage.getSize();

        // Extract text items with coordinates
        const textContent = await pdfjsPage.getTextContent();

        // Build simple lines of text to perform regex
        for (const item of textContent.items) {
          if (!('str' in item)) continue;
          
          const text = item.str;
          const transform = item.transform; // [scaleX, skewY, skewX, scaleY, translateX, translateY]
          
          // Check patterns
          let isMatch = false;
          for (const pattern of redactOptions.patterns) {
            if (pattern === 'custom' && redactOptions.customKeywords) {
              for (const keyword of redactOptions.customKeywords) {
                if (keyword && text.toLowerCase().includes(keyword.toLowerCase())) {
                  isMatch = true;
                  break;
                }
              }
            } else if (pattern !== 'custom') {
              const regex = REGEX_PATTERNS[pattern];
              regex.lastIndex = 0;
              if (regex.test(text)) {
                isMatch = true;
              }
            }
          }

          if (isMatch) {
            // Coordinate mapping (PDFJS transform coordinates are bottom-left oriented)
            const x = transform[4];
            const y = transform[5];
            const height = transform[3] || item.height || 12;
            const width = item.width || (text.length * height * 0.6);

            const pad = 2;
            const canvasX = Math.max(0, x - pad);
            const canvasY = Math.max(0, pageHeight - y - height - pad);
            const canvasW = width + pad * 2;
            const canvasH = height + pad * 2;

            redactionAreas.push({
              id: `smart-${i}-${redactionAreas.length}`,
              type: 'rect',
              page: i,
              x: canvasX,
              y: canvasY,
              width: canvasW,
              height: canvasH,
              pageWidth,
              pageHeight,
              style: redactOptions.redactColor ? 'custom-color' : 'blackout',
              color: hexColor,
              label: '[REDACTED]',
            });
          }
        }
      }

      let outputBlob: Blob;

      if (redactionAreas.length > 0) {
        this.updateProgress(85, 'Executing irreversible physical rasterization...');
        const finalPdfBytes = await redactPDF(
          fileBytes,
          redactionAreas,
          {
            renderScale: 2.0,
            outputQuality: 0.95,
            stripMetadata: true,
            purgeAnnotations: true,
          },
          (progressPercent, msg) => {
            this.updateProgress(85 + Math.round((progressPercent / 100) * 12), msg);
          }
        );
        outputBlob = new Blob([finalPdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      } else {
        this.updateProgress(95, 'No sensitive data found, generating clean PDF...');
        const pdfBytes = await pdfLibDoc.save({ useObjectStreams: true });
        outputBlob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      }

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(outputBlob, `${file.name.replace(/\.pdf$/i, '')}_redacted.pdf`, {
        pageCount: totalPages,
        redactionsApplied: redactionAreas.length,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to redact PDF privacy data.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createSmartDataRedactorProcessor(): SmartDataRedactorProcessor {
  return new SmartDataRedactorProcessor();
}

export async function redactSmartData(
  files: File[],
  options?: Partial<SmartRedactOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createSmartDataRedactorProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

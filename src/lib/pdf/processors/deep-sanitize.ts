/**
 * Deep Metadata Sanitizer Processor
 * Wipes document metadata, OCG watermarks, PieceInfo editor caches, 
 * and forces full cross-reference table (xref) reconstruction to remove incremental logs.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface DeepSanitizeOptions {
  stripMetadata?: boolean;
  stripPieceInfo?: boolean;
  stripOcgWatermarks?: boolean;
  stripAnnotations?: boolean;
}

export class DeepSanitizeProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const sanitizeOptions: DeepSanitizeOptions = {
      stripMetadata: true,
      stripPieceInfo: true,
      stripOcgWatermarks: true,
      stripAnnotations: false,
      ...(options as Partial<DeepSanitizeOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly one PDF file is required.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading pdf-lib engine...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Parsing PDF binary object tree...');
      const arrayBuffer = await file.arrayBuffer();
      // Load PDF document (allowing decryption)
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const totalPages = pdfDoc.getPageCount();

      const findings: string[] = [];

      this.updateProgress(40, 'Analyzing document metadata nodes...');

      // 1. Sanitizing metadata and document properties
      if (sanitizeOptions.stripMetadata) {
        const catalog = pdfDoc.catalog;
        
        // Remove XMP Metadata
        if (catalog.has(pdfLib.PDFName.of('Metadata'))) {
          catalog.delete(pdfLib.PDFName.of('Metadata'));
          findings.push('XMP Metadata Stream (contains creator details, modification logs)');
        }

        // Wipe standard Info dictionary
        const infoDict = (pdfDoc as any).getInfoDict();
        if (infoDict) {
          infoDict.set(pdfLib.PDFName.of('Title'), pdfLib.PDFString.of(''));
          infoDict.set(pdfLib.PDFName.of('Author'), pdfLib.PDFString.of(''));
          infoDict.set(pdfLib.PDFName.of('Subject'), pdfLib.PDFString.of(''));
          infoDict.set(pdfLib.PDFName.of('Keywords'), pdfLib.PDFString.of(''));
          infoDict.set(pdfLib.PDFName.of('Creator'), pdfLib.PDFString.of(''));
          infoDict.set(pdfLib.PDFName.of('Producer'), pdfLib.PDFString.of('PDFCraft Sanitizer'));
          infoDict.set(pdfLib.PDFName.of('CreationDate'), pdfLib.PDFString.of('D:19700101000000Z'));
          infoDict.set(pdfLib.PDFName.of('ModDate'), pdfLib.PDFString.of('D:19700101000000Z'));
          findings.push('Standard Document Info fields (Title, Author, Creation Date)');
        }
      }

      // 2. Wiping PieceInfo caches (editor specific histories)
      if (sanitizeOptions.stripPieceInfo) {
        const catalog = pdfDoc.catalog;
        if (catalog.has(pdfLib.PDFName.of('PieceInfo'))) {
          catalog.delete(pdfLib.PDFName.of('PieceInfo'));
          findings.push('PieceInfo cache (contains proprietary editor histories)');
        }
        
        // Remove structural map tree
        if (catalog.has(pdfLib.PDFName.of('StructTreeRoot'))) {
          catalog.delete(pdfLib.PDFName.of('StructTreeRoot'));
          findings.push('StructTreeRoot (logical structure tree used in tracking)');
        }
      }

      // 3. Stripping Optional Content Groups (OCGs - used for hidden watermarks)
      if (sanitizeOptions.stripOcgWatermarks) {
        const catalog = pdfDoc.catalog;
        if (catalog.has(pdfLib.PDFName.of('OCProperties'))) {
          catalog.delete(pdfLib.PDFName.of('OCProperties'));
          findings.push('OCProperties layers (often host invisible watermarks)');
        }
      }

      this.updateProgress(60, 'Scanning pages for watermarks and annotations...');

      // 4. Scrubbing annotations / page-specific structural items
      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Sanitization was cancelled.');
        }

        const page = pdfDoc.getPage(i);
        
        // Remove OCGs from individual page resource dictionary
        if (sanitizeOptions.stripOcgWatermarks) {
          const resources = page.node.Resources();
          resources?.delete(pdfLib.PDFName.of('Properties'));
        }

        if (sanitizeOptions.stripAnnotations) {
          if (page.node.has(pdfLib.PDFName.of('Annots'))) {
            page.node.delete(pdfLib.PDFName.of('Annots'));
            if (!findings.includes('Interactive annotations & links')) {
              findings.push('Interactive annotations & links');
            }
          }
        }
      }

      // Add incremental write alert
      findings.push('Incremental revision history logs (forces full xref reconstruction)');

      this.updateProgress(85, 'Rebuilding cross-reference table and rewriting PDF...');
      
      // Save with useObjectStreams to force full object restructuring, leaving no trace of incremental history.
      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const outputBlob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const outputFilename = `${file.name.replace(/\.pdf$/i, '')}_sanitized.pdf`;

      this.updateProgress(100, 'Sanitization complete!');

      return this.createSuccessOutput(outputBlob, outputFilename, {
        findings,
        pageCount: totalPages,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to deep sanitize PDF metadata.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createDeepSanitizeProcessor(): DeepSanitizeProcessor {
  return new DeepSanitizeProcessor();
}

export async function deepSanitizePDF(
  file: File,
  options?: Partial<DeepSanitizeOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createDeepSanitizeProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

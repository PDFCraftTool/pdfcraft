/**
 * PDF Sanitize Processor
 * Requirements: 5.1
 * 
 * Implements PDF sanitization functionality using pdf-lib.
 * Removes potentially harmful content from PDF files including:
 * - JavaScript
 * - Embedded files/attachments
 * - External links
 * - Form actions
 * - Metadata
 * - Annotations
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

/**
 * Sanitize PDF options
 */
export interface SanitizePDFOptions {
  /** Remove JavaScript */
  removeJavaScript: boolean;
  /** Remove embedded files/attachments */
  removeAttachments: boolean;
  /** Remove external links */
  removeLinks: boolean;
  /** Flatten form fields */
  flattenForms: boolean;
  /** Remove metadata */
  removeMetadata: boolean;
  /** Remove annotations */
  removeAnnotations: boolean;
}

/**
 * Default sanitize options
 */
const DEFAULT_SANITIZE_OPTIONS: SanitizePDFOptions = {
  removeJavaScript: true,
  removeAttachments: true,
  removeLinks: true,
  flattenForms: true,
  removeMetadata: true,
  removeAnnotations: false,
};

/**
 * Sanitize PDF Processor
 * Removes potentially harmful content from PDF files.
 */
export class SanitizePDFProcessor extends BasePDFProcessor {
  /**
   * Process PDF file and sanitize it
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const sanitizeOptions: SanitizePDFOptions = {
      ...DEFAULT_SANITIZE_OPTIONS,
      ...(options as Partial<SanitizePDFOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file to sanitize.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];

    try {
      this.updateProgress(5, 'Loading PDF library...');

      // Load pdf-lib
      const pdfLib = await loadPdfLib();
      const { PDFName } = pdfLib;

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(10, 'Reading PDF file...');

      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const originalSize = arrayBuffer.byteLength;

      this.updateProgress(20, 'Loading PDF document...');

      // Load the source PDF
      let pdfDoc;
      try {
        pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, {
          ignoreEncryption: true,
        });
      } catch (error) {
        if (error instanceof Error && error.message.includes('encrypt')) {
          return this.createErrorOutput(
            PDFErrorCode.PDF_ENCRYPTED,
            'The PDF file is encrypted.',
            'Please decrypt the file before sanitizing.'
          );
        }
        throw error;
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(30, 'Analyzing PDF content...');

      const pageCount = pdfDoc.getPageCount();

      if (pageCount === 0) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_MALFORMED,
          'The PDF file contains no pages.',
          'Cannot sanitize an empty PDF.'
        );
      }

      // Track what was removed
      const removedItems: string[] = [];

      this.updateProgress(40, 'Sanitizing PDF content...');

      // Flatten forms
      if (sanitizeOptions.flattenForms) {
        try {
          const form = pdfDoc.getForm();
          const fields = form.getFields();
          if (fields.length > 0) {
            form.flatten();
            removedItems.push('form fields (flattened)');
          }
        } catch (e: any) {
          // Try to remove AcroForm if flatten fails
          try {
            const catalogDict = (pdfDoc.catalog as any).dict;
            if (catalogDict.has(PDFName.of('AcroForm'))) {
              catalogDict.delete(PDFName.of('AcroForm'));
              removedItems.push('form fields');
            }
          } catch (removeError) {
            console.warn('Could not remove AcroForm:', removeError);
          }
        }
      }

      this.updateProgress(50, 'Removing metadata...');

      // Remove metadata
      if (sanitizeOptions.removeMetadata) {
        try {
          // Clear info dict
          const infoDict = (pdfDoc as any).getInfoDict();
          const allKeys = infoDict.keys();
          allKeys.forEach((key: any) => {
            infoDict.delete(key);
          });

          pdfDoc.setTitle('');
          pdfDoc.setAuthor('');
          pdfDoc.setSubject('');
          pdfDoc.setKeywords([]);
          pdfDoc.setCreator('');
          pdfDoc.setProducer('PDFaro');

          // Remove XMP metadata
          try {
            const catalogDict = (pdfDoc.catalog as any).dict;
            if (catalogDict.has(PDFName.of('Metadata'))) {
              catalogDict.delete(PDFName.of('Metadata'));
            }
          } catch (e) {
            console.warn('Could not remove XMP metadata');
          }

          removedItems.push('metadata');
        } catch (e) {
          console.warn('Could not remove metadata:', e);
        }
      }

      this.updateProgress(60, 'Removing annotations...');

      // Remove annotations
      if (sanitizeOptions.removeAnnotations) {
        const pages = pdfDoc.getPages();
        for (const page of pages) {
          try {
            page.node.delete(PDFName.of('Annots'));
          } catch (e) {
            // Page might not have annotations
          }
        }
        removedItems.push('annotations');
      }

      this.updateProgress(70, 'Removing JavaScript...');

      // Remove JavaScript
      if (sanitizeOptions.removeJavaScript) {
        try {
          const catalogDict = (pdfDoc.catalog as any).dict;

          // Remove from Names/JavaScript
          const namesRef = catalogDict.get(PDFName.of('Names'));
          if (namesRef) {
            try {
              const namesDict = pdfDoc.context.lookup(namesRef) as any;
              if (namesDict.has(PDFName.of('JavaScript'))) {
                namesDict.delete(PDFName.of('JavaScript'));
              }
            } catch (e) {
              // Ignore
            }
          }

          // Remove OpenAction
          if (catalogDict.has(PDFName.of('OpenAction'))) {
            catalogDict.delete(PDFName.of('OpenAction'));
          }

          // Remove AA (Additional Actions)
          if (catalogDict.has(PDFName.of('AA'))) {
            catalogDict.delete(PDFName.of('AA'));
          }

          // Remove from pages
          const pages = pdfDoc.getPages();
          for (const page of pages) {
            try {
              const pageDict = page.node;
              if (pageDict.has(PDFName.of('AA'))) {
                pageDict.delete(PDFName.of('AA'));
              }
            } catch (e) {
              // Ignore
            }
          }

          removedItems.push('JavaScript');
        } catch (e) {
          console.warn('Could not remove JavaScript:', e);
        }
      }

      this.updateProgress(80, 'Removing embedded files...');

      // Remove embedded files/attachments
      if (sanitizeOptions.removeAttachments) {
        try {
          const catalogDict = (pdfDoc.catalog as any).dict;

          // Remove from Names/EmbeddedFiles
          const namesRef = catalogDict.get(PDFName.of('Names'));
          if (namesRef) {
            try {
              const namesDict = pdfDoc.context.lookup(namesRef) as any;
              if (namesDict.has(PDFName.of('EmbeddedFiles'))) {
                namesDict.delete(PDFName.of('EmbeddedFiles'));
              }
            } catch (e) {
              // Ignore
            }
          }

          // Remove Collection
          if (catalogDict.has(PDFName.of('Collection'))) {
            catalogDict.delete(PDFName.of('Collection'));
          }

          removedItems.push('embedded files');
        } catch (e) {
          console.warn('Could not remove embedded files:', e);
        }
      }

      // Remove links
      if (sanitizeOptions.removeLinks) {
        try {
          const pages = pdfDoc.getPages();
          for (const page of pages) {
            try {
              const pageDict = page.node;
              const annotsRef = pageDict.get(PDFName.of('Annots'));
              if (!annotsRef) continue;

              const annotsArray = pdfDoc.context.lookup(annotsRef) as any;
              const annotRefs = annotsArray.asArray();
              const annotsToKeep = [];

              for (const ref of annotRefs) {
                try {
                  const annot = pdfDoc.context.lookup(ref) as any;
                  const subtype = annot.get(PDFName.of('Subtype'))?.toString().substring(1);

                  // Keep non-link annotations
                  if (subtype !== 'Link') {
                    annotsToKeep.push(ref);
                  }
                } catch (e) {
                  annotsToKeep.push(ref);
                }
              }

              if (annotsToKeep.length !== annotRefs.length) {
                if (annotsToKeep.length > 0) {
                  const newAnnotsArray = pdfDoc.context.obj(annotsToKeep);
                  pageDict.set(PDFName.of('Annots'), newAnnotsArray);
                } else {
                  pageDict.delete(PDFName.of('Annots'));
                }
              }
            } catch (e) {
              // Ignore page errors
            }
          }
          removedItems.push('links');
        } catch (e) {
          console.warn('Could not remove links:', e);
        }
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(90, 'Saving sanitized PDF...');

      // Save the sanitized PDF
      const sanitizedPdfBytes = await pdfDoc.save({ useObjectStreams: true });

      // Create blob from the Uint8Array
      const blob = new Blob([new Uint8Array(sanitizedPdfBytes)], { type: 'application/pdf' });
      const newSize = sanitizedPdfBytes.length;

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateSanitizedFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount,
        originalSize,
        newSize,
        removedItems,
        sanitized: true,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to sanitize PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for sanitize processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the sanitized PDF
 */
function generateSanitizedFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_sanitized.pdf`;
}

/**
 * Create a new instance of the sanitize processor
 */
export function createSanitizeProcessor(): SanitizePDFProcessor {
  return new SanitizePDFProcessor();
}

/**
 * Sanitize a PDF file (convenience function)
 */
export async function sanitizePDF(
  file: File,
  options?: Partial<SanitizePDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createSanitizeProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

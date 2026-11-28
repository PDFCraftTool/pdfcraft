/**
 * Dead Link Debugger Processor
 * 
 * Scans all /URI actions and /Link annotations, detects URLs,
 * and performs in-place replacement/redirect injection.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface DeadLinkOptions {
  replacements?: Record<string, string>; // { "http://deadurl.com": "http://fixedurl.com" }
  validateReachability?: boolean;
}

const DEFAULT_OPTIONS: DeadLinkOptions = {
  replacements: {},
  validateReachability: false,
};

export interface ExtractedLink {
  pageNumber: number;
  originalUrl: string;
  isModified: boolean;
  newUrl?: string;
}

export class DeadLinkDebuggerProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const linkOptions: DeadLinkOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<DeadLinkOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF document...');
      const pdfLib = await loadPdfLib();
      
      const fileBytes = await file.arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(fileBytes);
      const pages = pdfDoc.getPages();
      const totalPages = pages.length;

      const extractedLinks: ExtractedLink[] = [];
      const replacements = linkOptions.replacements || {};

      const progressInterval = 70 / totalPages;
      let replacedCount = 0;

      for (let i = 0; i < totalPages; i++) {
        this.updateProgress(20 + i * progressInterval, `Scanning links on page ${i + 1}...`);
        const page = pages[i];
        
        const annots = page.node.Annots();
        if (annots instanceof pdfLib.PDFArray) {
          for (let j = 0; j < annots.size(); j++) {
            const annotRef = annots.get(j);
            const annot = pdfDoc.context.lookup(annotRef);
            
            if (annot instanceof pdfLib.PDFDict) {
              const subtype = annot.get(pdfLib.PDFName.of('Subtype'));
              if (subtype === pdfLib.PDFName.of('Link')) {
                const action = pdfDoc.context.lookup(annot.get(pdfLib.PDFName.of('A')));
                if (action instanceof pdfLib.PDFDict) {
                  const sValue = action.get(pdfLib.PDFName.of('S'));
                  if (sValue === pdfLib.PDFName.of('URI')) {
                    const uriObj = action.get(pdfLib.PDFName.of('URI'));
                    if (uriObj) {
                      // Lookup the primitive string or hex representation
                      let originalUrl = '';
                      const resolvedUri = pdfDoc.context.lookup(uriObj);
                      if (resolvedUri instanceof pdfLib.PDFString) {
                        originalUrl = resolvedUri.decodeText();
                      } else if (resolvedUri instanceof pdfLib.PDFHexString) {
                        originalUrl = resolvedUri.decodeText();
                      }

                      if (originalUrl) {
                        let isModified = false;
                        let newUrl = '';

                        // Look up inside replacement mapping
                        if (replacements[originalUrl]) {
                          newUrl = replacements[originalUrl];
                          isModified = true;
                          
                          // Inject replaced URL back to object
                          action.set(pdfLib.PDFName.of('URI'), pdfLib.PDFString.of(newUrl));
                          replacedCount++;
                        }

                        extractedLinks.push({
                          pageNumber: i + 1,
                          originalUrl,
                          isModified,
                          newUrl: isModified ? newUrl : undefined,
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      this.updateProgress(90, 'Writing link updates to PDF...');
      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, `${file.name.replace(/\.pdf$/i, '')}_links_fixed.pdf`, {
        pageCount: totalPages,
        linksScanned: extractedLinks.length,
        linksReplaced: replacedCount,
        links: extractedLinks,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to debug or update PDF links.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createDeadLinkDebuggerProcessor(): DeadLinkDebuggerProcessor {
  return new DeadLinkDebuggerProcessor();
}

export async function debugDeadLinks(
  files: File[],
  options?: Partial<DeadLinkOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createDeadLinkDebuggerProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

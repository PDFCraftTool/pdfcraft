/**
 * Citation Linker Processor
 * Detects citation markers in PDF text, extracts matching references from the bibliography, 
 * and injects interactive PDF Link Annotations using pdf-lib.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs, loadPdfLib } from '../loader';

export interface CitationLinkerOptions {
  detectDoi?: boolean;
  fallbackToPageJump?: boolean;
  citationsList?: Array<{
    id: string;
    marker: string;
    pageNum: number;
    rect: number[]; // [x1, y1, x2, y2]
    url: string;
    refText: string;
  }>;
}

export class CitationLinkerProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const linkerOptions: CitationLinkerOptions = {
      detectDoi: true,
      fallbackToPageJump: true,
      ...(options as Partial<CitationLinkerOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly one PDF file is required.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(5, 'Loading PDF.js and pdf-lib engines...');
      const pdfjs = await loadPdfjs();
      const pdfLib = await loadPdfLib();

      this.updateProgress(15, 'Scanning PDF text elements...');
      const arrayBuffer = await file.arrayBuffer();
      const pdfjsDoc = await pdfjs.getDocument({ data: arrayBuffer.slice(0) }).promise;
      const totalPages = pdfjsDoc.numPages;

      const detectedCitations: any[] = [];
      let referencesPageNum = totalPages; // Default to last page for references search
      
      // Page analysis to find where "References" section starts
      for (let pageNum = totalPages; pageNum >= 1; pageNum--) {
        const page = await pdfjsDoc.getPage(pageNum);
        const textContent = await page.getTextContent();
        const fullText = textContent.items.map((item: any) => item.str).join(' ');
        if (fullText.match(/references|bibliography|参考文献/i)) {
          referencesPageNum = pageNum;
          break;
        }
      }

      // Step 2: Extract reference items (e.g. "[1] Author, Title. DOI: ...")
      const refItemsMap = new Map<string, { text: string; pageNum: number; doi: string | null }>();
      for (let p = referencesPageNum; p <= totalPages; p++) {
        const page = await pdfjsDoc.getPage(p);
        const textContent = await page.getTextContent();
        let pageText = textContent.items.map((item: any) => item.str).join(' ');
        
        // Match patterns like [1] or 1.
        const refRegex = /(?:\[(\d+)\]|(\d+)\.)\s+([^\[\n]+)/g;
        let match;
        while ((match = refRegex.exec(pageText)) !== null) {
          const num = match[1] || match[2];
          const text = match[3].trim();
          
          // Try to extract DOI from reference text
          const doiMatch = text.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
          const doi = doiMatch ? doiMatch[0] : null;

          refItemsMap.set(num, {
            text,
            pageNum: p,
            doi,
          });
        }
      }

      // Step 3: Scan body pages (1 to referencesPageNum - 1) for citation markers (e.g., [1] or [1,2])
      for (let pageNum = 1; pageNum < referencesPageNum; pageNum++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Citation linking was cancelled.');
        }

        this.updateProgress(
          20 + Math.floor((40 * pageNum) / referencesPageNum),
          `Scanning citations in page ${pageNum}/${referencesPageNum - 1}...`
        );

        const page = await pdfjsDoc.getPage(pageNum);
        const textContent = await page.getTextContent();

        textContent.items.forEach((item: any) => {
          const text = item.str.trim();
          // Find standard "[1]" or "[1-3]" or "[1, 2]" style markers
          const markerRegex = /\[(\d+(?:\s*,\s*\d+|\s*-\s*\d+)*)\]/g;
          let match;
          
          while ((match = markerRegex.exec(text)) !== null) {
            const innerStr = match[1];
            // Split by comma or hyphen
            const nums = innerStr.split(/,|\-/).map(n => n.trim());
            
            nums.forEach((num) => {
              const refData = refItemsMap.get(num);
              if (refData) {
                // Approximate coordinate matching
                // matrix: [scaleX, skewX, skewY, scaleY, x, y]
                const matrix = item.transform;
                const rect = [
                  matrix[4],
                  matrix[5],
                  matrix[4] + (item.width || 40),
                  matrix[5] + (item.height || 12),
                ];
                
                detectedCitations.push({
                  id: `${pageNum}_${num}_${Math.floor(matrix[4])}`,
                  marker: `[${num}]`,
                  pageNum,
                  rect,
                  url: refData.doi ? `https://doi.org/${refData.doi}` : '',
                  refText: refData.text,
                  refPage: refData.pageNum,
                });
              }
            });
          }
        });
      }

      // Step 4: If we are in "apply mode" (user selected which citations to link)
      // Modify the PDF using pdf-lib
      this.updateProgress(75, 'Applying hyperlink annotations to PDF document...');
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      
      const citationsToApply = linkerOptions.citationsList || detectedCitations;

      citationsToApply.forEach((citation) => {
        try {
          const pageIndex = citation.pageNum - 1;
          const pdfLibPage = pdfDoc.getPage(pageIndex);
          const { rect, url, refPage } = citation;

          let linkAnnot;
          if (url && url.startsWith('http')) {
            // Apply external URL link annotation
            linkAnnot = pdfDoc.context.obj({
              Type: 'Annot',
              Subtype: 'Link',
              Rect: rect,
              Border: [0, 0, 0], // invisible border
              C: [0, 0, 1], // blue color if shown (ignored as border is 0)
              A: {
                Type: 'Action',
                S: 'URI',
                URI: pdfLib.PDFHexString.fromText(url),
              },
            });
          } else if (linkerOptions.fallbackToPageJump && refPage) {
            // Apply internal GoTo page jump annotation
            // Resolves destination page references
            const destPageRef = pdfDoc.getPage(refPage - 1).ref;
            linkAnnot = pdfDoc.context.obj({
              Type: 'Annot',
              Subtype: 'Link',
              Rect: rect,
              Border: [0, 0, 0],
              Dest: [destPageRef, 'XYZ', null, null, null],
            });
          }

          if (linkAnnot) {
            // Retrieve or create page annotations array
            let annots = pdfLibPage.node.Annots();
            if (!annots) {
              annots = pdfDoc.context.obj([]);
              pdfLibPage.node.set(pdfLib.PDFName.of('Annots'), annots);
            }
            annots.push(pdfDoc.context.register(linkAnnot));
          }
        } catch (e) {
          console.error(`Failed to inject annotation for citation: ${citation.marker}`, e);
        }
      });

      this.updateProgress(95, 'Generating output file...');
      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const outputBlob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      const outputFilename = `${file.name.replace(/\.pdf$/i, '')}_citations_linked.pdf`;

      this.updateProgress(100, 'Link generation complete!');
      
      return this.createSuccessOutput(outputBlob, outputFilename, {
        citations: detectedCitations,
        pageCount: totalPages,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to link references in PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createCitationLinkerProcessor(): CitationLinkerProcessor {
  return new CitationLinkerProcessor();
}

export async function linkCitations(
  file: File,
  options?: Partial<CitationLinkerOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createCitationLinkerProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

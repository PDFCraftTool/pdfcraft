/**
 * PDF Page Labels Processor
 * 
 * Implements adding custom page label dictionaries (/PageLabels) to PDF catalog.
 * Supports decimal, roman numerals, latin characters, prefixes, start indices,
 * and robust disjoint/non-contiguous range mapping.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { parsePageLabelRange } from '../page-label-range';

export interface PageLabelRule {
  /** 1-based page range string (e.g. "1-5", "odd", "even", "10-20,30-40" or empty for all) */
  pageRange: string;
  /** Numbering style: 'D' (Decimal), 'R' (Uppercase Roman), 'r' (Lowercase Roman), 'A' (Uppercase Latin), 'a' (Lowercase Latin), 'none' (Prefix only) */
  style: 'D' | 'R' | 'r' | 'A' | 'a' | 'none';
  /** Optional prefix (e.g. "A-") */
  prefix?: string;
  /** 1-based start value for the sequence (default is 1) */
  startValue?: number;
}

export interface PageLabelsOptions {
  rules: PageLabelRule[];
}

export class PageLabelsProcessor extends BasePDFProcessor {
  /**
   * Process PDF and inject page labels
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const labelOptions = options as unknown as PageLabelsOptions;

    // Validate input files
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required for page labeling.',
        `Received ${files.length} file(s).`
      );
    }

    // Validate rules
    if (!labelOptions || !labelOptions.rules || labelOptions.rules.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'At least one page labeling rule must be specified.'
      );
    }

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
      }

      this.updateProgress(20, 'Loading PDF document...');
      const file = files[0];
      const arrayBuffer = await file.arrayBuffer();

      let pdfDoc;
      try {
        pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      } catch (err) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_ENCRYPTED,
          'The PDF file is protected.',
          'Please decrypt the file first.'
        );
      }

      const totalPages = pdfDoc.getPageCount();
      this.updateProgress(40, `Analyzing rules for ${totalPages} pages...`);

      // 1. Map each page index (0 to totalPages - 1) to its matching rule
      const pageToRuleMap = new Array<PageLabelRule | null>(totalPages).fill(null);

      // Iterate in order; later rules will override earlier ones in case of conflict
      for (const rule of labelOptions.rules) {
        const pageIndices = parsePageLabelRange(rule.pageRange || '', totalPages);
        for (const idx of pageIndices) {
          pageToRuleMap[idx] = rule;
        }
      }

      // 2. Build the Nums array for the /PageLabels dictionary
      const Nums: any[] = [];
      const context = pdfDoc.context;

      // Keep track of how many pages have been assigned to each rule so far
      // to calculate the correct /St value for disjoint subsequences.
      const ruleAppliedCount = new Map<PageLabelRule, number>();
      for (const rule of labelOptions.rules) {
        ruleAppliedCount.set(rule, 0);
      }

      // Scan through page array to detect transition boundaries
      for (let i = 0; i < totalPages; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        }

        const currentRule = pageToRuleMap[i];
        const prevRule = i > 0 ? pageToRuleMap[i - 1] : undefined;

        const isTransition = i === 0 || currentRule !== prevRule;

        if (isTransition) {
          if (currentRule !== null) {
            // Transitioning into a custom rule
            const countSoFar = ruleAppliedCount.get(currentRule) || 0;
            const startValBase = currentRule.startValue !== undefined ? currentRule.startValue : 1;
            const finalStartVal = startValBase + countSoFar;

            const dictProperties: Record<string, any> = {};
            
            if (currentRule.style !== 'none') {
              dictProperties['S'] = pdfLib.PDFName.of(currentRule.style);
            }
            if (currentRule.prefix) {
              dictProperties['P'] = pdfLib.PDFHexString.fromText(currentRule.prefix);
            }
            if (finalStartVal !== 1) {
              dictProperties['St'] = pdfLib.PDFNumber.of(finalStartVal);
            }

            Nums.push(pdfLib.PDFNumber.of(i));
            Nums.push(context.obj(dictProperties));
          } else {
            // Transitioning into an un-mapped section -> Restore natural decimal indexing
            const finalStartVal = i + 1;
            
            const dictProperties: Record<string, any> = {
              S: pdfLib.PDFName.of('D'),
            };
            if (finalStartVal !== 1) {
              dictProperties['St'] = pdfLib.PDFNumber.of(finalStartVal);
            }

            Nums.push(pdfLib.PDFNumber.of(i));
            Nums.push(context.obj(dictProperties));
          }
        }

        // Increment the applied count for the rule that owns this page
        if (currentRule !== null) {
          const countSoFar = ruleAppliedCount.get(currentRule) || 0;
          ruleAppliedCount.set(currentRule, countSoFar + 1);
        }
      }

      this.updateProgress(75, 'Injecting PageLabels dictionary...');
      const catalog = pdfDoc.catalog;
      
      // Clear any pre-existing PageLabels
      catalog.delete(pdfLib.PDFName.of('PageLabels'));

      if (Nums.length > 0) {
        const pageLabelsDict = context.obj({
          Nums: context.obj(Nums),
        });
        catalog.set(pdfLib.PDFName.of('PageLabels'), pageLabelsDict);
      }

      this.updateProgress(85, 'Saving labeled PDF...');
      const compiledBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(compiledBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      const baseName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
      const outputFilename = `${baseName}_labeled.pdf`;

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount: totalPages,
        rulesCount: labelOptions.rules.length,
      });

    } catch (err) {
      console.error('PageLabels error:', err);
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to inject page labels.',
        err instanceof Error ? err.message : 'Unknown error during layout dictionary generation'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}


export function createPageLabelsProcessor(): PageLabelsProcessor {
  return new PageLabelsProcessor();
}

export async function addPageLabels(
  file: File,
  options: PageLabelsOptions,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPageLabelsProcessor();
  return processor.process({ files: [file], options: options as unknown as Record<string, unknown> }, onProgress);
}

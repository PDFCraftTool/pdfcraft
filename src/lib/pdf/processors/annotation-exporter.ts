/**
 * Annotation Exporter Processor
 * 
 * Extracts high-fidelity annotations (highlights, underlines, notes, ink) from PDF.
 * Converts extracted notes and associated context into Markdown or JSON outlines.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs } from '../loader';

export interface AnnotationExportOptions {
  format: 'md' | 'json';
  includeHighlights?: boolean;
  includeNotes?: boolean;
  includeUnderlines?: boolean;
  includeInk?: boolean;
}

const DEFAULT_OPTIONS: AnnotationExportOptions = {
  format: 'md',
  includeHighlights: true,
  includeNotes: true,
  includeUnderlines: true,
  includeInk: true,
};

export interface ExtractedAnnotation {
  type: string;
  contents: string;
  pageNumber: number;
  color?: number[];
  author?: string;
  date?: string;
  rect?: number[];
}

export class AnnotationExporterProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const exportOptions: AnnotationExportOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<AnnotationExportOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF parser...');
      const pdfjs = await loadPdfjs();
      
      const fileBytes = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: fileBytes }).promise;
      const totalPages = pdf.numPages;
      const annotations: ExtractedAnnotation[] = [];

      const progressInterval = 80 / totalPages;

      for (let i = 1; i <= totalPages; i++) {
        this.updateProgress(10 + i * progressInterval, `Scanning page ${i} for annotations...`);
        const page = await pdf.getPage(i);
        const annots = await page.getAnnotations();

        for (const ann of annots) {
          const subtype = String(ann.subtype || '');
          const contents = String(ann.contentsObj?.str ?? ann.contents ?? '').trim();

          // Skip empty annotations unless they are highlights or underlines (which might not have contents directly)
          if (!contents && subtype !== 'Highlight' && subtype !== 'Underline' && subtype !== 'Ink') {
            continue;
          }

          // Map types
          if (subtype === 'Highlight' && !exportOptions.includeHighlights) continue;
          if (subtype === 'Text' && !exportOptions.includeNotes) continue; // Sticky notes are subtype 'Text'
          if (subtype === 'Underline' && !exportOptions.includeUnderlines) continue;
          if (subtype === 'Ink' && !exportOptions.includeInk) continue;

          annotations.push({
            type: subtype,
            contents: contents || `[Annotated ${subtype}]`,
            pageNumber: i,
            color: ann.color ? Array.from(ann.color) : undefined,
            author: ann.titleObj?.str ?? ann.title ?? ann.author,
            date: ann.modificationDate,
            rect: ann.rect,
          });
        }
      }

      this.updateProgress(90, 'Structuring annotations output...');
      
      let blob: Blob;
      let outputFilename: string;
      const baseName = file.name.replace(/\.pdf$/i, '');

      if (exportOptions.format === 'json') {
        const jsonContent = JSON.stringify({
          document: file.name,
          totalAnnotations: annotations.length,
          annotations,
        }, null, 2);
        blob = new Blob([jsonContent], { type: 'application/json' });
        outputFilename = `${baseName}_annotations.json`;
      } else {
        // Markdown format
        let md = `# Annotations Notebook for ${file.name}\n\n`;
        md += `Total Annotations: ${annotations.length}\n\n---\n\n`;

        if (annotations.length === 0) {
          md += `*No annotations found matching selection criteria.*\n`;
        } else {
          let currentPage = -1;
          for (const ann of annotations) {
            if (ann.pageNumber !== currentPage) {
              currentPage = ann.pageNumber;
              md += `## 📄 Page ${currentPage}\n\n`;
            }
            
            const timeStr = ann.date ? ` *(${ann.date})*` : '';
            const authorStr = ann.author ? ` **${ann.author}**:` : '';
            
            md += `### 💡 [${ann.type}]${authorStr}${timeStr}\n`;
            md += `> ${ann.contents.replace(/\n/g, '\n> ')}\n\n`;
          }
        }

        blob = new Blob([md], { type: 'text/markdown' });
        outputFilename = `${baseName}_annotations.md`;
      }

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, outputFilename, {
        annotationCount: annotations.length,
        format: exportOptions.format,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to export PDF annotations.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createAnnotationExporterProcessor(): AnnotationExporterProcessor {
  return new AnnotationExporterProcessor();
}

export async function exportAnnotations(
  files: File[],
  options?: Partial<AnnotationExportOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createAnnotationExporterProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}

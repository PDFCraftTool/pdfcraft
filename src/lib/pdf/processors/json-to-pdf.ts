/**
 * JSON to PDF Processor
 * Requirements: 5.1
 * 
 * Converts JSON files to PDF with formatted output and optional syntax highlighting.
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
 * Page size presets in points (72 points = 1 inch)
 */
export const JSON_PAGE_SIZES = {
  A4: { width: 595.28, height: 841.89 },
  LETTER: { width: 612, height: 792 },
  LEGAL: { width: 612, height: 1008 },
  A3: { width: 841.89, height: 1190.55 },
} as const;

export type JSONPageSizeType = keyof typeof JSON_PAGE_SIZES;

/**
 * JSON to PDF options
 */
export interface JSONToPDFOptions {
  /** Page size preset */
  pageSize: JSONPageSizeType;
  /** Font size in points */
  fontSize: number;
  /** Line height multiplier */
  lineHeight: number;
  /** Indentation spaces */
  indentSpaces: number;
  /** Page margins in points */
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  /** Whether to format/pretty-print JSON */
  prettyPrint: boolean;
  /** Whether to show line numbers */
  showLineNumbers: boolean;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: JSONToPDFOptions = {
  pageSize: 'A4',
  fontSize: 10,
  lineHeight: 1.4,
  indentSpaces: 2,
  margin: {
    top: 72,
    right: 72,
    bottom: 72,
    left: 72,
  },
  prettyPrint: true,
  showLineNumbers: true,
};


/**
 * JSON to PDF Processor
 * Converts JSON files to PDF documents with formatting.
 */
export class JSONToPDFProcessor extends BasePDFProcessor {
  /**
   * Process JSON files and convert to PDF
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const pdfOptions: JSONToPDFOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<JSONToPDFOptions>),
    };

    // Validate we have at least 1 file
    if (files.length < 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'At least 1 JSON file is required.',
        `Received ${files.length} file(s).`
      );
    }

    try {
      this.updateProgress(5, 'Loading PDF library...');

      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(10, 'Creating PDF document...');

      // Create a new PDF document
      const pdfDoc = await pdfLib.PDFDocument.create();

      // Get monospace font for JSON
      const font = await pdfDoc.embedFont(pdfLib.StandardFonts.Courier);

      // Process each JSON file
      const progressPerFile = 80 / files.length;

      for (let i = 0; i < files.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        const file = files[i];
        const fileProgress = 10 + (i * progressPerFile);

        this.updateProgress(
          fileProgress,
          `Processing file ${i + 1} of ${files.length}: ${file.name}`
        );

        try {
          // Read and parse JSON content
          const text = await file.text();
          let jsonContent: string;

          try {
            // Parse and re-stringify to validate and format
            const parsed = JSON.parse(text);
            if (pdfOptions.prettyPrint) {
              jsonContent = JSON.stringify(parsed, null, pdfOptions.indentSpaces);
            } else {
              jsonContent = JSON.stringify(parsed);
            }
          } catch (parseError) {
            return this.createErrorOutput(
              PDFErrorCode.FILE_CORRUPTED,
              `Invalid JSON in file "${file.name}".`,
              parseError instanceof Error ? parseError.message : 'JSON parse error'
            );
          }

          // Add JSON to PDF
          await this.addJSONToDocument(pdfDoc, jsonContent, file.name, font, pdfOptions, pdfLib);
        } catch (error) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_FAILED,
            `Failed to process file "${file.name}".`,
            error instanceof Error ? error.message : 'Unknown error'
          );
        }
      }

      this.updateProgress(95, 'Saving PDF...');

      // Save the PDF
      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = this.generateOutputFilename(files);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount: pdfDoc.getPageCount(),
        fileCount: files.length,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to convert JSON to PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Add JSON content to PDF document
   */
  private async addJSONToDocument(
    pdfDoc: Awaited<ReturnType<typeof loadPdfLib>>['PDFDocument'] extends { create(): Promise<infer T> } ? T : never,
    jsonContent: string,
    filename: string,
    font: Awaited<ReturnType<typeof pdfDoc.embedFont>>,
    options: JSONToPDFOptions,
    pdfLib: Awaited<ReturnType<typeof loadPdfLib>>
  ): Promise<void> {
    const pageSize = JSON_PAGE_SIZES[options.pageSize];
    const { margin, fontSize, lineHeight, showLineNumbers } = options;

    // Calculate available width and height
    const lineNumberWidth = showLineNumbers ? fontSize * 4 : 0;
    const availableWidth = pageSize.width - margin.left - margin.right - lineNumberWidth;
    const availableHeight = pageSize.height - margin.top - margin.bottom;
    const lineSpacing = fontSize * lineHeight;

    // Split JSON into lines
    const lines = jsonContent.split('\n');

    // Wrap lines if needed
    const wrappedLines = this.wrapLines(lines, font, fontSize, availableWidth);

    // Add header with filename
    let currentPage = pdfDoc.addPage([pageSize.width, pageSize.height]);
    let yPosition = pageSize.height - margin.top;

    // Draw filename header
    currentPage.drawText(`File: ${filename}`, {
      x: margin.left,
      y: yPosition - fontSize,
      size: fontSize,
      font,
      color: pdfLib.rgb(0.4, 0.4, 0.4),
    });
    yPosition -= lineSpacing * 2;

    // Draw separator line
    currentPage.drawLine({
      start: { x: margin.left, y: yPosition },
      end: { x: pageSize.width - margin.right, y: yPosition },
      thickness: 0.5,
      color: pdfLib.rgb(0.8, 0.8, 0.8),
    });
    yPosition -= lineSpacing;

    // Draw JSON content
    let lineNumber = 1;
    for (const line of wrappedLines) {
      // Check if we need a new page
      if (yPosition - lineSpacing < margin.bottom) {
        currentPage = pdfDoc.addPage([pageSize.width, pageSize.height]);
        yPosition = pageSize.height - margin.top;
      }

      // Draw line number
      if (showLineNumbers) {
        currentPage.drawText(String(lineNumber).padStart(3, ' '), {
          x: margin.left,
          y: yPosition - fontSize,
          size: fontSize,
          font,
          color: pdfLib.rgb(0.6, 0.6, 0.6),
        });
      }

      // Draw JSON line
      currentPage.drawText(line, {
        x: margin.left + lineNumberWidth,
        y: yPosition - fontSize,
        size: fontSize,
        font,
        color: pdfLib.rgb(0, 0, 0),
      });

      yPosition -= lineSpacing;
      lineNumber++;
    }
  }

  /**
   * Wrap lines to fit within available width
   */
  private wrapLines(
    lines: string[],
    font: { widthOfTextAtSize: (text: string, size: number) => number },
    fontSize: number,
    maxWidth: number
  ): string[] {
    const wrappedLines: string[] = [];

    for (const line of lines) {
      if (line === '') {
        wrappedLines.push('');
        continue;
      }

      // Check if line fits
      if (font.widthOfTextAtSize(line, fontSize) <= maxWidth) {
        wrappedLines.push(line);
        continue;
      }

      // Need to wrap - preserve indentation
      const indent = line.match(/^(\s*)/)?.[1] || '';
      const content = line.slice(indent.length);

      let currentLine = indent;
      let i = 0;

      while (i < content.length) {
        const char = content[i];
        const testLine = currentLine + char;

        if (font.widthOfTextAtSize(testLine, fontSize) <= maxWidth) {
          currentLine = testLine;
          i++;
        } else {
          if (!currentLine.trim()) {
            throw new Error('The page margins and indentation leave no room for text. Reduce them or choose a wider page.');
          }
          wrappedLines.push(currentLine);
          currentLine = indent + '  '; // Continue with extra indent
        }
      }

      if (currentLine.trim()) {
        wrappedLines.push(currentLine);
      }
    }

    return wrappedLines;
  }

  /**
   * Generate output filename
   */
  private generateOutputFilename(files: File[]): string {
    if (files.length === 1) {
      const baseName = files[0].name.replace(/\.[^/.]+$/, '');
      return `${baseName}.pdf`;
    }
    return `json_${files.length}_files.pdf`;
  }

  /**
   * Get accepted file types
   */
  protected getAcceptedTypes(): string[] {
    return ['application/json', '.json'];
  }
}

/**
 * Create a new instance of the JSON to PDF processor
 */
export function createJSONToPDFProcessor(): JSONToPDFProcessor {
  return new JSONToPDFProcessor();
}

/**
 * Convert JSON files to PDF (convenience function)
 */
export async function jsonToPDF(
  files: File[],
  options?: Partial<JSONToPDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createJSONToPDFProcessor();
  return processor.process(
    {
      files,
      options: options || {},
    },
    onProgress
  );
}

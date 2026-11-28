/**
 * PDF Merge Processor
 * Requirements: 5.1
 * 
 * Implements PDF merging functionality using pdf-lib.
 * Supports merging multiple PDFs with optional bookmark preservation.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
  MergeOptions,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor, createPDFError } from '../processor';
import { loadPdfLib, loadPdfDocument, createPdfDocument } from '../loader';
import { imagesToPDF } from './image-to-pdf';
import { textToPDF } from './text-to-pdf';

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff', '.tif', '.svg', '.heic', '.heif'];
const TEXT_EXTENSIONS = ['.txt', '.text', '.md', '.markdown', '.log'];
const WORD_EXTENSIONS = ['.docx', '.doc', '.odt', '.rtf'];
const EXCEL_EXTENSIONS = ['.xlsx', '.xls', '.ods', '.csv'];
const PPT_EXTENSIONS = ['.pptx', '.ppt', '.odp'];

function isImageFile(file: File): boolean {
  if (file.type && file.type.toLowerCase().startsWith('image/')) {
    return true;
  }
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  return IMAGE_EXTENSIONS.includes(ext);
}

function isTextFile(file: File): boolean {
  if (file.type && (file.type.toLowerCase() === 'text/plain' || file.type.toLowerCase() === 'text/markdown')) {
    return true;
  }
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  return TEXT_EXTENSIONS.includes(ext);
}

function isWordFile(file: File): boolean {
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  return WORD_EXTENSIONS.includes(ext);
}

function isExcelFile(file: File): boolean {
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  return EXCEL_EXTENSIONS.includes(ext);
}

function isPowerPointFile(file: File): boolean {
  const ext = '.' + file.name.split('.').pop()?.toLowerCase();
  return PPT_EXTENSIONS.includes(ext);
}

async function blobToArrayBuffer(blob: Blob | File): Promise<ArrayBuffer> {
  if (typeof (blob as any).arrayBuffer === 'function') {
    try {
      return await (blob as any).arrayBuffer();
    } catch {
      // fallback
    }
  }
  if (typeof FileReader !== 'undefined') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result instanceof ArrayBuffer) {
          resolve(reader.result);
        } else {
          resolve(new ArrayBuffer(0));
        }
      };
      reader.onerror = () => reject(reader.error || new Error('Failed to read blob'));
      reader.readAsArrayBuffer(blob);
    });
  }
  throw new Error('Cannot read blob as ArrayBuffer');
}

/**
 * Default merge options
 */
const DEFAULT_MERGE_OPTIONS: MergeOptions = {
  preserveBookmarks: true,
  pageOrder: 'sequential',
};

/**
 * Merge PDF Processor
 * Merges multiple PDF files into a single PDF document.
 */
export class MergePDFProcessor extends BasePDFProcessor {
  /**
   * Process multiple PDF files and merge them into one
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const mergeOptions: MergeOptions = {
      ...DEFAULT_MERGE_OPTIONS,
      ...(options as Partial<MergeOptions>),
    };

    // Validate we have at least 2 files
    if (files.length < 2) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'At least 2 PDF files are required for merging.',
        `Received ${files.length} file(s).`
      );
    }

    try {
      this.updateProgress(5, 'Loading PDF library...');

      // Load pdf-lib
      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(10, 'Creating merged document...');

      // Create a new PDF document for the merged result
      const mergedPdf = await pdfLib.PDFDocument.create();

      // Track bookmarks if preserving them
      const bookmarks: BookmarkEntry[] = [];
      let currentPageIndex = 0;

      // Process each file
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
          let sourcePdf: any = null;

          if (isImageFile(file)) {
            const imgResult = await imagesToPDF([file], {
              pageSize: 'A4',
              orientation: 'auto',
              scaleToFit: true,
              centerImage: true,
              margin: 36,
            });
            if (!imgResult.success || !imgResult.result) {
              return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                `Failed to convert image "${file.name}" to PDF.`,
                imgResult.error?.message || 'Unknown image conversion error'
              );
            }
            const imgBlob = imgResult.result as Blob;
            const imgBuffer = await blobToArrayBuffer(imgBlob);
            sourcePdf = await pdfLib.PDFDocument.load(imgBuffer);
          } else if (isTextFile(file)) {
            const txtResult = await textToPDF([file], {
              pageSize: 'A4',
              fontSize: 11,
              lineHeight: 1.4,
            });
            if (!txtResult.success || !txtResult.result) {
              return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                `Failed to convert text file "${file.name}" to PDF.`,
                txtResult.error?.message || 'Unknown text conversion error'
              );
            }
            const txtBlob = txtResult.result as Blob;
            const txtBuffer = await blobToArrayBuffer(txtBlob);
            sourcePdf = await pdfLib.PDFDocument.load(txtBuffer);
          } else if (isWordFile(file)) {
            this.updateProgress(fileProgress, `Converting Word document "${file.name}" to PDF...`);
            const { wordToPDF } = await import('./word-to-pdf');
            const docResult = await wordToPDF(file, {}, (prog, msg) => {
              if (!this.checkCancelled()) {
                this.updateProgress(fileProgress + (prog / 100) * progressPerFile * 0.9, msg || `Converting ${file.name}...`);
              }
            });
            if (!docResult.success || !docResult.result) {
              return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                `Failed to convert Word document "${file.name}" to PDF.`,
                docResult.error?.message || 'Word conversion failed'
              );
            }
            const docBlob = docResult.result as Blob;
            const docBuffer = await blobToArrayBuffer(docBlob);
            sourcePdf = await pdfLib.PDFDocument.load(docBuffer);
          } else if (isExcelFile(file)) {
            this.updateProgress(fileProgress, `Converting spreadsheet "${file.name}" to PDF...`);
            const { excelToPDF } = await import('./excel-to-pdf');
            const xlsResult = await excelToPDF(file, {}, (prog, msg) => {
              if (!this.checkCancelled()) {
                this.updateProgress(fileProgress + (prog / 100) * progressPerFile * 0.9, msg || `Converting ${file.name}...`);
              }
            });
            if (!xlsResult.success || !xlsResult.result) {
              return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                `Failed to convert spreadsheet "${file.name}" to PDF.`,
                xlsResult.error?.message || 'Excel conversion failed'
              );
            }
            const xlsBlob = xlsResult.result as Blob;
            const xlsBuffer = await blobToArrayBuffer(xlsBlob);
            sourcePdf = await pdfLib.PDFDocument.load(xlsBuffer);
          } else if (isPowerPointFile(file)) {
            this.updateProgress(fileProgress, `Converting presentation "${file.name}" to PDF...`);
            const { pptxToPDF } = await import('./pptx-to-pdf');
            const pptResult = await pptxToPDF(file, {}, (prog, msg) => {
              if (!this.checkCancelled()) {
                this.updateProgress(fileProgress + (prog / 100) * progressPerFile * 0.9, msg || `Converting ${file.name}...`);
              }
            });
            if (!pptResult.success || !pptResult.result) {
              return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                `Failed to convert presentation "${file.name}" to PDF.`,
                pptResult.error?.message || 'PowerPoint conversion failed'
              );
            }
            const pptBlob = pptResult.result as Blob;
            const pptBuffer = await blobToArrayBuffer(pptBlob);
            sourcePdf = await pdfLib.PDFDocument.load(pptBuffer);
          } else {
            // Read file as ArrayBuffer for PDF
            const arrayBuffer = await blobToArrayBuffer(file);
            sourcePdf = await pdfLib.PDFDocument.load(arrayBuffer, {
              ignoreEncryption: false,
            });
          }

          // Get page count for bookmark tracking
          const pageCount = sourcePdf.getPageCount();

          // Copy all pages from source to merged document
          const copiedPages = await mergedPdf.copyPages(
            sourcePdf,
            sourcePdf.getPageIndices()
          );

          // Add copied pages to merged document
          for (const page of copiedPages) {
            mergedPdf.addPage(page);
          }

          // Track bookmark for this file if preserving bookmarks
          if (mergeOptions.preserveBookmarks) {
            bookmarks.push({
              title: getFileNameWithoutExtension(file.name),
              pageIndex: currentPageIndex,
              pageCount,
            });
          }

          currentPageIndex += pageCount;

        } catch (error) {
          // Check if it's an encryption error
          if (error instanceof Error && error.message.includes('encrypt')) {
            return this.createErrorOutput(
              PDFErrorCode.PDF_ENCRYPTED,
              `File "${file.name}" is encrypted.`,
              'Please decrypt the file before merging.'
            );
          }

          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_FAILED,
            `Failed to process file "${file.name}".`,
            error instanceof Error ? error.message : 'Unknown error'
          );
        }
      }

      this.updateProgress(90, 'Adding bookmarks...');

      // Add bookmarks if preserving them
      if (mergeOptions.preserveBookmarks && bookmarks.length > 0) {
        await addBookmarksToDocument(mergedPdf, bookmarks);
      }

      this.updateProgress(95, 'Saving merged PDF...');

      // Save the merged PDF
      const mergedPdfBytes = await mergedPdf.save({ useObjectStreams: true });
      // Create blob from the Uint8Array
      const blob = new Blob([new Uint8Array(mergedPdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateMergedFilename(files);

      return this.createSuccessOutput(blob, outputFilename, {
        pageCount: currentPageIndex,
        fileCount: files.length,
        bookmarkCount: bookmarks.length,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to merge PDF files.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for merge processor
   */
  protected getAcceptedTypes(): string[] {
    return [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/bmp',
      'image/tiff',
      'image/svg+xml',
      'text/plain',
      'text/markdown',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'application/vnd.oasis.opendocument.text',
      'application/rtf',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'application/vnd.oasis.opendocument.spreadsheet',
      'text/csv',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-powerpoint',
      'application/vnd.oasis.opendocument.presentation',
      ...WORD_EXTENSIONS,
      ...EXCEL_EXTENSIONS,
      ...PPT_EXTENSIONS,
    ];
  }
}

/**
 * Bookmark entry for tracking file positions
 */
interface BookmarkEntry {
  title: string;
  pageIndex: number;
  pageCount: number;
}

/**
 * Add bookmarks to a PDF document
 * Creates a bookmark for each merged file pointing to its first page
 * 
 * Note: pdf-lib has limited bookmark support, so we use low-level PDF operations
 */
async function addBookmarksToDocument(
  pdfDoc: Awaited<ReturnType<typeof createPdfDocument>>,
  bookmarks: BookmarkEntry[]
): Promise<void> {
  const pdfLib = await loadPdfLib();

  // Get the document's context and catalog
  const context = pdfDoc.context;
  const catalog = pdfDoc.catalog;

  // Create outline entries array to track refs
  const outlineEntryRefs: ReturnType<typeof context.register>[] = [];

  // Create each bookmark entry first
  for (let i = 0; i < bookmarks.length; i++) {
    const bookmark = bookmarks[i];
    const page = pdfDoc.getPage(bookmark.pageIndex);
    const pageRef = page.ref;

    // Create destination array [page /XYZ left top zoom]
    const destArray = pdfLib.PDFArray.withContext(context);
    destArray.push(pageRef);
    destArray.push(pdfLib.PDFName.of('XYZ'));
    destArray.push(pdfLib.PDFNull);
    destArray.push(pdfLib.PDFNull);
    destArray.push(pdfLib.PDFNull);

    // Create bookmark dictionary
    const bookmarkDict = pdfLib.PDFDict.withContext(context);
    bookmarkDict.set(pdfLib.PDFName.of('Title'), pdfLib.PDFHexString.fromText(bookmark.title));
    bookmarkDict.set(pdfLib.PDFName.of('Dest'), destArray);

    const bookmarkRef = context.register(bookmarkDict);
    outlineEntryRefs.push(bookmarkRef);
  }

  // Create outline dictionary
  const outlineDict = pdfLib.PDFDict.withContext(context);
  outlineDict.set(pdfLib.PDFName.of('Type'), pdfLib.PDFName.of('Outlines'));
  outlineDict.set(pdfLib.PDFName.of('Count'), pdfLib.PDFNumber.of(bookmarks.length));

  const outlineRef = context.register(outlineDict);

  // Link bookmarks together and set parent
  for (let i = 0; i < outlineEntryRefs.length; i++) {
    const entryRef = outlineEntryRefs[i];
    const entryDict = context.lookup(entryRef) as ReturnType<typeof pdfLib.PDFDict.withContext>;

    // Set parent
    entryDict.set(pdfLib.PDFName.of('Parent'), outlineRef);

    // Set prev/next links
    if (i > 0) {
      entryDict.set(pdfLib.PDFName.of('Prev'), outlineEntryRefs[i - 1]);
    }
    if (i < outlineEntryRefs.length - 1) {
      entryDict.set(pdfLib.PDFName.of('Next'), outlineEntryRefs[i + 1]);
    }
  }

  // Set first and last in outline
  if (outlineEntryRefs.length > 0) {
    outlineDict.set(pdfLib.PDFName.of('First'), outlineEntryRefs[0]);
    outlineDict.set(pdfLib.PDFName.of('Last'), outlineEntryRefs[outlineEntryRefs.length - 1]);
  }

  // Add outline to catalog
  catalog.set(pdfLib.PDFName.of('Outlines'), outlineRef);
}

/**
 * Get filename without extension
 */
function getFileNameWithoutExtension(filename: string): string {
  const lastDot = filename.lastIndexOf('.');
  if (lastDot === -1) return filename;
  return filename.slice(0, lastDot);
}

/**
 * Generate a filename for the merged PDF
 */
function generateMergedFilename(files: File[]): string {
  if (files.length === 0) return 'merged.pdf';

  // Use first file's name as base
  const firstName = getFileNameWithoutExtension(files[0].name);

  if (files.length === 2) {
    const secondName = getFileNameWithoutExtension(files[1].name);
    return `${firstName}_${secondName}_merged.pdf`;
  }

  return `${firstName}_and_${files.length - 1}_more_merged.pdf`;
}

/**
 * Create a new instance of the merge processor
 */
export function createMergeProcessor(): MergePDFProcessor {
  return new MergePDFProcessor();
}

/**
 * Merge multiple PDF files (convenience function)
 */
export async function mergePDFs(
  files: File[],
  options?: Partial<MergeOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createMergeProcessor();
  return processor.process(
    {
      files,
      options: options || {},
    },
    onProgress
  );
}

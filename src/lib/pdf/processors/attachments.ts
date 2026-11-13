/**
 * PDF Attachments Processors
 * Requirements: 5.1
 * 
 * Implements PDF attachment functionality using coherentpdf via Web Workers.
 * Supports adding, extracting, and editing attachments in PDF files.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { decodePdfFilename } from '../utils/filename-decoder';
import { withBasePath } from '@/lib/utils/path';

/**
 * Attachment info returned from the worker
 */
export interface AttachmentInfo {
  index: number;
  name: string;
  page: number;
  data: ArrayBuffer;
}

/**
 * Options for adding attachments
 */
export interface AddAttachmentsOptions {
  /** Level at which to attach files: 'document' or 'page' */
  attachmentLevel: 'document' | 'page';
  /** Page range for page-level attachments (e.g., "1-3,5,7-9") */
  pageRange?: string;
}

/**
 * Options for editing attachments
 */
export interface EditAttachmentsOptions {
  /** Indices of attachments to remove */
  attachmentsToRemove?: number[];
}

/**
 * Default add attachments options
 */
const DEFAULT_ADD_OPTIONS: AddAttachmentsOptions = {
  attachmentLevel: 'document',
};

/**
 * Add Attachments Processor
 * Adds files as attachments to a PDF document.
 */
export class AddAttachmentsPDFProcessor extends BasePDFProcessor {
  private worker: Worker | null = null;

  /**
   * Process PDF and add attachments
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const addOptions: AddAttachmentsOptions = {
      ...DEFAULT_ADD_OPTIONS,
      ...(options as Partial<AddAttachmentsOptions>),
    };

    // First file is the PDF, rest are attachments
    if (files.length < 2) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide a PDF file and at least one file to attach.',
        `Received ${files.length} file(s).`
      );
    }

    const pdfFile = files[0];
    const attachmentFiles = files.slice(1);

    // Validate PDF file
    if (!pdfFile.name.toLowerCase().endsWith('.pdf')) {
      return this.createErrorOutput(
        PDFErrorCode.FILE_TYPE_INVALID,
        'The first file must be a PDF.',
        `Received: ${pdfFile.name}`
      );
    }

    try {
      this.updateProgress(5, 'Loading PDF file...');

      // Read PDF file
      const pdfBuffer = await pdfFile.arrayBuffer();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(20, 'Loading attachment files...');

      // Read all attachment files
      const attachmentBuffers: ArrayBuffer[] = [];
      const attachmentNames: string[] = [];

      for (let i = 0; i < attachmentFiles.length; i++) {
        const file = attachmentFiles[i];
        const buffer = await file.arrayBuffer();
        attachmentBuffers.push(buffer);
        attachmentNames.push(file.name);
        
        this.updateProgress(
          20 + (30 * (i + 1) / attachmentFiles.length),
          `Loading attachment ${i + 1} of ${attachmentFiles.length}...`
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(50, 'Adding attachments to PDF...');

      // Process using Web Worker
      const result = await this.processWithWorker(
        pdfBuffer,
        attachmentBuffers,
        attachmentNames,
        addOptions
      );

      if (!result.success) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_FAILED,
          result.error || 'Failed to add attachments to PDF.'
        );
      }

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const baseName = pdfFile.name.replace(/\.pdf$/i, '');
      const outputFilename = `${baseName}_with_attachments.pdf`;

      return this.createSuccessOutput(result.blob!, outputFilename, {
        attachmentCount: attachmentFiles.length,
        attachmentNames,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to add attachments to PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Process using Web Worker
   */
  private processWithWorker(
    pdfBuffer: ArrayBuffer,
    attachmentBuffers: ArrayBuffer[],
    attachmentNames: string[],
    options: AddAttachmentsOptions
  ): Promise<{ success: boolean; blob?: Blob; error?: string }> {
    return new Promise((resolve) => {
      try {
        this.worker = new Worker(withBasePath('/workers/add-attachments.worker.js'));

        this.worker.onmessage = (e) => {
          const { status, modifiedPDF, message } = e.data;

          if (status === 'success') {
            const blob = new Blob([new Uint8Array(modifiedPDF)], { type: 'application/pdf' });
            resolve({ success: true, blob });
          } else {
            resolve({ success: false, error: message || 'Worker processing failed' });
          }

          this.terminateWorker();
        };

        this.worker.onerror = (error) => {
          resolve({ success: false, error: error.message || 'Worker error occurred' });
          this.terminateWorker();
        };

        // Send data to worker
        this.worker.postMessage({
          command: 'add-attachments',
          pdfBuffer,
          attachmentBuffers,
          attachmentNames,
          attachmentLevel: options.attachmentLevel,
          pageRange: options.pageRange || '',
        });

      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : 'Failed to start worker'
        });
      }
    });
  }

  /**
   * Terminate the worker
   */
  private terminateWorker(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  /**
   * Cancel processing
   */
  cancel(): void {
    super.cancel();
    this.terminateWorker();
  }

  /**
   * Get accepted file types
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf', '*/*'];
  }
}

/**
 * Extract Attachments Processor
 * Extracts all attachments from PDF files.
 */
export class ExtractAttachmentsPDFProcessor extends BasePDFProcessor {
  private worker: Worker | null = null;

  /**
   * Process PDF files and extract attachments
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files } = input;

    if (files.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide at least one PDF file.',
        'No files provided.'
      );
    }

    try {
      this.updateProgress(5, 'Loading PDF files...');

      // Read all PDF files
      const fileBuffers: ArrayBuffer[] = [];
      const fileNames: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.name.toLowerCase().endsWith('.pdf')) {
          continue; // Skip non-PDF files
        }
        const buffer = await file.arrayBuffer();
        fileBuffers.push(buffer);
        fileNames.push(file.name);

        this.updateProgress(
          5 + (25 * (i + 1) / files.length),
          `Loading file ${i + 1} of ${files.length}...`
        );
      }

      if (fileBuffers.length === 0) {
        return this.createErrorOutput(
          PDFErrorCode.FILE_TYPE_INVALID,
          'No valid PDF files provided.',
          'Please select PDF files.'
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(30, 'Extracting attachments...');

      // Process using Web Worker
      const result = await this.processWithWorker(fileBuffers, fileNames);

      if (!result.success) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_FAILED,
          result.error || 'Failed to extract attachments.'
        );
      }

      this.updateProgress(100, 'Complete!');

      // Return attachments as metadata (they'll be handled by the UI)
      const decodedAttachments = (result.attachments || []).map((att) => ({
        ...att,
        name: decodePdfFilename(att.name),
      }));

      return {
        success: true,
        result: undefined, // No single blob result
        metadata: {
          attachments: decodedAttachments,
          attachmentCount: decodedAttachments.length,
        },
      };

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to extract attachments.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Process using Web Worker
   */
  private processWithWorker(
    fileBuffers: ArrayBuffer[],
    fileNames: string[]
  ): Promise<{ success: boolean; attachments?: AttachmentInfo[]; error?: string }> {
    return new Promise((resolve) => {
      try {
        this.worker = new Worker(withBasePath('/workers/extract-attachments.worker.js'));

        this.worker.onmessage = (e) => {
          const { status, attachments, message } = e.data;

          if (status === 'success') {
            resolve({ success: true, attachments });
          } else {
            resolve({ success: false, error: message || 'Worker processing failed' });
          }

          this.terminateWorker();
        };

        this.worker.onerror = (error) => {
          resolve({ success: false, error: error.message || 'Worker error occurred' });
          this.terminateWorker();
        };

        // Send data to worker
        this.worker.postMessage({
          command: 'extract-attachments',
          fileBuffers,
          fileNames,
        });

      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : 'Failed to start worker'
        });
      }
    });
  }

  /**
   * Terminate the worker
   */
  private terminateWorker(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  /**
   * Cancel processing
   */
  cancel(): void {
    super.cancel();
    this.terminateWorker();
  }

  /**
   * Get accepted file types
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Edit Attachments Processor
 * Lists and removes attachments from a PDF file.
 */
export class EditAttachmentsPDFProcessor extends BasePDFProcessor {
  private worker: Worker | null = null;

  /**
   * Get attachments from a PDF file
   */
  async getAttachments(file: File): Promise<{ success: boolean; attachments?: AttachmentInfo[]; error?: string }> {
    try {
      const buffer = await file.arrayBuffer();
      const res = await this.getAttachmentsWithWorker(buffer, file.name);
      if (res.success && res.attachments) {
        res.attachments = res.attachments.map((att) => ({
          ...att,
          name: decodePdfFilename(att.name),
        }));
      }
      return res;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to read file'
      };
    }
  }

  /**
   * Process PDF and remove selected attachments
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const editOptions = options as EditAttachmentsOptions;

    if (files.length === 0) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide a PDF file.',
        'No files provided.'
      );
    }

    const pdfFile = files[0];

    if (!pdfFile.name.toLowerCase().endsWith('.pdf')) {
      return this.createErrorOutput(
        PDFErrorCode.FILE_TYPE_INVALID,
        'Please provide a PDF file.',
        `Received: ${pdfFile.name}`
      );
    }

    try {
      this.updateProgress(10, 'Loading PDF file...');

      const pdfBuffer = await pdfFile.arrayBuffer();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(30, 'Removing selected attachments...');

      // Process using Web Worker
      const result = await this.editAttachmentsWithWorker(
        pdfBuffer,
        pdfFile.name,
        editOptions.attachmentsToRemove || []
      );

      if (!result.success) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_FAILED,
          result.error || 'Failed to edit attachments.'
        );
      }

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const baseName = pdfFile.name.replace(/\.pdf$/i, '');
      const outputFilename = `${baseName}_edited.pdf`;

      return this.createSuccessOutput(result.blob!, outputFilename, {
        removedCount: editOptions.attachmentsToRemove?.length || 0,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to edit attachments.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get attachments using Web Worker
   */
  private getAttachmentsWithWorker(
    fileBuffer: ArrayBuffer,
    fileName: string
  ): Promise<{ success: boolean; attachments?: AttachmentInfo[]; error?: string }> {
    return new Promise((resolve) => {
      try {
        this.worker = new Worker(withBasePath('/workers/edit-attachments.worker.js'));

        this.worker.onmessage = (e) => {
          const { status, attachments, message } = e.data;

          if (status === 'success') {
            resolve({ success: true, attachments });
          } else {
            resolve({ success: false, error: message || 'Worker processing failed' });
          }

          this.terminateWorker();
        };

        this.worker.onerror = (error) => {
          resolve({ success: false, error: error.message || 'Worker error occurred' });
          this.terminateWorker();
        };

        // Send data to worker
        this.worker.postMessage({
          command: 'get-attachments',
          fileBuffer,
          fileName,
        });

      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : 'Failed to start worker'
        });
      }
    });
  }

  /**
   * Edit attachments using Web Worker
   */
  private editAttachmentsWithWorker(
    fileBuffer: ArrayBuffer,
    fileName: string,
    attachmentsToRemove: number[]
  ): Promise<{ success: boolean; blob?: Blob; error?: string }> {
    return new Promise((resolve) => {
      try {
        this.worker = new Worker(withBasePath('/workers/edit-attachments.worker.js'));

        this.worker.onmessage = (e) => {
          const { status, modifiedPDF, message } = e.data;

          if (status === 'success') {
            const blob = new Blob([new Uint8Array(modifiedPDF)], { type: 'application/pdf' });
            resolve({ success: true, blob });
          } else {
            resolve({ success: false, error: message || 'Worker processing failed' });
          }

          this.terminateWorker();
        };

        this.worker.onerror = (error) => {
          resolve({ success: false, error: error.message || 'Worker error occurred' });
          this.terminateWorker();
        };

        // Send data to worker
        this.worker.postMessage({
          command: 'edit-attachments',
          fileBuffer,
          fileName,
          attachmentsToRemove,
        });

      } catch (error) {
        resolve({
          success: false,
          error: error instanceof Error ? error.message : 'Failed to start worker'
        });
      }
    });
  }

  /**
   * Terminate the worker
   */
  private terminateWorker(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  /**
   * Cancel processing
   */
  cancel(): void {
    super.cancel();
    this.terminateWorker();
  }

  /**
   * Get accepted file types
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Create a new instance of the add attachments processor
 */
export function createAddAttachmentsProcessor(): AddAttachmentsPDFProcessor {
  return new AddAttachmentsPDFProcessor();
}

/**
 * Create a new instance of the extract attachments processor
 */
export function createExtractAttachmentsProcessor(): ExtractAttachmentsPDFProcessor {
  return new ExtractAttachmentsPDFProcessor();
}

/**
 * Create a new instance of the edit attachments processor
 */
export function createEditAttachmentsProcessor(): EditAttachmentsPDFProcessor {
  return new EditAttachmentsPDFProcessor();
}

/**
 * Add attachments to a PDF (convenience function)
 */
export async function addAttachments(
  pdfFile: File,
  attachmentFiles: File[],
  options?: Partial<AddAttachmentsOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createAddAttachmentsProcessor();
  return processor.process(
    {
      files: [pdfFile, ...attachmentFiles],
      options: options || {},
    },
    onProgress
  );
}

/**
 * Extract attachments from PDF files (convenience function)
 */
export async function extractAttachments(
  files: File[],
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createExtractAttachmentsProcessor();
  return processor.process(
    {
      files,
      options: {},
    },
    onProgress
  );
}

/**
 * Edit attachments in a PDF (convenience function)
 */
export async function editAttachments(
  file: File,
  attachmentsToRemove: number[],
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createEditAttachmentsProcessor();
  return processor.process(
    {
      files: [file],
      options: { attachmentsToRemove },
    },
    onProgress
  );
}

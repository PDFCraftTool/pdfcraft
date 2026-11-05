/**
 * PDF Edit Metadata Processor
 * Requirements: 5.1
 * 
 * Implements PDF metadata editing functionality using pdf-lib.
 * Supports editing title, author, subject, and keywords.
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
 * Metadata fields that can be edited
 */
export interface EditableMetadata {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string[];
  creator?: string;
  producer?: string;
  creationDate?: Date;
  modificationDate?: Date;
}

/**
 * Edit metadata options
 */
export interface EditMetadataOptions {
  metadata: EditableMetadata;
  updateModificationDate?: boolean;
}

/**
 * Default edit metadata options
 */
const DEFAULT_OPTIONS: Partial<EditMetadataOptions> = {
  updateModificationDate: true,
};

/**
 * Edit Metadata PDF Processor
 * Edits metadata fields in a PDF document.
 */
export class EditMetadataPDFProcessor extends BasePDFProcessor {
  /**
   * Process a PDF file and edit its metadata
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const inputOptions = options as Partial<EditMetadataOptions>;

    // Ensure metadata is provided
    if (!inputOptions.metadata) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Metadata object is required.',
        'Please provide metadata fields to update.'
      );
    }

    const editOptions: EditMetadataOptions = {
      metadata: inputOptions.metadata,
      updateModificationDate: inputOptions.updateModificationDate ?? DEFAULT_OPTIONS.updateModificationDate ?? true,
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Exactly 1 PDF file is required for editing metadata.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF library...');

      // Load pdf-lib
      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(20, 'Reading PDF file...');

      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(40, 'Loading PDF document...');

      // Load the PDF document
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, {
        ignoreEncryption: false,
        // Apply only the explicit edits below, including the modification-date option.
        updateMetadata: false,
      });

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(60, 'Updating metadata...');

      // Update metadata fields
      const { metadata } = editOptions;

      if (metadata.title !== undefined) {
        pdfDoc.setTitle(metadata.title);
      }

      if (metadata.author !== undefined) {
        pdfDoc.setAuthor(metadata.author);
      }

      if (metadata.subject !== undefined) {
        pdfDoc.setSubject(metadata.subject);
      }

      if (metadata.keywords !== undefined) {
        pdfDoc.setKeywords(metadata.keywords);
      }

      if (metadata.creator !== undefined) {
        pdfDoc.setCreator(metadata.creator);
      }

      if (metadata.producer !== undefined) {
        pdfDoc.setProducer(metadata.producer);
      }

      // Set creation date if provided
      if (metadata.creationDate !== undefined) {
        pdfDoc.setCreationDate(metadata.creationDate);
      }

      // Update modification date: use explicit value if provided, otherwise auto-update if requested
      if (metadata.modificationDate !== undefined) {
        pdfDoc.setModificationDate(metadata.modificationDate);
      } else if (editOptions.updateModificationDate) {
        pdfDoc.setModificationDate(new Date());
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(80, 'Saving PDF...');

      // Save the modified PDF
      const modifiedPdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(modifiedPdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateOutputFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        updatedFields: Object.keys(metadata).filter(
          (key) => metadata[key as keyof EditableMetadata] !== undefined
        ),
      });

    } catch (error) {
      // Check if it's an encryption error
      if (error instanceof Error && error.message.includes('encrypt')) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_ENCRYPTED,
          'This PDF is encrypted.',
          'Please decrypt the file before editing metadata.'
        );
      }

      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to edit PDF metadata.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for this processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate output filename
 */
function generateOutputFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_edited.pdf`;
}

/**
 * Create a new instance of the edit metadata processor
 */
export function createEditMetadataProcessor(): EditMetadataPDFProcessor {
  return new EditMetadataPDFProcessor();
}

/**
 * Edit PDF metadata (convenience function)
 */
export async function editPDFMetadata(
  file: File,
  metadata: EditableMetadata,
  options?: Partial<Omit<EditMetadataOptions, 'metadata'>>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createEditMetadataProcessor();
  return processor.process(
    {
      files: [file],
      options: { metadata, ...options },
    },
    onProgress
  );
}

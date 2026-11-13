/**
 * PDF Repair Processor
 * Requirements: 5.1
 * 
 * Implements PDF repair functionality using qpdf-wasm.
 * Attempts to fix corrupted or malformed PDF files by:
 * - Rebuilding cross-reference tables
 * - Fixing corrupted objects
 * - Handling encryption issues
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { withBasePath } from '@/lib/utils/path';

/**
 * Repair PDF options
 */
export interface RepairPDFOptions {
  /** Attempt to recover from encryption issues */
  ignoreEncryption: boolean;
  /** Rebuild cross-reference table */
  rebuildXref: boolean;
  /** Remove corrupted objects */
  removeCorruptedObjects: boolean;
}

/**
 * Default repair options
 */
const DEFAULT_REPAIR_OPTIONS: RepairPDFOptions = {
  ignoreEncryption: true,
  rebuildXref: true,
  removeCorruptedObjects: true,
};

// QPDF instance singleton
let qpdfInstance: any = null;
let qpdfLoadPromise: Promise<any> | null = null;

/**
 * Initialize qpdf-wasm singleton
 * Uses script tag loading to avoid Next.js SSR bundling issues
 */
async function initializeQpdf(): Promise<any> {
  // Return cached instance if available
  if (qpdfInstance) {
    return qpdfInstance;
  }

  // Return existing loading promise if already loading
  if (qpdfLoadPromise) {
    return qpdfLoadPromise;
  }

  // Only run in browser environment
  if (typeof window === 'undefined') {
    throw new Error('QPDF can only be initialized in browser environment');
  }

  qpdfLoadPromise = new Promise((resolve, reject) => {
    // Check if Module is already available
    if ((window as any).Module && typeof (window as any).Module === 'function') {
      initQpdfModule(resolve, reject);
      return;
    }

    // Load the script dynamically
    const script = document.createElement('script');
    script.src = withBasePath('/qpdf.js');
    script.async = true;

    script.onload = () => {
      initQpdfModule(resolve, reject);
    };

    script.onerror = () => {
      qpdfLoadPromise = null;
      reject(new Error('Failed to load QPDF script'));
    };

    document.head.appendChild(script);
  });

  return qpdfLoadPromise;
}

/**
 * Initialize the QPDF module after script is loaded
 */
function initQpdfModule(resolve: (value: any) => void, reject: (reason: any) => void) {
  try {
    const createModule = (window as any).Module;
    
    if (!createModule || typeof createModule !== 'function') {
      reject(new Error('QPDF module not found after script load'));
      return;
    }

    createModule({
      locateFile: (path: string) => {
        if (path.endsWith('.wasm')) {
          return withBasePath('/qpdf.wasm');
        }
        return path;
      },
    }).then((instance: any) => {
      qpdfInstance = instance;
      resolve(instance);
    }).catch((err: any) => {
      qpdfLoadPromise = null;
      reject(err);
    });
  } catch (err) {
    qpdfLoadPromise = null;
    reject(err);
  }
}

/**
 * Repair PDF Processor
 * Attempts to repair corrupted or malformed PDF files using qpdf.
 */
export class RepairPDFProcessor extends BasePDFProcessor {
  /**
   * Process PDF file and attempt to repair it
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const repairOptions: RepairPDFOptions = {
      ...DEFAULT_REPAIR_OPTIONS,
      ...(options as Partial<RepairPDFOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file to repair.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];
    const inputPath = '/input.pdf';
    const outputPath = '/output.pdf';
    let qpdf: any;

    try {
      this.updateProgress(5, 'Initializing repair engine...');

      // Initialize qpdf-wasm
      qpdf = await initializeQpdf();
      
      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(15, 'Reading PDF file...');

      // Read file as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();
      const originalSize = arrayBuffer.byteLength;
      const uint8Array = new Uint8Array(arrayBuffer);

      // Write input file to WASM filesystem
      qpdf.FS.writeFile(inputPath, uint8Array);

      this.updateProgress(30, 'Analyzing PDF structure...');

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(50, 'Repairing PDF...');

      // Build qpdf command arguments
      // --decrypt will rebuild the PDF structure and fix many issues
      const args = [inputPath, '--decrypt', outputPath];

      // Execute qpdf repair
      try {
        qpdf.callMain(args);
      } catch (err: any) {
        // qpdf may throw warnings but still produce output
        console.warn('QPDF execution warning:', err);
      }

      // Check if output file was created
      let outputFile: Uint8Array | null = null;
      let outputFileExists = false;
      try {
        outputFile = qpdf.FS.readFile(outputPath, { encoding: 'binary' });
        outputFileExists = !!(outputFile && outputFile.length > 0);
      } catch (e) {
        outputFileExists = false;
      }

      if (!outputFileExists) {
        return this.createErrorOutput(
          PDFErrorCode.PDF_MALFORMED,
          'Unable to repair the PDF file.',
          'The file may be too corrupted to recover.'
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(80, 'Saving repaired PDF...');

      // Create blob from the output
      const blob = new Blob([new Uint8Array(outputFile!)], { type: 'application/pdf' });
      const repairedSize = outputFile!.length;

      // Cleanup WASM filesystem
      try {
        qpdf.FS.unlink(inputPath);
      } catch (e) {
        console.warn('Failed to unlink input file:', e);
      }
      try {
        qpdf.FS.unlink(outputPath);
      } catch (e) {
        console.warn('Failed to unlink output file:', e);
      }

      this.updateProgress(100, 'Complete!');

      // Generate output filename
      const outputFilename = generateRepairedFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        originalSize,
        repairedSize,
        repaired: true,
      });

    } catch (error) {
      // Cleanup on error
      if (qpdf?.FS) {
        try {
          qpdf.FS.unlink(inputPath);
        } catch (e) {
          // Ignore cleanup errors
        }
        try {
          qpdf.FS.unlink(outputPath);
        } catch (e) {
          // Ignore cleanup errors
        }
      }

      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to repair PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for repair processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the repaired PDF
 */
function generateRepairedFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_repaired.pdf`;
}

/**
 * Create a new instance of the repair processor
 */
export function createRepairProcessor(): RepairPDFProcessor {
  return new RepairPDFProcessor();
}

/**
 * Repair a PDF file (convenience function)
 */
export async function repairPDF(
  file: File,
  options?: Partial<RepairPDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createRepairProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

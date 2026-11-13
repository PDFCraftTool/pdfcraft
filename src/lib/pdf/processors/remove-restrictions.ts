/**
 * PDF Remove Restrictions Processor
 * Requirements: 5.1
 * 
 * Implements PDF restriction removal functionality using qpdf-wasm.
 * Removes security restrictions (permissions) from PDF files,
 * allowing printing, copying, and editing.
 * 
 * Note: This only removes owner password restrictions, not user passwords.
 * If a PDF requires a password to open, the user must provide it.
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
 * Remove Restrictions options
 */
export interface RemoveRestrictionsOptions {
  /** Owner password if known (optional) */
  ownerPassword?: string;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: RemoveRestrictionsOptions = {
  ownerPassword: '',
};

// QPDF instance singleton
let qpdfInstance: any = null;
let qpdfLoadPromise: Promise<any> | null = null;

// Store captured stderr output
let capturedStderr: string[] = [];

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
 * Remove Restrictions Processor
 * Removes security restrictions from PDF files using qpdf.
 */
export class RemoveRestrictionsProcessor extends BasePDFProcessor {
  /**
   * Process PDF file and remove restrictions
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const removeOptions: RemoveRestrictionsOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<RemoveRestrictionsOptions>),
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];
    const inputPath = '/input.pdf';
    const outputPath = '/output.pdf';
    let qpdf: any;

    try {
      this.updateProgress(5, 'Initializing...');

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

      this.updateProgress(30, 'Preparing...');

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(50, 'Removing restrictions...');

      // Build qpdf command arguments
      const args = [inputPath];
      
      // Add password if provided
      if (removeOptions.ownerPassword) {
        args.push('--password=' + removeOptions.ownerPassword);
      }
      
      // --decrypt removes encryption, --remove-restrictions removes permission restrictions
      args.push('--decrypt', '--remove-restrictions', '--', outputPath);

      // Capture stderr by temporarily overriding console.error
      capturedStderr = [];
      const originalConsoleError = console.error;
      console.error = (...errorArgs: any[]) => {
        const message = errorArgs.map(a => String(a)).join(' ');
        capturedStderr.push(message);
        originalConsoleError.apply(console, errorArgs);
      };

      // Execute qpdf
      let qpdfError: Error | null = null;
      try {
        qpdf.callMain(args);
      } catch (err: any) {
        qpdfError = err;
      } finally {
        // Restore console.error
        console.error = originalConsoleError;
      }

      // Check if output file was created (indicates success)
      let outputFileExists = false;
      let outputFile: Uint8Array | null = null;
      try {
        outputFile = qpdf.FS.readFile(outputPath, { encoding: 'binary' });
        outputFileExists = !!(outputFile && outputFile.length > 0);
      } catch (e) {
        outputFileExists = false;
      }

      // If output file doesn't exist or is empty, check for password error
      if (!outputFileExists) {
        // Check captured stderr for password error
        const stderrOutput = capturedStderr.join(' ').toLowerCase();
        const hasPasswordError = 
          stderrOutput.includes('invalid password') ||
          stderrOutput.includes('incorrect password') ||
          stderrOutput.includes('wrong password') ||
          stderrOutput.includes('password');

        if (hasPasswordError || qpdfError) {
          const errorMessage = qpdfError ? String(qpdfError.message || qpdfError || '').toLowerCase() : '';
          if (
            hasPasswordError ||
            errorMessage.includes('invalid password') ||
            errorMessage.includes('incorrect password') ||
            errorMessage.includes('wrong password') ||
            errorMessage.includes('password')
          ) {
            return this.createErrorOutput(
              PDFErrorCode.INVALID_PASSWORD,
              'INVALID_PASSWORD',
              'The password you entered is incorrect. Please check and try again.'
            );
          }
          throw qpdfError || new Error('Failed to remove restrictions');
        }
        
        // If no specific error found, assume password error for encrypted PDFs
        return this.createErrorOutput(
          PDFErrorCode.INVALID_PASSWORD,
          'INVALID_PASSWORD',
          'The password you entered is incorrect. Please check and try again.'
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(80, 'Preparing file...');

      // Create blob from the output
      const blob = new Blob([new Uint8Array(outputFile!)], { type: 'application/pdf' });
      const newSize = outputFile!.length;

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
      const outputFilename = generateUnrestrictedFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        originalSize,
        newSize,
        restrictionsRemoved: true,
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

      // Check for password-related errors in the outer catch as well
      const errorMessage = String(error instanceof Error ? error.message : error || '').toLowerCase();
      if (
        errorMessage.includes('invalid password') ||
        errorMessage.includes('incorrect password') ||
        errorMessage.includes('wrong password') ||
        errorMessage.includes('password')
      ) {
        return this.createErrorOutput(
          PDFErrorCode.INVALID_PASSWORD,
          'INVALID_PASSWORD',
          'The password you entered is incorrect. Please check and try again.'
        );
      }

      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to remove PDF restrictions.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for remove restrictions processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the unrestricted PDF
 */
function generateUnrestrictedFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_unrestricted.pdf`;
}

/**
 * Create a new instance of the remove restrictions processor
 */
export function createRemoveRestrictionsProcessor(): RemoveRestrictionsProcessor {
  return new RemoveRestrictionsProcessor();
}

/**
 * Remove restrictions from a PDF file (convenience function)
 */
export async function removeRestrictions(
  file: File,
  options?: Partial<RemoveRestrictionsOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createRemoveRestrictionsProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

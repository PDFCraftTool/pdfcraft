/**
 * PDF Change Permissions Processor
 * Requirements: 5.1
 * 
 * Implements PDF permission modification functionality using qpdf-wasm.
 * Allows changing document permissions like printing, copying, and editing.
 * Uses 256-bit AES encryption to enforce permissions.
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
 * PDF Permission settings
 */
export interface PDFPermissionSettings {
  /** Allow printing the document */
  allowPrinting: boolean;
  /** Allow high-quality printing */
  allowHighQualityPrinting: boolean;
  /** Allow modifying the document */
  allowModifying: boolean;
  /** Allow copying text and graphics */
  allowCopying: boolean;
  /** Allow adding annotations */
  allowAnnotating: boolean;
  /** Allow filling form fields */
  allowFillingForms: boolean;
  /** Allow content accessibility */
  allowContentAccessibility: boolean;
  /** Allow document assembly */
  allowDocumentAssembly: boolean;
}

/**
 * Change Permissions options
 */
export interface ChangePermissionsOptions {
  /** New permission settings */
  permissions: PDFPermissionSettings;
  /** Current password (if PDF is encrypted) */
  currentPassword?: string;
  /** New user password (to open document) */
  newUserPassword?: string;
  /** New owner password (to change permissions) */
  newOwnerPassword?: string;
}

/**
 * Default permission settings (all allowed)
 */
const DEFAULT_PERMISSIONS: PDFPermissionSettings = {
  allowPrinting: true,
  allowHighQualityPrinting: true,
  allowModifying: true,
  allowCopying: true,
  allowAnnotating: true,
  allowFillingForms: true,
  allowContentAccessibility: true,
  allowDocumentAssembly: true,
};

/**
 * Default change permissions options
 */
const DEFAULT_OPTIONS: ChangePermissionsOptions = {
  permissions: DEFAULT_PERMISSIONS,
  currentPassword: '',
  newUserPassword: '',
  newOwnerPassword: '',
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
 * Change Permissions Processor
 * Modifies PDF document permissions using qpdf-wasm.
 */
export class ChangePermissionsProcessor extends BasePDFProcessor {
  /**
   * Process PDF file and change permissions
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const changeOptions: ChangePermissionsOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<ChangePermissionsOptions>),
      permissions: {
        ...DEFAULT_PERMISSIONS,
        ...((options as Partial<ChangePermissionsOptions>)?.permissions || {}),
      },
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
      this.updateProgress(5, 'Initializing PDF engine...');

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

      this.updateProgress(30, 'Preparing permission changes...');

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(50, 'Processing PDF permissions...');

      // Build qpdf command arguments
      const args = [inputPath];

      // Add current password if provided
      if (changeOptions.currentPassword) {
        args.push('--password=' + changeOptions.currentPassword);
      }

      const shouldEncrypt = changeOptions.newUserPassword || changeOptions.newOwnerPassword;

      if (shouldEncrypt) {
        const finalUserPassword = changeOptions.newUserPassword || '';
        const finalOwnerPassword = changeOptions.newOwnerPassword || '';

        args.push('--encrypt', finalUserPassword, finalOwnerPassword, '256');

        const perms = changeOptions.permissions;

        // Only apply restrictions if owner password is set
        if (finalOwnerPassword) {
          if (!perms.allowModifying) {
            args.push('--modify=none');
          }
          if (!perms.allowCopying) {
            args.push('--extract=n');
          }
          if (!perms.allowPrinting) {
            args.push('--print=none');
          }
          if (!perms.allowAnnotating) {
            args.push('--annotate=n');
          }
          if (!perms.allowDocumentAssembly) {
            args.push('--assemble=n');
          }
          if (!perms.allowFillingForms) {
            args.push('--form=n');
          }
          if (!perms.allowContentAccessibility) {
            args.push('--accessibility=n');
          }
        } else if (finalUserPassword) {
          // User password only, allow insecure
          args.push('--allow-insecure');
        }
      } else {
        // No new passwords - decrypt the PDF
        args.push('--decrypt');
      }

      args.push('--', outputPath);

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
          stderrOutput.includes('wrong password');

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
              PDFErrorCode.PDF_ENCRYPTED,
              'INVALID_PASSWORD',
              'The current password you entered is incorrect. Please check and try again.'
            );
          }

          if (
            errorMessage.includes('encrypted') ||
            errorMessage.includes('password required')
          ) {
            return this.createErrorOutput(
              PDFErrorCode.PDF_ENCRYPTED,
              'PASSWORD_REQUIRED',
              'This PDF is password-protected. Please enter the current password to proceed.'
            );
          }

          throw qpdfError || new Error('Processing failed');
        }
        
        // If no specific error found, assume password error for encrypted PDFs
        return this.createErrorOutput(
          PDFErrorCode.PDF_ENCRYPTED,
          'INVALID_PASSWORD',
          'The current password you entered is incorrect. Please check and try again.'
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(80, 'Preparing output file...');

      // outputFile was already read above when checking for success
      // Create blob from the output (outputFile is guaranteed to be non-null here)
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
      const outputFilename = generatePermissionsFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        originalSize,
        newSize,
        permissions: changeOptions.permissions,
        encrypted: shouldEncrypt,
        encryptionMethod: shouldEncrypt ? '256-bit AES' : undefined,
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
        'Failed to change PDF permissions.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for change permissions processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the PDF with changed permissions
 */
function generatePermissionsFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_permissions.pdf`;
}

/**
 * Create a new instance of the change permissions processor
 */
export function createChangePermissionsProcessor(): ChangePermissionsProcessor {
  return new ChangePermissionsProcessor();
}

/**
 * Change permissions of a PDF file (convenience function)
 */
export async function changePermissions(
  file: File,
  options?: Partial<ChangePermissionsOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createChangePermissionsProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

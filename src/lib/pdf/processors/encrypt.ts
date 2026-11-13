/**
 * PDF Encrypt Processor
 * Requirements: 5.1, 11.4
 * 
 * Implements PDF encryption functionality using qpdf-wasm.
 * Supports 256-bit AES encryption with user and owner passwords.
 * All encryption is performed client-side - passwords are never transmitted.
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
 * PDF Permission flags
 */
export interface PDFPermissions {
  /** Allow printing the document */
  printing: boolean;
  /** Allow modifying the document */
  modifying: boolean;
  /** Allow copying text and graphics */
  copying: boolean;
  /** Allow adding annotations */
  annotating: boolean;
  /** Allow filling form fields */
  fillingForms: boolean;
  /** Allow content accessibility */
  contentAccessibility: boolean;
  /** Allow document assembly */
  documentAssembly: boolean;
}

/**
 * Encrypt PDF options
 */
export interface EncryptPDFOptions {
  /** User password (required to open the document) */
  userPassword: string;
  /** Owner password (required to change permissions) */
  ownerPassword: string;
  /** Document permissions */
  permissions: PDFPermissions;
}

/**
 * Default permissions (all allowed)
 */
const DEFAULT_PERMISSIONS: PDFPermissions = {
  printing: true,
  modifying: true,
  copying: true,
  annotating: true,
  fillingForms: true,
  contentAccessibility: true,
  documentAssembly: true,
};

/**
 * Default encrypt options
 */
const DEFAULT_ENCRYPT_OPTIONS: EncryptPDFOptions = {
  userPassword: '',
  ownerPassword: '',
  permissions: DEFAULT_PERMISSIONS,
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
 * Encrypt PDF Processor
 * Encrypts PDF files with 256-bit AES encryption.
 */
export class EncryptPDFProcessor extends BasePDFProcessor {
  /**
   * Process PDF file and encrypt it
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const encryptOptions: EncryptPDFOptions = {
      ...DEFAULT_ENCRYPT_OPTIONS,
      ...(options as Partial<EncryptPDFOptions>),
      permissions: {
        ...DEFAULT_PERMISSIONS,
        ...((options as Partial<EncryptPDFOptions>)?.permissions || {}),
      },
    };

    // Validate we have exactly 1 file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file to encrypt.',
        `Received ${files.length} file(s).`
      );
    }

    // Validate at least one password is provided
    if (!encryptOptions.userPassword && !encryptOptions.ownerPassword) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide at least one password.',
        'Either user password or owner password is required.'
      );
    }

    const file = files[0];
    const inputPath = '/input.pdf';
    const outputPath = '/output.pdf';
    let qpdf: any;

    try {
      this.updateProgress(5, 'Initializing encryption engine...');

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

      this.updateProgress(30, 'Preparing encryption...');

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(50, 'Encrypting PDF with 256-bit AES...');

      // Build qpdf command arguments
      const userPassword = encryptOptions.userPassword || '';
      const ownerPassword = encryptOptions.ownerPassword || userPassword;
      const hasDistinctOwnerPassword = !!encryptOptions.ownerPassword && encryptOptions.ownerPassword !== encryptOptions.userPassword;

      const args = [inputPath, '--encrypt', userPassword, ownerPassword, '256'];

      // Add permission restrictions if owner password is set and permissions are restricted
      if (hasDistinctOwnerPassword) {
        const perms = encryptOptions.permissions;
        
        // Modify permissions
        if (!perms.modifying) {
          args.push('--modify=none');
        }
        
        // Extract/copy permissions
        if (!perms.copying) {
          args.push('--extract=n');
        }
        
        // Print permissions
        if (!perms.printing) {
          args.push('--print=none');
        }
        
        // Accessibility
        if (!perms.contentAccessibility) {
          args.push('--accessibility=n');
        }
        
        // Annotate
        if (!perms.annotating) {
          args.push('--annotate=n');
        }
        
        // Assembly
        if (!perms.documentAssembly) {
          args.push('--assemble=n');
        }
        
        // Form filling
        if (!perms.fillingForms) {
          args.push('--form=n');
        }
      }

      args.push('--', outputPath);

      // Execute qpdf encryption
      try {
        qpdf.callMain(args);
      } catch (qpdfError: any) {
        console.error('qpdf execution error:', qpdfError);
        throw new Error(
          'Encryption failed: ' + (qpdfError.message || 'Unknown error')
        );
      }

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(80, 'Preparing encrypted file...');

      // Read output file from WASM filesystem
      const outputFile = qpdf.FS.readFile(outputPath, { encoding: 'binary' });

      if (!outputFile || outputFile.length === 0) {
        throw new Error('Encryption resulted in an empty file.');
      }

      // Create blob from the output
      const blob = new Blob([outputFile], { type: 'application/pdf' });
      const newSize = outputFile.length;

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
      const outputFilename = generateEncryptedFilename(file.name);

      return this.createSuccessOutput(blob, outputFilename, {
        originalSize,
        newSize,
        hasUserPassword: !!encryptOptions.userPassword,
        hasOwnerPassword: !!encryptOptions.ownerPassword,
        permissions: encryptOptions.permissions,
        encryptionMethod: '256-bit AES',
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
        'Failed to encrypt PDF file.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Get accepted file types for encrypt processor
   */
  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

/**
 * Generate a filename for the encrypted PDF
 */
function generateEncryptedFilename(originalName: string): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
  return `${baseName}_encrypted.pdf`;
}

/**
 * Create a new instance of the encrypt processor
 */
export function createEncryptProcessor(): EncryptPDFProcessor {
  return new EncryptPDFProcessor();
}

/**
 * Encrypt a PDF file (convenience function)
 */
export async function encryptPDF(
  file: File,
  options?: Partial<EncryptPDFOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createEncryptProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}

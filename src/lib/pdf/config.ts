import { withBasePath } from '@/lib/utils/path';
/**
 * PDF Library Configuration
 * Requirements: 1.4, 5.6
 * 
 * Configures PDF processing libraries for client-side processing.
 * Libraries are lazy-loaded to optimize initial page load.
 */

/**The file at 'blob:http://pdfcrafts.test/7e5bc74f-8bb7-4280-8a23-96852ad1356f' was loaded over an insecure connection. This file should be served over HTTPS.
 * PDF.js configuration
 */
export const PDFJS_CONFIG = {
  // Worker source path - loaded from public directory
  workerSrc: withBasePath('/workers/pdf.worker.min.mjs'),
  // CMap URL for character mapping
  cMapUrl: withBasePath('/pdfjs-viewer/cmaps/'),
  cMapPacked: true,
  // Standard fonts URL
  standardFontDataUrl: withBasePath('/pdfjs-viewer/standard_fonts/'),
} as const;

/**
 * PDF processing configuration
 */
export const PDF_PROCESSING_CONFIG = {
  // Maximum file size for processing (100MB)
  maxFileSize: 100 * 1024 * 1024,
  // Timeout for processing operations (5 minutes)
  processingTimeout: 5 * 60 * 1000,
  // Chunk size for large file processing
  chunkSize: 1024 * 1024, // 1MB
  // Enable Web Worker for processing
  useWebWorker: true,
  // Maximum concurrent operations
  maxConcurrentOperations: 3,
} as const;

/**
 * Supported PDF versions
 */
export const SUPPORTED_PDF_VERSIONS = ['1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '2.0'] as const;

/**
 * Library loading state
 */
export interface LibraryState {
  pdfLib: boolean;
  pdfjs: boolean;
  loading: boolean;
  error: string | null;
}

/**
 * Initial library state
 */
export const initialLibraryState: LibraryState = {
  pdfLib: false,
  pdfjs: false,
  loading: false,
  error: null,
};

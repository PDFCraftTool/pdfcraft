/**
 * Extract Images from PDF Processor
 * Requirements: 5.1
 * 
 * Extracts all embedded images from PDF files using PyMuPDF (WASM).
 * Supports filtering small images and batch downloads as ZIP.
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
 * Extracted image info
 */
export interface ExtractedImage {
    /** Unique index */
    index: number;
    /** Image name (e.g., "image_1.png") */
    name: string;
    /** File extension without dot */
    ext: string;
    /** Image data as ArrayBuffer */
    data: ArrayBuffer;
    /** Image width in pixels */
    width: number;
    /** Image height in pixels */
    height: number;
    /** Page number where image was found */
    pageNumber: number;
    /** File size in bytes */
    size: number;
}

/**
 * Extract Images options
 */
export interface ExtractImagesOptions {
    /** Minimum width to include (pixels) */
    minWidth: number;
    /** Minimum height to include (pixels) */
    minHeight: number;
    /** Minimum file size to include (bytes) */
    minSize: number;
}

/**
 * Default options
 */
const DEFAULT_OPTIONS: ExtractImagesOptions = {
    minWidth: 50,  // Filter out images smaller than 50px
    minHeight: 50,
    minSize: 10240, // Filter out images smaller than 10KB
};

/**
 * Extract Images from PDF Processor
 */
export class ExtractImagesPDFProcessor extends BasePDFProcessor {
    private worker: Worker | null = null;
    private workerReady = false;

    /**
     * Initialize the worker
     */
    private async initWorker(): Promise<void> {
        if (this.worker) return;

        return new Promise((resolve, reject) => {
            try {
                this.worker = new Worker(withBasePath('/workers/extract-images.worker.js'), { type: 'module' });

                const handleMessage = (event: MessageEvent) => {
                    const { type, error, message } = event.data;

                    if (type === 'init-complete') {
                        this.workerReady = true;
                        resolve();
                    } else if (type === 'status') {
                        this.updateProgress(0, message);
                    } else if (type === 'error') {
                        reject(new Error(error || 'Worker initialization failed'));
                    }
                };

                this.worker.addEventListener('message', handleMessage);
                this.worker.addEventListener('error', (err) => {
                    reject(new Error('Worker connection failed'));
                });

                // Send init message
                this.worker.postMessage({
                    type: 'init',
                    id: 'init-' + Date.now(),
                    data: {}
                });

            } catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Terminate the worker
     */
    private terminateWorker() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
            this.workerReady = false;
        }
    }

    /**
     * Process PDF file(s) and extract images
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const extractOptions: ExtractImagesOptions = {
            ...DEFAULT_OPTIONS,
            ...(options as Partial<ExtractImagesOptions>),
        };

        if (files.length === 0) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide at least one PDF file.',
                'No files provided.'
            );
        }

        try {
            this.updateProgress(5, 'Initializing extractor...');

            try {
                await this.initWorker();
            } catch (err) {
                console.error('Failed to initialize worker:', err);
                return this.createErrorOutput(
                    PDFErrorCode.WORKER_FAILED,
                    'Failed to initialize extraction worker.',
                    err instanceof Error ? err.message : String(err)
                );
            }

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            const allExtractedImages: ExtractedImage[] = [];
            const progressPerFile = 90 / files.length;
            let currentImageIndex = 0;

            for (let fileIndex = 0; fileIndex < files.length; fileIndex++) {
                const file = files[fileIndex];

                if (this.checkCancelled()) {
                    break;
                }

                this.updateProgress(
                    10 + fileIndex * progressPerFile,
                    `Processing ${file.name}...`
                );

                try {
                    // Extract images using Worker
                    const fileImages = await new Promise<any[]>((resolve, reject) => {
                        if (!this.worker) {
                            reject(new Error('Worker not initialized'));
                            return;
                        }

                        const msgId = 'extract-' + Date.now();

                        const handleMessage = (event: MessageEvent) => {
                            const { type, id, result, error, message } = event.data;

                            if (type === 'status') {
                                // Optional: update progress with detailed message
                                return;
                            }

                            if (id !== msgId) return;

                            if (type === 'extract-complete') {
                                cleanup();
                                resolve(result);
                            } else if (type === 'error') {
                                cleanup();
                                reject(new Error(error || 'Extraction failed'));
                            }
                        };

                        const handleError = (error: ErrorEvent) => {
                            cleanup();
                            reject(new Error('Worker error: ' + error.message));
                        };

                        const cleanup = () => {
                            this.worker?.removeEventListener('message', handleMessage);
                            this.worker?.removeEventListener('error', handleError);
                        };

                        this.worker.addEventListener('message', handleMessage);
                        this.worker.addEventListener('error', handleError);

                        this.worker.postMessage({
                            type: 'extract',
                            id: msgId,
                            data: {
                                file: file,
                                options: extractOptions
                            }
                        });
                    });

                    // Process results
                    for (const rawImg of fileImages) {
                        currentImageIndex++;
                        allExtractedImages.push({
                            ...rawImg,
                            index: currentImageIndex,
                            // Ensure data is ArrayBuffer (Worker might return Uint8Array)
                            data: rawImg.data instanceof Uint8Array ? rawImg.data.buffer : rawImg.data,
                            name: `image_${currentImageIndex}.${rawImg.ext}`
                        });
                    }

                } catch (fileError) {
                    console.warn(`Failed to process file ${file.name}:`, fileError);
                    // Continue with other files if one fails? 
                    // Or maybe we should just log it. 
                    // The UI will show whatever images were successfully extracted.
                }
            }

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            this.updateProgress(100, 'Complete!');

            if (allExtractedImages.length === 0) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_FAILED,
                    'No images found in the selected PDF(s).',
                    'The PDF may not contain any embedded images that match the filter criteria.'
                );
            }

            // Return images as metadata
            return {
                success: true,
                result: undefined,
                metadata: {
                    images: allExtractedImages,
                    imageCount: allExtractedImages.length,
                    totalSize: allExtractedImages.reduce((sum, img) => sum + img.size, 0),
                },
            };

        } catch (error) {
            this.terminateWorker();
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to extract images from PDF.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    /**
     * Get accepted file types
     */
    protected getAcceptedTypes(): string[] {
        return ['application/pdf'];
    }
}

/**
 * Create a new instance of the extract images processor
 */
export function createExtractImagesProcessor(): ExtractImagesPDFProcessor {
    return new ExtractImagesPDFProcessor();
}

/**
 * Extract images from PDF (convenience function)
 */
export async function extractImages(
    files: File[],
    options?: Partial<ExtractImagesOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createExtractImagesProcessor();
    return processor.process(
        {
            files,
            options: options || {},
        },
        onProgress
    );
}

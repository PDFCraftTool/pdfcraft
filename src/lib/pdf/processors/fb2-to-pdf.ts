/**
 * FB2 to PDF Processor
 * 
 * Converts FictionBook (FB2) e-book files to PDF documents.
 * Uses PyMuPDF's native convert_to_pdf() for optimal file size and text preservation.
 * 
 * Benefits of native conversion:
 * - Much smaller file sizes (text is vector, not images)
 * - Searchable/selectable text in output PDF
 * - Better quality at any zoom level
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
 * FB2 to PDF options
 */
export interface FB2ToPDFOptions {
    // Reserved for future options
}

/**
 * FB2 to PDF Processor
 * Converts FB2 files to PDF using a Web Worker.
 */
export class FB2ToPDFProcessor extends BasePDFProcessor {
    private worker: Worker | null = null;
    private workerReady = false;

    /**
     * Initialize the worker
     */
    private async initWorker(): Promise<void> {
        if (this.worker) return;

        return new Promise((resolve, reject) => {
            try {
                this.worker = new Worker(withBasePath('/workers/fb2-to-pdf.worker.js'), { type: 'module' });

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
     * Reset processor state
     */
    protected reset(): void {
        super.reset();
    }

    /**
     * Process FB2 and convert to PDF
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files } = input;

        // Support multiple files
        if (files.length === 0) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide at least one FB2 file.',
                'No files received.'
            );
        }

        // Validate file types
        for (const file of files) {
            if (!file.name.toLowerCase().endsWith('.fb2') && !file.name.toLowerCase().endsWith('.fb2.zip')) {
                return this.createErrorOutput(
                    PDFErrorCode.FILE_TYPE_INVALID,
                    'Invalid file type. Please upload FB2 files (.fb2, .fb2.zip).',
                    `Received: ${file.type || file.name}`
                );
            }
        }

        try {
            this.updateProgress(10, 'Initializing converter...');

            try {
                await this.initWorker();
            } catch (err) {
                console.error('Failed to initialize worker:', err);
                return this.createErrorOutput(
                    PDFErrorCode.WORKER_FAILED,
                    'Failed to initialize conversion worker.',
                    err instanceof Error ? err.message : String(err)
                );
            }

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            // Process single or multiple files
            if (files.length === 1) {
                return await this.processSingleFile(files[0]);
            } else {
                return await this.processMultipleFiles(files);
            }

        } catch (error) {
            console.error('Conversion error:', error);
            this.terminateWorker();

            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert FB2 to PDF.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    /**
     * Process a single FB2 file
     */
    private async processSingleFile(file: File): Promise<ProcessOutput> {
        this.updateProgress(30, 'Converting FB2 to PDF...');

        const pdfBlob = await this.convertFile(file);

        if (this.checkCancelled()) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_CANCELLED,
                'Processing was cancelled.'
            );
        }

        this.updateProgress(100, 'Conversion complete!');

        const baseName = file.name.replace(/\.fb2(\.zip)?$/i, '');
        const outputName = `${baseName}.pdf`;

        return this.createSuccessOutput(
            pdfBlob,
            outputName,
            { format: 'pdf' }
        );
    }

    /**
     * Process multiple FB2 files
     */
    private async processMultipleFiles(files: File[]): Promise<ProcessOutput> {
        const results: Blob[] = [];
        const totalFiles = files.length;

        for (let i = 0; i < totalFiles; i++) {
            const file = files[i];
            const baseProgress = 30 + (i * 60 / totalFiles);
            
            this.updateProgress(baseProgress, `Converting ${i + 1}/${totalFiles}: ${file.name}...`);

            const pdfBlob = await this.convertFile(file);
            results.push(pdfBlob);

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }
        }

        this.updateProgress(100, 'All conversions complete!');

        return this.createSuccessOutput(
            results,
            'fb2-converted.pdf',
            { format: 'pdf' }
        );
    }

    /**
     * Convert a single file using the worker
     */
    private async convertFile(file: File): Promise<Blob> {
        return new Promise<Blob>((resolve, reject) => {
            if (!this.worker) {
                reject(new Error('Worker not initialized'));
                return;
            }

            const msgId = 'convert-' + Date.now() + '-' + Math.random();

            const handleMessage = (event: MessageEvent) => {
                const { type, id, result, error } = event.data;

                if (type === 'status') {
                    return;
                }

                if (id !== msgId) return;

                if (type === 'convert-complete') {
                    cleanup();
                    resolve(result);
                } else if (type === 'error') {
                    cleanup();
                    reject(new Error(error || 'Conversion failed'));
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
                type: 'convert',
                id: msgId,
                data: {
                    file: file
                }
            });
        });
    }
}

/**
 * Create a new instance of the FB2 to PDF processor
 */
export function createFB2ToPDFProcessor(): FB2ToPDFProcessor {
    return new FB2ToPDFProcessor();
}

/**
 * Convert FB2 to PDF (convenience function)
 */
export async function fb2ToPDF(
    files: File | File[],
    options?: Partial<FB2ToPDFOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createFB2ToPDFProcessor();
    const fileArray = Array.isArray(files) ? files : [files];
    return processor.process(
        {
            files: fileArray,
            options: options || {},
        },
        onProgress
    );
}

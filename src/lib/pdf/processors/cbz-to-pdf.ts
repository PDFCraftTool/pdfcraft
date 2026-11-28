/**
 * CBZ to PDF Processor
 * 
 * Converts CBZ (Comic Book Archive) files to PDF.
 * Extracts images from the ZIP archive and compiles them into a PDF.
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { PDFDocument } from 'pdf-lib';

/**
 * Page size options for CBZ to PDF
 */
export type CbzPageSize = 'original' | 'a4' | 'letter' | 'comic';

/**
 * CBZ to PDF options
 */
export interface CbzToPDFOptions {
    /** Output page size */
    pageSize: CbzPageSize;
    /** Quality for image compression (0.1-1.0, default 0.9) */
    quality: number;
    /** Whether to maintain aspect ratio */
    maintainAspectRatio: boolean;
}

/**
 * Default CBZ to PDF options
 */
const DEFAULT_CBZ_OPTIONS: CbzToPDFOptions = {
    pageSize: 'original',
    quality: 0.9,
    maintainAspectRatio: true,
};

/**
 * Standard page sizes in points (72 points = 1 inch)
 */
const PAGE_SIZES: Record<string, [number, number]> = {
    a4: [595.28, 841.89],
    letter: [612, 792],
    comic: [413, 626], // Standard comic book size (5.75" x 8.75")
};

/**
 * Supported image extensions
 */
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];

/**
 * Check if a filename is a supported image
 */
function isImageFile(filename: string): boolean {
    const ext = filename.toLowerCase().slice(filename.lastIndexOf('.'));
    return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Sort filenames naturally (handling numbers correctly)
 */
function naturalSort(a: string, b: string): number {
    const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base',
    });
    return collator.compare(a, b);
}

/**
 * CBZ to PDF Processor
 */
export class CbzToPDFProcessor extends BasePDFProcessor {
    /**
     * Process CBZ file and convert to PDF
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const cbzOptions: CbzToPDFOptions = {
            ...DEFAULT_CBZ_OPTIONS,
            ...(options as Partial<CbzToPDFOptions>),
        };

        // Validate single file
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one CBZ file.',
                `Received ${files.length} file(s).`
            );
        }

        const file = files[0];

        // Validate file extension
        const fileName = file.name.toLowerCase();
        if (!fileName.endsWith('.cbz') && !fileName.endsWith('.zip')) {
            return this.createErrorOutput(
                PDFErrorCode.FILE_TYPE_INVALID,
                'Invalid file type.',
                'Please provide a CBZ or ZIP file containing images.'
            );
        }

        try {
            this.updateProgress(5, 'Loading JSZip library...');

            // Dynamic import of JSZip
            const { default: JSZip } = await import('jszip');

            this.updateProgress(10, 'Extracting archive...');

            // Read file as ArrayBuffer
            const arrayBuffer = await file.arrayBuffer();

            // Load ZIP
            const zip = await JSZip.loadAsync(arrayBuffer);

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            // Get all image files from the archive
            const imageFiles: string[] = [];
            zip.forEach((relativePath, _zipEntry) => {
                if (isImageFile(relativePath) && !relativePath.startsWith('__MACOSX')) {
                    imageFiles.push(relativePath);
                }
            });

            if (imageFiles.length === 0) {
                return this.createErrorOutput(
                    PDFErrorCode.INVALID_OPTIONS,
                    'No images found in the archive.',
                    'The CBZ file does not contain any supported image files.'
                );
            }

            // Sort files naturally
            imageFiles.sort(naturalSort);

            this.updateProgress(20, `Found ${imageFiles.length} images. Creating PDF...`);

            // Create PDF document
            const pdfDoc = await PDFDocument.create();

            // Process each image
            for (let i = 0; i < imageFiles.length; i++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(
                        PDFErrorCode.PROCESSING_CANCELLED,
                        'Processing was cancelled.'
                    );
                }

                const progress = 20 + ((i / imageFiles.length) * 70);
                this.updateProgress(progress, `Processing image ${i + 1} of ${imageFiles.length}...`);

                const imagePath = imageFiles[i];
                const zipEntry = zip.file(imagePath);

                if (!zipEntry) continue;

                try {
                    // Extract image data
                    const imageData = await zipEntry.async('uint8array');

                    // Determine image type and embed
                    const ext = imagePath.toLowerCase().slice(imagePath.lastIndexOf('.'));
                    let image;

                    if (ext === '.jpg' || ext === '.jpeg') {
                        image = await pdfDoc.embedJpg(imageData);
                    } else if (ext === '.png') {
                        image = await pdfDoc.embedPng(imageData);
                    } else {
                        // For other formats, try to convert via canvas
                        const blob = new Blob([imageData.buffer as ArrayBuffer]);
                        const imgUrl = URL.createObjectURL(blob);

                        try {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d')!;
                            const img = await new Promise<HTMLImageElement>((resolve, reject) => {
                                const i = new Image();
                                i.onload = () => resolve(i);
                                i.onerror = reject;
                                i.src = imgUrl;
                            });

                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.fillStyle = '#ffffff';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                            ctx.drawImage(img, 0, 0);

                            const jpegBlob = await new Promise<Blob>((resolve, reject) => {
                                canvas.toBlob(
                                    (blob) => blob ? resolve(blob) : reject(new Error('Failed to convert')),
                                    'image/jpeg',
                                    cbzOptions.quality
                                );
                            });

                            const jpegData = new Uint8Array(await jpegBlob.arrayBuffer());
                            image = await pdfDoc.embedJpg(jpegData);
                        } finally {
                            URL.revokeObjectURL(imgUrl);
                        }
                    }

                    if (!image) continue;

                    // Calculate page dimensions
                    let pageWidth: number;
                    let pageHeight: number;

                    if (cbzOptions.pageSize === 'original') {
                        pageWidth = image.width;
                        pageHeight = image.height;
                    } else {
                        const [targetWidth, targetHeight] = PAGE_SIZES[cbzOptions.pageSize] || PAGE_SIZES.a4;

                        if (cbzOptions.maintainAspectRatio) {
                            const scale = Math.min(targetWidth / image.width, targetHeight / image.height);
                            pageWidth = targetWidth;
                            pageHeight = targetHeight;
                        } else {
                            pageWidth = targetWidth;
                            pageHeight = targetHeight;
                        }
                    }

                    // Add page
                    const page = pdfDoc.addPage([pageWidth, pageHeight]);

                    // Calculate image position to center it
                    let drawWidth: number;
                    let drawHeight: number;
                    let x: number;
                    let y: number;

                    if (cbzOptions.pageSize === 'original') {
                        drawWidth = image.width;
                        drawHeight = image.height;
                        x = 0;
                        y = 0;
                    } else if (cbzOptions.maintainAspectRatio) {
                        const scale = Math.min(pageWidth / image.width, pageHeight / image.height);
                        drawWidth = image.width * scale;
                        drawHeight = image.height * scale;
                        x = (pageWidth - drawWidth) / 2;
                        y = (pageHeight - drawHeight) / 2;
                    } else {
                        drawWidth = pageWidth;
                        drawHeight = pageHeight;
                        x = 0;
                        y = 0;
                    }

                    page.drawImage(image, {
                        x,
                        y,
                        width: drawWidth,
                        height: drawHeight,
                    });

                } catch (imgError) {
                    console.warn(`Failed to process image ${imagePath}:`, imgError);
                }
            }

            if (pdfDoc.getPageCount() === 0) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_FAILED,
                    'No images could be processed.',
                    'Failed to convert any images from the archive.'
                );
            }

            this.updateProgress(92, 'Saving PDF...');

            // Save PDF
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

            this.updateProgress(100, 'Complete!');

            // Generate output filename
            const outputFilename = generatePdfFilename(file.name);

            return this.createSuccessOutput(blob, outputFilename, {
                totalImages: imageFiles.length,
                pagesCreated: pdfDoc.getPageCount(),
                pageSize: cbzOptions.pageSize,
            });

        } catch (error) {
            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to convert CBZ to PDF.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    /**
     * Get accepted file types
     */
    protected getAcceptedTypes(): string[] {
        return ['application/x-cbz', 'application/zip', 'application/x-zip-compressed'];
    }
}

/**
 * Generate PDF filename from CBZ filename
 */
function generatePdfFilename(originalName: string): string {
    const lastDot = originalName.lastIndexOf('.');
    const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
    return `${baseName}.pdf`;
}

/**
 * Create a new instance of the CBZ to PDF processor
 */
export function createCbzToPDFProcessor(): CbzToPDFProcessor {
    return new CbzToPDFProcessor();
}

/**
 * Convert CBZ to PDF (convenience function)
 */
export async function cbzToPDF(
    file: File,
    options?: Partial<CbzToPDFOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createCbzToPDFProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}

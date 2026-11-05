/**
 * PDF Booklet Processor
 * 
 * Creates booklet layouts from PDF files for print-and-fold production.
 * Supports various grid modes and paper sizes.
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { ensurePageContents } from '../page-contents';
import { PDFDocument, PageSizes, degrees } from 'pdf-lib';

/**
 * Grid mode options
 */
export type BookletGridMode = '1x2' | '2x2' | '2x4' | '4x4';

/**
 * Paper size options
 */
export type BookletPaperSize = 'letter' | 'a4' | 'a3' | 'legal' | 'tabloid';

/**
 * Orientation options
 */
export type BookletOrientation = 'auto' | 'portrait' | 'landscape';

/**
 * Rotation options
 */
export type BookletRotation = 'none' | '90cw' | '90ccw' | 'alternate';

/**
 * Booklet options interface
 */
export interface BookletPDFOptions {
    /** Grid arrangement mode */
    gridMode: BookletGridMode;
    /** Output paper size */
    paperSize: BookletPaperSize;
    /** Page orientation */
    orientation: BookletOrientation;
    /** Page rotation mode */
    rotation: BookletRotation;
    /** Padding between pages (in points, default 10) */
    padding: number;
}

/**
 * Default booklet options
 */
const DEFAULT_BOOKLET_OPTIONS: BookletPDFOptions = {
    gridMode: '1x2',
    paperSize: 'letter',
    orientation: 'auto',
    rotation: 'none',
    padding: 10,
};

/**
 * Paper size mapping to pdf-lib PageSizes
 */
const PAPER_SIZES: Record<BookletPaperSize, [number, number]> = {
    letter: PageSizes.Letter,
    a4: PageSizes.A4,
    a3: PageSizes.A3,
    legal: PageSizes.Legal,
    tabloid: PageSizes.Tabloid,
};

/**
 * Get grid dimensions from mode
 */
function getGridDimensions(mode: BookletGridMode): { rows: number; cols: number } {
    switch (mode) {
        case '1x2': return { rows: 1, cols: 2 };
        case '2x2': return { rows: 2, cols: 2 };
        case '2x4': return { rows: 2, cols: 4 };
        case '4x4': return { rows: 4, cols: 4 };
        default: return { rows: 1, cols: 2 };
    }
}

/**
 * Get sheet dimensions based on paper size and orientation
 */
function getSheetDimensions(
    paperSize: BookletPaperSize,
    orientation: BookletOrientation,
    isBookletMode: boolean
): { width: number; height: number } {
    const pageDims = PAPER_SIZES[paperSize] || PAPER_SIZES.letter;

    let effectiveOrientation: 'portrait' | 'landscape';
    if (orientation === 'auto') {
        effectiveOrientation = isBookletMode ? 'landscape' : 'portrait';
    } else {
        effectiveOrientation = orientation;
    }

    if (effectiveOrientation === 'landscape') {
        return { width: pageDims[1], height: pageDims[0] };
    }
    return { width: pageDims[0], height: pageDims[1] };
}

/**
 * PDF Booklet Processor
 * Creates booklet layouts from PDF files.
 */
export class BookletPDFProcessor extends BasePDFProcessor {
    /**
     * Process PDF file and create booklet layout
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const bookletOptions: BookletPDFOptions = {
            ...DEFAULT_BOOKLET_OPTIONS,
            ...(options as Partial<BookletPDFOptions>),
        };

        // Validate single file
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file.',
                `Received ${files.length} file(s).`
            );
        }

        const file = files[0];

        try {
            this.updateProgress(5, 'Loading PDF file...');

            // Read file
            const arrayBuffer = await file.arrayBuffer();
            const pdfBytes = new Uint8Array(arrayBuffer);

            // Load source document
            const sourceDoc = await PDFDocument.load(pdfBytes, {
                ignoreEncryption: true,
            });

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            this.updateProgress(15, 'Analyzing pages...');

            const totalPages = sourceDoc.getPageCount();
            const { rows, cols } = getGridDimensions(bookletOptions.gridMode);
            const pagesPerSheet = rows * cols;
            const isBookletMode = rows === 1 && cols === 2;

            // Calculate number of output sheets
            let numSheets: number;
            let totalRounded: number;
            if (isBookletMode) {
                // For booklet mode, round up to multiple of 4
                totalRounded = Math.ceil(totalPages / 4) * 4;
                numSheets = Math.ceil(totalPages / 4) * 2; // Front and back
            } else {
                totalRounded = totalPages;
                numSheets = Math.ceil(totalPages / pagesPerSheet);
            }

            // Get sheet dimensions
            const { width: sheetWidth, height: sheetHeight } = getSheetDimensions(
                bookletOptions.paperSize,
                bookletOptions.orientation,
                isBookletMode
            );

            // Create output document
            const outputDoc = await PDFDocument.create();

            const cellWidth = sheetWidth / cols;
            const cellHeight = sheetHeight / rows;
            const padding = bookletOptions.padding;

            this.updateProgress(25, 'Creating booklet layout...');

            // Apply rotation to source document if needed
            if (bookletOptions.rotation !== 'none') {
                this.applyRotation(sourceDoc, bookletOptions.rotation);
            }

            // Create each output sheet
            for (let sheetIndex = 0; sheetIndex < numSheets; sheetIndex++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(
                        PDFErrorCode.PROCESSING_CANCELLED,
                        'Processing was cancelled.'
                    );
                }

                const progress = 25 + ((sheetIndex / numSheets) * 65);
                this.updateProgress(progress, `Creating sheet ${sheetIndex + 1} of ${numSheets}...`);

                const outputPage = outputDoc.addPage([sheetWidth, sheetHeight]);

                // Place pages on this sheet
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        const slotIndex = r * cols + c;
                        let pageNumber: number;

                        if (isBookletMode) {
                            // Booklet page ordering for saddle-stitch binding
                            const physicalSheet = Math.floor(sheetIndex / 2);
                            const isFrontSide = sheetIndex % 2 === 0;
                            if (isFrontSide) {
                                pageNumber = c === 0 ? totalRounded - 2 * physicalSheet : 2 * physicalSheet + 1;
                            } else {
                                pageNumber = c === 0 ? 2 * physicalSheet + 2 : totalRounded - 2 * physicalSheet - 1;
                            }
                        } else {
                            // Simple n-up ordering
                            pageNumber = sheetIndex * pagesPerSheet + slotIndex + 1;
                        }

                        // Only embed if page exists
                        if (pageNumber >= 1 && pageNumber <= totalPages) {
                            try {
                                ensurePageContents(sourceDoc.getPage(pageNumber - 1));
                                const [embeddedPage] = await outputDoc.embedPdf(sourceDoc, [pageNumber - 1]);
                                const { width: srcW, height: srcH } = embeddedPage;

                                const availableWidth = cellWidth - padding * 2;
                                const availableHeight = cellHeight - padding * 2;
                                const scale = Math.min(availableWidth / srcW, availableHeight / srcH);

                                const scaledWidth = srcW * scale;
                                const scaledHeight = srcH * scale;

                                const x = c * cellWidth + padding + (availableWidth - scaledWidth) / 2;
                                const y = sheetHeight - (r + 1) * cellHeight + padding + (availableHeight - scaledHeight) / 2;

                                outputPage.drawPage(embeddedPage, {
                                    x,
                                    y,
                                    width: scaledWidth,
                                    height: scaledHeight,
                                });
                            } catch (embedError) {
                                console.warn(`Failed to embed page ${pageNumber}:`, embedError);
                            }
                        }
                    }
                }
            }

            this.updateProgress(92, 'Saving booklet PDF...');

            // Save output document
            const outputBytes = await outputDoc.save();
            const blob = new Blob([outputBytes.buffer as ArrayBuffer], { type: 'application/pdf' });

            this.updateProgress(100, 'Complete!');

            // Generate output filename
            const outputFilename = generateBookletFilename(file.name);

            return this.createSuccessOutput(blob, outputFilename, {
                totalPages,
                outputSheets: numSheets,
                gridMode: bookletOptions.gridMode,
                paperSize: bookletOptions.paperSize,
            });

        } catch (error) {
            if (error instanceof Error && error.message.includes('encrypt')) {
                return this.createErrorOutput(
                    PDFErrorCode.PDF_ENCRYPTED,
                    'The PDF file is encrypted.',
                    'Please decrypt the file before creating a booklet.'
                );
            }

            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to create booklet.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    /**
     * Apply rotation to all pages in source document
     */
    private applyRotation(doc: PDFDocument, mode: BookletRotation): void {
        const pages = doc.getPages();
        pages.forEach((page, index) => {
            let rotation = 0;
            switch (mode) {
                case '90cw': rotation = 90; break;
                case '90ccw': rotation = -90; break;
                case 'alternate': rotation = (index % 2 === 0) ? 90 : -90; break;
                default: rotation = 0;
            }
            if (rotation !== 0) {
                page.setRotation(degrees(page.getRotation().angle + rotation));
            }
        });
    }

    /**
     * Get accepted file types
     */
    protected getAcceptedTypes(): string[] {
        return ['application/pdf'];
    }
}

/**
 * Generate a filename for the booklet PDF
 */
function generateBookletFilename(originalName: string): string {
    const lastDot = originalName.lastIndexOf('.');
    const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
    return `${baseName}_booklet.pdf`;
}

/**
 * Create a new instance of the booklet processor
 */
export function createBookletProcessor(): BookletPDFProcessor {
    return new BookletPDFProcessor();
}

/**
 * Create a booklet from a PDF file (convenience function)
 */
export async function createBooklet(
    file: File,
    options?: Partial<BookletPDFOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createBookletProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}

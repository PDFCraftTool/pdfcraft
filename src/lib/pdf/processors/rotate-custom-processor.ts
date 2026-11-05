import { PDFDocument, degrees } from 'pdf-lib';
import { type ProcessOutput, PDFErrorCode, ErrorCategory } from '@/types/pdf';

export interface RotateCustomOptions {
    rotations: { [pageIndex: number]: number }; // Page index to rotation angle mapping
}

/**
 * Rotates PDF pages by custom degrees
 */
export async function rotateCustom(
    file: File,
    options: RotateCustomOptions,
    onProgress?: (progress: number) => void
): Promise<ProcessOutput> {
    try {
        if (onProgress) onProgress(10);

        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
        const pageCount = pdfDoc.getPageCount();

        // Right-angle rotations only change /Rotate. Keep the source document
        // so forms, outlines, attachments, links and metadata survive; only
        // arbitrary angles need the embedding path in a new document.
        const preserveDocument = pdfDoc.getPages().every((page, index) =>
            (page.getRotation().angle + (options.rotations[index] || 0)) % 90 === 0
        );
        const newPdfDoc = preserveDocument ? pdfDoc : await PDFDocument.create();

        if (onProgress) onProgress(30);

        for (let i = 0; i < pageCount; i++) {
            const rotation = options.rotations[i] || 0;

            // If no rotation needed and we are just copying, strictly we could copy.
            // But we need to handle potential crop box vs rotation interaction if strictly copying.
            // However, logic below handles both cases.

            const originalPage = pdfDoc.getPage(i);
            const currentRotation = originalPage.getRotation().angle;
            const totalRotation = currentRotation + rotation;

            if (totalRotation % 90 === 0) {
                // Simple rotation for 90-degree multiples
                if (preserveDocument) {
                    originalPage.setRotation(degrees(totalRotation));
                } else {
                    const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
                    copiedPage.setRotation(degrees(totalRotation));
                    newPdfDoc.addPage(copiedPage);
                }
            } else {
                // Complex rotation for custom angles
                // We must embed the page to rotate it arbitrarily
                const embeddedPage = await newPdfDoc.embedPage(originalPage);
                const { width, height } = embeddedPage.scale(1);

                const angleRad = (totalRotation * Math.PI) / 180;
                const absCos = Math.abs(Math.cos(angleRad));
                const absSin = Math.abs(Math.sin(angleRad));

                // Calculate new bounding box size
                const newWidth = width * absCos + height * absSin;
                const newHeight = width * absSin + height * absCos;

                const newPage = newPdfDoc.addPage([newWidth, newHeight]);

                // Calculate position to center the rotated page
                const x = newWidth / 2 - (width / 2 * Math.cos(angleRad) - height / 2 * Math.sin(angleRad));
                const y = newHeight / 2 - (width / 2 * Math.sin(angleRad) + height / 2 * Math.cos(angleRad));

                newPage.drawPage(embeddedPage, {
                    x,
                    y,
                    width,
                    height,
                    rotate: degrees(totalRotation),
                });
            }

            if (onProgress) onProgress(30 + Math.floor(((i + 1) / pageCount) * 60));
        }

        const rotatedPdfBytes = await newPdfDoc.save({ useObjectStreams: true });
        const result = new Blob([rotatedPdfBytes as unknown as BlobPart], { type: 'application/pdf' });

        if (onProgress) onProgress(100);

        return {
            success: true,
            result,
        };
    } catch (error) {
        console.error('Rotate Custom error:', error);
        return {
            success: false,
            error: {
                code: PDFErrorCode.PROCESSING_FAILED,
                category: ErrorCategory.PROCESSING_ERROR,
                message: error instanceof Error ? error.message : 'Unknown error during rotation',
                recoverable: false,
            },
        };
    }
}

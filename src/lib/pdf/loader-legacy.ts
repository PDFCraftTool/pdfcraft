import { withBasePath } from '@/lib/utils/path';
/**
 * PDF.js Legacy Library Loader
 * 
 * Loads pdfjs-dist v2.16.105 for SVGGraphics support.
 * This version is used specifically for PDF to SVG vector conversion.
 * 
 * The main loader.ts uses pdfjs-dist v4.x for general PDF processing,
 * while this loader provides access to the legacy SVGGraphics module
 * that was removed in v3.x+.
 */

// Type definitions for legacy pdfjs-dist
type PDFJSLegacyModule = typeof import('pdfjs-dist-legacy');

// Cached library instance
let pdfjsLegacyInstance: PDFJSLegacyModule | null = null;

// Loading promise to prevent duplicate loads
let pdfjsLegacyLoadingPromise: Promise<PDFJSLegacyModule> | null = null;

// Worker configuration flag
let legacyWorkerConfigured = false;

/**
 * Configure legacy PDF.js worker source
 * Uses the worker bundled locally for offline support
 */
function configureLegacyWorker(pdfjsLib: PDFJSLegacyModule): void {
    if (legacyWorkerConfigured) return;

    if (typeof window !== 'undefined') {
        // Use the local worker file for offline support
        // The worker file is located in public/workers/pdf.worker.legacy.min.js
        pdfjsLib.GlobalWorkerOptions.workerSrc = withBasePath('/workers/pdf.worker.legacy.min.js');
        legacyWorkerConfigured = true;
    }
}

/**
 * Load legacy pdfjs-dist library (v2.16.105)
 * Used specifically for PDF to SVG vector conversion with SVGGraphics
 */
export async function loadPdfjsLegacy(): Promise<PDFJSLegacyModule> {
    if (pdfjsLegacyInstance) {
        return pdfjsLegacyInstance;
    }

    if (pdfjsLegacyLoadingPromise) {
        return pdfjsLegacyLoadingPromise;
    }

    pdfjsLegacyLoadingPromise = import('pdfjs-dist-legacy').then((module) => {
        // Configure worker
        configureLegacyWorker(module);
        pdfjsLegacyInstance = module;
        pdfjsLegacyLoadingPromise = null;
        return module;
    });

    return pdfjsLegacyLoadingPromise;
}

/**
 * SVGGraphics type definition
 */
export interface SVGGraphicsInstance {
    embedFonts: boolean;
    getSVG(operatorList: any, viewport: any): Promise<SVGElement>;
}

export interface SVGGraphicsConstructor {
    new(commonObjs: any, objs: any): SVGGraphicsInstance;
}

/**
 * Load SVGGraphics class from legacy pdfjs-dist
 * This is the main reason for using the legacy version
 */
export async function loadSVGGraphics(): Promise<SVGGraphicsConstructor> {
    // First ensure the main library is loaded
    await loadPdfjsLegacy();

    // Import SVGGraphics from the display module
    const svgModule = await import('pdfjs-dist-legacy/lib/display/svg');

    if (!svgModule.SVGGraphics) {
        throw new Error('SVGGraphics class not found in legacy pdfjs-dist');
    }

    return svgModule.SVGGraphics as SVGGraphicsConstructor;
}

/**
 * Check if legacy library is loaded
 */
export function isLegacyLibraryLoaded(): boolean {
    return pdfjsLegacyInstance !== null;
}

/**
 * Get legacy library loading status
 */
export function getLegacyLibraryStatus(): 'loaded' | 'loading' | 'not-loaded' {
    return pdfjsLegacyInstance
        ? 'loaded'
        : pdfjsLegacyLoadingPromise
            ? 'loading'
            : 'not-loaded';
}

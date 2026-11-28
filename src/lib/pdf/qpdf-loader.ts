import { withBasePath } from '@/lib/utils/path';
/**
 * QPDF WASM Loader
 * 
 * Dynamically loads qpdf-wasm in browser environment.
 * Uses script injection to avoid Next.js SSR bundling issues.
 */

// QPDF instance singleton
let qpdfInstance: any = null;
let loadingPromise: Promise<any> | null = null;

/**
 * Load the QPDF WASM module dynamically
 */
export async function loadQpdf(): Promise<any> {
  // Return cached instance if available
  if (qpdfInstance) {
    return qpdfInstance;
  }

  // Return existing loading promise if already loading
  if (loadingPromise) {
    return loadingPromise;
  }

  // Only run in browser environment
  if (typeof window === 'undefined') {
    throw new Error('QPDF can only be initialized in browser environment');
  }

  loadingPromise = new Promise(async (resolve, reject) => {
    try {
      // Check if createModule is already available (script already loaded)
      if ((window as any).createQpdfModule) {
        qpdfInstance = await (window as any).createQpdfModule({
          locateFile: (path: string) => {
            if (path.endsWith('.wasm')) {
              return withBasePath('/qpdf.wasm');
            }
            return path;
          },
        });
        resolve(qpdfInstance);
        return;
      }

      // Load the script dynamically
      const script = document.createElement('script');
      script.src = withBasePath('/qpdf.js');
      script.async = true;

      script.onload = async () => {
        try {
          // The script should expose createModule or similar
          const createModule = (window as any).createQpdfModule || (window as any).Module;
          
          if (!createModule) {
            throw new Error('QPDF module not found after script load');
          }

          qpdfInstance = await createModule({
            locateFile: (path: string) => {
              if (path.endsWith('.wasm')) {
                return withBasePath('/qpdf.wasm');
              }
              return path;
            },
          });

          resolve(qpdfInstance);
        } catch (err) {
          reject(err);
        }
      };

      script.onerror = () => {
        reject(new Error('Failed to load QPDF script'));
      };

      document.head.appendChild(script);
    } catch (err) {
      reject(err);
    }
  });

  return loadingPromise;
}

/**
 * Check if QPDF is available
 */
export function isQpdfAvailable(): boolean {
  return qpdfInstance !== null;
}

/**
 * Reset QPDF instance (for testing)
 */
export function resetQpdf(): void {
  qpdfInstance = null;
  loadingPromise = null;
}

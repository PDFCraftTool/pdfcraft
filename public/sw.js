/**
 * Service Worker for PDFaro
 */

const CACHE_NAME = 'pdfcraft-cache-v2';

// Large assets to cache (Pyodide WASM and Python wheels)
const PYODIDE_ASSETS = [
    '/pymupdf-wasm/pyodide.js',
    '/pymupdf-wasm/pyodide.asm.js',
    '/pymupdf-wasm/pyodide.asm.wasm',
    '/pymupdf-wasm/pyodide_py.tar',
    '/pymupdf-wasm/numpy-2.2.5-cp313-cp313-pyodide_2025_0_wasm32.whl',
    '/pymupdf-wasm/lxml-5.4.0-cp313-cp313-pyodide_2025_0_wasm32.whl',
    '/pymupdf-wasm/pymupdf-1.26.3-cp313-none-pyodide_2025_0_wasm32.whl',
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Cache Pyodide assets (WASM, wheels) with cache-first strategy
    const isPyodideAsset = url.pathname.startsWith('/pymupdf-wasm/') &&
        (url.pathname.endsWith('.wasm') ||
            url.pathname.endsWith('.whl') ||
            url.pathname.endsWith('.tar') ||
            url.pathname.endsWith('.js'));

    // Cache LibreOffice WASM assets
    const isLibreOfficeAsset = url.pathname.startsWith('/libreoffice-wasm/') &&
        (url.pathname.endsWith('.wasm') ||
            url.pathname.endsWith('.wasm.gz') ||
            url.pathname.endsWith('.data') ||
            url.pathname.endsWith('.data.gz') ||
            url.pathname.endsWith('.js'));

    // Cache CJK font files (used by LibreOffice WASM for Chinese/Japanese/Korean support)
    const isFontAsset = url.pathname.startsWith('/fonts/') &&
        (url.pathname.endsWith('.ttf') ||
            url.pathname.endsWith('.otf') ||
            url.pathname.endsWith('.woff2'));

    if (isPyodideAsset || isLibreOfficeAsset || isFontAsset) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request).then((networkResponse) => {
                        if (networkResponse.ok) {
                            cache.put(event.request, networkResponse.clone());
                        }
                        return networkResponse;
                    });
                });
            })
        );
        return;
    }

    // Pass through all other requests
});

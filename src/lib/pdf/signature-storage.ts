/**
 * PDFCraft Local Signature Storage
 * Manages extracted and custom signatures stored in localStorage.
 */

export interface PDFCraftSignature {
  id: string;
  name: string;
  dataUrl: string; // Transparent PNG data URL
  width: number;
  height: number;
  createdAt: number;
  sourceDoc?: string;
}

const STORAGE_KEY = 'pdfcraft.signatures';
const MAX_SAVED_SIGNATURES = 20;

/**
 * Retrieve all saved signatures from local storage
 */
export function getSavedSignatures(): PDFCraftSignature[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list : [];
  } catch (e) {
    console.warn('Failed to parse saved signatures:', e);
    return [];
  }
}

/**
 * Save a new signature to local storage
 */
export function saveSignature(sig: Omit<PDFCraftSignature, 'id' | 'createdAt'>): PDFCraftSignature {
  const signatures = getSavedSignatures();
  const newSig: PDFCraftSignature = {
    ...sig,
    id: `sig_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    createdAt: Date.now(),
  };

  // Add to front of list and prune older items if exceeding limit
  const updated = [newSig, ...signatures.filter(s => s.id !== newSig.id)].slice(0, MAX_SAVED_SIGNATURES);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to save signature to local storage:', e);
  }

  return newSig;
}

/**
 * Delete a signature by ID
 */
export function deleteSignature(id: string): void {
  const signatures = getSavedSignatures();
  const updated = signatures.filter(s => s.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.warn('Failed to delete signature:', e);
  }
}

/**
 * Convert a base64 data URL to a PNG Blob
 */
export function dataUrlToBlob(dataUrl: string): Blob {
  const parts = dataUrl.split(';base64,');
  const contentType = parts[0].split(':')[1] || 'image/png';
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

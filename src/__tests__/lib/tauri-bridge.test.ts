import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  isTauri,
  getFiltersForFilename,
  saveFile,
  saveBlobFile,
  writeFileBytes,
  getSystemPrinters,
  printPdfFile,
} from '@/lib/tauri-bridge';

describe('tauri-bridge', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete (window as any).__TAURI__;
    delete (window as any).__TAURI_INTERNALS__;
  });

  describe('isTauri', () => {
    it('returns false in non-Tauri browser environment', () => {
      expect(isTauri()).toBe(false);
    });

    it('returns true when __TAURI__ is present on window', () => {
      (window as any).__TAURI__ = {};
      expect(isTauri()).toBe(true);
    });

    it('returns true when __TAURI_INTERNALS__ is present on window', () => {
      (window as any).__TAURI_INTERNALS__ = {};
      expect(isTauri()).toBe(true);
    });
  });

  describe('getFiltersForFilename', () => {
    it('returns PDF filter for .pdf filenames', () => {
      const filters = getFiltersForFilename('report.pdf');
      expect(filters).toEqual([
        { name: 'PDF Document', extensions: ['pdf'] },
        { name: 'All Files', extensions: ['*'] },
      ]);
    });

    it('returns Excel filter for .xlsx filenames', () => {
      const filters = getFiltersForFilename('data.xlsx');
      expect(filters).toEqual([
        { name: 'Excel Spreadsheet', extensions: ['xlsx'] },
        { name: 'All Files', extensions: ['*'] },
      ]);
    });

    it('returns ZIP filter for .zip filenames', () => {
      const filters = getFiltersForFilename('archive.zip');
      expect(filters).toEqual([
        { name: 'ZIP Archive', extensions: ['zip'] },
        { name: 'All Files', extensions: ['*'] },
      ]);
    });

    it('returns generic uppercase filter for unknown extensions', () => {
      const filters = getFiltersForFilename('data.custom');
      expect(filters).toEqual([
        { name: 'CUSTOM File', extensions: ['custom'] },
        { name: 'All Files', extensions: ['*'] },
      ]);
    });

    it('returns All Files when no extension is present', () => {
      const filters = getFiltersForFilename('filename-without-ext');
      expect(filters).toEqual([
        { name: 'All Files', extensions: ['*'] },
      ]);
    });
  });

  describe('saveBlobFile in browser mode', () => {
    it('triggers anchor download in browser environment', async () => {
      const mockBlob = new Blob(['sample content'], { type: 'application/pdf' });
      const appendChildSpy = vi.spyOn(document.body, 'appendChild');
      const removeChildSpy = vi.spyOn(document.body, 'removeChild');

      const result = await saveBlobFile(mockBlob, 'test.pdf');
      expect(result).toBe(true);
      expect(appendChildSpy).toHaveBeenCalled();
      expect(removeChildSpy).toHaveBeenCalled();
    });

    it('supports Uint8Array input in browser environment', async () => {
      const data = new Uint8Array([1, 2, 3, 4]);
      const appendChildSpy = vi.spyOn(document.body, 'appendChild');

      const result = await saveBlobFile(data, 'data.bin');
      expect(result).toBe(true);
      expect(appendChildSpy).toHaveBeenCalled();
    });
  });

  describe('writeFileBytes in browser mode', () => {
    it('triggers anchor download for Uint8Array in browser', async () => {
      const data = new Uint8Array([10, 20, 30]);
      const clickSpy = vi.fn();
      const originalCreateElement = document.createElement.bind(document);
      vi.spyOn(document, 'createElement').mockImplementation((tag) => {
        const el = originalCreateElement(tag);
        if (tag === 'a') {
          el.click = clickSpy;
        }
        return el;
      });

      await writeFileBytes('test.bin', data);
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  describe('getSystemPrinters and printPdfFile', () => {
    it('returns empty list in browser mode for getSystemPrinters', async () => {
      const printers = await getSystemPrinters();
      expect(printers).toEqual([]);
    });

    it('falls back to window.print in browser mode for printPdfFile', async () => {
      const printSpy = vi.fn();
      window.print = printSpy;
      const data = new Uint8Array([1, 2, 3]);

      const result = await printPdfFile(data);
      expect(result).toEqual({ success: true });
      expect(printSpy).toHaveBeenCalled();
    });
  });
});

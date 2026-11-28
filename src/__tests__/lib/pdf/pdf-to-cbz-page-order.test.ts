import JSZip from 'jszip';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PDFToCBZProcessor } from '@/lib/pdf/processors/pdf-to-cbz';

const documentState = vi.hoisted(() => ({ pages: 1 }));

vi.mock('@/lib/pdf/loader', () => ({
  loadPdfjs: async () => ({
    getDocument: () => ({
      promise: Promise.resolve({
        numPages: documentState.pages,
        getPage: async () => ({
          getViewport: () => ({ width: 1, height: 1 }),
          render: () => ({ promise: Promise.resolve() }),
        }),
      }),
    }),
  }),
}));

afterEach(() => {
  vi.restoreAllMocks();
});

describe('CBZ page ordering', () => {
  it.each([9, 999, 1001])('keeps all %i pages in reading order when sorted by filename', async (pageCount) => {
    documentState.pages = pageCount;
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
      fillRect() {},
    } as unknown as CanvasRenderingContext2D);
    let renderedPage = 0;
    vi.spyOn(HTMLCanvasElement.prototype, 'toBlob').mockImplementation((callback) => {
      const text = String(++renderedPage);
      callback({
        arrayBuffer: async () => Uint8Array.from(text, character => character.charCodeAt(0)).buffer,
      } as Blob);
    });
    const file = {
      name: 'comic.pdf',
      arrayBuffer: async () => new ArrayBuffer(0),
    } as File;

    const result = await new PDFToCBZProcessor().process({ files: [file], options: {} });
    expect(result.success).toBe(true);
    const buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = reject;
      reader.readAsArrayBuffer(result.result as Blob);
    });
    const zip = await JSZip.loadAsync(buffer);
    const pages = Object.keys(zip.files).filter(name => name.endsWith('.jpg')).sort();

    expect(pages).toHaveLength(pageCount);
    const contents = await Promise.all(pages.map(name => zip.file(name)!.async('string')));
    expect(contents).toEqual(Array.from({ length: pageCount }, (_, index) => String(index + 1)));
    if (pageCount < 1000) {
      expect(pages[0]).toBe('page_001.jpg');
    }
  });
});

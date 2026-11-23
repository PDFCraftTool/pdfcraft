import { it, expect, vi, afterEach } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import { CbzToPDFProcessor } from '@/lib/pdf/processors/cbz-to-pdf';

afterEach(() => vi.restoreAllMocks());
async function outputBytes(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

it('paints white before converting transparent comic images to JPEG', async () => {
  const operations: string[] = [];
  const context = {
    fillStyle: '',
    fillRect() { operations.push('fill:' + this.fillStyle); },
    drawImage() { operations.push('image'); },
  };
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(context as unknown as CanvasRenderingContext2D);
  const jpeg = Uint8Array.from(atob('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q=='), character => character.charCodeAt(0));
  vi.spyOn(HTMLCanvasElement.prototype, 'toBlob').mockImplementation(callback => {
    callback({ arrayBuffer: async () => jpeg.buffer } as Blob);
  });
  vi.stubGlobal('Image', class {
    width = 1; height = 1; onload?: () => void;
    set src(_value: string) { queueMicrotask(() => this.onload?.()); }
  });
  try {
    const zip = new JSZip();
    zip.file('page.webp', 'image fixture');
    const buffer = await zip.generateAsync({ type: 'arraybuffer' });
    const file = { name: 'comic.cbz', arrayBuffer: async () => buffer } as File;
    const result = await new CbzToPDFProcessor().process({ files: [file], options: {} });
    expect(result.success).toBe(true);
    const saved = await PDFDocument.load(await outputBytes(result.result as Blob));
    expect(saved.getPageCount()).toBe(1);
    expect(operations).toEqual(['fill:#ffffff', 'image']);
  } finally {
    vi.unstubAllGlobals();
  }
});

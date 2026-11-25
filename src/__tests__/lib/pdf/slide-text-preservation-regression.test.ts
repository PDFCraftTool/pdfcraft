import { describe, it, expect, vi } from 'vitest';
import JSZip from 'jszip';
import { PDFToSlideProcessor } from '@/lib/pdf/processors/pdf-to-slide';

const state = vi.hoisted(() => ({ marked: false }));
vi.mock('@/lib/pdf/loader', () => ({
  loadPdfjs: async () => ({
    getDocument: () => ({ promise: Promise.resolve({
      numPages: 1,
      getPage: async () => ({ getTextContent: async () => ({ items: [
        ...(state.marked ? [{ type: 'beginMarkedContent', id: 'P1' }] : []),
        { str: 'Header', transform: [24, 0, 0, 24, 50, 700] },
        { str: 'left | right', transform: [12, 0, 0, 12, 50, 600] },
        { str: 'and more', transform: [12, 0, 0, 12, 130, 600] },
      ] }) }),
    }) }),
  }),
}));
describe('slide text preservation', () => {
  it.each([false, true])('exports intact bullet text with marked content = %s', async marked => {
    state.marked = marked;
    const file = { name: 'slides.pdf', arrayBuffer: async () => new ArrayBuffer(0) } as File;
    const result = await new PDFToSlideProcessor().process({ files: [file], options: {} });
    expect(result.success).toBe(true);
    const buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = reject;
      reader.readAsArrayBuffer(result.result as Blob);
    });
    const archive = await JSZip.loadAsync(buffer);
    const slide = await archive.file('ppt/slides/slide1.xml')!.async('string');
    expect(slide).toContain('<a:t>left | right and more</a:t>');
    expect(result.metadata?.slides).toEqual([{ title: 'Header', bullets: ['left | right and more'] }]);
  });
});

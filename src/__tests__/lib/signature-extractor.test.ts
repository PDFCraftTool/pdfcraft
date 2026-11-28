import { describe, it, expect, vi, beforeEach } from 'vitest';
import { extractInkFromCanvas } from '@/lib/pdf/processors/signature-extractor';

describe('Signature Extractor Algorithm', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  function setupMockCanvas(width: number, height: number, initialPixels: number[]) {
    const pixelArray = new Uint8ClampedArray(initialPixels);

    const mockCtx = {
      drawImage: vi.fn(),
      getImageData: vi.fn(() => ({
        data: pixelArray,
        width,
        height,
      })),
      putImageData: vi.fn(),
      fillRect: vi.fn(),
      clearRect: vi.fn(),
      fillStyle: '',
    };

    const canvas = {
      width,
      height,
      getContext: vi.fn(() => mockCtx),
      toDataURL: vi.fn(() => 'data:image/png;base64,mockedPng'),
      toBlob: vi.fn((cb: (b: Blob | null) => void) => {
        cb(new Blob(['mocked-png-binary'], { type: 'image/png' }));
      }),
    } as unknown as HTMLCanvasElement;

    // Spy on document.createElement('canvas')
    const origCreateElement = document.createElement.bind(document);
    vi.spyOn(document, 'createElement').mockImplementation((tag: string) => {
      if (tag.toLowerCase() === 'canvas') {
        return {
          width: 0,
          height: 0,
          getContext: vi.fn(() => mockCtx),
          toDataURL: vi.fn(() => 'data:image/png;base64,mockedPng'),
          toBlob: vi.fn((cb: (b: Blob | null) => void) => {
            cb(new Blob(['mocked-png-binary'], { type: 'image/png' }));
          }),
        } as unknown as HTMLElement;
      }
      return origCreateElement(tag);
    });

    return { canvas, pixelArray, mockCtx };
  }

  it('should remove white paper background and set alpha to 0', async () => {
    // 2x2 image:
    // pixel 0: pure white background (255, 255, 255, 255) -> should become alpha 0
    // pixel 1: dark black ink stroke (10, 10, 10, 255) -> should remain visible
    // pixel 2: light gray noise (240, 240, 240, 255) -> should become alpha 0
    // pixel 3: blue ballpoint ink (20, 40, 150, 255) -> should remain visible
    const initial = [
      255, 255, 255, 255,
      10,  10,  10,  255,
      240, 240, 240, 255,
      20,  40,  150, 255,
    ];

    const { canvas, pixelArray } = setupMockCanvas(2, 2, initial);

    const result = await extractInkFromCanvas(
      canvas,
      { x: 0, y: 0, width: 2, height: 2 },
      { threshold: 215, colorMode: 'original', autoTrim: false }
    );

    expect(result.dataUrl).toBe('data:image/png;base64,mockedPng');
    expect(result.blob).toBeInstanceOf(Blob);

    // Pixel 0 (pure white) -> Alpha should be 0 (transparent)
    expect(pixelArray[3]).toBe(0);

    // Pixel 1 (dark ink) -> Alpha should be preserved / opaque
    expect(pixelArray[7]).toBe(255);

    // Pixel 2 (light gray above threshold) -> Alpha should be 0
    expect(pixelArray[11]).toBe(0);

    // Pixel 3 (blue ink, luminance < threshold) -> Alpha preserved
    expect(pixelArray[15]).toBeGreaterThan(0);
  });

  it('should transform ink strokes to pure black when colorMode is black', async () => {
    // 1 pixel with dark ink
    const initial = [50, 50, 50, 255];
    const { canvas, pixelArray } = setupMockCanvas(1, 1, initial);

    await extractInkFromCanvas(
      canvas,
      { x: 0, y: 0, width: 1, height: 1 },
      { threshold: 215, colorMode: 'black', autoTrim: false }
    );

    // In black mode, RGB is normalized to deep black (18, 20, 24)
    expect(pixelArray[0]).toBe(18);
    expect(pixelArray[1]).toBe(20);
    expect(pixelArray[2]).toBe(24);
    expect(pixelArray[3]).toBe(255);
  });

  it('should transform ink strokes to official seal vermilion red when colorMode is seal_red', async () => {
    const initial = [30, 30, 30, 255];
    const { canvas, pixelArray } = setupMockCanvas(1, 1, initial);

    await extractInkFromCanvas(
      canvas,
      { x: 0, y: 0, width: 1, height: 1 },
      { threshold: 215, colorMode: 'seal_red', autoTrim: false }
    );

    // In seal_red mode, RGB is transformed to vermilion red (210, 32, 32)
    expect(pixelArray[0]).toBe(210);
    expect(pixelArray[1]).toBe(32);
    expect(pixelArray[2]).toBe(32);
    expect(pixelArray[3]).toBe(255);
  });
});

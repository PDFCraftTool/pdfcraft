import { describe, it, expect } from 'vitest';
import {
  boxBlur,
  clampRect,
  detectSignatureRegion,
  estimateBackground,
  extractInk,
  labelComponents,
  renderInkOnPaper,
  rotateRectClockwise,
  rotateRectCounterClockwise,
  sensitivityToThreshold,
  toGrayscale,
} from '../../../public/pdfjs-viewer/pdfcraft_signature_scanner.mjs';

type Rect = { x: number; y: number; width: number; height: number };

/**
 * Create an RGBA "photo" of paper whose brightness is given per pixel,
 * with optional dark ink rectangles drawn on top.
 */
function makePhoto(
  width: number,
  height: number,
  paper: (x: number, y: number) => number,
  inkRects: Rect[] = [],
  ink = 40
): Uint8ClampedArray {
  const data = new Uint8ClampedArray(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const inside = inkRects.some(
        (r) => x >= r.x && x < r.x + r.width && y >= r.y && y < r.y + r.height
      );
      const v = inside ? ink : paper(x, y);
      const i = (y * width + x) * 4;
      data[i] = data[i + 1] = data[i + 2] = v;
      data[i + 3] = 255;
    }
  }
  return data;
}

describe('Signature Scanner', () => {
  describe('toGrayscale', () => {
    it('should use perceived luminance and treat transparency as white paper', () => {
      const rgba = new Uint8ClampedArray([
        255, 0, 0, 255, // red
        0, 0, 0, 0, // fully transparent
      ]);
      const gray = toGrayscale(rgba, 2, 1);
      expect(gray[0]).toBe(76); // 0.299 * 255
      expect(gray[1]).toBe(255);
    });
  });

  describe('estimateBackground', () => {
    it('should follow a lighting gradient across the paper', () => {
      const width = 128;
      const height = 64;
      // Paper gets darker from left (230) to right (130), like a shadow.
      const paper = (x: number) => Math.round(230 - (100 * x) / (width - 1));
      const gray = toGrayscale(makePhoto(width, height, paper), width, height);
      const background = estimateBackground(gray, width, height);

      const left = background[32 * width + 4];
      const right = background[32 * width + width - 5];
      expect(left).toBeGreaterThan(200);
      expect(right).toBeLessThan(160);
    });

    it('should ignore thin ink strokes when estimating the paper', () => {
      const width = 96;
      const height = 96;
      const gray = toGrayscale(
        makePhoto(width, height, () => 220, [{ x: 40, y: 0, width: 4, height: 96 }]),
        width,
        height
      );
      const background = estimateBackground(gray, width, height);
      expect(background[48 * width + 41]).toBeGreaterThanOrEqual(215);
    });
  });

  describe('boxBlur', () => {
    it('should average neighbours and preserve a constant signal', () => {
      const values = new Float32Array([0, 0, 9, 0, 0]);
      boxBlur(values, 5, 1, 1);
      expect(Array.from(values)).toEqual([0, 3, 3, 3, 0]);

      const flat = new Float32Array(12).fill(7);
      boxBlur(flat, 4, 3, 2);
      flat.forEach((v) => expect(v).toBeCloseTo(7));
    });
  });

  describe('sensitivityToThreshold', () => {
    it('should lower the darkness threshold as sensitivity increases', () => {
      expect(sensitivityToThreshold(0)).toBeGreaterThan(sensitivityToThreshold(50));
      expect(sensitivityToThreshold(50)).toBeGreaterThan(sensitivityToThreshold(100));
    });

    it('should clamp out-of-range and invalid values', () => {
      expect(sensitivityToThreshold(-20)).toBe(sensitivityToThreshold(0));
      expect(sensitivityToThreshold(500)).toBe(sensitivityToThreshold(100));
      expect(sensitivityToThreshold(Number.NaN)).toBe(sensitivityToThreshold(0));
    });
  });

  describe('labelComponents', () => {
    it('should label 8-connected blobs separately', () => {
      // Two diagonal pixels form one blob, the isolated pixel another.
      const mask = new Uint8Array([
        1, 0, 0, 0,
        0, 1, 0, 1,
        0, 0, 0, 0,
      ]);
      const { labels, count } = labelComponents(mask, 4, 3);
      expect(count).toBe(2);
      expect(labels[0]).toBe(labels[5]);
      expect(labels[7]).not.toBe(labels[0]);
      expect(labels[1]).toBe(0);
    });
  });

  describe('extractInk', () => {
    it('should keep ink and remove a shadowed paper background', () => {
      const width = 160;
      const height = 80;
      // Strong shadow: paper brightness drops from 235 to 120.
      const paper = (x: number) => Math.round(235 - (115 * x) / (width - 1));
      const stroke = { x: 20, y: 30, width: 120, height: 6 };
      const rgba = makePhoto(width, height, paper, [stroke], 30);

      const { alpha, bounds, inkPixels } = extractInk(rgba, width, height);

      // Shadowed paper on the right must not turn into ink.
      expect(alpha[10 * width + 150]).toBe(0);
      // The stroke stays opaque, also where it crosses the shadow.
      expect(alpha[33 * width + 30]).toBe(255);
      expect(alpha[33 * width + 130]).toBe(255);
      expect(inkPixels).toBeGreaterThan(0);
      expect(bounds).toEqual(stroke);
    });

    it('should not turn a sharp shadow edge into ink', () => {
      const width = 200;
      const height = 120;
      // The lower half is in the hard shadow of the phone.
      const paper = (_x: number, y: number) => (y < 60 ? 230 : 120);
      const stroke = { x: 30, y: 52, width: 140, height: 4 }; // crosses near the edge
      const rgba = makePhoto(width, height, paper, [stroke], 30);

      const { alpha, bounds } = extractInk(rgba, width, height);
      for (const y of [58, 59, 60, 61, 62]) {
        expect(alpha[y * width + 10]).toBe(0);
        expect(alpha[y * width + 190]).toBe(0);
      }
      expect(bounds).toEqual(stroke);
    });

    it('should keep thick felt-tip strokes when the background radius fits the photo', () => {
      // A tight crop (600 x 200) of a signature written with a thick pen: the
      // stroke is 3% of the crop width.
      const width = 600;
      const height = 200;
      const stroke = { x: 50, y: 90, width: 500, height: 18 };
      const rgba = makePhoto(width, height, () => 225, [stroke], 30);

      // Sized on the crop alone, the window is too small: the middle of the
      // stroke is taken for paper and the stroke comes out hollow.
      const middle = (stroke.y + stroke.height / 2) * width + 300;
      expect(extractInk(rgba, width, height).alpha[middle]).toBe(0);

      // Sized on the whole photo (here 4x the crop), the stroke stays solid.
      const { alpha, bounds } = extractInk(rgba, width, height, {
        backgroundRadius: 4 * width * 0.012,
      });
      // The 1 px smoothing softens the edge by one pixel on each side.
      expect(bounds).toEqual({
        x: stroke.x - 1,
        y: stroke.y - 1,
        width: stroke.width + 2,
        height: stroke.height + 2,
      });
      for (let y = stroke.y; y < stroke.y + stroke.height; y++) {
        expect(alpha[y * width + 300]).toBe(255);
      }
    });

    it('should not mistake a table at the edge of a crop for ink', () => {
      const width = 300;
      const height = 120;
      // A tight crop: a dark table strip along the top and left edges.
      const paper = (x: number, y: number) => (x < 12 || y < 10 ? 70 : 225);
      const stroke = { x: 60, y: 60, width: 200, height: 4 };
      const rgba = makePhoto(width, height, paper, [stroke], 30);

      const { alpha, bounds } = extractInk(rgba, width, height);
      expect(alpha[5 * width + 150]).toBe(0); // table
      expect(alpha[60 * width + 5]).toBe(0); // table
      expect(alpha[11 * width + 150]).toBe(0); // where paper meets table
      expect(bounds).toEqual(stroke);
    });

    it('should keep faint parts of a stroke that touch dark ink (hysteresis)', () => {
      const width = 200;
      const height = 60;
      const rgba = makePhoto(width, height, () => 220);
      const paint = (x0: number, x1: number, value: number) => {
        for (let y = 28; y < 32; y++) {
          for (let x = x0; x < x1; x++) {
            const i = (y * width + x) * 4;
            rgba[i] = rgba[i + 1] = rgba[i + 2] = value;
          }
        }
      };
      paint(20, 100, 40); // dark stroke
      paint(100, 180, 175); // faint tail, below the threshold on its own
      paint(10, 15, 175); // equally faint, but not connected to any ink

      const { alpha, bounds } = extractInk(rgba, width, height);
      expect(alpha[30 * width + 150]).toBeGreaterThan(0);
      expect(alpha[30 * width + 12]).toBe(0);
      expect(bounds).toEqual({ x: 20, y: 28, width: 160, height: 4 });
    });

    it('should remove isolated specks of noise', () => {
      const width = 200;
      const height = 100;
      const rgba = makePhoto(width, height, () => 230, [
        { x: 20, y: 40, width: 150, height: 5 }, // signature stroke
        { x: 190, y: 5, width: 1, height: 1 }, // single dust pixel
      ], 20);

      const withoutDespeckle = extractInk(rgba, width, height, { despeckle: false });
      expect(withoutDespeckle.alpha[5 * width + 190]).toBeGreaterThan(0);

      const { alpha, bounds } = extractInk(rgba, width, height);
      expect(alpha[5 * width + 190]).toBe(0);
      expect(bounds).toEqual({ x: 20, y: 40, width: 150, height: 5 });
    });

    it('should pick up faint strokes only at higher sensitivity', () => {
      const width = 120;
      const height = 60;
      // A light pencil-like stroke: about 25% darker than the paper.
      const rgba = makePhoto(width, height, () => 220, [
        { x: 10, y: 25, width: 100, height: 4 },
      ], 165);

      expect(extractInk(rgba, width, height, { sensitivity: 0 }).bounds).toBeNull();
      expect(extractInk(rgba, width, height, { sensitivity: 100 }).bounds).not.toBeNull();
    });

    it('should report no ink for blank paper', () => {
      const rgba = makePhoto(64, 64, (x, y) => 200 + ((x * 7 + y * 13) % 20));
      const { bounds, inkPixels } = extractInk(rgba, 64, 64);
      expect(bounds).toBeNull();
      expect(inkPixels).toBe(0);
    });
  });

  describe('detectSignatureRegion', () => {
    it('should find the signature and ignore dark areas touching the border', () => {
      const width = 300;
      const height = 200;
      const rgba = makePhoto(width, height, () => 225, [
        // Signature strokes in the middle of the sheet.
        { x: 100, y: 90, width: 40, height: 4 },
        { x: 145, y: 85, width: 50, height: 4 },
        // Table edge visible along the bottom of the photo.
        { x: 0, y: 185, width: 300, height: 15 },
      ], 30);

      const region = detectSignatureRegion(rgba, width, height);
      expect(region).not.toBeNull();
      const r = region as Rect;
      // Contains both strokes...
      expect(r.x).toBeLessThanOrEqual(100);
      expect(r.x + r.width).toBeGreaterThanOrEqual(195);
      expect(r.y).toBeLessThanOrEqual(85);
      expect(r.y + r.height).toBeGreaterThanOrEqual(94);
      // ...but not the table edge.
      expect(r.y + r.height).toBeLessThan(185);
    });

    it('should frame all words of a signature on the same line', () => {
      const width = 400;
      const height = 200;
      const rgba = makePhoto(width, height, () => 225, [
        { x: 40, y: 95, width: 90, height: 5 }, // first name
        { x: 230, y: 92, width: 30, height: 5 }, // initial, far to the right
        { x: 300, y: 20, width: 1, height: 1 }, // dust above the signature
      ], 30);

      const r = detectSignatureRegion(rgba, width, height) as Rect;
      expect(r.x).toBeLessThanOrEqual(40);
      expect(r.x + r.width).toBeGreaterThanOrEqual(260);
      expect(r.y).toBeGreaterThan(20);
    });

    it('should frame the signature, not the edge of the sheet on a dark table', () => {
      const width = 400;
      const height = 300;
      // Sheet from (60, 50) to (340, 250) on a dark table.
      const paper = (x: number, y: number) =>
        x >= 60 && x < 340 && y >= 50 && y < 250 ? 220 : 60;
      const rgba = makePhoto(width, height, paper, [
        { x: 120, y: 150, width: 140, height: 4 },
        { x: 150, y: 135, width: 4, height: 20 },
      ], 30);

      const r = detectSignatureRegion(rgba, width, height) as Rect;
      expect(r).not.toBeNull();
      expect(r.x).toBeGreaterThan(80);
      expect(r.x + r.width).toBeLessThan(320);
      expect(r.y).toBeGreaterThan(70);
      expect(r.y + r.height).toBeLessThan(230);
    });

    it('should return null when there is no signature', () => {
      const rgba = makePhoto(100, 80, () => 230);
      expect(detectSignatureRegion(rgba, 100, 80)).toBeNull();
    });
  });

  describe('rectangle helpers', () => {
    const rect = { x: 10, y: 20, width: 30, height: 40 };

    it('should rotate a rectangle clockwise into the rotated image', () => {
      // Image 100 x 80; after rotation it is 80 x 100.
      expect(rotateRectClockwise(rect, 80)).toEqual({ x: 20, y: 10, width: 40, height: 30 });
    });

    it('should undo a clockwise rotation with a counter-clockwise one', () => {
      const rotated = rotateRectClockwise(rect, 80);
      expect(rotateRectCounterClockwise(rotated, 80)).toEqual(rect);
    });

    it('should keep rectangles inside the image with a minimum size', () => {
      expect(clampRect({ x: -5, y: 90, width: 2, height: 30 }, 100, 100, 8)).toEqual({
        x: 0,
        y: 70,
        width: 8,
        height: 30,
      });
      expect(clampRect({ x: 0, y: 0, width: 500, height: 500 }, 100, 50)).toEqual({
        x: 0,
        y: 0,
        width: 100,
        height: 50,
      });
    });
  });

  describe('renderInkOnPaper', () => {
    it('should render black ink on opaque white paper, trimmed with padding', () => {
      const width = 40;
      const height = 30;
      const alpha = new Uint8ClampedArray(width * height);
      alpha[15 * width + 20] = 255;

      const out = renderInkOnPaper(alpha, width, height, { x: 20, y: 15, width: 1, height: 1 });
      // 8px padding on each side of the single ink pixel.
      expect(out.width).toBe(17);
      expect(out.height).toBe(17);
      const ink = (8 * out.width + 8) * 4;
      expect(Array.from(out.data.slice(ink, ink + 4))).toEqual([0, 0, 0, 255]);
      expect(Array.from(out.data.slice(0, 4))).toEqual([255, 255, 255, 255]);
    });
  });
});

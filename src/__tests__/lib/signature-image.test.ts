import { describe, it, expect } from 'vitest';
import { parseSvgDimensions, isSvgFile } from '@/lib/pdf/signature-image';

describe('Signature Image – SVG dimension parsing', () => {
  it('reads explicit width/height', () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="120"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 400, height: 120 });
  });

  it('converts physical units to CSS pixels', () => {
    const svg = '<svg width="2in" height="72pt"></svg>';
    const dims = parseSvgDimensions(svg)!;
    expect(dims.width).toBeCloseTo(192);
    expect(dims.height).toBeCloseTo(96);
  });

  it('falls back to viewBox when no width/height is given', () => {
    const svg = '<svg viewBox="0 0 300 100"><path d="M0 0" /></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 300, height: 100 });
  });

  it('derives the missing edge from the viewBox aspect ratio', () => {
    const svg = '<svg width="600" viewBox="0 0 300 100"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 600, height: 200 });
  });

  it('ignores percentage sizes and uses the viewBox instead', () => {
    const svg = '<svg width="100%" height="100%" viewBox="0 0 50 20"></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 50, height: 20 });
  });

  it('returns null when nothing usable is declared', () => {
    expect(parseSvgDimensions('<svg></svg>')).toBeNull();
    expect(parseSvgDimensions('not an svg')).toBeNull();
  });

  it('does not match <svg> attributes inside nested elements only', () => {
    const svg = '<svg viewBox="0 0 10 10"><svg width="999" height="999"/></svg>';
    expect(parseSvgDimensions(svg)).toEqual({ width: 10, height: 10 });
  });
});

describe('Signature Image – file type detection', () => {
  it('detects SVG by MIME type or extension', () => {
    expect(isSvgFile(new File([''], 'sig.svg', { type: 'image/svg+xml' }))).toBe(true);
    expect(isSvgFile(new File([''], 'sig.SVG', { type: '' }))).toBe(true);
    expect(isSvgFile(new File([''], 'sig.png', { type: 'image/png' }))).toBe(false);
  });
});

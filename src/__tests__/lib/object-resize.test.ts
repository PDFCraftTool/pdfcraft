import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

// Exercise the actual browser helper without starting the PDF editing engine.
const source = readFileSync('public/direct-pdf-editor/app.js', 'utf8');
const body = source.slice(source.indexOf('function resizedBounds('), source.indexOf('\nconst escapeRegex'));
const resize = new Function(`${body}; return resizedBounds;`)() as (
  bounds: {x:number;y:number;w:number;h:number}, corner:string, dx:number, dy:number, lock?:boolean
) => {x:number;y:number;w:number;h:number};
const b = {x:10,y:20,w:100,h:50};

describe('object resizing with Shift', () => {
  it.each(['ne','nw','se','sw'])('preserves ratio and the opposite anchor for %s', corner => {
    const r = resize(b, corner, corner.includes('w') ? -30 : 30, corner.includes('s') ? -3 : 3, true);
    expect(r.w / r.h).toBeCloseTo(2);
    expect(corner.includes('w') ? r.x+r.w : r.x).toBeCloseTo(corner.includes('w') ? b.x+b.w : b.x);
    expect(corner.includes('s') ? r.y+r.h : r.y).toBeCloseTo(corner.includes('s') ? b.y+b.h : b.y);
  });
  it('keeps free resizing when Shift is released', () => {
    expect(resize(b, 'ne', 30, 3)).toEqual({x:10,y:20,w:130,h:53});
  });
  it('keeps the ratio at minimum size and prevents flipping', () => {
    const r = resize(b, 'ne', -500, -500, true);
    expect(r.w).toBeGreaterThanOrEqual(4);
    expect(r.h).toBeGreaterThanOrEqual(4);
    expect(r.w/r.h).toBeCloseTo(2);
  });
  it('uses the vertical movement when it changes size more', () => {
    const r = resize(b, 'ne', 1, 25, true);
    expect(r.w).toBe(150);
    expect(r.h).toBe(75);
  });
});

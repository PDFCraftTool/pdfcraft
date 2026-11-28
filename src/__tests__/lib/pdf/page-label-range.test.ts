import { describe, expect, it } from 'vitest';
import { parsePageLabelRange } from '@/lib/pdf/page-label-range';

describe('page label ranges shared by preview and output', () => {
  it.each([
    ['1-100000000000000000000', [0, 1, 2, 3]],
    ['100000000000000000000-1', [0, 1, 2, 3]],
    ['100000000000000000000-100000000000000000001', []],
    ['1-' + '9'.repeat(400), [0, 1, 2, 3]],
    ['0-2', [0, 1]],
    ['3-99', [2, 3]],
    ['4-2,1,3', [1, 2, 3, 0]],
    ['', [0, 1, 2, 3]],
    [' ODD ', [0, 2]],
    ['even', [1, 3]],
  ] as [string, number[]][])('bounds %s to the document', (range, expected) => {
    expect([...parsePageLabelRange(range, 4)]).toEqual(expected);
  });

  it('returns no pages for an empty document', () => {
    expect([...parsePageLabelRange('1-100000000000000000000', 0)]).toEqual([]);
  });
});

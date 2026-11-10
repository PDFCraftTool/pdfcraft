import type { PDFPage } from 'pdf-lib';

type Matrix = [number, number, number, number, number, number];

/**
 * A page as a viewer shows it. PDF pages carry a /Rotate entry (typical for
 * scans) that turns them clockwise when displayed, but pdf-lib draws in the
 * unrotated page space. Callers lay content out in displayed coordinates
 * (origin bottom-left of what the viewer shows) and either map single
 * positions with `place`, or draw inside `matrix` (a `cm` that takes
 * displayed coordinates to page space) so existing layout code keeps working.
 */
export interface PageView {
  /** Displayed width and height (swapped for quarter turns). */
  width: number;
  height: number;
  /** Maps displayed coordinates to unrotated page space. */
  matrix: Matrix;
  /** Unrotated position plus the counter-clockwise angle that keeps text upright. */
  place(x: number, y: number): { x: number; y: number; angle: number };
}

export function getPageView(page: PDFPage): PageView {
  const { x: boxX, y: boxY, width: pageWidth, height: pageHeight } = page.getMediaBox();
  const quarterTurns = ((page.getRotation().angle % 360) + 360) % 360 / 90;
  const turned = quarterTurns % 2 === 1;

  const matrix: Matrix =
    quarterTurns === 1 ? [0, 1, -1, 0, boxX + pageWidth, boxY]
    : quarterTurns === 2 ? [-1, 0, 0, -1, boxX + pageWidth, boxY + pageHeight]
    : quarterTurns === 3 ? [0, -1, 1, 0, boxX, boxY + pageHeight]
    : [1, 0, 0, 1, boxX, boxY];
  const [a, b, c, d, e, f] = matrix;

  return {
    width: turned ? pageHeight : pageWidth,
    height: turned ? pageWidth : pageHeight,
    matrix,
    place: (x, y) => ({ x: a * x + c * y + e, y: b * x + d * y + f, angle: quarterTurns * 90 }),
  };
}

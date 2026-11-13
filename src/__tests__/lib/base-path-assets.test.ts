/**
 * Regression guard: root-relative asset URLs must go through withBasePath().
 *
 * Next.js `basePath` does not rewrite plain string URLs, so a literal
 * '/qpdf.js' or '/workers/x.js' loads from the domain root when the app is
 * deployed under a subpath (e.g. https://example.com/pdf).
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve(__dirname, '../..');

function listSourceFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === '__tests__' ? [] : listSourceFiles(full);
    return /\.(ts|tsx)$/.test(entry.name) ? [full] : [];
  });
}

describe('base path for static assets', () => {
  it('does not use unwrapped root-relative qpdf, worker or viewer URLs', () => {
    const unwrapped = [
      /(?<!withBasePath\()['"`]\/qpdf\.(js|wasm)['"`]/,
      /new Worker\(\s*['"`]\/workers\//,
      /(workerSrc|cMapUrl|standardFontDataUrl)\s*[:=]\s*['"`]\//,
    ];

    const offenders = listSourceFiles(SRC_DIR).flatMap((file) =>
      fs
        .readFileSync(file, 'utf8')
        .split('\n')
        .map((line, i) => ({ line, at: `${path.relative(SRC_DIR, file)}:${i + 1}` }))
        .filter(({ line }) => unwrapped.some((re) => re.test(line)))
        .map(({ at }) => at)
    );

    expect(offenders).toEqual([]);
  });
});

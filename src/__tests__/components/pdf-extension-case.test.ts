import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap(name => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(ts|tsx)$/.test(name) ? [path] : [];
  });
}

// Output names must still get their suffix for SCAN.PDF-style sources, so the
// extension must be matched case-insensitively and at the end of the name.
describe('tool components build download names from the .pdf extension', () => {
  it("never use the case-sensitive replace('.pdf', ...)", () => {
    const offenders = ['src/components', 'src/app']
      .flatMap(sourceFiles)
      .filter(path => readFileSync(path, 'utf8').includes(".replace('.pdf'"));
    expect(offenders).toEqual([]);
  });
});

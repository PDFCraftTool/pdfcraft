import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('direct PDF editor zero-width space', () => {
  it('edits and saves a PDF containing U+200B with only bundled fallback fonts', () => {
    // Use a fresh Node process: jsdom's window selects the Emscripten browser
    // loader, which cannot load the shipped WASM from the filesystem.
    const output = execFileSync(process.execPath, [
      resolve('src/__tests__/direct-pdf-editor/fixtures/zero-width-space-probe.mjs'),
    ], { encoding: 'utf8', timeout: 30_000 });
    expect(JSON.parse(output)).toEqual([
      { replacement: 'Changed after', editable: true, text: 'Changed after' },
    ]);
  });
});

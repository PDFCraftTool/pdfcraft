import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const fontPath = join(root, 'public', 'fonts', 'NotoNaskhArabic-Regular.ttf');
const licensePath = join(root, 'public', 'fonts', 'OFL-NotoNaskhArabic.txt');
const mainJs = readFileSync(join(root, 'public', 'direct-pdf-editor', 'main.js'), 'utf8');
const coreJs = readFileSync(join(root, 'public', 'direct-pdf-editor', 'core.js'), 'utf8');

describe('bundled Arabic font', () => {
  it('ships a valid TrueType font', () => {
    const bytes = readFileSync(fontPath);

    expect(bytes.length).toBeGreaterThan(50_000);
    expect(bytes.length).toBeLessThan(2_000_000);

    // TrueType outlines: 0x00010000, or the legacy 'true' tag.
    expect([0x00010000, 0x74727565]).toContain(bytes.readUInt32BE(0));
  });

  it('ships the SIL OFL license text', () => {
    expect(readFileSync(licensePath, 'utf8')).toContain('SIL OPEN FONT LICENSE');
  });

  it('is registered under the families the engine already falls back to', () => {
    // Keep the registration in sync with scriptFallbackFamilies().
    expect(coreJs).toContain("'Noto Naskh Arabic'");
    expect(mainJs).toContain("'/fonts/NotoNaskhArabic-Regular.ttf'");
    expect(mainJs).toMatch(
      /families = \['Noto Naskh Arabic', 'Noto Sans Arabic'\]/
    );
  });

  it('is mounted at editor startup', () => {
    expect(mainJs).toContain('async function loadBundledArabicFont()');
    expect(mainJs).toMatch(/await loadBundledArabicFont\(\)/);
  });
});

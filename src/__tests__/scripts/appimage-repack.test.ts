import { describe, expect, it } from 'vitest';
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

// Run the actual workflow shell block with a synthetic extractor/packer. This
// isolates repackaging from the Rust build, network, FUSE and Linux ELF runtime.
const workflow = readFileSync(resolve('.github/workflows/build-tauri.yml'), 'utf8');
const step = workflow.split('      - name: Patch Linux AppImage')[1].split('\n      - name:')[0];
const script = step.split('        run: |\n')[1].split('\n').map(line => line.startsWith('          ') ? line.slice(10) : line).join('\n');

describe.skipIf(process.platform === 'win32')('AppImage repack permissions', () => {
  it.each([0o700, 0o755])('repackages an extracted AppDir with mode %s without making data executable', mode => {
    const root = mkdtempSync(join(tmpdir(), 'pdfcraft-appimage-'));
    try {
      const bin = join(root, 'bin');
      const appdir = join(root, 'fixture');
      const bundle = join(root, 'src-tauri/target/release/bundle/appimage');
      for (const dir of [bin, appdir, bundle, join(root, 'temporary'), join(appdir, 'usr/lib'), join(appdir, 'usr/share')]) mkdirSync(dir, { recursive: true });
      writeFileSync(join(appdir, 'AppRun'), '#!/bin/sh\nexit 0\n', { mode: 0o700 });
      writeFileSync(join(appdir, 'usr/share/data.txt'), 'data', { mode: 0o600 });
      writeFileSync(join(appdir, 'usr/lib/libwayland-client.so.0'), 'remove me');
      for (const path of [appdir, join(appdir, 'usr'), join(appdir, 'usr/lib'), join(appdir, 'usr/share')]) chmodSync(path, mode);
      writeFileSync(join(bundle, 'fixture.AppImage'), '#!/bin/sh\ncp -R "$APPIMAGE_FIXTURE" squashfs-root\nchmod "$APPIMAGE_FIXTURE_MODE" squashfs-root\n', { mode: 0o700 });
      writeFileSync(join(bin, 'appimagetool'), `#!/usr/bin/env node
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const source = process.argv[2];
for (const name of ['', 'usr', 'usr/lib', 'usr/share']) {
  assert.equal(fs.statSync(path.join(source, name)).mode & 0o555, 0o555, 'AppDir directory must be readable/searchable by every user');
}
assert.equal(fs.statSync(path.join(source, 'AppRun')).mode & 0o555, 0o555, 'AppRun must stay executable for every user');
const data = fs.statSync(path.join(source, 'usr/share/data.txt')).mode;
assert.equal(data & 0o444, 0o444, 'data must be readable');
assert.equal(data & 0o111, 0, 'data must not gain executable bits');
assert.equal(fs.existsSync(path.join(source, 'usr/lib/libwayland-client.so.0')), false);
fs.writeFileSync(process.argv[3], 'repacked');
`, { mode: 0o700 });
      const result = spawnSync('bash', ['-e', '-o', 'pipefail', '-c', script], {
        cwd: root,
        encoding: 'utf8',
        env: { ...process.env, PATH: `${bin}:${process.env.PATH}`, GITHUB_WORKSPACE: root, TMPDIR: join(root, 'temporary'), APPIMAGE_FIXTURE: appdir, APPIMAGE_FIXTURE_MODE: mode.toString(8) },
        timeout: 10_000,
      });
      expect(result.error).toBeUndefined();
      expect(result.status, result.stderr).toBe(0);
      expect(readFileSync(join(bundle, 'fixture.AppImage'), 'utf8')).toBe('repacked');
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

/**
 * Generate .js copies of PDF.js viewer .mjs bundles so hosts that serve
 * unknown extensions as application/octet-stream still load the viewer.
 *
 * Usage:
 *   node scripts/ensure-pdfjs-viewer-js.js [public|out]
 */

import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const target = process.argv[2] || 'public';
const targetDir = join(rootDir, target);
const viewerDir = join(rootDir, target, 'pdfjs-viewer');
const workersDir = join(rootDir, target, 'workers');

function copyDirRecursive(src, dest) {
  if (!existsSync(src)) return;
  mkdirSync(dest, { recursive: true });
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function convertMjsToJs(dir) {
  if (!existsSync(dir)) {
    console.log(`[ensure-pdfjs-js] Skip: ${dir} not found`);
    return;
  }

  const mjsFiles = readdirSync(dir).filter((name) => name.endsWith('.mjs'));
  for (const mjsFile of mjsFiles) {
    const mjsPath = join(dir, mjsFile);
    const jsPath = join(dir, mjsFile.replace(/\.mjs$/, '.js'));
    let mjsContent = readFileSync(mjsPath, 'utf8');
    
    // Normalize any legacy ../web/ resource paths to local ./
    const normalizedMjs = mjsContent.replace(/\.\.\/web\/(cmaps|standard_fonts|iccs|wasm)\//g, './$1/');
    if (normalizedMjs !== mjsContent) {
      writeFileSync(mjsPath, normalizedMjs);
      mjsContent = normalizedMjs;
    }

    let jsContent = mjsContent.replace(/\.mjs/g, '.js');
    writeFileSync(jsPath, jsContent);
    console.log(`[ensure-pdfjs-js] ${target}/${mjsFile} -> ${mjsFile.replace(/\.mjs$/, '.js')}`);
  }
}

function patchHtmlFiles(dir) {
  if (!existsSync(dir)) return;

  for (const htmlFile of ['viewer.html', 'form-viewer.html', 'sign-viewer.html']) {
    const htmlPath = join(dir, htmlFile);
    if (!existsSync(htmlPath)) continue;

    const html = readFileSync(htmlPath, 'utf8');
    const patched = html.replace(/\.mjs/g, '.js');
    if (patched !== html) {
      writeFileSync(htmlPath, patched);
      console.log(`[ensure-pdfjs-js] Patched ${target}/pdfjs-viewer/${htmlFile}`);
    }
  }
}

function syncWebFallbacks() {
  if (!existsSync(viewerDir)) return;
  const webDir = join(targetDir, 'web');
  for (const sub of ['cmaps', 'standard_fonts', 'iccs', 'wasm']) {
    const src = join(viewerDir, sub);
    const dest = join(webDir, sub);
    if (existsSync(src)) {
      copyDirRecursive(src, dest);
    }
  }
  console.log(`[ensure-pdfjs-js] Synced fallback /web/ resource directories in ${target}`);
}

function copyDeploymentFiles() {
  if (target !== 'out') return;

  const htaccessSrc = join(rootDir, '.htaccess');
  const htaccessDest = join(rootDir, 'out', '.htaccess');
  if (existsSync(htaccessSrc)) {
    copyFileSync(htaccessSrc, htaccessDest);
    console.log('[ensure-pdfjs-js] Copied .htaccess to out/');
  }
}

convertMjsToJs(viewerDir);
patchHtmlFiles(viewerDir);
convertMjsToJs(workersDir);
syncWebFallbacks();
copyDeploymentFiles();

console.log('[ensure-pdfjs-js] Done.');

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, copyFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { createServer, request } from 'node:http';
import { once } from 'node:events';

function start(script, args) {
  const child = spawn(process.execPath, [script, ...args], { stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  child.stdout.on('data', data => { output += data; });
  child.stderr.on('data', data => { output += data; });
  const exited = once(child, 'exit');
  return { child, exited, output: () => output };
}
function get(port, path, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = request({ host: '127.0.0.1', port, path, method }, res => {
      let body = '';
      res.on('data', data => { body += data; });
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', reject);
    req.end();
  });
}

test('local static server: routing, headers, isolation, and strict startup', async t => {
  const dir = await mkdtemp(join(tmpdir(), 'pdfcraft-server-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  await mkdir(join(dir, 'scripts'));
  const script = join(dir, 'scripts/serve-local.mjs');
  await copyFile(new URL('./serve-local.mjs', import.meta.url), script);
  const missing = start(script, []);
  assert.equal((await missing.exited)[0], 1);
  assert.match(missing.output(), /Run npm run build first/);
  await mkdir(join(dir, 'out/en'), { recursive: true });
  await writeFile(join(dir, 'out/en/index.html'), '<h1>PDFCraft</h1>');
  await writeFile(join(dir, 'out/worker.mjs'), 'export default 1;');
  await writeFile(join(dir, 'out/soffice.wasm.bin'), 'wasm');
  await writeFile(join(dir, 'out/soffice.wasm.bin.gz'), 'compressed');
  await writeFile(join(dir, 'private.txt'), 'private');
  await symlink(join(dir, 'private.txt'), join(dir, 'out/link.txt'));

  for (const args of [['--host', '0.0.0.0'], ['--port', '0'], ['--port', '4322x']]) {
    const invalid = start(script, args);
    assert.equal((await invalid.exited)[0], 1);
    assert.match(invalid.output(), /Use --host 127.0.0.1/);
  }
  const reserved = createServer();
  await new Promise(resolve => reserved.listen(0, '127.0.0.1', resolve));
  const port = reserved.address().port;
  const occupied = start(script, ['--port', String(port)]);
  assert.equal((await occupied.exited)[0], 1);
  assert.match(occupied.output(), /EADDRINUSE/);
  await new Promise(resolve => reserved.close(resolve));

  const server = start(script, ['--host', '127.0.0.1', '--port', String(port)]);
  t.after(async () => { server.child.kill(); await server.exited; });
  await Promise.race([
    once(server.child.stdout, 'data'),
    server.exited.then(() => { throw new Error(server.output()); }),
  ]);
  const home = await get(port, '/en/');
  assert.equal(home.status, 200);
  assert.equal(home.body, '<h1>PDFCraft</h1>');
  assert.equal(home.headers['cross-origin-opener-policy'], 'same-origin');
  assert.equal(home.headers['cross-origin-embedder-policy'], 'require-corp');
  assert.equal(home.headers['cross-origin-resource-policy'], 'cross-origin');
  assert.equal(home.headers['content-type'], 'text/html; charset=utf-8');
  assert.equal((await get(port, '/en?x=1')).headers.location, '/en/?x=1');
  assert.equal((await get(port, '/en/', 'HEAD')).body, '');
  assert.equal((await get(port, '/en/', 'POST')).status, 405);
  assert.equal((await get(port, '/worker.mjs')).headers['content-type'], 'application/javascript; charset=utf-8');
  assert.equal((await get(port, '/soffice.wasm.bin')).headers['content-type'], 'application/wasm');
  const gzip = await get(port, '/soffice.wasm.bin.gz');
  assert.equal(gzip.headers['content-type'], 'application/wasm');
  assert.equal(gzip.headers['content-encoding'], 'gzip');
  for (const path of ['/missing', '/link.txt', '/%2e%2e%2fprivate.txt', '/%5c..%5cprivate.txt', '/.env']) {
    assert.equal((await get(port, path)).status, 404, path);
  }
  assert.equal((await get(port, '/%ZZ')).status, 400);
});

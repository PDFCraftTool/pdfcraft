/** Serve the static export locally, including the isolation headers required by WASM. */
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { realpath, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({ options: {
  host: { type: 'string', default: process.env.HOST || '127.0.0.1' },
  port: { type: 'string', default: process.env.PORT || '3000' },
} });
const port = Number(values.port);
if (values.host !== '127.0.0.1' || !/^\d+$/.test(values.port) || !Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('Use --host 127.0.0.1 and a port between 1 and 65535.');
}
const root = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), '../out')).catch(() => {
  throw new Error('Static export is missing. Run npm run build first.');
});
await stat(resolve(root, 'en/index.html'));

const mimeTypes = {
  '.html': 'text/html; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8', '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.wasm': 'application/wasm', '.pdf': 'application/pdf', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
};
const server = createServer(async (req, res) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-cache');
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
    if (pathname.includes('\\') || pathname.includes('\0') || pathname.split('/').some(part => part.startsWith('.'))) {
      res.writeHead(404).end();
      return;
    }
    let file = resolve(root, `.${pathname}`);
    let info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) {
        const url = new URL(req.url, 'http://127.0.0.1');
        res.writeHead(308, { Location: `${url.pathname}/${url.search}` }).end();
        return;
      }
      file = resolve(file, 'index.html');
    }
    file = await realpath(file);
    if (!file.startsWith(root + sep)) {
      res.writeHead(404).end();
      return;
    }
    info = await stat(file);
    if (!info.isFile()) {
      res.writeHead(404).end();
      return;
    }
    // LibreOffice commits gzip assets; retain their encoding if directly requested.
    const contentFile = file.endsWith('.gz') ? file.slice(0, -3) : file;
    const contentType = contentFile.endsWith('.wasm.bin') ? 'application/wasm'
      : mimeTypes[extname(contentFile)] || 'application/octet-stream';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Length', info.size);
    if (file.endsWith('.gz')) res.setHeader('Content-Encoding', 'gzip');
    res.writeHead(200);
    if (req.method === 'HEAD') res.end();
    else createReadStream(file).on('error', () => res.destroy()).pipe(res);
  } catch (error) {
    res.writeHead(error instanceof URIError ? 400 : 404).end();
  }
});
server.on('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(port, values.host, () => console.log(`PDFCraft ready at http://${values.host}:${port}/en/`));

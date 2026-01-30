/**
 * Serves the GitHub Pages build at /career-portfolio/ so you can test
 * the production build locally (same URLs as on GitHub Pages).
 *
 * Run: node scripts/serve-gh-pages.js
 * Then open: http://localhost:4200/career-portfolio/
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4200;
const BUILD_DIR = path.join(__dirname, '..', 'dist', 'career-portfolio', 'browser');
const BASE_PATH = '/career-portfolio';

function getPath(urlPath) {
  if (urlPath === '/' || urlPath === '') return BASE_PATH + '/';
  if (urlPath.startsWith(BASE_PATH + '/')) {
    return path.join(BUILD_DIR, urlPath.slice(BASE_PATH.length));
  }
  if (urlPath === BASE_PATH) return path.join(BUILD_DIR, 'index.html');
  return null;
}

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // Redirect /career-portfolio to /career-portfolio/
  if (urlPath === BASE_PATH) {
    res.writeHead(302, { Location: BASE_PATH + '/' });
    res.end();
    return;
  }

  const filePath = getPath(urlPath);
  if (!filePath) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const resolved = path.resolve(filePath);
  if (!resolved.startsWith(path.resolve(BUILD_DIR))) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const toRead = fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()
    ? path.join(resolved, 'index.html')
    : resolved;

  fs.readFile(toRead, (err, data) => {
    if (err) {
      res.writeHead(err.code === 'ENOENT' ? 404 : 500);
      res.end(err.code === 'ENOENT' ? 'Not found' : 'Error');
      return;
    }
    const ext = path.extname(toRead);
    const contentType = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

if (!fs.existsSync(BUILD_DIR)) {
  console.error('Build not found. Run: npm run build:github');
  process.exit(1);
}

server.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}${BASE_PATH}/`);
  console.log('(Stop with Ctrl+C)');
});

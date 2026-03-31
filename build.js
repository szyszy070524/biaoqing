const fs = require('node:fs');
const path = require('node:path');
const {
  tools,
  buildHomePageHtml,
  buildToolsIndexHtml,
  buildToolPageHtml,
} = require('./src/site-builder');

const root = __dirname;
const distDir = path.join(root, 'dist');
const siteUrl = process.env.SITE_URL || '';

buildSite();

function buildSite() {
  fs.mkdirSync(path.join(distDir, 'assets'), { recursive: true });
  fs.mkdirSync(path.join(distDir, 'tools'), { recursive: true });

  copyAsset('styles.css');
  copyAsset('site.js');
  copyRootAsset('logo.png');

  writeFile('index.html', buildHomePageHtml());
  writeFile(path.join('tools', 'index.html'), buildToolsIndexHtml());

  tools.forEach((tool) => {
    writeFile(path.join('tools', tool.slug, 'index.html'), buildToolPageHtml(tool));
  });

  writeFile('robots.txt', buildRobots());
  writeFile('sitemap.xml', buildSitemap());
}

function copyAsset(fileName) {
  const source = path.join(root, 'src', 'assets', fileName);
  const target = path.join(distDir, 'assets', fileName);
  fs.copyFileSync(source, target);
}

function copyRootAsset(fileName) {
  const source = path.join(root, fileName);
  const target = path.join(distDir, 'assets', fileName);
  fs.copyFileSync(source, target);
}

function writeFile(relativePath, contents) {
  const target = path.join(distDir, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
}

function buildSitemap() {
  if (!siteUrl) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
  }

  const urls = [
    `${siteUrl}/`,
    `${siteUrl}/tools/`,
    ...tools.map((tool) => `${siteUrl}/tools/${tool.slug}/`),
  ];

  const entries = urls.map((url) => `<url><loc>${url}</loc></url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
}

function buildRobots() {
  const sitemapLine = siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : '';
  return `User-agent: *\nAllow: /\n${sitemapLine}`;
}

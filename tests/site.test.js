const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  SITE_NAME,
  tools,
  buildHomePageHtml,
  buildToolPageHtml,
  buildToolsIndexHtml,
} = require('../src/site-builder');

test('site includes 20 tool definitions', () => {
  assert.equal(tools.length, 20);
});

test('home page highlights primary site messaging and top tools', () => {
  const html = buildHomePageHtml();

  assert.match(html, new RegExp(`<title>${SITE_NAME}`));
  assert.match(html, /Popular Caption Tools/);
  assert.match(html, /Instagram Caption Generator/);
  assert.match(html, /Emo Caption Generator/);
});

test('tools index page lists all tool cards', () => {
  const html = buildToolsIndexHtml();

  assert.match(html, /All Caption Tools/);
  assert.match(html, /data-tool-count="20"/);
});

test('tool detail page includes seo metadata and copyable results', () => {
  const html = buildToolPageHtml(
    tools.find((tool) => tool.slug === 'funny-caption-generator')
  );

  assert.match(html, /<title>Funny Caption Generator: Short and Witty Caption Ideas/);
  assert.match(html, /meta name="description" content="Generate funny captions/);
  assert.match(html, /Short Funny Captions/);
  assert.match(html, /Copy Caption/);
  assert.match(html, /Related Tools/);
});

test('tool detail page embeds parseable JSON data for the generator', () => {
  const html = buildToolPageHtml(
    tools.find((tool) => tool.slug === 'aesthetic-caption-generator')
  );

  const match = html.match(
    /<script id="tool-data" type="application\/json">([\s\S]*?)<\/script>/
  );

  assert.ok(match, 'expected tool-data script tag');
  assert.doesNotMatch(match[1], /&quot;/);

  const data = JSON.parse(match[1]);
  assert.equal(data.slug, 'aesthetic-caption-generator');
  assert.ok(Array.isArray(data.captions));
  assert.ok(data.captions.length > 0);
});

test('generator select options have explicit contrast styles for native dropdowns', () => {
  const css = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'assets', 'styles.css'),
    'utf8'
  );

  assert.match(css, /\.generator-form option\s*\{/);
  assert.match(css, /color:\s*#081118;/);
  assert.match(css, /background:\s*#f4f2eb;/);
});

test('footer uses a three-column grid with bottom alignment on desktop', () => {
  const css = fs.readFileSync(
    path.join(__dirname, '..', 'src', 'assets', 'styles.css'),
    'utf8'
  );

  assert.match(
    css,
    /\.split-band,\s*[\s\S]*?\.footer-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/
  );
  assert.match(
    css,
    /\.footer-grid\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1\.4fr\)\s*minmax\(0,\s*1fr\)\s*minmax\(0,\s*1fr\);[\s\S]*?align-items:\s*end;/
  );
});

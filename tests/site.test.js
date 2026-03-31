const test = require('node:test');
const assert = require('node:assert/strict');

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

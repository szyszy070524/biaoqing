const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const { buildSite } = require('../build');

test('build copies google verification file to dist root', () => {
  const distDir = fs.mkdtempSync(path.join(__dirname, 'tmp-build-'));

  try {
    buildSite({ distDir });

    const verificationFile = path.join(distDir, 'google72c483de9cc4a51a.html');
    assert.equal(fs.existsSync(verificationFile), true);
    assert.equal(
      fs.readFileSync(verificationFile, 'utf8'),
      fs.readFileSync(
        path.join(__dirname, '..', 'google72c483de9cc4a51a.html'),
        'utf8'
      )
    );
  } finally {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
});

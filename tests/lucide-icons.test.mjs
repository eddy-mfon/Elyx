import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// lucide-react 1.74.0 renames `centerline` to `axis`, which is a breaking
// release for consumers. Keep the project on that line and make sure every
// icon our components import is still exported by the installed package.
const MIN_MAJOR = 1;
const MIN_MINOR = 74;

async function importedIconNames() {
  const dir = path.join(root, 'components');
  const files = (await readdir(dir)).filter((file) => file.endsWith('.tsx'));
  const names = new Set();

  for (const file of files) {
    const source = await readFile(path.join(dir, file), 'utf8');
    const match = source.match(
      /import\s*\{([^}]*)\}\s*from\s*['"]lucide-react['"]/,
    );
    if (!match) continue;

    for (const entry of match[1].split(',')) {
      const name = entry.trim().split(/\s+as\s+/).pop().trim();
      if (name) names.add(name);
    }
  }

  return [...names].sort();
}

test('installed lucide-react is the 1.74+ release', async () => {
  const manifest = JSON.parse(
    await readFile(path.join(root, 'node_modules/lucide-react/package.json'), 'utf8'),
  );
  const [major, minor] = manifest.version.split('.').map(Number);

  assert.ok(
    major > MIN_MAJOR || (major === MIN_MAJOR && minor >= MIN_MINOR),
    `expected lucide-react >= ${MIN_MAJOR}.${MIN_MINOR}.0, found ${manifest.version}`,
  );
});

test('every icon imported from lucide-react exists', async () => {
  const names = await importedIconNames();
  assert.ok(names.length > 0, 'expected components to import lucide-react icons');

  const icons = await import('lucide-react');
  const missing = names.filter((name) => !icons[name]);
  assert.deepEqual(missing, [], `icons missing from lucide-react: ${missing.join(', ')}`);
});

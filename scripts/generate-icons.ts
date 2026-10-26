// Renders the favicon source (public/favicon.svg) into the PNG sizes the site serves:
// apple-touch-icon.png (180, iOS home screen), favicon-48.png (Google search minimum).
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const targets: [string, number][] = [
  ['apple-touch-icon.png', 180],
  ['favicon-48.png', 48],
];

async function main() {
  const svg = await readFile(join('public', 'favicon.svg'));
  for (const [name, size] of targets) {
    const info = await sharp(svg).resize(size, size).png().toFile(join('public', name));
    console.log(`${name} (${size}x${size}, ${(info.size / 1024).toFixed(1)} KB)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

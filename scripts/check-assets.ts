import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { sizes } from '../src/data/sizes';
import { spacings } from '../src/data/spacings';
import { paperTypes } from '../src/data/paperTypes';

const ORIENTS = ['portrait', 'landscape'];
const TYPES = paperTypes.map((t) => t.slug);
const expected = sizes.length * spacings.length * ORIENTS.length;

// Raster PNGs gate on a real byte floor; vector PDF/SVG are legitimately small.
const MIN: Record<string, number> = {
  '.png': 8 * 1024,
  '.pdf': 512,
  '.svg': 512,
};

let errors = 0;
for (const type of TYPES) {
  const targets: [string, string, string][] = [
    [join('public', 'downloads', type), 'PDF', '.pdf'],
    [join('public', 'images', type), 'PNG', '.png'],
    [join('public', 'downloads', type), 'SVG', '.svg'],
  ];
  for (const [dir, label, ext] of targets) {
    if (!existsSync(dir)) {
      console.error(`ERROR ${label} ${type}: dir missing ${dir}`);
      errors++;
      continue;
    }
    const files = readdirSync(dir).filter((f) => f.endsWith(ext));
    if (files.length !== expected) {
      console.error(`ERROR ${label} ${type}: ${files.length} files, expected ${expected}`);
      errors++;
    }
    for (const f of files) {
      const bytes = statSync(join(dir, f)).size;
      if (bytes <= MIN[ext]) {
        console.error(`ERROR ${label} ${type} ${f}: ${bytes} bytes <= ${MIN[ext]}`);
        errors++;
      }
    }
  }
}

console.log(`check:assets — ${errors === 0 ? 'PASS' : 'FAIL'} (${TYPES.length} types × ${expected} PDF/PNG/SVG)`);
process.exit(errors === 0 ? 0 : 1);

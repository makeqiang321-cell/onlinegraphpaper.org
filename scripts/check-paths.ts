import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { walk } from './lib';

// Every href/src into /downloads/ or /images/ in the built HTML must resolve under dist/.
const refRe = /(?:href|src)="(\/(?:downloads|images)\/[^"]+)"/g;

let errors = 0;
let checked = 0;

for (const f of walk('dist', /\.html$/)) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(refRe)) {
    const rel = m[1].replace(/^\//, '');
    checked++;
    if (!existsSync(join('dist', rel))) {
      console.error(`ERROR ${f}: missing ${m[1]}`);
      errors++;
    }
  }
}

console.log(`check:paths — ${errors === 0 ? 'PASS' : 'FAIL'} (checked ${checked} built asset links)`);
process.exit(errors === 0 ? 0 : 1);

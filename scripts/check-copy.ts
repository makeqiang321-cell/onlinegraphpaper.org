import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { walk } from './lib';

// Compare page body text against reference/ files on 8-word consecutive runs.
const N = 8;

function extractBody(html: string): string {
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? '';
  return body
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function ngrams(text: string, n: number): Set<string> {
  const words = text.split(' ').filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + n <= words.length; i++) {
    out.add(words.slice(i, i + n).join(' '));
  }
  return out;
}

const refDir = 'reference';
const refGrams = new Set<string>();
if (existsSync(refDir)) {
  for (const f of readdirSync(refDir)) {
    const text = readFileSync(join(refDir, f), 'utf8').toLowerCase();
    for (const g of ngrams(text, N)) refGrams.add(g);
  }
}

let errors = 0;
let checked = 0;

for (const f of walk('dist', /\.html$/)) {
  const pageGrams = ngrams(extractBody(readFileSync(f, 'utf8')), N);
  checked++;
  for (const g of pageGrams) {
    if (refGrams.has(g)) {
      console.error(`ERROR ${f}: matched reference "${g.slice(0, 80)}"`);
      errors++;
      break;
    }
  }
}

console.log(`check:copy — ${errors === 0 ? 'PASS' : 'FAIL'} (checked ${checked} pages vs ${refGrams.size} reference grams)`);
process.exit(errors === 0 ? 0 : 1);

import { readFileSync } from 'node:fs';
import { walk } from './lib';

let errors = 0;
const titles: string[] = [];

for (const f of walk('dist', /\.html$/)) {
  const html = readFileSync(f, 'utf8');
  if (/http-equiv=["']refresh/.test(html)) continue; // redirect stub, not a content page
  if (/google[0-9a-f]+\.html$/.test(f)) continue; // Google Search Console verification file
  const title = html.match(/<title[^>]*>(.*?)<\/title>/is)?.[1]?.trim() ?? '';
  const desc =
    html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/is)?.[1]?.trim() ?? '';

  if (title.length < 30 || title.length > 60) {
    console.error(`ERROR ${f}: title ${title.length} chars (need 30–60)`);
    errors++;
  }
  if (desc.length < 70 || desc.length > 160) {
    console.error(`ERROR ${f}: description ${desc.length} chars (need 70–160)`);
    errors++;
  }
  titles.push(title);
}

const seen = new Set<string>();
for (const t of titles) {
  if (seen.has(t)) {
    console.error(`ERROR: duplicate title "${t}"`);
    errors++;
  }
  seen.add(t);
}

console.log(`check:tdk — ${errors === 0 ? 'PASS' : 'FAIL'} (${titles.length} pages)`);
process.exit(errors === 0 ? 0 : 1);

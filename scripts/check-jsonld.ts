import { readFileSync } from 'node:fs';
import { walk } from './lib';

const ALLOWED = new Set([
  'WebPage',
  'FAQPage',
  'BreadcrumbList',
  'HowTo',
  'Product',
  'Organization',
  'WebSite',
  'ItemList',
  'WebApplication',
]);

let errors = 0;
let found = 0;

for (const f of walk('dist', /\.html$/)) {
  const html = readFileSync(f, 'utf8');
  const blocks = html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const m of blocks) {
    const json = m[1].trim();
    if (!json) continue;
    found++;
    try {
      const data = JSON.parse(json);
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
        for (const t of types) {
          if (!ALLOWED.has(t)) {
            console.error(`ERROR ${f}: @type "${t}" not in allowlist`);
            errors++;
          }
        }
      }
    } catch (e) {
      console.error(`ERROR ${f}: JSON-LD parse failed: ${e}`);
      errors++;
    }
  }
}

console.log(`check:jsonld — ${errors === 0 ? 'PASS' : 'FAIL'} (${found} blocks)`);
process.exit(errors === 0 ? 0 : 1);

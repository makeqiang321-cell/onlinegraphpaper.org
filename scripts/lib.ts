import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/** Recursively list files under dir, skipping common build/vcs dirs. */
export function walk(dir: string, match?: RegExp): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === '.git' || name === '.astro') continue;
      out.push(...walk(p, match));
    } else if (st.isFile() && (!match || match.test(p))) {
      out.push(p);
    }
  }
  return out;
}

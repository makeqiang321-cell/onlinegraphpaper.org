# onlinegraphpaper.org

Static Astro site for a free printable graph paper generator, targeting the
print-a-graph-paper.com niche. Site: https://onlinegraphpaper.org.

## Current phase: S0 (skeleton only)

- No `[paperType]` pages and no page body copy yet — do not add any.
- `src/data/` is the single source of truth: `paperTypes`, `sizes`, `spacings`, `gridColors`.
- `scripts/generate-assets.ts` pre-generates printable PDF/PNG assets from `src/data`.
- Six `check:*` scripts gate every build; run `npm run check` after `npm run build`.

## Conventions

- Page content is original, readable, SEO-optimized, with JSON-LD
  (`WebPage` / `FAQPage` / `BreadcrumbList`). No fake ratings or download counts.
- Keyword tiering lives in `keyword-tiering.md`; keep title/H1 landing spots in sync.

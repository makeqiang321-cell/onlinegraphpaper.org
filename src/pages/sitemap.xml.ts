import type { APIRoute } from 'astro';
import { paperTypes } from '../data/paperTypes';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://onlinegraphpaper.org')).toString().replace(/\/$/, '');
  const urls = [
    `  <url><loc>${base}/</loc></url>`,
    ...['printable-graph-paper', 'privacy', ...paperTypes.map((t) => t.slug)].map(
      (p) => `  <url><loc>${base}/${p}/</loc></url>`
    ),
  ];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.join('\n') +
    `\n</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

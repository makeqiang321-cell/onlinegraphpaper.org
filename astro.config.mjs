import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://onlinegraphpaper.org',
  redirects: {
    // Friendly keyword URLs that point at the existing canonical pages.
    '/semi-log-graph-paper/': '/semi-log/',
    '/graph-paper-generator/': '/',
  },
});

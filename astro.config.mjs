// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arelgroup.it',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',   // CSS in pagina: nessuna richiesta che blocca il rendering
  },
  compressHTML: true,
  vite: {
    build: { assetsInlineLimit: 0 },  // niente script inline: la CSP accetta solo file del sito
  },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SERVICES, SVC_LANGS, HUB, svcPath } from './src/data/services.js';

// Pagine servizio: indirizzi diversi per lingua (/servizi/x/, /en/services/y/...), quindi le alternative
// hreflang della sitemap si costruiscono dai dati invece che dal prefisso di lingua.
const SITE = 'https://arelgroup.it';
const ALT = new Map();
const addGroup = (links) => links.forEach((k) => ALT.set(k.url, links));
for (const s of SERVICES.it) {
  addGroup(SVC_LANGS.map((l) => { const x = SERVICES[l].find((y) => y.id === s.id); return x && { lang: l, url: SITE + svcPath(l, x) }; }).filter(Boolean));
}
addGroup(SVC_LANGS.map((l) => ({ lang: l, url: SITE + HUB[l] })));

export default defineConfig({
  site: SITE,
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
    sitemap({
      filter: (page) => !page.includes('/404'),
      // alternative di lingua (hreflang) nella sitemap: / = it, /en/, /fr/, /de/
      i18n: { defaultLocale: 'it', locales: { it: 'it', en: 'en', fr: 'fr', de: 'de' } },
      serialize(item) {
        if (ALT.has(item.url)) item.links = ALT.get(item.url);
        return item;
      },
    }),
  ],
});

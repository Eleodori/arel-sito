// Helper per le lingue: URL, correzione rt/ft nei titoli, stringhe per lo script client, JSON-LD.
import { I18N, DEMO, LANGS, DEFAULT_LANG } from './strings.js';
import baseLd from '../data/home-ld.json';
import { SITE } from '../lib/site.js';

export { I18N, DEMO, LANGS, DEFAULT_LANG };
export { LANG_NAMES, OG_LOCALE } from './strings.js';

/** Percorso di una pagina nella lingua data: langPath('it') = '/', langPath('fr', 'privacy/') = '/fr/privacy/' */
export const langPath = (lang, sub = '') => (lang === DEFAULT_LANG ? '/' : `/${lang}/`) + sub;

/** Montserrat 800 con letter-spacing negativo: "rt" e "ft" si toccano. Avvolge la r/f seguita da t
 *  in <span class="kp"> solo nel testo (mai dentro i tag). Stessa regola di kern() in site.js. */
export const kernHtml = (html) =>
  html.replace(/(^|>)([^<]+)/g, (m, gt, text) => gt + text.replace(/([rf])(?=t)/g, '<span class="kp">$1</span>'));

/** Stringhe che servono allo script client (Lab AI, moduli, schede dei problemi, messaggi). */
const CLIENT = /^(p\d_|pp\d|pf\d|note_|ex\d|b_|t_|e_|l_|f_|p_analyze|p_generate|bp_|u_weeks|mode_|lab_free|privacy_|a_sent)/;
export function clientStrings(lang) {
  const all = I18N[lang], out = {};
  for (const k of Object.keys(all)) if (CLIENT.test(k) && !k.startsWith('priv_')) out[k] = all[k];
  out.privacy_href = langPath(lang, 'privacy/');
  out.demo = DEMO[lang];
  // "<" diventa <: il JSON vive dentro un <script type="application/json">
  return JSON.stringify(out).replace(/</g, '\\u003c');
}

/** JSON-LD della home per lingua: stessa organizzazione, testi e FAQ tradotti (identici a quelli visibili). */
export function homeLd(lang) {
  const T = I18N[lang];
  const ld = structuredClone(baseLd);
  const org = ld['@graph'][0];
  org['@id'] = SITE + '/#org';
  org.description = T.ld_desc;
  org.hasOfferCatalog.name = T.nav_sol;
  org.hasOfferCatalog.itemListElement.forEach((it, i) => { it.itemOffered.name = T[`ld_s${i + 1}`] || it.itemOffered.name; });
  ld['@graph'][1] = {
    '@type': 'FAQPage',
    '@id': new URL(langPath(lang), SITE).href + '#faq',
    inLanguage: lang,
    mainEntity: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
      '@type': 'Question',
      name: T[`f${i}q`],
      acceptedAnswer: { '@type': 'Answer', text: T[`f${i}a`] },
    })),
  };
  return ld;
}

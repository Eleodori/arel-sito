// Dominio di produzione. Il sito si lascia indicizzare SOLO quando Netlify costruisce
// la produzione con dominio principale arelgroup.it: anteprime, branch e il vecchio
// indirizzo *.netlify.app restano "noindex" in automatico.
export const SITE = 'https://arelgroup.it';
// Google Analytics 4 (si carica solo in produzione e solo dopo il consenso: src/scripts/consent.js)
export const GA_ID = 'G-XM9MZ7QMMS';
export const LIVE = process.env.CONTEXT === 'production' && /(^|\/\/)(www\.)?arelgroup\.it/.test(process.env.URL || '');

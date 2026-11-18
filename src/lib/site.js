// Dominio di produzione. Il sito si lascia indicizzare SOLO quando Netlify costruisce
// la produzione con dominio principale arelgroup.it: anteprime, branch e il vecchio
// indirizzo *.netlify.app restano "noindex" in automatico.
export const SITE = 'https://arelgroup.it';
// Google Analytics 4 (si carica solo in produzione e solo dopo il consenso: src/scripts/consent.js)
export const GA_ID = 'G-XM9MZ7QMMS';
export const LIVE = process.env.CONTEXT === 'production' && /(^|\/\/)(www\.)?arelgroup\.it/.test(process.env.URL || '');
// WhatsApp: unico posto in cui compare il numero (formato internazionale, senza +)
export const WHATSAPP = '393270763344';
export const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

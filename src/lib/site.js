// Dominio di produzione. Il sito si lascia indicizzare SOLO quando Netlify costruisce
// la produzione con dominio principale arelgroup.it: anteprime, branch e il vecchio
// indirizzo *.netlify.app restano "noindex" in automatico.
export const SITE = 'https://arelgroup.it';
export const LIVE = process.env.CONTEXT === 'production' && /(^|\/\/)(www\.)?arelgroup\.it/.test(process.env.URL || '');

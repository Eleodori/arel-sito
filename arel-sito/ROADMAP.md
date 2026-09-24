# ROADMAP

## v0.4 · Anteprima online (questa versione)
- [x] Home mobile first con identità dal logo, IT/EN
- [x] Lab AI collegato a Claude via Netlify Function, con limiti anti-abuso
- [x] Brief via Netlify Forms con notifica email
- [x] Favicon, meta tag, immagine social, dati strutturati di base
- [x] Sito non indicizzato (meta + header `X-Robots-Tag`)
- [ ] Primo deploy su Netlify e verifica (checklist nel README)

## Contenuti da completare prima del lancio
- [ ] Email, telefono, P. IVA (footer, sezione contatti, privacy, llms.txt)
- [ ] Renergia: area, descrizione, risultato, screenshot
- [ ] Terzo caso studio
- [ ] Risultato di ARELpneumatici
- [ ] Conferma dei tempi indicativi nelle FAQ
- [ ] Informativa privacy completata e verificata da un consulente

## Checklist di lancio
- [ ] Dominio collegato su Netlify (HTTPS automatico) e aggiunto a `ALLOWED_ORIGINS`
- [ ] Sostituire `DOMINIO` in `sitemap.xml`, `robots.txt`, `llms.txt`
- [ ] Togliere `<meta name="robots" content="noindex, nofollow">` da `index.html` (e da `privacy.html` se va indicizzata)
- [ ] Togliere `X-Robots-Tag` da `netlify.toml`
- [ ] Aggiungere `canonical` e `hreflang` in `index.html` (modello in `docs/seo/head-meta.html`)
- [ ] `og:image` con URL assoluto del dominio
- [ ] Redirect 301 dal vecchio sito del socio
- [ ] Search Console + Bing Webmaster Tools, invio della sitemap
- [ ] Limite di spesa mensile sulla Console Anthropic

## Fase 2 · SEO e SEO dinamica (decisa: si fa dopo)
- [ ] Ricerca parole chiave e mappa parola chiave → pagina
- [ ] Pagine servizio (14), integrazioni, settori, casi studio, guide
- [ ] Scelta dello stack per le pagine dinamiche (Next.js consigliato) e migrazione della home
- [ ] Sitemap e `llms-full.txt` generati in automatico
- Dettagli: `docs/seo/piano-seo-conversione.md`

## Idee per dopo
- [ ] Cloudflare Turnstile (anti-bot invisibile) sul Lab AI se arrivano abusi
- [ ] Blueprint inviato anche via email al visitatore
- [ ] Analytics leggeri con consenso (eventi del Lab AI)

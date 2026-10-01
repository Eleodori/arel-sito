# ROADMAP

## v0.4 · Anteprima online (questa versione)
- [x] Home mobile first con identità dal logo, IT/EN
- [x] Lab AI via Netlify Function con limiti anti-abuso (fornitore: Groq gratuito; Gemini e Claude pronti)
- [x] Brief via Netlify Forms con notifica email
- [x] Favicon, meta tag, immagine social, dati strutturati di base
- [x] Sito non indicizzato (meta + header `X-Robots-Tag`)
- [x] Primo deploy su Netlify e verifica (checklist nel README)

## v0.5 · Astro e lancio
- [x] Sito portato su Astro (aspetto identico, CSS in pagina, JS minificato, sitemap automatica)
- [x] Indicizzazione automatica: `index` solo in produzione su arelgroup.it
- [ ] Dominio arelgroup.it collegato su Netlify come dominio principale + `ALLOWED_ORIGINS` aggiornato
- [ ] Search Console + Bing Webmaster Tools, invio di `sitemap-index.xml`

## Contenuti da completare prima del lancio
- [x] Sezione Lavori tolta per il lancio: torna quando ci sono almeno 2-3 casi completi (ARELpneumatici, WC Smart Search, Renergia)
- [x] Email, telefono, P. IVA, sede legale (footer, sezione contatti, privacy, llms.txt, dati strutturati)
- [ ] Renergia: area, descrizione, risultato, screenshot
- [ ] Terzo caso studio
- [ ] Risultato di ARELpneumatici
- [ ] Conferma dei tempi indicativi nelle FAQ
- [x] Informativa privacy completata (consigliata comunque una rilettura del consulente)

## Checklist di lancio
- [ ] Dominio nuovo intestato ad Arel Group (il vecchio è di Marit Srl, non si usa), collegato su Netlify (HTTPS automatico) e aggiunto a `ALLOWED_ORIGINS`
- [x] Sostituire `DOMINIO` in `sitemap.xml`, `robots.txt`, `llms.txt` (arelgroup.it)
- [x] `noindex` e `X-Robots-Tag`: sostituiti dalla regola automatica in `src/lib/site.js`
- [x] `canonical` in `index.html` (hreflang quando ci saranno URL separati per l'inglese)
- [x] `og:image` con URL assoluto del dominio
- [ ] Search Console + Bing Webmaster Tools, invio della sitemap
- [ ] Se si passa a Claude: `ANTHROPIC_API_KEY` su Netlify e limite di spesa mensile sulla Console Anthropic

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

# CLAUDE.md · istruzioni per chi lavora su questo repo

## Progetto
Sito di Arel Group S.r.l.s. (software house: gestionali, e-commerce, Amazon, app, AI). Obiettivo: **convertire il visitatore in cliente**. Il messaggio parla di cosa ottiene il visitatore, non di chi siamo.

## Stack
- Astro 7, output statico in `dist/` (Netlify esegue `npm run build`).
  - `src/layouts/Base.astro`: `<head>` comune (meta, canonical, Open Graph, robots, JSON-LD).
  - `src/pages/`: una pagina = un file (`index.astro`, `privacy.astro`, `404.astro`). URL a cartella: `/privacy/`.
  - `src/styles/site.css`: CSS unico, messo in pagina in fase di build (nessun file che blocca il rendering).
  - `src/scripts/site.js`: JS unico, minificato e con hash nel nome (cache di un anno).
  - `public/`: file serviti così come sono (font, librerie, favicon, og, `robots.txt`, `llms.txt`).
  - Sitemap generata in automatico (`@astrojs/sitemap`) a ogni build.
  - Indicizzazione automatica (`src/lib/site.js`): `index` solo in produzione con dominio principale arelgroup.it; anteprime e `*.netlify.app` restano `noindex`.
- 3D: WebGL scritto a mano in `site.js` (`initOrb`, nessuna libreria). Parte al primo tocco/scroll/movimento del mouse o dopo 4,5 s; fino ad allora si vede la A statica a particelle (SVG `#archev`), identica per forma e posizione. Non anticipare l'avvio automatico: creare il contesto WebGL nei primi secondi abbassa PageSpeed mobile.
- GSAP 3.12.5 + ScrollTrigger self-hosted in `public/assets/vendor/`, caricati in idle.
- Lab AI: `netlify/functions/lab.mjs` (Netlify Functions v2, `/api/lab`). Fornitore AI scelto da variabile: Groq (gratuito, attuale), Gemini o Claude. Limiti in Netlify Blobs.
- Lead: Netlify Forms, moduli `brief` (dal Lab AI: modulo statico nascosto + invio via fetch) e `analisi` (CTA finale), entrambi in `src/components/Home.astro`; il campo `lang` invia la lingua della pagina.
- Lingue: IT (default, `/`), EN (`/en/`), FR (`/fr/`), DE (`/de/`), ognuna con la sua pagina generata da Astro e i testi già nell'HTML. Testi in `src/i18n/strings.js` (l'italiano è la lingua di riferimento: ogni chiave nuova va aggiunta in tutte e 4 le lingue). Home e privacy sono componenti (`src/components/Home.astro`, `Privacy.astro`) usati dalle pagine `src/pages/index.astro`, `privacy.astro` e `src/pages/[lang]/`. Lo script client legge la lingua da `<html lang>` e le stringhe dinamiche da `<script type="application/json" id="i18n">`. hreflang, canonical e JSON-LD per lingua in `Base.astro` e `src/i18n/index.js`.

## Regole di design (non negoziabili)
- **Mobile first**: si progetta a 390 px, poi si allarga.
- **Niente muri di testo**: frasi brevi, chip, schede scorrevoli, dettagli dentro accordion o schede toccabili.
- Identità dal logo: blu `#1E3A6E`, sfondo `#0A1226`, accento `#5B8DEF`, titoli Montserrat, testi Manrope.
- Look tecnologico ma non "hacker": niente effetti macchina da scrivere, niente estetica da terminale.
- Persuasione sì, manipolazione no: niente countdown finti, scarsità inventata o recensioni false.

## Regole tecniche
- Punteggi da mantenere: Lighthouse Performance ≥ 95 mobile, Accessibilità 100, CLS ≈ 0. Verificare dopo ogni modifica visibile.
- Mai chiavi o prompt dell'AI nel codice client: i prompt vivono solo in `lab.mjs`.
- Contrasto testi ≥ 4.5:1 (≥ 3:1 per testi grandi), anche sopra l'animazione.
- Larghezze dei testi in `em`, non in `ch` (evita spostamenti al caricamento dei font).
- Niente `?v=` da aggiornare: Astro dà a CSS e JS nomi nuovi a ogni modifica.
- Nessuno script inline (la CSP accetta solo file del sito): il JS va in `src/scripts/`.
- Prima di una PR: `npm run build` deve finire senza errori.

## Modo di lavorare
- Un branch = un tema; una sola PR aperta alla volta; il merge (Squash and merge) lo fa Luca dopo aver visto la deploy preview di Netlify.
- Decisioni importanti: annotarle in `DECISIONS.md`. Avanzamento: `ROADMAP.md`.

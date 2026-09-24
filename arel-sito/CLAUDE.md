# CLAUDE.md · istruzioni per chi lavora su questo repo

## Progetto
Sito di Arel Group S.r.l.s. (software house: gestionali, e-commerce, Amazon, app, AI). Obiettivo: **convertire il visitatore in cliente**. Il messaggio parla di cosa ottiene il visitatore, non di chi siamo.

## Stack
- Sito statico, nessun build: `index.html` + `assets/css/site.css` + `assets/js/site.js`.
- 3D: three.js r128 e GSAP 3.12.5 self-hosted in `assets/vendor/`, caricati in modo differito (3D al primo tocco/scroll).
- Lab AI: `netlify/functions/lab.mjs` (Netlify Functions v2, `/api/lab`), chiama l'API di Claude. Limiti in Netlify Blobs.
- Lead: Netlify Forms, modulo `brief` (modulo statico nascosto in fondo a `index.html` + invio via fetch).
- Lingue: IT/EN nello stesso file; testi nel dizionario `I18N` in `site.js`, elementi con `data-i18n` / `data-i18n-html`.

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
- A ogni modifica di `site.css`/`site.js` aumentare `?v=` in `index.html` (e in `privacy.html`/`404.html` per il CSS).
- Il sito resta **noindex** finché non si completa la checklist di lancio in `ROADMAP.md`.

## Modo di lavorare
- Un branch = un tema; una sola PR aperta alla volta; il merge (Squash and merge) lo fa Luca dopo aver visto la deploy preview di Netlify.
- Decisioni importanti: annotarle in `DECISIONS.md`. Avanzamento: `ROADMAP.md`.

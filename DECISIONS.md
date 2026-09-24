# DECISIONS

## 2026-09-24 · Fornitore AI gratuito per partire: Groq
Per ora nessun costo: Groq (piano gratuito, nessuna carta) con gpt-oss-20b per le domande e gpt-oss-120b per il blueprint, modalità JSON e ragionamento "low". La funzione supporta anche Gemini e Claude: si cambia fornitore con una variabile, senza toccare il codice. Si valuta il passaggio a Claude quando il Lab porta contatti reali.

## 2026-09-24 · Sito statico + Netlify Functions per l'anteprima
Home in HTML/CSS/JS senza build, deploy su Netlify da GitHub. Veloce da pubblicare e da modificare. La scelta dello stack definitivo per le pagine dinamiche (Next.js consigliato) è rimandata alla fase 2 SEO.

## 2026-09-24 · Lab AI: protezioni anti-abuso
Prima scelta di fornitore: Claude (Haiku 4.5 per le domande, Sonnet 5 per il blueprint), poi sostituito da Groq gratuito per partire (vedi sopra). Chiave solo nelle variabili di Netlify. Prompt solo lato server. Protezioni: origine, validazione, filtro gratuito anti-manipolazione, filtro di pertinenza con il modello economico prima del blueprint, limiti per IP e globali in Netlify Blobs, max_tokens bassi, fail-closed se i limiti non sono disponibili. Con un fornitore a pagamento: tetto di spesa sulla sua console.

## 2026-09-24 · Lead via Netlify Forms
Modulo `brief` (nome, email, telefono facoltativo, consenso) con honeypot e filtro spam di Netlify; notifica email. Nessun database da gestire. Gratuito entro la soglia del piano.

## 2026-09-24 · Non indicizzato fino al lancio
Meta `noindex` + header `X-Robots-Tag`: Google non memorizza segnaposto e contenuti provvisori. `robots.txt` resta aperto, così Google può leggere il `noindex`.

## 2026-09-24 · Font e librerie self-hosted, 3D differito
Niente Google Fonts né CDN esterni: meno richieste, CSP stretta, niente dipendenze da terzi. Font di fallback con metriche misurate (CLS 0). three.js caricato al primo tocco/scroll con il marchio statico al suo posto (TBT ~0).

## 2026-09-23 · Identità e tono
Colori e font dal logo (blu #1E3A6E, Montserrat). Tecnologico ma non "hacker". Mobile first, niente muri di testo. Copy centrato su cosa ottiene il visitatore.

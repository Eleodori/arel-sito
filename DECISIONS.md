# DECISIONS

## 2026-10-01 · Nuovo copy prima del lancio
Core business dichiarato: sviluppo software su misura e AI (eyebrow, sottotitolo, meta, JSON-LD, llms.txt). Nuovo servizio **Forward Deployed Engineer**: quinta scheda in Soluzioni (a tutta larghezza da tablet in su, quinta slide su mobile), nuova FAQ, voce nel footer. La parola "blueprint" non si usa più: diventa "piano di progetto" (anche nel prompt del Lab, che vieta il termine; il nome interno dell'azione API resta `blueprint`). Tolti i riquadri di avvertenza (nota sotto gli step del Lab e disclaimer sotto il risultato); resta solo la riga breve sui dati personali, utile per la privacy. Struttura della pagina invariata.

## 2026-10-01 · Passaggio ad Astro
Il sito passa da HTML scritto a mano ad Astro (output statico, nessun JavaScript aggiunto). Motivi: le pagine servizio della fase SEO usano lo stesso layout e gli stessi meta; sitemap generata da sola; CSS in pagina (niente richiesta che blocca il rendering) e JS minificato con hash (cache di un anno). Aspetto identico (confronto pixel per pixel). Lighthouse mobile in locale: da 97-98 a 99, LCP da circa 2,3 a 1,7 s. L'indicizzazione è automatica: `index` solo in produzione sul dominio arelgroup.it. URL privacy da `/privacy.html` a `/privacy/` con redirect 301.

## 2026-09-30 · Marchio 3D senza three.js
La A animata ora usa WebGL scritto a mano (circa 10 KB) invece di three.js (600 KB, 150 KB compressi): niente download né parsing della libreria, shader compilati fuori dal thread principale. Dal primo tocco alla A animata: da circa 3,9 s a 1,9 s in un test mobile rallentato. La A statica iniziale è fatta di particelle come quella 3D, con stessa forma e posizione, e l'animazione parte già formata: il passaggio non si vede. L'avvio automatico resta a 4,5 s: anticiparlo (provato a 1-1,2 s) fa scendere PageSpeed mobile, perché senza GPU la creazione del contesto WebGL blocca la pagina per circa 2 s.

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

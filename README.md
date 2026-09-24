# Arel Group · sito

Home del nuovo sito Arel Group: pagina statica (HTML/CSS/JS, nessun build) con il **Lab AI**, che genera un primo blueprint di progetto tramite una Netlify Function collegata a un modello AI (per ora Groq, gratuito; si passa a Claude cambiando solo una variabile). I brief arrivano via **Netlify Forms**.

```
index.html                 home (IT/EN nello stesso file, testi in assets/js/site.js → I18N)
privacy.html, 404.html     pagine di servizio
assets/css/site.css        stile
assets/js/site.js          interazioni, 3D, Lab AI, traduzioni
assets/vendor/             three.js r128, GSAP 3.12.5 (self-hosted)
assets/fonts/              Montserrat e Manrope (woff2, licenza OFL)
assets/brand/              logo in SVG
netlify/functions/lab.mjs  API del Lab AI (/api/lab) con limiti anti-abuso
netlify.toml               configurazione, header di sicurezza e cache
docs/seo/                  piano SEO, file per il lancio
```

## 1. Metti la cartella nel posto giusto

Git e OneDrive non vanno d'accordo (file bloccati, `index.lock`). Copia la cartella `arel-sito` **fuori da OneDrive**, per esempio in `C:\dev\arel-sito`, e lavora da lì.

## 2. GitHub

1. Su github.com crea un repository **privato** chiamato `arel-sito` (senza README, senza .gitignore: ci sono già).
2. Da PowerShell, dentro `C:\dev\arel-sito`:
   ```powershell
   git init -b main
   git add .
   git commit -m "Sito Arel Group v0.4: home, Lab AI, Netlify"
   git remote add origin https://github.com/TUO-ACCOUNT/arel-sito.git
   git push -u origin main
   ```
   In alternativa: GitHub Desktop → *Add local repository* → *Publish repository* (privato).

## 3. Netlify

1. app.netlify.com → **Add new project → Import an existing project → GitHub** → scegli `arel-sito`.
2. Build command: vuoto · Publish directory: `.` (li legge da `netlify.toml`) → **Deploy**.
3. **Project configuration → Environment variables**, aggiungi:
   | Variabile | Valore |
   |---|---|
   | `GROQ_API_KEY` | la chiave gratuita da console.groq.com → API Keys (segna *Contains secret values*) |
   | `IP_SALT` | una stringa casuale lunga (es. generata da un password manager) |
   | `ALLOWED_ORIGINS` | l'indirizzo del sito, es. `https://arel-sito.netlify.app` (poi aggiungi il dominio) |

   Le altre variabili (limiti, modelli) sono facoltative: vedi `.env.example`.
4. **Deploys → Trigger deploy → Deploy site** (le variabili valgono dal deploy successivo).
5. **Forms**: *Project configuration → Forms → Enable form detection*, poi un nuovo deploy. Quando compare il modulo `brief`, in *Forms → Form notifications* aggiungi una **notifica email** verso il vostro indirizzo.

## 4. Fornitore AI

- **Ora (gratis):** Groq, piano gratuito senza carta. Limiti del piano: circa 1.000 richieste e 200.000 token al giorno, abbastanza per qualche decina di blueprint al giorno. Oltre, il Lab risponde "molto richiesto, riprova più tardi".
- **Alternativa gratuita:** Google Gemini (`GEMINI_API_KEY` da aistudio.google.com). Nel piano gratuito Google può usare i contenuti per migliorare i suoi prodotti: da dichiarare nell'informativa.
- **Più avanti (a pagamento, qualità migliore):** Claude. Aggiungi `ANTHROPIC_API_KEY`, togli `GROQ_API_KEY` (o imposta `LAB_PROVIDER=anthropic`) e rifai il deploy. Nella Console Anthropic imposta un tetto di spesa mensile.

## 5. Verifica dopo il deploy

- [ ] La pagina si apre, il 3D parte al primo tocco/scroll
- [ ] Il badge del Lab AI dice **AI attiva** (se dice *demo*, manca la chiave o `LAB_ENABLED=false`)
- [ ] Un'idea vera → 2-3 domande → blueprint
- [ ] Un testo fuori tema (es. "scrivimi una poesia") → messaggio "Il Lab AI progetta software…"
- [ ] "Voglio realizzarlo" → modulo → invio → il brief compare in *Forms* e arriva l'email
- [ ] Cambio lingua IT/EN
- [ ] PageSpeed Insights su mobile e desktop

## Protezioni del Lab AI

La funzione `netlify/functions/lab.mjs` spende token solo se tutte queste condizioni sono vere:

1. la richiesta arriva dal vostro sito (controllo dell'origine);
2. il testo supera i controlli gratuiti: lunghezza, parole vere, niente tentativi di manipolare l'AI, niente raffiche di link;
3. il visitatore non ha superato i limiti: **8 analisi e 3 blueprint al giorno per IP**, almeno **6 secondi** tra due richieste, **150 chiamate al giorno** in totale (tutti configurabili);
4. il primo passaggio, fatto col modello veloce ed economico, conferma che è un progetto pertinente; altrimenti si ferma lì e il blueprint (modello più capace) non parte.

Le risposte sono brevi e solo in formato JSON. Gli IP sono salvati anonimizzati, solo per il giorno corrente, in Netlify Blobs. Se il sistema dei limiti non risponde, la funzione **non** chiama l'AI.

## Sviluppo in locale (facoltativo)

```powershell
npm install
npm i -g netlify-cli
copy .env.example .env   # compila GROQ_API_KEY, IP_SALT e ALLOW_LOCALHOST=true
netlify dev
```

Quando modifichi `site.css` o `site.js`, aumenta il numero `?v=` in `index.html`, così i browser scaricano la versione nuova.

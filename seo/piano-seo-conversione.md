# Arel Group · Piano SEO, AI e conversione

Documento tecnico per chi sviluppa il sito definitivo. Accompagna `robots.txt`, `sitemap.xml`, `llms.txt`, `head-meta.html` e la cartella `favicon/` (in tutti: sostituire `DOMINIO`).

## ⏳ Da fare dopo (fase 2, deciso con Luca)

SEO e SEO dinamica si fanno in una fase dedicata, dopo aver scelto bene le parole chiave. Già pronto: struttura dei file, meta tag e favicon, dati strutturati di base. Da fare in fase 2:

- [ ] Ricerca parole chiave (volumi, difficoltà, intento) per servizi, integrazioni e settori
- [ ] Mappa parola chiave → pagina (una keyword principale per URL, niente cannibalizzazione)
- [ ] Template SEO dinamici: title, description, H1, FAQ e JSON-LD generati per servizio / integrazione / settore / caso
- [ ] Sitemap e `llms-full.txt` generati in automatico dal CMS
- [ ] Immagini Open Graph dinamiche per ogni pagina
- [ ] Redirect 301 dal vecchio sito
- [ ] Search Console, Bing Webmaster Tools, Google Business Profile

## Regole di design per tutte le pagine

- **Mobile first:** si progetta prima a 390 px, poi si allarga. CTA sempre raggiungibile col pollice, pulsante fisso in basso su mobile.
- **Niente muri di testo:** massimo 2 righe per blocco di testo su mobile, liste trasformate in chip, schede orizzontali scorrevoli al posto di lunghe colonne, dettagli dentro accordion o schede toccabili.

## 1. Principio guida

Il visitatore non cerca Arel: cerca una soluzione al suo problema. Ogni pagina risponde, nell'ordine, a tre domande: **cosa ottengo**, **perché fidarmi**, **cosa faccio adesso**.

Leve di persuasione usate (tutte vere e verificabili):

| Leva | Dove | Come |
|---|---|---|
| Beneficio prima del servizio | Hero, Soluzioni | Titoli sul risultato ("Vendi di più online"), il servizio viene dopo |
| Identificazione col problema | "Ti riconosci?" | Frasi dette dal cliente, con la risposta accanto |
| Reciprocità | Lab AI | Il blueprint è gratuito e resta al visitatore anche se non compra |
| Impegno progressivo | Lab AI | Micro-passi (idea → 3 domande → blueprint → "Voglio realizzarlo") |
| Riduzione del rischio | Hero, Metodo, FAQ | Preventivo chiaro prima di iniziare, demo a ogni tappa |
| Prova sociale | Lavori | Solo casi reali con risultati reali (da inserire) |
| Attrito minimo | Tutto il sito | Una sola CTA primaria, CTA fissa su mobile, form corti |

Da **non** usare: countdown finti, "ultimi 2 posti", recensioni inventate, pop-up a tutto schermo. Riducono la fiducia, Google penalizza gli interstitial invasivi su mobile e le recensioni false violano le norme sulle pratiche commerciali scorrette.

## 2. Architettura e pagine dinamiche

Sì, servono pagine dinamiche: sono il motore della SEO. Tutte generate da CMS con un template, **ma solo dove c'è contenuto vero** (pagine vuote o duplicate vengono ignorate o penalizzate).

```
/                                   home (IT)            /en/ … mirror EN con hreflang
/servizi/                           hub
/servizi/[servizio]/                14 pagine, una per servizio (vedi sitemap)
/soluzioni/[settore]/               landing per settore, SOLO dove avete casi (es. pneumatici/automotive)
/integrazioni/[sistema-a]-[sistema-b]/  es. woocommerce-amazon, odoo-woocommerce: long tail ad alta intenzione
/lavori/  /lavori/[caso]/           case study
/guide/   /guide/[articolo]/        contenuti informativi ("quanto costa un gestionale su misura")
/lab-ai/                            configuratore (indicizzato)
/lab-ai/risultato/[id]              blueprint generati: noindex, esclusi da robots
/faq/  /contatti/  /privacy/  /cookie/
```

Collegamenti interni obbligatori: ogni servizio linka 2-3 servizi correlati, il caso studio pertinente, le FAQ e il Lab AI **precompilato** su quel servizio (es. `/lab-ai/?tema=gestione-amazon`). Ogni caso studio linka i servizi usati. Breadcrumb su tutte le pagine interne.

### Template pagina servizio
1. H1 = beneficio + parola chiave ("Gestione Amazon: ordini, prezzi e giacenze sincronizzati in automatico")
2. Per chi è / problemi che risolve
3. Cosa ottieni (deliverable concreti)
4. Come funziona (fasi)
5. Caso studio collegato
6. FAQ specifiche (con schema FAQPage)
7. CTA Lab AI precompilato + contatto diretto

## 3. SEO tecnica

- **Stack consigliato: Next.js con generazione statica/ISR** e CMS headless. È il modo più diretto per avere insieme pagine dinamiche, 3D e PageSpeed alto. WordPress resta possibile, ma 3D + 100 su mobile + pagine programmatiche richiedono molto più lavoro di ottimizzazione.
- Metadata per pagina: `title` ≤ 60 caratteri, `description` ≤ 155, canonical, Open Graph e immagine OG generata in automatico.
- `hreflang` it / en / x-default su ogni pagina; URL tradotti in `/en/`.
- `sitemap.xml` generata dal CMS a ogni pubblicazione, con `lastmod` reale; `robots.txt` come da file allegato.
- Dati strutturati JSON-LD per tipo di pagina:
  - Home: `ProfessionalService` + `WebSite` (con `SearchAction` se c'è ricerca)
  - Servizio: `Service` + `FAQPage` + `BreadcrumbList`
  - Caso studio: `CreativeWork` / `Article` + `BreadcrumbList`
  - Guida: `Article` con autore reale + `BreadcrumbList`
- HTML semantico: un solo H1, gerarchia H2/H3, testo reale (non dentro immagini o canvas).
- 404 utile, redirect 301 dal vecchio sito del socio (mappare le vecchie URL prima del lancio).
- Search Console **e** Bing Webmaster Tools: Bing alimenta anche Copilot e parte della ricerca di ChatGPT.
- Google Business Profile con nome, indirizzo e telefono identici a sito e fatture.

## 4. Visibilità nelle AI (GEO)

- `llms.txt` nella root (allegato) e `llms-full.txt` generato dal CMS con il testo completo di servizi, FAQ e casi.
- Versione markdown di ogni pagina (`/servizi/gestione-amazon.md`), generata dallo stesso contenuto.
- Crawler AI consentiti in `robots.txt`.
- Scrittura "citabile": ogni pagina apre con una definizione chiara in 1-2 frasi ("Arel Group sviluppa integrazioni tra WooCommerce e Amazon che…"), poi elenchi e FAQ con risposte dirette.
- Entità coerente ovunque: stesso nome, descrizione, contatti su sito, Google Business, LinkedIn, directory (es. Europages se attivato).
- Contenuto server-side: le AI non eseguono JavaScript, quindi niente testo che compare solo lato client.

## 5. PageSpeed al massimo anche con il 3D

Obiettivo: 95-100 su mobile, Core Web Vitals verdi (LCP < 2,0 s, INP < 200 ms, CLS < 0,05).

- **L'LCP è il titolo, non il 3D.** Il testo della hero è HTML statico e si vede subito.
- three.js (~150 KB gzip) e GSAP caricati **dopo** il primo rendering, in idle (già così nel prototipo). Su mobile, con `Save-Data` o connessione lenta: versione statica in SVG del marchio al posto del canvas.
- JavaScript iniziale < 100 KB; niente librerie UI pesanti.
- Font Montserrat e Manrope self-hosted in woff2, solo i pesi usati, `preload` del peso del titolo, `font-display: swap` con fallback metricamente allineato (`size-adjust`) per evitare spostamenti.
- Immagini AVIF/WebP con dimensioni esplicite, lazy sotto la piega.
- CSS critico inline, resto differito.
- Script di terze parti (analytics, chat) caricati dopo consenso e in modo differito; preferire analytics leggeri o server-side.
- Hosting con CDN edge (Vercel, Cloudflare o equivalente) e cache statica.

Verificato sul prototipo con Lighthouse: Performance 100 desktop / 97 mobile, Accessibilità 100, Best practice 100, SEO 100 (60 solo per il `noindex` voluto del prototipo). Tecniche che hanno fatto la differenza e vanno riportate nel sito vero:
- three.js caricato al primo tocco, scroll o movimento del mouse (o dopo qualche secondo), con il marchio in SVG statico mostrato subito al suo posto: TBT da 850 ms a ~0.
- Font di fallback con metriche misurate (`size-adjust`, `ascent-override`) su Arial/Liberation e Roboto: CLS da 0,27 a 0. In Next.js lo fa `next/font` in automatico.
- Larghezze dei testi in `em` invece che `ch`, così gli a-capo non cambiano quando arriva il font.

## 6. Misurare la conversione

Eventi da tracciare: `lab_start`, `lab_questions_done`, `lab_blueprint`, `lab_send` ("Voglio realizzarlo"), `contact_click`, `call_booked`. Imbuto Lab AI visibile in un'unica vista; test A/B su titolo hero e testo CTA una volta raggiunto un traffico sufficiente.

Nel sito definitivo "Voglio realizzarlo" deve chiedere solo nome, email e (facoltativo) telefono, e inviare il blueprint al CRM e al cliente via email.

## 7. Parole chiave di partenza

Cluster iniziali da validare con Search Console e uno strumento di keyword (volumi non ancora verificati):

- software gestionale su misura · gestionale magazzino su misura
- sviluppo app iOS e Android
- agenzia gestione Amazon · integrazione Amazon WooCommerce
- sviluppo portale B2B
- automazioni n8n · automazione processi aziendali
- chatbot per e-commerce · agenti AI per aziende
- sviluppo e-commerce WooCommerce

## 8. Da decidere prima dello sviluppo

- Dominio definitivo (sostituire `DOMINIO` in tutti i file)
- Stack: Next.js (consigliato) o WordPress
- CRM dove arrivano i blueprint del Lab AI
- Casi studio con risultati reali (ARELpneumatici, Renergia, terzo progetto)
- Settori e integrazioni che volete presidiare con pagine dedicate
- Mappa delle URL del vecchio sito per i redirect 301

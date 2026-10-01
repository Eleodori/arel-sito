# Handoff · Biglietti da visita Arel Group (Canva Pro)

Obiettivo: biglietti da visita con lo stesso design del sito (arelgroup.netlify.app, anteprima). Si lavora in Canva Pro con il connettore Canva collegato alla chat.

## 1. Azienda

- **Nome:** Arel Group S.r.l.s. (sul biglietto: "AREL GROUP")
- **Cosa fa:** software house. Gestionali e software su misura, e-commerce WooCommerce e PrestaShop, gestione Amazon e marketplace, portali B2B, automazioni e agenti AI, app e web app.
- **Posizionamento:** lavora da remoto con aziende in tutta Italia, in italiano e in inglese.
- **Claim del sito:** "Porta un'idea. Esci con il software che la fa funzionare." Versione breve da biglietto: "Software su misura · E-commerce · AI".
- **Tono:** tecnologico ma non "hacker". Pulito, essenziale, premium. Niente effetti terminale, niente scritte da codice, niente slogan esagerati.

## 2. Colori (dal sito)

| Ruolo | HEX | CMYK indicativo (da confermare con la tipografia) |
|---|---|---|
| Sfondo scuro principale | `#0A1226` | C90 M75 Y40 K75 |
| Blu del marchio (quadrato del logo) | `#1E3A6E` | C100 M80 Y25 K15 |
| Accento (pulsanti, linee) | `#5B8DEF` | C65 M40 Y0 K0 |
| Accento chiaro (parole in evidenza) | `#A9C4FF` | C33 M18 Y0 K0 |
| Testo principale su scuro | `#F1F4F9` (quasi bianco) | C3 M1 Y0 K2 |
| Testo secondario su scuro | `#BAC4D6` | C27 M15 Y8 K0 |
| Linee sottili | `#2A3A5E` | C85 M70 Y35 K25 |

Regole:
- Fronte e retro su sfondo scuro `#0A1226`, eventualmente con un leggero alone radiale `#1E3A6E` dietro il marchio, come nella hero del sito.
- Accento `#5B8DEF` solo per dettagli: una linea, un'icona, il QR. Non per grandi superfici.
- I blu molto scuri in stampa tendono al nero: chiedere una prova di stampa o un PDF di prova alla tipografia.

## 3. Font

- **Titoli e nome:** Montserrat (Bold 700 o ExtraBold 800, interlinea stretta, spaziatura leggermente negativa)
- **Testi e contatti:** Manrope (Regular 400 o Medium 500)
- **Etichette piccole** (es. "SOFTWARE SU MISURA · E-COMMERCE · AI"): Montserrat 600, tutto maiuscolo, spaziatura larga (circa +200)
- Entrambi i font sono gratuiti (Google Fonts) e disponibili in Canva.
- Dimensione minima del testo in stampa: 7 pt.

## 4. Logo e grafica

File nella cartella `C:\dev\arel-sito\docs\brand\` (originali anche in `C:\Users\argen\OneDrive\Desktop\arel\`):

- `lockup-montserrat.svg`: logo completo (quadrato blu con la A bianca + scritta AREL GROUP)
- `arel-mark.svg`: solo il marchio (quadrato `#1E3A6E` con la A bianca)
- `wordmark-montserrat.svg`: solo la scritta
- `arel-a-particelle.svg` / `arel-a-particelle-sfondo.svg`: la A fatta di particelle luminose, la stessa del sito, ingrandita per la stampa (con o senza sfondo)

Il marchio è una "A" senza barra, a forma di chevron (Λ): linea spessa con estremità arrotondate.

## 5. Contenuti

Da confermare prima di impaginare:

- [ ] Persone: Luca Argenti (ruolo: co-founder?) e il socio (nome, ruolo)
- [ ] Email per ciascuno
- [ ] Telefono / WhatsApp
- [ ] Sito: il dominio definitivo non c'è ancora. Non stampare l'indirizzo netlify.app: aspettare il dominio o lasciare lo spazio
- [ ] QR code verso il sito (app QR di Canva), da generare quando c'è il dominio
- [ ] P. IVA: facoltativa sul biglietto
- [ ] LinkedIn: facoltativo

## 6. Proposta di impaginazione

**Fronte (scuro):** A a particelle grande, decentrata a destra o al centro, con alone blu leggero; logo completo piccolo in basso a sinistra, oppure solo "AREL GROUP"; nessun altro testo. Così riprende la hero del sito.

**Retro (scuro):**
- in alto, etichetta piccola "SOFTWARE SU MISURA · E-COMMERCE · AI";
- nome in Montserrat Bold, ruolo in `#A9C4FF`;
- contatti in Manrope `#BAC4D6`, con piccole icone in `#5B8DEF`;
- QR code chiaro su scuro, in basso a destra.

Varianti da provare: una con la A a particelle a tutto biglietto e il testo sopra, una più minimale con il solo marchio pieno.

## 7. Specifiche di stampa

- **Formato:** 85 × 55 mm, formato italiano (in Canva: dimensioni personalizzate in mm; il modello standard di Canva è 89 × 51 mm e va cambiato)
- **Abbondanza:** 3 mm per lato. In Canva: File → Visualizza impostazioni → Mostra margini e pagina al vivo
- **Margine di sicurezza:** testi e loghi ad almeno 3–4 mm dal bordo
- **Esportazione:** PDF per la stampa, con "Pagina al vivo" e "Segni di ritaglio" attivi e profilo colore **CMYK** (opzione di Canva Pro)
- **Carta consigliata:** 350–400 g opaca o soft-touch; eventuale vernice UV selettiva solo sulla A

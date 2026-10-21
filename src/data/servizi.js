// Pagine servizio (solo italiano per ora). Una voce = una pagina /servizi/<slug>/.
// Regole: una keyword principale per pagina, prima frase = definizione chiara,
// prezzi reali di Arel (IVA esclusa), FAQ identiche nel JSON-LD e nella pagina.
// Mappa e volumi: docs/seo/mappa-keyword.md

export const SERVIZI = [
  {
    slug: 'gestionale-su-misura',
    keyword: 'gestionale su misura',
    name: 'Gestionale su misura',
    title: 'Gestionale su misura per PMI · Arel Group',
    description: 'Software gestionale su misura per PMI: ordini, magazzino e clienti, collegato ai programmi che usi già. Da 3.500 €, prima versione in circa 2 mesi.',
    h1: ['Gestionale su misura,', 'costruito sui tuoi processi.'],
    lead: "Un gestionale su misura è un software creato attorno a come lavora la tua azienda: ordini, magazzino, clienti, commesse, listini. Non sei tu ad adattarti a un programma pensato per tutti: è il programma ad adattarsi a te, e cresce insieme all'azienda.",
    lead2: "Sviluppiamo gestionali web per PMI di tutta Italia: da zero, oppure accanto ai programmi che usi già. Li colleghiamo al gestionale che hai oggi, al CRM, all'e-commerce e ai file Excel, così ogni sistema continua a fare il suo lavoro e i dati passano dall'uno all'altro senza copiarli a mano. La prima versione è in uso in circa 2 mesi.",
    signs: {
      title: 'Quando serve un gestionale su misura',
      items: [
        'Copiate a mano gli stessi dati tra Excel, email, e-commerce e gestionale.',
        'Il gestionale che avete vi costringe a giri lunghi o a fogli Excel paralleli.',
        'Informazioni importanti sono nella testa di una sola persona o in file sparsi.',
        'Ordini, giacenze e prezzi non tornano tra magazzino, negozio online e marketplace.',
        'Preparare i report del mese richiede ore di lavoro.',
      ],
    },
    features: {
      title: 'Cosa può fare il tuo gestionale',
      items: [
        ['Ordini, clienti e preventivi', 'Dalla richiesta al documento: preventivi, ordini, scadenze e storico del cliente in un unico posto.'],
        ['Magazzino e listini', 'Giacenze, fornitori e listini aggiornati in automatico, anche da file CSV, Excel o XML.'],
        ['Commesse e produzione', 'Avanzamento dei lavori, ore, materiali e costi per commessa, visibili a tutto il team.'],
        ['Area clienti e agenti', 'Un portale B2B dove clienti e agenti vedono i loro prezzi, ordinano e scaricano i documenti.'],
        ['Collegamenti con i tuoi sistemi', 'Il gestionale che avete già, il CRM, WooCommerce, PrestaShop, Amazon e altri marketplace: ogni programma fa il suo lavoro, i dati passano da soli.'],
        ['Report e AI', "Dashboard che si aggiornano da sole e automazioni con l'AI per leggere documenti e smistare richieste."],
      ],
    },
    compare: {
      title: 'Su misura o gestionale pronto?',
      intro: "Non sempre serve il su misura. Nell'analisi gratuita ti diciamo quale strada conviene, anche quando la risposta è un gestionale pronto.",
      cols: [
        ['Un gestionale pronto basta se', [
          'i vostri processi sono standard per il settore;',
          'vi va bene adattare il modo di lavorare al programma;',
          'non servono collegamenti con altri sistemi.',
        ]],
        ['Il su misura conviene se', [
          'il vostro modo di lavorare è un vantaggio da non perdere;',
          'dovete far parlare tra loro più sistemi: gestionale attuale, CRM, e-commerce, marketplace;',
          'oggi tenete in piedi tutto con Excel paralleli e copia-incolla.',
        ]],
      ],
    },
    priceTitle: 'Quanto costa un gestionale su misura',
    price: {
      range: [3500, 20000],
      boxes: [
        ['Sviluppo', '3.500 € – 20.000 €', "IVA esclusa. Preventivo scritto gratuito dopo l'analisi."],
        ['Tempi', 'circa 2 mesi', 'per la prima versione in uso. I progetti più ampi si rilasciano a fasi, partendo dalle funzioni che fanno risparmiare più tempo.'],
        ['Assistenza', '50 € – 250 €', 'al mese, IVA esclusa. Aggiornamenti, supporto e nuove funzioni quando servono.'],
      ],
      factors: [
        'quante funzioni e quanti reparti coinvolge;',
        'numero di utenti, ruoli e permessi;',
        'collegamenti con il gestionale attuale, il CRM, l’e-commerce e altri programmi;',
        "dati da importare da Excel o dal vecchio gestionale;",
        "app per smartphone, report e automazioni con l'AI.",
      ],
    },
    cta: ['Raccontaci come lavorate oggi.', "In 30 minuti con uno sviluppatore capiamo se un gestionale su misura conviene e quanto costerebbe. L'analisi è gratuita e senza impegno."],
    related: ['sviluppo-ecommerce'],
    faq: [
      ['Quanto costa un gestionale su misura?', "Da 3.500 a 20.000 € IVA esclusa, a seconda delle funzioni, del numero di utenti, dei collegamenti con altri sistemi e dei dati da importare. Dopo l'analisi gratuita ricevi un preventivo scritto, anche questo gratuito."],
      ['Quanto tempo serve per sviluppare un gestionale?', 'Circa 2 mesi per la prima versione in uso. Nei progetti più ampi si parte dalle funzioni che fanno risparmiare più tempo e si aggiunge il resto a fasi.'],
      ['Meglio un gestionale su misura o uno pronto?', "Se i processi sono standard, un gestionale pronto costa meno e va benissimo. Il su misura conviene quando il vostro modo di lavorare è particolare, quando servono collegamenti tra più sistemi o quando si lavora con molti Excel paralleli. Nell'analisi gratuita ti diciamo quale strada conviene."],
      ['Si possono importare i dati da Excel o dal vecchio gestionale?', "Sì. Importiamo clienti, articoli, listini e storico da Excel, CSV o dal vecchio gestionale, e controlliamo i dati insieme a voi prima dell'avvio."],
      ['Il gestionale si collega ai programmi che usiamo già?', 'Sì. Lo colleghiamo al gestionale che avete già, al CRM, a WooCommerce, PrestaShop, Amazon e altri marketplace: ogni sistema continua a fare il suo lavoro e ordini, giacenze e prezzi restano allineati senza copiarli a mano.'],
      ['Cosa succede dopo la consegna?', "Con l'assistenza mensile, da 50 a 250 € al mese, seguiamo aggiornamenti, problemi e richieste, e il gestionale può crescere con nuove funzioni quando servono."],
      ['Lavorate solo a Perugia?', 'No. Lavoriamo da remoto con aziende di tutta Italia, in italiano, inglese o francese.'],
    ],
  },
  {
    slug: 'sviluppo-ecommerce',
    keyword: 'sviluppo e-commerce',
    name: 'Sviluppo e-commerce',
    title: 'Sviluppo e-commerce su misura · Arel Group',
    description: 'Sviluppo e-commerce su misura con WooCommerce e PrestaShop: negozi nuovi, plugin e moduli, B2B, collegamento con Amazon e gestionale. Da 600 € IVA esclusa.',
    h1: ['Sviluppo e-commerce su misura,', 'collegato a tutto il resto.'],
    lead: "Lo sviluppo di un e-commerce su misura parte dal tuo modo di vendere: catalogo, prezzi, spedizioni, clienti B2B, marketplace. Invece di accumulare plugin e moduli che si pestano i piedi, scriviamo il codice che serve e colleghiamo il negozio al gestionale, ad Amazon e agli altri programmi che usi.",
    lead2: 'Lavoriamo con WooCommerce e PrestaShop: creiamo e-commerce nuovi, sistemiamo quelli che esistono già e sviluppiamo plugin e moduli su misura, per PMI di tutta Italia. Un e-commerce completo è online in circa 2 mesi.',
    signs: {
      title: 'Quando ti serve uno sviluppatore e-commerce',
      items: [
        'Il negozio è lento o qualcosa si rompe a ogni aggiornamento di plugin o moduli.',
        'Prodotti, prezzi e giacenze si aggiornano a mano dal listino del fornitore o dal gestionale.',
        'Vendi anche su Amazon e le giacenze tra i canali non tornano.',
        'Ai clienti B2B servono prezzi riservati, ordini veloci e documenti.',
        'Ti serve una funzione che nessun plugin o modulo fa come vorresti.',
      ],
    },
    features: {
      title: 'Cosa facciamo per il tuo e-commerce',
      items: [
        ['E-commerce nuovi', 'Su WooCommerce o PrestaShop, dal catalogo al checkout: un negozio veloce, pensato per i tuoi prodotti e facile da gestire ogni giorno.'],
        ['Plugin e moduli su misura', 'Plugin WooCommerce e moduli PrestaShop scritti apposta per te al posto di quelli generici: più leggeri e senza licenze da rinnovare.'],
        ['E-commerce B2B', 'Listini per cliente, ordini minimi e area riservata per rivenditori e agenti.'],
        ['Amazon e marketplace', 'Prodotti, prezzi e giacenze sincronizzati tra il negozio, Amazon e gli altri canali di vendita.'],
        ['Gestionale e fornitori', 'Ordini che arrivano al gestionale e listini dei fornitori importati in automatico da CSV, Excel o XML.'],
        ['Velocità, SEO e assistenza', 'Negozio veloce e curato per Google, aggiornamenti senza sorprese e un riferimento quando qualcosa non va.'],
      ],
    },
    example: {
      title: 'Un esempio: WC Smart Search',
      text: "Per un e-commerce food & beverage su WooCommerce abbiamo sviluppato WC Smart Search, un plugin di ricerca che capisce sinonimi e varianti delle parole su oltre 100 categorie di prodotti e che permette di trovare un articolo inquadrando il codice a barre con la fotocamera del telefono.",
    },
    compare: {
      title: 'WooCommerce o PrestaShop?',
      intro: "Sviluppiamo su entrambe le piattaforme. Nell'analisi gratuita ti diciamo quale conviene nel tuo caso e, se vuoi passare dall'una all'altra, ci occupiamo noi della migrazione.",
      cols: [
        ['WooCommerce conviene se', [
          'vuoi sito, contenuti e negozio nello stesso posto;',
          'ti servono molte personalizzazioni e funzioni su misura;',
          'cerchi la piattaforma più diffusa, facile da gestire anche in futuro.',
        ]],
        ['PrestaShop conviene se', [
          'il catalogo è molto ampio, con tante varianti di prodotto;',
          'devi gestire più negozi o più lingue dallo stesso pannello;',
          'hai già PrestaShop e vuoi farlo crescere senza migrare.',
        ]],
      ],
    },
    priceTitle: 'Quanto costa un e-commerce',
    price: {
      range: [600, 9000],
      boxes: [
        ['E-commerce', '600 € – 9.000 €', "IVA esclusa, su WooCommerce o PrestaShop. Dal sito con pochi prodotti all'e-commerce completo, in circa 2 mesi."],
        ['Moduli PrestaShop', '150 € – 1.000 €', 'IVA esclusa. Un modulo su misura per una funzione specifica, in circa 1 mese.'],
        ['Integrazioni', '500 € – 2.000 €', 'IVA esclusa. Collegamento con il gestionale o con Amazon, in circa 1 mese.'],
        ['Assistenza', '50 € – 250 €', 'al mese, IVA esclusa. Aggiornamenti, supporto e interventi quando servono.'],
      ],
      factors: [
        'numero di prodotti, varianti e categorie;',
        'grafica su misura o partendo da un tema;',
        'funzioni B2B, listini e regole di prezzo;',
        'collegamenti con gestionale, Amazon e fornitori;',
        'importazione dei prodotti dal vecchio sito o da file.',
      ],
    },
    cta: ['Raccontaci il tuo negozio.', "In 30 minuti con uno sviluppatore capiamo cosa serve al tuo e-commerce e quanto costerebbe. L'analisi è gratuita e senza impegno."],
    related: ['gestionale-su-misura'],
    faq: [
      ['Quanto costa sviluppare un e-commerce?', "Da 600 a 9.000 € IVA esclusa, su WooCommerce o PrestaShop: da un sito con pochi prodotti a un e-commerce completo con funzioni su misura e collegamenti ad altri sistemi. Dopo l'analisi gratuita ricevi un preventivo scritto, anche questo gratuito."],
      ['Quanto tempo serve?', 'Circa 2 mesi per un e-commerce completo; un sito più semplice è pronto prima. Un collegamento con il gestionale o con Amazon richiede circa 1 mese.'],
      ['Meglio WooCommerce o PrestaShop?', "Dipende dal catalogo e da come vendi. WooCommerce è più adatto se vuoi sito, contenuti e negozio insieme e molte personalizzazioni; PrestaShop se hai un catalogo molto ampio o più negozi da gestire. Lavoriamo con entrambe e nell'analisi gratuita ti diciamo quale conviene."],
      ['Potete lavorare su un e-commerce che esiste già?', 'Sì, su WooCommerce e PrestaShop: sistemiamo errori e lentezze, aggiorniamo in sicurezza, aggiungiamo funzioni e colleghiamo il negozio ad altri sistemi, senza rifare tutto da capo.'],
      ['Sviluppate plugin WooCommerce e moduli PrestaShop su misura?', 'Sì. Quando nessun plugin o modulo fa quello che serve, lo scriviamo noi. Un modulo PrestaShop su misura costa da 150 a 1.000 € IVA esclusa. Un esempio è WC Smart Search, la ricerca intelligente con lettura del codice a barre che abbiamo realizzato per un e-commerce food & beverage.'],
      ["Si può collegare l'e-commerce ad Amazon?", 'Sì. Colleghiamo WooCommerce e PrestaShop ad Amazon e agli altri marketplace perché prodotti, prezzi e giacenze restino allineati su tutti i canali.'],
      ['Offrite assistenza continuativa?', 'Sì, per WooCommerce e PrestaShop, con un canone da 50 a 250 € al mese IVA esclusa: aggiornamenti, supporto e interventi quando servono.'],
      ['Lavorate solo a Perugia?', 'No. Lavoriamo da remoto con aziende di tutta Italia, in italiano, inglese o francese.'],
    ],
  },
];

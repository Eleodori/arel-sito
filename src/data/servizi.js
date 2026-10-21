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
    price: {
      range: [3500, 20000],
      time: 'circa 2 mesi',
      timeNote: 'per la prima versione in uso. I progetti più ampi si rilasciano a fasi, partendo dalle funzioni che fanno risparmiare più tempo.',
      care: [50, 250],
      factors: [
        'quante funzioni e quanti reparti coinvolge;',
        'numero di utenti, ruoli e permessi;',
        'collegamenti con il gestionale attuale, il CRM, l’e-commerce e altri programmi;',
        "dati da importare da Excel o dal vecchio gestionale;",
        "app per smartphone, report e automazioni con l'AI.",
      ],
    },
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
];

(function(){
"use strict";
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(pointer: coarse)').matches;
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
/* ---------------- i18n ---------------- */
const I18N = {
 it:{
  nav_sol:"Soluzioni", nav_lab:"Lab AI", nav_method:"Metodo", nav_faq:"FAQ", nav_cta:"Analisi gratuita",
  hero_eyebrow:"Sviluppo software su misura · Integrazione AI",
  hero_l1:"Porta un'idea.", hero_l2:"Noi creiamo il software che la fa funzionare.",
  hero_sub:"Software su misura e soluzioni AI costruiti sui tuoi processi.<br><b>Meno lavoro manuale, più tempo per crescere.</b>",
  hero_cta1:"Richiedi l'analisi gratuita", hero_cta2:"Descrivi la tua idea",
  hero_note:"30 minuti con uno sviluppatore.",
  pr1:"Parli con chi sviluppa", pr2:"Costi scritti prima di iniziare", pr3:"Lo vedi funzionare passo passo",
  pain_eyebrow:"Ti riconosci?", pain_title:"Quale di queste frasi è tua? <em>Tocca e scopri.</em>",
  pick_build:"Cosa costruiamo",
  note_a:"30 minuti con uno sviluppatore, non con un commerciale.", note_l:"Prima una lettura dell'AI, poi ne parliamo.",
  p1_l:"Ricopio gli stessi dati ovunque", p1_t:"Scrivi un dato una volta sola.", p1_d:"Ogni copia-incolla è tempo pagato per un lavoro che non serve. Basta un errore per sbagliare un ordine o una fattura.",
  p1_b1:"Gestisci tutta l'azienda dal tuo gestionale", p1_b2:"Listini fornitori aggiornati senza ricopiarli", p1_b3:"Excel da migliaia di righe sistemati da soli", p1_cta:"Mostraci dove ricopi i dati",
  p2_l:"Tutto passa da WhatsApp ed email", p2_t:"Ogni richiesta in un posto solo.", p2_d:"Un messaggio perso diventa un ordine sbagliato o un cliente che aspetta. Per sapere a che punto sei, devi chiedere in giro.",
  p2_b1:"Portale dove i clienti ordinano da soli", p2_b2:"Ordini via email letti e caricati da soli", p2_b3:"Stato di ogni ordine, visibile a tutti", p2_cta:"Raccontaci come lavori oggi",
  p3_l:"I dati non sono mai aggiornati", p3_t:"I numeri dell'azienda, aggiornati ogni giorno.", p3_d:"Decidi su un Excel che qualcuno compone a mano a fine mese. Quando lo leggi, è già vecchio.",
  p3_b1:"Una schermata con vendite, margini e scadenze", p3_b2:"Dati presi da gestionale, banca ed e-commerce", p3_b3:"Avvisi quando un numero esce dai binari", p3_cta:"Dicci quali numeri ti servono",
  p4_l:"Il gestionale non mi segue", p4_t:"Un gestionale che lavora come te.", p4_d:"Excel accanto al programma, preventivi rifatti a mano, licenze pagate per funzioni che non usi. Più cresci, più si complica.",
  p4_b1:"Gestionale fatto sui tuoi passaggi reali", p4_b2:"Preventivi creati dai tuoi listini, non a mano", p4_b3:"Collegato ai programmi che usi già", p4_cta:"Mostraci cosa fai ancora a mano",
  p5_l:"Voglio l'AI, ma dove?", p5_t:"Prima capiamo dove ti fa risparmiare.", p5_d:"L'hai provata su ChatGPT, ma non sai dove metterla al lavoro. Né a chi affidarti senza buttare soldi.",
  p5_b1:"Agente che smista e risponde alle email", p5_b2:"Assistente che cerca nei tuoi documenti", p5_b3:"Risposte ai clienti preparate in bozza", p5_cta:"Prova il tuo caso con l'AI",
  p6_l:"Ho un'idea da sviluppare", p6_t:"Dall'idea a un prodotto che cresce.", p6_d:"Preventivi vaghi, sviluppatori che spariscono a metà, costi che raddoppiano. Alla fine, un prodotto che non può crescere.",
  p6_b1:"Prima versione con le funzioni essenziali", p6_b2:"Web app o app iOS e Android", p6_b3:"Pannello per gestire utenti e pagamenti", p6_cta:"Descrivi l'idea all'AI",
  pp1:"Ogni giorno ricopiamo a mano gli stessi dati tra Excel, gestionale ed e-commerce. Vorrei ",
  pp2:"Ordini e richieste ci arrivano da WhatsApp, email e telefono e si perdono. Vorrei ",
  pp3:"Per avere i numeri dell'azienda dobbiamo mettere insieme a mano dati da più programmi. Vorrei ",
  pp4:"Il programma che usiamo non si adatta a come lavoriamo e facciamo molto a mano, per esempio ",
  pp5:"Vorrei usare l'AI in azienda, per esempio per ", pp6:"Ho un'idea per un prodotto digitale: ",
  sol_eyebrow:"Cosa sviluppiamo", sol_title:"Cosa costruiamo,<br><em>in concreto.</em>", sol_lead:"Software, integrazione AI e app su misura. Li sviluppiamo noi, senza intermediari.",
  o3_k:"Software su misura", o3_t:"Gestionali e portali fatti su come lavori", o3_d:"Costruiti sui tuoi passaggi e collegati ai programmi che usi già.",
  o3_i1:"Gestionali su misura", o3_i2:"Portali B2B per i clienti", o3_i3:"Collegamento ai tuoi software", o3_i4:"Report sempre aggiornati", o3_cta:"Mostraci come lavori",
  o2_k:"AI e automazioni", o2_t:"L'AI nei tuoi processi, non in una demo", o2_d:"Agenti, chatbot e automazioni collegati ai tuoi dati, solo dove fanno risparmiare tempo.",
  o2_i1:"Agenti AI e chatbot", o2_i2:"Automazioni tra i tuoi programmi", o2_i3:"Elaborazione di grandi Excel", o2_i4:"Consulenza: dove usare l'AI", o2_cta:"Prova un tuo caso con l'AI",
  o4_k:"App e piattaforme", o4_t:"La tua idea, costruita per crescere", o4_d:"Web app, piattaforme e app iOS e Android, con costi scritti prima e una demo a ogni passo.",
  o4_i1:"Web app e piattaforme", o4_i2:"App iOS e Android", o4_i3:"Prima versione da testare", o4_i4:"Pannello di gestione", o4_cta:"Descrivi l'idea all'AI",
  o1_k:"E-commerce e marketplace", o1_t:"Negozio, magazzino e marketplace sincronizzati", o1_d:"WooCommerce e PrestaShop collegati a gestionale e marketplace: prezzi, giacenze e ordini sempre allineati.",
  o1_i1:"Sviluppo WooCommerce e PrestaShop", o1_i2:"Plugin su misura", o1_i3:"Integrazione con Amazon e marketplace", o1_i4:"Sincronizzazione col gestionale", o1_cta:"Mostraci il tuo negozio",
  o5_k:"Forward Deployed Engineer", o5_t:"Un nostro sviluppatore dentro la tua azienda", o5_d:"Lavora con le tue persone, sui tuoi dati e programmi, finché il nuovo strumento lo usate ogni giorno.",
  o5_i1:"Lavora sui tuoi dati reali", o5_i2:"Competenza senza assumere", o5_i3:"Affianca il tuo team", o5_i4:"Resta finché funziona", o5_cta:"Parliamone in 30 minuti",
  pf3:"Oggi gestiamo a mano, tra Excel ed email, ", pf2:"Vorrei usare l'AI in azienda per ", pf4:"La mia idea è una piattaforma che ", pf1:"Ho un e-commerce su ", pf5:"Ci servirebbe uno sviluppatore che lavori con noi per ",
  lab_eyebrow:"Lab AI", lab_free:"2 minuti · senza registrazione", lab_title:"Descrivi cosa ti serve. <em>Vedi da dove partire.</em>",
  lab_desc:"L'AI ti fa due o tre domande e ti mostra funzioni, fasi e tempi di massima.",
  ls1:"Descrivi", ls2:"2-3 domande", ls3:"Prima lettura",
  app_sub:"Prima lettura con l'AI", mode_wait:"connessione", mode_live:"AI attiva", mode_demo:"demo",
  f_label:"Cosa vorresti risolvere o costruire?", f_hint:"Scrivi come a un collega: cosa non va oggi, cosa vorresti, con quali programmi lavori.",
  t_ph:"Es. Copiamo a mano gli ordini dalle email al gestionale. Vorrei che arrivassero da soli…",
  t_ex:"Oppure parti da un esempio",
  ex1:"Ordini copiati a mano nel gestionale", ex2:"Un assistente AI sui nostri documenti", ex3:"App per prenotare e pagare lezioni", ex4:"Listini Excel enormi aggiornati da soli",
  b_analyze:"Inizia la lettura", b_generate:"Mostra la prima lettura", b_skip:"Salta le domande", b_stop:"Annulla", b_copy:"Copia il testo", b_restart:"Ricomincia", b_send:"Richiedi l'analisi gratuita", b_retry:"Riprova", b_back:"Modifica il testo",
  t_short:"Scrivi almeno una frase: cosa non va o cosa vorresti ottenere.",
  l_idea:"Quello che hai scritto",
  p_analyze:["Leggo quello che hai scritto","Cerco cosa manca per capire","Preparo due o tre domande"],
  p_generate:["Metto in fila gli obiettivi","Individuo le funzioni principali","Scelgo gli strumenti adatti","Metto in fila fasi e tempi"],
  t_questions:"Qualche domanda per capire meglio (puoi anche saltarle):",
  bp_kick:"Prima lettura · generata dall'AI",
  l_modules:"Funzioni principali", l_stack:"Strumenti che useremmo", l_phases:"Fasi indicative", l_open:"Da chiarire insieme", l_total:"Tempi di massima", u_weeks:"settimane",
  bp_next:"È una lettura automatica. In 30 minuti, con uno sviluppatore, capiamo cosa tenere, cosa togliere e se conviene farlo.",
  t_copied:"Testo copiato negli appunti.", t_copyfail:"Copia non riuscita: seleziona il testo qui sotto e copialo.",
  t_send:"Lo sviluppatore riceve già questa lettura: non devi rispiegare niente. Ti diciamo cosa conviene fare, anche se la risposta è \"non farlo\".",
  t_demo:"L'AI ora non è raggiungibile: ecco un esempio dimostrativo.",
  e_session:"Sessione scaduta. Riprova.",
  e_json:"La risposta è arrivata incompleta. Premi Riprova.", e_generic:"Connessione interrotta. Riprova.",
  met_eyebrow:"Metodo", met_title:"Prima capiamo. <em>Poi sviluppiamo.</em>",
  m1_t:"Analisi gratuita", m1_d:"30 minuti con uno sviluppatore, senza impegno.",
  m2_t:"Preventivo chiaro", m2_d:"Funzioni, fasi del progetto e costi scritti prima di iniziare.",
  m3_t:"Sviluppo", m3_d:"Passi brevi: vedi il progetto prendere forma step dopo step.",
  m4_t:"Lancio", m4_d:"Messa online e assistenza dopo il lancio.",
  faq_eyebrow:"Domande frequenti", faq_title:"Le domande <em>prima di sentirci.</em>",
  faq_desc:"Non trovi la tua domanda? Chiedicela durante l'analisi gratuita.",
  f1q:"Quanto costa un software su misura?", f1a:"Dipende da funzioni, collegamenti e volumi, per questo non abbiamo un listino. Dopo l'analisi ricevi un preventivo scritto: sai quanto spendi prima di iniziare.",
  f2q:"Cosa include l'analisi gratuita, e cosa no?", f2a:"Una call di circa 30 minuti con uno sviluppatore. Capiamo come lavori o qual è la tua idea e ti diciamo se conviene sviluppare. Lo sviluppo è a pagamento.",
  f3q:"Ho già provato ChatGPT: cosa cambia?", f3a:"Usiamo modelli simili, ma collegati ai tuoi dati e dentro il tuo lavoro di ogni giorno. Prima di sviluppare verifichiamo dove fanno risparmiare tempo davvero.",
  f4q:"Cos'è un Forward Deployed Engineer?", f4a:"Un nostro sviluppatore che lavora con il tuo team, sui tuoi dati e programmi, finché il nuovo strumento è in uso ogni giorno. Utile quando serve competenza tecnica continua senza assumere.",
  f5q:"Potete collegare i programmi che uso già?", f5a:"Nella maggior parte dei casi sì. Se un programma non si può collegare, te lo diciamo durante l'analisi, prima di qualsiasi preventivo.",
  f6q:"Con chi parlo?", f6a:"Con uno sviluppatore del team. Non ci sono commerciali in mezzo: parli con chi scrive il codice.",
  f7q:"Il software sarà mio?", f7a:"Sì: a progetto saldato codice, dati e accessi sono tuoi.",
  f8q:"Lavorate anche fuori Perugia?", f8a:"Sì. Lavoriamo da remoto con aziende di tutta Italia, in italiano o in inglese.",
  cta_eyebrow:"Inizia adesso", cta_l1:"La tua idea merita", cta_l2:"un progetto vero.",
  cta_d:"Raccontaci cosa ti serve: in 30 minuti con uno sviluppatore capiamo se e come conviene realizzarlo. L'analisi è gratuita, senza impegno.",
  a_msg:"Cosa ti serve?", a_ph:"Es. Un gestionale per i nostri ordini, collegato all'e-commerce.", a_sent:"Richiesta inviata. Uno sviluppatore ti scrive per fissare l'analisi.", e_msg:"Scrivi in due righe cosa vorresti sistemare.",
  c_email:"Email", c_phone:"Telefono",
  foot_d:"Software su misura e soluzioni AI per aziende che vogliono crescere.",
  fh1:"Soluzioni", fh2:"Risorse", fh3:"Contatti",
  fl1:"E-commerce e marketplace", fl2:"Gestione Amazon", fl3:"Agenti AI e automazioni", fl4:"Software e gestionali su misura", fl5:"App iOS e Android", fl6:"Lab AI", fl8:"Domande frequenti", fl9:"Forward Deployed Engineer", fl10:"Analisi gratuita",
  l_lead:"Fissiamo 30 minuti con uno sviluppatore?", f_name:"Nome e azienda", f_email:"Email", f_phone:"Telefono (facoltativo)", f_consent:"Ho letto l'informativa e acconsento a essere ricontattato per l'analisi.", privacy_link:"Informativa privacy", b_submit:"Richiedi l'analisi gratuita", t_sent:"Fatto. Uno sviluppatore legge la tua prima lettura e ti scrive per fissare l'analisi.", t_senderr:"Invio non riuscito. Riprova, oppure scrivici a info@arelgroup.it.", e_name:"Inserisci il tuo nome.", e_email:"Inserisci un'email valida.", e_consent:"Serve il consenso per poterti ricontattare.", e_offtopic:"Il Lab AI legge idee e problemi di software, automazioni, AI ed e-commerce. Descrivi qualcosa per la tua attività.", e_limit:"Hai raggiunto il limite di letture per oggi. Scrivici: rispondiamo noi.", e_fast:"Un attimo: aspetta qualche secondo e riprova.", e_busy:"Il Lab AI è molto richiesto in questo momento. Riprova più tardi o scrivici.", privacy_hint:"Evita dati personali o riservati.", foot_proto:"Anteprima · non indicizzata"
 },
 en:{
  nav_sol:"Solutions", nav_lab:"AI Lab", nav_method:"Method", nav_faq:"FAQ", nav_cta:"Free analysis",
  hero_eyebrow:"Custom software development · AI integration",
  hero_l1:"Bring an idea.", hero_l2:"We build the software that makes it work.",
  hero_sub:"Custom software and AI solutions built around your processes.<br><b>Less manual work, more time to grow.</b>",
  hero_cta1:"Request your free analysis", hero_cta2:"Describe your idea",
  hero_note:"30 minutes with a developer.",
  pr1:"You talk to the people who build it", pr2:"Costs in writing before we start", pr3:"You see it working step by step",
  pain_eyebrow:"Sound familiar?", pain_title:"Which of these sounds like you? <em>Tap to see.</em>",
  pick_build:"What we build",
  note_a:"30 minutes with a developer, not a salesperson.", note_l:"First a reading from the AI, then we talk.",
  p1_l:"I retype the same data everywhere", p1_t:"Enter data once.", p1_d:"Every copy-paste is paid time spent on work nobody needs. One mistake is enough to get an order or an invoice wrong.",
  p1_b1:"Run your whole business from your system", p1_b2:"Supplier price lists updated without retyping", p1_b3:"Huge Excel files sorted out automatically", p1_cta:"Show us where you retype data",
  p2_l:"Everything goes through WhatsApp and email", p2_t:"Every request in one place.", p2_d:"A lost message becomes a wrong order or a waiting customer. To know where things stand, you have to ask around.",
  p2_b1:"A portal where customers order on their own", p2_b2:"Email orders read and entered automatically", p2_b3:"Every order's status, visible to everyone", p2_cta:"Tell us how you work today",
  p3_l:"Our data is never up to date", p3_t:"Your company's numbers, updated daily.", p3_d:"You decide based on an Excel someone puts together by hand at month end. By the time you read it, it's old.",
  p3_b1:"One screen with sales, margins and deadlines", p3_b2:"Data from your system, bank and store", p3_b3:"Alerts when a number goes off track", p3_cta:"Tell us which numbers you need",
  p4_l:"My software doesn't keep up", p4_t:"A system that works the way you do.", p4_d:"Excel next to the program, quotes redone by hand, licences paid for features you don't use. The more you grow, the worse it gets.",
  p4_b1:"A system built on your real steps", p4_b2:"Quotes created from your price lists", p4_b3:"Connected to the programs you already use", p4_cta:"Show us what you still do by hand",
  p5_l:"I want AI, but where?", p5_t:"First we find where it saves you time.", p5_d:"You've tried ChatGPT, but you don't know where to put it to work. Or who to trust without wasting money.",
  p5_b1:"An agent that sorts and answers emails", p5_b2:"An assistant that searches your documents", p5_b3:"Customer replies drafted for you", p5_cta:"Try your case with the AI",
  p6_l:"I have an idea to build", p6_t:"From idea to a product that grows.", p6_d:"Vague quotes, developers who vanish halfway, costs that double. In the end, a product that can't grow.",
  p6_b1:"A first version with the essential features", p6_b2:"Web app or iOS and Android app", p6_b3:"A dashboard to manage users and payments", p6_cta:"Describe the idea to the AI",
  pp1:"Every day we retype the same data by hand between Excel, our system and our store. I'd like ",
  pp2:"Orders and requests reach us via WhatsApp, email and phone and get lost. I'd like ",
  pp3:"To get our company's numbers we have to combine data from several programs by hand. I'd like ",
  pp4:"The program we use doesn't fit how we work and we do a lot by hand, for example ",
  pp5:"I'd like to use AI in my company, for example to ", pp6:"I have an idea for a digital product: ",
  sol_eyebrow:"What we build", sol_title:"What we build,<br><em>in practice.</em>", sol_lead:"Custom software, AI integration and apps. We build them ourselves, with no middlemen.",
  o3_k:"Custom software", o3_t:"Systems and portals built around how you work", o3_d:"Designed on your steps and connected to the programs you already use.",
  o3_i1:"Custom management systems", o3_i2:"B2B portals for your customers", o3_i3:"Connection to your software", o3_i4:"Always up-to-date reports", o3_cta:"Show us how you work",
  o2_k:"AI and automation", o2_t:"AI in your processes, not in a demo", o2_d:"Agents, chatbots and automations connected to your data, only where they save time.",
  o2_i1:"AI agents and chatbots", o2_i2:"Automations across your programs", o2_i3:"Processing of large Excel files", o2_i4:"Consulting: where to use AI", o2_cta:"Try a case of yours with AI",
  o4_k:"Apps and platforms", o4_t:"Your idea, built to grow", o4_d:"Web apps, platforms and iOS and Android apps, with costs in writing first and a demo at every step.",
  o4_i1:"Web apps and platforms", o4_i2:"iOS and Android apps", o4_i3:"A first version to test", o4_i4:"Admin dashboard", o4_cta:"Describe the idea to the AI",
  o1_k:"E-commerce and marketplaces", o1_t:"Store, stock and marketplaces in sync", o1_d:"WooCommerce and PrestaShop connected to your system and marketplaces: prices, stock and orders always aligned.",
  o1_i1:"WooCommerce and PrestaShop development", o1_i2:"Custom plugins", o1_i3:"Amazon and marketplace integration", o1_i4:"Sync with your management system", o1_cta:"Show us your store",
  o5_k:"Forward Deployed Engineer", o5_t:"One of our developers inside your company", o5_d:"Works with your people, on your data and programs, until the new tool is part of your daily work.",
  o5_i1:"Works on your real data", o5_i2:"Expertise without hiring", o5_i3:"Works alongside your team", o5_i4:"Stays until it works", o5_cta:"Let's talk for 30 minutes",
  pf3:"Today we manage by hand, between Excel and email, ", pf2:"I'd like to use AI in my company to ", pf4:"My idea is a platform that ", pf1:"I have an online store on ", pf5:"We'd need a developer working with us to ",
  lab_eyebrow:"AI Lab", lab_free:"2 minutes · no sign-up", lab_title:"Describe what you need. <em>See where to start.</em>",
  lab_desc:"The AI asks you two or three questions and shows you features, phases and rough timing.",
  ls1:"Describe", ls2:"2-3 questions", ls3:"First reading",
  app_sub:"First reading with AI", mode_wait:"connecting", mode_live:"AI on", mode_demo:"demo",
  f_label:"What would you like to fix or build?", f_hint:"Write as you would to a colleague: what's wrong today, what you'd like, which programs you use.",
  t_ph:"E.g. We copy orders by hand from emails into our system. I'd like them to arrive on their own…",
  t_ex:"Or start from an example",
  ex1:"Orders copied by hand into our system", ex2:"An AI assistant on our documents", ex3:"App to book and pay for lessons", ex4:"Huge Excel price lists updated automatically",
  b_analyze:"Start the reading", b_generate:"Show the first reading", b_skip:"Skip the questions", b_stop:"Cancel", b_copy:"Copy the text", b_restart:"Start over", b_send:"Request your free analysis", b_retry:"Try again", b_back:"Edit the text",
  t_short:"Write at least one sentence: what's wrong or what you'd like to achieve.",
  l_idea:"What you wrote",
  p_analyze:["Reading what you wrote","Finding what's missing","Preparing two or three questions"],
  p_generate:["Lining up the goals","Finding the main features","Choosing the right tools","Lining up phases and timing"],
  t_questions:"A few questions to understand better (you can skip them):",
  bp_kick:"First reading · generated by AI",
  l_modules:"Main features", l_stack:"Tools we would use", l_phases:"Indicative phases", l_open:"To clarify together", l_total:"Rough timing", u_weeks:"weeks",
  bp_next:"This is an automatic reading. In 30 minutes, with a developer, we work out what to keep, what to drop and whether it's worth doing.",
  t_copied:"Text copied to the clipboard.", t_copyfail:"Copy failed: select the text below and copy it.",
  t_send:"The developer already gets this reading: no need to explain it all again. We tell you what makes sense, even if the answer is \"don't do it\".",
  t_demo:"The AI can't be reached right now: here is a demo example.",
  e_session:"Session expired. Try again.",
  e_json:"The answer came back incomplete. Press Try again.", e_generic:"Connection interrupted. Try again.",
  met_eyebrow:"Method", met_title:"First we understand. <em>Then we build.</em>",
  m1_t:"Free analysis", m1_d:"30 minutes with a developer, no commitment.",
  m2_t:"Clear quote", m2_d:"Features, project phases and costs in writing before we start.",
  m3_t:"Build", m3_d:"Short steps: watch the project take shape, step by step.",
  m4_t:"Launch", m4_d:"Go live, with support after launch.",
  faq_eyebrow:"FAQ", faq_title:"The questions <em>before we talk.</em>",
  faq_desc:"Can't find your question? Ask us during the free analysis.",
  f1q:"How much does custom software cost?", f1a:"It depends on features, connections and volumes, which is why we have no price list. After the analysis you get a written quote: you know what you'll spend before we start.",
  f2q:"What does the free analysis include, and what not?", f2a:"A call of about 30 minutes with a developer. We understand how you work or what your idea is and tell you whether it's worth building. Development is paid.",
  f3q:"I've already tried ChatGPT: what's different?", f3a:"We use similar models, but connected to your data and inside your daily work. Before building, we check where they really save time.",
  f4q:"What is a Forward Deployed Engineer?", f4a:"One of our developers working with your team, on your data and programs, until the new tool is in daily use. Useful when you need ongoing technical expertise without hiring.",
  f5q:"Can you connect the programs I already use?", f5a:"In most cases, yes. If a program can't be connected, we tell you during the analysis, before any quote.",
  f6q:"Who do I talk to?", f6a:"A developer on the team. No salespeople in between: you talk to the people who write the code.",
  f7q:"Will the software be mine?", f7a:"Yes: once the project is paid, code, data and access are yours.",
  f8q:"Do you work outside Perugia?", f8a:"Yes. We work remotely with companies all over Italy, in Italian or English.",
  cta_eyebrow:"Start now", cta_l1:"Your idea deserves", cta_l2:"a real project.",
  cta_d:"Tell us what you need: in 30 minutes with a developer we work out whether and how it's worth building. The analysis is free, with no commitment.",
  a_msg:"What do you need?", a_ph:"E.g. A management system for our orders, connected to our online store.", a_sent:"Request sent. A developer will write to you to set up the analysis.", e_msg:"Write in two lines what you'd like to fix.",
  c_email:"Email", c_phone:"Phone",
  foot_d:"Custom software and AI solutions for companies that want to grow.",
  fh1:"Solutions", fh2:"Resources", fh3:"Contact",
  fl1:"E-commerce and marketplaces", fl2:"Amazon management", fl3:"AI agents and automation", fl4:"Custom software and management systems", fl5:"iOS and Android apps", fl6:"AI Lab", fl8:"FAQ", fl9:"Forward Deployed Engineer", fl10:"Free analysis",
  l_lead:"Shall we book 30 minutes with a developer?", f_name:"Name and company", f_email:"Email", f_phone:"Phone (optional)", f_consent:"I have read the privacy notice and agree to be contacted about the analysis.", privacy_link:"Privacy notice", b_submit:"Request your free analysis", t_sent:"Done. A developer will read your first reading and write to you to set up the analysis.", t_senderr:"Sending failed. Try again, or write to us at info@arelgroup.it.", e_name:"Please enter your name.", e_email:"Please enter a valid email.", e_consent:"We need your consent to contact you.", e_offtopic:"The AI Lab reads ideas and problems about software, automation, AI and e-commerce. Describe something for your business.", e_limit:"You've reached today's limit of readings. Write to us: we'll answer.", e_fast:"One moment: wait a few seconds and try again.", e_busy:"The AI Lab is very busy right now. Try again later or write to us.", privacy_hint:"Avoid personal or confidential data.", foot_proto:"Preview · not indexed"
 }
};
let LANG = 'it';
try { const s = localStorage.getItem('arel-lang'); if (s === 'en' || s === 'it') LANG = s; } catch(e){}
const T = k => (I18N[LANG][k] ?? I18N.it[k] ?? k);
/* trusted, author-written strings only */
function applyLang(){
  document.documentElement.lang = LANG;
  $$('[data-i18n]').forEach(el => { el.textContent = T(el.dataset.i18n); });
  $$('[data-i18n-html]').forEach(el => { el.innerHTML = T(el.dataset.i18nHtml); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = T(el.dataset.i18nPh); });
  const lb = $('#langBtn'); lb.textContent = LANG === 'it' ? 'EN' : 'IT'; lb.setAttribute('aria-label', LANG === 'it' ? 'EN · English version' : 'IT · Versione italiana');
  renderPick(curPain, false);
  renderLab();
  if (window.ScrollTrigger) requestAnimationFrame(() => ScrollTrigger.refresh());
}
$('#langBtn').addEventListener('click', () => {
  LANG = LANG === 'it' ? 'en' : 'it';
  try { localStorage.setItem('arel-lang', LANG); } catch(e){}
  applyLang();
});


/* ---------------- scroll bar + mobile cta ---------------- */
const bar = $('#bar'), mCta = $('#mCta');
addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = 'scaleX(' + (max > 0 ? scrollY / max : 0) + ')';
}, { passive:true });
const ctaVis = new Set();
const ctaIO = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? ctaVis.add(e.target) : ctaVis.delete(e.target)); mCta.classList.toggle('hide', ctaVis.size > 0); }, { threshold:.1 });
['#lab', '.hero-ctas', '#contatti', '#pickPanel'].forEach(q => ctaIO.observe($(q)));

/* ---------------- magnetic + spotlight ---------------- */
if (!COARSE && !REDUCE) {
  $$('[data-magnetic]').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - (r.left + r.width/2))*.18}px,${(e.clientY - (r.top + r.height/2))*.28}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transition = 'transform .5s cubic-bezier(.2,.8,.2,1)'; el.style.transform = ''; setTimeout(() => el.style.transition = '', 500); });
  });
}
$$('.panel').forEach(p => p.addEventListener('pointermove', e => {
  const r = p.getBoundingClientRect();
  p.style.setProperty('--mx', (e.clientX - r.left) + 'px'); p.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));

/* ---------------- ORB state ---------------- */
const orb = { cur:{x:.5,y:0,s:1,a:1,m:0,f:0,e:0}, tgt:{x:.5,y:0,s:1,a:1,m:0,f:1,e:0}, boost:0, forceForm:null };
const STATES_D = {
  hero:{x:.55,y:.02,s:1.05,a:1,m:0,f:1}, problemi:{x:.78,y:.1,s:.7,a:.35,m:.4,f:0},
  soluzioni:{x:.8,y:.4,s:.34,a:.5,m:.2,f:1},
  lab:{x:.82,y:.68,s:.4,a:.95,m:.3,f:0}, lavori:{x:.8,y:-.5,s:.5,a:.3,m:.3,f:1},
  metodo:{x:.72,y:.45,s:.7,a:.35,m:.6,f:.5}, faq:{x:-.8,y:-.5,s:.6,a:.25,m:.4,f:0}, contatti:{x:.62,y:.05,s:.85,a:.9,m:.1,f:1}
};
const STATES_M = {
  hero:{x:0,y:.5,s:.6,a:.95,m:0,f:1}, problemi:{x:0,y:-.55,s:.34,a:.18,m:.4,f:0},
  soluzioni:{x:0,y:-.4,s:.4,a:.2,m:.2,f:0},
  lab:{x:0,y:-.45,s:.35,a:.3,m:.3,f:0}, lavori:{x:0,y:.5,s:.34,a:.18,m:.3,f:1},
  metodo:{x:0,y:0,s:.5,a:.15,m:.6,f:.5}, faq:{x:0,y:-.55,s:.34,a:.15,m:.4,f:0}, contatti:{x:0,y:.45,s:.4,a:.45,m:.1,f:1}
};
let curSection = 'hero';
function setOrb(name){
  curSection = name;
  const st = (innerWidth < 900 ? STATES_M : STATES_D)[name];
  if (st) Object.assign(orb.tgt, st);
  if (name !== 'lab') orb.forceForm = null;
}
const orbIO = new IntersectionObserver(entries => { entries.forEach(en => { if (en.isIntersecting) setOrb(en.target.dataset.orb); }); }, { rootMargin:'-45% 0px -45% 0px' });
$$('[data-orb]').forEach(s => orbIO.observe(s));
setOrb('hero');

/* ---------------- deferred libraries (keep first paint light) ---------------- */
function loadScript(src){ return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.async = true; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
const idle = cb => ('requestIdleCallback' in window) ? requestIdleCallback(cb, { timeout:1500 }) : setTimeout(cb, 600);
function boot(){
  idle(() => {
    loadScript('/assets/vendor/gsap.min.js')
      .then(() => loadScript('/assets/vendor/ScrollTrigger.min.js'))
      .then(initScroll).catch(() => {});
  });
  // 3D mark: lightweight WebGL (no library). Starts on the first touch/scroll/mouse move
  let started = false;
  const EV = ['pointerdown','touchstart','scroll','keydown','mousemove','wheel'];
  const start3d = () => {
    if (started) return; started = true;
    EV.forEach(ev => removeEventListener(ev, start3d, { passive:true }));
    requestAnimationFrame(() => { try { initOrb(); } catch(e){} });
  };
  EV.forEach(ev => addEventListener(ev, start3d, { passive:true }));
  // auto-start after a few seconds: creating the WebGL context early would slow the first load on devices without a GPU
  setTimeout(() => idle(start3d), 4500);
}
if (document.readyState === 'complete') boot(); else addEventListener('load', boot);

function initScroll(){
  if (!window.gsap || !window.ScrollTrigger || REDUCE) return;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('js-anim');
  gsap.utils.toArray('.panel').forEach((c, i) => {
    gsap.fromTo(c, { y: 30 + (i % 4) * 22 }, { y: 0, ease:'none', scrollTrigger:{ trigger:'#hTrack', start:'top bottom', end:'top 35%', scrub:.6 } });
  });
  const steps = $$('.m-step');
  gsap.fromTo('#mFill', { scaleX:0 }, { scaleX:1, ease:'none',
    scrollTrigger:{ trigger:'#method', start:'top 75%', end:'bottom 55%', scrub:.5,
      onUpdate: s => steps.forEach((st, i) => st.classList.toggle('on', s.progress >= i / steps.length + .02)) } });
  ScrollTrigger.refresh();
}

/* ---------------- ORB (three.js) : particles that assemble into the Arel mark ---------------- */
const NOISE = `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 mm=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); mm=mm*mm;
  return 42.0*dot(mm*mm,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;
function initOrb(){
  const canvas = $('#orb');
  let gl = null;
  try { gl = canvas.getContext('webgl', { alpha:true, antialias:true, premultipliedAlpha:true, depth:false, stencil:false, powerPreference:'high-performance' }); } catch(e){}
  if (!gl) return;
  const DPR = Math.min(devicePixelRatio || 1, COARSE ? 1.5 : 2);
  const FOV = 45 * Math.PI / 180, CAMZ = 6;

  /* ---- tiny mat4 helpers (column-major, same conventions as three.js) ---- */
  const mul = (a, b) => { const o = new Float32Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) { let s = 0; for (let k = 0; k < 4; k++) s += a[k*4+r] * b[c*4+k]; o[c*4+r] = s; } return o; };
  const trs = (tx, ty, tz, x, y, z, s) => {           // translate * rotation(Euler XYZ) * uniform scale
    const a = Math.cos(x), b = Math.sin(x), c = Math.cos(y), d = Math.sin(y), e = Math.cos(z), f = Math.sin(z);
    const ae = a*e, af = a*f, be = b*e, bf = b*f;
    return new Float32Array([ c*e*s, (af+be*d)*s, (bf-ae*d)*s, 0,  -c*f*s, (ae-bf*d)*s, (be+af*d)*s, 0,  d*s, -b*c*s, a*c*s, 0,  tx, ty, tz, 1 ]);
  };
  const persp = asp => { const t = 1 / Math.tan(FOV / 2), n = .1, fa = 100, nf = 1 / (n - fa); return new Float32Array([t/asp,0,0,0, 0,t,0,0, 0,0,(fa+n)*nf,-1, 0,0,2*fa*n*nf,0]); };
  const VIEW = trs(0, 0, -CAMZ, 0, 0, 0, 1);

  const PAR = gl.getExtension('KHR_parallel_shader_compile');   // compile off the main thread when possible
  function program(vs, fs){
    const mk = (type, src) => { const sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh); return sh; };
    const p = gl.createProgram(); gl.attachShader(p, mk(gl.VERTEX_SHADER, vs)); gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(p);
    return { p, u: {} };
  }
  const ready = prog => !PAR || gl.getProgramParameter(prog.p, PAR.COMPLETION_STATUS_KHR);
  function finish(prog){
    if (!gl.getProgramParameter(prog.p, gl.LINK_STATUS)) throw new Error('shader');
    const n = gl.getProgramParameter(prog.p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) { const name = gl.getActiveUniform(prog.p, i).name; prog.u[name] = gl.getUniformLocation(prog.p, name); }
  }
  function buffer(data, prog, name, size){
    const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    return { b, loc: gl.getAttribLocation(prog.p, name), size };
  }
  function bind(list){ list.forEach(a => { if (a.loc < 0) return; gl.bindBuffer(gl.ARRAY_BUFFER, a.b); gl.enableVertexAttribArray(a.loc); gl.vertexAttribPointer(a.loc, a.size, gl.FLOAT, false, 0, 0); }); }
  function unbind(list){ list.forEach(a => { if (a.loc >= 0) gl.disableVertexAttribArray(a.loc); }); }

  /* ---- particles: sphere -> Arel mark ---- */
  const N = COARSE ? 6000 : 14000;
  const pos = new Float32Array(N*3), tgt = new Float32Array(N*3), rnd = new Float32Array(N);
  const GA = Math.PI * (3 - Math.sqrt(5));
  // Arel mark: chevron from the logo (148,388 -> 256,136 -> 364,388 on a 512 grid)
  const K = 2.7 / 252, A = [-108*K, -126*K], P = [0, 126*K], B = [108*K, -126*K], HALF = 29 * K;
  const segs = [[A, P], [P, B]];
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y*y), th = GA * i;
    const R = 1.5 * (1 + (Math.random() - .5) * .05);
    pos[i*3] = Math.cos(th) * r * R; pos[i*3+1] = y * R; pos[i*3+2] = Math.sin(th) * r * R;
    rnd[i] = Math.random();
    let px, py;
    if (Math.random() < .08) {           // rounded joints and caps
      const c = [A, P, B][(Math.random() * 3) | 0], a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * HALF;
      px = c[0] + Math.cos(a) * rr; py = c[1] + Math.sin(a) * rr;
    } else {
      const [s0, s1] = segs[Math.random() < .5 ? 0 : 1], t = Math.random();
      const dx = s1[0] - s0[0], dy = s1[1] - s0[1], L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L, o = (Math.random() * 2 - 1) * HALF;
      px = s0[0] + dx * t + nx * o; py = s0[1] + dy * t + ny * o;
    }
    tgt[i*3] = px; tgt[i*3+1] = py + .1; tgt[i*3+2] = (Math.random() - .5) * .34;
  }
  let pts, ringP, satP;
  try {
    pts = program(`precision highp float;
      attribute vec3 position; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix;
      ` + NOISE + `
      uniform float uTime; uniform float uMorph; uniform float uForm; uniform float uEnergy; uniform vec2 uMouse; uniform float uHover; uniform float uPixel;
      attribute vec3 aTarget; attribute float aRand; varying float vMix; varying float vAlpha; varying float vForm;
      void main(){
        float f = smoothstep(0.0, 1.0, clamp(uForm * 1.35 - aRand * 0.35, 0.0, 1.0));
        vec3 dir = normalize(position);
        float sp = 0.16 + uEnergy*0.8;
        float n = snoise(position*0.9 + vec3(uTime*sp));
        float n2 = snoise(position*2.2 - vec3(uTime*sp*0.6));
        float amp = (0.12 + uMorph*0.32 + uEnergy*0.2);
        vec3 m = normalize(vec3(uMouse*1.3, 0.8));
        float facing = pow(max(dot(dir, m), 0.0), 5.0);
        vec3 cloud = position + dir * (n*amp + n2*0.035 + facing*0.3*uHover);
        vec3 mark = aTarget + vec3(n, n2, n*n2) * (0.03 + uEnergy*0.12);
        vec3 p = mix(cloud, mark, f);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.2 + aRand*1.8 + facing*1.4*(1.0-f)) * uPixel * (6.0 / -mv.z);
        vMix = clamp(n*0.5 + 0.5 + facing*0.5, 0.0, 1.0);
        vAlpha = 0.28 + aRand*0.72; vForm = f;
      }`, `precision highp float;
      uniform vec3 uA; uniform vec3 uB; uniform vec3 uC; uniform float uAlpha; uniform float uEnergy;
      varying float vMix; varying float vAlpha; varying float vForm;
      void main(){
        float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float s = smoothstep(0.5, 0.0, d);
        vec3 col = mix(uB, uA, vMix);
        col = mix(col, uC, max(smoothstep(0.8, 1.0, vMix) * 0.6, vForm * 0.75));
        gl_FragColor = vec4(col, s * vAlpha * uAlpha * (0.8 + uEnergy*0.5));
      }`);
    ringP = program(`attribute vec3 position; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix;
      void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      `precision mediump float; uniform vec4 uColor; void main(){ gl_FragColor = uColor; }`);
    satP = program(`attribute vec3 position; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; uniform float uSize;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = uSize / -mv.z; }`,
      `precision mediump float; uniform float uAlpha;
      void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard; gl_FragColor = vec4(1.0, 1.0, 1.0, uAlpha * smoothstep(0.5, 0.38, d)); }`);
  } catch(e){ return; }
  let ptsAttr, ringAttr, satAttr;
  function setup(){
    ptsAttr = [buffer(pos, pts, 'position', 3), buffer(tgt, pts, 'aTarget', 3), buffer(rnd, pts, 'aRand', 1)];
    const ringPts = new Float32Array(201 * 3);
    for (let i = 0; i <= 200; i++) { const a = i / 200 * Math.PI * 2; ringPts[i*3] = Math.cos(a) * 2.3; ringPts[i*3+1] = Math.sin(a) * 2.3; }
    ringAttr = [buffer(ringPts, ringP, 'position', 3)];
    satAttr = [buffer(new Float32Array([0, 0, 0]), satP, 'position', 3)];
    const hex = h => [parseInt(h.slice(1,3),16)/255, parseInt(h.slice(3,5),16)/255, parseInt(h.slice(5,7),16)/255];
    gl.useProgram(pts.p);
    gl.uniform3fv(pts.u.uA, hex('#7AA4F5')); gl.uniform3fv(pts.u.uB, hex('#1E3A6E')); gl.uniform3fv(pts.u.uC, hex('#FFFFFF'));
    gl.uniform1f(pts.u.uPixel, DPR);
    gl.disable(gl.DEPTH_TEST); gl.enable(gl.BLEND); gl.clearColor(0, 0, 0, 0);
  }

  let W = 1, H = 1, PROJ = persp(1);
  const navEl = $('.nav'); let navH = 0;
  function resize(){
    W = innerWidth; H = innerHeight; navH = navEl ? navEl.offsetHeight : 0;
    canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
    gl.viewport(0, 0, canvas.width, canvas.height); PROJ = persp(W / H);
  }
  resize(); addEventListener('resize', () => { resize(); setOrb(curSection); });
  const mouse = { x:0, y:0, tx:0, ty:0, hover:0, last:0 };
  addEventListener('pointermove', e => { mouse.tx = (e.clientX / W) * 2 - 1; mouse.ty = -((e.clientY / H) * 2 - 1); mouse.last = performance.now(); }, { passive:true });

  const anchorEl = $('#heroMark');
  Object.assign(orb.cur, orb.tgt);  // start in the target shape: seamless hand-over from the static mark
  // riparte dalla stessa oscillazione della A statica, così il passaggio al 3D non si vede
  const swayEl = [...document.querySelectorAll('.poster .sw')].find(e => e.offsetParent);
  const swayAn = swayEl && swayEl.getAnimations ? swayEl.getAnimations()[0] : null;
  let t = swayAn && swayAn.currentTime != null && !REDUCE ? swayAn.currentTime / 1000 : 0;
  let prev = performance.now(), running = true, ringZ = 0;
  document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) { prev = performance.now(); requestAnimationFrame(loop); } });
  function loop(now){
    if (!running) return;
    const dt = Math.min(.05, (now - prev) / 1000); prev = now;
    if (!REDUCE) t += dt;
    const c = orb.cur, g = orb.tgt, k = REDUCE ? 1 : 1 - Math.pow(.03, dt), kf = REDUCE ? 1 : 1 - Math.pow(.25, dt);
    for (const key of ['x','y','s','a','m']) c[key] += (g[key] - c[key]) * k;
    const fT = orb.forceForm !== null ? orb.forceForm : g.f;
    c.f += (fT - c.f) * kf;
    c.e += (orb.boost - c.e) * (1 - Math.pow(.1, dt));
    mouse.x += (mouse.tx - mouse.x) * (1 - Math.pow(.05, dt));
    mouse.y += (mouse.ty - mouse.y) * (1 - Math.pow(.05, dt));
    mouse.hover += ((now - mouse.last < 1600 ? 1 : 0) - mouse.hover) * (1 - Math.pow(.2, dt));
    const halfH = Math.tan(FOV / 2) * CAMZ, halfW = halfH * (W / H);
    let sMax = (halfW * .82) / 1.5;
    if (anchorEl && curSection === 'hero' && anchorEl.offsetHeight) {
      const r = anchorEl.getBoundingClientRect();
      c.x = ((r.left + r.width / 2) / W) * 2 - 1;
      const ty = -(((r.top + r.height / 2) / H) * 2 - 1);
      c.y += (ty - c.y) * (1 - Math.pow(.0005, dt));
      sMax = Math.min(sMax, (r.height / H) * 2 * halfH / 3.3);
    }
    const sc = Math.min(c.s, sMax);
    let px = c.x * halfW, py = c.y * halfH;
    if (curSection !== 'hero') {
      // keep the formed mark fully on screen, below the nav (clouds may bleed off the edges)
      const top = halfH * (1 - 2 * (navH + 20) / H) - sc * 1.85, bot = -halfH * (1 - 2 * 20 / H) + sc * 1.7, side = halfW * (1 - 2 * 16 / W) - sc * 1.6;
      const w = Math.min(1, Math.max(0, c.f * 1.4 - .2));
      if (top > bot) py += (Math.min(top, Math.max(bot, py)) - py) * w;
      if (side > 0) px += (Math.min(side, Math.max(-side, px)) - px) * w;
    }
    const root = mul(VIEW, trs(px, py, 0, mouse.y * -.25, mouse.x * .4, 0, sc));
    const spinY = (1 - c.f) * t * (.08 + c.e * .6) + c.f * Math.sin(t * .4) * .25;
    ringZ += dt * .05 * (1 + c.e * 3);
    const a1 = t * (.45 + c.e * 1.6);

    gl.clear(gl.COLOR_BUFFER_BIT);
    // ring (normal blending)
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(ringP.p);
    gl.uniformMatrix4fv(ringP.u.projectionMatrix, false, PROJ);
    gl.uniformMatrix4fv(ringP.u.modelViewMatrix, false, mul(root, trs(0, 0, 0, 1.15, .2, ringZ, 1)));
    gl.uniform4f(ringP.u.uColor, .478, .643, .961, .12 * c.a + c.e * .12);
    bind(ringAttr); gl.drawArrays(gl.LINE_STRIP, 0, 201); unbind(ringAttr);
    // particles (additive)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.useProgram(pts.p);
    gl.uniformMatrix4fv(pts.u.projectionMatrix, false, PROJ);
    gl.uniformMatrix4fv(pts.u.modelViewMatrix, false, mul(root, trs(0, 0, 0, 0, spinY, 0, 1)));
    gl.uniform1f(pts.u.uTime, t); gl.uniform1f(pts.u.uMorph, c.m); gl.uniform1f(pts.u.uForm, c.f); gl.uniform1f(pts.u.uEnergy, c.e);
    gl.uniform2f(pts.u.uMouse, mouse.x, mouse.y); gl.uniform1f(pts.u.uHover, mouse.hover); gl.uniform1f(pts.u.uAlpha, c.a);
    bind(ptsAttr); gl.drawArrays(gl.POINTS, 0, N); unbind(ptsAttr);
    // satellite (normal blending)
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(satP.p);
    gl.uniformMatrix4fv(satP.u.projectionMatrix, false, PROJ);
    gl.uniformMatrix4fv(satP.u.modelViewMatrix, false, mul(root, trs(Math.cos(a1) * 2.3, Math.sin(a1) * .9, Math.sin(a1) * 2.1, 0, 0, 0, 1)));
    gl.uniform1f(satP.u.uSize, 2 * .045 * sc * (canvas.height / 2) / Math.tan(FOV / 2));
    gl.uniform1f(satP.u.uAlpha, c.a);
    bind(satAttr); gl.drawArrays(gl.POINTS, 0, 1); unbind(satAttr);
    requestAnimationFrame(loop);
  }
  (function wait(){
    if (![pts, ringP, satP].every(ready)) { setTimeout(wait, 50); return; }
    try { [pts, ringP, satP].forEach(finish); setup(); } catch(e){ return; }
    prev = performance.now();
    requestAnimationFrame(loop);
    requestAnimationFrame(() => { canvas.classList.add('on'); document.documentElement.classList.add('orb-live'); });
  })();
}

/* ---------------- pain picker ---------------- */
let curPain = 'p1';
const PAIN_GO = { p1:'analisi', p2:'analisi', p3:'analisi', p4:'analisi', p5:'lab', p6:'lab' };
const pickPanel = $('#pickPanel'), pickTabs = $$('.pick-tab');
function renderPick(k, animate){
  curPain = k;
  pickTabs.forEach(t => { const on = t.dataset.pain === k; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; });
  $('#pickT').textContent = T(k + '_t'); const pd = $('#pickD'); pd.textContent = ''; T(k + '_d').split(/(?<=\.)\s+/).forEach(t => pd.appendChild(el('span', '', t)));
  $$('#pickL li').forEach((li, i) => { li.textContent = T(k + '_b' + (i + 1)); });
  const go = PAIN_GO[k] || 'analisi', cta = $('#pickCta');
  cta.dataset.prefill = 'pp' + k.slice(1); cta.dataset.go = go;
  $('#pickCtaL').textContent = T(k + '_cta');
  $('#pickN').textContent = T(go === 'lab' ? 'note_l' : 'note_a');
  pickPanel.setAttribute('aria-labelledby', 'tab-' + k);
  if (animate && !REDUCE) { pickPanel.classList.remove('swap'); void pickPanel.offsetWidth; pickPanel.classList.add('swap'); }
}
pickTabs.forEach((t, i) => {
  t.addEventListener('click', () => {
    renderPick(t.dataset.pain, true);
    if (innerWidth < 900) pickPanel.scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block:'nearest' });
  });
  t.addEventListener('keydown', e => {
    const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!d) return; e.preventDefault();
    const n = pickTabs[(i + d + pickTabs.length) % pickTabs.length]; n.focus(); renderPick(n.dataset.pain, true);
  });
});

/* ---------------- carousel dots ---------------- */
function bindDots(trackSel, dotsSel){
  const tr = $(trackSel), ds = $$(dotsSel + ' i');
  if (!tr || !ds.length) return;
  tr.addEventListener('scroll', () => {
    const max = tr.scrollWidth - tr.clientWidth;
    const idx = max > 0 ? Math.round((tr.scrollLeft / max) * (ds.length - 1)) : 0;
    ds.forEach((d, i) => d.classList.toggle('on', i === idx));
  }, { passive:true });
}
bindDots('#hTrack', '#solDots');
bindDots('.work-grid', '#workDots');

/* ---------------- LAB AI ---------------- */
const lab = { step:'idle', idea:'', questions:[], answers:[], bp:null, msg:'', msgKind:'', ctl:null, demo:false, stream:'', t0:0, timer:0, retry:null };
let apiOn = false, sampleReady = false;
const pill = $('#modePill');
function setPill(){
  pill.classList.remove('live','demo');
  if (!sampleReady) { pill.textContent = T('mode_wait'); return; }
  if (apiOn && !lab.demo) { pill.classList.add('live'); pill.textContent = T('mode_live'); }
  else { pill.classList.add('demo'); pill.textContent = T('mode_demo'); }
}
fetch('/api/lab', { method:'GET', headers:{ accept:'application/json' } })
  .then(r => r.ok ? r.json() : null)
  .then(j => { apiOn = !!(j && j.enabled); if (!apiOn) lab.demo = true; sampleReady = true; setPill(); })
  .catch(() => { lab.demo = true; sampleReady = true; setPill(); });

async function callLab(payload, signal){
  let r;
  try { r = await fetch('/api/lab', { method:'POST', headers:{ 'content-type':'application/json' }, body: JSON.stringify(payload), signal }); }
  catch (e) { throw { code: e && e.name === 'AbortError' ? 'cancelled' : 'network' }; }
  let j = null; try { j = await r.json(); } catch (e) {}
  if (!r.ok || !j || j.error) throw { code: (j && j.error) || ('http_' + r.status) };
  return j;
}

$$('[data-prefill]').forEach(b => b.addEventListener('click', () => {
  if (b.dataset.go === 'analisi') { openAnalisi(T(b.dataset.prefill)); return; }
  lab.step = 'idle'; lab.idea = T(b.dataset.prefill); lab.msg = ''; renderLab();
  $('#lab').scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block:'start' });
  setTimeout(() => { const ta = $('#ideaIn'); if (ta) { ta.focus({ preventScroll:true }); ta.setSelectionRange(ta.value.length, ta.value.length); } }, 700);
}));

const DEMO = {
 it:{ questions:[
   {text:"Quante persone useranno il gestionale ogni giorno, e da quali dispositivi?", placeholder:"Es. 12 operatori, PC in ufficio e palmari in magazzino"},
   {text:"Su quali canali vendete oggi, oltre ad Amazon?", placeholder:"Es. WooCommerce ed eBay"},
   {text:"Avete già un software di fatturazione o contabilità da collegare?", placeholder:"Es. sì, lo usiamo per tutte le fatture"} ],
  bp:{ title:"Demo · Gestionale multi-magazzino", summary:"Un gestionale web che unifica giacenze e ordini di tre magazzini e li sincronizza con Amazon e con l'e-commerce. Gli operatori lavorano da PC in ufficio e da app per il picking.",
   modules:[{name:"Giacenze multi-magazzino",description:"Disponibilità in tempo reale per sede, lotti e soglie di riordino."},{name:"Ordini unificati",description:"Tutti i canali in un'unica coda, con stati e priorità."},{name:"Sync Amazon",description:"Prezzi, giacenze e ordini allineati via SP-API."},{name:"App picking",description:"Liste di prelievo e scansione barcode da smartphone."},{name:"Report e dashboard",description:"Rotazione prodotti, margini per canale ed esportazioni."}],
   stack:["React","Node.js","PostgreSQL","Amazon SP-API","React Native","Docker"],
   phases:[{name:"Analisi e UX",weeks:"2-3",deliverable:"Requisiti, flussi e prototipo cliccabile"},{name:"Core gestionale",weeks:"4-6",deliverable:"Giacenze, ordini e ruoli utente"},{name:"Integrazioni",weeks:"3-4",deliverable:"Amazon, e-commerce e contabilità collegati"},{name:"App e lancio",weeks:"2-3",deliverable:"App picking, formazione e messa online"}],
   open_points:["Gestione dei resi tra magazzini diversi","Numero di prodotti e frequenza di aggiornamento"], total_weeks:"11-16" } },
 en:{ questions:[
   {text:"How many people will use the system daily, and on which devices?", placeholder:"E.g. 12 operators, office PCs and warehouse handhelds"},
   {text:"Which channels do you sell on today, besides Amazon?", placeholder:"E.g. WooCommerce and eBay"},
   {text:"Do you already have invoicing or accounting software to connect?", placeholder:"E.g. yes, we use it for all invoices"} ],
  bp:{ title:"Demo · Multi-warehouse system", summary:"A web-based management system that unifies stock and orders across three warehouses and syncs them with Amazon and the online store. Staff work from office PCs and a picking app.",
   modules:[{name:"Multi-warehouse stock",description:"Real-time availability per site, batches and reorder thresholds."},{name:"Unified orders",description:"Every channel in one queue, with statuses and priorities."},{name:"Amazon sync",description:"Prices, stock and orders aligned via SP-API."},{name:"Picking app",description:"Pick lists and barcode scanning from a smartphone."},{name:"Reports and dashboard",description:"Product turnover, margins per channel and exports."}],
   stack:["React","Node.js","PostgreSQL","Amazon SP-API","React Native","Docker"],
   phases:[{name:"Analysis and UX",weeks:"2-3",deliverable:"Requirements, flows and clickable prototype"},{name:"Core system",weeks:"4-6",deliverable:"Stock, orders and user roles"},{name:"Integrations",weeks:"3-4",deliverable:"Amazon, store and accounting connected"},{name:"App and launch",weeks:"2-3",deliverable:"Picking app, training and go-live"}],
   open_points:["Handling returns across warehouses","Number of products and update frequency"], total_weeks:"11-16" } }
};

const S = (v, n) => String(v ?? '').slice(0, n || 400);
function cleanBp(r){
  if (!r || typeof r !== 'object') throw { code:'invalid_json' };
  const arr = (a, n) => Array.isArray(a) ? a.slice(0, n) : [];
  const bp = {
    title:S(r.title, 80), summary:S(r.summary, 500),
    modules:arr(r.modules, 6).map(m => ({ name:S(m && m.name, 60), description:S(m && m.description, 200) })).filter(m => m.name),
    stack:arr(r.stack, 8).map(s => S(s, 40)).filter(Boolean),
    phases:arr(r.phases, 5).map(p => ({ name:S(p && p.name, 60), weeks:S(p && p.weeks, 12), deliverable:S(p && p.deliverable, 160) })).filter(p => p.name),
    open_points:arr(r.open_points, 4).map(s => S(s, 200)).filter(Boolean),
    total_weeks:S(r.total_weeks, 16)
  };
  if (!bp.title || !bp.modules.length) throw { code:'invalid_json' };
  return bp;
}

const body = $('#termBody');
function el(tag, cls, txt){ const e = document.createElement(tag); if (cls) e.className = cls; if (txt !== undefined) e.textContent = txt; return e; }
function btn(label, cls, fn){ const b = el('button', 'btn btn-sm ' + (cls || ''), label); b.type = 'button'; b.addEventListener('click', fn); return b; }
function errText(code){
  return ({ off_topic:T('e_offtopic'), limit:T('e_limit'), too_fast:T('e_fast'), busy:T('e_busy'), invalid:T('t_short'), invalid_json:T('e_json') })[code] || T('e_generic');
}
const HIDE_CODES = ['disabled','origin','http_404'];
function ideaRecap(){ const d = el('div', 'idea-recap'); d.append(el('b', '', T('l_idea')), el('span', '', lab.idea)); return d; }
function stageIndex(){
  const secs = (Date.now() - lab.t0) / 1000;
  if (lab.step === 'analyzing') return Math.min(2, Math.floor(secs / 1.4));
  return Math.min(3, Math.floor(secs / 4.5));
}
function paintProgress(){
  const list = $('#pList'); if (!list) return;
  const idx = stageIndex();
  $$('li', list).forEach((li, i) => { li.classList.toggle('done', i < idx); li.classList.toggle('on', i === idx); });
  const e = $('#elapsed'); if (e) e.textContent = Math.round((Date.now() - lab.t0) / 1000) + 's';
}

/* keep the Lab box in view when its content changes size (new idea, back, result) */
function keepLabInView(force){
  const t = $('#term'); if (!t) return;
  const nav = $('.nav'); const navH = nav ? nav.offsetHeight : 0;
  document.documentElement.style.setProperty('--navh', navH + 'px');
  const r = t.getBoundingClientRect();
  if (force || r.top < navH || r.top > innerHeight * .6) scrollTo({ top: scrollY + r.top - navH - 12, behavior: REDUCE ? 'auto' : 'smooth' });
}
function renderLab(){
  const changed = lab.shown !== undefined && lab.shown !== lab.step; lab.shown = lab.step;
  drawLab();
  if (changed) keepLabInView(lab.step === 'result');
}
function drawLab(){
  setPill();
  clearInterval(lab.timer);
  body.textContent = '';
  if (lab.step === 'idle') {
    const lbl = el('label', 'f-label', T('f_label')); lbl.htmlFor = 'ideaIn';
    const hint = el('p', 'f-hint', T('f_hint'));
    const ta = el('textarea', 't-area'); ta.id = 'ideaIn'; ta.placeholder = T('t_ph'); ta.value = lab.idea; ta.maxLength = 1500;
    ta.addEventListener('input', () => { lab.idea = ta.value; });
    ta.addEventListener('keydown', e => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) analyze(); });
    const chips = el('div', 'chips'); chips.appendChild(el('span', 'lbl', T('t_ex')));
    ['ex1','ex2','ex3','ex4'].forEach(k => {
      const c = el('button', 'chip', T(k)); c.type = 'button';
      c.addEventListener('click', () => { lab.idea = T(k); ta.value = lab.idea; ta.focus(); });
      chips.appendChild(c);
    });
    const ph = el('p', 'privacy-hint', T('privacy_hint'));
    const acts = el('div', 't-actions'); acts.append(btn(T('b_analyze') + '  →', 'btn-primary', analyze), el('span', 'micro', T('lab_free')));
    const top = el('div', ''); top.style.cssText = 'display:grid;gap:6px'; top.append(lbl, hint);
    body.append(top, ta, ph, chips, acts, el('p', 't-msg', lab.msg));
    return;
  }
  body.appendChild(ideaRecap());
  if (lab.step === 'analyzing' || lab.step === 'generating') {
    body.appendChild(el('div', 'shimmer'));
    const list = el('ol', 'progress-list'); list.id = 'pList';
    T(lab.step === 'analyzing' ? 'p_analyze' : 'p_generate').forEach(s => { const li = el('li'); li.append(el('i'), el('span', '', s)); list.appendChild(li); });
    body.appendChild(list);
    const acts = el('div', 't-actions'); acts.appendChild(btn(T('b_stop'), 'btn-ghost', () => lab.ctl && lab.ctl.abort()));
    const e = el('span', 'elapsed', '0s'); e.id = 'elapsed'; acts.appendChild(e);
    body.appendChild(acts);
    paintProgress();
    lab.timer = setInterval(paintProgress, 400);
    return;
  }
  if (lab.step === 'questions') {
    body.appendChild(el('p', 'f-label', T('t_questions')));
    const qs = el('div', 'qs');
    lab.questions.forEach((q, i) => {
      const w = el('div', 'q');
      const l = el('label', '', q.text); l.htmlFor = 'qa' + i;
      const inp = el('input', 't-input'); inp.id = 'qa' + i; inp.type = 'text'; inp.placeholder = q.placeholder || ''; inp.value = lab.answers[i] || ''; inp.maxLength = 400;
      inp.addEventListener('input', () => { lab.answers[i] = inp.value; });
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') generate(false); });
      w.append(l, inp); qs.appendChild(w);
    });
    body.appendChild(qs);
    const acts = el('div', 't-actions');
    acts.append(btn(T('b_generate') + '  →', 'btn-primary', () => generate(false)), btn(T('b_skip'), 'btn-ghost', () => generate(true)), btn(T('b_back'), 'btn-ghost', () => { lab.step = 'idle'; renderLab(); }));
    body.append(acts, el('p', 't-msg', lab.msg));
    return;
  }
  if (lab.step === 'error') {
    body.appendChild(el('p', 't-msg', lab.msg));
    const acts = el('div', 't-actions');
    acts.append(btn(T('b_retry'), 'btn-primary', () => lab.retry && lab.retry()), btn(T('b_back'), 'btn-ghost', () => { lab.step = 'idle'; lab.msg = ''; renderLab(); }));
    body.appendChild(acts);
    return;
  }
  if (lab.step === 'result' && lab.bp) {
    const bp = lab.bp;
    const wrap = el('div', 'bp');
    const head = el('div', 'bp-head'); head.append(el('p', 'bp-kick', T('bp_kick')), el('h3', 'bp-title', bp.title), el('p', 'bp-sum', bp.summary)); wrap.appendChild(head);
    const sec = (label, content) => { const s = el('div', 'bp-sec'); s.append(el('h4', '', label), content); wrap.appendChild(s); };
    const mods = el('div', 'mods'); bp.modules.forEach(m => { const d = el('div', 'mod'); d.append(el('b', '', m.name), el('span', '', m.description)); mods.appendChild(d); }); sec(T('l_modules'), mods);
    if (bp.stack.length) { const st = el('div', 'stack'); bp.stack.forEach(s => st.appendChild(el('span', '', s))); sec(T('l_stack'), st); }
    if (bp.phases.length) { const ph = el('div', 'phases'); bp.phases.forEach((p, i) => { const d = el('div', 'ph'); d.append(el('span', 'n', String(i+1).padStart(2,'0')), el('b', '', p.name), el('span', 'wk', p.weeks ? p.weeks + ' ' + T('u_weeks') : ''), el('span', 'd', p.deliverable)); ph.appendChild(d); }); sec(T('l_phases'), ph); }
    if (bp.open_points.length) { const ul = el('ul', 'open'); bp.open_points.forEach(o => ul.appendChild(el('li', '', o))); sec(T('l_open'), ul); }
    if (bp.total_weeks) { const tot = el('div', 'total'); tot.append(el('span', '', T('l_total')), el('b', '', bp.total_weeks + ' ' + T('u_weeks'))); wrap.appendChild(tot); }
    body.appendChild(wrap);
    body.appendChild(el('p', 'bp-next', T('bp_next')));
    const acts = el('div', 't-actions');
    acts.append(btn(T('b_send') + '  →', 'btn-primary', () => { lab.leadOpen = true; renderLab(); const f = $('#leadName'); f && f.focus(); }),
      btn(T('b_copy'), 'btn-ghost', copyBrief), btn(T('b_restart'), 'btn-ghost', () => { lab.step = 'idle'; lab.idea = ''; lab.bp = null; lab.answers = []; lab.msg = ''; lab.leadOpen = false; orb.forceForm = null; renderLab(); const ta = $('#ideaIn'); ta && ta.focus({ preventScroll:true }); }));
    body.appendChild(acts);
    const m = el('p', 't-msg'); m.id = 'labMsg'; body.appendChild(m); showMsg();
    const cb = el('textarea', 'copybox'); cb.id = 'copyBox'; cb.readOnly = true; cb.hidden = true; cb.setAttribute('aria-label', 'Brief'); body.appendChild(cb);
    if (lab.leadOpen) body.appendChild(leadForm());
  }
}
function showMsg(){ const m = $('#labMsg'); if (!m) return; m.textContent = lab.msg; m.style.color = lab.msgKind === 'ok' ? 'var(--accent2)' : '#F7CFA0'; }
function briefText(){
  const b = lab.bp, L = [];
  L.push('AREL LAB · ' + b.title, '', b.summary, '', T('l_idea').toUpperCase() + ': ' + lab.idea);
  lab.questions.forEach((q, i) => { if (lab.answers[i]) L.push('- ' + q.text + ' → ' + lab.answers[i]); });
  L.push('', T('l_modules').toUpperCase()); b.modules.forEach(m => L.push('- ' + m.name + ': ' + m.description));
  L.push('', T('l_stack').toUpperCase() + ': ' + b.stack.join(', '));
  L.push('', T('l_phases').toUpperCase()); b.phases.forEach(p => L.push('- ' + p.name + ' (' + p.weeks + ' ' + T('u_weeks') + '): ' + p.deliverable));
  if (b.open_points.length) { L.push('', T('l_open').toUpperCase()); b.open_points.forEach(o => L.push('- ' + o)); }
  L.push('', T('l_total') + ': ' + b.total_weeks + ' ' + T('u_weeks'));
  return L.join('\n');
}
function copyBrief(){
  const txt = briefText();
  const fallback = () => { const cb = $('#copyBox'); cb.hidden = false; cb.value = txt; cb.focus(); cb.select(); lab.msg = T('t_copyfail'); lab.msgKind = ''; showMsg(); };
  try { navigator.clipboard.writeText(txt).then(() => { lab.msg = T('t_copied'); lab.msgKind = 'ok'; showMsg(); }, fallback); }
  catch(e){ fallback(); }
}
function energy(on){ orb.boost = on ? 1 : 0; if (on) orb.forceForm = 0; }
function focusFirst(){ const i = $('#qa0'); if (i) i.focus({ preventScroll:true }); }

async function analyze(){
  lab.idea = (lab.idea || '').trim();
  if (lab.idea.length < 12) { lab.msg = T('t_short'); renderLab(); const ta = $('#ideaIn'); ta && ta.focus(); return; }
  lab.msg = ''; lab.answers = []; lab.questions = []; lab.leadOpen = false; lab.leadSent = false;
  lab.step = 'analyzing'; lab.t0 = Date.now(); energy(true); renderLab();
  lab.retry = analyze;
  if (!apiOn || lab.demo) {
    await new Promise(r => setTimeout(r, 3600));
    if (lab.step !== 'analyzing') return;
    lab.questions = DEMO[LANG].questions; lab.step = 'questions'; energy(false); lab.msg = sampleReady ? T('t_demo') : ''; renderLab(); focusFirst(); return;
  }
  lab.ctl = new AbortController();
  try {
    const r = await callLab({ action:'questions', lang:LANG, idea:lab.idea }, lab.ctl.signal);
    const qs = (Array.isArray(r.questions) ? r.questions : []).slice(0, 3).map(q => ({ text:S(q && q.text, 200), placeholder:S(q && q.placeholder, 120) })).filter(q => q.text);
    if (!qs.length) throw { code:'invalid_json' };
    lab.questions = qs; lab.step = 'questions';
  } catch(e) { handleErr(e, 'idle'); return; }
  finally { energy(false); }
  renderLab(); focusFirst();
}
async function generate(skip){
  const qa = skip ? [] : lab.questions.map((q, i) => ({ q:q.text, a:S(lab.answers[i], 400).trim() }));
  lab.step = 'generating'; lab.t0 = Date.now(); lab.msg = ''; energy(true); renderLab();
  lab.retry = () => generate(skip);
  const done = () => { lab.step = 'result'; orb.boost = 0; orb.forceForm = 1; renderLab(); };
  if (!apiOn || lab.demo) {
    await new Promise(r => setTimeout(r, 6000));
    if (lab.step !== 'generating') return;
    lab.bp = cleanBp(DEMO[LANG].bp); done(); return;
  }
  lab.ctl = new AbortController();
  try {
    const r = await callLab({ action:'blueprint', lang:LANG, idea:lab.idea, qa }, lab.ctl.signal);
    lab.bp = cleanBp(r.blueprint);
  } catch(e) { handleErr(e, lab.questions.length ? 'questions' : 'idle'); return; }
  done();
}
function handleErr(e, backTo){
  orb.boost = 0; orb.forceForm = null;
  const code = e && e.code;
  if (code === 'cancelled') { lab.step = backTo; lab.msg = ''; renderLab(); return; }
  if (HIDE_CODES.includes(code)) { lab.demo = true; apiOn = false; lab.step = backTo; lab.msg = T('t_demo'); renderLab(); return; }
  if (code === 'off_topic' || code === 'invalid') { lab.step = 'idle'; lab.msg = errText(code); renderLab(); return; }
  lab.msg = errText(code); lab.step = 'error'; renderLab();
}

/* ---------------- lead form (Netlify Forms) ---------------- */
function leadForm(){
  const box = el('form', 'lead-box'); box.noValidate = true; box.setAttribute('aria-labelledby', 'leadTitle');
  const h = el('p', 'f-label', T('l_lead')); h.id = 'leadTitle'; box.appendChild(h);
  if (!lab.leadSent) box.appendChild(el('p', 'f-hint', T('t_send')));
  if (lab.leadSent) { const ok = el('p', 't-msg', T('t_sent')); ok.style.color = 'var(--accent2)'; box.appendChild(ok); return box; }
  const grid = el('div', 'lead-grid');
  const field = (id, label, type, auto, req, full) => {
    const l = el('label', 'lbl' + (full ? ' full' : '')); l.htmlFor = id; l.append(T(label));
    const i = el('input', 't-input'); i.id = id; i.name = id; i.type = type; i.autocomplete = auto; i.maxLength = 120; if (req) i.required = true;
    i.value = (lab.lead && lab.lead[id]) || ''; i.addEventListener('input', () => { lab.lead = lab.lead || {}; lab.lead[id] = i.value; });
    l.appendChild(i); grid.appendChild(l); return i;
  };
  field('leadName', 'f_name', 'text', 'name', true, false);
  field('leadEmail', 'f_email', 'email', 'email', true, false);
  field('leadPhone', 'f_phone', 'tel', 'tel', false, true);
  box.appendChild(grid);
  const hp = el('label', 'hp'); hp.setAttribute('aria-hidden', 'true'); const hpi = el('input'); hpi.name = 'bot-field'; hpi.tabIndex = -1; hpi.autocomplete = 'off'; hp.appendChild(hpi); box.appendChild(hp);
  const c = el('label', 'consent'); const cb = el('input'); cb.type = 'checkbox'; cb.id = 'leadConsent'; cb.checked = !!(lab.lead && lab.lead.consent);
  cb.addEventListener('change', () => { lab.lead = lab.lead || {}; lab.lead.consent = cb.checked; });
  const ct = el('span', '', T('f_consent') + ' '); const a = el('a', '', T('privacy_link')); a.href = '/privacy/'; a.target = '_blank'; a.rel = 'noopener'; ct.appendChild(a);
  c.append(cb, ct); box.appendChild(c);
  const acts = el('div', 't-actions'); const sub = el('button', 'btn btn-primary btn-sm', T('b_submit') + '  →'); sub.type = 'submit'; acts.appendChild(sub); box.appendChild(acts);
  const m = el('p', 't-msg'); m.id = 'leadMsg'; box.appendChild(m);
  box.addEventListener('submit', async e => {
    e.preventDefault();
    const v = lab.lead || {}, email = (v.leadEmail || '').trim();
    if (!(v.leadName || '').trim()) { m.textContent = T('e_name'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { m.textContent = T('e_email'); return; }
    if (!v.consent) { m.textContent = T('e_consent'); return; }
    sub.disabled = true; m.textContent = '';
    const data = new URLSearchParams({ 'form-name':'brief', 'bot-field': hpi.value, name: v.leadName.trim(), email, phone: (v.leadPhone || '').trim(), lang: LANG, consent: 'si', brief: briefText() });
    try {
      const r = await fetch('/', { method:'POST', headers:{ 'content-type':'application/x-www-form-urlencoded' }, body: data.toString() });
      if (!r.ok) throw new Error(r.status);
      lab.leadSent = true; renderLab();
    } catch (err) { sub.disabled = false; m.textContent = T('t_senderr'); }
  });
  return box;
}

/* ---------------- analisi gratuita (Netlify Forms, modulo "analisi") ---------------- */
function openAnalisi(text){
  const ta = $('#aMsg'); if (ta && text && !ta.value.trim()) ta.value = text;
  $('#contatti').scrollIntoView({ behavior: REDUCE ? 'auto' : 'smooth', block:'start' });
  setTimeout(() => { const n = $('#aName'); if (n) n.focus({ preventScroll:true }); }, 700);
}
(function(){
  const f = $('#analisiForm'); if (!f) return;
  const m = $('#aOut');
  f.addEventListener('submit', async e => {
    e.preventDefault();
    const name = f.elements.name.value.trim(), email = f.elements.email.value.trim(), msg = f.elements.message.value.trim();
    m.style.color = '';
    if (!name) { m.textContent = T('e_name'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { m.textContent = T('e_email'); return; }
    if (msg.length < 8) { m.textContent = T('e_msg'); return; }
    if (!f.elements.consent.checked) { m.textContent = T('e_consent'); return; }
    const sub = f.querySelector('button[type=submit]'); sub.disabled = true; m.textContent = '';
    const data = new URLSearchParams(new FormData(f)); data.set('lang', LANG);
    try {
      const r = await fetch('/', { method:'POST', headers:{ 'content-type':'application/x-www-form-urlencoded' }, body: data.toString() });
      if (!r.ok) throw new Error(r.status);
      f.reset(); m.style.color = 'var(--accent2)'; m.textContent = T('a_sent');
    } catch (err) { m.textContent = T('t_senderr'); }
    finally { sub.disabled = false; }
  });
})();

applyLang();
})();

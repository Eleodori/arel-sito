(function(){
"use strict";
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const COARSE = matchMedia('(pointer: coarse)').matches;
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
/* ---------------- i18n ---------------- */
const I18N = {
 it:{
  nav_sol:"Soluzioni", nav_lab:"Lab AI", nav_work:"Lavori", nav_method:"Metodo", nav_faq:"FAQ", nav_cta:"Progetto gratuito",
  hero_eyebrow:"Sviluppo software su misura · AI",
  hero_l1:"Porta un'idea.", hero_l2:"Esci con il software che la fa funzionare.",
  hero_sub:"Software su misura e soluzioni AI costruiti sui tuoi processi. <b>Meno lavoro manuale, più tempo per crescere.</b>",
  hero_cta1:"Ricevi il tuo progetto gratis", hero_cta2:"Parla con uno sviluppatore",
  pr1:"Piano di progetto gratis in 2 minuti", pr2:"Preventivo chiaro prima di iniziare", pr3:"Una demo a ogni tappa",
  pain_eyebrow:"Ti riconosci?", pain_title:"Dove perdi tempo oggi? <em>Tocca e scopri.</em>",
  q1:"Passo ore a copiare dati tra Excel, gestionale ed e-commerce.", a1:"Automatizziamo il flusso: i dati si aggiornano da soli, senza errori.",
  q2:"Gli ordini di Amazon e dei marketplace li gestisco a mano.", a2:"Colleghiamo canali, giacenze e spedizioni in un unico pannello.",
  q3:"Il sito c'è, ma non porta clienti.", a3:"Siti veloci, ottimizzati per Google e costruiti per trasformare le visite in richieste.",
  q4:"Il software che uso mi obbliga a lavorare come vuole lui.", a4:"Costruiamo il gestionale sui tuoi processi, non il contrario.",
  q5:"Vorrei usare l'AI, ma non so da dove partire.", a5:"Partiamo da un caso concreto e misurabile: un agente, un chatbot, un'automazione.",
  q6:"I miei clienti mi cercano dal telefono, ma non ho un'app.", a6:"App iOS e Android progettate per i tuoi clienti e pubblicate sugli store.",
  sol_eyebrow:"Soluzioni", sol_title:"Scegli il risultato.<br><em>Al come ci pensiamo noi.</em>", sol_lead:"Meno lavoro manuale, più clienti, dati sempre aggiornati.",
  o_cta:"Progetta il mio",
  o1_k:"E-commerce e marketplace", o1_t:"Vendi di più online", o1_d:"Negozi che convertono e canali marketplace gestiti con metodo, collegati al tuo magazzino.",
  o1_i1:"E-commerce WooCommerce e custom", o1_i2:"Gestione Amazon", o1_i3:"Altri marketplace", o1_i4:"SEO e advertising",
  o2_k:"AI e automazioni", o2_t:"Elimini il lavoro ripetitivo", o2_d:"Agenti AI, chatbot e flussi automatici che lavorano al posto del tuo team, 24 ore su 24.",
  o2_i1:"Agenti AI e chatbot su misura", o2_i2:"Automazioni e integrazioni API", o2_i3:"Elaborazione di grandi file di dati", o2_i4:"Consulenza AI",
  o3_k:"Software su misura", o3_t:"Controlli l'azienda da un unico posto", o3_d:"Gestionali e portali costruiti sui tuoi processi e collegati ai software che usi già.",
  o3_i1:"Gestionali su misura", o3_i2:"Portali B2B", o3_i3:"Integrazione con i tuoi software", o3_i4:"Consulenza informatica",
  o4_k:"App e web", o4_t:"Raggiungi i clienti ovunque", o4_d:"App e siti veloci, chiari e pensati per trasformare chi arriva in cliente.",
  o4_i1:"App iOS e Android", o4_i4:"Web app", o4_i2:"Siti web", o4_i3:"UI/UX design",
  pf1:"Voglio vendere di più online: ", pf2:"Voglio automatizzare questo lavoro ripetitivo: ", pf3:"Mi serve un gestionale per ", pf4:"Mi serve un'app o un sito per ",
  lab_eyebrow:"Lab AI", lab_free:"Gratis · 2 minuti · nessun impegno", lab_title:"Descrivi l'idea. <em>Ricevi il progetto.</em>",
  lab_desc:"Scrivi l'idea con parole tue. In 2 minuti ricevi moduli, tecnologie, fasi e tempi.",
  ls1:"Idea", ls2:"3 domande", ls3:"Progetto", ls4:"Se ti convince, lo sviluppiamo insieme",
  app_sub:"Configuratore di progetti", mode_wait:"connessione", mode_live:"AI attiva", mode_demo:"demo",
  f_label:"Qual è la tua idea?", f_hint:"Anche in modo informale: cosa vuoi ottenere, per chi, con quali strumenti di oggi.",
  t_ph:"Es. Vorrei un gestionale per i miei 3 magazzini che si sincronizzi con Amazon e con il nostro e-commerce…",
  t_ex:"Oppure parti da un esempio",
  ex1:"Gestionale per 3 magazzini collegato ad Amazon", ex2:"App per le prenotazioni del mio centro sportivo", ex3:"Chatbot che risponde ai clienti del mio e-commerce", ex4:"Importare listini Excel da 50.000 righe in automatico",
  b_analyze:"Crea il mio progetto", b_generate:"Genera il progetto", b_skip:"Salta le domande", b_stop:"Annulla", b_copy:"Copia il brief", b_restart:"Nuova idea", b_send:"Voglio realizzarlo", b_retry:"Riprova", b_back:"Modifica l'idea",
  t_short:"Scrivi almeno una frase: cosa vuoi ottenere e per chi.",
  l_idea:"La tua idea",
  p_analyze:["Leggo la tua idea","Individuo cosa manca per stimarla","Preparo le domande"],
  p_generate:["Definisco gli obiettivi","Disegno i moduli","Scelgo le tecnologie","Pianifico fasi e tempi"],
  t_questions:"Ancora qualche dettaglio per inquadrare il progetto:",
  bp_kick:"Il tuo piano di progetto",
  l_modules:"Moduli", l_stack:"Tecnologie proposte", l_phases:"Fasi", l_open:"Da chiarire in call", l_total:"Tempi indicativi complessivi", u_weeks:"settimane",
  t_copied:"Brief copiato negli appunti.", t_copyfail:"Copia non riuscita: seleziona il testo qui sotto e copialo.",
  t_send:"Il brief arriva direttamente al team Arel, che ti ricontatta. Puoi anche copiarlo e scriverci a info@arelgroup.it.",
  t_demo:"L'AI non è disponibile in questa vista: ti mostro un esempio dimostrativo.",
  e_rate:"Troppe richieste ravvicinate. Riprova tra qualche minuto.", e_session:"Sessione scaduta: accedi di nuovo a Claude e riprova.",
  e_refused:"L'AI non può elaborare questa richiesta. Prova a riformulare l'idea.", e_json:"La risposta è arrivata incompleta. Premi Riprova per rigenerarla.",
  e_generic:"Connessione interrotta. Riprova.", e_toolong:"Testo troppo lungo: accorcia la descrizione.",
  work_eyebrow:"Lavori", work_title:"Progetti veri, <em>in produzione.</em>", mock_area:"area rivenditori", mock_s1:"estivo",
  w1_tag:"Portale B2B · E-commerce", w1_d:"Portale B2B per la vendita di pneumatici ai rivenditori, con il catalogo del fornitore integrato.",
  w_res:"Risultato: [da inserire]", w_ph_tag:"[Area]", w_shot:"[screenshot]", w2_d:"[Cosa avete realizzato per Renergia, in una riga.]", w3_t:"[Progetto 3]", w_ph_d:"[Il problema del cliente e cosa avete costruito, in una riga.]",
  met_eyebrow:"Metodo", met_title:"Sai sempre cosa succede, <em>e quando.</em>",
  m1_t:"Idea", m1_d:"Una call o il piano dal Lab AI.",
  m2_t:"Analisi", m2_d:"Preventivo chiaro, fasi e tempi.",
  m3_t:"Sviluppo", m3_d:"Sprint brevi, una demo a ogni tappa.",
  m4_t:"Lancio", m4_d:"Online, con assistenza continua.",
  faq_eyebrow:"Domande frequenti", faq_title:"Le risposte, <em>prima delle domande.</em>",
  faq_desc:"Non trovi la tua? Scrivici: ti risponde una persona.",
  f1q:"Quanto costa un software su misura?", f1a:"Dipende da funzioni, integrazioni e volumi. Dopo una prima analisi ricevi un preventivo chiaro, con fasi e tempi. Con il Lab AI hai subito, gratis, un'idea della dimensione del progetto.",
  f2q:"Quanto tempo serve per realizzarlo?", f2a:"In genere un sito o un'integrazione richiedono alcune settimane, un gestionale completo qualche mese. Lavoriamo a sprint brevi con una demo a ogni tappa.",
  f3q:"Potete collegare i software che uso già?", f3a:"Sì: e-commerce, marketplace, gestionali e strumenti di fatturazione si integrano tramite API o automazioni. Se un sistema ha dei limiti, te lo diciamo prima di iniziare.",
  f4q:"Gestite anche Amazon e gli altri marketplace?", f4a:"Sì, dalla configurazione del catalogo alla sincronizzazione di prezzi, giacenze e ordini con il tuo e-commerce o gestionale.",
  f5q:"Cosa succede dopo il lancio?", f5a:"Restiamo al tuo fianco con assistenza e nuove funzioni quando servono.",
  f6q:"Lavorate anche in inglese?", f6a:"Sì, seguiamo progetti in italiano e in inglese.",
  cta_eyebrow:"Inizia adesso", cta_l1:"La tua idea merita", cta_l2:"un progetto vero.",
  cta_d:"2 minuti, gratis. Se ti convince, lo costruiamo.", cta_btn:"Ricevi il tuo progetto gratis",
  c_email:"Email", c_phone:"Telefono",
  foot_d:"Software su misura e soluzioni AI per aziende che vogliono crescere.",
  fh1:"Soluzioni", fh2:"Risorse", fh3:"Contatti",
  fl1:"E-commerce e marketplace", fl2:"Gestione Amazon", fl3:"Agenti AI e automazioni", fl4:"Software e gestionali su misura", fl5:"App iOS e Android", fl6:"Lab AI", fl7:"Lavori", fl8:"Domande frequenti",
  pick_k:"La soluzione", pick_cta:"Risolvilo gratis nel Lab AI", swipe:"Scorri", p1_l:"Copio dati a mano", p1_t:"I dati si aggiornano da soli.", p1_d:"Colleghiamo Excel, gestionale ed e-commerce: zero copia-incolla, zero errori.", p2_l:"Ordini Amazon a mano", p2_t:"Tutti i canali in un solo pannello.", p2_d:"Ordini, giacenze e spedizioni di Amazon e marketplace sempre allineati.", p3_l:"Il sito non porta clienti", p3_t:"Un sito che trasforma visite in richieste.", p3_d:"Veloce, facile da trovare su Google, pensato per convertire.", p4_l:"Il software mi limita", p4_t:"Un gestionale fatto su di te.", p4_d:"Costruito sui tuoi processi, non il contrario.", p5_l:"AI: da dove parto?", p5_t:"Un caso concreto, un risultato misurabile.", p5_d:"Partiamo da un processo reale: un agente, un'automazione o un assistente che lavora per te.", p6_l:"Non ho un'app", p6_t:"La tua app sugli store.", p6_d:"iOS e Android, pensata per i tuoi clienti.", pp1:"Passo troppo tempo a copiare dati tra Excel, gestionale ed e-commerce. Vorrei ", pp2:"Gestisco a mano gli ordini di Amazon e dei marketplace. Vorrei ", pp3:"Il mio sito non porta clienti. Vorrei ", pp4:"Il software che uso non si adatta a come lavoriamo. Mi serve ", pp5:"Vorrei usare l'AI in azienda per ", pp6:"Vorrei un'app per i miei clienti che ",
  l_lead:"Vuoi realizzarlo? Lasciaci un contatto: lo rivediamo insieme.", f_name:"Nome e azienda", f_email:"Email", f_phone:"Telefono (facoltativo)", f_consent:"Ho letto l'informativa e acconsento a essere ricontattato.", privacy_link:"Informativa privacy", b_submit:"Invia il brief", t_sent:"Brief inviato. Ti ricontattiamo al più presto.", t_senderr:"Invio non riuscito. Riprova, oppure copia il brief e scrivici.", e_name:"Inserisci il tuo nome.", e_email:"Inserisci un'email valida.", e_consent:"Serve il consenso per poterti ricontattare.", e_offtopic:"Il Lab AI progetta software, e-commerce, app e automazioni. Descrivi un progetto per la tua attività.", e_limit:"Hai raggiunto il limite di progetti per oggi. Scrivici: rispondiamo noi.", e_fast:"Un attimo: aspetta qualche secondo e riprova.", e_busy:"Il Lab AI è molto richiesto in questo momento. Riprova più tardi o scrivici.", privacy_hint:"Non inserire dati personali o riservati.", o5_k:"Forward Deployed Engineer", o5_t:"Un ingegnere AI dentro il tuo team", o5_d:"Lavora con le tue persone, sui tuoi dati e sistemi, finché la soluzione non è in produzione.", o5_i1:"Sui tuoi dati e sistemi reali", o5_i2:"Dal prototipo alla produzione", o5_i3:"Forma il tuo team", o5_i4:"A progetto o continuativo", o5_cta:"Descrivi l'esigenza", pf5:"Vorrei un ingegnere AI nel mio team per ", f7q:"Cos'è un Forward Deployed Engineer?", f7a:"È un nostro ingegnere che lavora con il tuo team, sui tuoi dati e sistemi, finché la soluzione AI o il software non sono in produzione. Utile quando serve competenza tecnica continua senza assumere.", fl9:"Forward Deployed Engineer", foot_proto:"Anteprima · non indicizzata"
 },
 en:{
  nav_sol:"Solutions", nav_lab:"AI Lab", nav_work:"Work", nav_method:"Method", nav_faq:"FAQ", nav_cta:"Free project",
  hero_eyebrow:"Custom software development · AI",
  hero_l1:"Bring an idea.", hero_l2:"Leave with the software that makes it work.",
  hero_sub:"Custom software and AI solutions built around your processes. <b>Less manual work, more time to grow.</b>",
  hero_cta1:"Get your free project", hero_cta2:"Talk to a developer",
  pr1:"Free project plan in 2 minutes", pr2:"A clear quote before we start", pr3:"A demo at every step",
  pain_eyebrow:"Sound familiar?", pain_title:"Where are you losing time? <em>Tap to see.</em>",
  q1:"I spend hours copying data between Excel, my system and my store.", a1:"We automate the flow: data updates itself, with no errors.",
  q2:"I handle Amazon and marketplace orders by hand.", a2:"We connect channels, stock and shipping in one dashboard.",
  q3:"We have a website, but it brings no clients.", a3:"Fast, Google-optimized websites built to turn visits into enquiries.",
  q4:"My software forces me to work its way.", a4:"We build the system around your processes, not the other way round.",
  q5:"I'd like to use AI, but don't know where to start.", a5:"We start from one concrete, measurable case: an agent, a chatbot, an automation.",
  q6:"My customers look for me on their phones, but I have no app.", a6:"iOS and Android apps designed for your customers and published on the stores.",
  sol_eyebrow:"Solutions", sol_title:"Pick the outcome.<br><em>We'll handle the how.</em>", sol_lead:"Less manual work, more customers, data always up to date.",
  o_cta:"Design mine",
  o1_k:"E-commerce and marketplaces", o1_t:"Sell more online", o1_d:"Stores that convert and marketplace channels run with method, connected to your stock.",
  o1_i1:"WooCommerce and custom e-commerce", o1_i2:"Amazon management", o1_i3:"Other marketplaces", o1_i4:"SEO and advertising",
  o2_k:"AI and automation", o2_t:"Get rid of repetitive work", o2_d:"AI agents, chatbots and automated flows that work for your team, around the clock.",
  o2_i1:"Custom AI agents and chatbots", o2_i2:"Automation and API integrations", o2_i3:"Large data file processing", o2_i4:"AI consulting",
  o3_k:"Custom software", o3_t:"Run the business from one place", o3_d:"Systems and portals built on your processes and connected to the software you already use.",
  o3_i1:"Custom management systems", o3_i2:"B2B portals", o3_i3:"Integration with your software", o3_i4:"IT consulting",
  o4_k:"Apps and web", o4_t:"Reach customers everywhere", o4_d:"Fast, clear apps and websites designed to turn visitors into customers.",
  o4_i1:"iOS and Android apps", o4_i4:"Web apps", o4_i2:"Websites", o4_i3:"UI/UX design",
  pf1:"I want to sell more online: ", pf2:"I want to automate this repetitive work: ", pf3:"I need a management system for ", pf4:"I need an app or a website for ",
  lab_eyebrow:"AI Lab", lab_free:"Free · 2 minutes · no commitment", lab_title:"Describe the idea. <em>Get the project.</em>",
  lab_desc:"Write your idea in your own words. In 2 minutes you get modules, technologies, phases and timing.",
  ls1:"Idea", ls2:"3 questions", ls3:"Project", ls4:"If you like it, we build it together",
  app_sub:"Project configurator", mode_wait:"connecting", mode_live:"AI on", mode_demo:"demo",
  f_label:"What's your idea?", f_hint:"Informal is fine: what you want to achieve, for whom, with which tools today.",
  t_ph:"E.g. I need a management system for my 3 warehouses that syncs with Amazon and our online store…",
  t_ex:"Or start from an example",
  ex1:"Management system for 3 warehouses linked to Amazon", ex2:"Booking app for my sports center", ex3:"Chatbot that answers my store's customers", ex4:"Automatically import 50,000-row Excel price lists",
  b_analyze:"Create my project", b_generate:"Generate the project", b_skip:"Skip the questions", b_stop:"Cancel", b_copy:"Copy the brief", b_restart:"New idea", b_send:"I want to build it", b_retry:"Try again", b_back:"Edit the idea",
  t_short:"Write at least one sentence: what you want to achieve and for whom.",
  l_idea:"Your idea",
  p_analyze:["Reading your idea","Finding what's missing to estimate it","Preparing the questions"],
  p_generate:["Defining the goals","Designing the modules","Choosing the technologies","Planning phases and timing"],
  t_questions:"A few more details to frame the project:",
  bp_kick:"Your project plan",
  l_modules:"Modules", l_stack:"Proposed technologies", l_phases:"Phases", l_open:"To clarify on the call", l_total:"Indicative overall timing", u_weeks:"weeks",
  t_copied:"Brief copied to the clipboard.", t_copyfail:"Copy failed: select the text below and copy it.",
  t_send:"The brief goes straight to the Arel team, who will get back to you. You can also copy it and write to us at info@arelgroup.it.",
  t_demo:"The AI isn't available in this view: here is a demo example.",
  e_rate:"Too many requests in a row. Try again in a few minutes.", e_session:"Session expired: sign in to Claude again and retry.",
  e_refused:"The AI can't process this request. Try rephrasing the idea.", e_json:"The answer came back incomplete. Press Try again to regenerate it.",
  e_generic:"Connection interrupted. Try again.", e_toolong:"Text too long: shorten the description.",
  work_eyebrow:"Work", work_title:"Real projects, <em>in production.</em>", mock_area:"dealer area", mock_s1:"summer",
  w1_tag:"B2B portal · E-commerce", w1_d:"B2B portal selling tyres to dealers, with the supplier's catalog integrated.",
  w_res:"Result: [to add]", w_ph_tag:"[Area]", w_shot:"[screenshot]", w2_d:"[What you built for Renergia, in one line.]", w3_t:"[Project 3]", w_ph_d:"[The client's problem and what you built, in one line.]",
  met_eyebrow:"Method", met_title:"You always know what's happening, <em>and when.</em>",
  m1_t:"Idea", m1_d:"A call or the plan from the AI Lab.",
  m2_t:"Analysis", m2_d:"A clear quote, phases and timing.",
  m3_t:"Build", m3_d:"Short sprints, a demo at every step.",
  m4_t:"Launch", m4_d:"Live, with ongoing support.",
  faq_eyebrow:"FAQ", faq_title:"The answers, <em>before the questions.</em>",
  faq_desc:"Can't find yours? Write to us: a person will answer.",
  f1q:"How much does custom software cost?", f1a:"It depends on features, integrations and volumes. After a first analysis you get a clear quote, with phases and timing. The AI Lab gives you a free, instant idea of the project's size.",
  f2q:"How long does it take?", f2a:"Typically a website or an integration takes a few weeks, a full management system a few months. We work in short sprints with a demo at every step.",
  f3q:"Can you connect the software I already use?", f3a:"Yes: e-commerce, marketplaces, management and invoicing tools integrate via APIs or automation. If a system has limits, we tell you before we start.",
  f4q:"Do you also manage Amazon and other marketplaces?", f4a:"Yes, from catalog setup to syncing prices, stock and orders with your store or management system.",
  f5q:"What happens after launch?", f5a:"We stay by your side with support and new features when you need them.",
  f6q:"Do you work in English?", f6a:"Yes, we run projects in Italian and English.",
  cta_eyebrow:"Start now", cta_l1:"Your idea deserves", cta_l2:"a real project.",
  cta_d:"2 minutes, free. If you like it, we build it.", cta_btn:"Get your free project",
  c_email:"Email", c_phone:"Phone",
  foot_d:"Custom software and AI solutions for companies that want to grow.",
  fh1:"Solutions", fh2:"Resources", fh3:"Contact",
  fl1:"E-commerce and marketplaces", fl2:"Amazon management", fl3:"AI agents and automation", fl4:"Custom software and management systems", fl5:"iOS and Android apps", fl6:"AI Lab", fl7:"Work", fl8:"FAQ",
  pick_k:"The fix", pick_cta:"Solve it free in the AI Lab", swipe:"Swipe", p1_l:"I copy data by hand", p1_t:"Data that updates itself.", p1_d:"We connect Excel, your system and your store: no copy-paste, no errors.", p2_l:"Amazon orders by hand", p2_t:"Every channel in one dashboard.", p2_d:"Amazon and marketplace orders, stock and shipping always in sync.", p3_l:"My site brings no clients", p3_t:"A site that turns visits into enquiries.", p3_d:"Fast, easy to find on Google, built to convert.", p4_l:"My software holds me back", p4_t:"A system built around you.", p4_d:"Designed on your processes, not the other way round.", p5_l:"AI: where do I start?", p5_t:"One concrete case, one measurable result.", p5_d:"We start from a real process: an agent, an automation or an assistant working for you.", p6_l:"I have no app", p6_t:"Your app on the stores.", p6_d:"iOS and Android, designed for your customers.", pp1:"I spend too much time copying data between Excel, my system and my store. I'd like ", pp2:"I handle Amazon and marketplace orders by hand. I'd like ", pp3:"My website brings no clients. I'd like ", pp4:"The software I use doesn't fit how we work. I need ", pp5:"I'd like to use AI in my company to ", pp6:"I'd like an app for my customers that ",
  l_lead:"Want to build it? Leave your details: we'll review it together.", f_name:"Name and company", f_email:"Email", f_phone:"Phone (optional)", f_consent:"I have read the privacy notice and agree to be contacted.", privacy_link:"Privacy notice", b_submit:"Send the brief", t_sent:"Brief sent. We'll get back to you soon.", t_senderr:"Sending failed. Try again, or copy the brief and write to us.", e_name:"Please enter your name.", e_email:"Please enter a valid email.", e_consent:"We need your consent to contact you.", e_offtopic:"The AI Lab designs software, e-commerce, apps and automation. Describe a project for your business.", e_limit:"You've reached today's project limit. Write to us: we'll answer.", e_fast:"One moment: wait a few seconds and try again.", e_busy:"The AI Lab is very busy right now. Try again later or write to us.", privacy_hint:"Don't enter personal or confidential data.", o5_k:"Forward Deployed Engineer", o5_t:"An AI engineer inside your team", o5_d:"Works with your people, on your data and systems, until the solution is in production.", o5_i1:"On your real data and systems", o5_i2:"From prototype to production", o5_i3:"Trains your team", o5_i4:"Per project or ongoing", o5_cta:"Describe your need", pf5:"I'd like an AI engineer in my team to ", f7q:"What is a Forward Deployed Engineer?", f7a:"One of our engineers working with your team, on your data and systems, until the AI solution or software is in production. Useful when you need ongoing technical expertise without hiring.", fl9:"Forward Deployed Engineer", foot_proto:"Preview · not indexed"
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
const pickPanel = $('#pickPanel'), pickTabs = $$('.pick-tab');
function renderPick(k, animate){
  curPain = k;
  pickTabs.forEach(t => { const on = t.dataset.pain === k; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; });
  $('#pickT').textContent = T(k + '_t'); $('#pickD').textContent = T(k + '_d');
  $('#pickCta').dataset.prefill = 'pp' + k.slice(1);
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

applyLang();
})();

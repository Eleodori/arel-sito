// Pagine servizio in tutte le lingue: indice, percorsi, alternative hreflang e testi comuni.
// Contenuti: servizi.js (it), services-en.js (en), services-fr.js (fr), services-de.js (de).
// In tedesco le pagine esistono per coerenza e indicizzazione, ma dicono chiaramente che non lavoriamo in tedesco.
import { SERVIZI } from './servizi.js';
import { SERVICES_EN } from './services-en.js';
import { SERVICES_FR } from './services-fr.js';
import { SERVICES_DE } from './services-de.js';

export const SVC_LANGS = ['it', 'en', 'fr', 'de'];
export const SERVICES = { it: SERVIZI.map((s) => ({ ...s, id: s.slug })), en: SERVICES_EN, fr: SERVICES_FR, de: SERVICES_DE };
export const HUB = { it: '/servizi/', en: '/en/services/', fr: '/fr/services/', de: '/de/leistungen/' };

export const svcPath = (lang, s) => HUB[lang] + s.slug + '/';
export const findSvc = (lang, id) => (SERVICES[lang] || []).find((s) => s.id === id);
export const svcUrl = (lang, id) => { const s = findSvc(lang, id); return s ? svcPath(lang, s) : null; };
/** Stessa pagina servizio nelle altre lingue: [{ l, path }] */
export const svcAlternates = (id) => SVC_LANGS.map((l) => { const s = findSvc(l, id); return s && { l, path: svcPath(l, s) }; }).filter(Boolean);
export const hubAlternates = () => SVC_LANGS.map((l) => ({ l, path: HUB[l] }));
/** Link del selettore lingua: le lingue senza la pagina tornano alla loro home (gestito da LangSwitch). */
export const switchHrefs = (alts) => Object.fromEntries(alts.map((a) => [a.l, a.path]));

/** Prezzo "da" per le schede: 3.500 € (it, de) · €3,500 · 3 500 € */
export function priceFrom(lang, n) {
  if (lang === 'en') return '€' + n.toLocaleString('en-GB');
  const sep = lang === 'fr' ? ' ' : '.';
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep) + ' €';
}

export const UI = {
  it: {
    crumbs: 'Percorso', home: 'Home', services: 'Servizi', allServices: 'Tutti i servizi', more: 'prezzi e tempi',
    cta: "Richiedi l'analisi gratuita", priceLink: 'Quanto costa', factors: 'Cosa fa variare il prezzo', how: 'Come lavoriamo',
    sep: ': ', faq: 'Domande frequenti', related: 'Altri servizi', lab: 'Prova il Lab AI', country: 'Italia', from: 'da', month: '/ mese',
    steps: [
      ['Analisi gratuita', '30 minuti con uno sviluppatore: capiamo cosa ti serve e qual è la strada giusta.'],
      ['Preventivo scritto', 'Funzioni, fasi, tempi e costi messi nero su bianco. Il preventivo è gratuito.'],
      ['Sviluppo a passi brevi', 'Una demo a ogni passo, da provare con i vostri dati veri.'],
      ['Avvio e assistenza', 'Importiamo i dati, formiamo il team e restiamo al vostro fianco dopo il lancio.'],
    ],
    hub: {
      title: 'Servizi: software, e-commerce, AI e app · Arel Group',
      description: 'I servizi di Arel Group: gestionali su misura, e-commerce, gestione Amazon, agenti AI, migrazioni e app. Prezzi chiari e analisi gratuita di 30 minuti.',
      h1: ['I nostri servizi,', 'con prezzi e tempi chiari.'],
      lead: 'Sviluppiamo software su misura e soluzioni AI per PMI di tutta Italia. Per ogni servizio trovi cosa facciamo, quanto costa, quanto tempo serve e le domande più frequenti.',
      card: 'Prezzi, tempi e domande',
      cta: ['Non sai da dove partire?', "In 30 minuti con uno sviluppatore capiamo cosa ti serve davvero e quale servizio fa per te. L'analisi è gratuita e senza impegno."],
    },
  },
  en: {
    crumbs: 'Breadcrumb', home: 'Home', services: 'Services', allServices: 'All services', more: 'prices and timelines',
    cta: 'Request a free analysis', priceLink: 'Pricing', factors: 'What affects the price', how: 'How we work',
    sep: ': ', faq: 'Frequently asked questions', related: 'Other services', lab: 'Try the AI Lab', country: 'Italy', from: 'from', month: '/ month',
    steps: [
      ['Free analysis', '30 minutes with a developer: we work out what you need and the right route.'],
      ['Written quote', 'Features, phases, timelines and costs in black and white. The quote is free.'],
      ['Development in short steps', 'A demo at every step, to try with your real data.'],
      ['Launch and support', 'We import the data, train your team and stay by your side after launch.'],
    ],
    hub: {
      title: 'Services: software, e-commerce, AI and apps · Arel Group',
      description: 'Arel Group services: custom software, e-commerce, Amazon management, AI agents, migrations and apps. Clear prices and a free 30-minute analysis.',
      h1: ['Our services,', 'with clear prices and timelines.'],
      lead: 'We build custom software and AI solutions for SMEs all over Italy. For each service you will find what we do, what it costs, how long it takes and the most common questions.',
      card: 'Prices, timelines and FAQ',
      cta: ['Not sure where to start?', 'In 30 minutes with a developer we work out what you really need and which service fits. The analysis is free and with no obligation.'],
    },
  },
  fr: {
    crumbs: 'Fil d’Ariane', home: 'Accueil', services: 'Services', allServices: 'Tous les services', more: 'prix et délais',
    cta: 'Demander l’analyse gratuite', priceLink: 'Tarifs', factors: 'Ce qui fait varier le prix', how: 'Notre méthode',
    sep: '\u00a0: ', faq: 'Questions fréquentes', related: 'Autres services', lab: 'Essayer le Lab IA', country: 'Italie', from: 'dès', month: '/ mois',
    steps: [
      ['Analyse gratuite', '30 minutes avec un développeur : nous voyons ce dont vous avez besoin et la bonne voie.'],
      ['Devis écrit', 'Fonctions, étapes, délais et coûts noir sur blanc. Le devis est gratuit.'],
      ['Développement par petites étapes', 'Une démo à chaque étape, à tester avec vos vraies données.'],
      ['Lancement et assistance', 'Nous importons les données, formons l’équipe et restons à vos côtés après le lancement.'],
    ],
    hub: {
      title: 'Nos services : logiciels, e-commerce, IA, apps · Arel Group'.replace(' :', ' :'),
      description: 'Services d’Arel Group : logiciels de gestion, e-commerce, gestion Amazon, agents IA, migrations et applications. Prix clairs et analyse gratuite.',
      h1: ['Nos services,', 'avec des prix et des délais clairs.'],
      lead: 'Nous développons des logiciels sur mesure et des solutions IA pour les PME de toute l’Italie. Pour chaque service, vous trouverez ce que nous faisons, ce que cela coûte, les délais et les questions les plus fréquentes.',
      card: 'Prix, délais et questions',
      cta: ['Vous ne savez pas par où commencer ?', 'En 30 minutes avec un développeur, nous voyons ce dont vous avez vraiment besoin et quel service vous convient. L’analyse est gratuite et sans engagement.'],
    },
  },
  de: {
    crumbs: 'Brotkrümelnavigation', home: 'Startseite', services: 'Leistungen', allServices: 'Alle Leistungen', more: 'Preise und Dauer',
    cta: 'Kostenlose Analyse anfragen', priceLink: 'Preise', factors: 'Was den Preis beeinflusst', how: 'So arbeiten wir',
    sep: ': ', faq: 'Häufige Fragen', related: 'Weitere Leistungen', lab: 'KI-Lab ausprobieren', country: 'Italien', from: 'ab', month: '/ Monat',
    steps: [
      ['Kostenlose Analyse', '30 Minuten mit einem Entwickler: Wir klären, was Sie brauchen und welcher Weg der richtige ist.'],
      ['Schriftliches Angebot', 'Funktionen, Phasen, Dauer und Kosten schwarz auf weiß. Das Angebot ist kostenlos.'],
      ['Entwicklung in kurzen Schritten', 'Bei jedem Schritt eine Demo, die Sie mit Ihren echten Daten testen.'],
      ['Start und Betreuung', 'Wir übernehmen die Daten, schulen Ihr Team und bleiben nach dem Start an Ihrer Seite.'],
    ],
    hub: {
      title: 'Leistungen: Software, E-Commerce, KI und Apps · Arel Group',
      description: 'Leistungen von Arel Group: Unternehmenssoftware, E-Commerce, Amazon-Betreuung, KI-Agenten, Migrationen und Apps. Klare Preise und kostenlose Analyse.',
      h1: ['Unsere Leistungen,', 'mit klaren Preisen und Zeiten.'],
      lead: 'Wir entwickeln maßgeschneiderte Software und KI-Lösungen für KMU in ganz Italien. Zu jeder Leistung finden Sie, was wir tun, was es kostet, wie lange es dauert und die häufigsten Fragen. Gespräche führen wir auf Italienisch, Englisch oder Französisch.',
      card: 'Preise, Dauer und Fragen',
      cta: ['Sie wissen nicht, wo Sie anfangen sollen?', 'In 30 Minuten mit einem Entwickler klären wir, was Sie wirklich brauchen und welche Leistung passt. Die Analyse ist kostenlos und unverbindlich, auf Italienisch, Englisch oder Französisch.'],
    },
  },
};

// Consenso ai cookie di statistica + Google Analytics 4.
// GA4 si carica SOLO dopo "Accetta" (e solo in produzione: data-ga è vuoto su anteprime e branch).
// "Rifiuta" non carica nulla. La scelta resta in localStorage; il link "Preferenze cookie" riapre il banner.
const KEY = 'arel-ck';
const bar = document.getElementById('ckb');
const GA = bar ? bar.dataset.ga : '';
const get = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
const set = (v) => { try { localStorage.setItem(KEY, v); } catch (e) { /* storage bloccato: vale solo per questa pagina */ } };
let loaded = false;

function loadGA() {
  if (loaded || !GA) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  window.gtag('js', new Date());
  // niente Google Signals né personalizzazione annunci; cookie al massimo 13 mesi
  window.gtag('config', GA, { allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: 33696000 });
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA);
  document.head.appendChild(s);
}

// Revoca: ferma la raccolta e cancella i cookie _ga di questo dominio.
function clearGA() {
  if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
  const host = location.hostname;
  const domains = ['', host, '.' + host.replace(/^www\./, '')];
  document.cookie.split(';').map((c) => c.trim().split('=')[0]).filter((n) => /^_ga/.test(n))
    .forEach((n) => domains.forEach((d) => { document.cookie = n + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : ''); }));
}

// Eventi del sito (form inviati, Lab AI): partono solo se GA è attivo.
window.arelTrack = (name, params) => { if (loaded && window.gtag) window.gtag('event', name, params || {}); };

function choose(v) {
  set(v);
  bar.hidden = true;
  if (v === 'granted') loadGA(); else clearGA();
}

if (bar) {
  const saved = get();
  if (saved === 'granted') loadGA();
  else if (saved !== 'denied') bar.hidden = false;
  bar.addEventListener('click', (e) => { const b = e.target.closest('[data-ck]'); if (b) choose(b.dataset.ck); });
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-ck-open]')) { bar.hidden = false; bar.querySelector('[data-ck]').focus(); return; }
    const a = e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (a) window.arelTrack('contact_click', { method: a.protocol === 'tel:' ? 'phone' : 'email' });
  });
}

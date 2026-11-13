(function () {
  'use strict';
  var CFG = window.WEDDING_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var NS = 'http://www.w3.org/2000/svg';

  /* ------------------------------------------------------------------
     TRANSLATIONS  (Sinhala wording is a draft – please have a Sinhala
     speaker proof-read it before sending)
  ------------------------------------------------------------------ */
  var T = {
    en: {
      gate_for: 'With love, for', gate_tap: 'Tap the seal to view invitation', guest_default: 'Our Dear Guest',
      tagline: 'Together with our families', n_bride: 'Rumesha', n_groom: 'Charith', and: 'and', amp: '&',
      inv_title: 'You are invited',
      parents1: 'Mr. & Mrs. Raveendra Kumarasekara', together: 'Together with',
      parents2: 'Mr. & Mrs. Shantha Fernando', request: 'Request the honour of the presence of',
      marriage: 'At the marriage of their beloved children',
      dow: 'Monday', month: 'December', from: 'From 9.30 am onwards',
      cd_d: 'Days', cd_h: 'Hours', cd_m: 'Minutes', cd_s: 'Seconds', cd_done: 'Today is the day!',
      cal_google: 'Add to Google Calendar', cal_ics: 'Apple / Outlook (.ics)',
      sch_title: 'The Wedding Day', sch1_t: 'Guests arrive', sch1_d: 'Welcome & warm greetings',
      sch2_t: 'Poruwa Ceremony', sch2_d: 'The traditional wedding ceremony',
      at: 'At', venue: 'Hotel Green Court', hall: 'Emperor’s Court', venue_sub: 'Homagama', map: 'Open in Maps',
      rsvp_title: 'RSVP', rsvp_lead: 'Your presence would make our celebration even more special. Kindly let us know whether you will be joining us.',
      f_name: 'Your name', f_att: 'Will you attend?', f_yes: 'Joyfully accept', f_no: 'Regretfully decline',
      f_msg: 'A little note for the couple <em>(optional)</em>',
      f_send: 'Send RSVP', f_sending: 'Sending…', f_edit: 'Send another reply',
      thanks_t: 'Thank you!', thanks_yes: 'We can’t wait to celebrate with you, {n}!',
      thanks_no: 'We will miss you, {n}. Thank you for letting us know.',
      err_name: 'Please enter your name.', err_att: 'Please tell us if you can attend.',
      err_net: 'Something went wrong. Please check your connection and try again.',
      contact: 'For any queries, please contact'
    },
    si: {
      gate_for: 'ආදරයෙන්, ඔබ වෙනුවෙන්', gate_tap: 'ආරාධනාව බැලීමට මුද්‍රාව ස්පර්ශ කරන්න', guest_default: 'ආදරණීය ඔබ',
      tagline: 'අපගේ පවුල් සමඟ එක්ව', n_bride: 'රුමේෂා', n_groom: 'චරිත්', and: 'සහ', amp: '&',
      inv_title: 'ඔබට ආරාධනා',
      parents1: 'රවීන්ද්‍ර කුමාරසේකර මහතා සහ මහත්මිය', together: 'සමඟ එක්ව',
      parents2: 'ශාන්ත ප්‍රනාන්දු මහතා සහ මහත්මිය', request: 'ඔබගේ පැමිණීමෙන් අපගේ උත්සවය අලංකාර කරන ලෙස ගෞරවයෙන් ඉල්ලා සිටිමු',
      marriage: 'ඔවුන්ගේ ආදරණීය දරුවන්ගේ විවාහ මංගල්‍යයට',
      dow: 'සඳුදා', month: 'දෙසැම්බර්', from: 'පෙ.ව. 9.30 සිට',
      cd_d: 'දින', cd_h: 'පැය', cd_m: 'මිනිත්තු', cd_s: 'තත්පර', cd_done: 'අද මංගල දිනයයි!',
      cal_google: 'Google දින දසුනට එක් කරන්න', cal_ics: 'Apple / Outlook (.ics)',
      sch_title: 'මංගල දිනය', sch1_t: 'ආගන්තුකයන් පැමිණීම', sch1_d: 'පිළිගැනීම සහ සුභ පැතුම්',
      sch2_t: 'පෝරුව චාරිත්‍රය', sch2_d: 'සම්ප්‍රදායික මංගල චාරිත්‍රය',
      at: 'ස්ථානය', venue: 'හෝටල් ග්‍රීන් කෝට්', hall: 'එම්පරර්ස් කෝට්', venue_sub: 'හෝමාගම', map: 'සිතියමේ විවෘත කරන්න',
      rsvp_title: 'ඔබගේ පිළිතුර', rsvp_lead: 'ඔබගේ පැමිණීම අපගේ මංගල්‍යය තවත් විශේෂ කරනු ඇත. ඔබ අප සමඟ එක්වන්නේද යන්න කරුණාකර දන්වන්න.',
      f_name: 'ඔබගේ නම', f_att: 'ඔබ පැමිණෙනවාද?', f_yes: 'සතුටින් පැමිණෙමි', f_no: 'කනගාටුවෙන් පැමිණිය නොහැක',
      f_msg: 'මනාලයාට සහ මනාලියට කුඩා සටහනක් <em>(අවශ්‍ය නම්)</em>',
      f_send: 'පිළිතුර යවන්න', f_sending: 'යවමින්…', f_edit: 'නැවත පිළිතුරක් යවන්න',
      thanks_t: 'ස්තූතියි!', thanks_yes: '{n}, ඔබ සමඟ සැමරීමට අපි බලා සිටිමු!',
      thanks_no: '{n}, ඔබව අපට මග හැරෙනු ඇත. දැනුම් දීමට ස්තූතියි.',
      err_name: 'කරුණාකර ඔබගේ නම ඇතුළත් කරන්න.', err_att: 'කරුණාකර පැමිණෙන්නේද නැද්ද යන්න තෝරන්න.',
      err_net: 'දෝෂයක් සිදු විය. අන්තර්ජාල සම්බන්ධතාව පරීක්ෂා කර නැවත උත්සාහ කරන්න.',
      contact: 'වැඩි විස්තර සඳහා අමතන්න'
    }
  };
  var lang = 'en';
  try { lang = localStorage.getItem('wd_lang') || 'en'; } catch (e) {}
  if (!T[lang]) lang = 'en';

  /* ------------------------------------------------------------------
     GUEST NAME from link  (?to=Perera-Family  or  ?to=Kamal%20%26%20Nimali)
  ------------------------------------------------------------------ */
  var params = new URLSearchParams(location.search);
  var rawGuest = (params.get('to') || params.get('guest') || '').trim().slice(0, 80);
  var guest = rawGuest;
  if (guest && !/\s/.test(guest)) guest = guest.replace(/[-_]+/g, ' ');
  if (guest && guest === guest.toLowerCase()) guest = guest.replace(/\b\p{L}/gu, function (c) { return c.toUpperCase(); });

  function guestText() { return guest || T[lang].guest_default; }

  /* ------------------------------------------------------------------
     i18n
  ------------------------------------------------------------------ */
  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    $$('[data-i18n]').forEach(function (el) {
      var v = T[l][el.getAttribute('data-i18n')];
      if (v == null) return;
      if (/<em>/.test(v)) el.innerHTML = v; else el.textContent = v;
    });
    $('#gateName').textContent = guestText();
    $('#guestName').textContent = guestText();
    $$('.lang button').forEach(function (b) { b.classList.toggle('active', b.dataset.lang === l); });
    try { localStorage.setItem('wd_lang', l); } catch (e) {}
  }
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { applyLang(b.dataset.lang); }); });

  /* ------------------------------------------------------------------
     SVG helpers – gold gradient + lotus line-art
  ------------------------------------------------------------------ */
  var defs = document.createElementNS(NS, 'svg');
  defs.setAttribute('width', '0'); defs.setAttribute('height', '0');
  defs.setAttribute('style', 'position:absolute');
  defs.innerHTML = '<defs><linearGradient id="goldG" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="240" y2="320">' +
    '<stop offset="0" stop-color="#a8741f"/><stop offset=".45" stop-color="#e8c76d"/><stop offset=".7" stop-color="#c9993a"/><stop offset="1" stop-color="#a8741f"/></linearGradient></defs>';
  document.body.appendChild(defs);

  var idx = 0;
  function P(g, d, opts) {
    opts = opts || {};
    var p = document.createElementNS(NS, 'path');
    p.setAttribute('d', d);
    p.setAttribute('pathLength', '1');
    p.setAttribute('class', 'draw' + (opts.fill ? ' fillable' : ''));
    if (opts.t) p.setAttribute('transform', opts.t);
    p.style.setProperty('--i', opts.i != null ? opts.i : idx++);
    g.appendChild(p);
  }
  var PETAL = 'M0 0 C-16 -16 -17 -48 0 -74 C17 -48 16 -16 0 0Z';
  var VEIN = 'M0 -8 C-2 -30 -2 -48 0 -62';
  function bloom(g, cx, cy, s, rot, budOnly) {
    var base = 'translate(' + cx + ' ' + cy + ') rotate(' + rot + ') scale(' + s + ')';
    var outer = budOnly ? [[-26, .8], [26, .8], [0, 1]] : [[-66, .8], [66, .8], [-44, .95], [44, .95], [-22, 1.02], [22, 1.02], [0, 1.08]];
    outer.forEach(function (o) {
      var t = base + ' rotate(' + o[0] + ') scale(' + o[1] + ')';
      P(g, PETAL, { t: t, fill: true }); P(g, VEIN, { t: t });
    });
    if (!budOnly) [[-30, .55], [30, .55], [0, .62]].forEach(function (o) {
      P(g, PETAL, { t: base + ' rotate(' + o[0] + ') scale(' + o[1] + ')', fill: true });
    });
    P(g, 'M-34 6 Q0 30 34 6', { t: base });
  }
  function leaf(g, x, y, s, rot) {
    P(g, 'M0 0 C-14 -14 -14 -40 0 -62 C14 -40 14 -14 0 0Z', { t: 'translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + s + ')', fill: true });
    P(g, 'M0 -4 L0 -52', { t: 'translate(' + x + ' ' + y + ') rotate(' + rot + ') scale(' + s + ')' });
  }
  function buildLotus(g) {
    idx = 0;
    P(g, 'M38 320 C50 250 92 200 122 118'); P(g, 'M58 304 C46 262 44 226 46 192'); P(g, 'M70 300 C100 272 140 246 152 208');
    leaf(g, 60, 262, .9, -70); leaf(g, 96, 232, .7, 60); leaf(g, 52, 300, .8, -110);
    bloom(g, 128, 104, 1.08, 14); bloom(g, 46, 176, .78, -24); bloom(g, 152, 206, .42, 24, true);
  }
  function buildFootLotus() {
    var g = $('#footLotus'); idx = 0;
    leaf(g, 120, 140, 1.1, -75); leaf(g, 120, 140, 1.1, 75); leaf(g, 120, 140, .8, -105); leaf(g, 120, 140, .8, 105);
    bloom(g, 120, 108, .92, 0);
  }
  buildLotus($('#heroLotus')); $$('.deco').forEach(buildLotus); buildFootLotus();

  /* ------------------------------------------------------------------
     Gate → open
  ------------------------------------------------------------------ */
  var gate = $('#gate');
  function openGate() {
    if (gate.classList.contains('open')) return;
    gate.classList.add('open');
    document.body.classList.remove('locked');
    document.body.classList.add('opened');
    setTimeout(function () { gate.classList.add('gone'); }, 1900);
    startPetals();
    if (wantMusic) playMusic(); else mBtn.hidden = false;
    window.scrollTo(0, 0);
  }
  $('#openBtn').addEventListener('click', openGate);

  /* Background music – starts when the seal is tapped (browsers require a tap) */
  var bgm = $('#bgm'), mBtn = $('#musicBtn'), wantMusic = true;
  try { wantMusic = localStorage.getItem('wd_music') !== 'off'; } catch (e) {}
  function setMusicUI() { mBtn.classList.toggle('off', bgm.paused); }
  function playMusic() {
    bgm.volume = 0.55; mBtn.hidden = false;
    var pr = bgm.play(); if (pr && pr.catch) pr.catch(function () {});
    setMusicUI();
  }
  mBtn.addEventListener('click', function () {
    var on = bgm.paused;
    if (on) playMusic(); else bgm.pause();
    try { localStorage.setItem('wd_music', on ? 'on' : 'off'); } catch (e) {}
    setMusicUI();
  });
  bgm.addEventListener('play', setMusicUI);
  bgm.addEventListener('pause', setMusicUI);
  bgm.addEventListener('error', function () { mBtn.hidden = true; });

  /* ------------------------------------------------------------------
     Scroll reveal
  ------------------------------------------------------------------ */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .15, rootMargin: '0px 0px -6% 0px' }) : null;
  $$('.reveal,.couple-stage,.orn,.deco').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });

  /* ------------------------------------------------------------------
     Countdown
  ------------------------------------------------------------------ */
  var target = new Date(CFG.EVENT_START).getTime();
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function tick() {
    var d = target - Date.now();
    if (d <= 0) { $('#countdown').hidden = true; $('#cdDone').hidden = false; return; }
    $('#cd-d').textContent = Math.floor(d / 864e5);
    $('#cd-h').textContent = pad(Math.floor(d % 864e5 / 36e5));
    $('#cd-m').textContent = pad(Math.floor(d % 36e5 / 6e4));
    $('#cd-s').textContent = pad(Math.floor(d % 6e4 / 1e3));
  }
  tick(); setInterval(tick, 1000);

  /* ------------------------------------------------------------------
     Add to calendar
  ------------------------------------------------------------------ */
  function stamp(s) { return new Date(s).toISOString().replace(/[-:]/g, '').replace(/\.\d+/, ''); }
  $('#calGoogle').addEventListener('click', function () {
    var u = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent(CFG.EVENT_TITLE) +
      '&dates=' + stamp(CFG.EVENT_START) + '/' + stamp(CFG.EVENT_END) +
      '&details=' + encodeURIComponent('Poruwa ceremony at 10.00 am. Guests from 9.30 am onwards.') +
      '&location=' + encodeURIComponent(CFG.EVENT_PLACE);
    window.open(u, '_blank', 'noopener');
  });
  $('#calIcs').addEventListener('click', function () {
    var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding Invitation//EN', 'BEGIN:VEVENT',
      'UID:rumesha-charith-20261207@wedding', 'DTSTAMP:' + stamp(new Date()),
      'DTSTART:' + stamp(CFG.EVENT_START), 'DTEND:' + stamp(CFG.EVENT_END),
      'SUMMARY:' + CFG.EVENT_TITLE, 'LOCATION:' + CFG.EVENT_PLACE.replace(/,/g, '\\,'),
      'DESCRIPTION:Poruwa ceremony at 10.00 am. Guests from 9.30 am onwards.',
      'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:Wedding tomorrow', 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    a.download = 'rumesha-charith-wedding.ics';
    document.body.appendChild(a); a.click(); a.remove();
  });

  /* ------------------------------------------------------------------
     RSVP
  ------------------------------------------------------------------ */
  var form = $('#rsvpForm'), errEl = $('#formErr'), sendBtn = $('#sendBtn');
  var KEY = 'wd_rsvp_' + (rawGuest || 'generic');
  if (guest) $('#fName').value = guest;

  function showThanks(name, attending, demo) {
    var msg = T[lang][attending === 'Yes' ? 'thanks_yes' : 'thanks_no'].replace('{n}', name);
    $('#thanksMsg').textContent = msg + (demo ? '  (Demo mode – not saved yet)' : '');
    form.hidden = true; $('#thanks').hidden = false;
  }
  $('#editRsvp').addEventListener('click', function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    $('#thanks').hidden = true; form.hidden = false;
  });
  try {
    var prev = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (prev && CFG.RSVP_ENDPOINT) showThanks(prev.name, prev.attending, false);
  } catch (e) {}

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    errEl.hidden = true;
    var name = form.name.value.trim(), att = form.attending.value;
    if (!name) { errEl.textContent = T[lang].err_name; errEl.hidden = false; form.name.focus(); return; }
    if (!att) { errEl.textContent = T[lang].err_att; errEl.hidden = false; return; }
    if (form.website.value) return; // honeypot – bots only

    var payload = {
      link: rawGuest, name: name, attending: att,
      message: form.message.value.trim(), lang: lang
    };
    sendBtn.disabled = true;
    var label = sendBtn.firstElementChild; label.textContent = T[lang].f_sending;
    var done = function (demo) {
      try { localStorage.setItem(KEY, JSON.stringify({ name: name, attending: att })); } catch (e) {}
      showThanks(name, att, demo);
      sendBtn.disabled = false; label.textContent = T[lang].f_send;
    };
    if (!CFG.RSVP_ENDPOINT) { console.log('[DEMO] RSVP payload', payload); setTimeout(function () { done(true); }, 900); return; }
    // text/plain keeps this a "simple" request, so Google Apps Script accepts it without CORS pre-flight
    fetch(CFG.RSVP_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) })
      .then(function () { done(false); })
      .catch(function () {
        errEl.textContent = T[lang].err_net; errEl.hidden = false;
        sendBtn.disabled = false; label.textContent = T[lang].f_send;
      });
  });

  /* ------------------------------------------------------------------
     Falling petals
  ------------------------------------------------------------------ */
  var started = false;
  function startPetals() {
    if (started || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    started = true;
    var c = $('#petals'), x = c.getContext('2d'), W, H, dpr = Math.min(devicePixelRatio || 1, 2);
    function size() { W = c.width = innerWidth * dpr; H = c.height = innerHeight * dpr; }
    size(); addEventListener('resize', size);
    var cols = ['#e8c76d', '#f4d9a0', '#f7c6c9', '#fff0d6', '#d9a35a'];
    var N = innerWidth < 600 ? 16 : 28, ps = [];
    function mk(init) {
      return { x: Math.random() * W, y: init ? Math.random() * H : -30 * dpr, s: (6 + Math.random() * 9) * dpr,
        vy: (.4 + Math.random() * .8) * dpr, vx: (Math.random() - .5) * .5 * dpr, r: Math.random() * 6.28,
        vr: (Math.random() - .5) * .04, ph: Math.random() * 6.28, c: cols[Math.random() * cols.length | 0], a: .35 + Math.random() * .4 };
    }
    for (var i = 0; i < N; i++) ps.push(mk(true));
    (function loop() {
      x.clearRect(0, 0, W, H);
      ps.forEach(function (p, i) {
        p.y += p.vy; p.ph += .02; p.x += p.vx + Math.sin(p.ph) * .6 * dpr; p.r += p.vr;
        if (p.y > H + 30) ps[i] = mk(false);
        x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.scale(1, .55 + .45 * Math.sin(p.ph));
        x.globalAlpha = p.a; x.fillStyle = p.c; x.beginPath();
        x.moveTo(0, -p.s); x.quadraticCurveTo(p.s * .8, 0, 0, p.s); x.quadraticCurveTo(-p.s * .8, 0, 0, -p.s); x.fill(); x.restore();
      });
      requestAnimationFrame(loop);
    })();
  }

  applyLang(lang);
})();

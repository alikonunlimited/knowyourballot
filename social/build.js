// KnowYourBallot social "Ad Translator" videos: renders 30–45 s vertical MP4s with sound effects,
// burned-in text, captions (.srt), thumbnails and platform copy (Facebook, Instagram, X).
// Usage: node social/build.js [outDir]   (default: social/out). Needs ffmpeg and python3 + numpy.
const fs = require('fs'), path = require('path'), { spawn, execFileSync } = require('child_process');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..');
const OUT = path.resolve(process.argv[2] || path.join(__dirname, 'out'));
const ONLY = process.argv[3] || '';
const FPS = 30, W = 1080, H = 1920;
const load = f => fs.readFileSync(path.join(root, 'data', f), 'utf8');
const { CANDIDATES, AD_CHECKS, FUNDERS } = new Function(
  load('candidates.js') + load('candidates-2026.js') + load('adchecks.js') + load('funders.js') +
  ';return {CANDIDATES, AD_CHECKS, FUNDERS};')();
const { VIDEOS, SITE } = require('./videos.js');
const COLOR = {'Accurate':'#2E9E68','Mostly accurate':'#5E9F3A','Missing context':'#D69408','Misleading':'#E0601A','False':'#D33A2C','Opinion':'#6B7686','Unverifiable':'#6B7686'};
const domain = u => { try { return new URL(u).hostname.replace(/^www\./,''); } catch(e) { return u; } };

/* ---------- resolve data & build timelines ---------- */
function resolve(v) {
  if (v.kind === 'translate') v.claims.forEach(c => {
    const a = AD_CHECKS.find(x => x.id === c.ref[0]); if (!a) throw new Error('unknown ad ' + c.ref[0]);
    const k = a.claims[c.ref[1]]; if (!k) throw new Error('unknown claim ' + c.ref);
    if (k.verdict !== c.verdict) throw new Error(`${v.id}: verdict mismatch for ${c.ref} (${c.verdict} vs ${k.verdict})`);
    c.rater = k.rater; c.src = k.src; c.adLink = a.adLink;
  });
  else v.items.forEach(it => { const f = FUNDERS[it.funder]; if (!f) throw new Error('unknown funder ' + it.funder); it.src = f.src; it.f = f; });
  const segs = []; let t = 0;
  const add = (type, dur, data) => { segs.push({ type, start: t, dur, data }); t += dur; };
  if (v.kind === 'translate') {
    add('intro', 4.4, {});
    v.claims.forEach((c, i) => add('claim', 8.6, { ...c, n: i + 1, of: v.claims.length }));
  } else {
    add('mintro', 4.0, {});
    v.items.forEach((it, i) => add('money', 6.8, { ...it, f: undefined, n: i + 1, of: v.items.length }));
  }
  add('outro', 4.4, {});
  v.segs = segs; v.dur = t;
  return v;
}

/* sound cues per segment (local times) */
function cues(v) {
  const ev = [];
  v.segs.forEach(s => {
    const T = x => +(s.start + x).toFixed(3);
    if (s.type === 'intro') { [0.55, 1.2, 1.85, 2.5].forEach(x => ev.push({ t: T(x + 0.25), k: 'tick' })); ev.push({ t: T(3.3), k: 'tada' }); }
    if (s.type === 'mintro') { ev.push({ t: T(0.1), k: 'thud' }); ev.push({ t: T(2.0), k: 'boing' }); }
    if (s.type === 'claim') {
      ev.push({ t: T(0), k: 'drone', d: 3.6 });
      [0.15, 0.55, 1.05].forEach((x, i) => ev.push({ t: T(x), k: 'dun', i }));
      ev.push({ t: T(3.6), k: 'scratch' }); ev.push({ t: T(3.95), k: 'pluck' });
      ev.push({ t: T(5.0), k: 'stamp' }); ev.push({ t: T(6.4), k: 'boop' });
    }
    if (s.type === 'money') { ev.push({ t: T(0.05), k: 'thud' }); ev.push({ t: T(1.4), k: 'boing' }); ev.push({ t: T(3.2), k: 'stamp' }); }
    if (s.type === 'outro') ev.push({ t: T(0.1), k: 'chord' });
  });
  return ev;
}

/* captions */
const ts = x => { const ms = Math.round(x * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60; return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')},${String(ms % 1000).padStart(3,'0')}`; };
function captions(v) {
  const L = [];
  const push = (a, b, text) => L.push([a, b, text]);
  v.segs.forEach(s => {
    const a = s.start, d = s.data;
    if (s.type === 'intro') { push(a, a + 3.3, 'Every political ad: ominous music, black-and-white slow motion, a grainy photo, RED ALL-CAPS TEXT.'); push(a + 3.3, a + s.dur, "Let's translate."); }
    if (s.type === 'mintro') { push(a, a + 2.0, '"Paid for by..." Political ad names, decoded.'); push(a + 2.0, a + s.dur, 'The name tells you who paid. Not who paid them.'); }
    if (s.type === 'claim') {
      push(a, a + 3.6, `The ad says: ${d.says} (Paid for by ${d.sponsor})`);
      push(a + 3.95, a + 6.4, `The record says: ${d.record}`);
      push(a + 6.4, a + s.dur, `Verdict: ${d.verdict}. ${d.quip}`);
    }
    if (s.type === 'money') {
      push(a, a + 1.4, `Paid for by: ${d.name}`);
      push(a + 1.4, a + 3.2, `Sounds like: ${d.soundsLike}`);
      push(a + 3.2, a + s.dur, `Actually: ${d.actually}`);
    }
    if (s.type === 'outro') push(a, a + s.dur, `Ads are built to persuade. The record is built to check. We check every side: ${SITE}. Ohio votes Nov. 3.`);
  });
  return L.map(([a, b, t], i) => `${i + 1}\n${ts(a)} --> ${ts(b)}\n${t}\n`).join('\n');
}

/* ---------- the animated page ---------- */
const PAGE = (v) => `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;overflow:hidden;font-family:'Inter',sans-serif;background:#0E1B16}
#stage{position:absolute;inset:0;overflow:hidden}
#bg{position:absolute;inset:0}
.bg-dark{background:radial-gradient(ellipse at 85% 0%,rgba(74,200,140,.24),transparent 55%),radial-gradient(ellipse at 0% 100%,rgba(27,77,62,.6),transparent 60%),#0E1B16}
.bg-ad{background:radial-gradient(ellipse at 50% 40%,#2a2a2a,#050505 75%)}
.bg-paper{background:radial-gradient(ellipse at 30% 20%,#FFFDF6,#EFE8D8 80%)}
#grain{position:absolute;inset:-100px;pointer-events:none;mix-blend-mode:overlay}
#vig{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 50%,transparent 45%,rgba(0,0,0,.75))}
#content{position:absolute;inset:0}
#top{position:absolute;left:80px;right:80px;top:110px;display:flex;justify-content:space-between;font:800 30px 'Inter Display';letter-spacing:.14em;text-transform:uppercase}
#prog{position:absolute;left:0;top:0;height:10px;background:#5DE8A2}
#flash{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
.h{font-family:'Inter Display';font-weight:900;letter-spacing:-.02em;line-height:1.02}
.k{font-family:'Inter Display';font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.abs{position:absolute;left:80px;right:110px}
.word{display:inline-block;opacity:0;margin-right:.22em}
.stamp{display:inline-block;font-family:'Inter Display';font-weight:900;text-transform:uppercase;letter-spacing:.03em;color:#fff;border-radius:22px;padding:22px 40px;font-size:88px;border:8px solid rgba(255,255,255,.85);box-shadow:0 0 0 8px currentColor}
.chk{display:flex;align-items:center;gap:34px;margin-top:48px;opacity:0;color:#F4F1EA}
.box{width:76px;height:76px;border:6px solid #F4F1EA;border-radius:16px;position:relative;flex:none}
.tickm{position:absolute;left:12px;top:-14px;font:900 86px 'Inter Display';color:#5DE8A2;transform:scale(0)}
.pill{display:inline-block;font:800 34px 'Inter Display';padding:12px 26px;border-radius:999px}
</style></head><body><div id="stage"><div id="bg" class="bg-dark"></div><canvas id="grain" width="${W/2}" height="${H/2}" style="width:${W+200}px;height:${H+200}px"></canvas><div id="vig"></div>
<div id="content"></div><div id="top"><span id="tl"></span><span id="tr"></span></div><div id="prog"></div><div id="flash"></div></div>
<script>
const V = ${JSON.stringify({ segs: v.segs, dur: v.dur, kicker: v.kicker, title: v.title, site: SITE, COLOR })};
const $ = s => document.querySelector(s);
const clamp = (x, a=0, b=1) => Math.max(a, Math.min(b, x));
const ease = x => 1 - Math.pow(1 - clamp(x), 3);
const back = x => { x = clamp(x); const c = 1.9; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
const ap = (u, at, d=.35) => ease((u - at) / d);
const esc = t => String(t).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const words = t => esc(t).split(' ').map(w => '<span class="word">' + w + '</span>').join('');
// deterministic grain
let seed = 1; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const gctx = $('#grain').getContext('2d'); const grains = [];
for (let g = 0; g < 6; g++) { const id = gctx.createImageData(${W/2}, ${H/2}); for (let i = 0; i < id.data.length; i += 4) { const v = rnd() * 255; id.data[i] = id.data[i+1] = id.data[i+2] = v; id.data[i+3] = 255; } grains.push(id); }
let cur = null, el = {};
function build(s) {
  const d = s.data, C = $('#content');
  if (s.type === 'intro') {
    C.innerHTML = '<div class="abs" style="top:430px"><div class="k" style="font-size:34px;color:#5DE8A2;margin-bottom:36px">' + esc(V.kicker) + '</div><div class="k" style="font-size:40px;color:#FFB84D">Every political ad comes with:</div>' +
      [['Ominous music','font-style:normal'],['Black-and-white slow motion','filter:grayscale(1);font-style:italic;letter-spacing:.01em'],['A grainy photo','opacity:.85'],['RED. ALL. CAPS.','color:#FF4B3A;text-transform:uppercase;font-weight:900']]
      .map(([t, st]) => '<div class="chk"><div class="box"><div class="tickm">✓</div></div><div class="h" style="font-size:68px;' + st + '">' + t + '</div></div>').join('') +
      '<div id="lt" class="h" style="font-size:120px;color:#5DE8A2;margin-top:120px;opacity:0">Let\\'s translate.</div></div>';
  }
  if (s.type === 'mintro') {
    C.innerHTML = '<div class="abs" style="top:470px"><div id="m1" style="background:#fff;color:#111;padding:40px 46px;border-radius:10px;font:800 54px Inter;letter-spacing:.02em;opacity:0">PAID FOR BY ...</div>' +
      '<div id="m2" class="h" style="font-size:104px;color:#F4F1EA;margin-top:70px;opacity:0">Political ad names, <span style="color:#FFB84D">decoded.</span></div>' +
      '<div id="m3" style="font-size:52px;line-height:1.3;color:rgba(244,241,234,.8);margin-top:60px;opacity:0">The name tells you who paid.<br><b style="color:#5DE8A2">Not who paid them.</b></div></div>';
  }
  if (s.type === 'claim') {
    C.innerHTML =
      '<div id="A" class="abs" style="top:500px;transform-origin:50% 40%">' +
        '<div class="k" style="font-size:32px;color:#FF4B3A">● The ad says <span style="color:rgba(255,255,255,.5);margin-left:18px;letter-spacing:.08em">♪ ominous music ♪</span></div>' +
        '<div id="says" class="h" style="font-size:' + (d.says.length > 62 ? 92 : 108) + 'px;color:#fff;text-transform:uppercase;margin-top:60px;text-shadow:0 0 40px rgba(255,40,30,.35)">' + words(d.says) + '</div>' +
        '<div id="pfb" style="margin-top:90px;display:inline-block;border:3px solid rgba(255,255,255,.75);padding:16px 24px;font:700 30px Inter;color:#fff;letter-spacing:.06em;text-transform:uppercase;opacity:0">Paid for by ' + esc(d.sponsor) + '</div>' +
      '</div>' +
      '<div id="SCR" class="h" style="position:absolute;left:0;right:0;top:880px;text-align:center;font-size:96px;color:#111;opacity:0;font-style:italic">*record scratch*</div>' +
      '<div id="C" class="abs" style="top:400px;display:none;color:#14231D">' +
        '<div class="k" style="font-size:32px;color:#1B7A52">✓ The record says</div>' +
        '<div id="rec" style="font:700 ' + (d.record.length > 140 ? 58 : 64) + 'px/1.28 Inter;margin-top:48px;opacity:0">' + esc(d.record) + '</div>' +
        '<div style="margin-top:70px;height:190px"><span id="stamp" class="stamp" style="background:' + V.COLOR[d.verdict] + ';color:' + V.COLOR[d.verdict] + ';opacity:0"><span style="color:#fff">' + esc(d.verdict) + '</span></span></div>' +
        '<div id="rat" style="font:600 28px Inter;color:#5a6660;margin-top:26px;opacity:0">Rating: ' + esc(d.rater) + '</div>' +
        '<div id="quip" style="font:italic 700 46px/1.25 Inter;color:#B5521B;margin-top:60px;opacity:0">' + esc(d.quip) + '</div>' +
      '</div>';
  }
  if (s.type === 'money') {
    const toneC = {partial:['#FFE2A8','#7A4B00'], none:['#FFD0CA','#8E1E12'], full:['#C9F2DC','#11603A']}[d.tone];
    C.innerHTML = '<div class="abs" style="top:400px">' +
      '<div id="card" style="background:#fff;color:#111;padding:36px 44px;border-radius:12px;opacity:0"><div style="font:800 30px Inter;letter-spacing:.08em;color:#555">PAID FOR BY</div><div class="h" style="font-size:' + (d.name.length > 16 ? 84 : 100) + 'px;margin-top:10px">' + esc(d.name) + '</div></div>' +
      '<div id="sl" style="margin-top:70px;opacity:0"><div class="k" style="font-size:32px;color:#FFB84D">Sounds like</div><div class="h" style="font-size:80px;color:#FFE08A;margin-top:16px;position:relative;display:inline-block">' + esc(d.soundsLike) + '<span id="strike" style="position:absolute;left:-10px;top:52%;height:12px;background:#FF4B3A;width:0;border-radius:6px"></span></div></div>' +
      '<div id="ac" style="margin-top:70px;opacity:0"><div class="k" style="font-size:40px;color:#5DE8A2">Actually:</div><div style="font:700 50px/1.3 Inter;color:#F4F1EA;margin-top:18px">' + esc(d.actually) + '</div>' +
      '<div id="pill" style="margin-top:36px;opacity:0"><span class="pill" style="background:' + toneC[0] + ';color:' + toneC[1] + '">' + esc(d.tag) + '</span></div></div>' +
      '</div>';
  }
  if (s.type === 'outro') {
    C.innerHTML = '<div class="abs" style="top:470px">' +
      '<div id="o1" class="h" style="font-size:96px;color:#F4F1EA;opacity:0">Ads are built<br>to <span style="color:#FF6B5A">persuade.</span></div>' +
      '<div id="o2" class="h" style="font-size:96px;color:#F4F1EA;margin-top:50px;opacity:0">The record is built<br>to <span style="color:#5DE8A2">check.</span></div>' +
      '<div id="o3" style="margin-top:90px;opacity:0"><div style="font:600 40px Inter;color:rgba(244,241,234,.75)">We check every side. Sources for every claim:</div><div style="font:800 54px \\'Inter Display\\';color:#5DE8A2;margin-top:14px">' + V.site + '</div><div class="k" style="font-size:34px;color:#FFB84D;margin-top:40px">Ohio votes Nov. 3</div></div></div>';
  }
}
function render(t) {
  const s = V.segs.find(x => t >= x.start && t < x.start + x.dur) || V.segs[V.segs.length - 1];
  if (s !== cur) { cur = s; build(s); }
  const u = t - s.start, d = s.data;
  $('#prog').style.width = (t / V.dur * 100) + '%';
  gctx.putImageData(grains[Math.floor(t * 24) % grains.length], 0, 0);
  let bg = 'bg-dark', grain = .10, vig = .55, topC = '#5DE8A2', topR = '', topL = 'KnowYourBallot · Ad Translator';
  if (s.type === 'intro') {
    document.querySelectorAll('.chk').forEach((c, i) => { const a = ap(u, .55 + .65 * i, .3); c.style.opacity = a; c.style.transform = 'translateX(' + (1 - a) * -60 + 'px)';
      c.querySelector('.tickm').style.transform = 'scale(' + back((u - .8 - .65 * i) / .3) + ')'; });
    const lt = $('#lt'); const a = clamp((u - 3.3) / .25); lt.style.opacity = a; lt.style.transform = 'scale(' + (1.4 - .4 * back((u - 3.3) / .35)) + ')';
    topR = '';
  }
  if (s.type === 'mintro') {
    $('#m1').style.opacity = ap(u, .1); $('#m1').style.transform = 'translateY(' + (1 - ap(u, .1)) * 50 + 'px)';
    $('#m2').style.opacity = ap(u, .7); $('#m2').style.transform = 'translateY(' + (1 - ap(u, .7)) * 50 + 'px)';
    $('#m3').style.opacity = ap(u, 2.0);
    topL = 'KnowYourBallot · Follow the money'; topR = '';
  }
  if (s.type === 'claim') {
    topR = d.n + ' / ' + d.of;
    if (u < 3.6) {
      bg = 'bg-ad'; grain = .45; vig = 1; topC = '#FF4B3A';
      const A = $('#A'); A.style.display = ''; $('#C').style.display = 'none';
      const sc = 1 + .06 * u / 3.6, sh = Math.sin(u * 37) * 2.2 + Math.sin(u * 13) * 1.5;
      A.style.transform = 'scale(' + sc + ') translate(' + sh + 'px,' + Math.cos(u * 29) * 1.8 + 'px)';
      A.style.filter = 'grayscale(1) contrast(1.15)';
      const ws = document.querySelectorAll('#says .word'), n = ws.length;
      ws.forEach((w, i) => { const at = .15 + 1.6 * i / Math.max(1, n); w.style.opacity = clamp((u - at) / .12); });
      $('#pfb').style.opacity = ap(u, 1.9);
      $('#SCR').style.opacity = 0;
    } else {
      $('#A').style.display = 'none'; $('#C').style.display = '';
      bg = 'bg-paper'; grain = .06; vig = .12; topC = '#1B7A52';
      const f = u < 3.95 ? 1 - Math.abs(u - 3.72) / .23 : 0;
      $('#flash').style.opacity = clamp(f) * .9;
      $('#SCR').style.opacity = u < 4.15 ? clamp((u - 3.62) / .08) * (u > 3.98 ? clamp((4.15 - u) / .17) : 1) : 0;
      $('#SCR').style.transform = 'rotate(-4deg) scale(' + (1 + (u - 3.6) * .3) + ')';
      $('#C').style.opacity = clamp((u - 3.95) / .2);
      $('#rec').style.opacity = ap(u, 4.05, .4); $('#rec').style.transform = 'translateY(' + (1 - ap(u, 4.05, .4)) * 40 + 'px)';
      const st = $('#stamp'), k = clamp((u - 5.0) / .16);
      st.style.opacity = k; st.style.transform = 'rotate(-7deg) scale(' + (2.4 - 1.4 * ease(k)) + ')';
      const jolt = u > 5.16 && u < 5.36 ? Math.sin((u - 5.16) * 90) * 6 * (1 - (u - 5.16) / .2) : 0;
      $('#C').style.transform = 'translate(' + jolt + 'px,' + jolt * .6 + 'px)';
      $('#rat').style.opacity = ap(u, 5.3);
      $('#quip').style.opacity = ap(u, 6.4, .3); $('#quip').style.transform = 'translateY(' + (1 - ap(u, 6.4, .3)) * 30 + 'px)';
    }
    if (u >= 3.6) $('#flash').style.opacity = clamp(u < 3.95 ? 1 - Math.abs(u - 3.72) / .23 : 0) * .9; else $('#flash').style.opacity = 0;
  } else $('#flash').style.opacity = 0;
  if (s.type === 'money') {
    topL = 'KnowYourBallot · Follow the money'; topR = d.n + ' / ' + d.of; topC = '#FFB84D';
    const c = $('#card'); c.style.opacity = ap(u, .05, .25); c.style.transform = 'translateY(' + (1 - ap(u, .05, .3)) * 60 + 'px) rotate(' + (1 - ap(u, .05, .3)) * -3 + 'deg)';
    const sl = $('#sl'); sl.style.opacity = ap(u, 1.4, .25) * (u > 3.2 ? .55 : 1); sl.style.transform = 'scale(' + (u < 3.2 ? back((u - 1.4) / .35) : 1) + ')'; sl.style.transformOrigin = '0 50%';
    $('#strike').style.width = (clamp((u - 3.0) / .25) * 105) + '%';
    const ac = $('#ac'), k = clamp((u - 3.2) / .15); ac.style.opacity = k; ac.style.transform = 'scale(' + (1.25 - .25 * ease(k)) + ')'; ac.style.transformOrigin = '0 0';
    $('#pill').style.opacity = ap(u, 4.2);
  }
  if (s.type === 'outro') {
    ['#o1','#o2','#o3'].forEach((id, i) => { const a = ap(u, .1 + i * 1.1, .4); $(id).style.opacity = a; $(id).style.transform = 'translateY(' + (1 - a) * 50 + 'px)'; });
    topR = '';
  }
  $('#bg').className = bg; $('#grain').style.opacity = grain; $('#vig').style.opacity = vig;
  $('#grain').style.transform = 'translate(' + (Math.floor(t * 24) % 5) * -17 + 'px,' + (Math.floor(t * 24) % 3) * -23 + 'px)';
  $('#tl').textContent = topL; $('#tr').textContent = topR; $('#top').style.color = topC;
}
render(0);
</script></body></html>`;

/* ---------- thumbnails ---------- */
const THUMB = (v, w, h) => {
  const vert = h > w;
  const stamps = v.kind === 'translate' ? [...new Set(v.claims.map(c => c.verdict))] : ['Some donors hidden', 'No donors disclosed'];
  const sc = vert ? 1 : .62;
  return `<!doctype html><html><head><meta charset="utf-8"><style>*{margin:0;padding:0;box-sizing:border-box}
body{width:${w}px;height:${h}px;overflow:hidden;font-family:Inter;background:radial-gradient(ellipse at 85% 0%,rgba(74,200,140,.28),transparent 55%),radial-gradient(ellipse at 0% 100%,rgba(27,77,62,.65),transparent 60%),#0E1B16;color:#F4F1EA}
.h{font-family:'Inter Display';font-weight:900;letter-spacing:-.025em;line-height:.98}.k{font-family:'Inter Display';font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.st{display:inline-block;font-family:'Inter Display';font-weight:900;text-transform:uppercase;color:#fff;border-radius:${16*sc}px;padding:${14*sc}px ${26*sc}px;font-size:${54*sc}px;border:${6*sc}px solid rgba(255,255,255,.85)}
</style></head><body><div style="position:absolute;inset:0;padding:${vert ? '300px 90px' : '56px 70px'};display:flex;flex-direction:column">
<div class="k" style="font-size:${34*sc}px;color:#FFB84D">${v.kicker}</div>
<div class="h" style="font-size:${(v.kind === 'translate' ? 150 : 140)*sc}px;margin-top:${30*sc}px">${v.kind === 'translate'
    ? `Ohio ads,<br><span style="color:#FF5A47;text-transform:uppercase">translated</span>`
    : `Who's <span style="color:#FFB84D">really</span><br>paying for<br>these ads?`}</div>
<div style="margin-top:${60*sc}px;display:flex;flex-wrap:wrap;gap:${22*sc}px">${stamps.map((s, i) => `<span class="st" style="background:${COLOR[s] || (i ? '#D33A2C' : '#D69408')};transform:rotate(${i % 2 ? 4 : -5}deg)">${s}</span>`).join('')}</div>
<div style="margin-top:auto;font:800 ${40*sc}px 'Inter Display';color:#5DE8A2">KnowYourBallot</div></div></body></html>`;
};

/* ---------- platform copy ---------- */
function copy(v) {
  const isT = v.kind === 'translate';
  const people = isT ? (v.race === 'Governor' ? 'Vivek Ramaswamy and Amy Acton' : 'Sherrod Brown and Jon Husted') : 'Sherrod Brown and Jon Husted';
  const link = `https://${SITE}`;
  const lines = isT
    ? v.claims.map(c => `• "${c.says.replace(/[“”]/g, '')}" (${c.sponsor}) → ${c.verdict}. Rating: ${c.rater}.`)
    : v.items.map(it => `• ${it.name}: ${it.actually}`);
  const srcs = isT ? [...new Set(v.claims.flatMap(c => [c.src]))] : [...new Set(v.items.flatMap(it => it.src))];
  const fb = isT
    ? `Ominous music. Slow-motion black-and-white. RED ALL-CAPS TEXT. 🎻\n\nWe ran ${v.claims.length} claims from Ohio's ${v.race} ads (${people}) through the Ad Translator: what the ad says vs. what the record says.\n\n${lines.join('\n')}\n\nWe check ads from every side and link every source. Full candidate profiles: ${link}\n\nSources:\n${srcs.map(u => '• ' + u).join('\n')}\n\n#Ohio #OhioPolitics #Election2026 #FactCheck`
    : `"Paid for by..." tells you the group's name — not who's funding it. 💸\n\nWe decoded ${v.items.length} groups running ads in Ohio's U.S. Senate race (${people}), from both sides:\n\n${lines.join('\n')}\n\n"Dark money" groups are nonprofits that don't have to name their donors. Every group, every donor we could verify, with sources: ${link}\n\nSources:\n${srcs.map(u => '• ' + u).join('\n')}\n\n#Ohio #OhioPolitics #Election2026 #FollowTheMoney`;
  const ig = isT
    ? `What the ad says 🎻 vs. what the record says ✅\n\nOhio ${v.race} ads, translated. ${v.claims.map(c => `${c.verdict}`).join(' · ')}\n\nWe check every side. Every source is on our site — link in bio.\n\nOhio votes Nov. 3.\n\n#Ohio #OhioPolitics #Election2026 #FactCheck #PoliticalAds #Vote #Columbus #Cleveland #Cincinnati #KnowYourBallot`
    : `"Paid for by..." — but who's paying THEM? 💸\n\nOhio Senate ad groups, decoded: ${v.items.map(i => i.name).join(', ')}.\n\nDark money = groups that don't have to name their donors. Every donor we could verify, with sources — link in bio.\n\nOhio votes Nov. 3.\n\n#Ohio #OhioPolitics #Election2026 #DarkMoney #FollowTheMoney #PoliticalAds #Vote #KnowYourBallot`;
  const x = isT
    ? `Ominous music ✔ Slow-mo ✔ RED ALL CAPS ✔\n\nWe translated Ohio ${v.race} ads: ${v.claims.map(c => c.verdict).join(', ')}. Every side, every source:\n${link}`
    : `"Paid for by Ohio Flyer PAC" sounds like an air show. It's not.\n\nOhio Senate ad groups, decoded, both sides. Sources:\n${link}`;
  return { fb, ig, x };
}
const xLen = t => t.replace(/https?:\/\/\S+/g, 'x'.repeat(23)).length;

/* ---------- main ---------- */
(async () => {
  if (!ONLY) fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const report = [];
  for (const v0 of VIDEOS) {
    if (ONLY && v0.id !== ONLY) continue;
    const v = resolve(JSON.parse(JSON.stringify(v0)));
    if (process.env.PREVIEW) {  // PREVIEW="1.5,6,9" → still frames only
      const pg = await browser.newPage({ viewport: { width: W, height: H } }); await pg.setContent(PAGE(v), { waitUntil: 'load' }); await pg.evaluate(() => document.fonts.ready);
      for (const t of process.env.PREVIEW.split(',').map(Number)) { await pg.evaluate(t => render(t), t); await pg.screenshot({ path: path.join(OUT, `preview-${v.id}-${t}.jpg`), type: 'jpeg', quality: 70 }); }
      await pg.close(); continue;
    }
    const dir = path.join(OUT, v.id); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
    // audio
    const cueFile = path.join(dir, '.cues.json'), wav = path.join(dir, '.sfx.wav');
    fs.writeFileSync(cueFile, JSON.stringify({ dur: v.dur, ev: cues(v) }));
    execFileSync('python3', [path.join(__dirname, 'sfx.py'), cueFile, wav]);
    // video frames → ffmpeg
    const mp4 = path.join(dir, `${v.id}.mp4`);
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-i', wav,
      '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23', '-pix_fmt', 'yuv420p', '-r', String(FPS), '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', mp4], { stdio: ['pipe', 'inherit', 'inherit'] });
    const done = new Promise((res, rej) => ff.on('close', c => c ? rej(new Error('ffmpeg ' + c)) : res()));
    const pg = await browser.newPage({ viewport: { width: W, height: H } });
    await pg.setContent(PAGE(v), { waitUntil: 'load' }); await pg.evaluate(() => document.fonts.ready);
    const N = Math.round(v.dur * FPS);
    for (let i = 0; i < N; i++) {
      await pg.evaluate(t => render(t), i / FPS);
      const buf = await pg.screenshot({ type: 'jpeg', quality: 90 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i === Math.round(N * .5)) await pg.screenshot({ path: path.join(dir, '.preview-mid.jpg'), type: 'jpeg', quality: 80 });
    }
    ff.stdin.end(); await done; await pg.close();
    fs.unlinkSync(cueFile); fs.unlinkSync(wav);
    // thumbnails
    for (const [w, h, f] of [[1080, 1920, 'thumbnail-vertical-1080x1920.jpg'], [1200, 675, 'thumbnail-landscape-1200x675.jpg'], [1080, 1080, 'thumbnail-square-1080x1080.jpg']]) {
      const p = await browser.newPage({ viewport: { width: w, height: h } }); await p.setContent(THUMB(v, w, h), { waitUntil: 'load' });
      await p.screenshot({ path: path.join(dir, f), type: 'jpeg', quality: 92 }); await p.close();
    }
    // captions + copy
    fs.writeFileSync(path.join(dir, 'captions.srt'), captions(v));
    const c = copy(v);
    if (xLen(c.x) > 280) throw new Error(`${v.id}: X post too long (${xLen(c.x)})`);
    const tl = v.segs.map(s => `${ts(s.start).slice(3, 8)}–${ts(s.start + s.dur).slice(3, 8)}  ${s.type === 'claim' ? `Ad says: ${s.data.says} | Record: ${s.data.record} | Stamp: ${s.data.verdict} | Quip: ${s.data.quip}` : s.type === 'money' ? `Paid for by: ${s.data.name} | Sounds like: ${s.data.soundsLike} | Actually: ${s.data.actually} | Tag: ${s.data.tag}` : s.type}`).join('\n');
    fs.writeFileSync(path.join(dir, 'post-copy.txt'),
`${v.title.toUpperCase()}  (${v.dur.toFixed(1)} s, vertical 1080x1920, sound effects included)

==================== FACEBOOK (post or Reel) ====================
${c.fb}

==================== INSTAGRAM (Reel caption) ====================
${c.ig}

==================== X / TWITTER (${xLen(c.x)}/280 characters) ====================
${c.x}

==================== ON-SCREEN TEXT TIMELINE ====================
(Already burned into the video. captions.srt has the same text for closed captions.)
${tl}
`);
    report.push(`${v.id.padEnd(26)} ${v.dur.toFixed(1)}s  X post ${xLen(c.x)}/280`);
  }
  await browser.close();
  console.log(report.join('\n'));
})().catch(e => { console.error(e); process.exit(1); });

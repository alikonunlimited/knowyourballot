// KnowYourBallot "Ad Check" YouTube kit generator.
// Builds scripts, on-screen graphics (PNG) and upload text for:
//   - one vertical Short (1080x1920) per ad in data/adchecks.js
//   - one horizontal full video (1920x1080) per race
// Usage: node youtube/build.js [outDir]   (default: youtube/out)
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const root = path.join(__dirname, '..');
const OUT = path.resolve(process.argv[2] || path.join(__dirname, 'out'));
const load = f => fs.readFileSync(path.join(root, 'data', f), 'utf8');
const { CANDIDATES, AD_CHECKS, AD_CHECK_RACES } = new Function(
  load('candidates.js') + load('candidates-2026.js') + load('adchecks.js') +
  ';return {CANDIDATES, AD_CHECKS, AD_CHECK_RACES};')();
const SITE = 'knowyourballot.netlify.app';

const SEVERITY = ['False','Misleading','Missing context','Unverifiable','Opinion','Mostly accurate','Accurate'];
const COLOR = {'Accurate':'#2E9E68','Mostly accurate':'#6FB34F','Missing context':'#E3A008','Misleading':'#E8681F','False':'#D33A2C','Opinion':'#7C8796','Unverifiable':'#7C8796'};
const name = k => CANDIDATES[k] ? CANDIDATES[k].name : k;
const party = k => CANDIDATES[k] ? CANDIDATES[k].party : '';
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const firstSentence = t => (t.match(/^.*?[.!?](\s|$)/) || [t])[0].trim();
const esc = t => String(t).replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const quoted = t => '“' + String(t).replace(/^Quote: /,'').replace(/"([^"]*)"/g, '‘$1’') + '”';
const words = t => t.split(/\s+/).filter(Boolean).length;
const secs = t => Math.round(words(t) / 150 * 60);   // ~150 spoken words per minute
const domain = u => { try { return new URL(u).hostname.replace(/^www\./,''); } catch(e) { return u; } };
const pickShortClaims = a => {
  let n = Math.min(3, a.claims.length), cs;
  do {
    const ranked = [...a.claims].sort((x,y) => SEVERITY.indexOf(x.verdict) - SEVERITY.indexOf(y.verdict)).slice(0, n);
    cs = a.claims.filter(c => ranked.includes(c));
    n--;
  } while (n >= 1 && secs(shortScript(a, cs).map(l => l[1]).join(' ')) > 60);
  return cs;
};

/* ---------- graphics ---------- */
const BASE_CSS = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;background:#0E1B16;color:#F4F1EA;overflow:hidden}
.frame{position:absolute;inset:0;display:flex;flex-direction:column;background:
 radial-gradient(ellipse at 85% 0%,rgba(74,200,140,.22),transparent 55%),
 radial-gradient(ellipse at 0% 100%,rgba(27,77,62,.55),transparent 60%),#0E1B16}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:60px 60px}
.brand{font-family:'Inter Display';font-weight:800;letter-spacing:.02em;color:#5DE8A2}
.kicker{font-family:'Inter Display';font-weight:800;letter-spacing:.16em;text-transform:uppercase}
.h{font-family:'Inter Display';font-weight:900;line-height:1.02;letter-spacing:-.02em}
.badge{display:inline-block;font-family:'Inter Display';font-weight:900;text-transform:uppercase;letter-spacing:.04em;color:#fff;border-radius:18px}
.muted{color:rgba(244,241,234,.62)}
.party-R{color:#FF7A6B}.party-D{color:#7FB2FF}.party-I{color:#C7B8FF}
`;
function shell(w, h, inner, extraCss = '') {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}${extraCss}</style></head>
  <body style="width:${w}px;height:${h}px"><div class="frame"><div class="grid"></div>${inner}</div></body></html>`;
}
// Vertical (Shorts) cards
const V = {
  hook: a => shell(1080,1920,`
    <div style="position:relative;padding:0 130px 0 90px;display:flex;flex-direction:column;justify-content:center;height:1500px">
      <div class="kicker" style="font-size:34px;color:#FFB84D">Ad Check · ${esc(a.race)}</div>
      <div class="h" style="font-size:118px;margin-top:40px">Fact or<br><span style="color:#5DE8A2">fiction?</span></div>
      <div style="margin-top:80px;padding:44px;border:3px solid rgba(255,255,255,.18);border-radius:36px;background:rgba(255,255,255,.04)">
        <div class="kicker muted" style="font-size:26px">The ad</div>
        <div class="h" style="font-size:72px;margin-top:14px">${esc(a.title)}</div>
        <div style="font-size:36px;margin-top:28px;line-height:1.35"><b>Paid for by:</b> ${esc(a.sponsor)}</div>
        <div style="font-size:36px;margin-top:12px;line-height:1.35"><b>Targets:</b> ${a.about.map(k=>`<span class="party-${party(k)}">${esc(name(k))}</span>`).join(', ')}</div>
        <div class="muted" style="font-size:30px;margin-top:12px">${esc(a.date)} · ${esc(a.platform)}</div>
      </div>
      <div style="margin-top:90px" class="brand"><span style="font-size:44px">KnowYourBallot</span></div>
    </div>`),
  claim: (a, c, i, n) => shell(1080,1920,`
    <div style="position:relative;padding:0 130px 0 90px;display:flex;flex-direction:column;justify-content:center;height:1500px">
      <div class="kicker muted" style="font-size:30px">Claim ${i} of ${n} · ${esc(a.title)}</div>
      <div class="h" style="font-size:${c.claim.length>90?64:78}px;margin-top:44px;line-height:1.1">${esc(quoted(c.claim))}</div>
      <div style="margin-top:70px"><span class="badge" style="font-size:78px;padding:22px 44px;background:${COLOR[c.verdict]}">${esc(c.verdict)}</span></div>
      <div style="font-size:42px;line-height:1.42;margin-top:60px">${esc(firstSentence(c.finding))}</div>
      <div class="muted" style="font-size:28px;margin-top:40px">Rating: ${esc(c.rater)} · Source: ${esc(domain(c.src))}</div>
      <div style="margin-top:90px" class="brand"><span style="font-size:40px">KnowYourBallot</span></div>
    </div>`),
  bottom: a => shell(1080,1920,`
    <div style="position:relative;padding:0 130px 0 90px;display:flex;flex-direction:column;justify-content:center;height:1500px">
      <div class="kicker" style="font-size:34px;color:#5DE8A2">Bottom line</div>
      <div class="h" style="font-size:70px;margin-top:44px;line-height:1.12">${esc(a.bottomLine)}</div>
      <div style="margin-top:70px;display:flex;flex-direction:column;gap:22px">
        ${a.claims.map(c=>`<div style="display:flex;align-items:center;gap:22px;font-size:32px"><span class="badge" style="font-size:26px;padding:10px 18px;background:${COLOR[c.verdict]};min-width:270px;text-align:center">${esc(c.verdict)}</span><span>${esc(c.claim.length>60?c.claim.slice(0,57)+'…':c.claim)}</span></div>`).join('')}
      </div>
      <div style="margin-top:90px" class="brand"><span style="font-size:40px">KnowYourBallot</span></div>
    </div>`),
  end: a => shell(1080,1920,`
    <div style="position:relative;padding:0 90px;display:flex;flex-direction:column;justify-content:center;height:1500px;text-align:center">
      <div class="h" style="font-size:96px">Know your<br><span style="color:#5DE8A2">ballot.</span></div>
      <div style="font-size:42px;margin-top:60px;line-height:1.4">Every source is in the description.</div>
      <div style="font-size:42px;margin-top:18px;line-height:1.4">Full candidate profiles:</div>
      <div class="brand" style="font-size:52px;margin-top:14px">${SITE}</div>
      <div class="muted" style="font-size:30px;margin-top:80px;line-height:1.45">Nonpartisan. We check ads from every side.<br>Ratings from ${esc([...new Set(a.claims.map(c=>c.rater))].join('; '))}.</div>
    </div>`),
};
// Horizontal (full video) cards
const H = {
  title: (race, ads) => shell(1920,1080,`
    <div style="position:relative;padding:110px 140px;display:flex;flex-direction:column;height:100%">
      <div class="kicker" style="font-size:30px;color:#FFB84D">Ad Check · Ohio 2026</div>
      <div class="h" style="font-size:132px;margin-top:30px">${esc(race)} ads:<br><span style="color:#5DE8A2">fact or fiction?</span></div>
      <div style="font-size:40px;margin-top:50px" class="muted">${ads.length} ads · ${ads.reduce((n,a)=>n+a.claims.length,0)} claims checked against the record</div>
      <div style="margin-top:auto" class="brand"><span style="font-size:40px">KnowYourBallot</span></div>
    </div>`),
  scale: () => shell(1920,1080,`
    <div style="position:relative;padding:100px 140px">
      <div class="kicker" style="font-size:30px;color:#5DE8A2">How we rate</div>
      <div class="h" style="font-size:80px;margin-top:20px">Every claim gets one of these</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px 60px;margin-top:60px">
        ${[['Accurate','Matches the record.'],['Mostly accurate','Right, with a small gap.'],['Missing context','True piece, misleading picture.'],['Misleading','Facts arranged to mislead.'],['False','Contradicted by the record.'],['Opinion','A judgment, not a checkable fact.']].map(([v,d])=>`<div style="display:flex;align-items:center;gap:28px"><span class="badge" style="font-size:30px;padding:12px 22px;background:${COLOR[v]};min-width:330px;text-align:center">${v}</span><span style="font-size:34px">${d}</span></div>`).join('')}
      </div>
      <div class="muted" style="font-size:28px;margin-top:60px">Ratings come from PolitiFact, FactCheck.org and local TV fact-checks; where we apply a label to their reporting, we say so.</div>
    </div>`),
  ad: (a, idx, total) => shell(1920,1080,`
    <div style="position:relative;padding:110px 140px;display:flex;flex-direction:column;height:100%">
      <div class="kicker muted" style="font-size:28px">Ad ${idx} of ${total}</div>
      <div class="h" style="font-size:110px;margin-top:26px">${esc(a.title)}</div>
      <div style="font-size:42px;margin-top:40px"><b>Paid for by:</b> ${esc(a.sponsor)}</div>
      <div style="font-size:42px;margin-top:14px"><b>Targets:</b> ${a.about.map(k=>`<span class="party-${party(k)}">${esc(name(k))}</span>`).join(', ')}</div>
      <div style="font-size:36px;margin-top:30px;max-width:1500px;line-height:1.4" class="muted">${esc(a.summary)}</div>
      <div style="margin-top:auto" class="muted"><span style="font-size:28px">${esc(a.date)} · ${esc(a.platform)}</span></div>
    </div>`),
  claim: (a, c) => shell(1920,1080,`
    <div style="position:relative;padding:100px 140px;display:flex;gap:90px;height:100%">
      <div style="flex:1.1;display:flex;flex-direction:column">
        <div class="kicker muted" style="font-size:26px">${esc(a.title)} · the claim</div>
        <div class="h" style="font-size:${c.claim.length>90?60:72}px;margin-top:30px;line-height:1.1">${esc(quoted(c.claim))}</div>
        <div style="margin-top:50px"><span class="badge" style="font-size:64px;padding:18px 38px;background:${COLOR[c.verdict]}">${esc(c.verdict)}</span></div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center">
        <div class="kicker" style="font-size:26px;color:#5DE8A2">The record</div>
        <div style="font-size:38px;line-height:1.45;margin-top:22px">${esc(c.finding)}</div>
        <div class="muted" style="font-size:24px;margin-top:30px">Rating: ${esc(c.rater)} · ${esc(domain(c.src))}</div>
      </div>
    </div>`),
  score: (race, ads) => {
    const sides = {};
    ads.forEach(a => { const s = name(a.supports); (sides[s] = sides[s] || {}); a.claims.forEach(c => sides[s][c.verdict] = (sides[s][c.verdict]||0)+1); });
    return shell(1920,1080,`
    <div style="position:relative;padding:100px 140px">
      <div class="kicker" style="font-size:30px;color:#5DE8A2">Scorecard · ${esc(race)}</div>
      <div class="h" style="font-size:76px;margin-top:20px">Claims in ads supporting each candidate</div>
      <div style="display:flex;gap:60px;margin-top:60px">
        ${Object.entries(sides).map(([who, v]) => `<div style="flex:1;padding:40px;border:3px solid rgba(255,255,255,.15);border-radius:30px">
          <div class="h" style="font-size:54px">${esc(who)}</div>
          <div style="margin-top:26px;display:flex;flex-direction:column;gap:16px">${SEVERITY.slice().reverse().filter(k=>v[k]).map(k=>`<div style="display:flex;align-items:center;gap:20px;font-size:34px"><span class="badge" style="font-size:26px;padding:8px 16px;background:${COLOR[k]};min-width:290px;text-align:center">${k}</span><b>${v[k]}</b></div>`).join('')}</div></div>`).join('')}
      </div>
      <div class="muted" style="font-size:26px;margin-top:40px">Counts reflect the ads fact-checkers have reviewed so far, not every ad that has aired.</div>
    </div>`);
  },
  end: () => shell(1920,1080,`
    <div style="position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;text-align:center">
      <div class="h" style="font-size:120px">Know your <span style="color:#5DE8A2">ballot.</span></div>
      <div style="font-size:44px;margin-top:40px">Sources for every claim are in the description.</div>
      <div class="brand" style="font-size:56px;margin-top:24px">${SITE}</div>
      <div class="muted" style="font-size:30px;margin-top:50px">Nonpartisan · We check ads from every side · Election Day is Nov 3</div>
    </div>`),
  thumb: (race) => shell(1280,720,`
    <div style="position:relative;padding:60px 70px;display:flex;flex-direction:column;height:100%">
      <div class="kicker" style="font-size:30px;color:#FFB84D">Ohio ${esc(race)} · Ad Check</div>
      <div class="h" style="font-size:118px;margin-top:20px">FACT<br>or <span style="color:#FF6B5A">FICTION?</span></div>
      <div style="margin-top:auto;display:flex;gap:16px">${['False','Misleading','Missing context','Accurate'].map(v=>`<span class="badge" style="font-size:24px;padding:10px 18px;background:${COLOR[v]}">${v}</span>`).join('')}</div>
    </div>`),
};

/* ---------- scripts & upload text ---------- */
function shortScript(a, cs) {
  cs = cs || pickShortClaims(a);
  const target = a.about.map(name).join(' and ');
  const lines = [];
  lines.push(['01-hook.jpg', `This ad, paid for by the ${a.sponsor.replace(/ \(.*\)/,'')}, goes after ${target}. ${a.summary} Fact or fiction? Let's check.`]);
  cs.forEach((c, i) => lines.push([`${String(i+2).padStart(2,'0')}-claim-${i+1}.jpg`, `Claim${cs.length>1?` ${i+1}`:''}: ${c.claim.replace(/^Quote: /,'')} Verdict: ${c.verdict}. ${firstSentence(c.finding)}`]));
  lines.push([`${String(cs.length+2).padStart(2,'0')}-bottom-line.jpg`, `Bottom line: ${a.bottomLine}`]);
  lines.push([`${String(cs.length+3).padStart(2,'0')}-end.jpg`, `Sources are in the description. Know your ballot.`]);
  return lines;
}
function fullScript(race, ads) {
  const out = [];
  const people = [...new Set(ads.flatMap(a => [a.supports, ...a.about]))].map(name);
  out.push(['00-title.jpg', `Ohio's ${race} race is one of the most expensive in the country, and most of that money is going into ads. Today we're checking ${ads.length} of them, from both sides, claim by claim. The candidates: ${people.join(' and ')}. Every source we use is linked in the description.`]);
  out.push(['01-how-we-rate.jpg', `Here's how this works. We rely on professional fact-checkers — PolitiFact, FactCheck.org, and local TV fact-check teams — and the public records they cite. Each claim gets a rating: Accurate, Mostly accurate, Missing context, Misleading, False, or Opinion. When a fact-checker reported the evidence without giving a formal rating, we apply the label ourselves and say so on screen.`]);
  let n = 2;
  ads.forEach((a, i) => {
    out.push([`${String(n++).padStart(2,'0')}-ad-${i+1}.jpg`, `Ad ${i+1}: "${a.title.replace(/"/g,'')}", paid for by ${a.sponsor}. ${a.summary}`]);
    a.claims.forEach((c, j) => out.push([`${String(n++).padStart(2,'0')}-ad-${i+1}-claim-${j+1}.jpg`, `The claim: ${c.claim.replace(/^Quote: /,'')} Our rating: ${c.verdict}. ${c.finding} That rating comes from ${c.rater}.`]));
    out.push([null, `So, on this ad: ${a.bottomLine}`]);
  });
  out.push([`${String(n++).padStart(2,'0')}-scorecard.jpg`, `Here's the scorecard for the ads we checked, grouped by which candidate each ad supports. Keep in mind these are the ads fact-checkers have reviewed so far — not every ad on the air.`]);
  out.push([`${String(n++).padStart(2,'0')}-end.jpg`, `Ads are built to persuade, not to inform. Before you vote, look past the ad and check the record. Full profiles on every candidate, with sources, are at ${SITE}. Election Day is November 3rd. Know your ballot.`]);
  return out;
}
function writeScript(dir, title, lines, kind) {
  const all = lines.map(l => l[1]).join(' ');
  let md = `# ${title}\n\nFormat: ${kind}\nEstimated length: ${Math.floor(secs(all)/60)}:${String(secs(all)%60).padStart(2,'0')} (${words(all)} words at ~150 wpm)\n\n`;
  md += `Each line shows the graphic to put on screen, then the narration. No ad footage is required; if you add short clips of the ad being discussed, keep them brief and paired with commentary.\n\n---\n\n`;
  lines.forEach(([g, t]) => { md += (g ? `**[ON SCREEN: ${g}]**\n` : `**[ON SCREEN: hold previous graphic]**\n`) + `${t}\n\n`; });
  fs.writeFileSync(path.join(dir, 'script.md'), md);
  return secs(all);
}
function uploadText(dir, ytTitle, ads, isShort) {
  const srcs = [...new Map(ads.flatMap(a => [...a.claims.map(c => [c.src, c.rater]), [a.adLink.url, a.adLink.label]])).entries()];
  let t = `TITLE (max 100 characters):\n${ytTitle}\n\nDESCRIPTION:\n`;
  t += ads.length === 1
    ? `We fact-check "${ads[0].title.replace(/"/g,'')}", an ad paid for by ${ads[0].sponsor}, claim by claim.\n\n`
    : `We fact-check ${ads.length} ads in Ohio's ${ads[0].race} race, from both sides, claim by claim.\n\n`;
  ads.forEach(a => { t += `${a.title.replace(/"/g,'')} (${a.sponsor}):\n` + a.claims.map(c => `• ${c.claim.replace(/^Quote: /,'')} — ${c.verdict} (${c.rater})`).join('\n') + '\n\n'; });
  t += `SOURCES:\n` + srcs.map(([u, l]) => `• ${l}: ${u}`).join('\n') + `\n\n`;
  t += `Full candidate profiles with sources: https://${SITE}\n\nKnowYourBallot is nonpartisan. We check ads from every side and link every source. Ratings come from PolitiFact, FactCheck.org and local TV fact-checks; where we applied a label to their reporting, we say so.\n\n`;
  t += `TAGS:\nOhio election 2026, fact check, political ads, ${[...new Set(ads.flatMap(a => [a.supports, ...a.about]).map(name))].join(', ')}, ${ads[0].race === 'Governor' ? 'Ohio governor race' : 'Ohio Senate race'}, KnowYourBallot${isShort ? ', #Shorts' : ''}\n`;
  fs.writeFileSync(path.join(dir, 'youtube-upload.txt'), t);
}

(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  const browser = await chromium.launch();
  const shot = async (html, w, h, file) => {
    const pg = await browser.newPage({ viewport: { width: w, height: h } });
    await pg.setContent(html, { waitUntil: 'load' }); await pg.screenshot({ path: file, type: 'jpeg', quality: 92 }); await pg.close();
  };
  const report = [];
  // Shorts
  for (const a of AD_CHECKS) {
    const dir = path.join(OUT, 'shorts', `${slug(a.race)}--${a.id}`); fs.mkdirSync(dir, { recursive: true });
    const cs = pickShortClaims(a);
    await shot(V.hook(a), 1080, 1920, path.join(dir, '01-hook.jpg'));
    for (let i = 0; i < cs.length; i++) await shot(V.claim(a, cs[i], i+1, cs.length), 1080, 1920, path.join(dir, `${String(i+2).padStart(2,'0')}-claim-${i+1}.jpg`));
    await shot(V.bottom(a), 1080, 1920, path.join(dir, `${String(cs.length+2).padStart(2,'0')}-bottom-line.jpg`));
    await shot(V.end(a), 1080, 1920, path.join(dir, `${String(cs.length+3).padStart(2,'0')}-end.jpg`));
    const s = writeScript(dir, `Ad Check Short — ${a.race}: ${a.title.replace(/"/g,'')}`, shortScript(a), 'YouTube Short, vertical 1080x1920');
    const tt = `Fact-checking the ${a.title.replace(/"/g,'')} ad in Ohio's ${a.race} race #Shorts`;
    uploadText(dir, tt.length > 100 ? `Ad Check: ${a.title.replace(/"/g,'')} — Ohio ${a.race} #Shorts` : tt, [a], true);
    report.push(`Short  ${a.race.padEnd(12)} ${a.id.padEnd(28)} ~${s}s  (${cs.length} claims)`);
  }
  // Full videos
  for (const race of AD_CHECK_RACES) {
    const ads = AD_CHECKS.filter(a => a.race === race);
    const dir = path.join(OUT, 'full', slug(race)); fs.mkdirSync(dir, { recursive: true });
    await shot(H.thumb(race), 1280, 720, path.join(dir, 'thumbnail.jpg'));
    await shot(H.title(race, ads), 1920, 1080, path.join(dir, '00-title.jpg'));
    await shot(H.scale(), 1920, 1080, path.join(dir, '01-how-we-rate.jpg'));
    let n = 2;
    for (let i = 0; i < ads.length; i++) {
      await shot(H.ad(ads[i], i+1, ads.length), 1920, 1080, path.join(dir, `${String(n++).padStart(2,'0')}-ad-${i+1}.jpg`));
      for (let j = 0; j < ads[i].claims.length; j++) await shot(H.claim(ads[i], ads[i].claims[j]), 1920, 1080, path.join(dir, `${String(n++).padStart(2,'0')}-ad-${i+1}-claim-${j+1}.jpg`));
    }
    await shot(H.score(race, ads), 1920, 1080, path.join(dir, `${String(n++).padStart(2,'0')}-scorecard.jpg`));
    await shot(H.end(), 1920, 1080, path.join(dir, `${String(n++).padStart(2,'0')}-end.jpg`));
    const s = writeScript(dir, `Ad Check — Ohio ${race}: every ad, fact or fiction`, fullScript(race, ads), 'Full YouTube video, horizontal 1920x1080');
    uploadText(dir, `Ohio ${race} ads: fact or fiction? We checked ${ads.length} ads claim by claim`, ads, false);
    report.push(`Full   ${race.padEnd(12)} ${ads.length} ads, ${ads.reduce((x,a)=>x+a.claims.length,0)} claims  ~${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`);
  }
  await browser.close();
  console.log(report.join('\n'));
  console.log(`Kit written to ${OUT}`);
})();

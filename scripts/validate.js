// Validates KnowYourBallot data + renders every profile/tab in Chromium.
// Usage: node scripts/validate.js   (exit code 1 on any problem)
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const problems = [];
const load = f => fs.readFileSync(path.join(root, 'data', f), 'utf8');
const ctx = new Function(load('candidates.js') + load('candidates-2026.js') + load('world.js') + load('ads.js') + load('sources.js') + load('adchecks.js') + load('funders.js') +
  ';return {CANDIDATES, WORLD, CIVIL, ADS, RACE_AD_TOTALS, SOURCES, GLOBAL_SOURCES, AD_CHECKS, FUNDERS, AD_FUNDERS, RACE_MONEY};')();
const { CANDIDATES, WORLD, CIVIL, ADS, SOURCES, GLOBAL_SOURCES, AD_CHECKS, FUNDERS, AD_FUNDERS, RACE_MONEY } = ctx;
const VERDICTS = ['Accurate','Mostly accurate','Missing context','Misleading','False','Opinion','Unverifiable'];

const isUrl = u => /^https:\/\/[^\s"]+$/.test(u || '');
const banned = /wikipedia\.org/i; // Wikipedia is for photos only, never a data source
function checkSrc(where, src) {
  if (!isUrl(src)) problems.push(`${where}: missing or invalid source URL`);
  else if (banned.test(src)) problems.push(`${where}: Wikipedia is not allowed as a data source`);
}
for (const k of Object.keys(SOURCES)) if (!CANDIDATES[k]) problems.push(`SOURCES.${k}: no matching candidate`);
for (const k of Object.keys(CANDIDATES)) if (!SOURCES[k]) problems.push(`${k}: no entry in data/sources.js`);
for (const [k,l] of Object.entries(SOURCES)) l.forEach((x,i)=>{ if(!isUrl(x.url)) problems.push(`SOURCES.${k}[${i}]: bad url`); });
GLOBAL_SOURCES.forEach((x,i)=>{ if(!isUrl(x.url)) problems.push(`GLOBAL_SOURCES[${i}]: bad url`); });
for (const [k, c] of Object.entries(CANDIDATES)) {
  for (const f of ['name','initials','party','partyLabel','level','state','office','status','bio'])
    if (!c[f]) problems.push(`${k}: missing field ${f}`);
  c.elections.forEach((e,i) => checkSrc(`${k}.elections[${i}]`, e.src));
  c.record.forEach((e,i) => checkSrc(`${k}.record[${i}]`, e.src));
  c.controversies.forEach((e,i) => { checkSrc(`${k}.controversies[${i}]`, e.src);
    if (!['high','mid','low'].includes(e.sev)) problems.push(`${k}.controversies[${i}]: bad sev`); });
  (c.endorsements||[]).forEach((e,i) => checkSrc(`${k}.endorsements[${i}]`, e.src));
  c.money.figures.forEach((e,i) => checkSrc(`${k}.money.figures[${i}]`, e.src));
  c.links.forEach((l,i) => checkSrc(`${k}.links[${i}]`, l.url));
}
for (const [name, obj] of [['WORLD',WORLD],['CIVIL',CIVIL],['ADS',ADS]])
  for (const [k, list] of Object.entries(obj)) {
    if (!CANDIDATES[k]) problems.push(`${name}.${k}: no matching candidate key`);
    list.forEach((e,i) => checkSrc(`${name}.${k}[${i}]`, e.src));
  }

AD_CHECKS.forEach((a,i) => {
  if (!CANDIDATES[a.supports]) problems.push(`AD_CHECKS[${i}]: supports unknown candidate`);
  a.about.forEach(k => { if (!CANDIDATES[k]) problems.push(`AD_CHECKS[${i}]: about unknown candidate ${k}`); });
  a.claims.forEach((c,j) => { checkSrc(`AD_CHECKS[${i}].claims[${j}]`, c.src); if (!VERDICTS.includes(c.verdict)) problems.push(`AD_CHECKS[${i}].claims[${j}]: unknown verdict ${c.verdict}`); if (!c.rater) problems.push(`AD_CHECKS[${i}].claims[${j}]: missing rater`); });
});
Object.entries(FUNDERS).forEach(([id,f]) => {
  ['name','type','race','against','disclosure','brief'].forEach(x => { if (!f[x]) problems.push(`FUNDERS.${id}: missing ${x}`); });
  if ((f.side && !CANDIDATES[f.side]) || !CANDIDATES[f.against]) problems.push(`FUNDERS.${id}: unknown candidate`);
  if (!['full','partial','none'].includes(f.disclosure)) problems.push(`FUNDERS.${id}: bad disclosure`);
  if (!f.src.length) problems.push(`FUNDERS.${id}: no sources`);
  f.src.forEach((u,j) => checkSrc(`FUNDERS.${id}.src[${j}]`, u));
});
Object.entries(AD_FUNDERS).forEach(([ad, ids]) => {
  if (!AD_CHECKS.some(a => a.id === ad)) problems.push(`AD_FUNDERS: unknown ad ${ad}`);
  ids.forEach(i => { if (!FUNDERS[i]) problems.push(`AD_FUNDERS.${ad}: unknown funder ${i}`); });
});
AD_CHECKS.forEach(a => { if (!AD_FUNDERS[a.id]) problems.push(`AD_CHECKS ${a.id}: no AD_FUNDERS entry`); });
Object.values(RACE_MONEY).forEach(r => checkSrc('RACE_MONEY', r.src));
(async () => {
  let chromium; try { ({ chromium } = require('playwright')); } catch (e) {}
  if (chromium) {
    const b = await chromium.launch(); const pg = await b.newPage();
    pg.on('pageerror', e => problems.push('page error: ' + e.message));
    await pg.goto('file://' + path.join(root, 'index.html')); await pg.waitForTimeout(800);
    const n = await pg.$$eval('.cand-card', x => x.length);
    if (n !== Object.keys(CANDIDATES).length) problems.push(`grid shows ${n} cards, expected ${Object.keys(CANDIDATES).length}`);
    for (const k of Object.keys(CANDIDATES)) {
      await pg.evaluate(k => { renderResults(CANDIDATES[k]); show('resultsContent'); }, k);
      const tabs = await pg.$$eval('.tab-btn', x => x.map(b => b.dataset.tab));
      for (const t of tabs) await pg.evaluate(t => setTab(t), t);
    }
    await b.close();
  } else console.log('(playwright not installed — skipped render test)');
  if (problems.length) { console.error('VALIDATION FAILED\n- ' + problems.join('\n- ')); process.exit(1); }
  console.log(`OK — ${Object.keys(CANDIDATES).length} profiles validated and rendered`);
})();

// Renders finished MP4s from the YouTube kit (graphics + script.md) with transitions and sound effects.
// Each card is held for as long as its narration takes (~150 wpm), so a voiceover can be added on top.
// Usage: node youtube/render.js [kitFolder ...]   (default: every folder under youtube/out/shorts and youtube/out/full)
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const OUT = path.join(__dirname, 'out');
const XF = 0.35; // crossfade seconds
let dirs = process.argv.slice(2);
if (!dirs.length) for (const k of ['shorts', 'full']) { const d = path.join(OUT, k); if (fs.existsSync(d)) fs.readdirSync(d).forEach(x => dirs.push(path.join(d, x))); }

for (const dir of dirs) {
  const md = fs.readFileSync(path.join(dir, 'script.md'), 'utf8');
  const blocks = [...md.matchAll(/\*\*\[ON SCREEN: ([^\]]+)\]\*\*\n([\s\S]*?)(?=\n\*\*\[ON SCREEN|\s*$)/g)];
  const cards = [];
  for (const [, g, text] of blocks) {
    const words = text.trim().split(/\s+/).length, secs = Math.max(2.5, words / 2.5);
    if (g === 'hold previous graphic') { cards[cards.length - 1].d += secs; continue; }
    cards.push({ img: path.join(dir, g.trim()), d: secs, kind: g });
  }
  const vertical = /shorts/.test(dir), W = vertical ? 1080 : 1920, H = vertical ? 1920 : 1080;
  // video: slow push-in per card, crossfades between cards
  const inputs = [], filt = [];
  cards.forEach((c, i) => {
    const dur = c.d + XF;
    inputs.push('-loop', '1', '-t', dur.toFixed(2), '-i', c.img);
    const frames = Math.round(dur * 30);
    filt.push(`[${i}:v]scale=${W * 2}:${H * 2},zoompan=z='1+0.04*on/${frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${W}x${H}:fps=30,setsar=1,format=yuv420p[v${i}]`);
  });
  let last = 'v0', t = cards[0].d;
  for (let i = 1; i < cards.length; i++) {
    filt.push(`[${last}][v${i}]xfade=transition=fade:duration=${XF}:offset=${t.toFixed(2)}[x${i}]`);
    last = `x${i}`; t += cards[i].d;
  }
  const total = t + XF;
  // sound effects, reusing the social video synth
  const ev = []; let at = 0;
  cards.forEach((c, i) => {
    if (i === 0) ev.push({ t: 0.05, k: 'thud' });
    else if (/claim/.test(c.kind)) { ev.push({ t: at, k: 'scratch' }); ev.push({ t: at + 0.5, k: 'stamp' }); }
    else if (/bottom|scorecard|money/.test(c.kind)) ev.push({ t: at, k: 'pluck' });
    else if (/end/.test(c.kind)) ev.push({ t: at, k: 'chord' });
    else ev.push({ t: at, k: 'boop' });
    at += c.d;
  });
  const cue = path.join(dir, '.cues.json'), wav = path.join(dir, '.sfx.wav');
  fs.writeFileSync(cue, JSON.stringify({ dur: total, ev }));
  execFileSync('python3', [path.join(__dirname, '..', 'social', 'sfx.py'), cue, wav]);
  const mp4 = path.join(dir, path.basename(dir) + '.mp4');
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-i', wav, '-filter_complex', filt.join(';'), '-map', `[${last}]`, '-map', `${cards.length}:a`,
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '21', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '160k', '-t', total.toFixed(2), '-movflags', '+faststart', mp4]);
  fs.unlinkSync(cue); fs.unlinkSync(wav);
  console.log(`${path.basename(dir).padEnd(42)} ${total.toFixed(1)}s  ${mp4}`);
}

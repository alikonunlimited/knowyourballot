"""Synthesizes the sound-effects track for social videos (no samples, no licensing issues).
Usage: python3 sfx.py cues.json out.wav"""
import json, sys, wave
import numpy as np

SR = 44100
cues = json.load(open(sys.argv[1]))
N = int((cues['dur'] + 0.5) * SR)
mix = np.zeros(N)

def t_(d): return np.arange(int(d * SR)) / SR
def env(n, a=0.005, r=None, d=None):
    e = np.ones(n); na = max(1, int(a * SR)); e[:na] = np.linspace(0, 1, na)
    if d: e *= np.exp(-np.arange(n) / SR / d)
    if r: nr = max(1, int(r * SR)); e[-nr:] *= np.linspace(1, 0, nr)
    return e
def saw(f, t): return 2 * ((t * f) % 1) - 1
def lp(x, a):  # one-pole lowpass, a in (0,1): smaller = darker
    y = np.empty_like(x); acc = 0.0
    for i in range(len(x)): acc += a * (x[i] - acc); y[i] = acc
    return y
rng = np.random.default_rng(7)
def add(t0, sig, g=1.0):
    i = int(t0 * SR); j = min(N, i + len(sig))
    if i < N: mix[i:j] += g * sig[:j - i]

def tick():
    t = t_(0.09); return (np.sin(2 * np.pi * 1800 * t) * env(len(t), .001, d=.02) + .4 * rng.standard_normal(len(t)) * env(len(t), .001, d=.006))
def tone(f, d, dec, harm=(1, .5, .25)):
    t = t_(d); return sum(h * np.sin(2 * np.pi * f * (k + 1) * t) for k, h in enumerate(harm)) * env(len(t), .004, r=.03, d=dec)
def tada():
    a = tone(523.25, .14, .1); b = sum(tone(f, .9, .35) for f in (783.99, 1046.5, 659.25)) / 2
    return np.concatenate([a, np.zeros(int(.02 * SR)), b])
def thud():
    t = t_(.35); f = 90 * np.exp(-t * 8) + 45
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), .002, d=.12) + .25 * rng.standard_normal(len(t)) * env(len(t), .001, d=.01)
def boing():
    t = t_(.45); f = 220 + 520 * (1 - np.exp(-t * 9)) + 25 * np.sin(2 * np.pi * 18 * t)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), .005, r=.08, d=.35) * .7
def drone(d):
    t = t_(d); x = (saw(55, t) + saw(55.4, t) + .6 * saw(82.4, t) + .5 * saw(41.2, t)) / 3
    x = lp(x, .02) * (0.8 + .2 * np.sin(2 * np.pi * 3 * t))
    e = np.minimum(1, t / .4) * np.minimum(1, (d - t) / .25); return x * e
def dun(i):
    f, d = [(146.83, .32), (138.59, .32), (110.0, 1.3)][i]
    t = t_(d); x = (saw(f, t) + saw(f * 1.004, t) + .8 * saw(f / 2, t)) / 2.4
    x = np.tanh(2.2 * lp(x, .12)) * env(len(t), .01, r=.06, d=.6 if i == 2 else .25)
    return x
def scratch():
    t = t_(.34); n = rng.standard_normal(len(t))
    sweep = np.sin(2 * np.pi * np.cumsum(900 + 2200 * np.sin(np.pi * t / .34) ** 2) / SR)
    return (lp(n, .5) * .5 + .5 * sweep * lp(n, .3)) * env(len(t), .003, r=.05) * .9
def pluck():
    out = np.zeros(int(.9 * SR))
    for k, f in enumerate((523.25, 659.25, 783.99)):
        s = tone(f, .7, .22, (1, .3, .1)); i = int(k * .07 * SR); out[i:i + len(s)] += s[:len(out) - i]
    return out * .7
def stamp():
    t = t_(.8)
    ding = (np.sin(2 * np.pi * 1568 * t) + .4 * np.sin(2 * np.pi * 3136 * t)) * env(len(t), .002, d=.25) * .45
    th = np.zeros(len(t)); x = thud(); th[:len(x)] = x * 1.2
    return th + ding
def boop():
    t = t_(.16); f = 880 - 260 * t / .16
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(len(t), .004, r=.04) * .5
def chord():
    t = t_(2.2); x = sum(np.sin(2 * np.pi * f * t) for f in (261.63, 329.63, 392.0, 523.25)) / 4
    return x * np.minimum(1, t / .25) * np.exp(-t / 1.2)

GAIN = dict(tick=.5, tada=.55, thud=.7, boing=.5, drone=.35, dun=.6, scratch=.55, pluck=.5, stamp=.85, boop=.45, chord=.5)
for e in cues['ev']:
    k = e['k']
    sig = drone(e['d']) if k == 'drone' else dun(e['i']) if k == 'dun' else globals()[k]()
    add(e['t'], sig, GAIN[k])

mix /= max(1e-9, np.abs(mix).max()) / 0.85
st = np.stack([mix, mix], 1)
with wave.open(sys.argv[2], 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((st * 32767).astype('<i2').tobytes())

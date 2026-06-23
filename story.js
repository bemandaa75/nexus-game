"use strict";

/* ══════════════════════════════════════════════
   AUDIO SYSTEM — Web Audio API (no file needed)
══════════════════════════════════════════════ */
const AudioSys = (() => {
    let ctx = null;
    let bgGain = null;
    let bgStarted = false;

    function getCtx() {
        if (!ctx) {
            ctx = new (window.AudioContext || window.webkitAudioContext)();
            bgGain = ctx.createGain();
            bgGain.gain.value = 0.18;
            bgGain.connect(ctx.destination);
        }
        return ctx;
    }

    // Background ambient — layered drones + slow LFO
    function startBg() {
        if (bgStarted) return;
        bgStarted = true;
        const c = getCtx();

        // Drone layer 1 — deep sub bass
        const drone1 = c.createOscillator();
        drone1.type = 'sine';
        drone1.frequency.value = 55;
        const g1 = c.createGain(); g1.gain.value = 0.5;
        drone1.connect(g1); g1.connect(bgGain);
        drone1.start();

        // Drone layer 2 — mid tone
        const drone2 = c.createOscillator();
        drone2.type = 'triangle';
        drone2.frequency.value = 110;
        const g2 = c.createGain(); g2.gain.value = 0.25;
        drone2.connect(g2); g2.connect(bgGain);
        drone2.start();

        // Drone layer 3 — high shimmer
        const drone3 = c.createOscillator();
        drone3.type = 'sine';
        drone3.frequency.value = 220.5;
        const g3 = c.createGain(); g3.gain.value = 0.12;
        drone3.connect(g3); g3.connect(bgGain);
        drone3.start();

        // LFO tremolo on layer 2
        const lfo = c.createOscillator();
        lfo.frequency.value = 0.18;
        const lfoGain = c.createGain(); lfoGain.gain.value = 0.08;
        lfo.connect(lfoGain); lfoGain.connect(g2.gain);
        lfo.start();

        // Slow pitch drift layer 3
        const lfo2 = c.createOscillator();
        lfo2.frequency.value = 0.07;
        const lfo2G = c.createGain(); lfo2G.gain.value = 1.5;
        lfo2.connect(lfo2G); lfo2G.connect(drone3.frequency);
        lfo2.start();

        // Fade in bg volume
        bgGain.gain.setValueAtTime(0, c.currentTime);
        bgGain.gain.linearRampToValueAtTime(0.18, c.currentTime + 3.5);
    }

    // Typewriter tick sound
    function tick() {
        const c = getCtx();
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = 'square';
        o.frequency.value = 900 + Math.random() * 400;
        g.gain.setValueAtTime(0.06, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.04);
        o.connect(g); g.connect(c.destination);
        o.start(); o.stop(c.currentTime + 0.04);
    }

    // UI click / button hover
    function click() {
        const c = getCtx();
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(440, c.currentTime);
        o.frequency.exponentialRampToValueAtTime(880, c.currentTime + 0.08);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
        o.connect(g); g.connect(c.destination);
        o.start(); o.stop(c.currentTime + 0.15);
    }

    // Dialog box appear
    function dialogAppear() {
        const c = getCtx();
        [0, 0.06, 0.12].forEach((delay, i) => {
            const o = c.createOscillator();
            const g = c.createGain();
            o.type = 'sine';
            o.frequency.value = 330 + i * 110;
            g.gain.setValueAtTime(0, c.currentTime + delay);
            g.gain.linearRampToValueAtTime(0.12, c.currentTime + delay + 0.03);
            g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + 0.2);
            o.connect(g); g.connect(c.destination);
            o.start(c.currentTime + delay);
            o.stop(c.currentTime + delay + 0.22);
        });
    }

    // Transition / go to next page
    function transition() {
        const c = getCtx();
        // Fade out bg
        bgGain.gain.linearRampToValueAtTime(0, c.currentTime + 0.6);
        // Sweep down
        const o = c.createOscillator();
        const g = c.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(600, c.currentTime);
        o.frequency.exponentialRampToValueAtTime(80, c.currentTime + 0.55);
        g.gain.setValueAtTime(0.18, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.6);
        o.connect(g); g.connect(c.destination);
        o.start(); o.stop(c.currentTime + 0.62);
    }

    return { startBg, tick, click, dialogAppear, transition };
})();

/* ── FADE IN ── */
const overlay = document.getElementById('t-overlay');
requestAnimationFrame(() => {
    overlay.style.transition = 'opacity 0.7s ease';
    overlay.classList.add('show');
});

/* ── PARTICLES ── */
(function () {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();
    const W = () => canvas.width, H = () => canvas.height;
    function mkPt() {
        const isCyan = Math.random() > 0.38;
        return {
            x: Math.random() * W(), y: H() + Math.random() * 30,
            r: Math.random() * 1.6 + 0.3, vx: (Math.random() - 0.5) * 0.35,
            vy: -(Math.random() * 0.55 + 0.2),
            c: isCyan ? '0,245,255' : '217,79,255',
            a: Math.random() * 0.55 + 0.2, life: Math.random() * 190 + 70, age: 0
        };
    }
    const pts = [];
    for (let i = 0; i < 65; i++) { const p = mkPt(); p.y = Math.random() * H(); p.age = Math.floor(Math.random() * p.life); pts.push(p); }
    function drawPts() {
        ctx.clearRect(0, 0, W(), H());
        pts.forEach((p, i) => {
            p.age++; p.x += p.vx; p.y += p.vy;
            const fi = Math.min(p.age / 20, 1);
            const fo = p.age > p.life * 0.65 ? Math.max(1 - (p.age - p.life * 0.65) / (p.life * 0.35), 0) : 1;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.c},${p.a * fi * fo})`;
            ctx.shadowBlur = 7; ctx.shadowColor = `rgba(${p.c},.85)`; ctx.fill();
            if (p.age >= p.life) pts[i] = mkPt();
        });
        requestAnimationFrame(drawPts);
    }
    requestAnimationFrame(drawPts);
})();

/* ── AVATAR ── */
const dialogAv = document.getElementById('dialog-av');
dialogAv.innerHTML = '<img src="image/ai.png" style="width:44px;height:44px;object-fit:contain;">';

/* ── TYPEWRITER ENGINE ── */
function tokenizeHTML(html) {
    const tokens = []; let i = 0;
    while (i < html.length) {
        if (html[i] === '<') {
            const end = html.indexOf('>', i);
            if (end === -1) { tokens.push({ type: 'char', char: html[i] }); i++; }
            else { tokens.push({ type: 'tag', html: html.slice(i, end + 1) }); i = end + 1; }
        } else if (html[i] === '&') {
            const end = html.indexOf(';', i);
            if (end === -1) { tokens.push({ type: 'char', char: html[i] }); i++; }
            else { tokens.push({ type: 'char', char: html.slice(i, end + 1) }); i = end + 1; }
        } else { tokens.push({ type: 'char', char: html[i] }); i++; }
    }
    return tokens;
}
function typeLineHTML(el, lineHTML, speed, onDone) {
    const tokens = tokenizeHTML(lineHTML); let built = ''; let idx = 0;
    const cursor = '<span class="cursor"></span>';
    function step() {
        if (idx >= tokens.length) { el.innerHTML = built; if (onDone) onDone(); return; }
        const token = tokens[idx]; idx++;
        if (token.type === 'tag') { built += token.html; step(); }
        else { built += token.char; el.innerHTML = built + cursor; setTimeout(step, speed); }
    }
    step();
}

/* ── DATA NARASI ── */
const STORY_LINES = [
    { html: 'Tahun 2045, laboratorium komputer modern bernama <span class="hl-cy">NEXUS LAB</span> menggunakan AI bernama <span class="hl-pu">NEXUS</span> untuk mengontrol seluruh sistem digital.', speedMs: 30, pauseAfterMs: 500 },
    { html: 'Saat praktikum berlangsung, terjadi <span class="hl-pk">kerusakan data</span> pada sistem utama akibat error digital. NEXUS kehilangan kendali dan mengaktifkan <span class="hl-pk">mode lockdown</span> secara otomatis.', speedMs: 28, pauseAfterMs: 500 },
    { html: 'Seluruh pintu laboratorium <span class="hl-pk">terkunci.</span>', speedMs: 35, pauseAfterMs: 500 },
    { html: 'Kamu terjebak di dalam. Selesaikan semua <span class="hl-cy">puzzle sistem bilangan komputer</span> untuk memperbaiki sistem sebelum <span class="hl-pk">shutdown total!</span>', speedMs: 26, pauseAfterMs: 0 },
];
const DIALOG_HTML = 'Halo! Aku <em>NEXUS-AI</em>, asisten labmu. Selesaikan setiap puzzle dan aku akan membantumu. <em>Bersiaplah!</em>';

const storyEl = document.getElementById('story-text');
const dialogEl = document.getElementById('dialog-text');
const dialogBox = document.getElementById('dialog-box');

function buildStory() {
    const lineEls = STORY_LINES.map((_, i) => {
        const p = document.createElement('p');
        p.style.marginBottom = i < STORY_LINES.length - 1 ? '10px' : '0';
        storyEl.appendChild(p); return p;
    });
    function typeLineIndex(i) {
        if (i >= STORY_LINES.length) {
            setTimeout(() => { dialogEl.innerHTML = DIALOG_HTML; dialogBox.classList.add('show'); AudioSys.dialogAppear(); }, 600);
            return;
        }
        const line = STORY_LINES[i];
        typeLineHTML(lineEls[i], line.html, line.speedMs, () => {
            setTimeout(() => typeLineIndex(i + 1), line.pauseAfterMs);
        });
    }
    typeLineIndex(0);
}
setTimeout(buildStory, 750);

/* ── NAVIGASI ── */
function goTo(url) {
    AudioSys.transition();
    overlay.style.transition = 'opacity 0.65s ease';
    overlay.style.opacity = '1';
    setTimeout(() => { window.location.href = url; }, 650);
}

/* START GAME → langsung lobby (tanpa tutorial) */
document.getElementById('btnStart').addEventListener('click', () => {
    AudioSys.click();
    localStorage.removeItem('playerName');
    localStorage.removeItem('playerAvatar');
    goTo('lobby.html');
});

/* HOW TO PLAY → tutorial dulu */
document.getElementById('btnHow').addEventListener('click', () => { AudioSys.click(); goTo('tutorial.html'); });

// Start bg audio on any first interaction
document.addEventListener('click', () => AudioSys.startBg(), { once: true });
document.addEventListener('keydown', () => AudioSys.startBg(), { once: true });

// Hover sfx on buttons
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => AudioSys.click());
});

document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); AudioSys.click(); goTo('lobby.html'); }
});
"use strict";

/* ── Fade in ── */
const overlay = document.getElementById('t-overlay');
requestAnimationFrame(() => {
    overlay.style.transition = 'opacity .55s ease';
    overlay.style.opacity = '0';
});

/* ── Particles ringan ── */
(function () {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();
    const W = () => canvas.width, H = () => canvas.height;
    function mkPt() {
        return {
            x: Math.random() * W(), y: H() + 20,
            r: Math.random() * .7 + .2, vx: (Math.random() - .5) * .22, vy: -(Math.random() * .3 + .12),
            a: Math.random() * .16 + .05, life: Math.random() * 150 + 60, age: 0
        };
    }
    const pts = [];
    for (let i = 0; i < 28; i++) { const p = mkPt(); p.y = Math.random() * H(); p.age = Math.floor(Math.random() * p.life); pts.push(p); }
    function draw() {
        ctx.clearRect(0, 0, W(), H());
        pts.forEach((p, i) => {
            p.age++; p.x += p.vx; p.y += p.vy;
            const fi = Math.min(p.age / 20, 1);
            const fo = p.age > p.life * .65 ? Math.max(1 - (p.age - p.life * .65) / (p.life * .35), 0) : 1;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(180,210,255,${p.a * fi * fo})`; ctx.fill();
            if (p.age >= p.life) pts[i] = mkPt();
        });
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();

/* ── Card active highlight ── */
const cards = document.querySelectorAll('.tut-card');
window.setActive = function (idx) {
    cards.forEach((c, i) => c.classList.toggle('active', i === idx));
};
setActive(0);

/* ── Loading bar — animasi 0→100% dalam 2.5 detik ── */
const barFill = document.getElementById('bar-fill');
const barPct = document.getElementById('bar-pct');
const DURATION = 10000;
let loadStart = null;

function tickLoad(ts) {
    if (!loadStart) loadStart = ts;
    const elapsed = Math.min(ts - loadStart, DURATION);
    const pct = Math.round((elapsed / DURATION) * 100);
    barFill.style.width = pct + '%';
    barPct.textContent = pct + '%';
    if (elapsed < DURATION) requestAnimationFrame(tickLoad);
}
requestAnimationFrame(tickLoad);

/* ── Navigasi — HANYA SKIP dan START GAME, tidak ada NEXT ── */
function goTo(url) {
    overlay.style.transition = 'opacity .55s ease';
    overlay.style.opacity = '1';
    setTimeout(() => { window.location.href = url; }, 550);
}

document.getElementById('btnBack').addEventListener('click', () => goTo('story.html'));
document.getElementById('btnStart').addEventListener('click', () => goTo('lobby.html'));

/* Keyboard: Enter/Space → START, Esc → SKIP */
document.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo('lobby.html'); }
    if (e.key === 'Escape') { goTo('lobby.html'); }
});
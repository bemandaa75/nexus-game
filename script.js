(function () {
    "use strict";

    /* ── Config ── */
    const CONFIG = {
        totalDuration: 9000,   // durasi loading (ms) — naikkan untuk lebih lambat
        messages: [
            "LOADING DATA PACKS...",
            "INITIALIZING NEURAL CORE...",
            "SYNCING LOGIC MODULES...",
            "CALIBRATING SENSORS...",
            "ESTABLISHING NEXUS LINK...",
        ],
        particleCount: 65,
    };

    /* ── DOM ── */
    const barFill = document.getElementById("bar-fill");
    const pctLabel = document.getElementById("percent-label");
    const loadText = document.getElementById("loading-text");
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    /* ── Easing ── */
    const ease = t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    /* ── Loading bar ── */
    let startTime = null, msgIdx = 0;
    loadText.style.transition = "opacity .25s";

    function tick(ts) {
        if (!startTime) startTime = ts;
        const elapsed = Math.min(ts - startTime, CONFIG.totalDuration);
        const e = ease(elapsed / CONFIG.totalDuration);
        const pct = Math.round(e * 100);

        barFill.style.width = pct + "%";
        pctLabel.textContent = pct + "%";

        // ganti pesan
        const ni = Math.floor(e * CONFIG.messages.length);
        if (ni !== msgIdx && ni < CONFIG.messages.length) {
            msgIdx = ni;
            loadText.style.opacity = "0";
            setTimeout(() => {
                loadText.textContent = CONFIG.messages[msgIdx];
                loadText.style.opacity = "1";
            }, 150);
        }

        if (elapsed < CONFIG.totalDuration) {
            requestAnimationFrame(tick);
        } else {
            onComplete();
        }
    }

    function onComplete() {
        // bar putih menyala saat selesai
        barFill.style.transition = "background .3s, box-shadow .3s";
        barFill.style.background = "linear-gradient(90deg, var(--cyan, #00f5ff), #fff)";
        barFill.style.boxShadow = "0 0 30px #fff, 0 0 60px #00f5ff";
        loadText.textContent = "SYSTEM READY";
        loadText.style.color = "#ffffff";
        pctLabel.textContent = "100%";

        // fade out → pindah ke story.html
        setTimeout(() => {
            const splash = document.getElementById("splash");
            splash.style.transition = "opacity .85s ease";
            splash.style.opacity = "0";
            setTimeout(() => {
                window.location.href = "story.html";
            }, 850);
        }, 900);
    }

    requestAnimationFrame(tick);

    /* ── Particles ── */
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    const W = () => canvas.width;
    const H = () => canvas.height;

    function mkPt() {
        const isCyan = Math.random() > .38;
        return {
            x: Math.random() * W(),
            y: H() + Math.random() * 30,
            r: Math.random() * 1.6 + .3,
            vx: (Math.random() - .5) * .35,
            vy: -(Math.random() * .55 + .2),
            c: isCyan ? "0,245,255" : "217,79,255",
            a: Math.random() * .55 + .2,
            life: Math.random() * 190 + 70,
            age: 0,
        };
    }

    const pts = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
        const p = mkPt();
        p.y = Math.random() * H();
        p.age = Math.floor(Math.random() * p.life);
        pts.push(p);
    }

    function drawPts() {
        ctx.clearRect(0, 0, W(), H());
        pts.forEach((p, i) => {
            p.age++; p.x += p.vx; p.y += p.vy;
            const fi = Math.min(p.age / 20, 1);
            const fo = p.age > p.life * .65
                ? Math.max(1 - (p.age - p.life * .65) / (p.life * .35), 0) : 1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.c},${p.a * fi * fo})`;
            ctx.shadowBlur = 7;
            ctx.shadowColor = `rgba(${p.c},.85)`;
            ctx.fill();
            if (p.age >= p.life) pts[i] = mkPt();
        });
        requestAnimationFrame(drawPts);
    }
    requestAnimationFrame(drawPts);

})();
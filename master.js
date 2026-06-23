// ============================================================
// MASTER CORE — QUESTION BANK (60 soal gabungan semua room)
// ============================================================
const questionBank = [

    // ── BINARY: Desimal → Biner (10 soal) ────────────────────
    { type: "BINARY", q: "45₁₀ = ?₂", a: "101101", hint: ["Bagi 45 dengan 2 terus, catat sisa dari bawah ke atas.", "45=32+8+4+1 → bit 5,3,2,0 aktif.", "101101"] },
    { type: "BINARY", q: "78₁₀ = ?₂", a: "1001110", hint: ["78=64+8+4+2", "Bit 6,3,2,1 aktif.", "1001110"] },
    { type: "BINARY", q: "100₁₀ = ?₂", a: "1100100", hint: ["100=64+32+4", "Bit 6,5,2 aktif.", "1100100"] },
    { type: "BINARY", q: "255₁₀ = ?₂", a: "11111111", hint: ["255=2⁸-1", "Semua 8 bit aktif.", "11111111"] },
    { type: "BINARY", q: "200₁₀ = ?₂", a: "11001000", hint: ["200=128+64+8", "Bit 7,6,3 aktif.", "11001000"] },
    { type: "BINARY", q: "37₁₀ = ?₂", a: "100101", hint: ["37=32+4+1", "Bit 5,2,0 aktif.", "100101"] },
    { type: "BINARY", q: "150₁₀ = ?₂", a: "10010110", hint: ["150=128+16+4+2", "Bit 7,4,2,1 aktif.", "10010110"] },
    { type: "BINARY", q: "63₁₀ = ?₂", a: "111111", hint: ["63=2⁶-1", "Semua 6 bit aktif.", "111111"] },
    { type: "BINARY", q: "128₁₀ = ?₂", a: "10000000", hint: ["128=2⁷", "Hanya bit ke-7 aktif.", "10000000"] },
    { type: "BINARY", q: "210₁₀ = ?₂", a: "11010010", hint: ["210=128+64+16+2", "Bit 7,6,4,1 aktif.", "11010010"] },

    // ── DECIMAL: Biner → Desimal (10 soal) ───────────────────
    { type: "DECIMAL", q: "11010110₂ = ?₁₀", a: "214", hint: ["Posisi bit: 128,64,32,16,8,4,2,1", "128+64+16+4+2=214", "214"] },
    { type: "DECIMAL", q: "10110011₂ = ?₁₀", a: "179", hint: ["128+32+16+2+1=179", "Hitung posisi bit yang bernilai 1", "179"] },
    { type: "DECIMAL", q: "1111010₂ = ?₁₀", a: "122", hint: ["64+32+16+8+2=122", "7 bit: 64,32,16,8,4,2,1", "122"] },
    { type: "DECIMAL", q: "10000001₂ = ?₁₀", a: "129", hint: ["Hanya bit pertama dan terakhir aktif.", "128+1=129", "129"] },
    { type: "DECIMAL", q: "11111100₂ = ?₁₀", a: "252", hint: ["6 bit atas aktif, 2 bit bawah mati.", "128+64+32+16+8+4=252", "252"] },
    { type: "DECIMAL", q: "1010101₂ = ?₁₀", a: "85", hint: ["Bit ganjil aktif semua", "64+16+4+1=85", "85"] },
    { type: "DECIMAL", q: "11100011₂ = ?₁₀", a: "227", hint: ["128+64+32+2+1=227", "Bit 7,6,5,1,0 aktif", "227"] },
    { type: "DECIMAL", q: "10101010₂ = ?₁₀", a: "170", hint: ["128+32+8+2=170", "Pola selang-seling mulai dari bit 7", "170"] },
    { type: "DECIMAL", q: "01110110₂ = ?₁₀", a: "118", hint: ["64+32+16+4+2=118", "Bit 6,5,4,2,1 aktif", "118"] },
    { type: "DECIMAL", q: "11001100₂ = ?₁₀", a: "204", hint: ["128+64+8+4=204", "Bit 7,6,3,2 aktif", "204"] },

    // ── OCTAL: Desimal → Oktal (6 soal) ──────────────────────
    { type: "OCTAL", q: "175₁₀ = ?₈", a: "257", hint: ["175÷8=21 sisa 7, 21÷8=2 sisa 5, 2÷8=0 sisa 2", "Baca dari bawah: 257₈", "257"] },
    { type: "OCTAL", q: "512₁₀ = ?₈", a: "1000", hint: ["512=8³", "8³=1000 dalam oktal", "1000"] },
    { type: "OCTAL", q: "255₁₀ = ?₈", a: "377", hint: ["255÷8=31 sisa 7, 31÷8=3 sisa 7, 3÷8=0 sisa 3", "377₈", "377"] },
    { type: "OCTAL", q: "300₁₀ = ?₈", a: "454", hint: ["300÷8=37 sisa 4, 37÷8=4 sisa 5, 4÷8=0 sisa 4", "Cek: 4×64+5×8+4=300 ✓", "454"] },
    { type: "OCTAL", q: "1000₁₀ = ?₈", a: "1750", hint: ["1000÷8=125 r0, 125÷8=15 r5, 15÷8=1 r7, 1÷8=0 r1", "1750₈", "1750"] },
    { type: "OCTAL", q: "128₁₀ = ?₈", a: "200", hint: ["128=2×64=2×8²", "200₈", "200"] },

    // ── OCTAL: Oktal → Desimal (5 soal) ──────────────────────
    { type: "OCTAL", q: "347₈ = ?₁₀", a: "231", hint: ["3×64+4×8+7×1=231", "192+32+7=231", "231"] },
    { type: "OCTAL", q: "777₈ = ?₁₀", a: "511", hint: ["7×64+7×8+7=511", "448+56+7=511", "511"] },
    { type: "OCTAL", q: "1234₈ = ?₁₀", a: "668", hint: ["1×512+2×64+3×8+4", "512+128+24+4=668", "668"] },
    { type: "OCTAL", q: "52₈ = ?₁₀", a: "42", hint: ["5×8+2=42", "40+2=42", "42"] },
    { type: "OCTAL", q: "144₈ = ?₁₀", a: "100", hint: ["1×64+4×8+4=100", "64+32+4=100", "100"] },

    // ── HEXA: Desimal → Hex (7 soal) ─────────────────────────
    { type: "HEXA", q: "255₁₀ = ?₁₆", a: "FF", hint: ["255=15×16+15", "F=15 dalam hex", "FF"] },
    { type: "HEXA", q: "256₁₀ = ?₁₆", a: "100", hint: ["256=1×16²", "100₁₆", "100"] },
    { type: "HEXA", q: "171₁₀ = ?₁₆", a: "AB", hint: ["171÷16=10 sisa 11", "10=A, 11=B", "AB"] },
    { type: "HEXA", q: "4096₁₀ = ?₁₆", a: "1000", hint: ["4096=16³", "1000₁₆", "1000"] },
    { type: "HEXA", q: "2748₁₀ = ?₁₆", a: "ABC", hint: ["2748÷16=171 r12(C), 171÷16=10 r11(B), 10=A", "ABC₁₆", "ABC"] },
    { type: "HEXA", q: "3840₁₀ = ?₁₆", a: "F00", hint: ["3840=15×256", "F=15 → F00₁₆", "F00"] },
    { type: "HEXA", q: "16₁₀ = ?₁₆", a: "10", hint: ["16=1×16¹", "10₁₆", "10"] },

    // ── HEXA: Hex → Desimal (7 soal) ─────────────────────────
    { type: "HEXA", q: "1A₁₆ = ?₁₀", a: "26", hint: ["1×16+A(10)=26", "16+10=26", "26"] },
    { type: "HEXA", q: "FF₁₆ = ?₁₀", a: "255", hint: ["F×16+F=255", "15×16+15=255", "255"] },
    { type: "HEXA", q: "2F₁₆ = ?₁₀", a: "47", hint: ["2×16+F(15)=47", "32+15=47", "47"] },
    { type: "HEXA", q: "100₁₆ = ?₁₀", a: "256", hint: ["1×16²=256", "256", "256"] },
    { type: "HEXA", q: "3C₁₆ = ?₁₀", a: "60", hint: ["3×16+C(12)=60", "48+12=60", "60"] },
    { type: "HEXA", q: "7F₁₆ = ?₁₀", a: "127", hint: ["7×16+F(15)=127", "112+15=127", "127"] },
    { type: "HEXA", q: "B4₁₆ = ?₁₀", a: "180", hint: ["B(11)×16+4=180", "176+4=180", "180"] },

    // ── LOGIC GATE (15 soal) ──────────────────────────────────
    { type: "LOGIC", q: "A=1, B=1, C=0\n(A AND B) OR C = ?", a: "1", hint: ["AND dulu: 1 AND 1=1", "Lalu OR: 1 OR 0=1", "1"] },
    { type: "LOGIC", q: "A=1, B=0, C=1\n(A OR B) AND C = ?", a: "1", hint: ["1 OR 0=1", "1 AND 1=1", "1"] },
    { type: "LOGIC", q: "A=1, B=1\nNOT(A AND B) = ?", a: "0", hint: ["AND: 1 AND 1=1", "NOT 1=0", "0"] },
    { type: "LOGIC", q: "A=0, B=0, C=1\n(A NOR B) AND C = ?", a: "1", hint: ["NOR: NOT(0 OR 0)=NOT(0)=1", "1 AND 1=1", "1"] },
    { type: "LOGIC", q: "A=1, B=0\n(A NAND B) OR (A XOR B) = ?", a: "1", hint: ["NAND: NOT(1 AND 0)=1", "XOR: 1≠0=1", "1 OR 1=1"] },
    { type: "LOGIC", q: "A=1, B=1\n(A XOR B) OR (A XNOR B) = ?", a: "1", hint: ["XOR: 1 XOR 1=0", "XNOR: 1 XNOR 1=1", "0 OR 1=1"] },
    { type: "LOGIC", q: "A=0, B=1, C=0\nNOT A AND (B OR C) = ?", a: "1", hint: ["NOT 0=1", "B OR C=1 OR 0=1", "1 AND 1=1"] },
    { type: "LOGIC", q: "A=1, B=0, C=1\nNOT(A XOR C) AND B = ?", a: "0", hint: ["XOR: 1 XOR 1=0", "NOT 0=1", "1 AND 0=0"] },
    { type: "LOGIC", q: "A=1, B=1, C=1\n(A NAND B) NAND C = ?", a: "1", hint: ["NAND: NOT(1 AND 1)=0", "0 NAND 1=NOT(0 AND 1)=1", "1"] },
    { type: "LOGIC", q: "A=0, B=0\nNOT(A OR B) AND NOT(A AND B) = ?", a: "1", hint: ["NOT(0 OR 0)=1", "NOT(0 AND 0)=1", "1 AND 1=1"] },
    { type: "LOGIC", q: "A=1, B=0, C=1, D=0\n(A AND B) OR (C AND D) = ?", a: "0", hint: ["A AND B=0", "C AND D=0", "0 OR 0=0"] },
    { type: "LOGIC", q: "A=1, B=1, C=0\nNOT(A XOR B) OR C = ?", a: "1", hint: ["XOR: 1 XOR 1=0", "NOT 0=1", "1 OR 0=1"] },
    { type: "LOGIC", q: "A=1, B=0\nA XNOR B = ?", a: "0", hint: ["XNOR: output 1 jika SAMA", "1≠0, jadi output 0", "0"] },
    { type: "LOGIC", q: "A=0, B=1\n(NOT A) AND (NOT B) = ?", a: "0", hint: ["NOT 0=1", "NOT 1=0", "1 AND 0=0"] },
    { type: "LOGIC", q: "A=1, B=1, C=0\n(A OR C) AND (B OR C) = ?", a: "1", hint: ["A OR C = 1 OR 0 = 1", "B OR C = 1 OR 0 = 1", "1 AND 1=1"] },
];

// ============================================================
// LANGUAGE STRINGS
// ============================================================
const LANG = {
    id: {
        nexusDefault: "MASTER CORE aktif. Gunakan semua pengetahuanmu untuk menyelesaikan tantangan akhir.",
        nexusHint: (rem) => `Hint diberikan. Sisa hint: ${rem}.`,
        nexusWrong: "Jawaban salah! Analisis ulang dan coba lagi.",
        restartConfirm: "Yakin ingin mengulang Master Core dari awal?",
        failDesc: "Sistem terganggu!<br>Coba lagi!",
        successDesc: "Luar biasa!<br>Core Power meningkat!",
        nextBtn: "LANJUT ▶",
        lobbyBtn: "↩ KEMBALI",
        saveClose: "SIMPAN & TUTUP",
    },
    en: {
        nexusDefault: "MASTER CORE active. Use all your knowledge to complete the final challenge.",
        nexusHint: (rem) => `Hint provided. Hints left: ${rem}.`,
        nexusWrong: "Wrong answer! Re-analyze and try again.",
        restartConfirm: "Are you sure you want to restart Master Core?",
        failDesc: "System disrupted!<br>Try again!",
        successDesc: "Excellent!<br>Core Power increased!",
        nextBtn: "NEXT ▶",
        lobbyBtn: "↩ BACK",
        saveClose: "SAVE & CLOSE",
    }
};

const nexusMessages = [
    "NEXUS CORE: Ini adalah ujian terakhir. Semua yang kamu pelajari diuji di sini.",
    "NEXUS CORE: Binary, Decimal, Octal, Hexa, Logic Gate — semuanya ada di sini.",
    "NEXUS CORE: Kamu sudah sejauh ini. Jangan menyerah sekarang.",
    "NEXUS CORE: Setiap jawaban benar membawa kamu lebih dekat ke kebebasan.",
    "NEXUS CORE: Sistem memantau setiap inputmu dengan seksama.",
    "NEXUS CORE: Konsentrasi. Satu soal satu waktu.",
    "NEXUS CORE: Ingat tabel konversi! Setiap sistem bilangan punya polanya.",
    "NEXUS CORE: Hex A=10, B=11, C=12, D=13, E=14, F=15. Ingat!",
    "NEXUS CORE: Oktal hanya gunakan digit 0-7. Tidak ada 8 atau 9!",
    "NEXUS CORE: Biner adalah bahasa mesin yang paling mendasar.",
    "NEXUS CORE: Logic gate: AND butuh SEMUA 1. OR butuh SATU 1.",
    "NEXUS CORE: NOT membalik. NAND = NOT AND. NOR = NOT OR.",
    "NEXUS CORE: XOR: BERBEDA = 1, SAMA = 0.",
    "NEXUS CORE: Waktu terus berjalan. Analisis dengan cepat dan tepat.",
    "NEXUS CORE: Kamu adalah satu-satunya harapan lab ini.",
    "NEXUS CORE: 20 soal. 20 menit. Buktikan kamu layak.",
    "NEXUS CORE: Setiap sistem bilangan punya kekuatan masing-masing.",
    "NEXUS CORE: Master Engineer tidak terburu-buru, tapi tidak menunggu.",
    "NEXUS CORE: Gunakan hintmu dengan bijak — hanya ada 3.",
    "NEXUS CORE: Laboratorium ini bergantung padamu.",
];

// ============================================================
// AUDIO ENGINE
// ============================================================
let audioCtx = null, musicGain = null, sfxGain = null;
let musicNode = null, musicEnabled = true, sfxEnabled = true;
let musicVolume = 0.4, sfxVolume = 0.7;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        musicGain = audioCtx.createGain(); musicGain.gain.value = musicVolume; musicGain.connect(audioCtx.destination);
        sfxGain = audioCtx.createGain(); sfxGain.gain.value = sfxVolume; sfxGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playSfx(type) {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx(), vol = sfxGain;
    switch (type) {
        case 'click': {
            const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
            o.frequency.value = 880; o.type = 'sine';
            g.gain.setValueAtTime(0.15, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            o.start(); o.stop(ctx.currentTime + 0.07); break;
        }
        case 'success': {
            [440, 554, 659, 880, 1108].forEach((freq, i) => {
                const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
                o.frequency.value = freq; o.type = 'sine';
                const t = ctx.currentTime + i * 0.1;
                g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
                o.start(t); o.stop(t + 0.28);
            }); break;
        }
        case 'fail': {
            const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
            o.type = 'sawtooth'; o.frequency.setValueAtTime(300, ctx.currentTime);
            o.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.35);
            g.gain.setValueAtTime(0.3, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
            o.start(); o.stop(ctx.currentTime + 0.35); break;
        }
        case 'hint': {
            [330, 440, 550].forEach((freq, i) => {
                const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
                o.frequency.value = freq; o.type = 'sine';
                const t = ctx.currentTime + i * 0.12;
                g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
                o.start(t); o.stop(t + 0.2);
            }); break;
        }
        case 'gameover': {
            [300, 240, 180, 100, 60].forEach((freq, i) => {
                const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
                o.frequency.value = freq; o.type = 'square';
                const t = ctx.currentTime + i * 0.2;
                g.gain.setValueAtTime(0.25, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
                o.start(t); o.stop(t + 0.25);
            }); break;
        }
        case 'timerWarn': {
            const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
            o.frequency.value = 1100; o.type = 'square';
            g.gain.setValueAtTime(0.08, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            o.start(); o.stop(ctx.currentTime + 0.05); break;
        }
        case 'backspace': {
            const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
            o.frequency.value = 200; o.type = 'sine';
            g.gain.setValueAtTime(0.1, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            o.start(); o.stop(ctx.currentTime + 0.07); break;
        }
    }
}

function startMusic() {
    if (!musicEnabled) return;
    const ctx = getAudioCtx(); stopMusic();
    const nodes = [];

    const drone = ctx.createOscillator(); const dg = ctx.createGain();
    drone.type = 'sawtooth'; drone.frequency.value = 40; dg.gain.value = 0.12;
    drone.connect(dg); dg.connect(musicGain); drone.start(); nodes.push(drone, dg);

    const mid = ctx.createOscillator(); const mg = ctx.createGain();
    mid.type = 'triangle'; mid.frequency.value = 80; mg.gain.value = 0.08;
    mid.connect(mg); mg.connect(musicGain); mid.start(); nodes.push(mid, mg);

    const shimmer = ctx.createOscillator(); const sg = ctx.createGain();
    shimmer.type = 'sine'; shimmer.frequency.value = 160.5; sg.gain.value = 0.05;
    shimmer.connect(sg); sg.connect(musicGain); shimmer.start(); nodes.push(shimmer, sg);

    const lfo = ctx.createOscillator(); const lg = ctx.createGain();
    lfo.frequency.value = 0.12; lg.gain.value = 0.04;
    lfo.connect(lg); lg.connect(dg.gain); lfo.start(); nodes.push(lfo, lg);

    const noteFreqs = [80, 100, 80, 90, 75, 100, 80, 120];
    let noteIdx = 0;
    function scheduleNote() {
        if (!musicEnabled) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = noteFreqs[noteIdx % noteFreqs.length]; noteIdx++;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.4);
        o.connect(g); g.connect(musicGain); o.start(); o.stop(ctx.currentTime + 1.4);
        musicNode._noteTimer = setTimeout(scheduleNote, 1800);
    }
    musicNode = { nodes, _noteTimer: null }; scheduleNote();
}

function stopMusic() {
    if (musicNode) {
        clearTimeout(musicNode._noteTimer);
        musicNode.nodes.forEach(n => { try { n.stop ? n.stop() : n.disconnect(); } catch (e) { } });
        musicNode = null;
    }
}

function playVictorySound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx(), vol = sfxGain;
    [
        { freq: 440, t: 0.0, dur: 0.3 }, { freq: 554, t: 0.15, dur: 0.3 }, { freq: 659, t: 0.30, dur: 0.3 },
        { freq: 880, t: 0.45, dur: 0.5 }, { freq: 740, t: 0.50, dur: 0.5 }, { freq: 1109, t: 0.65, dur: 0.5 },
        { freq: 880, t: 0.80, dur: 0.3 }, { freq: 1318, t: 0.95, dur: 1.0 }, { freq: 1109, t: 1.0, dur: 1.0 },
    ].forEach(({ freq, t, dur }) => {
        const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
        o.type = 'sine'; o.frequency.value = freq;
        const start = ctx.currentTime + t;
        g.gain.setValueAtTime(0, start); g.gain.linearRampToValueAtTime(0.28, start + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, start + dur);
        o.start(start); o.stop(start + dur);
    });
}

function playOpeningSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx(), vol = sfxGain;
    const sweep = ctx.createOscillator(); const swg = ctx.createGain();
    sweep.connect(swg); swg.connect(vol); sweep.type = 'sawtooth';
    sweep.frequency.setValueAtTime(50, ctx.currentTime);
    sweep.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.8);
    swg.gain.setValueAtTime(0.25, ctx.currentTime);
    swg.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.85);
    sweep.start(); sweep.stop(ctx.currentTime + 0.85);
    [440, 554, 659, 880].forEach((freq, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
        o.type = 'sine'; o.frequency.value = freq;
        const t = ctx.currentTime + 0.8 + i * 0.12;
        g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
        o.start(t); o.stop(t + 0.18);
    });
}

function playDoorUnlockSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx(), vol = sfxGain;
    [
        { freq: 180, t: 0, dur: 0.15, type: 'sawtooth', gain: 0.14 },
        { freq: 130, t: 0.1, dur: 0.2, type: 'sawtooth', gain: 0.12 },
        { freq: 440, t: 0.3, dur: 0.15, type: 'sine', gain: 0.25 },
        { freq: 554, t: 0.45, dur: 0.15, type: 'sine', gain: 0.25 },
        { freq: 659, t: 0.6, dur: 0.35, type: 'sine', gain: 0.3 },
        { freq: 880, t: 0.75, dur: 0.5, type: 'sine', gain: 0.28 },
    ].forEach(({ freq, t, dur, type, gain }) => {
        const o = ctx.createOscillator(), g = ctx.createGain(); o.connect(g); g.connect(vol);
        o.type = type; o.frequency.value = freq;
        const start = ctx.currentTime + t;
        g.gain.setValueAtTime(gain, start); g.gain.exponentialRampToValueAtTime(0.001, start + dur);
        o.start(start); o.stop(start + dur);
    });
}

// ============================================================
// SETTINGS
// ============================================================
let currentLang = localStorage.getItem('nexusLang') || 'id';

function openSettings() {
    clearInterval(timerInterval);
    modalOverlay.classList.remove('hidden');
    [modalSuccess, modalFail, modalTransition, modalGameover].forEach(m => m.classList.add('hidden'));
    document.getElementById('modal-settings').classList.remove('hidden');
    document.getElementById('toggle-music').textContent = musicEnabled ? 'ON' : 'OFF';
    document.getElementById('toggle-music').classList.toggle('toggle-off', !musicEnabled);
    document.getElementById('toggle-sfx').textContent = sfxEnabled ? 'ON' : 'OFF';
    document.getElementById('toggle-sfx').classList.toggle('toggle-off', !sfxEnabled);
    document.getElementById('vol-music').value = Math.round(musicVolume * 100);
    document.getElementById('vol-music-val').textContent = Math.round(musicVolume * 100);
    document.getElementById('vol-sfx').value = Math.round(sfxVolume * 100);
    document.getElementById('vol-sfx-val').textContent = Math.round(sfxVolume * 100);
    document.getElementById('lang-id').classList.toggle('active', currentLang === 'id');
    document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
}

function closeSettings() {
    document.getElementById('modal-settings').classList.add('hidden');
    modalOverlay.classList.add('hidden'); startTimer();
    localStorage.setItem('nexusLang', currentLang);
    localStorage.setItem('nexusMusic', musicEnabled);
    localStorage.setItem('nexusSfx', sfxEnabled);
    localStorage.setItem('nexusMusicVol', musicVolume);
    localStorage.setItem('nexusSfxVol', sfxVolume);
}

function toggleMusic() { musicEnabled = !musicEnabled; const btn = document.getElementById('toggle-music'); btn.textContent = musicEnabled ? 'ON' : 'OFF'; btn.classList.toggle('toggle-off', !musicEnabled); if (musicEnabled) startMusic(); else stopMusic(); }
function toggleSfx() { sfxEnabled = !sfxEnabled; const btn = document.getElementById('toggle-sfx'); btn.textContent = sfxEnabled ? 'ON' : 'OFF'; btn.classList.toggle('toggle-off', !sfxEnabled); }
function setMusicVolume(val) { musicVolume = val / 100; if (musicGain) musicGain.gain.value = musicVolume; document.getElementById('vol-music-val').textContent = val; }
function setSfxVolume(val) { sfxVolume = val / 100; if (sfxGain) sfxGain.gain.value = sfxVolume; document.getElementById('vol-sfx-val').textContent = val; }
function setLanguage(lang) { currentLang = lang; document.getElementById('lang-id').classList.toggle('active', lang === 'id'); document.getElementById('lang-en').classList.toggle('active', lang === 'en'); applyLanguage(); }

function loadPrefs() {
    const sl = localStorage.getItem('nexusLang'); if (sl) currentLang = sl;
    const sm = localStorage.getItem('nexusMusic'); if (sm !== null) musicEnabled = sm === 'true';
    const ss = localStorage.getItem('nexusSfx'); if (ss !== null) sfxEnabled = ss === 'true';
    const smv = localStorage.getItem('nexusMusicVol'); if (smv !== null) musicVolume = parseFloat(smv);
    const ssv = localStorage.getItem('nexusSfxVol'); if (ssv !== null) sfxVolume = parseFloat(ssv);
}

function applyLanguage() {
    const t = LANG[currentLang];
    nexusDialog.textContent = t.nexusDefault;
    const fd = document.getElementById('fail-desc'); if (fd) fd.innerHTML = t.failDesc;
    const sb = document.querySelector('#modal-settings .modal-btn-gold'); if (sb) sb.textContent = t.saveClose;
}

// ============================================================
// GAME STATE — 20 soal, 20 menit
// ============================================================
const TOTAL_QUESTIONS = 20;
const TOTAL_TIME = 1200; // 20 menit

let questionsList = [], currentQuestionIndex = 0, currentInput = "";
let lives = 5, timeInSeconds = TOTAL_TIME, timerInterval = null, score = 0;
let hintsRemaining = 3, currentHintIndex = 0, currentHints = [];

const answerDisplay = document.getElementById("answer-display");
const questionDisplay = document.getElementById("question-display");
const questionCounter = document.getElementById("question-counter");
const livesDisplay = document.getElementById("lives-display");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");
const hintDisplay = document.getElementById("hint-display");
const hintBtn = document.getElementById("hint-btn");
const nexusDialog = document.getElementById("nexus-dialog");
let typingInterval;

const modalOverlay = document.getElementById("modal-overlay");
const modalSuccess = document.getElementById("modal-success");
const modalFail = document.getElementById("modal-fail");
const modalTransition = document.getElementById("modal-transition");
const modalGameover = document.getElementById("modal-gameover");

const TYPE_LABELS = { BINARY: 'BINARY', DECIMAL: 'DECIMAL', OCTAL: 'OCTAL', HEXA: 'HEXADECIMAL', LOGIC: 'LOGIC GATE' };
const TYPE_COLORS = { BINARY: '#3b82f6', DECIMAL: '#22c55e', OCTAL: '#a855f7', HEXA: '#f59e0b', LOGIC: '#ef4444' };

function typeText(element, text, speed = 32) {
    clearInterval(typingInterval); element.textContent = ""; let i = 0;
    typingInterval = setInterval(() => { element.textContent += text.charAt(i); i++; if (i >= text.length) clearInterval(typingInterval); }, speed);
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; }
    return a;
}

function initQuestions() {
    // Ambil 20 soal dengan distribusi merata dari tiap tipe
    const byType = {};
    questionBank.forEach(q => { if (!byType[q.type]) byType[q.type] = []; byType[q.type].push(q); });
    Object.keys(byType).forEach(t => { byType[t] = shuffleArray(byType[t]); });

    // Ambil 4 dari tiap tipe (5 tipe × 4 = 20)
    let pool = [];
    Object.keys(byType).forEach(t => { pool = pool.concat(byType[t].slice(0, 4)); });
    questionsList = shuffleArray(pool);
}

function updateLivesDisplay() {
    livesDisplay.innerHTML = '';
    for (let i = 0; i < 5; i++) { const s = document.createElement('span'); s.className = 'heart' + (i >= lives ? ' lost' : ''); s.textContent = i < lives ? '❤️' : '🤍'; livesDisplay.appendChild(s); }
}

function updateCoreMeter() {
    const pct = Math.round((currentQuestionIndex / TOTAL_QUESTIONS) * 100);
    const fill = document.getElementById('core-bar-fill');
    const label = document.getElementById('core-bar-pct');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = pct + '%';
}

// ============================================================
// LOAD QUESTION
// ============================================================
function loadQuestion() {
    if (currentQuestionIndex >= questionsList.length) return;
    const q = questionsList[currentQuestionIndex];
    const color = TYPE_COLORS[q.type] || '#f59e0b';

    const badge = document.getElementById('question-type-badge');
    if (badge) { badge.textContent = TYPE_LABELS[q.type] || q.type; badge.style.color = color; badge.style.borderColor = color + '80'; badge.style.background = color + '18'; }

    const lines = q.q.split('\n');
    if (lines.length > 1) {
        questionDisplay.innerHTML = `<span style="font-size:0.48em;color:var(--text-muted);letter-spacing:1px;display:block;margin-bottom:6px">${lines[0]}</span><span style="color:${color};letter-spacing:3px;">${lines[1]}</span>`;
    } else {
        questionDisplay.innerHTML = `<span style="color:${color};letter-spacing:4px;">${q.q}</span>`;
    }

    questionCounter.innerText = `${currentQuestionIndex + 1}/${TOTAL_QUESTIONS}`;
    clearInput(); currentHintIndex = 0; currentHints = q.hint || []; hideHint(); updateHintBtn();
    updateCoreMeter();
    typeText(nexusDialog, nexusMessages[Math.floor(Math.random() * nexusMessages.length)]);
}

// ============================================================
// HINT
// ============================================================
function useHint() {
    if (hintsRemaining <= 0 || currentHintIndex >= currentHints.length) return;
    hintsRemaining--;
    hintDisplay.textContent = `💡 ${currentHints[currentHintIndex]}`;
    hintDisplay.classList.add('visible'); currentHintIndex++;
    nexusDialog.textContent = LANG[currentLang].nexusHint(hintsRemaining);
    score = Math.max(0, score - 20); scoreElement.textContent = score;
    updateHintBtn(); playSfx('hint');
}
function hideHint() { hintDisplay.classList.remove('visible'); hintDisplay.textContent = ''; }
function updateHintBtn() {
    if (hintsRemaining <= 0) { hintBtn.disabled = true; hintBtn.textContent = 'HINT (0)'; }
    else { hintBtn.disabled = false; hintBtn.innerHTML = `HINT (<span id="hint-count">${hintsRemaining}</span>)`; }
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!modalGameover.classList.contains('hidden') || !modalTransition.classList.contains('hidden')) { clearInterval(timerInterval); return; }
        if (timeInSeconds > 0) {
            timeInSeconds--; updateTimerUI();
            if (timeInSeconds === 120) typeText(nexusDialog, "NEXUS CORE: Peringatan! Tersisa 2 menit. Fokus!");
            if (timeInSeconds === 30) typeText(nexusDialog, "NEXUS CORE: DARURAT! 30 detik tersisa — CEPAT!");
            if (timeInSeconds < 60 && timeInSeconds % 2 === 0) playSfx('timerWarn');
        } else { clearInterval(timerInterval); playSfx('gameover'); showModal('gameover'); }
    }, 1000);
}

function updateTimerUI() {
    const m = Math.floor(timeInSeconds / 60), s = timeInSeconds % 60;
    timerElement.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    timerElement.style.color = timeInSeconds < 60 ? '#ef4444' : timeInSeconds < 120 ? '#f59e0b' : '#fff';
}

// ============================================================
// INPUT — termasuk A-F untuk hexa
// ============================================================
function inputNumber(num) {
    if (currentInput.length < 14) { currentInput += String(num); updateDisplay(); playSfx('click'); }
}
function clearAnswerInput() { currentInput = ""; updateDisplay(); playSfx('backspace'); }
function backspaceAnswer() { if (currentInput.length > 0) { currentInput = currentInput.slice(0, -1); updateDisplay(); playSfx('backspace'); } }
function clearInput() { currentInput = ""; updateDisplay(); }

function updateDisplay() {
    if (currentInput === "") { answerDisplay.innerHTML = "_Jawaban di sini"; answerDisplay.classList.remove("active"); }
    else { answerDisplay.textContent = currentInput; answerDisplay.classList.add("active"); }
}

// ============================================================
// CHECK ANSWER
// ============================================================
function checkAnswer() {
    if (currentInput === "" || !modalOverlay.classList.contains('hidden')) return;
    const correct = questionsList[currentQuestionIndex].a;
    if (currentInput.toUpperCase() === correct.toUpperCase()) {
        const hp = currentHintIndex * 20, tb = Math.floor(timeInSeconds / 30) * 10;
        const gained = Math.max(50, 250 + tb - hp);
        score += gained; scoreElement.textContent = score;
        document.getElementById("score-gain-text").textContent = `+${gained} poin`;
        playSfx('success'); showModal('success');
    } else {
        lives--; updateLivesDisplay();
        typeText(nexusDialog, LANG[currentLang].nexusWrong);
        playSfx('fail');
        if (lives <= 0) { setTimeout(() => { playSfx('gameover'); }, 400); showModal('gameover'); }
        else showModal('fail');
    }
}

// ============================================================
// NEXT QUESTION / TRANSITION
// ============================================================
function nextQuestionOrTransition() {
    if (currentQuestionIndex < questionsList.length - 1) {
        closeModal(); currentQuestionIndex++; loadQuestion();
    } else {
        const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
        if (!completed.includes('master')) {
            localStorage.setItem('stars_master', score);
            completed.push('master');
            localStorage.setItem('completedRooms', JSON.stringify(completed));
        }
        const prevKeys = parseInt(localStorage.getItem('playerKeys') || '0');
        localStorage.setItem('playerKeys', prevKeys + 1);
        updateCoreMeter();
        playVictorySound(); clearInterval(timerInterval); stopMusic();
        playDoorUnlockSound();
        document.getElementById('final-score-val').textContent = score;
        showModal('usekey');
    }
}

// ============================================================
// MODAL CONTROL
// ============================================================
function showModal(type) {
    modalOverlay.classList.remove('hidden');
    [modalSuccess, modalFail, modalTransition, modalGameover,
        document.getElementById('modal-settings'),
        document.getElementById('modal-usekey')].forEach(m => { if (m) m.classList.add('hidden'); });
    if (type === 'success') modalSuccess.classList.remove('hidden');
    if (type === 'fail') modalFail.classList.remove('hidden');
    if (type === 'transition') { modalTransition.classList.remove('hidden'); document.getElementById('final-score-val').textContent = score; }
    if (type === 'usekey') document.getElementById('modal-usekey').classList.remove('hidden');
    if (type === 'gameover') { modalGameover.classList.remove('hidden'); clearInterval(timerInterval); stopMusic(); }
}

function closeModal() { modalOverlay.classList.add('hidden'); clearInput(); }
function useKeyAndProceed() { playDoorUnlockSound(); showModal('transition'); }

// ============================================================
// RESTART / NAV
// ============================================================
function restartGame() {
    if (confirm(LANG[currentLang].restartConfirm)) {
        currentQuestionIndex = 0; lives = 5; timeInSeconds = TOTAL_TIME; score = 0; hintsRemaining = 3;
        scoreElement.textContent = score; updateLivesDisplay(); updateTimerUI();
        initQuestions(); loadQuestion(); closeModal(); startTimer();
        if (musicEnabled) startMusic();
    }
}

function goToNextRoom() {
    try { playSfx('success'); } catch (e) { }
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = "lobby.html"; }, 350);
}

function goToOpening() {
    playSfx('backspace');
    setTimeout(() => { window.location.href = "lobby.html"; }, 150);
}

// ============================================================
// KEYBOARD — termasuk A-F
// ============================================================
document.addEventListener('keydown', e => {
    if (!modalOverlay.classList.contains('hidden')) {
        if (e.key === 'Enter') {
            if (!modalSuccess.classList.contains('hidden')) nextQuestionOrTransition();
            else if (!modalFail.classList.contains('hidden')) closeModal();
            else if (!modalGameover.classList.contains('hidden')) goToOpening();
            else if (!document.getElementById('modal-settings').classList.contains('hidden')) closeSettings();
        }
        if (e.key === 'Escape' && !document.getElementById('modal-settings').classList.contains('hidden')) closeSettings();
        return;
    }
    if (/^[0-9]$/.test(e.key)) inputNumber(e.key);
    else if (/^[a-fA-F]$/.test(e.key)) inputNumber(e.key.toUpperCase());
    else if (e.key === 'Backspace' || e.key === 'Delete') backspaceAnswer();
    else if (e.key === 'Enter') checkAnswer();
    else if (e.key === 'h' || e.key === 'H') useHint();
    else if (e.key === 'Escape') openSettings();
});

// ============================================================


// ============================================================
// BOOT
// ============================================================
loadPrefs(); initQuestions(); updateLivesDisplay(); updateTimerUI(); loadQuestion(); applyLanguage();

(function checkAlreadyCompleted() {
    const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
    if (completed.includes('master')) {
        const opening = document.getElementById('opening-screen');
        if (opening) opening.style.display = 'none';
        const mo = document.getElementById('modal-overlay'), mt = document.getElementById('modal-transition');
        if (mo && mt) {
            document.querySelectorAll('.modal-box,.modal-compact').forEach(m => m.classList.add('hidden'));
            mo.classList.remove('hidden'); mt.classList.remove('hidden');
            document.getElementById('final-score-val').textContent = localStorage.getItem('stars_master') || '0';
        }
        const gc = document.querySelector('.game-container'); if (gc) gc.style.pointerEvents = 'none';
    }
})();

function startGame() {
    const opening = document.getElementById('opening-screen');
    opening.classList.add('hide');
    setTimeout(() => { opening.style.display = 'none'; }, 800);
    startTimer(); if (musicEnabled) startMusic(); playOpeningSound();
}
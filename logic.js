// ============================================================
// QUESTION BANK — Logic Gates (50 soal, Multiple Choice A/B/C/D)
// field: type, q = soal display, a = kunci jawaban ('A'/'B'/'C'/'D'),
//        choices = {A,B,C,D}, hint = hints array
// ============================================================
const questionBank = [

    // ── BOOLEAN KOMPLEKS — 3 variabel (15 soal) ─────────────

    {
        type: "BOOL", q: "A=1, B=1, C=0\n(A AND B) OR C = ?",
        a: "B", choices: { A: "0", B: "1", C: "AND", D: "OR" },
        hints: ["Hitung (A AND B) dulu: 1 AND 1 = ?", "Lalu OR-kan hasilnya dengan C=0", "X OR 0 = X"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=1\nA AND (B OR C) = ?",
        a: "A", choices: { A: "1", B: "0", C: "AND", D: "XOR" },
        hints: ["Hitung dalam kurung dulu: B OR C = 0 OR 1", "1 AND 1 = ?", "AND hanya 1 jika semua input 1"]
    },

    {
        type: "BOOL", q: "A=0, B=1, C=1\nNOT A AND (B XOR C) = ?",
        a: "C", choices: { A: "1", B: "XOR", C: "0", D: "NOT" },
        hints: ["NOT 0 = 1", "B XOR C = 1 XOR 1 = ?", "1 AND 0 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=0\n(A XOR B) OR C = ?",
        a: "D", choices: { A: "1", B: "XOR", C: "AND", D: "0" },
        hints: ["XOR: sama = 0, beda = 1", "A XOR B = 1 XOR 1 = ?", "0 OR 0 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=0, C=1\n(A NOR B) AND C = ?",
        a: "A", choices: { A: "1", B: "0", C: "NOR", D: "AND" },
        hints: ["NOR: kebalikan OR", "0 NOR 0 = NOT(0 OR 0) = NOT 0 = ?", "1 AND 1 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=0\nA NAND (B OR C) = ?",
        a: "B", choices: { A: "0", B: "1", C: "NAND", D: "OR" },
        hints: ["Hitung B OR C = 0 OR 0 = 0", "A NAND 0 = NOT(1 AND 0) = NOT 0 = ?", "NAND selalu 1 kecuali semua input 1"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=1\n(A XNOR B) AND C = ?",
        a: "C", choices: { A: "0", B: "XNOR", C: "1", D: "AND" },
        hints: ["XNOR: sama = 1, beda = 0", "A XNOR B = 1 XNOR 1 = ?", "1 AND 1 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=1, C=1\nNOT(A OR B) XOR C = ?",
        a: "D", choices: { A: "1", B: "XOR", C: "AND", D: "0" },
        hints: ["A OR B = 0 OR 1 = 1", "NOT 1 = 0", "0 XOR 1 = ?... tunggu, C=1, 0 XOR 1 = 1. Periksa lagi!"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=1\n(NOT B) AND (A OR C) = ?",
        a: "A", choices: { A: "1", B: "0", C: "OR", D: "NOT" },
        hints: ["NOT B = NOT 0 = 1", "A OR C = 1 OR 1 = 1", "1 AND 1 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=0\nA NOR (B AND C) = ?",
        a: "B", choices: { A: "NOR", B: "0", C: "1", D: "AND" },
        hints: ["Hitung B AND C = 1 AND 0 = 0", "A NOR 0 = NOT(1 OR 0) = NOT 1 = ?", "NOR menghasilkan 0 jika salah satu input 1"]
    },

    {
        type: "BOOL", q: "A=0, B=0, C=0\n(A NAND B) OR C = ?",
        a: "C", choices: { A: "0", B: "NAND", C: "1", D: "OR" },
        hints: ["0 NAND 0 = NOT(0 AND 0) = NOT 0 = 1", "1 OR 0 = ?", "OR menghasilkan 1 jika minimal satu input 1"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=1\n(A XOR C) NAND B = ?",
        a: "C", choices: { A: "XOR", B: "0", C: "1", D: "NAND" },
        hints: ["A XOR C = 1 XOR 1 = 0", "0 NAND 0 = ?", "NAND 0 dengan apapun = 1"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=0\nNOT(A XNOR B) OR C = ?",
        a: "D", choices: { A: "1", B: "XNOR", C: "AND", D: "0" },
        hints: ["A XNOR B = 1 XNOR 1 = 1 (sama)", "NOT 1 = 0", "0 OR 0 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=1, C=0\n(A NOR C) XNOR B = ?",
        a: "A", choices: { A: "1", B: "0", C: "NOR", D: "XNOR" },
        hints: ["A NOR C = 0 NOR 0 = NOT(0 OR 0) = 1", "1 XNOR B, B=1", "XNOR: sama = 1"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=0\nA AND NOT(B OR C) = ?",
        a: "B", choices: { A: "0", B: "1", C: "OR", D: "NOT" },
        hints: ["B OR C = 0 OR 0 = 0", "NOT 0 = 1", "1 AND 1 = ?"]
    },

    // ── TRUTH TABLE — tebak output (20 soal) ─────────────────

    {
        type: "TABLE", q: "Gate: AND\nA=?, B=? sehingga output = 1\nMana yang BENAR?",
        a: "C", choices: { A: "A=0, B=1", B: "A=0, B=0", C: "A=1, B=1", D: "A=1, B=0" },
        hints: ["AND hanya menghasilkan 1 jika SEMUA input = 1", "Cek setiap pilihan satu per satu", "0 AND apapun = 0"]
    },

    {
        type: "TABLE", q: "Gate: OR\nInput A=0, B=0, C=1\nOutput = ?",
        a: "B", choices: { A: "0", B: "1", C: "AND", D: "OR" },
        hints: ["OR menghasilkan 1 jika minimal satu input = 1", "C = 1", "0 OR 0 OR 1 = ?"]
    },

    {
        type: "TABLE", q: "Gate: NAND\nMana pasangan input yang menghasilkan output = 0?",
        a: "D", choices: { A: "A=0, B=0", B: "A=0, B=1", C: "A=1, B=0", D: "A=1, B=1" },
        hints: ["NAND = NOT AND", "NOT AND hanya = 0 jika AND = 1", "AND = 1 hanya jika semua input = 1"]
    },

    {
        type: "TABLE", q: "Gate: XOR\nMana yang menghasilkan output = 0?",
        a: "A", choices: { A: "A=1, B=1", B: "A=0, B=1", C: "A=1, B=0", D: "A=0, B=0 atau A=1, B=1" },
        hints: ["XOR = 1 jika input BERBEDA", "XOR = 0 jika input SAMA", "1 XOR 1 = ?, 0 XOR 0 = ?"]
    },

    {
        type: "TABLE", q: "Gate: NOR\nA=0, B=0, C=0\nOutput = ?",
        a: "C", choices: { A: "0", B: "NOR", C: "1", D: "AND" },
        hints: ["NOR = NOT OR", "0 OR 0 OR 0 = 0", "NOT 0 = ?"]
    },

    {
        type: "TABLE", q: "Gate: XNOR\nMana yang menghasilkan output = 1?",
        a: "B", choices: { A: "A=0, B=1", B: "A=1, B=1", C: "A=1, B=0", D: "A=0, B=0 saja" },
        hints: ["XNOR = 1 jika input SAMA", "Cek pilihan mana yang inputnya sama", "XNOR kebalikan XOR"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = A AND B OR C\nA=0, B=1, C=1\nF = ?",
        a: "A", choices: { A: "1", B: "0", C: "AND", D: "OR" },
        hints: ["AND lebih prioritas dari OR (seperti × vs + dalam matematika)", "A AND B = 0 AND 1 = 0", "0 OR C = 0 OR 1 = ?"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = NOT A OR B\nA=1, B=0\nF = ?",
        a: "D", choices: { A: "1", B: "OR", C: "AND", D: "0" },
        hints: ["NOT A = NOT 1 = 0", "0 OR B = 0 OR 0 = ?", "NOT diproses dulu sebelum OR"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = A XOR B XOR C\nA=1, B=1, C=1\nF = ?",
        a: "C", choices: { A: "0", B: "XOR", C: "1", D: "AND" },
        hints: ["Hitung dari kiri: (A XOR B) XOR C", "1 XOR 1 = 0", "0 XOR 1 = ?"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = (A AND B) XOR (B AND C)\nA=1, B=1, C=0\nF = ?",
        a: "B", choices: { A: "XOR", B: "1", C: "0", D: "AND" },
        hints: ["A AND B = 1 AND 1 = 1", "B AND C = 1 AND 0 = 0", "1 XOR 0 = ?"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = NOT(A AND B) AND C\nA=1, B=1, C=1\nF = ?",
        a: "D", choices: { A: "1", B: "NOT", C: "AND", D: "0" },
        hints: ["A AND B = 1", "NOT 1 = 0", "0 AND C = 0 AND 1 = ?"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = A OR (NOT B AND C)\nA=0, B=0, C=1\nF = ?",
        a: "A", choices: { A: "1", B: "0", C: "OR", D: "NOT" },
        hints: ["NOT B = NOT 0 = 1", "NOT B AND C = 1 AND 1 = 1", "A OR 1 = ?"]
    },

    {
        type: "TABLE", q: "Gate: AND dengan 4 input\nA=1, B=1, C=1, D=0\nOutput = ?",
        a: "C", choices: { A: "1", B: "AND", C: "0", D: "OR" },
        hints: ["AND 4 input: semua harus 1", "D = 0", "Satu input 0 → output AND = 0"]
    },

    {
        type: "TABLE", q: "Gate: OR dengan 4 input\nA=0, B=0, C=0, D=0\nOutput = ?",
        a: "B", choices: { A: "1", B: "0", C: "OR", D: "NOT" },
        hints: ["OR menghasilkan 0 hanya jika SEMUA input = 0", "Semua input di sini = 0", "0 OR 0 OR 0 OR 0 = ?"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = A NAND (B NOR C)\nA=1, B=0, C=0\nF = ?",
        a: "A", choices: { A: "1", B: "0", C: "NAND", D: "NOR" },
        hints: ["B NOR C = 0 NOR 0 = NOT(0 OR 0) = 1", "A NAND 1 = 1 NAND 1 = NOT(1 AND 1) = NOT 1 = 0... cek lagi!", "Evaluasi dari dalam kurung dulu"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = (A XNOR B) OR (C AND D)\nA=0, B=1, C=1, D=1\nF = ?",
        a: "B", choices: { A: "XNOR", B: "1", C: "0", D: "OR" },
        hints: ["A XNOR B = 0 XNOR 1 = 0 (beda)", "C AND D = 1 AND 1 = 1", "0 OR 1 = ?"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = NOT(A XOR B) AND NOT C\nA=1, B=0, C=0\nF = ?",
        a: "D", choices: { A: "1", B: "XOR", C: "AND", D: "0" },
        hints: ["A XOR B = 1 XOR 0 = 1", "NOT 1 = 0", "0 AND apapun = 0"]
    },

    {
        type: "TABLE", q: "Dari truth table AND:\nA=1, B=? → Output=0\nNilai B = ?",
        a: "C", choices: { A: "1", B: "AND", C: "0", D: "NOR" },
        hints: ["AND = 1 hanya jika semua input = 1", "Jika output = 0, maka setidaknya satu input harus 0", "A=1 sudah pasti, jadi B harus = ?"]
    },

    {
        type: "TABLE", q: "Dari truth table OR:\nA=?, B=0 → Output=0\nNilai A = ?",
        a: "B", choices: { A: "1", B: "0", C: "OR", D: "NOT" },
        hints: ["OR = 0 hanya jika SEMUA input = 0", "B sudah 0, A harus berapa agar output = 0?", "0 OR 0 = 0, 1 OR 0 = 1"]
    },

    {
        type: "TABLE", q: "Ekspresi: F = A AND B AND NOT C\nA=1, B=1, C=0\nF = ?",
        a: "A", choices: { A: "1", B: "0", C: "NOT", D: "AND" },
        hints: ["NOT C = NOT 0 = 1", "A AND B = 1 AND 1 = 1", "1 AND 1 = ?"]
    },

    // ── BOOLEAN LANJUTAN — 4 variabel / ekspresi panjang (15 soal) ──

    {
        type: "BOOL", q: "A=1, B=0, C=1, D=1\n(A AND B) OR (C AND D) = ?",
        a: "C", choices: { A: "0", B: "AND", C: "1", D: "OR" },
        hints: ["A AND B = 1 AND 0 = 0", "C AND D = 1 AND 1 = 1", "0 OR 1 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=1, C=0, D=1\n(A OR B) AND (C OR D) = ?",
        a: "A", choices: { A: "1", B: "0", C: "OR", D: "AND" },
        hints: ["A OR B = 0 OR 1 = 1", "C OR D = 0 OR 1 = 1", "1 AND 1 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=0, D=0\n(A XOR B) NOR (C XOR D) = ?",
        a: "B", choices: { A: "XOR", B: "1", C: "0", D: "NOR" },
        hints: ["A XOR B = 1 XOR 1 = 0", "C XOR D = 0 XOR 0 = 0", "0 NOR 0 = NOT(0 OR 0) = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=1, D=0\nNOT(A AND B) AND NOT(C AND D) = ?",
        a: "C", choices: { A: "0", B: "AND", C: "1", D: "NOT" },
        hints: ["A AND B = 1 AND 0 = 0 → NOT 0 = 1", "C AND D = 1 AND 0 = 0 → NOT 0 = 1", "1 AND 1 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=0, C=1, D=1\n(A NAND B) XNOR (C NAND D) = ?",
        a: "D", choices: { A: "1", B: "NAND", C: "XNOR", D: "0" },
        hints: ["A NAND B = 0 NAND 0 = 1", "C NAND D = 1 NAND 1 = 0", "1 XNOR 0 = 0 (beda)"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=1, D=0\n(A OR B OR C) AND D = ?",
        a: "B", choices: { A: "1", B: "0", C: "OR", D: "AND" },
        hints: ["A OR B OR C = 1 (ada yang 1)", "Hasilnya AND dengan D=0", "X AND 0 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=1, C=1, D=0\n(A XOR B) OR (C XNOR D) = ?",
        a: "A", choices: { A: "1", B: "0", C: "XOR", D: "XNOR" },
        hints: ["A XOR B = 0 XOR 1 = 1", "Sudah tahu satu nilai OR-nya = 1", "X OR 1 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=0, D=1\nNOT A OR (B AND C) OR NOT D = ?",
        a: "D", choices: { A: "1", B: "NOT", C: "OR", D: "0" },
        hints: ["NOT A = NOT 1 = 0", "B AND C = 0 AND 0 = 0", "NOT D = NOT 1 = 0 → 0 OR 0 OR 0 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=0, D=1\n(A NAND C) AND (B NOR D) = ?",
        a: "C", choices: { A: "NAND", B: "NOR", C: "0", D: "1" },
        hints: ["A NAND C = 1 NAND 0 = NOT(1 AND 0) = 1", "B NOR D = 1 NOR 1 = NOT(1 OR 1) = 0", "1 AND 0 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=1, C=1, D=0\n(NOT A AND B) XOR (C AND NOT D) = ?",
        a: "B", choices: { A: "1", B: "0", C: "XOR", D: "AND" },
        hints: ["NOT A=1, NOT A AND B = 1 AND 1 = 1", "NOT D=1, C AND NOT D = 1 AND 1 = 1", "1 XOR 1 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=1\nF = (A OR B) AND (NOT B OR C) = ?",
        a: "A", choices: { A: "1", B: "0", C: "OR", D: "AND" },
        hints: ["A OR B = 1 OR 0 = 1", "NOT B = 1, NOT B OR C = 1 OR 1 = 1", "1 AND 1 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=0, C=1\nF = NOT(A OR B OR C) = ?",
        a: "D", choices: { A: "1", B: "OR", C: "NOT", D: "0" },
        hints: ["A OR B OR C = 0 OR 0 OR 1 = 1", "NOT 1 = ?", "Ada C=1, jadi OR hasilnya 1"]
    },

    {
        type: "BOOL", q: "A=1, B=1, C=0\nF = (A XNOR B) AND (B XNOR C) = ?",
        a: "C", choices: { A: "1", B: "XNOR", C: "0", D: "AND" },
        hints: ["A XNOR B = 1 XNOR 1 = 1 (sama)", "B XNOR C = 1 XNOR 0 = 0 (beda)", "1 AND 0 = ?"]
    },

    {
        type: "BOOL", q: "A=0, B=1, C=0\nF = NOT A AND B AND NOT C = ?",
        a: "A", choices: { A: "1", B: "0", C: "NOT", D: "AND" },
        hints: ["NOT A = NOT 0 = 1", "NOT C = NOT 0 = 1", "1 AND 1 AND 1 = ?"]
    },

    {
        type: "BOOL", q: "A=1, B=0, C=1, D=0\nF = (A XOR C) AND NOT(B OR D) = ?",
        a: "D", choices: { A: "XOR", B: "1", C: "OR", D: "0" },
        hints: ["A XOR C = 1 XOR 1 = 0", "B OR D = 0 OR 0 = 0, NOT 0 = 1", "0 AND 1 = ?"]
    },
];

// ============================================================
// LANGUAGE STRINGS
// ============================================================
const LANG = {
    id: {
        nexusDefault: "Logic gate system detected. Evaluate the circuit to continue.",
        nexusHint: (rem) => `Cek hint di atas ya! Sisa hint: ${rem}.`,
        nexusWrong: "Jawaban salah! Evaluasi ulang gerbang logikanya.",
        restartConfirm: "Yakin ingin mengulang ruangan ini dari awal?",
        failDesc: "Incorrect input detected.<br>Coba lagi!",
        successDesc: "Good job!<br>Kamu mendapatkan Digital Key!",
        nextBtn: "LANJUT ▶",
        lobbyBtn: "↩ KEMBALI",
        saveClose: "SIMPAN & TUTUP",
    },
    en: {
        nexusDefault: "Logic gate system detected. Evaluate the circuit to continue.",
        nexusHint: (rem) => `Check the hint above! Hints left: ${rem}.`,
        nexusWrong: "Wrong answer! Re-evaluate the logic gate.",
        restartConfirm: "Are you sure you want to restart this room?",
        failDesc: "Incorrect input detected.<br>Try again!",
        successDesc: "Good job!<br>You got the Digital Key!",
        nextBtn: "NEXT ▶",
        lobbyBtn: "↩ BACK",
        saveClose: "SAVE & CLOSE",
    }
};

const nexusMessages = [
    "NEXUS: Selamat datang di Logic Gate Room. Sirkuit logika telah aktif.",
    "NEXUS: Evaluasi ekspresi Boolean dari dalam kurung terlebih dahulu.",
    "NEXUS: AND hanya 1 jika SEMUA input bernilai 1.",
    "NEXUS: OR menghasilkan 1 jika MINIMAL satu input = 1.",
    "NEXUS: NOT membalik nilai — 0 jadi 1, 1 jadi 0.",
    "NEXUS: NAND = NOT AND. NAND adalah 0 hanya jika semua input = 1.",
    "NEXUS: NOR = NOT OR. NOR adalah 1 hanya jika semua input = 0.",
    "NEXUS: XOR menghasilkan 1 jika input BERBEDA.",
    "NEXUS: XNOR menghasilkan 1 jika input SAMA.",
    "NEXUS: Untuk truth table, substitusi nilai satu per satu dengan teliti.",
    "NEXUS: Operasi dalam kurung selalu diproses lebih dulu.",
    "NEXUS: Jangan terburu-buru. Satu kesalahan bisa mengubah segalanya.",
    "NEXUS: Sistem memonitor setiap input yang kamu berikan.",
    "NEXUS: Aku menganalisis pola berpikirmu... Menarik.",
    "NEXUS: Waktu terus berjalan. Evaluasi dengan cepat dan tepat.",
    "NEXUS: Logic Gate Room tidak memaafkan kesalahan ceroboh.",
    "NEXUS: Gunakan logikamu, bukan tebakan.",
    "NEXUS: Setiap gerbang memiliki aturan yang pasti. Ikuti aturannya.",
];

// ============================================================
// AUDIO ENGINE
// ============================================================
let audioCtx = null;
let musicGain = null;
let sfxGain = null;
let musicNode = null;
let musicEnabled = true;
let sfxEnabled = true;
let musicVolume = 0.4;
let sfxVolume = 0.7;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        musicGain = audioCtx.createGain();
        musicGain.gain.value = musicVolume;
        musicGain.connect(audioCtx.destination);
        sfxGain = audioCtx.createGain();
        sfxGain.gain.value = sfxVolume;
        sfxGain.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playSfx(type) {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;
    switch (type) {
        case 'click': {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.connect(g); g.connect(vol); o.frequency.value = 880; o.type = 'sine';
            g.gain.setValueAtTime(0.15, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.07); break;
        }
        case 'success': {
            [440, 554, 659, 880].forEach((freq, i) => {
                const o = ctx.createOscillator(); const g = ctx.createGain();
                o.connect(g); g.connect(vol); o.frequency.value = freq; o.type = 'sine';
                const t = ctx.currentTime + i * 0.12;
                g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
                o.start(t); o.stop(t + 0.25);
            }); break;
        }
        case 'fail': {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.connect(g); g.connect(vol); o.type = 'sawtooth';
            o.frequency.setValueAtTime(280, ctx.currentTime);
            o.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.3);
            g.gain.setValueAtTime(0.28, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.3); break;
        }
        case 'hint': {
            [330, 440].forEach((freq, i) => {
                const o = ctx.createOscillator(); const g = ctx.createGain();
                o.connect(g); g.connect(vol); o.frequency.value = freq; o.type = 'sine';
                const t = ctx.currentTime + i * 0.15;
                g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
                o.start(t); o.stop(t + 0.2);
            }); break;
        }
        case 'gameover': {
            [300, 220, 160, 100].forEach((freq, i) => {
                const o = ctx.createOscillator(); const g = ctx.createGain();
                o.connect(g); g.connect(vol); o.frequency.value = freq; o.type = 'square';
                const t = ctx.currentTime + i * 0.18;
                g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
                o.start(t); o.stop(t + 0.22);
            }); break;
        }
        case 'timerWarn': {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.connect(g); g.connect(vol); o.frequency.value = 900; o.type = 'square';
            g.gain.setValueAtTime(0.10, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.05); break;
        }
        case 'backspace': {
            const o = ctx.createOscillator(); const g = ctx.createGain();
            o.connect(g); g.connect(vol); o.frequency.value = 250; o.type = 'sine';
            g.gain.setValueAtTime(0.1, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.07); break;
        }
    }
}

function startMusic() {
    if (!musicEnabled) return;
    const ctx = getAudioCtx(); stopMusic();
    const nodes = [];
    const drone = ctx.createOscillator(); const droneGain = ctx.createGain();
    drone.type = 'sine'; drone.frequency.value = 55; droneGain.gain.value = 0.15;
    drone.connect(droneGain); droneGain.connect(musicGain); drone.start();
    nodes.push(drone, droneGain);
    const mid = ctx.createOscillator(); const midGain = ctx.createGain();
    mid.type = 'triangle'; mid.frequency.value = 110; midGain.gain.value = 0.07;
    mid.connect(midGain); midGain.connect(musicGain); mid.start();
    nodes.push(mid, midGain);
    const lfo = ctx.createOscillator(); const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.3; lfoGain.gain.value = 0.05;
    lfo.connect(lfoGain); lfoGain.connect(droneGain.gain); lfo.start();
    nodes.push(lfo, lfoGain);
    const noteFreqs = [110, 138, 165, 110, 184, 110, 138, 220];
    let noteIdx = 0;
    function scheduleNote() {
        if (!musicEnabled) return;
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = noteFreqs[noteIdx % noteFreqs.length]; noteIdx++;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);
        o.connect(g); g.connect(musicGain); o.start(ctx.currentTime); o.stop(ctx.currentTime + 1.0);
        musicNode._noteTimer = setTimeout(scheduleNote, 1600);
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
    modalOverlay.classList.add('hidden');
    startTimer();
    localStorage.setItem('nexusLang', currentLang);
    localStorage.setItem('nexusMusic', musicEnabled);
    localStorage.setItem('nexusSfx', sfxEnabled);
    localStorage.setItem('nexusMusicVol', musicVolume);
    localStorage.setItem('nexusSfxVol', sfxVolume);
}

function toggleMusic() {
    musicEnabled = !musicEnabled;
    const btn = document.getElementById('toggle-music');
    btn.textContent = musicEnabled ? 'ON' : 'OFF';
    btn.classList.toggle('toggle-off', !musicEnabled);
    if (musicEnabled) startMusic(); else stopMusic();
}

function toggleSfx() {
    sfxEnabled = !sfxEnabled;
    const btn = document.getElementById('toggle-sfx');
    btn.textContent = sfxEnabled ? 'ON' : 'OFF';
    btn.classList.toggle('toggle-off', !sfxEnabled);
}

function setMusicVolume(val) {
    musicVolume = val / 100;
    if (musicGain) musicGain.gain.value = musicVolume;
    document.getElementById('vol-music-val').textContent = val;
}

function setSfxVolume(val) {
    sfxVolume = val / 100;
    if (sfxGain) sfxGain.gain.value = sfxVolume;
    document.getElementById('vol-sfx-val').textContent = val;
}

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    applyLanguage();
}

function applyLanguage() {
    const t = LANG[currentLang];
    nexusDialog.textContent = t.nexusDefault;
    const failDesc = document.getElementById('fail-desc');
    if (failDesc) failDesc.innerHTML = t.failDesc;
    const nextRoomBtn = document.querySelector('#modal-transition .modal-btn-amber');
    if (nextRoomBtn) nextRoomBtn.textContent = t.nextBtn;
    const lobbyBtn = document.querySelector('#modal-transition .modal-btn-outline');
    if (lobbyBtn) lobbyBtn.textContent = t.lobbyBtn;
    const saveBtn = document.querySelector('#modal-settings .modal-btn-amber');
    if (saveBtn) saveBtn.textContent = t.saveClose;
}

function loadPrefs() {
    const savedLang = localStorage.getItem('nexusLang'); if (savedLang) currentLang = savedLang;
    const savedMusic = localStorage.getItem('nexusMusic'); if (savedMusic !== null) musicEnabled = savedMusic === 'true';
    const savedSfx = localStorage.getItem('nexusSfx'); if (savedSfx !== null) sfxEnabled = savedSfx === 'true';
    const savedMusicVol = localStorage.getItem('nexusMusicVol'); if (savedMusicVol !== null) musicVolume = parseFloat(savedMusicVol);
    const savedSfxVol = localStorage.getItem('nexusSfxVol'); if (savedSfxVol !== null) sfxVolume = parseFloat(savedSfxVol);
}

// ============================================================
// GAME STATE
// ============================================================
let questionsList = [];
let currentQuestionIndex = 0;
let currentInput = "";    // stores 'A','B','C', or 'D'
let lives = 5;
const maxLives = 5;
let timeInSeconds = 600;
let timerInterval = null;
let score = 0;
let hintsRemaining = 3;
let currentHintIndex = 0;
let currentHints = [];

// ============================================================
// DOM REFERENCES
// ============================================================
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

// ============================================================
// UTILITY
// ============================================================
function typeText(element, text, speed = 35) {
    clearInterval(typingInterval);
    element.textContent = "";
    let i = 0;
    typingInterval = setInterval(() => {
        element.textContent += text.charAt(i); i++;
        if (i >= text.length) clearInterval(typingInterval);
    }, speed);
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function initQuestions() {
    questionsList = shuffleArray(questionBank).slice(0, 10);
}

// ============================================================
// LIVES DISPLAY
// ============================================================
function updateLivesDisplay() {
    livesDisplay.innerHTML = '';
    for (let i = 0; i < maxLives; i++) {
        const span = document.createElement('span');
        span.className = 'heart' + (i >= lives ? ' lost' : '');
        span.textContent = i < lives ? '❤️' : '🤍';
        livesDisplay.appendChild(span);
    }
}

// ============================================================
// LOAD QUESTION — renders question + A/B/C/D choices in numpad
// ============================================================
const GATE_COLORS = { AND: '#22d3ee', OR: '#34d399', NOT: '#f0abfc', NAND: '#fb923c', NOR: '#f87171', XOR: '#fbbf24', XNOR: '#a78bfa', BOOL: '#22d3ee', TABLE: '#34d399', MIXED: '#e2e8f0' };

function loadQuestion() {
    if (currentQuestionIndex >= questionsList.length) return;
    const q = questionsList[currentQuestionIndex];

    // Render question text
    const lines = q.q.split('\n');
    const color = GATE_COLORS[q.type] || '#22d3ee';
    questionDisplay.innerHTML = lines.map((line, i) => {
        if (i === 0 && lines.length > 1) {
            return `<span style="font-size:0.52em;color:var(--text-muted);letter-spacing:1px;">${line}</span>`;
        }
        const highlighted = line.replace(/\b(AND|OR|NOT|NAND|NOR|XOR|XNOR)\b/g,
            `<span style="color:${color};letter-spacing:2px;">$1</span>`);
        return `<span>${highlighted}</span>`;
    }).join('<br>');

    // Render A/B/C/D choice buttons
    renderChoices(q);

    questionCounter.innerText = `${currentQuestionIndex + 1}/10`;
    clearInput();
    currentHintIndex = 0;
    currentHints = q.hints || ["Evaluasi ekspresi dari dalam kurung.", "Substitusi nilai variabel satu per satu.", "Jawaban adalah salah satu dari A, B, C, atau D."];
    hideHint();
    updateHintBtn();
    typeText(nexusDialog, nexusMessages[Math.floor(Math.random() * nexusMessages.length)]);
}

function renderChoices(q) {
    const numpad = document.querySelector('.numpad');
    numpad.innerHTML = '';
    ['A', 'B', 'C', 'D'].forEach(key => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.id = `choice-${key}`;
        btn.innerHTML = `<span class="choice-key">${key}</span><span class="choice-val">${q.choices[key]}</span>`;
        btn.onclick = () => selectChoice(key);
        numpad.appendChild(btn);
    });
}

// ============================================================
// INPUT — multiple choice
// ============================================================
function selectChoice(key) {
    currentInput = key;
    // highlight selected
    ['A', 'B', 'C', 'D'].forEach(k => {
        const btn = document.getElementById(`choice-${k}`);
        if (btn) btn.classList.toggle('selected', k === key);
    });
    updateDisplay();
    playSfx('click');
}

function backspaceAnswer() {
    if (currentInput !== "") {
        currentInput = "";
        ['A', 'B', 'C', 'D'].forEach(k => {
            const btn = document.getElementById(`choice-${k}`);
            if (btn) btn.classList.remove('selected');
        });
        updateDisplay();
        playSfx('backspace');
    }
}

function clearAnswerInput() { backspaceAnswer(); }

function clearInput() {
    currentInput = "";
    updateDisplay();
}

function updateDisplay() {
    // answer-box dihapus — selected state cukup dari highlight tombol
}

// ============================================================
// CHECK ANSWER
// ============================================================
function checkAnswer() {
    if (currentInput === "" || !modalOverlay.classList.contains('hidden')) return;
    const correctKey = questionsList[currentQuestionIndex].a;

    if (currentInput === correctKey) {
        const hintPenalty = currentHintIndex * 20;
        const timeBonus = Math.floor(timeInSeconds / 30) * 10;
        const gained = Math.max(50, 200 + timeBonus - hintPenalty);
        score += gained;
        scoreElement.textContent = score;
        document.getElementById("score-gain-text").textContent = `+${gained} poin`;
        // flash correct button green
        const btn = document.getElementById(`choice-${correctKey}`);
        if (btn) btn.classList.add('correct');
        setTimeout(() => { playSfx('success'); showModal('success'); }, 300);
    } else {
        lives--;
        updateLivesDisplay();
        // hanya flash merah pada pilihan yang salah, TIDAK tunjukkan jawaban benar
        const wrongBtn = document.getElementById(`choice-${currentInput}`);
        if (wrongBtn) wrongBtn.classList.add('wrong');
        // kurangi 500 poin
        score = Math.max(0, score - 500);
        scoreElement.textContent = score;
        typeText(nexusDialog, LANG[currentLang].nexusWrong);
        playSfx('fail');
        if (lives <= 0) {
            setTimeout(() => { playSfx('gameover'); showModal('gameover'); }, 600);
        } else {
            setTimeout(() => showModal('fail'), 600);
        }
    }
}

// ============================================================
// HINT SYSTEM
// ============================================================
function useHint() {
    if (hintsRemaining <= 0 || currentHintIndex >= currentHints.length) return;
    hintsRemaining--;
    hintDisplay.textContent = `💡 ${currentHints[currentHintIndex]}`;
    hintDisplay.classList.add('visible');
    currentHintIndex++;
    nexusDialog.textContent = LANG[currentLang].nexusHint(hintsRemaining);
    score = Math.max(0, score - 20);
    scoreElement.textContent = score;
    updateHintBtn();
    playSfx('hint');
}

function hideHint() { hintDisplay.classList.remove('visible'); hintDisplay.textContent = ''; }

function updateHintBtn() {
    if (hintsRemaining <= 0) {
        hintBtn.disabled = true; hintBtn.textContent = 'HINT (0)';
    } else {
        hintBtn.disabled = false;
        hintBtn.innerHTML = `HINT (<span id="hint-count">${hintsRemaining}</span>)`;
    }
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!modalGameover.classList.contains('hidden') || !modalTransition.classList.contains('hidden')) {
            clearInterval(timerInterval); return;
        }
        if (timeInSeconds > 0) {
            timeInSeconds--;
            updateTimerUI();
            if (timeInSeconds === 30) typeText(nexusDialog, "NEXUS: Warning... waktu hampir habis.");
            if (timeInSeconds === 10) typeText(nexusDialog, "NEXUS: CEPAT! Sistem akan terkunci!");
            if (timeInSeconds < 60 && timeInSeconds % 2 === 0) playSfx('timerWarn');
        } else {
            clearInterval(timerInterval); playSfx('gameover'); showModal('gameover');
        }
    }, 1000);
}

function updateTimerUI() {
    const m = Math.floor(timeInSeconds / 60);
    const s = timeInSeconds % 60;
    timerElement.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    timerElement.style.color = timeInSeconds < 60 ? '#ef4444' : '#fff';
}

// ============================================================
// NEXT QUESTION / TRANSITION
// ============================================================
function nextQuestionOrTransition() {
    if (currentQuestionIndex < questionsList.length - 1) {
        closeModal(); currentQuestionIndex++; loadQuestion();
    } else {
        const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
        if (!completed.includes('logic')) {
            localStorage.setItem('stars_logic', score);
            completed.push('logic');
            localStorage.setItem('completedRooms', JSON.stringify(completed));
        }
        const prevKeys = parseInt(localStorage.getItem('playerKeys') || '0');
        localStorage.setItem('playerKeys', prevKeys + 1);
        const usekeyCount = document.getElementById('usekey-count');
        if (usekeyCount) usekeyCount.textContent = prevKeys + 1;
        playVictorySound(); clearInterval(timerInterval); stopMusic(); playDoorUnlockSound();
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
    if (type === 'transition') modalTransition.classList.remove('hidden');
    if (type === 'usekey') document.getElementById('modal-usekey').classList.remove('hidden');
    if (type === 'gameover') { modalGameover.classList.remove('hidden'); clearInterval(timerInterval); stopMusic(); }
}

function closeModal() { modalOverlay.classList.add('hidden'); clearInput(); }

function useKeyAndProceed() {
    const keys = parseInt(localStorage.getItem('playerKeys') || '0');
    if (keys <= 0) return;
    playDoorUnlockSound(); showModal('transition');
}

// ============================================================
// RESTART
// ============================================================
function restartGame() {
    if (confirm(LANG[currentLang].restartConfirm)) {
        currentQuestionIndex = 0; lives = 5; timeInSeconds = 600; score = 0; hintsRemaining = 3;
        scoreElement.textContent = score;
        updateLivesDisplay(); updateTimerUI(); initQuestions(); loadQuestion(); closeModal();
        startTimer(); if (musicEnabled) startMusic();
    }
}

function goToNextRoom() {
    playSfx('success');
    const overlay = document.getElementById('page-transition');
    if (overlay) {
        overlay.style.display = 'flex'; overlay.style.opacity = '0'; overlay.style.transition = 'none';
        overlay.getBoundingClientRect(); overlay.style.transition = 'opacity 0.8s ease';
        const bar = document.getElementById('transition-bar-fill');
        if (bar) { bar.style.width = '0%'; bar.style.transition = 'none'; bar.getBoundingClientRect(); bar.style.transition = 'width 1.8s ease'; setTimeout(() => { bar.style.width = '100%'; }, 100); }
        overlay.style.opacity = '1';
        setTimeout(() => { window.location.href = "nextroom.html"; }, 1850);
    } else { window.location.href = "nextroom.html"; }
}

function goToOpening() { playSfx('backspace'); setTimeout(() => { window.location.href = "lobby.html"; }, 150); }

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', function (e) {
    if (!modalOverlay.classList.contains('hidden')) {
        if (e.key === 'Enter') {
            if (!modalSuccess.classList.contains('hidden')) nextQuestionOrTransition();
            else if (!modalFail.classList.contains('hidden')) closeModal();
            else if (!modalGameover.classList.contains('hidden')) goToOpening();
            else if (!document.getElementById('modal-settings').classList.contains('hidden')) closeSettings();
        }
        if (e.key === 'Escape') { if (!document.getElementById('modal-settings').classList.contains('hidden')) closeSettings(); }
        return;
    }
    if (['a', 'A'].includes(e.key)) selectChoice('A');
    else if (['b', 'B'].includes(e.key)) selectChoice('B');
    else if (['c', 'C'].includes(e.key)) selectChoice('C');
    else if (['d', 'D'].includes(e.key)) selectChoice('D');
    else if (e.key === 'Enter') checkAnswer();
    else if (e.key === 'Backspace') backspaceAnswer();
    else if (e.key === 'h' || e.key === 'H') useHint();
    else if (e.key === 'Escape') openSettings();
});

// ============================================================
// SOUND EFFECTS
// ============================================================
function playVictorySound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx(); const vol = sfxGain;
    [{ freq: 440, t: 0.0, dur: 0.3 }, { freq: 554, t: 0.15, dur: 0.3 }, { freq: 659, t: 0.30, dur: 0.3 }, { freq: 880, t: 0.45, dur: 0.5 }, { freq: 740, t: 0.45, dur: 0.5 }, { freq: 1109, t: 0.60, dur: 0.8 }].forEach(({ freq, t, dur }) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(vol); o.type = 'sine'; o.frequency.value = freq;
        const start = ctx.currentTime + t;
        g.gain.setValueAtTime(0, start); g.gain.linearRampToValueAtTime(0.25, start + 0.04); g.gain.exponentialRampToValueAtTime(0.001, start + dur);
        o.start(start); o.stop(start + dur);
    });
}

function playOpeningSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx(); const vol = sfxGain;
    const sweep = ctx.createOscillator(); const sweepGain = ctx.createGain();
    sweep.connect(sweepGain); sweepGain.connect(vol); sweep.type = 'sawtooth';
    sweep.frequency.setValueAtTime(80, ctx.currentTime); sweep.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.5);
    sweepGain.gain.setValueAtTime(0.18, ctx.currentTime); sweepGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    sweep.start(ctx.currentTime); sweep.stop(ctx.currentTime + 0.5);
    [440, 554, 659].forEach((freq, i) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(vol); o.type = 'sine'; o.frequency.value = freq;
        const t = ctx.currentTime + 0.5 + i * 0.1;
        g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        o.start(t); o.stop(t + 0.15);
    });
}

function playDoorUnlockSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx(); const vol = sfxGain;
    [{ freq: 180, t: 0.0, dur: 0.15, type: 'sawtooth', gain: 0.12 }, { freq: 130, t: 0.1, dur: 0.2, type: 'sawtooth', gain: 0.10 }, { freq: 440, t: 0.3, dur: 0.15, type: 'sine', gain: 0.22 }, { freq: 550, t: 0.45, dur: 0.15, type: 'sine', gain: 0.22 }, { freq: 660, t: 0.6, dur: 0.3, type: 'sine', gain: 0.28 }].forEach(({ freq, t, dur, type, gain }) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.connect(g); g.connect(vol); o.type = type; o.frequency.value = freq;
        const start = ctx.currentTime + t;
        g.gain.setValueAtTime(gain, start); g.gain.exponentialRampToValueAtTime(0.001, start + dur);
        o.start(start); o.stop(start + dur);
    });
}

// ============================================================
// BOOT
// ============================================================
loadPrefs();
initQuestions();
updateLivesDisplay();
updateTimerUI();
loadQuestion();
applyLanguage();

(function checkAlreadyCompleted() {
    const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
    if (completed.includes('logic')) {
        const opening = document.getElementById('opening-screen');
        if (opening) opening.style.display = 'none';
        const modalOverlayEl = document.getElementById('modal-overlay');
        const modalTransitionEl = document.getElementById('modal-transition');
        if (modalOverlayEl && modalTransitionEl) {
            document.querySelectorAll('.modal-box, .modal-compact').forEach(m => m.classList.add('hidden'));
            modalOverlayEl.classList.remove('hidden');
            modalTransitionEl.classList.remove('hidden');
        }
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) gameContainer.style.pointerEvents = 'none';
    }
})();

function startGame() {
    const opening = document.getElementById('opening-screen');
    opening.classList.add('hide');
    setTimeout(() => { opening.style.display = 'none'; }, 700);
    startTimer();
    if (musicEnabled) startMusic();
    playOpeningSound();
}
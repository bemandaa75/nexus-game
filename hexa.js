// ============================================================
// QUESTION BANK — Hexa ke Biner, Desimal, Oktal
// field: q = soal (hex), to = basis tujuan, a = jawaban benar
// ============================================================
const questionBank = [
    // Hexa to Binary (17 soal)
    { q: "A", to: "2", a: "1010" },
    { q: "F", to: "2", a: "1111" },
    { q: "1F", to: "2", a: "11111" },
    { q: "2A", to: "2", a: "101010" },
    { q: "3C", to: "2", a: "111100" },
    { q: "4B", to: "2", a: "1001011" },
    { q: "5E", to: "2", a: "1011110" },
    { q: "7F", to: "2", a: "1111111" },
    { q: "80", to: "2", a: "10000000" },
    { q: "9D", to: "2", a: "10011101" },
    { q: "B3", to: "2", a: "10110011" },
    { q: "C0", to: "2", a: "11000000" },
    { q: "D5", to: "2", a: "11010101" },
    { q: "E8", to: "2", a: "11101000" },
    { q: "FF", to: "2", a: "11111111" },
    { q: "10", to: "2", a: "10000" },
    { q: "6A", to: "2", a: "1101010" },

    // Hexa to Decimal (17 soal)
    { q: "A", to: "10", a: "10" },
    { q: "F", to: "10", a: "15" },
    { q: "10", to: "10", a: "16" },
    { q: "1A", to: "10", a: "26" },
    { q: "1F", to: "10", a: "31" },
    { q: "20", to: "10", a: "32" },
    { q: "2B", to: "10", a: "43" },
    { q: "3F", to: "10", a: "63" },
    { q: "40", to: "10", a: "64" },
    { q: "4C", to: "10", a: "76" },
    { q: "64", to: "10", a: "100" },
    { q: "7F", to: "10", a: "127" },
    { q: "80", to: "10", a: "128" },
    { q: "A0", to: "10", a: "160" },
    { q: "B4", to: "10", a: "180" },
    { q: "C8", to: "10", a: "200" },
    { q: "FF", to: "10", a: "255" },

    // Hexa to Octal (16 soal)
    { q: "A", to: "8", a: "12" },
    { q: "F", to: "8", a: "17" },
    { q: "10", to: "8", a: "20" },
    { q: "1F", to: "8", a: "37" },
    { q: "2A", to: "8", a: "52" },
    { q: "3C", to: "8", a: "74" },
    { q: "3F", to: "8", a: "77" },
    { q: "40", to: "8", a: "100" },
    { q: "53", to: "8", a: "123" },
    { q: "64", to: "8", a: "144" },
    { q: "7F", to: "8", a: "177" },
    { q: "80", to: "8", a: "200" },
    { q: "92", to: "8", a: "222" },
    { q: "AD", to: "8", a: "255" },
    { q: "CA", to: "8", a: "312" },
    { q: "100", to: "8", a: "400" }
];

// ============================================================
// LANGUAGE STRINGS
// ============================================================
const LANG = {
    id: {
        nexusDefault: "Hexadecimal system detected. Convert the code to continue.",
        nexusHint: (rem) => `Cek hint di atas ya! Sisa hint: ${rem}.`,
        nexusWrong: "Jawaban salah! Coba lagi dengan lebih teliti.",
        restartConfirm: "Yakin ingin mengulang ruangan ini dari awal?",
        failDesc: "Incorrect input detected.<br>Coba lagi!",
        successDesc: "Good job!<br>Kamu mendapatkan Digital Key!",
        nextBtn: "LANJUT ▶",
        lobbyBtn: "↩ KEMBALI",
        saveClose: "SIMPAN & TUTUP",
    },
    en: {
        nexusDefault: "Hexadecimal system detected. Convert the code to continue.",
        nexusHint: (rem) => `Check the hint above! Hints left: ${rem}.`,
        nexusWrong: "Wrong answer! Try again more carefully.",
        restartConfirm: "Are you sure you want to restart this room?",
        failDesc: "Incorrect input detected.<br>Try again!",
        successDesc: "Good job!<br>You got the Digital Key!",
        nextBtn: "NEXT ▶",
        lobbyBtn: "↩ BACK",
        saveClose: "SAVE & CLOSE",
    }
};

const nexusMessages = [
    "NEXUS: Selamat datang di Hexa Room. Sistem basis 16 telah aktif.",
    "NEXUS: Angka hexadesimal terdeteksi. Konversi dengan tepat untuk melanjutkan.",
    "NEXUS: Setiap digit hex mewakili 4 bit biner.",
    "NEXUS: Jangan terkecoh. Basis 16 memiliki aturannya sendiri.",
    "NEXUS: Decoder hexadecimal aktif. Analisis setiap karakter dengan teliti.",
    "NEXUS: A=10, B=11, C=12, D=13, E=14, F=15. Ingat selalu.",
    "NEXUS: Satu digit salah dapat merusak seluruh hasil konversi.",
    "NEXUS: Sistem sedang memproses kemampuan logikamu.",
    "NEXUS: Jangan menebak. Gunakan metode konversi yang benar.",
    "NEXUS: Hexadecimal sering digunakan dalam pemrograman dan warna RGB.",
    "NEXUS: Fokus pada pola. Setiap nibble (4 bit) = 1 digit hex.",
    "NEXUS: Aku penasaran... seberapa baik kamu memahami basis 16?",
    "NEXUS: Ketelitian lebih penting daripada kecepatan.",
    "NEXUS: Setiap jawaban benar membawa akses lebih dekat.",
    "NEXUS: Binary, Octal, atau Decimal... pilih jawaban yang tepat.",
    "NEXUS: Jangan biarkan tekanan membuat logikamu kacau.",
    "NEXUS: Sistem memonitor setiap input yang kamu berikan.",
    "NEXUS: Basis 16 lebih ringkas dari biner, tapi tetap perlu ketelitian.",
    "NEXUS: Gunakan logikamu, bukan keberuntungan.",
    "NEXUS: Hex selalu meninggalkan jejak jika kamu tahu cara membacanya.",
    "NEXUS: Waktu terus berjalan. Hitung dengan cermat.",
    "NEXUS: Menarik... kemampuan analisismu mulai terdeteksi.",
    "NEXUS: Selamat datang di permainan konversi bilangan, human.",
    "NEXUS: Hexa Room tidak memaafkan kesalahan ceroboh.",
    "NEXUS: Semua kode memiliki jawaban yang tepat."
];

// ============================================================
// AUDIO ENGINE (Web Audio API — no external files)
// ============================================================
let audioCtx = null;
let musicGain = null;
let sfxGain = null;
let musicNode = null;
let musicEnabled = true;
let sfxEnabled = true;
let musicVolume = 0.4;
let sfxVolume = 0.7;
let timerWarningActive = false;

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
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g); g.connect(vol);
            o.frequency.value = 1000;
            o.type = 'sine';
            g.gain.setValueAtTime(0.18, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            o.start(ctx.currentTime);
            o.stop(ctx.currentTime + 0.08);
            break;
        }
        case 'success': {
            [523, 659, 784, 1047].forEach((freq, i) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g); g.connect(vol);
                o.frequency.value = freq;
                o.type = 'sine';
                const t = ctx.currentTime + i * 0.12;
                g.gain.setValueAtTime(0.25, t);
                g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
                o.start(t); o.stop(t + 0.25);
            });
            break;
        }
        case 'fail': {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g); g.connect(vol);
            o.type = 'sawtooth';
            o.frequency.setValueAtTime(220, ctx.currentTime);
            o.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);
            g.gain.setValueAtTime(0.3, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.3);
            break;
        }
        case 'hint': {
            [440, 550].forEach((freq, i) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g); g.connect(vol);
                o.frequency.value = freq;
                o.type = 'sine';
                const t = ctx.currentTime + i * 0.15;
                g.gain.setValueAtTime(0.2, t);
                g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
                o.start(t); o.stop(t + 0.2);
            });
            break;
        }
        case 'gameover': {
            [400, 300, 200, 120].forEach((freq, i) => {
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g); g.connect(vol);
                o.frequency.value = freq;
                o.type = 'square';
                const t = ctx.currentTime + i * 0.18;
                g.gain.setValueAtTime(0.22, t);
                g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
                o.start(t); o.stop(t + 0.22);
            });
            break;
        }
        case 'timerWarn': {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g); g.connect(vol);
            o.frequency.value = 1100;
            o.type = 'square';
            g.gain.setValueAtTime(0.12, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
            o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.06);
            break;
        }
        case 'backspace': {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g); g.connect(vol);
            o.frequency.value = 300;
            o.type = 'sine';
            g.gain.setValueAtTime(0.1, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
            o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.07);
            break;
        }
    }
}

// --- Background Music (sci-fi ambient loop - amber/warm tone) ---
function startMusic() {
    if (!musicEnabled) return;
    const ctx = getAudioCtx();
    stopMusic();

    const nodes = [];

    const drone = ctx.createOscillator();
    const droneGain = ctx.createGain();
    drone.type = 'sine';
    drone.frequency.value = 60;
    droneGain.gain.value = 0.18;
    drone.connect(droneGain); droneGain.connect(musicGain);
    drone.start();
    nodes.push(drone, droneGain);

    const mid = ctx.createOscillator();
    const midGain = ctx.createGain();
    mid.type = 'triangle';
    mid.frequency.value = 120;
    midGain.gain.value = 0.08;
    mid.connect(midGain); midGain.connect(musicGain);
    mid.start();
    nodes.push(mid, midGain);

    const shimmer = ctx.createOscillator();
    const shimmerGain = ctx.createGain();
    shimmer.type = 'sine';
    shimmer.frequency.value = 240.5;
    shimmerGain.gain.value = 0.05;
    shimmer.connect(shimmerGain); shimmerGain.connect(musicGain);
    shimmer.start();
    nodes.push(shimmer, shimmerGain);

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.25;
    lfoGain.gain.value = 0.06;
    lfo.connect(lfoGain); lfoGain.connect(droneGain.gain);
    lfo.start();
    nodes.push(lfo, lfoGain);

    // Amber-warm note pattern
    const noteFreqs = [120, 150, 180, 120, 200, 120, 150, 240];
    let noteIdx = 0;
    function scheduleNote() {
        if (!musicEnabled) return;
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = noteFreqs[noteIdx % noteFreqs.length];
        noteIdx++;
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
        o.connect(g); g.connect(musicGain);
        o.start(ctx.currentTime); o.stop(ctx.currentTime + 1.2);
        musicNode._noteTimer = setTimeout(scheduleNote, 1800);
    }

    musicNode = { nodes, _noteTimer: null };
    scheduleNote();
}

function stopMusic() {
    if (musicNode) {
        clearTimeout(musicNode._noteTimer);
        musicNode.nodes.forEach(n => {
            try { n.stop ? n.stop() : n.disconnect(); } catch (e) { }
        });
        musicNode = null;
    }
}

// ============================================================
// SETTINGS STATE
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
    const savedLang = localStorage.getItem('nexusLang');
    if (savedLang) currentLang = savedLang;

    const savedMusic = localStorage.getItem('nexusMusic');
    if (savedMusic !== null) musicEnabled = savedMusic === 'true';

    const savedSfx = localStorage.getItem('nexusSfx');
    if (savedSfx !== null) sfxEnabled = savedSfx === 'true';

    const savedMusicVol = localStorage.getItem('nexusMusicVol');
    if (savedMusicVol !== null) musicVolume = parseFloat(savedMusicVol);

    const savedSfxVol = localStorage.getItem('nexusSfxVol');
    if (savedSfxVol !== null) sfxVolume = parseFloat(savedSfxVol);
}

// ============================================================
// HINT GENERATOR
// ============================================================
function generateHints(q) {
    const byTarget = {
        "2": [
            "Setiap digit hex setara dengan 4 digit biner.",
            "Gunakan tabel: 0→0000, 1→0001, ..., A→1010, B→1011, C→1100, D→1101, E→1110, F→1111.",
            "Ubah tiap digit hex satu per satu menjadi 4 bit, lalu gabungkan. Hilangkan leading zero.",
        ],
        "10": [
            "Gunakan pangkat 16: posisi kanan = 16⁰=1, tengah = 16¹=16, kiri = 16²=256.",
            "Kalikan tiap digit dengan nilai posisinya. Ingat: A=10, B=11, C=12, D=13, E=14, F=15.",
            "Mulai dari digit paling kiri, kalikan dengan pangkat 16 sesuai posisi, lalu jumlahkan.",
        ],
        "8": [
            "Ubah dulu ke biner (tiap digit hex = 4 bit), lalu kelompokkan 3 bit dari kanan.",
            "Setiap 3 bit biner = 1 digit oktal (0-7).",
            "Setelah ke biner, tambahkan leading zero agar bisa dibagi 3, lalu konversi tiap grup.",
        ],
    };
    const general = [
        "Periksa kembali hasilmu sebelum menekan SUBMIT.",
        "Perhatikan jenis konversi yang diminta (lihat subskrip tujuan).",
        `Jawaban terdiri dari ${q.a.length} karakter.`,
        "Coba pecah angka besar menjadi digit per digit.",
        "Kesalahan satu digit bisa mengubah seluruh jawaban.",
    ];
    const pool = [...(byTarget[q.to] || []), ...general];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}

// ============================================================
// GAME STATE
// ============================================================
let questionsList = [];
let currentQuestionIndex = 0;
let currentInput = "";
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

// ============================================================
// UTILITY
// ============================================================
function typeText(element, text, speed = 35) {
    clearInterval(typingInterval);
    element.textContent = "";
    let i = 0;
    typingInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
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
// LOAD QUESTION
// ============================================================
function loadQuestion() {
    if (currentQuestionIndex >= questionsList.length) return;
    const q = questionsList[currentQuestionIndex];

    // Tampilkan: angka hex₁₆ = ?basis_tujuan
    questionDisplay.innerHTML = `${q.q}<sub>16</sub> = ?<sub>${q.to}</sub>`;
    questionCounter.innerText = `${currentQuestionIndex + 1}/10`;
    clearInput();
    currentHintIndex = 0;
    currentHints = generateHints(q);
    hideHint();
    updateHintBtn();
    typeText(
        nexusDialog,
        nexusMessages[Math.floor(Math.random() * nexusMessages.length)]
    );
}

// ============================================================
// HINT SYSTEM
// ============================================================
function useHint() {
    if (hintsRemaining <= 0) return;
    if (currentHintIndex >= currentHints.length) return;

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

function hideHint() {
    hintDisplay.classList.remove('visible');
    hintDisplay.textContent = '';
}

function updateHintBtn() {
    if (hintsRemaining <= 0) {
        hintBtn.disabled = true;
        hintBtn.textContent = 'HINT (0)';
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
        if (!modalGameover.classList.contains('hidden') ||
            !modalTransition.classList.contains('hidden')) {
            clearInterval(timerInterval);
            return;
        }
        if (timeInSeconds > 0) {
            timeInSeconds--;
            updateTimerUI();
            if (timeInSeconds === 30) {
                typeText(nexusDialog, "NEXUS: Warning... waktu hampir habis.");
            }
            if (timeInSeconds === 10) {
                typeText(nexusDialog, "NEXUS: CEPAT! Sistem akan terkunci!");
            }
            if (timeInSeconds < 60 && timeInSeconds % 2 === 0) {
                playSfx('timerWarn');
            }
        } else {
            clearInterval(timerInterval);
            playSfx('gameover');
            showModal('gameover');
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
// INPUT HANDLING
// ============================================================
function inputNumber(num) {
    if (currentInput.length < 14) {
        currentInput += String(num);
        updateDisplay();
        playSfx('click');
    }
}

function backspaceAnswer() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
        playSfx('backspace');
    }
}

function clearInput() {
    currentInput = "";
    updateDisplay();
}

function updateDisplay() {
    if (currentInput === "") {
        answerDisplay.innerHTML = "_Jawaban di sini";
        answerDisplay.classList.remove("active");
    } else {
        answerDisplay.textContent = currentInput;
        answerDisplay.classList.add("active");
    }
}

// ============================================================
// CHECK ANSWER
// ============================================================
function checkAnswer() {
    if (currentInput === "" || !modalOverlay.classList.contains('hidden')) return;

    const correctAnswer = questionsList[currentQuestionIndex].a;

    if (currentInput.toUpperCase() === correctAnswer.toUpperCase()) {
        const hintPenalty = currentHintIndex * 20;
        const timeBonus = Math.floor(timeInSeconds / 30) * 10;
        const gained = Math.max(50, 200 + timeBonus - hintPenalty);
        score += gained;
        scoreElement.textContent = score;
        document.getElementById("score-gain-text").textContent = `+${gained} poin`;
        playSfx('success');
        showModal('success');
    } else {
        lives--;
        updateLivesDisplay();
        typeText(nexusDialog, LANG[currentLang].nexusWrong);
        playSfx('fail');
        if (lives <= 0) {
            setTimeout(() => { playSfx('gameover'); }, 400);
            showModal('gameover');
        } else {
            showModal('fail');
        }
    }
}

// ============================================================
// NEXT QUESTION / TRANSITION
// ============================================================
function nextQuestionOrTransition() {
    if (currentQuestionIndex < questionsList.length - 1) {
        closeModal();
        currentQuestionIndex++;
        loadQuestion();
    } else {
        const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
        const alreadyCompleted = completed.includes('hexa');

        if (!alreadyCompleted) {
            localStorage.setItem('stars_hexa', score);
            completed.push('hexa');
            localStorage.setItem('completedRooms', JSON.stringify(completed));
        }

        const prevKeys = parseInt(localStorage.getItem('playerKeys') || '0');
        const newKeys = prevKeys + 1;
        localStorage.setItem('playerKeys', newKeys);

        const usekeyCount = document.getElementById('usekey-count');
        if (usekeyCount) usekeyCount.textContent = newKeys;

        playVictorySound();
        clearInterval(timerInterval);
        stopMusic();
        playDoorUnlockSound();
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
    if (type === 'gameover') {
        modalGameover.classList.remove('hidden');
        clearInterval(timerInterval);
        stopMusic();
    }
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    clearInput();
}

function useKeyAndProceed() {
    const keys = parseInt(localStorage.getItem('playerKeys') || '0');
    if (keys <= 0) return;
    playDoorUnlockSound();
    showModal('transition');
}

// ============================================================
// RESTART
// ============================================================
function restartGame() {
    if (confirm(LANG[currentLang].restartConfirm)) {
        currentQuestionIndex = 0;
        lives = 5;
        timeInSeconds = 600;
        score = 0;
        hintsRemaining = 3;
        scoreElement.textContent = score;
        updateLivesDisplay();
        updateTimerUI();
        initQuestions();
        loadQuestion();
        closeModal();
        startTimer();
        if (musicEnabled) startMusic();
    }
}

function goToNextRoom() {
    playSfx('success');
    const overlay = document.getElementById('page-transition');
    if (overlay) {
        overlay.style.display = 'flex';
        overlay.style.opacity = '0';
        overlay.style.transition = 'none';
        overlay.getBoundingClientRect();
        overlay.style.transition = 'opacity 0.8s ease';

        const bar = document.getElementById('transition-bar-fill');
        if (bar) {
            setTimeout(() => { bar.style.width = '100%'; }, 100);
        }

        overlay.style.opacity = '1';
        setTimeout(() => { window.location.href = "logic.html"; }, 1850);
    } else {
        window.location.href = "logic.html";
    }
}

function goToOpening() {
    playSfx('backspace');
    setTimeout(() => { window.location.href = "lobby.html"; }, 150);
}

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
        if (e.key === 'Escape') {
            if (!document.getElementById('modal-settings').classList.contains('hidden')) closeSettings();
        }
        return;
    }

    if (/^[0-9]$/.test(e.key)) {
        inputNumber(e.key);
    } else if (/^[a-fA-F]$/.test(e.key)) {
        inputNumber(e.key.toUpperCase());
    } else if (e.key === 'Backspace') {
        backspaceAnswer();
    } else if (e.key === 'Enter') {
        checkAnswer();
    } else if (e.key === 'h' || e.key === 'H') {
        useHint();
    } else if (e.key === 'Escape') {
        openSettings();
    }
});

// ============================================================
// VICTORY SOUND
// ============================================================
function playVictorySound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;

    const notes = [
        { freq: 523, t: 0.0, dur: 0.3 },
        { freq: 659, t: 0.15, dur: 0.3 },
        { freq: 784, t: 0.30, dur: 0.3 },
        { freq: 1047, t: 0.45, dur: 0.5 },
        { freq: 880, t: 0.45, dur: 0.5 },
        { freq: 1319, t: 0.60, dur: 0.8 },
    ];
    notes.forEach(({ freq, t, dur }) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(vol);
        o.type = 'sine';
        o.frequency.value = freq;
        const start = ctx.currentTime + t;
        g.gain.setValueAtTime(0, start);
        g.gain.linearRampToValueAtTime(0.28, start + 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, start + dur);
        o.start(start); o.stop(start + dur);
    });

    [2093, 2637, 3136].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(vol);
        o.type = 'sine';
        o.frequency.value = freq;
        const t = ctx.currentTime + 0.55 + i * 0.08;
        g.gain.setValueAtTime(0.1, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        o.start(t); o.stop(t + 0.35);
    });

    const kick = ctx.createOscillator();
    const kickGain = ctx.createGain();
    kick.connect(kickGain); kickGain.connect(vol);
    kick.type = 'sine';
    kick.frequency.setValueAtTime(180, ctx.currentTime);
    kick.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.25);
    kickGain.gain.setValueAtTime(0.5, ctx.currentTime);
    kickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    kick.start(ctx.currentTime); kick.stop(ctx.currentTime + 0.3);
}

// ============================================================
// OPENING SOUND
// ============================================================
function playOpeningSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;

    const sweep = ctx.createOscillator();
    const sweepGain = ctx.createGain();
    sweep.connect(sweepGain); sweepGain.connect(vol);
    sweep.type = 'sawtooth';
    sweep.frequency.setValueAtTime(100, ctx.currentTime);
    sweep.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.5);
    sweepGain.gain.setValueAtTime(0.2, ctx.currentTime);
    sweepGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    sweep.start(ctx.currentTime); sweep.stop(ctx.currentTime + 0.5);

    [523, 659, 784].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(vol);
        o.type = 'sine';
        o.frequency.value = freq;
        const t = ctx.currentTime + 0.5 + i * 0.1;
        g.gain.setValueAtTime(0.2, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        o.start(t); o.stop(t + 0.15);
    });
}

// ============================================================
// DOOR UNLOCK SOUND
// ============================================================
function playDoorUnlockSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;

    const notes = [
        { freq: 200, t: 0.0, dur: 0.15, type: 'sawtooth', gain: 0.15 },
        { freq: 150, t: 0.1, dur: 0.2, type: 'sawtooth', gain: 0.12 },
        { freq: 440, t: 0.3, dur: 0.15, type: 'sine', gain: 0.25 },
        { freq: 660, t: 0.45, dur: 0.15, type: 'sine', gain: 0.25 },
        { freq: 880, t: 0.6, dur: 0.3, type: 'sine', gain: 0.3 },
    ];
    notes.forEach(({ freq, t, dur, type, gain }) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(vol);
        o.type = type;
        o.frequency.value = freq;
        const start = ctx.currentTime + t;
        g.gain.setValueAtTime(gain, start);
        g.gain.exponentialRampToValueAtTime(0.001, start + dur);
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

// Jika hexa sudah completed, langsung tampilkan modal ACCESS GRANTED
(function checkAlreadyCompleted() {
    const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
    if (completed.includes('hexa')) {
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

// ============================================================
// OPENING startGame
// ============================================================
function startGame() {
    const opening = document.getElementById('opening-screen');
    opening.classList.add('hide');
    setTimeout(() => { opening.style.display = 'none'; }, 700);
    startTimer();
    if (musicEnabled) startMusic();
    playOpeningSound();
}
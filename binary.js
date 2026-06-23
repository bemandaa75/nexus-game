// ============================================================
// QUESTION BANK: 30 soal konversi binary → desimal
// ============================================================
const questionBank = [
    { binary: "101011", decimal: "43" },
    { binary: "1100101", decimal: "101" },
    { binary: "11110", decimal: "30" },
    { binary: "1001010", decimal: "74" },
    { binary: "1111111", decimal: "127" },

    { binary: "100011", decimal: "35" },
    { binary: "1011001", decimal: "89" },
    { binary: "1101", decimal: "13" },
    { binary: "1000000", decimal: "64" },
    { binary: "111001", decimal: "57" },

    { binary: "1010101", decimal: "85" },
    { binary: "10010", decimal: "18" },
    { binary: "1101110", decimal: "110" },
    { binary: "111011", decimal: "59" },
    { binary: "1001111", decimal: "79" },

    { binary: "1011", decimal: "11" },
    { binary: "1110001", decimal: "113" },
    { binary: "100110", decimal: "38" },
    { binary: "110011", decimal: "51" },
    { binary: "1011110", decimal: "94" },

    { binary: "111101", decimal: "61" },
    { binary: "100001", decimal: "33" },
    { binary: "101000", decimal: "40" },
    { binary: "1101000", decimal: "104" },
    { binary: "1111", decimal: "15" },

    { binary: "1001001", decimal: "73" },
    { binary: "1110100", decimal: "116" },
    { binary: "101101", decimal: "45" },
    { binary: "1000001", decimal: "65" },
    { binary: "110110", decimal: "54" },

    { binary: "1111100", decimal: "124" },
    { binary: "1010110", decimal: "86" },
    { binary: "100111", decimal: "39" },
    { binary: "110000", decimal: "48" },
    { binary: "1010011", decimal: "83" },

    { binary: "111000", decimal: "56" },
    { binary: "100101", decimal: "37" },
    { binary: "1101011", decimal: "107" },
    { binary: "101110", decimal: "46" },
    { binary: "1110111", decimal: "119" },

    { binary: "1000", decimal: "8" },
    { binary: "1100011", decimal: "99" },
    { binary: "1011111", decimal: "95" },
    { binary: "1111001", decimal: "121" },
    { binary: "1001100", decimal: "76" },

    { binary: "101010", decimal: "42" },
    { binary: "110010", decimal: "50" },
    { binary: "111111", decimal: "63" },
    { binary: "1000010", decimal: "66" },
    { binary: "10000000", decimal: "128" }
];

// ============================================================
// LANGUAGE STRINGS
// ============================================================
const LANG = {
    id: {
        nexusDefault: "Binary system detected. Convert the code to continue.",
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
        nexusDefault: "Binary system detected. Convert the code to continue.",
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
    "NEXUS: Oke manusia... mari lihat apakah otakmu lebih cepat dari processorku.",
    "NEXUS: Binary terdeteksi. Jangan asal nebak ya.",
    "NEXUS: Aku sudah tahu jawabannya. Sekarang giliranmu.",
    "NEXUS: Sistem bilang ini mudah. Kita lihat apakah benar.",
    "NEXUS: Jangan panik. Itu cuma angka 0 dan 1... kan?",
    "NEXUS: Decoder aktif. Semoga matematikamu tidak error.",
    "NEXUS: Hmm... kode ini terlihat lebih rumit dari sebelumnya.",
    "NEXUS: Fokus. Kesalahan kecil bisa membuat seluruh sistem gagal.",
    "NEXUS: Aku percaya padamu. Sedikit.",
    "NEXUS: Konversi binary dimulai. Good luck, human.",
    "NEXUS: Jika bingung, coba hitung perlahan dari kanan.",
    "NEXUS: Menarik... apakah kamu benar-benar memahami binary?",
    "NEXUS: Angka tidak pernah berbohong.",
    "NEXUS: Jangan biarkan angka 1 menipumu.",
    "NEXUS: Satu jawaban benar lebih dekat ke pintu keluar.",
    "NEXUS: Aku mendeteksi keraguan pada ekspresimu.",
    "NEXUS: Jangan khawatir, bahkan AI pun pernah salah hitung.",
    "NEXUS: Sistem keamanan sedang memperhatikan jawabanmu.",
    "NEXUS: Binary hanyalah teka-teki kecil bagi pikiran yang tenang.",
    "NEXUS: Kau dan aku sekarang terjebak di sistem yang sama.",
    "NEXUS: Ayo... sebelum waktu habis.",
    "NEXUS: Aku penasaran seberapa jauh kemampuanmu.",
    "NEXUS: Jangan terburu-buru. Ketelitian lebih penting.",
    "NEXUS: Hmm... seharusnya yang ini bisa kamu pecahkan.",
    "NEXUS: Semua pintu memiliki kode. Semua kode punya jawaban."
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

// --- SFX generators ---
function playSfx(type) {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;

    switch (type) {
        case 'click': {
            // Short soft beep
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.connect(g); g.connect(vol);
            o.frequency.value = 880;
            o.type = 'sine';
            g.gain.setValueAtTime(0.18, ctx.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            o.start(ctx.currentTime);
            o.stop(ctx.currentTime + 0.08);
            break;
        }
        case 'success': {
            // Ascending chime
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
            // Low buzzer
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
            // Soft notification
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
            // Descending dramatic
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
            // Urgent tick
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

// --- Background Music (sci-fi ambient loop) ---
function startMusic() {
    if (!musicEnabled) return;
    const ctx = getAudioCtx();
    stopMusic();

    // Layered drone: base + pulse + shimmer
    const nodes = [];

    // Base drone
    const drone = ctx.createOscillator();
    const droneGain = ctx.createGain();
    drone.type = 'sine';
    drone.frequency.value = 55;
    droneGain.gain.value = 0.18;
    drone.connect(droneGain); droneGain.connect(musicGain);
    drone.start();
    nodes.push(drone, droneGain);

    // Mid layer
    const mid = ctx.createOscillator();
    const midGain = ctx.createGain();
    mid.type = 'triangle';
    mid.frequency.value = 110;
    midGain.gain.value = 0.08;
    mid.connect(midGain); midGain.connect(musicGain);
    mid.start();
    nodes.push(mid, midGain);

    // Shimmer (slightly detuned)
    const shimmer = ctx.createOscillator();
    const shimmerGain = ctx.createGain();
    shimmer.type = 'sine';
    shimmer.frequency.value = 220.5;
    shimmerGain.gain.value = 0.05;
    shimmer.connect(shimmerGain); shimmerGain.connect(musicGain);
    shimmer.start();
    nodes.push(shimmer, shimmerGain);

    // Slow pulse via LFO on droneGain
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.2;
    lfoGain.gain.value = 0.06;
    lfo.connect(lfoGain); lfoGain.connect(droneGain.gain);
    lfo.start();
    nodes.push(lfo, lfoGain);

    // Rhythmic pulse (arpeggio-like notes every ~2s)
    const noteFreqs = [110, 138.6, 164.8, 110, 184, 110, 138.6, 220];
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
    // Pause game timer while in settings
    clearInterval(timerInterval);
    modalOverlay.classList.remove('hidden');
    [modalSuccess, modalFail, modalTransition, modalGameover].forEach(m => m.classList.add('hidden'));
    document.getElementById('modal-settings').classList.remove('hidden');

    // Sync UI to current state
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
    // Resume timer
    startTimer();
    // Save prefs
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

    // Update static texts
    const failDesc = document.getElementById('fail-desc');
    if (failDesc) failDesc.innerHTML = t.failDesc;

    const nextRoomBtn = document.querySelector('#modal-transition .modal-btn-cyan');
    if (nextRoomBtn) nextRoomBtn.textContent = t.nextBtn;
    const lobbyBtn = document.querySelector('#modal-transition .modal-btn-outline');
    if (lobbyBtn) lobbyBtn.textContent = t.lobbyBtn;

    const saveBtn = document.querySelector('#modal-settings .modal-btn-cyan');
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
function generateHints(binary) {
    const hints = [
        "Hitung dari kanan ke kiri menggunakan pangkat 2.",
        "Digit paling kanan bernilai 1.",
        "Angka 0 tidak perlu dijumlahkan.",
        "Perhatikan posisi setiap angka 1.",
        "Binary dengan digit lebih panjang biasanya nilainya lebih besar.",
        "Gunakan urutan 1, 2, 4, 8, 16, 32, 64, 128.",
        "Jumlahkan hanya nilai yang aktif (digit 1).",
        "Mulai hitung dari digit paling kanan.",
        "Setiap posisi dikali pangkat 2.",
        "Coba konversi perlahan satu per satu."
    ];

    return [
        hints[Math.floor(Math.random() * hints.length)],
        hints[Math.floor(Math.random() * hints.length)],
        hints[Math.floor(Math.random() * hints.length)]
    ];
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

        if (i >= text.length) {
            clearInterval(typingInterval);
        }
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
    questionDisplay.innerHTML = `${q.binary}<sub>2</sub> = ?<sub>10</sub>`;
    questionCounter.innerText = `${currentQuestionIndex + 1}/10`;
    clearInput();
    currentHintIndex = 0;
    currentHints = generateHints(q.binary);
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
                typeText(
                    nexusDialog,
                    "NEXUS: Warning... waktu hampir habis."
                );
            }

            if (timeInSeconds === 10) {
                typeText(
                    nexusDialog,
                    "NEXUS: CEPAT! Sistem akan terkunci!"
                );
            }
            // Timer warning sound when < 60s, every 2s
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
    if (currentInput.length < 5) {
        currentInput += num;
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

    const correctAnswer = questionsList[currentQuestionIndex].decimal;

    if (currentInput === correctAnswer) {
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

        // Kurangi skor 500 jika salah
        score = Math.max(0, score - 500);
        scoreElement.textContent = score;

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
        const alreadyCompleted = completed.includes('binary');

        if (!alreadyCompleted) {
            localStorage.setItem('stars_binary', score);
            completed.push('binary');
            localStorage.setItem('completedRooms', JSON.stringify(completed));
        }

        // Tambah 1 kunci
        const prevKeys = parseInt(localStorage.getItem('playerKeys') || '0');
        const newKeys = prevKeys + 1;
        localStorage.setItem('playerKeys', newKeys);

        // Update tampilan jumlah kunci di modal
        const usekeyCount = document.getElementById('usekey-count');
        if (usekeyCount) usekeyCount.textContent = newKeys;

        // Victory sound — epik fanfare
        playVictorySound();

        clearInterval(timerInterval);
        stopMusic();

        // Tampilkan popup narasi kunci dulu
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
        overlay.style.opacity = '1';
        setTimeout(() => { window.location.href = "decimal.html"; }, 850);
    } else {
        window.location.href = "decimal.html";
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

    if (e.key >= '0' && e.key <= '9') inputNumber(parseInt(e.key));
    else if (e.key === 'Backspace') backspaceAnswer();
    else if (e.key === 'Enter') checkAnswer();
    else if (e.key === 'h' || e.key === 'H') useHint();
    else if (e.key === 'Escape') openSettings();
});

// ============================================================
// VICTORY SOUND — epik fanfare saat room selesai
// ============================================================
function playVictorySound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;

    // Chord progression: ascending triumphant
    const notes = [
        { freq: 523, t: 0.0, dur: 0.3 },   // C5
        { freq: 659, t: 0.15, dur: 0.3 },   // E5
        { freq: 784, t: 0.30, dur: 0.3 },   // G5
        { freq: 1047, t: 0.45, dur: 0.5 },   // C6
        { freq: 880, t: 0.45, dur: 0.5 },   // A5
        { freq: 1319, t: 0.60, dur: 0.8 },   // E6 — puncak
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
        o.start(start);
        o.stop(start + dur);
    });

    // Shimmer layer — high frequency sparkle
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

    // Kick drum feel — low thump
    const kick = ctx.createOscillator();
    const kickGain = ctx.createGain();
    kick.connect(kickGain); kickGain.connect(vol);
    kick.type = 'sine';
    kick.frequency.setValueAtTime(180, ctx.currentTime);
    kick.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.25);
    kickGain.gain.setValueAtTime(0.5, ctx.currentTime);
    kickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    kick.start(ctx.currentTime);
    kick.stop(ctx.currentTime + 0.3);
}

// ============================================================
// OPENING SCREEN
// ============================================================
function playOpeningSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;

    // Sci-fi power-up sweep
    const sweep = ctx.createOscillator();
    const sweepGain = ctx.createGain();
    sweep.connect(sweepGain); sweepGain.connect(vol);
    sweep.type = 'sawtooth';
    sweep.frequency.setValueAtTime(80, ctx.currentTime);
    sweep.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.5);
    sweepGain.gain.setValueAtTime(0.2, ctx.currentTime);
    sweepGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    sweep.start(ctx.currentTime);
    sweep.stop(ctx.currentTime + 0.5);

    // Beep confirm
    [440, 660, 880].forEach((freq, i) => {
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
// DOOR UNLOCK SOUND — saat pintu berhasil dibuka
// ============================================================
function playDoorUnlockSound() {
    if (!sfxEnabled) return;
    const ctx = getAudioCtx();
    const vol = sfxGain;

    // Creaky door + access granted beeps
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
// BOOT — cek dulu apakah room sudah selesai
// ============================================================
loadPrefs();
initQuestions();
updateLivesDisplay();
updateTimerUI();
loadQuestion();
applyLanguage();

// Jika binary sudah completed, langsung tampilkan modal ACCESS GRANTED
(function checkAlreadyCompleted() {
    const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
    if (completed.includes('binary')) {
        const opening = document.getElementById('opening-screen');
        if (opening) opening.style.display = 'none';

        const modalOverlay = document.getElementById('modal-overlay');
        const modalTransition = document.getElementById('modal-transition');
        if (modalOverlay && modalTransition) {
            document.querySelectorAll('.modal-box, .modal-compact').forEach(m => m.classList.add('hidden'));
            modalOverlay.classList.remove('hidden');
            modalTransition.classList.remove('hidden');
        }

        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) gameContainer.style.pointerEvents = 'none';
    }
})();

// ============================================================
// OPENING startGame — dipanggil saat tombol MULAI diklik
// ============================================================
function startGame() {
    const opening = document.getElementById('opening-screen');
    opening.classList.add('hide');
    setTimeout(() => { opening.style.display = 'none'; }, 700);
    startTimer();
    if (musicEnabled) startMusic();
    playOpeningSound();
}
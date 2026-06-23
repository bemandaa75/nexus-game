"use strict";

// --- DATA PEMAIN (Simulasi jika LocalStorage kosong) ---
const playerName = localStorage.getItem('playerName') || 'HEMAAAA';
const totalScore = 9850;
const completedRooms = 6;

// --- SCENE MANAGER ---
const scenes = ['scene-recovery', 'scene-dialog', 'scene-walkout', 'scene-summary', 'scene-goodbye', 'scene-cert'];
let currentScene = 0;

function showScene(id) {
    scenes.forEach(s => {
        const el = document.getElementById(s);
        el.classList.remove('visible');
        setTimeout(() => { if (!el.classList.contains('visible')) el.classList.remove('active'); }, 800);
    });
    setTimeout(() => {
        const el = document.getElementById(id);
        el.style.display = 'flex';
        el.classList.add('active');
        requestAnimationFrame(() => el.classList.add('visible'));
    }, 800);
}

// ==========================================
// SCENE 1: SYSTEM RECOVERY (Flow 1, 2, 3)
// ==========================================
function startRecoveryScene() {
    setTimeout(() => {
        document.getElementById('rec-step1').classList.add('hidden');
        document.getElementById('rec-step2').classList.remove('hidden');

        const bar = document.getElementById('progress-bar');
        const val = document.getElementById('progress-val');
        bar.style.width = '100%';
        let p = 0;
        let int = setInterval(() => {
            p += 4; // Sedikit dicepatkan
            if (p > 100) p = 100;
            val.innerText = p + '%';
            if (p === 100) {
                clearInterval(int);
                setTimeout(() => {
                    document.getElementById('rec-step2').classList.add('hidden');
                    document.getElementById('rec-step3').classList.remove('hidden');
                    setTimeout(startDialogScene, 2500);
                }, 800);
            }
        }, 80);
    }, 2500);
}

// ==========================================
// SCENE 2: FAREWELL DIALOGUE (Flow 4)
// ==========================================
const dialog1 = `Kamu berhasil...<br><br>Laboratorium telah pulih.<br>Semua pintu kini terbuka.<br><br>Terima kasih, <span class="hl-cy">Operator.</span>`;

function startDialogScene() {
    currentScene = 1;
    showScene('scene-dialog');
    setTimeout(() => typeText('dialog-scene-text', dialog1, 'dialog-next-btn'), 1000);
}

function nextDialog() {
    startWalkoutScene();
}

// ==========================================
// SCENE 3: EXIT GATE (Flow 5)
// ==========================================
function startWalkoutScene() {
    currentScene = 2;
    showScene('scene-walkout');

    setTimeout(() => {
        document.getElementById('walkout-caption').style.opacity = 1;
    }, 1000);

    // Animasi karakter masuk ke pintu terang
    setTimeout(() => {
        const avatar = document.getElementById('player-avatar-wrap');
        avatar.style.transform = 'translateY(-150px) scale(0.3)';
        avatar.style.opacity = '0';
    }, 2000);

    setTimeout(startSummaryScene, 6500);
}

// ==========================================
// SCENE 4: SUMMARY & HALL OF MEMORY (Flow 6,7,8)
// ==========================================
function startSummaryScene() {
    currentScene = 3;
    showScene('scene-summary');

    // Isi data
    document.getElementById('sum-score').innerText = totalScore.toLocaleString('id-ID');
    document.getElementById('sum-rooms').innerText = completedRooms + ' / 6';

    setTimeout(() => {
        document.getElementById('summary-next-btn').style.opacity = 1;
    }, 2000);
}

// ==========================================
// SCENE 5: FINAL GOODBYE & FADE OUT (Flow 9, 10)
// ==========================================
const dialog2 = `Jika suatu hari sistem kembali bermasalah...<br><br>Aku berharap kita bisa bertemu lagi.<br><br>Selamat tinggal, <span class="hl-cy">${playerName}</span>.`;

function startScene5() {
    currentScene = 4;
    showScene('scene-goodbye');
    setTimeout(() => typeText('goodbye-text', dialog2, 'goodbye-btn'), 1000);
}

function fadeRobot() {
    document.getElementById('goodbye-wrap').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('nexus-hologram').classList.add('fade');
        setTimeout(() => {
            document.getElementById('goodbye-wrap').style.display = 'none';
            const termText = document.getElementById('term-text');
            termText.classList.remove('hidden');

            setTimeout(startCertScene, 3500);
        }, 1500);
    }, 500);
}

// ==========================================
// SCENE 6: CERTIFICATE & MENU (Flow 11, 12, 13)
// ==========================================
function startCertScene() {
    currentScene = 5;
    showScene('scene-cert');
    document.getElementById('skip-btn').style.display = 'none';

    document.getElementById('cert-player-name').innerText = playerName.toUpperCase();
    const now = new Date();
    document.getElementById('cert-date').innerText = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).toUpperCase();
}

// ==========================================
// UTILITIES
// ==========================================
function typeText(elId, html, btnId) {
    const el = document.getElementById(elId);
    const btn = document.getElementById(btnId);
    btn.style.opacity = '0';
    el.innerHTML = '';

    const words = html.split(/(<[^>]+>|[^<\s]+|\s+)/g).filter(Boolean);
    let built = '';
    let idx = 0;

    function next() {
        if (idx >= words.length) {
            btn.style.opacity = '1';
            return;
        }
        built += words[idx++];
        el.innerHTML = built;
        setTimeout(next, words[idx - 1].startsWith('<') ? 0 : 40);
    }
    next();
}

function forceSkip() {
    if (currentScene < 5) startCertScene();
}

function playAgain() {
    // window.location.href = 'lobby.html'; 
    alert("Kembali ke Lobi Utama...");
}

window.onload = () => {
    startRecoveryScene();
};
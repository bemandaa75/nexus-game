// 1. Variabel Global
let selectedAvatarId = 1;
let selectedAvatarSrc = "image/avt1.png";

// 2. Elemen DOM
const setupModal = document.getElementById("setup-modal");
const mainLobbyScreen = document.getElementById("main-lobby");
const nameInput = document.getElementById("input-name");
const displayPlayerName = document.getElementById("display-player-name");
const headerAvatar = document.getElementById("header-avatar");
const progressBarFill = document.getElementById("progress-bar-fill");
const progressBarText = document.getElementById("progress-bar-text");
const displayStars = document.getElementById("display-stars");
const displayKeys = document.getElementById("display-diamonds");

// 3. Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    initAvatarSelection();

    // Auto-login: jika profil sudah tersimpan, langsung masuk lobby
    const savedName = localStorage.getItem('playerName');
    const savedAvatar = localStorage.getItem('playerAvatar');
    if (savedName && savedAvatar) {
        selectedAvatarSrc = savedAvatar;
        applyProfileAndShowLobby(savedName, savedAvatar);
    }
});

function initAvatarSelection() {
    const placeholders = document.querySelectorAll('.avatar-placeholder');
    placeholders.forEach((box, index) => {
        const id = index + 1;
        const img = document.createElement('img');
        img.src = `image/avt${id}.png`;
        img.alt = `Avatar ${id}`;
        img.className = 'avatar-img';
        box.innerHTML = '';
        box.appendChild(img);
    });
}

// 4. Pilih Avatar
function selectAvatar(id) {
    selectedAvatarId = id;
    selectedAvatarSrc = `image/avt${id}.png`;
    const cards = document.querySelectorAll('.avatar-card');
    cards.forEach(card => card.classList.remove('selected'));
    cards[id - 1].classList.add('selected');
}

// 5. Tombol "MASUK LOBBY"
function saveProfile() {
    const inputVal = nameInput.value.trim();
    if (inputVal === "") {
        alert("Mohon masukkan nama Player kamu!");
        return;
    }
    localStorage.setItem('playerName', inputVal);
    localStorage.setItem('playerAvatar', selectedAvatarSrc);
    applyProfileAndShowLobby(inputVal, selectedAvatarSrc);
}

// 6. Terapkan profil & tampilkan lobby
function applyProfileAndShowLobby(name, avatar) {
    displayPlayerName.innerText = name;
    headerAvatar.src = avatar;
    setupModal.classList.add('hidden');
    mainLobbyScreen.classList.remove('hidden');
    unlockCompletedRooms();
    updateStatsDisplay();
}

// 7. Unlock room berdasarkan completedRooms di localStorage
const roomOrder = ['binary', 'decimal', 'octal', 'hexa', 'logic', 'master'];
const keyMap = {
    'binary': 'binary',
    'decimal': 'decimal',
    'octal': 'octal',
    'hexa': 'hexa',
    'logicgate': 'logic',
    'mastercore': 'master'
};
const roomFiles = {
    'binary': 'binary.html',
    'decimal': 'decimal.html',
    'octal': 'octal.html',
    'hexa': 'hexa.html',
    'logic': 'logic.html',
    'master': 'master.html'
};

function unlockCompletedRooms() {
    const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
    const totalKeys = parseInt(localStorage.getItem('playerKeys') || '0');
    const nodes = document.querySelectorAll('.node');

    nodes.forEach(node => {
        const nameEl = node.querySelector('.node-name');
        const iconEl = node.querySelector('.icon');
        if (!nameEl || !iconEl) return;

        const rawName = nameEl.textContent.trim().toLowerCase().replace(/\s/g, '');
        const key = keyMap[rawName];
        if (!key) return;

        const idx = roomOrder.indexOf(key);
        const prevKey = idx > 0 ? roomOrder[idx - 1] : null;
        const prevDone = idx === 0 || (prevKey && completed.includes(prevKey));
        // Room pertama (binary) selalu unlock, room lain butuh prevDone DAN punya kunci
        const isUnlocked = idx === 0 || (prevDone && totalKeys > 0);
        const isDone = completed.includes(key);

        const isMaster = key === 'master';
        const iconLocked = isMaster ? 'image/terkuncinyamaster.png' : 'image/terkunci.png';
        const iconUnlocked = isMaster ? 'image/terbukamaste.png' : 'image/terbuka.png';
        const iconDone = isMaster ? 'image/kelarmaste.png' : 'image/kelar.png';

        if (isDone) {
            node.classList.remove('locked');
            node.classList.add('unlocked');
            iconEl.innerHTML = `<img src="${iconDone}" class="node-img-icon" alt="Selesai">`;
        } else if (isUnlocked) {
            node.classList.remove('locked');
            node.classList.add('unlocked');
            iconEl.innerHTML = `<img src="${iconUnlocked}" class="node-img-icon" alt="Terbuka">`;
        } else {
            node.classList.remove('unlocked');
            node.classList.add('locked');
            iconEl.innerHTML = `<img src="${iconLocked}" class="node-img-icon" alt="Terkunci">`;
        }
    });

    // Update progress bar
    const roomWeights = { 'binary': 15, 'decimal': 15, 'octal': 15, 'hexa': 15, 'logic': 15, 'master': 25 };
    let pct = 0;
    completed.forEach(key => { pct += roomWeights[key] || 0; });
    if (progressBarFill) progressBarFill.style.width = pct + '%';
    if (progressBarText) progressBarText.innerText = pct + '%';
}

// 8. Navigasi ke room — cek unlock dulu
function goToRoom(roomName) {
    const completed = JSON.parse(localStorage.getItem('completedRooms') || '[]');
    const idx = roomOrder.indexOf(roomName);
    const prevKey = idx > 0 ? roomOrder[idx - 1] : null;
    const prevDone = idx === 0 || (prevKey && completed.includes(prevKey));
    const totalKeys = parseInt(localStorage.getItem('playerKeys') || '0');
    const isUnlocked = idx === 0 || (prevDone && totalKeys > 0);

    if (!isUnlocked) {
        if (prevDone && totalKeys <= 0) {
            alert("Kamu butuh 🗝️ Kunci untuk membuka room ini! Selesaikan room sebelumnya untuk mendapatkan kunci.");
        } else {
            alert("Room ini masih terkunci! Selesaikan tantangan sebelumnya.");
        }
        return;
    }

    const roomLabels = {
        'binary': 'BINARY ROOM',
        'decimal': 'DECIMAL ROOM',
        'octal': 'OCTAL ROOM',
        'hexa': 'HEXA ROOM',
        'logic': 'LOGIC GATE ROOM',
        'master': 'MASTER CORE'
    };

    const overlay = document.getElementById('page-transition');
    const bar = document.getElementById('transition-bar-fill');
    const label = document.getElementById('transition-label');

    if (label) label.textContent = 'LOADING ' + (roomLabels[roomName] || roomName.toUpperCase()) + '...';

    overlay.classList.add('active');
    setTimeout(() => { bar.style.width = '100%'; }, 50);
    setTimeout(() => {
        window.location.href = roomFiles[roomName] || '#';
    }, 2200);
}

// 9. Support Enter Key
nameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        saveProfile();
    }
});

// ============ SFX ENGINE (Web Audio API) ============
const sfxCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSfx(type) {
    const sfxOn = localStorage.getItem('sfxOn') !== 'false';
    if (!sfxOn) return;
    const vol = (parseInt(localStorage.getItem('volSfx') || '70')) / 100;

    const o = sfxCtx.createOscillator();
    const g = sfxCtx.createGain();
    o.connect(g); g.connect(sfxCtx.destination);
    g.gain.setValueAtTime(vol * 0.4, sfxCtx.currentTime);

    if (type === 'click') {
        o.type = 'sine';
        o.frequency.setValueAtTime(880, sfxCtx.currentTime);
        o.frequency.exponentialRampToValueAtTime(440, sfxCtx.currentTime + 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, sfxCtx.currentTime + 0.12);
        o.start(); o.stop(sfxCtx.currentTime + 0.12);
    } else if (type === 'toggle') {
        o.type = 'square';
        o.frequency.setValueAtTime(600, sfxCtx.currentTime);
        o.frequency.exponentialRampToValueAtTime(900, sfxCtx.currentTime + 0.06);
        g.gain.exponentialRampToValueAtTime(0.001, sfxCtx.currentTime + 0.1);
        o.start(); o.stop(sfxCtx.currentTime + 0.1);
    } else if (type === 'error') {
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(200, sfxCtx.currentTime);
        o.frequency.exponentialRampToValueAtTime(80, sfxCtx.currentTime + 0.2);
        g.gain.exponentialRampToValueAtTime(0.001, sfxCtx.currentTime + 0.25);
        o.start(); o.stop(sfxCtx.currentTime + 0.25);
    } else if (type === 'open') {
        // ascending chime
        [523, 659, 784].forEach((freq, i) => {
            const oo = sfxCtx.createOscillator();
            const gg = sfxCtx.createGain();
            oo.connect(gg); gg.connect(sfxCtx.destination);
            oo.type = 'sine';
            oo.frequency.value = freq;
            gg.gain.setValueAtTime(vol * 0.3, sfxCtx.currentTime + i * 0.07);
            gg.gain.exponentialRampToValueAtTime(0.001, sfxCtx.currentTime + i * 0.07 + 0.2);
            oo.start(sfxCtx.currentTime + i * 0.07);
            oo.stop(sfxCtx.currentTime + i * 0.07 + 0.2);
        });
        return;
    }
}

// Attach SFX to all buttons globally
document.addEventListener('click', function (e) {
    if (sfxCtx.state === 'suspended') sfxCtx.resume();
    const btn = e.target.closest('button, .stat-settings, .node.unlocked, .lang-btn, .toggle-btn, .reset-btn-confirm, .reset-btn-cancel, .modal-btn, .restart-btn, .btn-start, .avatar-card');
    if (!btn) return;
    if (btn.classList.contains('reset-btn-confirm')) playSfx('error');
    else if (btn.classList.contains('toggle-btn')) playSfx('toggle');
    else if (btn.classList.contains('node') && btn.classList.contains('unlocked')) playSfx('open');
    else playSfx('click');
}, true);

// ============ SETTINGS ============
function openSettings() {
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.getElementById('modal-settings').classList.remove('hidden');
    document.getElementById('modal-reset').classList.add('hidden');
    loadSettingsState();
}

function closeSettings() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('modal-settings').classList.add('hidden');
}

function loadSettingsState() {
    const musicOn = localStorage.getItem('musicOn') !== 'false';
    const sfxOn = localStorage.getItem('sfxOn') !== 'false';
    const volM = localStorage.getItem('volMusic') || '40';
    const volS = localStorage.getItem('volSfx') || '70';

    const btnM = document.getElementById('toggle-music');
    const btnS = document.getElementById('toggle-sfx');
    btnM.textContent = musicOn ? 'ON' : 'OFF';
    btnM.className = 'toggle-btn' + (musicOn ? '' : ' off');
    btnS.textContent = sfxOn ? 'ON' : 'OFF';
    btnS.className = 'toggle-btn' + (sfxOn ? '' : ' off');

    document.getElementById('vol-music').value = volM;
    document.getElementById('vol-music-val').textContent = volM;
    document.getElementById('vol-sfx').value = volS;
    document.getElementById('vol-sfx-val').textContent = volS;
}

function toggleMusic() {
    const btn = document.getElementById('toggle-music');
    const isOn = btn.textContent === 'ON';
    btn.textContent = isOn ? 'OFF' : 'ON';
    btn.className = 'toggle-btn' + (isOn ? ' off' : '');
    localStorage.setItem('musicOn', String(!isOn));
}

function toggleSfx() {
    const btn = document.getElementById('toggle-sfx');
    const isOn = btn.textContent === 'ON';
    btn.textContent = isOn ? 'OFF' : 'ON';
    btn.className = 'toggle-btn' + (isOn ? ' off' : '');
    localStorage.setItem('sfxOn', String(!isOn));
}

function setMusicVolume(val) {
    document.getElementById('vol-music-val').textContent = val;
    localStorage.setItem('volMusic', val);
}

function setSfxVolume(val) {
    document.getElementById('vol-sfx-val').textContent = val;
    localStorage.setItem('volSfx', val);
}

// 11. Reset progress
function resetProgress() {
    document.getElementById('modal-settings').classList.add('hidden');
    document.getElementById('modal-reset').classList.remove('hidden');
}

function confirmReset() {
    localStorage.removeItem('completedRooms');
    localStorage.removeItem('playerName');
    localStorage.removeItem('playerAvatar');
    localStorage.removeItem('playerKeys');
    roomOrder.forEach(room => localStorage.removeItem('stars_' + room));

    document.getElementById('modal-overlay').classList.add('hidden');
    document.getElementById('modal-reset').classList.add('hidden');
    mainLobbyScreen.classList.add('hidden');
    setupModal.classList.remove('hidden');
}

function cancelReset() {
    document.getElementById('modal-reset').classList.add('hidden');
    document.getElementById('modal-settings').classList.remove('hidden');
}

// 12. Hitung dan tampilkan total bintang & kunci
function updateStatsDisplay() {
    let totalStars = 0;
    roomOrder.forEach(room => {
        const s = parseInt(localStorage.getItem('stars_' + room) || '0');
        totalStars += s;
    });
    const totalKeys = parseInt(localStorage.getItem('playerKeys') || '0');
    if (displayStars) displayStars.innerText = totalStars;
    if (displayKeys) displayKeys.innerText = totalKeys;
}
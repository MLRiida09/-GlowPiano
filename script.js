// Audio context for generating piano sounds
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Note frequencies (4th octave)
const noteFrequencies = {
    'C': 261.63,
    'Db': 277.18,
    'D': 293.66,
    'Eb': 311.13,
    'E': 329.63,
    'F': 349.23,
    'Gb': 369.99,
    'G': 392.00,
    'Ab': 415.30,
    'A': 440.00,
    'Bb': 466.16,
    'B': 493.88
};

// Generate particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Create audio tone
function createTone(frequency, duration = 0.5) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'triangle'; // Warmer sound than sine
    
    // ADSR envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Play key function
function playKey(key) {
    const note = key.dataset.note;
    const frequency = noteFrequencies[note];
    
    if (frequency) {
        // Resume audio context if suspended
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        createTone(frequency);
    }
    
    // Visual effects
    key.classList.add('active', 'ripple');
    const soundWave = key.querySelector('.sound-wave');
    if (soundWave) {
        soundWave.classList.add('active');
    }
    
    // Remove effects after animation
    setTimeout(() => {
        key.classList.remove('active', 'ripple');
        if (soundWave) {
            soundWave.classList.remove('active');
        }
    }, 300);
}

// Event listeners
const keys = document.querySelectorAll('.key');

// Mouse events
keys.forEach(key => {
    key.addEventListener('click', () => playKey(key));
});

// Keyboard events
document.addEventListener('keydown', (e) => {
    if (e.repeat) return; // Prevent key repeat
    
    const key = document.querySelector(`[data-key="${e.key.toLowerCase()}"]`);
    if (key) {
        playKey(key);
    }
});

// Initialize particles
createParticles();

// Add some interactive elements
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        if (index % 5 === 0) { // Only affect every 5th particle for performance
            const dx = (mouseX - 0.5) * 20;
            const dy = (mouseY - 0.5) * 20;
            particle.style.transform = `translate(${dx}px, ${dy}px)`;
        }
    });
});

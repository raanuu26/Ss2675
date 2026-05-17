// Slide Management
let currentSlide = 1;
const totalSlides = 12;
let cameraStream = null;

// Initialize Website
document.addEventListener('DOMContentLoaded', function () {
    createFloatingHearts();
    createDots();
    updateSlideCounter();
    startCountdown();
});

// Floating Hearts
function createFloatingHearts() {
    const container = document.querySelector('.hearts-container');

    if (!container) return;

    const hearts = ['❤️', '💕', '💖', '💗'];

    setInterval(() => {
        const heart = document.createElement('div');

        heart.className = 'heart-float';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);
}

// Navigation
function nextSlide() {
    const slides = document.querySelectorAll('.slide');

    slides[currentSlide - 1].classList.remove('active');

    currentSlide++;

    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    slides[currentSlide - 1].classList.add('active');

    updateSlideCounter();
    updateDots();
}

function previousSlide() {
    const slides = document.querySelectorAll('.slide');

    slides[currentSlide - 1].classList.remove('active');

    currentSlide--;

    if (currentSlide < 1) {
        currentSlide = totalSlides;
    }

    slides[currentSlide - 1].classList.add('active');

    updateSlideCounter();
    updateDots();
}

// Dots
function createDots() {
    const dotsContainer = document.getElementById('dotsContainer');

    if (!dotsContainer) return;

    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('span');

        dot.classList.add('dot');

        if (i === 1) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            goToSlide(i);
        });

        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');

    dots.forEach(dot => dot.classList.remove('active'));

    if (dots[currentSlide - 1]) {
        dots[currentSlide - 1].classList.add('active');
    }
}

// Go To Slide
function goToSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');

    slides[currentSlide - 1].classList.remove('active');

    currentSlide = slideNumber;

    slides[currentSlide - 1].classList.add('active');

    updateSlideCounter();
    updateDots();
}

// Slide Counter
function updateSlideCounter() {
    const current = document.getElementById('currentSlide');
    const total = document.getElementById('totalSlides');

    if (current) current.innerText = currentSlide;
    if (total) total.innerText = totalSlides;
}

// Countdown Timer
function startCountdown() {
    const targetDate = new Date('May 26, 2026 00:00:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();

        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        if (document.getElementById('days'))
            document.getElementById('days').innerText = days;

        if (document.getElementById('hours'))
            document.getElementById('hours').innerText = hours;

        if (document.getElementById('minutes'))
            document.getElementById('minutes').innerText = minutes;

        if (document.getElementById('seconds'))
            document.getElementById('seconds').innerText = seconds;

    }, 1000);
}

// Cake Interaction
const cake = document.getElementById('cake');

if (cake) {
    cake.addEventListener('click', () => {
        const flame = document.getElementById('flame');

        if (flame) {
            flame.style.opacity = '0';

            setTimeout(() => {
                flame.style.opacity = '1';
            }, 2000);
        }
    });
}

// Gift Box
const giftBox = document.getElementById('giftBox');

if (giftBox) {
    giftBox.addEventListener('click', () => {
        const giftMessage = document.getElementById('giftMessage');

        if (giftMessage.style.display === 'block') {
            giftMessage.style.display = 'none';
        } else {
            giftMessage.style.display = 'block';
        }
    });
}

// Camera
const startCameraBtn = document.getElementById('startCamera');

if (startCameraBtn) {
    startCameraBtn.addEventListener('click', async () => {

        try {
            const video = document.getElementById('cameraVideo');

            cameraStream = await navigator.mediaDevices.getUserMedia({
                video: true
            });

            video.srcObject = cameraStream;

        } catch (error) {
            alert('Camera access denied!');
        }

    });
}

// Capture Photo
const capturePhotoBtn = document.getElementById('capturePhoto');

if (capturePhotoBtn) {
    capturePhotoBtn.addEventListener('click', () => {

        const video = document.getElementById('cameraVideo');
        const canvas = document.createElement('canvas');

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext('2d');

        ctx.drawImage(video, 0, 0);

        const image = document.createElement('img');

        image.src = canvas.toDataURL('image/png');

        const preview = document.getElementById('photoPreview');

        preview.innerHTML = '';

        preview.appendChild(image);

    });
}

// Quiz
function selectQuizAnswer(answer) {
    const result = document.getElementById('quizResult');

    result.style.display = 'block';

    result.innerHTML =
        '🎉 Your birthday vibe is: <b>' + answer + '</b> 💖';
}

// Confetti
function triggerConfetti() {

    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement('div');

        confetti.className = 'confetti';

        confetti.style.left = Math.random() * 100 + 'vw';

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + 's';

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
// ===============================
// Birthday Website Script
// ===============================

let currentSlide = 1;
const totalSlides = 12;
let cameraStream = null;

// ===============================
// Website Start
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    createDots();
    updateSlide();
    startCountdown();
    createFloatingHearts();
    setupCake();
    setupGift();
    setupCamera();
});

// ===============================
// Slide Navigation
// ===============================

function nextSlide() {
    currentSlide++;

    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }

    updateSlide();
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 1) {
        currentSlide = totalSlides;
    }

    updateSlide();
}

function goToSlide(number) {
    currentSlide = number;
    updateSlide();
}

function updateSlide() {

    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    const activeSlide = document.querySelector(".slide-" + currentSlide);

    if (activeSlide) {
        activeSlide.classList.add("active");
    }

    updateCounter();
    updateDots();
}

// ===============================
// Slide Counter
// ===============================

function updateCounter() {

    const current = document.getElementById("currentSlide");
    const total = document.getElementById("totalSlides");

    if (current) {
        current.innerText = currentSlide;
    }

    if (total) {
        total.innerText = totalSlides;
    }
}

// ===============================
// Navigation Dots
// ===============================

function createDots() {

    const container = document.getElementById("dotsContainer");

    if (!container) return;

    for (let i = 1; i <= totalSlides; i++) {

        const dot = document.createElement("span");

        dot.classList.add("dot");

        if (i === 1) {
            dot.classList.add("active");
        }

        dot.onclick = () => goToSlide(i);

        container.appendChild(dot);
    }
}

function updateDots() {

    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    if (dots[currentSlide - 1]) {
        dots[currentSlide - 1].classList.add("active");
    }
}

// ===============================
// Keyboard Navigation
// ===============================

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
        nextSlide();
    }

    if (e.key === "ArrowLeft") {
        previousSlide();
    }
});

// ===============================
// Countdown Timer
// ===============================

function startCountdown() {

    const targetDate = new Date("May 26, 2026 00:00:00").getTime();

    setInterval(() => {

        const now = new Date().getTime();

        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = days;
        if (hoursEl) hoursEl.innerText = hours;
        if (minutesEl) minutesEl.innerText = minutes;
        if (secondsEl) secondsEl.innerText = seconds;

    }, 1000);
}

// ===============================
// Floating Hearts
// ===============================

function createFloatingHearts() {

    const container = document.querySelector(".hearts-container");

    if (!container) return;

    const hearts = ["❤️", "💕", "💖", "💗"];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart-float";

        heart.innerText =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 20 + 20) + "px";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 400);
}

// ===============================
// Cake Interaction
// ===============================

function setupCake() {

    const cake = document.getElementById("cake");

    if (!cake) return;

    cake.addEventListener("click", () => {

        const flame = document.getElementById("flame");

        if (flame) {

            flame.style.opacity = "0";

            triggerConfetti();

            setTimeout(() => {
                flame.style.opacity = "1";
            }, 2000);
        }
    });
}

// ===============================
// Gift Interaction
// ===============================

function setupGift() {

    const giftBox = document.getElementById("giftBox");

    if (!giftBox) return;

    giftBox.addEventListener("click", () => {

        const message =
            document.getElementById("giftMessage");

        if (!message) return;

        if (message.style.display === "block") {

            message.style.display = "none";

        } else {

            message.style.display = "block";

            triggerConfetti();
        }
    });
}

// ===============================
// Camera Setup
// ===============================

function setupCamera() {

    const startBtn =
        document.getElementById("startCamera");

    const captureBtn =
        document.getElementById("capturePhoto");

    if (startBtn) {

        startBtn.addEventListener("click", async () => {

            try {

                const video =
                    document.getElementById("cameraVideo");

                cameraStream =
                    await navigator.mediaDevices.getUserMedia({
                        video: true
                    });

                video.srcObject = cameraStream;

            } catch (err) {

                alert("Please allow camera access!");

            }
        });
    }

    if (captureBtn) {

        captureBtn.addEventListener("click", () => {

            const video =
                document.getElementById("cameraVideo");

            if (!video) return;

            const canvas =
                document.createElement("canvas");

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(video, 0, 0);

            const image =
                document.createElement("img");

            image.src = canvas.toDataURL("image/png");

            const preview =
                document.getElementById("photoPreview");

            preview.innerHTML = "";

            preview.appendChild(image);

            triggerConfetti();
        });
    }
}

// ===============================
// Quiz
// ===============================

function selectQuizAnswer(answer) {

    const result =
        document.getElementById("quizResult");

    if (!result) return;

    result.style.display = "block";

    result.innerHTML =
        "🎉 Your birthday vibe is <b>" +
        answer +
        "</b> 💖";
}

// ===============================
// Confetti Animation
// ===============================

function triggerConfetti() {

    for (let i = 0; i < 40; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
// ===============================
// Birthday Website Script
// ===============================

let currentSlide = 1;
const totalSlides = 12;
let cameraStream = null;

// ===============================
// Website Start (Initialization)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    createDots();
    updateCounter(); // Initialize counters cleanly on load
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
        currentSlide = 1; // Loops back to the first slide
    }
    updateSlide();
}

function previousSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = totalSlides; // Loops to the last slide
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

    if (current) current.innerText = currentSlide;
    if (total) total.innerText = totalSlides;
}

// ===============================
// Navigation Dots
// ===============================

function createDots() {
    const container = document.getElementById("dotsContainer");
    if (!container) return;
    container.innerHTML = ""; 

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
    // Sets the target date to May 26
    const targetDate = new Date("May 26, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(interval);
            const timerContainer = document.getElementById("timer-container"); 
            if (timerContainer) {
                timerContainer.innerHTML = "🎉 Happy Birthday! 🎂";
            }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
        if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
        if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
        if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;

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
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        
        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (Math.random() * 20 + 20) + "px";
        heart.style.position = "absolute";

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
    const cake = document.

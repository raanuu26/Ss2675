* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #000000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    overflow: hidden;
    height: 100vh;
}

/* Floating Hearts */
.hearts-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    pointer-events: none;
}

.heart-float {
    position: absolute;
    font-size: 2rem;
    color: #ff69b4;
    opacity: 0.7;
    animation: float 6s infinite ease-in;
    z-index: 1;
}

@keyframes float {
    0% {
        bottom: -50px;
        opacity: 0.8;
        transform: translateX(0) rotate(0deg);
    }
    50% {
        opacity: 0.7;
    }
    100% {
        bottom: 100vh;
        opacity: 0;
        transform: translateX(100px) rotate(360deg);
    }
}

/* Container & Slides */
.container {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 2;
}

.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 0, 40, 0.95) 100%);
}

.slide.active {
    opacity: 1;
}

/* Slide 1: Birthday Title */
.slide-1 {
    flex-direction: column;
}

.birthday-title {
    text-align: center;
}

.main-title {
    font-size: 5rem;
    font-weight: 900;
    background: linear-gradient(45deg, #ff69b4, #ff1493, #ffd700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: pulse 2s ease-in-out infinite;
    margin-bottom: 1rem;
}

.name-title {
    font-size: 3rem;
    color: #ff69b4;
    margin-bottom: 2rem;
    animation: bounce 1s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Balloons */
.balloons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.balloon {
    width: 40px;
    height: 50px;
    border-radius: 50% 50% 50% 0;
    position: relative;
    animation: balloon 3s ease-in-out infinite;
}

.b1 { background: #ff69b4; animation-delay: 0s; }
.b2 { background: #ff1493; animation-delay: 0.2s; }
.b3 { background: #ffd700; animation-delay: 0.4s; }
.b4 { background: #ff69b4; animation-delay: 0.6s; }
.b5 { background: #ff1493; animation-delay: 0.8s; }

@keyframes balloon {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

/* Slide 2: Countdown */
.countdown-container {
    text-align: center;
}

.countdown-container h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #ff69b4;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 105, 180, 0.1);
    padding: 1.5rem 2rem;
    border-radius: 10px;
    border: 2px solid #ff69b4;
    min-width: 100px;
}

.countdown-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffd700;
}

.countdown-label {
    font-size: 0.9rem;
    color: #ff69b4;
    margin-top: 0.5rem;
}

.countdown-text {
    font-size: 1.5rem;
    color: #ff1493;
}

/* Slide 3 & 7: Expressive Message */
.expressive-box {
    background: rgba(255, 105, 180, 0.1);
    border: 3px solid #ff69b4;
    border-radius: 20px;
    padding: 3rem;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 0 40px rgba(255, 105, 180, 0.3);
}

.expressive-text {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 1rem;
    font-weight: bold;
}

.sub-text {
    font-size: 1.2rem;
    color: #ffd700;
}

/* Slide 4: Cake */
.cake-container {
    text-align: center;
}

.cake-container h2 {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 2rem;
}

.cake {
    position: relative;
    width: 250px;
    height: 200px;
    margin: 0 auto 2rem;
}

.cake-layer {
    position: absolute;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #ff1493;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;
}

.cake-layer:hover {
    transform: scale(1.05);
}

.layer-1 {
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    top: 150px;
}

.layer-2 {
    background: linear-gradient(135deg, #ff1493, #ff69b4);
    top: 90px;
}

.layer-3 {
    background: linear-gradient(135deg, #ffd700, #ff69b4);
    top: 30px;
}

.cake-text {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
}

.candle {
    position: absolute;
    width: 8px;
    height: 40px;
    background: #ffd700;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
    border-radius: 4px;
}

.flame {
    position: absolute;
    width: 12px;
    height: 20px;
    background: linear-gradient(to top, #ff69b4, #ffd700, #ff1493);
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    animation: flicker 0.3s infinite;
}

@keyframes flicker {
    0%, 100% { opacity: 1; transform: translateX(-50%) scaleY(1); }
    50% { opacity: 0.8; transform: translateX(-50%) scaleY(0.95); }
}

.flame.blown {
    animation: none;
    opacity: 0;
}

.instruction-text {
    font-size: 1.1rem;
    color: #ff69b4;
}

/* Slide 5: Flowers */
.flowers-container {
    text-align: center;
}

.flowers-container h2 {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 3rem;
}

.flowers {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 2rem;
    align-items: flex-end;
}

.flower {
    position: relative;
    width: 60px;
    height: 60px;
}

.petal {
    position: absolute;
    width: 20px;
    height: 40px;
    background: #ff69b4;
    border-radius: 50%;
    top: 10px;
    left: 20px;
    transform-origin: bottom center;
}

.petal:nth-child(1) { transform: rotate(0deg); }
.petal:nth-child(2) { transform: rotate(72deg); }
.petal:nth-child(3) { transform: rotate(144deg); }
.petal:nth-child(4) { transform: rotate(216deg); }
.petal:nth-child(5) { transform: rotate(288deg); }

.flower {
    animation: sway 3s ease-in-out infinite;
}

.f2 { animation-delay: 0.2s; }
.f3 { animation-delay: 0.4s; }

@keyframes sway {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(5deg); }
}

.center {
    position: absolute;
    width: 15px;
    height: 15px;
    background: #ffd700;
    border-radius: 50%;
    top: 22.5px;
    left: 22.5px;
}

.leaf {
    position: absolute;
    width: 30px;
    height: 15px;
    background: #90EE90;
    border-radius: 50%;
    bottom: 0;
}

.l1 { left: 40px; }
.l2 { right: 40px; }

.flower-message {
    font-size: 1.3rem;
    color: #ff69b4;
}

/* Slide 6: Flirty */
.flirty-container {
    text-align: center;
}

.blushing-emoji {
    font-size: 6rem;
    animation: bounce 1s ease-in-out infinite;
    margin-bottom: 2rem;
}

.flirty-text {
    font-size: 2.5rem;
    color: #ff69b4;
    margin-bottom: 2rem;
}

.hearts-animation {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.heart {
    font-size: 3rem;
    animation: heartbeat 1s ease-in-out infinite;
}

.heart:nth-child(1) { animation-delay: 0s; }
.heart:nth-child(2) { animation-delay: 0.2s; }
.heart:nth-child(3) { animation-delay: 0.4s; }
.heart:nth-child(4) { animation-delay: 0.6s; }

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
}

/* Slide 8: Gift */
.gift-container {
    text-align: center;
}

.gift-container h2 {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 2rem;
}

.gift-box {
    width: 150px;
    height: 150px;
    background: #ff1493;
    margin: 0 auto 2rem;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 30px rgba(255, 105, 180, 0.5);
}

.gift-box:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px rgba(255, 105, 180, 0.8);
}

.gift-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}

.gift-ribbon-h {
    position: absolute;
    width: 100%;
    height: 20px;
    background: #ffd700;
    top: 50%;
    transform: translateY(-50%);
}

.gift-ribbon-v {
    position: absolute;
    width: 20px;
    height: 100%;
    background: #ffd700;
    left: 50%;
    transform: translateX(-50%);
}

.gift-bow {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #ff69b4;
    border-radius: 50%;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 
        -30px 10px 0 -10px #ff69b4,
        30px 10px 0 -10px #ff69b4;
}

.gift-instruction {
    font-size: 1.2rem;
    color: #ff69b4;
    margin-bottom: 1rem;
}

.gift-message {
    background: rgba(255, 105, 180, 0.1);
    border: 2px solid #ff69b4;
    border-radius: 15px;
    padding: 2rem;
    max-width: 500px;
    margin: 0 auto;
    animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.gift-message p {
    font-size: 1.2rem;
    color: #ffd700;
    margin: 0.5rem 0;
}

/* Slide 9: Camera */
.camera-container {
    text-align: center;
}

.camera-container h2 {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 1.5rem;
}

.camera-frame {
    width: 300px;
    height: 300px;
    border: 4px solid #ff69b4;
    border-radius: 15px;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    background: #000;
}

#cameraVideo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.camera-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.photo-preview {
    margin-top: 1rem;
}

.photo-preview img {
    max-width: 300px;
    border-radius: 10px;
    border: 2px solid #ff69b4;
}

/* Slide 10: Memory Lane */
.memory-container {
    text-align: center;
}

.memory-container h2 {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 2rem;
}

.memory-cards {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.memory-card {
    background: rgba(255, 105, 180, 0.1);
    border: 2px solid #ff69b4;
    border-radius: 15px;
    padding: 2rem;
    width: 200px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.memory-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.4);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.memory-card p {
    font-size: 1.1rem;
    color: #ff69b4;
}

/* Slide 11: Quiz */
.quiz-container {
    text-align: center;
}

.quiz-container h2 {
    font-size: 2rem;
    color: #ff69b4;
    margin-bottom: 2rem;
}

#quizQuestion {
    font-size: 1.5rem;
    color: #ffd700;
    margin-bottom: 1.5rem;
}

.quiz-options {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.quiz-btn {
    padding: 1rem 1.5rem;
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    font-weight: bold;
}

.quiz-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 105, 180, 0.5);
}

.quiz-result {
    background: rgba(255, 105, 180, 0.1);
    border: 2px solid #ff69b4;
    border-radius: 15px;
    padding: 2rem;
    font-size: 1.3rem;
    color: #ffd700;
    animation: slideIn 0.5s ease-out;
}

/* Slide 12: Celebration */
.celebration-container {
    text-align: center;
}

.celebration-text {
    font-size: 3rem;
    background: linear-gradient(45deg, #ff69b4, #ff1493, #ffd700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    animation: pulse 2s ease-in-out infinite;
}

.celebration-message {
    font-size: 1.5rem;
    color: #ff69b4;
    margin-bottom: 2rem;
}

.confetti-animation {
    position: relative;
    height: 200px;
    margin-bottom: 2rem;
}

/* Buttons */
.btn {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    font-weight: bold;
}

.btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 105, 180, 0.5);
}

.btn-primary {
    background: linear-gradient(135deg, #ff69b4, #ff1493);
}

.btn-secondary {
    background: linear-gradient(135deg, #ffd700, #ff69b4);
}

.btn-celebration {
    font-size: 1.3rem;
    padding: 1.2rem 2.5rem;
    background: linear-gradient(135deg, #ff69b4, #ff1493, #ffd700);
}

/* Navigation */
.navigation {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 100;
}

.nav-btn {
    background: linear-gradient(135deg, #ff69b4, #ff1493);
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s, box-shadow 0.2s;
    font-weight: bold;
}

.nav-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(255, 105, 180, 0.5);
}

.dots-container {
    display: flex;
    gap: 0.5rem;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 105, 180, 0.5);
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
    border: 2px solid transparent;
}

.dot:hover {
    background: #ff69b4;
    transform: scale(1.2);
}

.dot.active {
    background: #ff1493;
    border-color: #ffd700;
    transform: scale(1.3);
}

/* Slide Counter */
.slide-counter {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 105, 180, 0.2);
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    border: 2px solid #ff69b4;
    color: #ffd700;
    font-weight: bold;
    font-size: 1.1rem;
    z-index: 100;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-title {
        font-size: 3rem;
    }

    .name-title {
        font-size: 2rem;
    }

    .countdown {
        gap: 1rem;
    }

    .countdown-item {
        min-width: 70px;
        padding: 1rem;
    }

    .countdown-value {
        font-size: 1.5rem;
    }

    .flowers {
        gap: 1rem;
    }

    .memory-cards {
        gap: 1rem;
        flex-direction: column;
        align-items: center;
    }

    .quiz-options {
        flex-direction: column;
    }

    .quiz-btn {
        width: 100%;
    }

    .navigation {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-btn {
        width: 120px;
    }
}

@media (max-width: 480px) {
    .main-title {
        font-size: 2rem;
    }

    .name-title {
        font-size: 1.5rem;
    }

    .expressive-box {
        padding: 1.5rem;
    }

    .expressive-text {
        font-size: 1.3rem;
    }

    .cake {
        width: 150px;
        height: 120px;
    }

    .camera-frame {
        width: 200px;
        height: 200px;
    }
}
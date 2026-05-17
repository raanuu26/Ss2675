<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🎉 Happy Birthday CUTU 🎉</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="hearts-container"></div>

    <div class="container">
        <!-- Slide 1: Happy Birthday Title -->
        <div class="slide slide-1 active">
            <div class="birthday-title">
                <h1 class="main-title">HAPPY BIRTHDAY</h1>
                <h2 class="name-title">CUTU 🎂✨</h2>
                <div class="balloons">
                    <div class="balloon b1"></div>
                    <div class="balloon b2"></div>
                    <div class="balloon b3"></div>
                    <div class="balloon b4"></div>
                    <div class="balloon b5"></div>
                </div>
            </div>
        </div>

        <!-- Slide 2: Countdown Timer -->
        <div class="slide slide-2">
            <div class="countdown-container">
                <h2>Countdown to Your Special Day</h2>
                <div class="countdown">
                    <div class="countdown-item">
                        <span class="countdown-value" id="days">0</span>
                        <span class="countdown-label">Days</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value" id="hours">0</span>
                        <span class="countdown-label">Hours</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value" id="minutes">0</span>
                        <span class="countdown-label">Minutes</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value" id="seconds">0</span>
                        <span class="countdown-label">Seconds</span>
                    </div>
                </div>
                <p class="countdown-text">May 26, 2026</p>
            </div>
        </div>

        <!-- Slide 3: Expressive Message -->
        <div class="slide slide-3">
            <div class="expressive-box">
                <p class="expressive-text">✨ Placeholder for Slide 3 - Expressive Message ✨</p>
                <p class="sub-text">Tell me what special message you'd like here!</p>
            </div>
        </div>

        <!-- Slide 4: Interactive Cake & Candle -->
        <div class="slide slide-4">
            <div class="cake-container">
                <h2>Make a Wish & Blow the Candle! 🎂</h2>
                <div class="cake" id="cake">
                    <div class="cake-layer layer-1">
                        <span class="cake-text">G</span>
                    </div>
                    <div class="cake-layer layer-2">
                        <span class="cake-text">U</span>
                    </div>
                    <div class="cake-layer layer-3">
                        <span class="cake-text">N</span>
                    </div>
                    <div class="candle">
                        <div class="flame" id="flame"></div>
                    </div>
                </div>
                <p class="instruction-text">Click or tap the candle to blow it out! 💨</p>
            </div>
        </div>

        <!-- Slide 5: Flowers Gift -->
        <div class="slide slide-5">
            <div class="flowers-container">
                <h2>Beautiful Flowers for You! 🌹</h2>
                <div class="flowers">
                    <div class="flower f1">
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="center"></div>
                    </div>
                    <div class="flower f2">
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="center"></div>
                    </div>
                    <div class="flower f3">
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="petal"></div>
                        <div class="center"></div>
                    </div>
                    <div class="leaf l1"></div>
                    <div class="leaf l2"></div>
                </div>
                <p class="flower-message">Because you deserve to feel as beautiful as these flowers! 💕</p>
            </div>
        </div>

        <!-- Slide 6: Flirty Blushing Message -->
        <div class="slide slide-6">
            <div class="flirty-container">
                <div class="blushing-emoji">😊</div>
                <h2 class="flirty-text">I know you are blushing right now... 😉</h2>
                <div class="hearts-animation">
                    <span class="heart">❤️</span>
                    <span class="heart">💕</span>
                    <span class="heart">💖</span>
                    <span class="heart">💗</span>
                </div>
            </div>
        </div>

        <!-- Slide 7: Expressive Message 2 -->
        <div class="slide slide-7">
            <div class="expressive-box">
                <p class="expressive-text">✨ Placeholder for Slide 7 - Expressive Message ✨</p>
                <p class="sub-text">Tell me what special message you'd like here!</p>
            </div>
        </div>

        <!-- Slide 8: Virtual Gift -->
        <div class="slide slide-8">
            <div class="gift-container">
                <h2>A Special Gift For You! 🎁</h2>
                <div class="gift-box" id="giftBox">
                    <div class="gift-wrapper">
                        <div class="gift-ribbon-h"></div>
                        <div class="gift-ribbon-v"></div>
                        <div class="gift-bow"></div>
                    </div>
                </div>
                <p class="gift-instruction">Click the gift to open it! 🎉</p>
                <div class="gift-message" id="giftMessage" style="display: none;">
                    <p>🎉 Placeholder for Virtual Gift 🎉</p>
                    <p>Tell me what special gift you'd like to give her!</p>
                </div>
            </div>
        </div>

        <!-- Slide 9: Selfie Camera -->
        <div class="slide slide-9">
            <div class="camera-container">
                <h2>Capture Your Beautiful Smile! 📸</h2>
                <div class="camera-frame">
                    <video id="cameraVideo" autoplay playsinline></video>
                    <canvas id="cameraCanvas" style="display: none;"></canvas>
                </div>
                <div class="camera-buttons">
                    <button class="btn btn-primary" id="startCamera">Start Camera</button>
                    <button class="btn btn-secondary" id="capturePhoto">Capture Selfie</button>
                </div>
                <div class="photo-preview" id="photoPreview"></div>
            </div>
        </div>

        <!-- Slide 10: Memory Lane -->
        <div class="slide slide-10">
            <div class="memory-container">
                <h2>Your Special Moments ✨</h2>
                <div class="memory-cards">
                    <div class="memory-card card-1">
                        <div class="card-icon">💫</div>
                        <p>Every moment with you is special</p>
                    </div>
                    <div class="memory-card card-2">
                        <div class="card-icon">🌟</div>
                        <p>You make life more beautiful</p>
                    </div>
                    <div class="memory-card card-3">
                        <div class="card-icon">✨</div>
                        <p>Here's to more amazing memories!</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 11: Interactive Personality Quiz -->
        <div class="slide slide-11">
            <div class="quiz-container">
                <h2>What's Your Birthday Personality? 🎭</h2>
                <div class="quiz-question">
                    <p id="quizQuestion">What's your vibe today?</p>
                    <div class="quiz-options">
                        <button class="quiz-btn" onclick="selectQuizAnswer('Cheerful')">😄 Cheerful</button>
                        <button class="quiz-btn" onclick="selectQuizAnswer('Confident')">💪 Confident</button>
                        <button class="quiz-btn" onclick="selectQuizAnswer('Mysterious')">🌙 Mysterious</button>
                        <button class="quiz-btn" onclick="selectQuizAnswer('Fun')">🎉 Fun</button>
                    </div>
                </div>
                <div class="quiz-result" id="quizResult"></div>
            </div>
        </div>

        <!-- Slide 12: Celebration & Confetti -->
        <div class="slide slide-12">
            <div class="celebration-container">
                <h2 class="celebration-text">🎊 HAPPY BIRTHDAY CUTU! 🎊</h2>
                <p class="celebration-message">Make a wish and celebrate this special day!</p>
                <div class="confetti-animation" id="confetti"></div>
                <button class="btn btn-celebration" onclick="triggerConfetti()">Celebrate! 🎉</button>
            </div>
        </div>

        <!-- Navigation -->
        <div class="navigation">
            <button class="nav-btn nav-prev" onclick="previousSlide()">❮ Previous</button>
            <div class="dots-container" id="dotsContainer"></div>
            <button class="nav-btn nav-next" onclick="nextSlide()">Next ❯</button>
        </div>

        <!-- Slide Counter -->
        <div class="slide-counter">
            <span id="currentSlide">1</span> / <span id="totalSlides">12</span>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
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
// Slide Management
let currentSlide = 1;
const totalSlides = 12;
let cameraStream = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    createDots();
    updateSlideCounter();
    startCountdown();
    setupEventListeners();
});

// Create Floating Hearts
function createFloatingHearts() {
    const container = document.querySelector('.hearts-container');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-float';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}

// Navigation Functions
function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
    } else {
        currentSlide = 1;
    }
    updateSlide();
}

function previousSlide() {
    if (currentSlide > 1) {
        currentSlide--;
    } else {
        currentSlide = totalSlides;
    }
    updateSlide();
}

function goToSlide(slideNumber) {
    currentSlide = slideNumber;
    updateSlide();
}

function updateSlide() {
    // Hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show current slide
    const activeSlide = document.querySelector(`.slide-${currentSlide}`);
    if (activeSlide) {
        activeSlide.classList.add('active');
    }
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index + 1 === currentSlide) {
            dot.classList.add('active');
        }
    });
    
    updateSlideCounter();
}

function updateSlideCounter() {
    document.getElementById('currentSlide').textContent = currentSlide;
    document.getElementById('totalSlides').textContent = totalSlides;
}

// Create Navigation Dots
function createDots() {
    const dotsContainer = document.getElementById('dotsContainer');
    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === currentSlide) dot.classList.add('active');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') nextSlide();
    if (event.key === 'ArrowLeft') previousSlide();
});

// Countdown Timer
function startCountdown() {
    function updateCountdown() {
        const targetDate = new Date('2026-05-26').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');
            
            if (daysEl) daysEl.textContent = days;
            if (hoursEl) hoursEl.textContent = hours;
            if (minutesEl) minutesEl.textContent = minutes;
            if (secondsEl) secondsEl.textContent = seconds;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Cake Blowing Interaction
let cakeBlow = false;
document.addEventListener('DOMContentLoaded', function() {
    const cake = document.getElementById('cake');
    const flame = document.getElementById('flame');
    
    if (cake && flame) {
        cake.addEventListener('click', function() {
            if (!cakeBlow) {
                cakeBlow = true;
                flame.classList.add('blown');
                
                // Confetti effect
                createConfetti();
                
                setTimeout(() => {
                    flame.classList.remove('blown');
                    cakeBlow = false;
                }, 2000);
            }
        });
    }
});

// Gift Box Opening
document.addEventListener('DOMContentLoaded', function() {
    const giftBox = document.getElementById('giftBox');
    const giftMessage = document.getElementById('giftMessage');
    
    if (giftBox && giftMessage) {
        giftBox.addEventListener('click', function() {
            if (giftMessage.style.display === 'none') {
                giftMessage.style.display = 'block';
                createConfetti();
            } else {
                giftMessage.style.display = 'none';
            }
        });
    }
});

// Camera Setup
document.addEventListener('DOMContentLoaded', function() {
    const startCameraBtn = document.getElementById('startCamera');
    const capturePhotoBtn = document.getElementById('capturePhoto');
    
    if (startCameraBtn) {
        startCameraBtn.addEventListener('click', startCamera);
    }
    
    if (capturePhotoBtn) {
        capturePhotoBtn.addEventListener('click', capturePhoto);
    }
});

function startCamera() {
    const video = document.getElementById('cameraVideo');
    
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            cameraStream = stream;
            video.srcObject = stream;
        })
        .catch(err => {
            alert('Please allow camera access to take a selfie!');
            console.error('Camera error:', err);
        });
}

function capturePhoto() {
    if (!cameraStream) {
        alert('Please start the camera first!');
        return;
    }
    
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('cameraCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    ctx.drawImage(video, 0, 0);
    
    const imageData = canvas.toDataURL('image/png');
    
    const preview = document.getElementById('photoPreview');
    preview.innerHTML = `<img src="${imageData}" alt="Selfie"><p>📸 Smile captured! 😊</p>`;
    
    createConfetti();
}

// Quiz Functionality
function selectQuizAnswer(answer) {
    const quizResult = document.getElementById('quizResult');
    const responses = {
        'Cheerful': '🎉 You're the life of the party! Keep spreading joy and happiness everywhere you go!',
        'Confident': '💪 You're amazing! Your confidence is inspiring and contagious!',
        'Mysterious': '🌙 You have a unique charm that draws people in. Keep being yourself!',
        'Fun': '🎊 You bring fun and laughter to everyone around you. Never stop smiling!'
    };
    
    quizResult.textContent = responses[answer];
    quizResult.style.display = 'block';
    createConfetti();
}

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    if (!confettiContainer) return;
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = Math.random() > 0.5 ? '#ff69b4' : '#ffd700';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '50';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2 + 2;
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], duration * 1000);
        
        animation.onfinish = () => confetti.remove();
    }
}

function triggerConfetti() {
    for (let i = 0; i < 3; i++) {
        setTimeout(createConfetti, i * 300);
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // All event listeners are set up in individual functions above
}
# 🎉 Happy Birthday CUTU Website 🎉

A stunning, professional, and interactive birthday celebration website with 12 beautiful slides, floating hearts, and engaging animations!

## ✨ Features

### **12 Interactive Slides:**
1. ✨ **Slide 1**: Happy Birthday Title with animated balloons
2. ⏰ **Slide 2**: Live countdown timer to May 26, 2026
3. 💝 **Slide 3**: Expressive message (customizable)
4. 🎂 **Slide 4**: Interactive 3-layer princess cake with "GUNNU" written + candle blowing interaction
5. 🌹 **Slide 5**: Beautiful animated flowers
6. 😊 **Slide 6**: Flirty "I know you are blushing right now" message
7. 💫 **Slide 7**: Expressive message (customizable)
8. 🎁 **Slide 8**: Interactive gift box (customizable gift)
9. 📸 **Slide 9**: Camera interface to capture selfies
10. ✨ **Slide 10**: Memory Lane with inspiring messages
11. 🎯 **Slide 11**: Interactive personality quiz
12. 🎊 **Slide 12**: Celebration with confetti animation

### **Design Elements:**
- ✅ Black background for elegant contrast
- ✅ **Floating pink shredded hearts** continuously animating throughout
- ✅ Vibrant pink (#ff69b4) and hot pink (#ff1493) color scheme
- ✅ Smooth slide transitions with fade effects
- ✅ Professional typography and spacing
- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Interactive buttons with hover effects
- ✅ Beautiful gradient text effects

## 🎮 Navigation

- **Previous/Next Buttons**: Navigate through slides sequentially
- **Indicator Dots**: Click any dot to jump directly to a slide
- **Keyboard Navigation**: Use arrow keys (← →) to move between slides
- **Slide Counter**: Shows current slide number (e.g., "1 / 12")

## 🚀 Live Website

**Access it at:** `https://raanuu26.github.io/raanuu26/`

## 📝 Customization

### **Edit Slides 3, 7, and 8:**
1. Open `index.html` in your code editor or GitHub interface
2. Find the slide you want to edit (search for `slide-3`, `slide-7`, or `slide-8`)
3. Update the placeholder text
4. Save and commit changes
5. Changes appear on your live website within seconds!

### **Change Text on GitHub:**
1. Go to https://github.com/raanuu26/raanuu26
2. Click on `index.html`
3. Click the ✏️ **Edit** button
4. Make your changes
5. Click **Commit changes**

## 📁 File Structure

## 💻 Browser Compatibility

Works perfectly on:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Scheme

- **Primary Pink**: #ff69b4
- **Hot Pink**: #ff1493
- **Gold Accent**: #ffd700
- **Background**: #000000
- **Text**: #ffffff

## 🎯 Interactive Elements

### **Slide 4 - Cake Blowing**
- Click or tap the cake to blow out the candle
- Flame animates and disappears
- Automatic reset after 2 seconds

### **Slide 8 - Gift Opening**
- Click the gift box to open it
- Message appears with custom content
- Visual feedback with opacity change

### **Slide 9 - Selfie Camera**
- Click "Start Camera" to begin
- Allow camera permissions
- Click "Capture Selfie" to take a photo
- Photo preview displays below

### **Slide 11 - Personality Quiz**
- Select one of four personality types
- Get personalized result messages
- Results display with animation

### **Slide 12 - Confetti Celebration**
- Click "Celebrate!" button
- Confetti falls in pink and gold colors
- Multiple animations for maximum impact

## ✨ Animations Included

- 🎈 Floating hearts (continuous background)
- 🎈 Balloon floating effects
- 💓 Heart beat animations
- 📈 Pulse animations on titles
- 🔥 Candle flame flicker
- 🌸 Flower rotations
- ✨ Slide fade transitions
- 🎊 Confetti falling

## 📱 Responsive Design

Website adapts perfectly to:
- 📺 Desktop (1920px+)
- 💻 Laptop (1024px - 1920px)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (320px - 768px)

## 🎉 Ready to Share!

Your birthday website is now live and ready to spread joy and celebrate! Share the live URL with the birthday person and watch their smile! 💕

**Share this link:** https://raanuu26.github.io/raanuu26/

---

**Created with ❤️ using HTML, CSS, and JavaScript**

*Last Updated: May 17, 2026*

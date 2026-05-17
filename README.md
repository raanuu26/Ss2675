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
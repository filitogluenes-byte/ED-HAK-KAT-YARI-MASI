* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: #0a0a0a;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

.app-wrapper {
    width: 100%;
    max-width: 500px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.glow-text {
    font-size: 2rem;
    color: #ffd700;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    letter-spacing: 4px;
}

.aura-line {
    width: 60px;
    height: 3px;
    background: #ffd700;
    margin: 10px auto;
    box-shadow: 0 0 10px #ffd700;
}

.input-card {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 215, 0, 0.1);
    backdrop-filter: blur(10px);
}

input {
    width: 100%;
    padding: 18px;
    background: #151515;
    border: 1px solid #333;
    border-radius: 12px;
    color: #ffd700;
    font-size: 1.1rem;
    text-align: center;
    font-family: 'Orbitron';
}

.vs-circle {
    width: 50px;
    height: 50px;
    background: #ff3e3e;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(255, 62, 62, 0.4);
}

#analyze-btn {
    width: 100%;
    padding: 20px;
    background: linear-gradient(45deg, #ffd700, #ff8c00);
    border: none;
    border-radius: 15px;
    color: #000;
    font-weight: 900;
    font-size: 1.2rem;
    margin-top: 30px;
    box-shadow: 0 10px 30px rgba(255, 215, 0, 0.2);
}

/* Radar Efekti */
.radar {
    width: 150px;
    height: 150px;
    border: 2px solid #ffd700;
    border-radius: 50%;
    position: relative;
    margin: 50px auto;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(1.2); opacity: 0; }
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin: 20px 0;
}

.stat-item {
    background: #1a1a1a;
    padding: 15px;
    border-radius: 10px;
    border-bottom: 2px solid #ffd700;
}

.hidden { display: none !important; }

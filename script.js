const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$@#%";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px arial";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

document.getElementById('initiate-btn').addEventListener('click', function() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('hack-screen').classList.remove('hidden');
    
    setInterval(drawMatrix, 33);
    runScaryText();
});

function runScaryText() {
    const lines = [
        { id: 'line1', text: "> Yerel ağa sızılıyor...", delay: 500 },
        { id: 'line2', text: "> IP adresi tespit edildi: 192.168.1.1", delay: 1500 },
        { id: 'line3', text: "> Fotoğraf galerisine erişim sağlandı...", delay: 3000 },
        { id: 'line4', text: "> TÜM VERİLER DIŞARI AKTARILIYOR!", delay: 5000 }
    ];

    lines.forEach(line => {
        setTimeout(() => {
            document.getElementById(line.id).innerText = line.text;
        }, line.delay);
    });

    setTimeout(() => {
        document.getElementById('final-alert').classList.remove('hidden');
    }, 7000);
}

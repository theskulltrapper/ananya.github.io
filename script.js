const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("birthday-message");
const fireworksCanvas = document.getElementById("fireworks");
const ctx = fireworksCanvas.getContext("2d");

fireworksCanvas.width = window.innerWidth;
fireworksCanvas.height = window.innerHeight;

const birthdayDate = new Date("June 6, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthdayDate - now;

    if (timeLeft <= 0) {
        countdownElement.style.display = "none";
        messageElement.classList.remove("hidden");
        startFireworks();
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Fireworks effect when countdown reaches 0
let fireworks = [];

function startFireworks() {
    setInterval(() => {
        let firework = {
            x: Math.random() * fireworksCanvas.width,
            y: fireworksCanvas.height,
            radius: Math.random() * 4 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speedY: Math.random() * -10 - 5
        };
        fireworks.push(firework);
    }, 300);
    
    animateFireworks();
}

function animateFireworks() {
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    fireworks.forEach((firework, index) => {
        ctx.beginPath();
        ctx.arc(firework.x, firework.y, firework.radius, 0, Math.PI * 2);
        ctx.fillStyle = firework.color;
        ctx.fill();
        
        firework.y += firework.speedY;
        firework.radius *= 0.98;

        if (firework.radius < 0.5) {
            fireworks.splice(index, 1);
        }
    });

    requestAnimationFrame(animateFireworks);
}

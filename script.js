const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("birthday-message");
const dailyMessageElement = document.getElementById("daily-message");

const birthdayDate = new Date("June 6, 2025 00:00:00").getTime();
const startDate = new Date("February 1, 2025 00:00:00").getTime(); // 125 days before June 6, 2025

const messages = [
    "Day 1: You're the best person I know! 😊",
    "Day 2: Your smile makes my day! ☀️",
    "Day 3: I admire your kindness! ❤️",
    "Day 4: You light up every room! ✨",
    "Day 5: You're an amazing friend! 🥰",
    // Add messages for each day up to Day 125...
    "Day 125: OMG! Your special day is tomorrow! 🎉"
];

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthdayDate - now;

    if (timeLeft <= 0) {
        countdownElement.style.display = "none";
        messageElement.classList.remove("hidden");
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

function unlockMessage() {
    const now = new Date().getTime();
    const daysPassed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

    if (daysPassed < 0) {
        dailyMessageElement.innerText = "Wait until the first message unlocks! ⏳";
    } else if (daysPassed >= messages.length) {
        dailyMessageElement.innerText = "🎊 No more messages! Just one day left for the big day! 🎉";
    } else {
        dailyMessageElement.innerText = messages[daysPassed];
    }

    dailyMessageElement.classList.remove("hidden");
}

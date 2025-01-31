const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("birthday-message");
const dailyMessageElement = document.getElementById("daily-message");

const birthdayDate = new Date("June 6, 2025 00:00:00").getTime();
const startDate = new Date("January 31, 2025 00:00:00").getTime(); // 125 days before June 6, 2025

const messages = [
    "Day 1: Woah Ananya ! you know , this is just the beginning of a 125-day journey! Get ready for some fun messages ",
    "Day 2: Fun fact , You're the coolest person I know , nigga ! 🕶️",
    "Day 3: Fun fact: You bring so much joy to those around you! Keep being awesome. ✨",
    "Day 4: Just wanted to remind you how amazing you are. Have a great day! 🌟",
    "Day 5: No matter what, always remember—you're appreciated! ❤️",
    "Day 6: If life were a movie, you'd definitely be the main character. 🎬",
    "Day 7: One week down, 118 to go! Hope you're loving this! 😆",
    "Day 8: Your energy is contagious, and it makes every moment better! 🚀",
    "Day 9: If awesomeness were a superpower, you’d be a superhero. 🦸",
    "Day 10: Reminder: You are enough, just the way you are. 💙",
    "Day 11: Life is better with friends like you! 😊",
    "Day 12: There’s literally no one else quite like you. And that’s a good thing! 💯",
    "Day 13: If happiness were a currency, you’d be rich. 💰",
    "Day 14: Two weeks in! Hope you're enjoying this little daily surprise! 🎁",
    "Day 15: If kindness were a competition, you’d win every time. 🏆",
    "Day 16: Your sense of humor makes life so much better! 😂",
    "Day 17: Keep being your awesome self. The world needs more people like you! 🌍",
    "Day 18: You're basically a walking source of good vibes. 🌈",
    "Day 19: There’s something great about every single day—you just have to find it! 🔍",
    "Day 20: 20 days in! That deserves a virtual high-five! ✋",
    "Day 21: Fun challenge: Smile at a random person today! It might make their day. 😊",
    "Day 22: Your creativity is unmatched! 🎨",
    "Day 23: Did you know? You make people’s lives brighter just by being in them! 🌞",
    "Day 24: Life's too short to take everything seriously—laugh a little today! 😆",
    "Day 25: A quarter of the way there! Woohoo! 🚀",
    "Day 26: Hope you’re feeling amazing today! If not, here’s a virtual hug. 🤗",
    "Day 27: If you ever doubt yourself, remember: You’re incredible. End of story. 📖",
    "Day 28: People like you make the world a better place. 🌍",
    "Day 29: Be kind to yourself today! You deserve it. 💖",
    "Day 30: One month in! This journey is just getting started! 🎉",
    "Day 31: You bring so much positivity wherever you go! 🌟",
    "Day 32: Your kindness is seriously underrated! 🥰",
    "Day 33: Keep going, keep growing, keep glowing! ✨",
    "Day 34: Sometimes the little things matter the most. Don’t forget to appreciate them! 🌸",
    "Day 35: Your ability to make others smile is a superpower. 🦸",
    "Day 36: If today isn’t great yet, just wait—it’s about to be! 😉",
    "Day 37: Never forget that you’re valued and appreciated. 💙",
    "Day 38: Reminder: You are doing great, even on the tough days. 🌈",
    "Day 39: If you ever need a reminder that you’re awesome—this is it. 😎",
    "Day 40: 40 days down, 85 to go! Whoop whoop! 🚀",
    "Day 41: Just a little note to say: You matter. Always. ❤️",
    "Day 42: You are more loved than you realize. 💞",
    "Day 43: If kindness were a game, you’d be on the leaderboard! 🎮",
    "Day 44: Life’s better with people like you in it! 🌍",
    "Day 45: Keep believing in yourself—you’re unstoppable! 💪",
    "Day 46: If today had a theme song, it would be something uplifting—just like you! 🎶",
    "Day 47: 50 days is getting closer! Woohoo! 🎉",
    "Day 48: It’s a good day to be YOU! Because you’re awesome! 😃",
    "Day 49: No matter what, keep shining bright! 🌟",
    "Day 50: We made it to 50! That calls for a celebration! 🎊",
    "Day 51: Here’s a fun idea: Tell someone something nice today! 🌼",
    "Day 52: You bring good energy wherever you go! ⚡",
    "Day 53: If happiness were a game, you’d be winning. 🏆",
    "Day 54: Just wanted to remind you: You're important. Always. ❤️",
    "Day 55: Keep being the incredible person you are! 🥳",
    "Day 56: Halfway to the final stretch! Keep going! 🚀",
    "Day 57: You deserve all the best things in life! 🎁",
    "Day 58: Don’t ever forget how much people appreciate you! 😊",
    "Day 59: If I had to describe you in one word, it would be: AMAZING. 💖",
    "Day 60: Only 65 days to go! Woohoo! 🎊",
    "Day 100: OH WOW! Only 25 days left!! 🎉",
    "Day 110: We’re in the final stretch! Can you feel the excitement? 🎂",
    "Day 120: 5 days left!! ARE YOU READY?! 🎈",
    "Day 125: OMG! YOUR SPECIAL DAY IS TOMORROW! 🎊",
    "Day 126: 🎉🎂 IT'S YOUR BIRTHDAY! WOOHOO! ENJOY YOUR SPECIAL DAY! 🎁🎈"
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

    if (daysPassed >= messages.length) {
        dailyMessageElement.innerText = "🎊 No more messages! Just one day left for the big day! 🎉";
    } else {
        dailyMessageElement.innerText = messages[daysPassed];
    }

    dailyMessageElement.classList.remove("hidden");
}

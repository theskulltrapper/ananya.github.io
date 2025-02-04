const birthdayDate = new Date("June 6, 2025 00:00:00").getTime();
const startDate = new Date("February 1, 2025 00:00:00").getTime();
const messages = [
    "Day 1: Woah Ananya ! you know , this is just the beginning of a 125-day journey! Get ready for some fun messages ",
    "Day 2: Jesus christ , your birthday is far innit , welp regardless , time can't change the fact that you are a nigga 🕶️",
    "Day 3: Hard to believe it has been almost 3 years since i have known you✨",
    "Day 4: Gotta thank the creators of yubo everyday  🌟",
    "Day 5: No matter what, always remember , you are my fav human",
    "Day 6: Nsut ppl lowk don't realise how lucky they are to meet you everyday",
    "Day 7: One week down, 118 to go! Hope you're finding it worth every day to check this page",
    "Day 8: i could have a million problems , and somehow talking to you fixes 99 percent of them",
    "Day 9: If awesomeness were a superpower, you’d be a superhero",
    "Day 10: You are enough, just the way you are",
    "Day 11: my life is good rn , but only because you are here to see it ",
    "Day 12: how tf are you so talented",
    "Day 13: If happiness were a currency, I'd be poor without you because you make me so happy",
    "Day 14: Two weeks in! Hope you're enjoying this little daily surprise! 🎁",
    "Day 15: If having the most amount talent was a competition, you’d win every time. 🏆",
    "Day 16: I wonder who would spill the tea if i never met you",
    "Day 17: keep being your awesome self. The world needs more people like you! 🌍",
    "Day 18: something about blue lays and ice cream",
    "Day 19: 12 year old you would be proud to know a future 19 year old self doesn't piss the bed anymore",
    "Day 20: 20 days in! That deserves a virtual high-five! ✋",
    "Day 21: ugh , i've wrote too many messages , your turn to text me :)",
    "Day 22: Your creativity is unmatched! 🎨",
    "Day 23: Did you know? You make people’s lives brighter just by being in them! ",
    "Day 24: Life's too short to not talk to ananya everyday ",
    "Day 25: A quarter of the way there! Woohoo! 🚀",
    "Day 26: Hope you’re feeling amazing today! If not, remember i once rickrolled you 🤗",
    "Day 27: If you ever doubt yourself, remember: You’re incredible. End of story. 📖",
    "Day 28: If we ever stopped bieng friends , I'd still be here for u ",
    "Day 29: Get some rest , you must be tired from bieng so awsome ",
    "Day 30: One month in! This journey is just getting started! ",
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
    "Day 60: ",
    "Day 61: Only 65 days to go! Woohoo! 🎊",
    "Day 62: Only 65 days to go! Woohoo! 🎊",
    "Day 63: Only 65 days to go! Woohoo! 🎊",
    "Day 64: Only 65 days to go! Woohoo! 🎊",
    "Day 65: Only 65 days to go! Woohoo! 🎊",
    "Day 66: Only 65 days to go! Woohoo! 🎊",
    "Day 67: Only 65 days to go! Woohoo! 🎊",
    "Day 68: Only 65 days to go! Woohoo! 🎊",
    "Day 69: Only 65 days to go! Woohoo! 🎊",
    "Day 70: Only 65 days to go! Woohoo! 🎊",
    "Day 71: Only 65 days to go! Woohoo! 🎊",
    "Day 72: Only 65 days to go! Woohoo! 🎊",
    "Day 73: Only 65 days to go! Woohoo! 🎊",
    "Day 74: Only 65 days to go! Woohoo! 🎊",
    "Day 75: Only 65 days to go! Woohoo! 🎊",
    "Day 76: Only 65 days to go! Woohoo! 🎊",
    "Day 77: Only 65 days to go! Woohoo! 🎊",
    "Day 78: Only 65 days to go! Woohoo! 🎊",
    "Day 79: Only 65 days to go! Woohoo! 🎊",
    "Day 80: Only 65 days to go! Woohoo! 🎊",
    "Day 81: Only 65 days to go! Woohoo! 🎊",
    "Day 82: Only 65 days to go! Woohoo! 🎊",
    "Day 83: Only 65 days to go! Woohoo! 🎊",
    "Day 84: Only 65 days to go! Woohoo! 🎊",
    "Day 85: Only 65 days to go! Woohoo! 🎊",
    "Day 86: Only 65 days to go! Woohoo! 🎊",
    "Day 87: Only 65 days to go! Woohoo! 🎊",
    "Day 88: Only 65 days to go! Woohoo! 🎊",
    "Day 89: Only 65 days to go! Woohoo! 🎊",
    "Day 90: Only 65 days to go! Woohoo! 🎊",
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
        document.getElementById("countdown").style.display = "none";
        return;
    }

    document.getElementById("days").innerText = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((timeLeft % (1000 * 60)) / 1000);
}

setInterval(updateCountdown, 1000);
updateCountdown();

function unlockMessage() {
    const now = new Date().getTime();
    const daysPassed = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById("daily-message").innerText = messages[daysPassed] || "🎉 Countdown is over!";
    document.getElementById("daily-message").classList.remove("hidden");
    new Audio('unlock.mp3').play();
}

function toggleMusic() {
    const music = document.getElementById("bg-music");
    music.paused ? music.play() : music.pause();
}

function applyCustomTheme() {
    localStorage.setItem("customTheme", JSON.stringify({
        bg: document.getElementById("bgColorPicker").value,
        textColor: document.getElementById("textColorPicker").value,
        font: document.getElementById("fontPicker").value
    }));
    location.reload();
}

function resetTheme() {
    localStorage.removeItem("customTheme");
    location.reload();
}

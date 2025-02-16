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
    "Day 10: nigga , pick some cotton",
    "Day 11: my life is good rn , cause i can be racist to you",
    "Day 12: craving blue lays w vanilla icecream?",
    "Day 13: If happiness were a currency, I'd be poor without you because you make me so happy",
    "Day 14: Two weeks in! Hope you're enjoying this little daily surprise! 🎁",
    "Day 15: If having the most amount talent was a competition, you’d win every time. 🏆",
    "Day 16: I wonder who would spill the tea if i never met you",
    "Day 17: keep being your awesome self. The world needs more people like you! 🌍",
    "Day 18: I hope you get rickrolled , nigga.",
    "Day 19: 12 year old you would be proud to know a future 19 year old self doesn't piss the bed anymore",
    "Day 20: 20 days in! That deserves a virtual high five , make sure to clean your hands from all that cotton farming tho ✋",
    "Day 21: ugh , i've wrote too many messages , your turn to text me :) or have you still left me on delivered ?",
    "Day 22: how many crimes did u commit today ?",
    "Day 23: Did you know? you are still the most talented nigga ik ! ",
    "Day 24: Life's too short to not talk to ananya everyday ",
    "Day 25: Unlike your love life , we are a quarter of the way there! Woohoo! ",
    "Day 26: Hope you’re feeling amazing today! If not, remember i once rickrolled you 🤗",
    "Day 27: If you ever doubt yourself, remember: you have a shaurya . End of story. 📖",
    "Day 28: If we ever stopped bieng friends , I'd still be here for u ",
    "Day 29: Get some rest , you must be tired from bieng so awsome ",
    "Day 30: One month in! This journey is just getting started! ",
    "Day 31: you're the only one who has made me an optimist , still won't forget the moment you told me to manifest srcc",
    "Day 32: take a look in the mirror , you'll see the best person in the whole world , yes , that's you , ananya.",
    "Day 33: another day , i wish i had ananya's sense of fashion and humour",
    "Day 34: Sometimes , i think that im unlucky , then i remember i have you",
    "Day 35: Your ability to make my day better is a superpower. ",
    "Day 36: If today isn’t great yet, just text me and i'll make it better",
    "Day 37: Never forget that you’re valued and appreciated. ",
    "Day 38: Reminder: You are doing great, even on the tough days. ",
    "Day 39: If you ever feel useless remember nift once rejected thier most talented candidate ananya , you .",
    "Day 40: 40 days down, 85 to go! lesgoo nigga 🚀",
    "Day 41: Just a little note to say: You matter. always",
    "Day 42: You are more valued to me then you'll ever know",
    "Day 43: If life were a game, you’d be on the leaderboard! ",
    "Day 44: you know if i died today , id be happy knowing i once was frens w u ",
    "Day 45: Keep believing in yourself— you’re unstoppable nigga. ",
    "Day 46: can i be honest ? im still waiting for u to get rickrolled my nigga ",
    "Day 47: 50 days is getting closer! hope you're scared for what's next ",
    "Day 48: here is a cool picture of you <img src='//media1.tenor.com/m/K5jhEvQvSJ0AAAAd/good-morning.gif'>",
    "Day 49: que pasa amigo ? ",
    "Day 50: We made it to 50! That calls for a celebration! 🎊",
    "Day 51: fun idea : go back to cp again",
    "Day 52: i still remember ur wet dream abt ur friend vedika hehehe , jus so u know",
    "Day 53: my only aim in life is to meet you in person someday",
    "Day 54: Just wanted to remind you: You're a nigga , Always. ",
    "Day 55: Keep being the incredible person you are! ",
    "Day 56: woah , are u still reading these ? thought your attendance would be as bad as it is in class",
    "Day 57: You deserve all the best things in life! ",
    "Day 58: Don’t ever forget how much people (me) appreciate you ! ",
    "Day 59: dont forget , ur still my best friend ",
    "Day 60: DAY 60 my NIGGA ",
    "Day 61: remember how i owe you an arigato dance ? yeah u aint ever getting that .",
    "Day 62: im unhappy sometimes but atleast ion live in ghaziabad",
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

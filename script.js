function yesClicked() {
    alert("Yay! 💖 I can't wait! 😊");
}

function moveButton(button) {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

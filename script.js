function showMessage() {
    document.getElementById("message").innerText =
    "You are the most amazing person 💖 Happy Birthday!";
}

function playMusic() {
  document.getElementById("music").play();
}

function showSurprise() {
  document.getElementById("surprise").style.display = "block";

  // Confetti 🎊
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Start typing effect
  typeEffect();
}

let text = "Happy Birthday! You are truly special 💖";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
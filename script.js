const music = document.getElementById("music");

// Try autoplay
window.onload = () => {
  music.play().catch(() => {
    document.getElementById("startScreen").style.display = "flex";
  });
};

// Start screen click
document.getElementById("startScreen").onclick = () => {
  music.play();
  document.getElementById("startScreen").style.display = "none";
};

function showMessage() {
  document.getElementById("message").innerText =
    "You are the most amazing person 💖 Happy Birthday!";
}

function playMusic() {
  music.play();
}

function showSurprise() {
  document.getElementById("surprise").innerText =
    "You make my life brighter 💖 Happy Birthday!";
  document.getElementById("surprise").style.display = "block";

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  typeEffect();
  createBalloons();
}

// Typing effect
let text = "Happy Birthday! You are truly special 💖";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

// Balloons
function createBalloons() {
  const container = document.getElementById("balloons");

  for (let i = 0; i < 20; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.background =
      ["red", "blue", "yellow", "green", "pink"][Math.floor(Math.random() * 5)];

    balloon.style.animationDuration = (4 + Math.random() * 3) + "s";

    container.appendChild(balloon);
  }
}
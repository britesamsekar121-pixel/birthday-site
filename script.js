const music = document.getElementById("music");

function showSurprise() {
  document.getElementById("surpriseCard").classList.remove("hidden");

  music.play();

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  typeEffect();
}

let text = "You are one of the most special people in my life 💖 Happy Birthday!";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 40);
  }
}
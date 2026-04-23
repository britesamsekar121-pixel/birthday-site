const music = document.getElementById("music");
const startScreen = document.getElementById("startScreen");

startScreen.onclick = () => {
  music.play();
  startScreen.style.display = "none";
};

function showSurprise() {
  document.getElementById("messageCard").classList.remove("hidden");

  confetti({
    particleCount: 200,
    spread: 80
  });

  typeEffect();
  createHearts();
}

let text = "You are one of the most amazing people in my life 💖 Happy Birthday Kutta!";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 40);
  }
}

function createHearts() {
  const container = document.getElementById("hearts");

  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    container.appendChild(heart);
  }
}

function showLetter() {
  const msg = document.getElementById("userMessage").value;
  const letter = document.getElementById("letter");

  if (msg.trim() === "") {
    letter.innerText = "Write something first 💌";
  } else {
    letter.innerText = msg;
  }

  letter.classList.remove("hidden");
}
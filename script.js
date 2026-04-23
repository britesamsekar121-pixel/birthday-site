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
  const letter = document.getElementById("letter");

  letter.innerHTML = `
  Happy Birthday 💖<br><br>

  I just wanted to take a moment to tell you how special you are to me.<br><br>

  You are one of the most amazing people I ever know.<br><br>

  na unna first time poster making la paakumbothu oru maathiri konjam rude and rugged aalu nu tha ninaichan but athuku aprom tha therinjuthu ne oru dummy piece nu😁.
aprom ne first time message pannumbothu epadi pesurathu nu kuda theriyaama oru maathiri thayangi tha pesunan appo laa namma intha alavuku close aavom nu na ninaichi kuda paakala appo na pesunatha ninaicha siripu tha varuthu.<br><br>

  un kuda pesumbothu la maximum enaku epadi time poguthuney theriyaama athu paatuku pooguthu sila time naanum konjam kammi pannalaam nu try panni irukan but enna pannalum athuku vaipu illa epadi time poguthuney theriyala.
na maximum time insta ,whatsapp and snap use pannura kaaranamey ne tha matha time la athu kulla ponaalum athu sikaram bore adika start aaidum so apadiyae vera velaiya paaka poiduvan unmaya sollanum na ennoda chatting partner ne tha 🥰🥰.<br><br>

  enaku en nu theriyala but unna kadupu ethurathu enaku romba pidicha visayamaa aaiduchi so maximum unna kadupu etha try pannuvan athu la enaku oru santhosam kidaikum but enna ne posuku posuku nu kova padura ne kova pattu thitunaa kuda fun aa tha irukum😁😁 but nesila time pesaama poiduva athu tha enaku kastamaa irukum 😢😢 atha mattum maathuna nalla irukum.<br><br>

  unna starting oru time kutta nu sonna ethuku sonna nu neyabagam illa but ippo antha vartha tha unna kupuda enaku romba pidicha peraa maariduchi 😁😁 aprom waste itha maathiri vaartha laa use pannumbothu na maximum athoda original meaning mean panna maatan athu ennomo theriyala unna maatum tha 
na apadi kupuduran and apadi kupudurathu tha enaku romba pidichu iruku.<br><br>

  aprom na ponuga kitta konjam normal aa pesurathu ku kaaranamae ne tha unta pesunathu naala tha konjam improve aai irukan (athuku nu unna oru ponnu apadilaa poi solla maatan😜😜) aprom na use pannura varthaigal silathu na mean pannurathu ku na sonnathukum samatham irukathu athulaa ne tha enaku point
panni enna maathiko nu nerayaa advice kuduthu nerayaa care panni iruka athuku romba nandri💖💖.<br><br>

  ne enaku neraya visayathula na ethipaakatha appo laa kuda enaku help panni iruka athuku nu unna oru nalla ponnu nu laa solla maatan 😁 but ennoda favorite best friend ne tha😘😘.<br><br>

   ne sila time na kadupu ethunaa romba tension aaitu kanla thanni vathuduchi nu solluva appo laa enaku konjam kastamaatha irukum 😭na enna tha antha nookathula pannala naalum mannipu ketukuran athukunu kadupu ethama laa iruka maatan😁.
intha birthday la irunthaachi ne ethuku eduthaalum kanla thanni varathu and chinna sathathuku bayapaduratha maatha try pannu.<br><br>

  eppovum happy ya iru di kuttachi. ne enaku friend aa kidachathuku na romba santhosam paduran💙💙.<br><br>

  I hope today brings you as much joy as you bring to everyone around you.
  You truly deserve all the happiness in the world 🌸<br><br>

  Once again, Happy Birthday 🎉
  `;

  letter.classList.remove("hidden");
}

function openGift() {
  const memories = document.querySelector(".gallery");

  memories.scrollIntoView({ behavior: "smooth" });

  // small animation
  memories.style.transform = "scale(1.05)";
  setTimeout(() => {
    memories.style.transform = "scale(1)";
  }, 300);
}
function createSunflower() {
  const sunflower = document.createElement("img");
  sunflower.src = "img/girassol.png";
  sunflower.classList.add("falling-sunflower");
  sunflower.style.left = Math.random() * 100 + "vw";
  sunflower.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(sunflower);
  setTimeout(() => sunflower.remove(), 7000);
}

setInterval(createSunflower, 1500);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 10 + 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 1500);


const video = document.getElementById("loveVideo");
const question = document.getElementById("question");

video.addEventListener("ended", () => {
  question.style.display = "block";
});
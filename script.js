const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// Position initiale du bouton Non
noBtn.style.left = "120px";
noBtn.style.top = "0px";

// Quand elle clique sur "Oui"
yesBtn.addEventListener("click", () => {
  message.textContent = "Ahhh, je t'aime aussi ❤️😍";
});

// Quand la souris s’approche du bouton "Non"
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

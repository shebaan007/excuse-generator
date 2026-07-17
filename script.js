const excuses = [
  "It's not a bug, it's a feature.",
  "Works on my machine 🤷",
  "I swear it worked five minutes ago.",
  "The server needs more coffee.",
  "That's what Stack Overflow told me to do."
];

let count = 0;
const button = document.getElementById("btn");
const excuseText = document.getElementById("excuse");



button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * excuses.length);
  excuseText.textContent = excuses[randomIndex];
  count = count + 1;
  counter.textContent = "Excuses given: " + count;
});


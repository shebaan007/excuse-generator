let count = 0;
const button = document.getElementById("btn");
const excuseText = document.getElementById("excuse");
const counterText = document.getElementById("counter");

button.addEventListener("click", function () {
  fetch("http://localhost:3000/api/excuse")
    .then(response => response.json())
    .then(data => {
      excuseText.textContent = data.excuse;
      count = count + 1;
      counterText.textContent = "Excuses given: " + count;
    });
});
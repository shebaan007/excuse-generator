const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const excuses = [
  "It's not a bug, it's a feature.",
  "Works on my machine 🤷",
  "I swear it worked five minutes ago.",
  "The server needs more coffee.",
  "That's what Stack Overflow told me to do."
];

app.get("/api/excuse", (req, res) => {
  const randomIndex = Math.floor(Math.random() * excuses.length);
  res.json({ excuse: excuses[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// VARIABLES: Each object represents a different mood and color palette.
const moods = [
  {
    name: "Calm",
    description: "A quiet moment to slow down and breathe.",
    background: "#101b32",
    panel: "#1b2d4c",
    accent: "#8ed9f5",
    highlight: "#d8f2ff"
  },
  {
    name: "Dreamy",
    description: "A little imagination can change everything.",
    background: "#251636",
    panel: "#493052",
    accent: "#eeb8ff",
    highlight: "#f4dbff"
  },
  {
    name: "Sunny",
    description: "Some days feel warmer and brighter than others.",
    background: "#372417",
    panel: "#63402b",
    accent: "#ffca79",
    highlight: "#ffe4b8"
  },
  {
    name: "Fresh",
    description: "A new beginning can be just one click away.",
    background: "#102c29",
    panel: "#24504b",
    accent: "#93e9bb",
    highlight: "#d0f9e4"
  }
];

let currentMood = 0;
const changeButton = document.getElementById("change-button");
const moodName = document.getElementById("mood-name");
const moodDescription = document.getElementById("mood-description");
const artNumber = document.getElementById("art-number");

// FUNCTION: Update the text and CSS colors when the mood changes.
function changeMood() {
  currentMood = (currentMood + 1) % moods.length;
  const mood = moods[currentMood];

  moodName.textContent = mood.name;
  moodDescription.textContent = mood.description;
  artNumber.textContent = String(currentMood + 1).padStart(2, "0");

  document.documentElement.style.setProperty("--background", mood.background);
  document.documentElement.style.setProperty("--panel", mood.panel);
  document.documentElement.style.setProperty("--accent", mood.accent);
  document.documentElement.style.setProperty("--highlight", mood.highlight);
}

// EVENT LISTENER: Clicking the button changes the page.
changeButton.addEventListener("click", changeMood);

// EVENT LISTENER: Pressing C also changes the page.
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "c" && !event.repeat && !event.ctrlKey && !event.metaKey && !event.altKey) {
    changeMood();
  }
});

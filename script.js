const music = document.getElementById("bg-music");
const toggleButton = document.getElementById("music-toggle");

// Toggle music on button click
toggleButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = "MUSIC — PAUSE";
  } else {
    music.pause();
    toggleButton.textContent = "MUSIC — PLAY";
  }
});

// Try autoplay on load
window.addEventListener("load", () => {
  music.volume = 0.5;
  music.play().then(() => {
    toggleButton.textContent = "MUSIC — PAUSE";
  }).catch(() => {
    console.log("Autoplay prevented. Waiting for user interaction.");
    toggleButton.textContent = "MUSIC — PLAY";
  });
});

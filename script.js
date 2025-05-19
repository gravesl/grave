const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

// Toggle play/pause
function toggleMusic() {
  if (music.paused) {
    music.play();
    toggleBtn.innerText = "PAUSE";
  } else {
    music.pause();
    toggleBtn.innerText = "MUSIC";
  }
}

toggleBtn.addEventListener("click", toggleMusic);

// Try autoplay on load
window.addEventListener("load", () => {
  music.volume = 0.5;
  music.play().catch(() => {
    console.log("Autoplay prevented. User interaction required.");
  });
});

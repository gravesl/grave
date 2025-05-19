// Grab the music element by ID
const music = document.getElementById("bg-music");

// Toggle music play/pause
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Optionally autoplay on load (remove if you want manual start)
window.addEventListener("load", () => {
  music.volume = 0.5; // Optional: set volume
  music.play().catch(() => {
    // Autoplay might be blocked by browser until user interacts
    console.log("Autoplay prevented. Waiting for user interaction.");
  });
});

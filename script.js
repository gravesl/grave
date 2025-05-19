const splash = document.getElementById("splash");
const boot = document.getElementById("boot");
const menu = document.getElementById("menu");
const bootComplete = document.getElementById("boot-complete");
const bootLog = document.getElementById("boot-log");

const lines = [
  "[--] Loading kernel modules...",
  "[OK] CPU: AMD Ryzen 9 7950X @ 5.7 GHz",
  "[OK] Memory: 64GB DDR5-6000 CL30 initialized",
  "[--] Running memory diagnostic...",
  "[OK] PCI devices initialized",
  "[OK] Loading system drivers...",
  "[!!] ACPI: CPU temp high (75°C)",
  "[--] Starting system services..."
];

bootLog.textContent = ""; // clear boot log
let i = 0;
const delay = 300; // ms between lines

// Load typing sound
const typeSound = new Audio("type.mp3");
typeSound.volume = 0.3;

function typeLine() {
  if (i < lines.length) {
    bootLog.textContent += lines[i] + "\n";
    typeSound.currentTime = 0;
    typeSound.play();
    i++;
    setTimeout(typeLine, delay);
  } else {
    bootComplete.style.display = "block";
  }
}

// Show splash first, then start boot
setTimeout(() => {
  splash.style.display = "none";
  typeLine();
}, 2000);

// After boot, click to show menu
boot.addEventListener("click", () => {
  if (bootComplete.style.display === "block") {
    boot.classList.add("hidden");
    menu.classList.remove("hidden");
  }
});

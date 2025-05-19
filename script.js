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

bootLog.textContent = ""; // clear existing lines

let i = 0;
const delay = 300; // milliseconds between lines

function typeLine() {
  if (i < lines.length) {
    bootLog.textContent += lines[i] + "\n";
    i++;
    setTimeout(typeLine, delay);
  } else {
    bootComplete.style.display = "block";
  }
}

setTimeout(typeLine, 500);

// click to continue
boot.addEventListener("click", () => {
  if (bootComplete.style.display === "block") {
    boot.classList.add("hidden");
    menu.classList.remove("hidden");
  }
});

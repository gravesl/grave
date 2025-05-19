
const boot = document.getElementById("boot");
const menu = document.getElementById("menu");
const bootComplete = document.getElementById("boot-complete");

// show "SYSTEM READY" after delay
setTimeout(() => {
  bootComplete.style.display = "block";
}, 2500);

// click to continue
boot.addEventListener("click", () => {
  boot.classList.add("hidden");
  menu.classList.remove("hidden");
});

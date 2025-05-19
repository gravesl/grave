// script.js
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");
const terminalOutput = document.getElementById("terminal-output");
const commandInput = document.getElementById("command-input");

let commandHistory = [];
let historyIndex = 0;
let currentDir = "/";
let isLoggingIn = false;
let loginStep = 0;

const fileSystem = {
  "/": ["profile.jpg", "music.mp3", "index.html", "secrets/"],
  "/secrets": ["notes.txt"]
};

const fileContents = {
  "/secrets/notes.txt": "Beware what you seek in the dark.\nEverything left buried doesn't want to be found."
};

window.addEventListener("load", () => {
  music.volume = 0.5;
  music.play().catch(() => {
    console.log("Autoplay blocked");
  });
});

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "PAUSE";
  } else {
    music.pause();
    toggleBtn.textContent = "MUSIC";
  }
});

commandInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = this.value.trim();
    commandHistory.push(command);
    historyIndex = commandHistory.length;
    processCommand(command);
    this.value = "";
  } else if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      this.value = commandHistory[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      this.value = commandHistory[historyIndex];
    } else {
      this.value = "";
    }
  }
});

function processCommand(cmd) {
  const prompt = `user@grave:${currentDir}$`;
  let output = `${prompt} ${cmd}\n`;
  const args = cmd.trim().split(" ");
  const base = args[0].toLowerCase();

  switch (base) {
    case "help":
      output += "Available commands: help, whoami, ls, clear, music, exit, pwd, cd, cat";
      break;
    case "whoami":
      output += "grave";
      break;
    case "ls":
      output += fileSystem[currentDir]?.join("  ") || "";
      break;
    case "pwd":
      output += currentDir;
      break;
    case "cd":
      const target = args[1];
      if (target === "..") {
        currentDir = "/";
      } else {
        const newPath = currentDir === "/" ? `/${target.replace(/\/$/, "")}` : `${currentDir}/${target}`;
        if (fileSystem[newPath]) {
          currentDir = newPath;
        } else {
          output += `No such directory: ${target}`;
        }
      }
      break;
    case "cat":
      const file = args[1];
      const fullPath = currentDir === "/" ? `/${file}` : `${currentDir}/${file}`;
      output += fileContents[fullPath] || `No such file: ${file}`;
      break;
    case "music":
      music.paused ? music.play() : music.pause();
      output += music.paused ? "Music paused" : "Music playing";
      break;
    case "clear":
      terminalOutput.textContent = "";
      return;
    case "exit":
      output += "Exiting...\n[Session terminated]";
      setTimeout(() => location.reload(), 1000);
      break;
    default:
      output += `Command not found: ${cmd}`;
  }

  terminalOutput.textContent += output + "\n";
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

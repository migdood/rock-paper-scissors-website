let playerWonRounds = 0;
let botWonRounds = 0;
let currentRound = 0;
const roundsToWin = 5;

const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const playButton = document.getElementById("play-button");

const winnerOverlay = document.getElementById("overlay-winner");
const winnerImage = document.getElementById("winner-image");
const winnerText = document.getElementById("winner-text");
const winnerButton = document.getElementById("play-again");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const textArea = document.getElementById("text-area");
const roundCounter = document.getElementById("roundCounter");
const playerWins = document.getElementById("player-Wins");
const botWins = document.getElementById("bot-Wins");

rockButton.addEventListener("click", () => whoWon("🪨"));
rockButton.addEventListener("mousedown", () => rockButton.classList.add("clicked"));
rockButton.addEventListener("mouseup", () => rockButton.classList.remove("clicked"));
rockButton.addEventListener("mouseleave", () => rockButton.classList.remove("clicked"));

paperButton.addEventListener("click", () => whoWon("📜"));
paperButton.addEventListener("mousedown", () => paperButton.classList.add("clicked"));
paperButton.addEventListener("mouseup", () => paperButton.classList.remove("clicked"));
paperButton.addEventListener("mouseleave", () => paperButton.classList.remove("clicked"));

scissorsButton.addEventListener("click", () => whoWon("✂️"));
scissorsButton.addEventListener("mousedown", () => scissorsButton.classList.add("clicked"));
scissorsButton.addEventListener("mouseup", () => scissorsButton.classList.remove("clicked"));
scissorsButton.addEventListener("mouseleave", () => scissorsButton.classList.remove("clicked"));

function resetButton() {
  textArea.value = "";
  currentRound = 0;
  playerWonRounds = 0;
  botWonRounds = 0;
  roundCounter.textContent = 0;
  playerWins.textContent = 0;
  botWins.textContent = 0;
}

playerWins.textContent = 0;
botWins.textContent = 0;
roundCounter.textContent = 0;

function whoWon(player) {
  function botChoiceF() {
    const choices = ["🪨", "📜", "✂️"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  const bot = botChoiceF();
  let result;

  if (bot === player) {
    currentRound++;
    roundCounter.textContent = currentRound;
    result = "Draw";
  } else if (
    (bot == "🪨" && player == "✂️") ||
    (bot == "📜" && player == "🪨") ||
    (bot == "✂️" && player == "📜")
  ) {
    botWonRounds++;
    currentRound++;
    roundCounter.textContent = currentRound;
    console.log("bot: " + botWonRounds);
    botWins.textContent = botWonRounds;
    result = "Bot Won";
  } else {
    playerWonRounds++;
    currentRound++;
    roundCounter.textContent = currentRound;
    console.log("player: " + playerWonRounds);
    playerWins.textContent = playerWonRounds;
    result = "Player Won.";
  }

  textArea.value += `${currentRound} | Bot: ${bot} | Player: ${player} | ${result}\n-------------------------------------------------\n`;
  textArea.scrollTop = textArea.scrollHeight;

  if (playerWonRounds == roundsToWin) {
    winnerOverlay.style.transform = "translateY(0%)";
    winnerImage.src = "img/player.png";

    nav.style.backgroundColor = "#FEFEFE";

    winnerText.innerHTML = "You Won 5 Rounds!!!<br>Good Job.";
    winnerButton.addEventListener("click", () => {
      resetButton();
      winnerOverlay.style.transform = "translateY(-100%)";
      setTimeout(() => {
        nav.style.backgroundColor = "#F5F9F7";
      }, 400);
    });
  } else if (botWonRounds === roundsToWin) {
    winnerOverlay.style.transform = "translateY(0%)";
    winnerImage.src = "img/robot.png";

    nav.style.backgroundColor = "#FEFEFE";

    winnerText.innerHTML = "Bot Won 5 Rounds!!!<br>Get DUNKED ON";
    winnerButton.addEventListener("click", () => {
      resetButton();
      winnerOverlay.style.transform = "translateY(-100%)";
      setTimeout(() => {
        nav.style.backgroundColor = "#F5F9F7";
      }, 400);
    });
  }
}
// nav: #F5F9F7 || overlay: #FEFEFE
function showOverlay() {
  overlay.style.transform = "translateY(0%)";
  nav.style.backgroundColor = "#FEFEFE";
}

playButton.addEventListener("click", function () {
  overlay.style.transform = "translateY(-100%)";
  setTimeout(() => {
    nav.style.backgroundColor = "#F5F9F7";
  }, 400);
});
document.addEventListener("DOMContentLoaded", showOverlay);

// Dark Theme
const darkButton = document.getElementById("dark-theme-button");
const darkWrapper = document.querySelectorAll(".wrapper");

// Dark button
darkButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  darkWrapper.forEach((element) => {
    element.classList.toggle("dark-theme");
  });
});
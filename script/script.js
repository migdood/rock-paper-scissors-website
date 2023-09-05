let playerWonRounds = 0;
let botWonRounds = 0;
let currentRound = 0;
const roundsToWin = 5;

const overlay = document.getElementById("overlay");
const playButton = document.getElementById("play-button");

const winnerOverlay = document.getElementById("overlay-winner");
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
paperButton.addEventListener("click", () => whoWon("📜"));
scissorsButton.addEventListener("click", () => whoWon("✂️"));
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

  textArea.value += `Bot: ${bot}\nPlayer: ${player}\n${result}\n----------\n`;
  textArea.scrollTop = textArea.scrollHeight;

  if (playerWonRounds == roundsToWin) {
    winnerOverlay.style.display = "flex";
    winnerText.innerHTML = "You Won 5 Rounds!!!<br>Good Job.";
    winnerButton.addEventListener("click", () => {
      resetButton();
      winnerOverlay.style.display = "none";
    });
  } else if (botWonRounds === roundsToWin) {
    winnerOverlay.style.display = "flex";
    winnerText.innerHTML = "Bot Won 5 Rounds!!!<br>Get DUNKED ON";
    winnerButton.addEventListener("click", () => {
      resetButton();
      winnerOverlay.style.display = "none";
    });
  }
}

function showOverlay() {
  overlay.style.display = "flex";
}
playButton.addEventListener("click", function () {
  overlay.style.display = "none";
});
window.addEventListener("load", showOverlay);


const darkButton = document.getElementById("dark-theme-button");
const darkWrapper = document.querySelectorAll(".wrapper");

darkButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  darkWrapper.forEach((element) => {
    element.classList.toggle("dark-theme");
  });
});
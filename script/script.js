let playerWonRounds = 0;
let botWonRounds = 0;
let currentRound = 0;
const roundsToWin = 5;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const textArea = document.getElementById("text-area");
const roundCounter = document.getElementById("roundCounter");
const playerWins = document.getElementById("player-Wins");
const botWins = document.getElementById("bot-Wins");

let playerChoice = "null";
rockButton.addEventListener("click", () => whoWon("rock"));
paperButton.addEventListener("click", () => whoWon("paper"));
scissorsButton.addEventListener("click", () => whoWon("scissors"));
resetButton.addEventListener("click", () => {
  textArea.value = "";
  currentRound = 0;
  playerWonRounds = 0;
  botWonRounds = 0;
  roundCounter.textContent = 0;
  playerWins.textContent = 0;
  botWins.textContent = 0;
});
(playerWins.textContent = 0),
  (botWins.textContent = 0),
  (roundCounter.textContent = 0);

function whoWon(player) {
  function botChoiceF() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  const bot = botChoiceF();
  let result;

  if (bot === player) {
    currentRound++;
    roundCounter.textContent = currentRound;
    result = "Draw";
  } else if (
    (bot == "rock" && player == "scissors") ||
    (bot == "paper" && player == "rock") ||
    (bot == "scissors" && player == "paper")
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

  let printResult = (textArea.value += `🤖: ${bot}\n🫵: ${player}\n${result}\n`);
  textArea.value = printResult;
  textArea.scrollTop = textArea.scrollHeight;
}

function playingRounds() {
  while (playerWonRounds < roundsToWin && botWonRounds < roundsToWin) {
    const botChoice = botChoiceF();
    BotVSPlayer(botChoice, playerChoice);
  }

  if (playerWonRounds >= roundsToWin) {
    textArea.value("Player wins the game!");
  } else {
    console.log("Bot wins the game!");
  }
}

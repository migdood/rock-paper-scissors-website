let playerWonRounds = 0;
let botWonRounds = 0;
const roundsToWin = 5;

const roundCounter = document.getElementById("roundCounter").textContent = 0;
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const textArea = document.getElementById("text-area");

let playerChoice = "null";
rockButton.addEventListener("click", () => whoWon("rock"));
paperButton.addEventListener("click", () =>  whoWon("paper"));
scissorsButton.addEventListener("click", () =>  whoWon("scissors"));
resetButton.addEventListener("click", () => textArea.value = "");

function whoWon(player) {
  function botChoiceF() 
  {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  const bot = botChoiceF();
  let result;

  if (bot === player) {
    result = 'Draw';
  } else if (
    (bot == "rock" && player == "scissors") ||
    (bot == "paper" && player == "rock") ||
    (bot == "scissors" && player == "paper")
  ) {
    botWonRounds++;
    result = "Bot Won";
  } else {
    playerWonRounds++;
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

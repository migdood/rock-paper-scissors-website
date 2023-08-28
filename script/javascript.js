function BotChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerWonRounds = 0;
let botWonRounds = 0;
let roundsToWin = 5;

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');


function BotVSPlayer(bot, player) {
  let result;
  if (
    (bot == "rock" && player == "scissors") ||
    (bot == "scissors" && player == "paper") ||
    (bot == "paper" && player == "rock")
  ) {
    botWonRounds++;
    result = "Bot Won.";
  } else if (
    (player == "rock" && bot == "scissors") ||
    (player == "scissors" && bot == "paper") ||
    (player == "paper" && bot == "rock")
  ) {
    playerWonRounds++;
    result = "Player Won.";
  } else if (bot == player) {
    result = "Draw.";
  }

  return `Bot: ${bot}\nPlayer: ${player}\nConclusion: ${result}`;
}

function PlayingRounds() {
  while (playerWonRounds < roundsToWin && botWonRounds < roundsToWin) {
    btnRock.onclick()
    const playerChoice;


    let botChoiceVar = BotChoice();
    console.log(
      `${BotVSPlayer(
        botChoiceVar, playerChoice.toLowerCase()
      )}\nBot Score: ${botWonRounds}\nPlayer Score: ${playerWonRounds}`
    );
  }

  if (playerWonRounds >= roundsToWin) {
    console.log("Player wins the game!");
  } else {
    console.log("Bot wins the game!");
  }
}

PlayingRounds();
function botChoiceF(){
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}


const playerWonRounds = 0;
const botWonRounds = 0;
const roundsToWin = 5;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const textArea = document.getElementById('text-area');

let playerChoice = 'null';
rockButton.addEventListener('click',()=> {playerChoice = 'rock'; textArea.addvalue = 'Player: rock'});
paperButton.addEventListener('click',()=> playerChoice = 'paper');
scissorsButton.addEventListener('click',()=> playerChoice = 'scissors');


function whoWon(bot, player){
  if(bot === player){
    return 'Draw';
  }
  else if((bot == 'rock' && player == 'scissors') || (bot == 'paper' && player == 'rock') || (bot == 'scissors' && player == 'paper')){
    botWonRounds++;
    return 'botwon';
  }
  else{
    playerWonRounds++;
    return 'player won';
  }
}

function playingRounds(){
  while(playerWonRounds < roundsToWin && botWonRounds < roundsToWin){
    const botChoice = botChoiceF();
    BotVSPlayer(botChoice, playerChoice);
  }

  if (playerWonRounds >= roundsToWin) {
    textArea.value("Player wins the game!");
  } else {
    console.log("Bot wins the game!");
  }
}
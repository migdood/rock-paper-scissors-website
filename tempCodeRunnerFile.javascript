function botChoiceF(){
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}
const botChoice = botChoiceF();

const playerWonRounds = 0;
const botWonRounds = 0;
const roundsToWin = 5;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const playerChoice = '';
rockButton.addEventListener('click', playerChoice = 'rock');
paperButton.addEventListener('click', playerChoice = 'paper');
scissorsButton.addEventListener('click', playerChoice = 'scissors');

console.log(playerChoice);
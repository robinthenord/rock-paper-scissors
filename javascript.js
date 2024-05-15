//Logic to get computer choice of 'rock, 'paper' or 'scissors'
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    console.log("Computer played rock");
    return "rock";
  } else if (random === 1) {
    console.log("Computer played paper");
    return "paper";
  } else {
    console.log("Computer played scissors");
    return "scissors";
  }
}

//Get human choice
function getHumanChoice() {
  let choice = prompt("Rock, paper or scissors?");
  if (choice.toLowerCase() == "rock") {
    console.log("You played rock");
    return choice.toLowerCase();
  } else if (choice.toLowerCase() == "paper") {
    console.log("You played paper");
    return choice.toLowerCase();
  } else if (choice.toLowerCase() == "scissors") {
    console.log("You played scissors");
    return choice.toLowerCase();
  } else {
    console.log("Enter rock, paper or scissors");
    return "Enter rock, paper or scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

//Logic to play single round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Winner! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Winner! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Winner! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Loser! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Loser! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Loser! Rock beats Scissors");
    computerScore++;
  }
}

/*Logic to play a game of 5 rounds and declare a winner. 
Call playgame(); in console to play!*/
function playGame() {
  console.log("New Game!");
  computerScore = 0;
  humanScore = 0;
  var numRounds = 1;
  do {
    console.log(`--Round ${numRounds}!--`);
    playRound(getHumanChoice(), getComputerChoice());
    numRounds++;

    if (numRounds === 6 && computerScore < humanScore) {
      console.log(`Final result: ${humanScore} vs ${computerScore}. Winner!`);
    } else if (numRounds === 6 && computerScore > humanScore) {
      console.log(`Final result: ${humanScore} vs ${computerScore}. Loser!`);
    } else if (numRounds === 6 && computerScore === humanScore) {
      console.log(`Final result: ${humanScore} vs ${computerScore}. Draw!`);
    }
  } while (numRounds < 6);
}

//Starts game
playGame();

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
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose!");
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

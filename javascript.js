//Logic to get computer choice of 'rock, 'paper' or 'scissors'
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    console.log("-Computer: Rock");
    return "rock";
  } else if (random === 1) {
    console.log("-Computer: Paper");
    return "paper";
  } else {
    console.log("-Computer: Scissors");
    return "scissors";
  }
}

//Get human choice
function getHumanChoice() {
  let choice = prompt("Rock, paper or scissors? (R, P, S)");
  if (choice.toLowerCase() == "r" || choice.toLowerCase() == "rock") {
    console.log("-You: Rock");
    return "rock";
  } else if (choice.toLowerCase() == "p" || choice.toLowerCase() == "paper") {
    console.log("-You: Paper");
    return "paper";
  } else if (choice.toLowerCase() == "s" || choice.toLowerCase() == "scissors") {
    console.log("-You: Scissors");
    return "scissors";
  } else {
    console.log("Enter rock, paper or scissors");
    return "Enter rock, paper or scissors";
  }
}

//Logic to play a game of 5 rounds and declare a winner.
function playGame() {
  console.log("New Game!");
  let computerScore = 0;
  let humanScore = 0;
  let numRounds = 1;

  //Logic to play single round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")) {
      console.log("Win!");
      humanScore++;
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")) {
      console.log("Lose!");
      computerScore++;
    }
  }
  do {
    console.log(`---Round ${numRounds} of 5---`);
    playRound(getHumanChoice(), getComputerChoice());
    numRounds++;

    if (numRounds === 6 && computerScore < humanScore) {
      console.log(`You ${humanScore} - ${computerScore} Computer`);
      console.log('You win!');
    } else if (numRounds === 6 && computerScore > humanScore) {
      console.log(`You ${humanScore} - ${computerScore} Computer`);
      console.log('You lose!');
    } else if (numRounds === 6 && computerScore === humanScore) {
      console.log(`You ${humanScore} - ${computerScore} Computer`);
      console.log("It's a draw!");
    }
  } while (numRounds < 6);
}

//Starts game
playGame();

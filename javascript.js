let plrScore = 0;
let pcScore = 0;

//Get computer choice
function pcPick() {
  let pick = ["rock", "paper", "scissors"];
  return pick[Math.floor(Math.random() * pick.length)];
}

let plrChoice;
let pcChoice;

//Play single round, score increment, return winner
function playRound(plrChoice, pcChoice) {
  if (plrChoice === pcChoice) {
    return "Both players picked " + plrChoice + ". it's a tie!";
  } else if (plrChoice === "rock") {
    if (pcChoice === "scissors") {
      plrScore++;
      return "You played rock, PC played scissors. You win!";
    } else if (pcChoice === "paper") {
      pcScore++;
      return "You played rock, PC played paper. You lose!";
    }
  } else if (plrChoice === "paper") {
    if (pcChoice === "rock") {
      plrScore++;
      return "You played paper, PC played rock. You win!";
    } else if (pcChoice === "scissors") {
      pcScore++;
      return "You played paper, PC played scissors. You lose!";
    }
  } else if (plrChoice === "scissors") {
    if (pcChoice === "paper") {
      plrScore++;
      return "You played scissors, PC played paper. You win!";
    } else if (pcChoice === "rock") {
      pcScore++;
      return "You played scissors, PC played rock. You lose!";
    }
  }
}

const roundText = document.querySelector("#roundText");
const endText = document.querySelector("#endText");
const plrPoints = document.querySelector("#plrPoints");
const pcPoints = document.querySelector("#pcPoints");

//Play first to 3, track score, show restart btn when a player wins
function playGame(pick) {
  pcChoice = pcPick();

  roundText.textContent = playRound(pick, pcChoice);
  plrPoints.textContent = "You: " + plrScore;
  pcPoints.textContent = "PC: " + pcScore;

  if (plrScore === 3) {
    endText.textContent = "You win! Do you want to play again?";
    restartBtn.hidden = false;
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
  } else if (pcScore === 3) {
    endText.textContent = "You lost! Maybe you need some practice?";
    restartBtn.hidden = false;
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
  }
}

//Restart game
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function () {
  roundText.textContent = "Make your choice";
  endText.textContent = "";
  restartBtn.hidden = true;
  rockBtn.disabled = false;
  scissorsBtn.disabled = false;
  paperBtn.disabled = false;
  plrScore = 0;
  pcScore = 0;
  plrPoints.textContent = "You: 0";
  pcPoints.textContent = "PC: 0";
});

//Make buttons button
const rockBtn = document.querySelector("#rBtn");
rockBtn.addEventListener("click", function () {
  playGame("rock");
});
const paperBtn = document.querySelector("#pBtn");
paperBtn.addEventListener("click", function () {
  playGame("paper");
});
const scissorsBtn = document.querySelector("#sBtn");
scissorsBtn.addEventListener("click", function () {
  playGame("scissors");
});

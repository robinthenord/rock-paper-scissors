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
    return "Tie! Both players picked " + plrChoice;
  } else if (plrChoice === "rock") {
    if (pcChoice === "scissors") {
      plrScore++;
      return "Win! Rock beats scissors";
    } else if (pcChoice === "paper") {
      pcScore++;
      return "Lose! Paper beats rock";
    }
  } else if (plrChoice === "paper") {
    if (pcChoice === "rock") {
      plrScore++;
      return "Win! Paper beats rock";
    } else if (pcChoice === "scissors") {
      pcScore++;
      return "Lose! Scissors beats paper";
    }
  } else if (plrChoice === "scissors") {
    if (pcChoice === "paper") {
      plrScore++;
      return "Win! Scissors beats paper";
    } else if (pcChoice === "rock") {
      pcScore++;
      return "Lose! Rock beats scissors";
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
  pcPoints.textContent = "AI: " + pcScore;

  if (plrScore === 3) {
    roundText.textContent = "";
    endText.textContent = "Winner! Our AI overlord was no match for you!";
    restartBtn.hidden = false;
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
  } else if (pcScore === 3) {
    roundText.textContent = "";
    endText.textContent = "Defeated! Maybe you need some practice?";
    restartBtn.hidden = false;
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
  }
}

//Restart game
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function () {
  roundText.textcontent = "";
  endText.textcontent = "";
  restartBtn.hidden = true;
  rockBtn.disabled = false;
  scissorsBtn.disabled = false;
  paperBtn.disabled = false;
  plrScore = 0;
  pcScore = 0;
  plrPoints.textContent = "You: 0";
  pcPoints.textContent = "AI: 0";
  endText.textContent = "";
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

//Logic to get computer choice of 'rock, 'paper' or 'scissors'
function computerChoice() {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) {
    console.log('Computer played rock');
    return 'Rock';
  } else if (random === 1) {
    console.log('Computer played paper');
    return 'Paper';
  } else {
    console.log('Computer played scissors');
    return 'Scissors';
    }
};

let cc = computerChoice();

//Get human choice
function humanChoice(){
  let choice = prompt('Rock, paper or scissors?');
  if (choice.toLowerCase() == 'rock'){
    console.log('You played rock');
    return choice.toLowerCase()
  } else if (choice.toLowerCase() == 'paper'){
    console.log('You played paper');
    return choice.toLowerCase()
  } else if (choice.toLowerCase() == 'scissors'){
    console.log('You played scissors');
    return choice.toLowerCase()
  } else {
    console.log('Enter rock, paper or scissors')
    return 'Enter rock, paper or scissors'
  }
}

let hc = humanChoice();
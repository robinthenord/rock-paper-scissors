function computerChoice() {
  let random = Math.floor(Math.random() * 3)
  if (random === 0) {
    console.log('Rock');
    return 'Rock';
  } else if (random === 1) {
    console.log('paper');
    return 'Paper';
  } else {
    console.log('scissors');
    return 'Scissors';
    }
};

let pc = computerChoice();

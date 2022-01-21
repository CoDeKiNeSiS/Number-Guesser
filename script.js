let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
  
}
// SORRY FOR THE WAIT! - LiL Wayne

function compareGuesses (human, computer, target) {
  console.log(`target number is ${target}`);
  let result1 = Math.abs(target - human);
  let result2 = Math.abs(target - computer);
  if (result1 === result2) {
    return true;
  } else if (result1 < result2) {
    return true;
  } else {
    return false;
  }
}

//console.log(compareGuesses (4, 8, generateTarget()));
function updateScore(winner){
  if(winner === 'human'){humanScore++;}
  else{computerScore++;}

  console.log(` human: ${humanScore} computer ${computerScore}`);
}




//updateScore('computer');


function advanceRound() {
  currentRoundNumber++;
}


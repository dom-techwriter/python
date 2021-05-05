let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (human, computer, target) => {

    humanGuess = Math.abs(target - human);
    computerGuess = Math.abs(target - computer)

    if (humanGuess <= computerGuess) {
        return true
    } else {
        return false
    }
}

// console.log(compareGuesses(9,10,9));

const updateScore = winner => {
    if (winner == "human") {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}


const advanceRound = () => currentRoundNumber += 1;

// It works! just run it :P
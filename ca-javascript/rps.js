// Rock paper scissors

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
        return userInput;
    } else {
        console.log(`${userInput} is not a valid choice.`)
    }

};


const getComputerChoice = () => {
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
            break
        case 1:
            return "scissors";
            break
        case 2:
            return "paper";
            break
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Game is a tie";
    } 

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer won";
        } else {
            return "You won!";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "The computer won";
        } else {
            return "You won!";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "The computer won";
        } else {
            return "You won!";
        }
    }
}


const playGame = () => {
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame()
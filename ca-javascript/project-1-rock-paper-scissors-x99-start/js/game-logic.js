// All code should be written in this file.
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue,
    playerOneWins,
    playerTwoWins;

const correctMove = (moveType) => {
    return (moveType === 'rock') ||
         (moveType === 'paper') ||
         (moveType === 'scissors');
}

const correctValue = (moveValue) => {
    return (moveValue >= 1) && (moveValue <= 99);
}

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    } else if (!correctMove(moveOneType) || !correctMove(moveTwoType) || !correctMove(moveThreeType)) {
        return;
    } else if (!correctValue(moveOneValue) || !correctValue(moveTwoValue) || !correctValue(moveThreeValue)) {
        return;
    } else if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    } else if (player === "Player One") {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

const winner = (moveType1, moveValue1, moveType2, moveValue2) => {
    if (!moveType1 || !moveType2 || !moveValue1 || moveValue2){
        return null;
    } else if (moveType1 === moveType2) {
        if (moveValue1 > moveValue2) {
            return "Player One";
        } else if (moveValue1 < moveValue2) {
            return "Player Two";
        } else {
            return "Tie";
        }
    } else if (moveType1 === "paper") {
        if (moveType2 === "rock") {
            return "Player One";
    } else {
        return "Player Two"
    }
    } else if (moveType1 === "scissors") {
        if (moveType2 === "paper") {
            return "Player One";
        } else {
            return "Player Two";
        }
    } else if (moveType1 === "rock") {
        if (moveType2 === "scissors") {
            return "Player One"
        } else {
            return "Player Two"
        }
    }

const getRoundWinner = (round) => {
    if (round === 1) {
        return winner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
    } else if (round === 2) {
        return winner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
    } else if (round === 3) {
        return winner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
    } else {
        return null
    }
}

const getGameWinner = () => {
    let player1 = 0;
    let player2 = 0;

    if (getRoundWinner(1) === "Player One") {
        player1 += 1;
    } else {
        player2 += 1;
    }

    if (getRoundWinner(2) === "Player One") {
        player1 += 1;
    } else {
        player2 += 1;
    }
    if (getRoundWinner(3) === "Player One") {
        player1 += 1;
    } else {
        player2 += 1;
    }

    if (player1 < player2) {
        return "Player One"
    } else if (player1 > player2) {
        return "Player Two"
    } else {
        return "Tie"
    }
}

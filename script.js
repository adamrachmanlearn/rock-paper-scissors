// this function will generate random computer choice
function getComputerChoice() {
    // get a random number
    let num = Math.floor(Math.random() * 100);

    // pick rock, paper, or scissors base on number
    if (num <= 33) {
        return "rock";
    } else if (num > 33 && num <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// this function will compare player and computer's choice
function playRound(playerSelection, computerSelection) {
    // make input case insensitive
    let player = playerSelection.toLowerCase();

    let comp = computerSelection;

    // comparing the choices
    if (player === comp) {
        return "Draw! You're both choosing " + player + "!";
    } else if (player === "rock") {
        if (comp === "paper") {
            return "You Lose! Paper beats Rock!"
        } else {
            return "You Win! Rock beats Scissors!"
        }
    } else if (player === "paper") {
        if (comp === "scissors") {
            return "You Lose! Scissors beats Paper!"
        } else {
            return "You Win! Paper beats Rock!"
        }
    } else if (player === "scissors") {
        if (comp === "rock") {
            return "You Lose! Rock beats Scissors!"
        } else {
            return "You Win! Scissors beats Paper!"
        }
    }
}

// this function lets you to play the game five times
function playGame(){
    //initiate point
    let userPoint = 0;
    let compPoint = 0;

    for (let i = 0; i < 5; i++) {
        //get user choice
        let userSelection = prompt("Choose rock, paper, or scissors!");

        // invoke playRound to determine result
        let result = playRound(userSelection, getComputerChoice());

        // output result
        console.log(result);

        // adding point to winner
        if (result[4] === "W") {
            userPoint++;
        } else if (result[4] === "L"){
            compPoint++;
        } else {
            continue;
        }
    }

    // output winner after five games
    if (userPoint > compPoint) {
        console.log("You've Won! " + (userPoint/5)*100 + "% winrate!");
    } else if (userPoint < compPoint) {
        console.log("You've Lose! Better luck next time!");
    } else {
        console.log("Draw! Unbelievable!");
    }
}

playGame();
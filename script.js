/*
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
    let player = playerSelection;

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

const btn = document.querySelectorAll("button");
btn.forEach((item) => {
    item.addEventListener("click", playRound(item.className, getComputerChoice))
});
*/

const buttons = document.querySelectorAll("button");
let userScore = 0;
let compScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", (elem) => {
        const userChoice = elem.target.textContent.toLowerCase();
        const result = playRound(userChoice, compChoice());
        let scoreText = "";
        switch(result) {
            case "draw":
                scoreText = "Draw! You: " + userScore + " - " + compScore + " : Computer.";
                break;
            case "win":
                userScore += 1;
                scoreText = "You\'ve Won! You: " + userScore + " - " + compScore + " : Computer.";
                break;
            case "lose":
                compScore += 1;
                scoreText = "You\'ve Lose! You: " + userScore + " - " + compScore + " : Computer.";
        }
        console.log(scoreText);
    });
});

function compChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num <= 33) {
        return "rock";
    } else if (num > 33 && num <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
};

function playRound(userChoice, compChoice) {
    const player = userChoice;
    const comp = compChoice;

    if (player === comp) {
        return "draw";
    } else if (player === "rock") {
        if (comp === "paper") {
            return "lose"
        } else {
            return "win"
        }
    } else if (player === "paper") {
        if (comp === "scissors") {
            return "lose"
        } else {
            return "win"
        }
    } else if (player === "scissors") {
        if (comp === "rock") {
            return "lose"
        } else {
            return "win"
        }
    }
}
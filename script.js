const buttons = document.querySelectorAll("button");
let userScore = 0;
let compScore = 0;

const result = document.querySelector(".result");
const resultText = document.createElement("p");
const winner = document.createElement("p");
result.appendChild(resultText);

buttons.forEach((button) => {
    button.addEventListener("click", (elem) => {
        const userChoice = elem.target.textContent.toLowerCase();
        const gameResult = playRound(userChoice, compChoice());
        switch(gameResult) {
            case "draw":
                resultText.textContent = "Draw! You: " + userScore + " - " + compScore + " : Computer.";
                break;
            case "win":
                userScore += 1;
                resultText.textContent = "You\'ve Won! You: " + userScore + " - " + compScore + " : Computer.";
                break;
            case "lose":
                compScore += 1;
                resultText.textContent = "You\'ve Lose! You: " + userScore + " - " + compScore + " : Computer.";
        }
        if (userScore === 5) {
            winner.textContent = "You've Won!";
            result.appendChild(winner);
            userScore = 0;
            compScore = 0;
        } else if (compScore === 5) {
            winner.textContent = "You've Lose.";
            result.appendChild(winner);
            userScore = 0;
            compScore = 0;
        }
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
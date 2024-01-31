/*
    This function called getComputerChoice will randomly return
    rock, paper, or scissors.

    get a random number
    pick rock, paper, or scissors base on number
    return the value
*/
function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num <= 33) {
        return "Rock!";
    } else if (num > 33 && num <= 66) {
        return "Paper!";
    } else {
        return "Scissors!";
    }
}

console.log(getComputerChoice());
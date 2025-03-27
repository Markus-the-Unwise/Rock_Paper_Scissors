let getComputerChoice = function () {
    let choice = Math.random() * 3
    if (choice < 1) {
        choice = "rock"
    }
    else if (choice < 2) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice
}

let getPlayerChoice = function () {
    choice = prompt("Rock = 1, Paper = 2, Scissors = 3")
    return choice
}
console.log(getComputerChoice())
console.log(getPlayerChoice())
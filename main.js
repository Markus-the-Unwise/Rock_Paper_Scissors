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

console.log(getComputerChoice())
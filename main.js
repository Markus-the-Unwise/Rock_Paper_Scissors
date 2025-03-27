function getComputerChoice() {
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

function getPlayerChoice() {
    choice = prompt("Enter you choice (Rock, Paper or Scissors")
    return choice
}

function playRound(player, computer) {
    // player.toLowerCase()
    // Tie
    if (player == computer) {
        result = `It's a tie! Player: ${scoreP} Computer: ${scoreC}`
        return result
    }

    // remaining cases
    if (player == "rock" && computer == "scissors" || player == "scissors" && computer == "paper" || player == "paper" && computer == "rock") {
        scoreP++
        result = `You win! ${player} beats ${computer}! Player: ${scoreP} Computer: ${scoreC}`
    }
    else {
        scoreC++
        result = `You lost... ${computer} beats ${player}. Player: ${scoreP} Computer: ${scoreC}`
    }
    return result
}

function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        let player = getPlayerChoice().toLowerCase()
        let computer = getComputerChoice()
        console.log(playRound(player, computer))
    }
    // compare score
    if (scoreP == scoreC) {
        result = `Player: ${scoreP} Computer: ${scoreC}, it's a tie!`
    }
    else if (scoreP > scoreC) {
        result = `Player: ${scoreP} Computer: ${scoreC}, you win!`
    }
    else {
        result = `Player: ${scoreP} Computer: ${scoreC}, you lose...`
    }
    console.log(result)
}

// Player and Computer score
let scoreP = 0
let scoreC = 0

// let player = getPlayerChoice().toLowerCase()
// let computer = getComputerChoice()

// console.log(computer)
// console.log(player)
// console.log(playRound(player, computer))

playGame()




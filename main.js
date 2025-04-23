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
    if (player === "") {
        return
    }

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
    console.log(result)
    updateResult(result)
    // return result
}

function playGame() {

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

function updateResult(roundResult) {
    results.textContent = roundResult
    if (scoreC == 5 && gameover == false) { results.textContent += "Computer wins the game"; gameover = true }
    if (scoreP == 5 && gameover == false) { results.textContent += "Player wins the game"; gameover = true }
}

// Player and Computer score
let scoreP = 0
let scoreC = 0
let gameover = false



// playGame()

const inputSection = document.querySelector('.buttons');
const results = document.querySelector('.result')
// inputSection.addEventListener('click', (e) => console.log(e.target.id))
inputSection.addEventListener('click', function (e) { playRound(e.target.id, getComputerChoice()) })

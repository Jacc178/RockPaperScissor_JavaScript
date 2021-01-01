let playerScore = 0
let computerScore = 0
let choices = ["Rock", "Paper", "Scissor"]

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice
}

const rockButton = document.querySelector("#Rock")
const paperButton = document.querySelector("#Paper")
const scissorButton = document.querySelector("#Scissor")

rockButton.addEventListener("click", playRound)
paperButton.addEventListener("click", playRound)
scissorButton.addEventListener("click", playRound)

const playerInfoContainer = document.querySelector('#playerInfo')
const computerInfoContainer = document.querySelector('#computerInfo')

const playerChoicePara = document.createElement('p')
const computerChoicePara = document.createElement('p')

const playerScorePara = document.createElement('p')
const computerScorePara = document.createElement('p')

const resultContainer = document.querySelector("#result")
const resultPara = document.createElement('p')
const finalResultPara = document.createElement('p')

playerInfoContainer.appendChild(playerChoicePara)
playerInfoContainer.appendChild(playerScorePara)

computerInfoContainer.appendChild(computerChoicePara)
computerInfoContainer.appendChild(computerScorePara)

resultContainer.appendChild(resultPara)
resultContainer.appendChild(finalResultPara)

function playRound(e) {
    if (gameOver()) {
        resultPara.textContent = ""
        resultMessage()
        return
    }

    const playerChoice = e.target.id
    const computerChoice = computerPlay()
    updateScore(getWinner(playerChoice, computerChoice), playerChoice, computerChoice)
    updateChoice(playerChoice, computerChoice)
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie"
    }
    else if ( 
        (playerChoice === "Rock" && computerChoice === "Scissor")
        || (playerChoice === "Paper" && computerChoice === "Rock")
        || (playerChoice === "Scissor" && computerChoice === "Paper") ) {
        return "Player"
    }
    else if (
    (computerChoice === "Rock" && playerChoice === "Scissor")
    || (computerChoice === "Paper" && playerChoice === "Rock")
    || (computerChoice === "Scissor" && playerChoice === "Paper") ) {
        return "Computer"
    }
}

function updateScore(winner, playerChoice, computerChoice) {
    if (winner === "Tie") {
        resultPara.textContent = "Round Tied"
    }
    else if (winner === "Player") {
        resultPara.textContent = `${playerChoice} beats ${computerChoice}. Player Wins.`
        playerScore++
    }
    else if (winner === "Computer") {
        resultPara.textContent = `${computerChoice} beats ${playerChoice}. Computer Wins.`
        computerScore++
    }
    playerScorePara.textContent = `Player Score: ${playerScore}`
    computerScorePara.textContent = `Computer Score: ${computerScore}`
}

function updateChoice(playerChoice, computerChoice) {
    playerChoicePara.textContent = `Player Chose ${playerChoice}`
    computerChoicePara.textContent = `Computer Chose ${computerChoice}`
}

function resultMessage() {
    if (playerScore > computerScore) {
        finalResultPara.textContent = "Game over. Player Wins."
    }
    else {
        finalResultPara.textContent = "Game over. Computer Wins"
    
    }
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}
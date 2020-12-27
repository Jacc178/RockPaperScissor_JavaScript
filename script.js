let playerScore = 0
let computerScore = 0
let choices = ["rock", "paper", "scissor"]

function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice
}

function playerPlay() {
    let playerChoice = window.prompt("Enter choice").toLowerCase()
    return playerChoice
}
function round() {
    let computer = computerPlay()
    let player = playerPlay()

    if (player === computer) {
        return (`Player chose ${player} \nComputer chose ${computer} \nTie \nCurrent Player Score: ${playerScore} \nCurrent Computer Score: ${computerScore}`)
    }
    else if ( (player === "rock" && computer === "scissor")
    || (player === "paper" && computer === "rock")
    || (player === "scissor" && computer === "paper") ) {
        playerScore++ 
        return (`Player chose ${player} \nComputer chose ${computer} \n${player} beats ${computer} \nPlayer Wins Round \nCurrent Player Score: ${playerScore} \nCurrent Computer Score: ${computerScore}`)
    }
    else if (!choices.includes(player)) {
        return (`Player chose ${player} \nComputer chose ${computer} \nPlayer Choice is invalid. Enter rock, paper or scissor. \nCurrent Player Score: ${playerScore} \nCurrent Computer Score: ${computerScore}`)
    }
    else {
        computerScore++ 
        return (`Player chose ${player} \nComputer chose ${computer} \n${computer} beats ${player} \nComputer Wins Round \nCurrent Player Score: ${playerScore} \nCurrent Computer Score: ${computerScore}`)
    }
}
for (let i = 0; i < 5; i++) {
    console.log(round())
}

console.log(`\n\nFinal Player Score: ${playerScore} \nFinal Computer Score: ${computerScore}`)

if (playerScore === computerScore) {
    console.log("Tie")
}
else if (playerScore > computerScore) {
    console.log("Player Wins")
}
else {
    console.log("Computer Wins")
}


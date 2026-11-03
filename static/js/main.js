function getComputerChoice() {
    let result = Math.random() * 3
    if (result < 1) {
        return "Rock"
    } else if (result < 2) {
        return "Paper"
    }
    return "Scizors"
}

function getHumanChoice() {
    return prompt("Enter your move")
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        const localHumanChoice = humanChoice.toLowerCase()
        const localComputerChoice = computerChoice.toLowerCase()

        if (localComputerChoice === "rock") {
            if (localHumanChoice === "paper") {
                console.log("You win! Paper beats rock!")
                humanScore++
            } else if (localHumanChoice === "scizors") {
                console.log("You lose! Rock beats scizors!")
                computerScore++
            }
        } else if (localComputerChoice === "paper") {
            if (localHumanChoice === "rock") {
                console.log("You lose! Paper beats rock!")
                computerScore++
            }
            if (localHumanChoice === "scizors") {
                console.log("You win! Scizors beat paper!")
                humanScore++
            }
        } else if (localComputerChoice === "scizors") {
            if (localHumanChoice === "paper") {
                console.log("You lose! Scizors beat paper!")
                computerScore++
            } if (localHumanChoice === "rock") {
                console.log("You win! Rock beats scizors!")
                humanScore++
            }
        }
        if (localComputerChoice === localHumanChoice) {
            console.log("It's a tie!")
        }
        console.log(`Current score is: Player-${humanScore} and Computer-${computerScore}`)
    }

    let computer
    let human

    for (let i = 0; i < 5; i++) {
        computer = getComputerChoice()
        human = getHumanChoice()
        playRound(human, computer)
    }
    if (computerScore < humanScore) {
        console.log("You win! Congratulations!")
    } else if (computerScore > humanScore) {
        console.log("You lost... Better luck next time!")
    } else {
        console.log("It's a tie! Friendship wins!")
    }
}

playGame()






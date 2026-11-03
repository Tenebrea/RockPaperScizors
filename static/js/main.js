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

let humanScore = 0
let computerScore = 0

let computer = getComputerChoice()
let human = getHumanChoice()


console.log(`Computer has ${computer} and player has ${human}`)

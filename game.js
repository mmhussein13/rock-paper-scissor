const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let yourChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML =  yourChoice
    generateComuterChoice()
    getResult()
}))

function generateComuterChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === yourChoice) {
        result = "it's a draw!"
    }
    if (computerChoice === "Rock" && yourChoice === "Paper") {
        result = "You Won!"
    }
    if (computerChoice === "Rock" && yourChoice === "Scissoors") {
        result = "You Lost!"
    }
    if (computerChoice === "Paper" && yourChoice === "Paper") {
        result = "You Won!"
    }
    if (computerChoice === "Paper" && yourChoice === "Rock") {
        result = "You Lost!"
    }
    if (computerChoice === "Scissors" && yourChoice === "Rock") {
        result = "You won!"
    }
    if (computerChoice === "Scissors" && yourChoice === "Paper") {
        result = "You Lost!"
    }
    resultDisplay.innerHTML = result
}

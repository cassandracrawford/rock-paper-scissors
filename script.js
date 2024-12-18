let humanSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener("click", () => {
    humanSelection = "rock";
    playGame(humanSelection);
});

paper.addEventListener("click", () => {
    humanSelection = "paper";
    playGame(humanSelection);
});

scissors.addEventListener("click", () => {
    humanSelection = "scissors";
    playGame(humanSelection);
});

function getComputerChoice() {
    let computerChoice;
    let value;

    value = Math.floor(Math.random() * 3) + 1;
    switch(value) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    };

    return computerChoice;
};




function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) 
    {
        document.getElementById("result").textContent = "It's a tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")) 
    {
        document.getElementById("result").textContent = "You won!";
        console.log(`You won! ${humanChoice} beats Scissor ${computerChoice}`);
    } else {
        document.getElementById("result").textContent = "You lose!";
        console.log(`You won! ${computerChoice} beats Scissor ${humanChoice}`);
    }
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
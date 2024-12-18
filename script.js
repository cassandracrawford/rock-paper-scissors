let humanScore = 0;
let computerScore = 0;

playGame();

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

function getHumanChoice() {
    let choiceFlag = false;

    while (!choiceFlag) {
        let humanChoice = prompt("Rock, Paper, or Scissors: ").toLowerCase();
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            choiceFlag = true;
            return humanChoice;
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") || 
        (humanChoice == "scissors" && computerChoice == "rock")) 
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")) 
    {
        console.log(`You won! ${humanChoice} beats Scissor ${computerChoice}`);
        humanScore++;
    } else {
        console.log("Please play again");
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
}
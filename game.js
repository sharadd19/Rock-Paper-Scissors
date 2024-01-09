let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');

getComputerChoice = () => {
    let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    let rockPaperSciccorsChoice = rockPaperScissors[Math.floor(Math.random() * 3)];
    return rockPaperSciccorsChoice;    
}

disableButtons = () => {
    buttons.forEach(button => {
        button.disabled = true;
    })
}
computerWinsScoreMessage = (message, computerSelection, playerSelection, playerWins, computerWins) => {
    message = `Computer wins. ${computerSelection} beats ${playerSelection} \n Player Score: ${playerWins} Computer Score: ${computerWins}`;
    console.log(message);
    return message;
}
playerWinsScoreMessage = (message, computerSelection, playerSelection, playerWins, computerWins) => {
    message += `You win! ${playerSelection} beats ${computerSelection} \n Player Score: ${playerWins} Computer Score: ${computerWins}`;
    return message;
}
playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toUpperCase();
    console.log([playerSelection, computerSelection]);
    let result = "";
    if ((playerSelection === "ROCK" && computerSelection === "ROCK") || 
        (playerSelection === "PAPER" && computerSelection === "PAPER") || 
        (playerSelection === "SCISSORS" && computerSelection === "SCISSORS")) {
            result += "Game is a tie. You both chose " + playerSelection + "\n Player Score:" + playerWins + " Computer Score: " + computerWins;
    }
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "PAPER") { 
                computerWins += 1;
                result += computerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            if (computerSelection === "SCISSORS") {
                playerWins += 1;
                result += playerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            break;
        case "PAPER":
            if (computerSelection === "ROCK") {
                playerWins += 1;
                result += playerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            if (computerSelection === "SCISSORS") {
                computerWins += 1;
                result += computerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            break;
        case "SCISSORS":
            if (computerSelection === "ROCK") {
                computerWins += 1;
                result += computerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
           }
            if (computerSelection === "PAPER") {
                playerWins += 1;
                result += playerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            break;
        default:
    }
    document.getElementById('results').innerText = result;

    if (playerWins === 5) {
        alert ("YOU WIN!!!");
        disableButtons();
    }
    else if (computerWins === 5) {
        alert("YOU LOSE!");
        disableButtons();
    }
    return
}


game = () => {

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id, getComputerChoice());
        });
    });   
}

game();




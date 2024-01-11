let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

getComputerChoice = () => {
    let rockPaperScissors = [rock, paper, scissors];
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
    if ((playerSelection === rock && computerSelection === rock) || 
        (playerSelection === paper && computerSelection === paper) || 
        (playerSelection === scissors && computerSelection === scissors)) {
            result += "Game is a tie. You both chose " + playerSelection + "\n Player Score:" + playerWins + " Computer Score: " + computerWins;
    }
    switch (playerSelection) {
        case rock:
            if (computerSelection === paper) { 
                computerWins += 1;
                result += computerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            if (computerSelection === scissors) {
                playerWins += 1;
                result += playerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            break;
        case paper:
            if (computerSelection === rock) {
                playerWins += 1;
                result += playerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            if (computerSelection === scissors) {
                computerWins += 1;
                result += computerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
            }
            break;
        case scissors:
            if (computerSelection === rock) {
                computerWins += 1;
                result += computerWinsScoreMessage(message="", computerSelection, playerSelection, playerWins, computerWins);
           }
            if (computerSelection === paper) {
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




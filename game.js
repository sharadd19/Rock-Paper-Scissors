let playerWins = 0;
let computerWins = 0;

getComputerChoice = () => {
    let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    let rockPaperSciccorsChoice = rockPaperScissors[Math.floor(Math.random() * 3)];
    return rockPaperSciccorsChoice;    
}

playRound = (playerSelection, computerSelection) => {
    if ((playerSelection === "ROCK" && computerSelection === "ROCK") || (playerSelection === "PAPER" && computerSelection === "PAPER") || (playerSelection === "SCISSORS" && computerSelection === "SCISSORS")) {
        alert("The game is a tie!");
    }
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "PAPER") {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
                computerWins += 1;
            }
            if (computerSelection === "SCISSORS") {
                alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                playerWins +=1 ;
            }
            break;
        case "PAPER":
            if (computerSelection === "ROCK") {
                alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                playerWins +=1 ;
            }
            if (computerSelection === "SCISSORS") {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
                computerWins += 1;
            }
            break;
        case "SCISSORS":
            if (computerSelection === "ROCK") {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
                computerWins += 1;

            }
            if (computerSelection === "PAPER") {
                alert(`You Win! ${playerSelection} beats ${computerSelection}`);
                playerWins +=1 ;
            }
            break;
        default:
    }
}

game = () => {
    for (let i = 0; i<5; i++) {
        let playerSelection = prompt("Type 'ROCK', 'PAPER' or 'SCISSORS' to play!");
        playerSelection = playerSelection.toUpperCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection); 
    }
    if (playerWins > computerWins) {
        alert(`You are the winner! You won ${playerWins} times!`);
    }
    else if (computerWins > playerWins) {
        alert(`You are the loser! The computer won ${computerWins} times!`);
    }
    else if (playerWins === computerWins) {
        alert('The game is a draw!!');
    }
}

game();




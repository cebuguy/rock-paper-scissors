//computer decision function, returns either rock, paper, 
//or scissors
function computerPlay() {
    const num = Math.floor(Math.random() * 3);
    if(num === 1) return "ROCK";
    else if (num === 2) return "PAPER";
    else return "SCISSORS";
}
//runs exactly 1 round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection==="ROCK" && computerSelection==="ROCK"):
            console.log(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
            return 'tie';
        case (playerSelection==="ROCK" && computerSelection==="SCISSORS"):
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 'win';
        case (playerSelection==="ROCK" && computerSelection==="PAPER"):
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            return 'lose';
        case (playerSelection==="PAPER" && computerSelection==="PAPER"):
            console.log(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
            return 'tie';
        case (playerSelection==="PAPER" && computerSelection==="ROCK"):
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 'win';
        case (playerSelection==="PAPER" && computerSelection==="SCISSORS"):
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            return 'lose';
        case (playerSelection==="SCISSORS" && computerSelection==="SCISSORS"):
            console.log(`It's a tie! ${playerSelection} ties with ${computerSelection}`);
            return 'tie';
        case (playerSelection==="SCISSORS" && computerSelection==="PAPER"):
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 'win';
        case (playerSelection==="SCISSORS" && computerSelection==="ROCK"):
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            return 'lose';
        default:
            break;    
        }
        
}

//plays 5 rounds of rock-paper-scissors

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i=0; i<5; i++) {
    let playerSelection = prompt("Pick: Rock, Paper, or Scissors.");
    result = playRound(playerSelection.toUpperCase(),computerPlay());
    if (result === 'win') playerScore++;
    else if (result === 'lose') computerScore++;
    console.log(`Player Score:${playerScore} || Computer Score:${computerScore}`);
    }

    if(playerScore > computerScore) console.log('Congrats, you win the game!')
    else if(playerScore < computerScore) console.log('Sorry, you lost the game.')
    else console.log('You tied the game.')
}

game();
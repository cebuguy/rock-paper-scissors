//global score/round counters
let playerScore = 0;
let compScore = 0;
let round = 0;

//reference buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

//reference action/score
const scoreBox = document.getElementById('score');
const actionBox = document.getElementById('action');

//computer plays based on randomness
const computerPlay = function() {
    const num = Math.floor(Math.random() * 3);
    if(num === 1) return "rock";
    else if (num === 2) return "paper";
    else return "scissors";
};

const displayScore = function(choice) {
    if(choice === 'win') actionBox.textContent = 'You win this round.';
    else if(choice === 'lose') actionBox.textContent = 'You lose this round.';
    else if(choice === 'tie') actionBox.textContent = 'It\'s a tie';

    scoreBox.textContent = 'Round: ' + round + 
    '\nPlayer Score: ' + playerScore + 
    '\nComputer Score: ' + compScore;
}

//runs exactly 1 round of rock-paper-scissors
const playRound = function() {
    const playerChoice = this.id;
    const compChoice = computerPlay();
    console.log(playerChoice);
    console.log(compChoice);
    switch (true) {
        case (playerChoice === 'rock' && compChoice === 'rock'):
            round++;
            displayScore('tie');
            break;
        case (playerChoice === 'rock' && compChoice === 'scissors'):
            round++;
            playerScore++;
            displayScore('win');
           break;
        case (playerChoice === 'rock' && compChoice === 'paper'):
            round++;
            compScore++;
            displayScore('lose');
            break;
        case (playerChoice === 'paper' && compChoice === 'paper'):
            round++;
            displayScore('tie');
            break;
        case (playerChoice === 'paper' && compChoice === 'rock'):
            round++;
            playerScore++;
            displayScore('win');
            break;
        case (playerChoice === 'paper' && compChoice === 'scissors'):
            round++;
            compScore++;
            displayScore('lose');
            break;
        case (playerChoice === 'scissors' && compChoice === 'scissors'):
            round++;
            displayScore('tie');
            break;
        case (playerChoice === 'scissors' && compChoice === 'paper'):
            round++;
            playerScore++;
            displayScore('win');
            break;
        case (playerChoice === 'scissors' && compChoice === 'rock'):
            round++;
            compScore++;
            displayScore('lose');
            break;          
    }
};

//activates on 5th round
const checkWinner = function() {
    if(round < 5) return;

    if(playerScore > compScore) actionBox.textContent = "Congratulations, you win the game!";
    if(playerScore < compScore) actionBox.textContent = "Sorry, you lost the game.";
    if(playerScore === compScore) actionBox.textContent = "You tied the game.";

    round = 0;
}
    
//play game when clicked and check winner after 5 rounds
rockBtn.addEventListener('click', playRound);
rockBtn.addEventListener('click', checkWinner);
paperBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', checkWinner);
scissorsBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', checkWinner);
          
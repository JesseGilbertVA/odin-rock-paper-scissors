function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let selection = options[Math.floor(Math.random() * options.length)];
    console.log(`Computer selected: ${selection}`)
    return selection;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return `Computer also chose ${computerSelection}. It is a tie!`
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'Rock beats scissors, player wins!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'Paper beats rock, computer wins!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'Paper beats rock, player wins!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'Scissors beats paper, computer wins!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'Scissors beats paper, player wins!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'Rock beats paper, computer wins!'
    }
    else {
        return 'Something went wrong, did you enter a valid input?'
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
    while (gamesPlayed < 5){
        const playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)
        if (result.includes('player wins!')){
            ++playerScore
        }
        if (result.includes('computer wins!')){
            ++computerScore
        }
        console.log(`The score is Player: ${playerScore} Computer: ${computerScore}`)
        ++gamesPlayed
    }
}

console.log(playGame());
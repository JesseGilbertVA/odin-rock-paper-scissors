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

const playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
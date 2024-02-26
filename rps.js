function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];
    let selection = options[Math.floor(Math.random() * options.length)];
    return selection;
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
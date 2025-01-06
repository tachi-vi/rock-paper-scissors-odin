console.log("Hello World");

function getComputerChoice(){
    let num = Math.random();
    if (num < 0.33){
        return "rock";
    }
    else if (num < 0.66){
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice(){
    choice = prompt("Select Your Choice: ");
    return choice.replace(/\s+/g, '').toLowerCase();
}

function playRound(humanChoice, computerChoice){     
    if (humanChoice === computerChoice) {
        console.log("Oof Draw");
        return 0;
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')
    ) {
        console.log("You Win!");
        return 2;
    } else {
        console.log("Computer Wins!");
        return 1;
    }
}

function playGame(){
    var humanScore=0;
    var computerScore=0;
    for (i=0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result==2){
            humanScore+=1;
        }
        else if (i==result){
            computerScore+=1;
        }
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

playGame();
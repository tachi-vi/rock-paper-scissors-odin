function getComputerChoice(){
    let num = Math.random();
    if (num < 0.33){
        return "Rock";
    }
    else if (num < 0.66){
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function computeRound(humanChoice, computerChoice){   
    computerChoice=computerChoice.toLowerCase();
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
        const rock = document.querySelector("#Rock");
        const scissor = document.querySelector("#Scissor");
        const paper = document.querySelector("#Paper");

        rock.addEventListener("click", () => {
            const result = playRound('rock', computerChoice);
            if (result==2){
                humanScore+=1;
            }
            else if (1==result){
                computerScore+=1;
            }
            else{

            }
        });

        scissor.addEventListener("click", () => {
            const result = playRound('rock', computerChoice);
            if (result==2){
                humanScore+=1;
            }
            else if (1==result){
                computerScore+=1;
            }
            else{

            }

        });


        paper.addEventListener("click", () => {
            const result = playRound('rock', computerChoice);
            if (result==2){
                humanScore+=1;
            }
            else if (1==result){
                computerScore+=1;
            }
            else{
                
            }
        });
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}


const content = document.querySelector(".content");
const btn = document.querySelector("#pgb");
const playingscreen = document.querySelector(".playing-screen");

btn.addEventListener("click", () => {
    console.log("Play Button Clicked");
    btn.classList.add("hidden");
    playingscreen.classList.remove("hidden");
  });

const rock = document.querySelector("#Rock");
const scissor = document.querySelector("#Scissor");
const paper = document.querySelector("#Paper");

var humanScore=0;
var computerScore=0;
var currentround=2;



function playOneRound (humanChoice){
    roundCounter.textContent = 'Round No: ' + currentround;
    let computerChoice=getComputerChoice();
    result=computeRound(humanChoice,computerChoice);
    const computerChoiceDOM=document.querySelector('#computerchoice');
    const humanChoiceDOM=document.querySelector('#humanChoice');
    humanChoiceDOM.textContent="You Chose "+ humanChoice;
    computerChoiceDOM.textContent="Computer Chose "+ computerChoice;
    const resulttext=document.querySelector('#resulttext');
    if (result==2){
        humanScore+=1;
        resulttext.textContent="Shaabash Londe, Jeet Gaya!!";
        

    }
    else if (1==result){
        resulttext.textContent="tatta haar gaya :(";
        computerScore+=1;
        
    }
    else{
        resulttext.textContent="draw hogaya madarchod";
    }

    humanScoreHTML.textContent='Your Score: '+humanScore;
    computerScoreHTML.textContent='Computer Score: '+computerScore;
    currentround++; 
    if (currentround>6){
        playingscreen.classList.add("hidden");
    }
  }

var roundCounter=document.querySelector('#roundcounter');

var computerScoreHTML=document.querySelector('#computerscore');
var humanScoreHTML=document.querySelector('#humanscore');

rock.addEventListener("click", () => {playOneRound('Rock');});
scissor.addEventListener("click", () => {playOneRound('Scissor');});
paper.addEventListener("click", () => {playOneRound('Paper');});

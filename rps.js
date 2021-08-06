let playerScore = 0;
let computerScore = 0;
function computerPlay()
{
    let randomNum = Math.random();
    if (randomNum >= 0 && randomNum < 0.3) 
        return "Rock";
    else if (randomNum >= 0.3 && randomNum < 0.6) 
        return "Paper";
    else
        return "Scissors";
}

function initialState(v=0)
{
        document.getElementById('result').innerHTML = "";
        document.getElementById('winner').innerHTML = "";
        document.getElementById('score').innerHTML = "";

    computerScore = playerScore = 0;
}

function singleRound(e)
{
    let rockReg=/rock/i;
    let paperReg=/paper/i;
    let scissorsReg=/scissors/i;
    let computerSelection = computerPlay();
    const result= document.getElementById('result');
    const score= document.getElementById('score');
    document.getElementById('winner').innerHTML = "";
    score.innerHTML="";

    if (rockReg.test(e.target.id))
    {
        if (computerSelection === "Rock")
        {   
            result.innerText = "Rock vs rock";
            
        }
        else if (computerSelection === "Paper")
        {
            result.innerText = "Paper beats Rock";
            ++computerScore;
            
        }
        else if (computerSelection === "Scissors")
        {
            result.innerText = "Rock beats Scissors";
            ++playerScore;
        }
    }

    else if (paperReg.test(e.target.id))
    {
        if (computerSelection === "Rock")
        {    
            result.innerText = "Paper beats Rock";
            ++playerScore;
        }        
        else if (computerSelection === "Paper")
        {            
            result.innerText = "Paper vs paper";
            
        }        
        else if (computerSelection === "Scissors")
        {                
            result.innerText = "Scissors beat Paper";
            ++computerScore;
        }    
    }

    else if (scissorsReg.test(e.target.id))
    {
        if (computerSelection === "Rock")
        {            
            result.innerText = "Rock beats Scissors";
            ++computerScore;
        }        
        else if (computerSelection === "Paper")
        {            
            result.innerText = "Scissors beat Paper";
            ++playerScore;
        }        
        else if (computerSelection === "Scissors")
        {            
            result.innerText = "scissors vs scissors";
            
        }    
    }
    score.innerHTML= "player score: "+playerScore+"<br>computer score: "+computerScore;
    if (playerScore === 5 && computerScore !== 5)
    {
        document.getElementById('winner').innerHTML = "You win this match!";
        computerScore = playerScore = 0;

    }
    else if (computerScore === 5 && playerScore !== 5)
    {
        document.getElementById('winner').innerHTML = "You lost this match";
        computerScore = playerScore = 0;
    }
    
}

const button_arr = document.querySelectorAll('.hand')
button_arr.forEach(
    button => button.addEventListener('click', singleRound)
)
document.querySelector("#newgame").addEventListener('click', initialState);



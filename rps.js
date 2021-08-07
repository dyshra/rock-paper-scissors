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
        document.getElementById('result-1').innerHTML = "";
        document.getElementById('result-2').innerHTML = "";
        document.getElementById('winner').innerHTML = "First one to score 5 points, wins!";
        document.getElementById('p-score').innerHTML = "";
        document.getElementById('c-score').innerHTML = "";

    computerScore = playerScore = 0;
}

function singleRound(e)
{
    let rockReg=/rock/i;
    let paperReg=/paper/i;
    let scissorsReg=/scissors/i;
    let computerSelection = computerPlay();
    const result_1= document.getElementById('result-1');
    const result_2= document.getElementById('result-2');

    const p_score= document.getElementById('p-score');
    const c_score= document.getElementById('c-score');

    if (rockReg.test(e.target.id))
    {
        result_1.innerHTML = "Rock"
        if (computerSelection === "Rock")
        {   
            result_2.innerHTML = "Rock";
            
        }
        else if (computerSelection === "Paper")
        {
            result_2.innerHTML = "Paper";
            ++computerScore;
            
        }
        else if (computerSelection === "Scissors")
        {
            result_2.innerHTML = "Scissors";
            ++playerScore;
        }
    }

    else if (paperReg.test(e.target.id))
    {
        result_1.innerHTML = "Paper";
        if (computerSelection === "Rock")
        {    
            result_2.innerHTML = "Rock";
            ++playerScore;
        }        
        else if (computerSelection === "Paper")
        {            
            result_2.innerHTML = "Paper";            
        }        
        else if (computerSelection === "Scissors")
        {                
            result_2.innerHTML = "Scissors";
            ++computerScore;
        }    
    }

    else if (scissorsReg.test(e.target.id))
    {
        result_1.innerHTML = "Scissors";
        if (computerSelection === "Rock")
        {            
            result_2.innerHTML = "Rock";
            ++computerScore;
        }        
        else if (computerSelection === "Paper")
        {            
            result_2.innerHTML = "Paper";
            ++playerScore;
        }        
        else if (computerSelection === "Scissors")
        {            
            result_2.innerHTML = "Scissors";
            
        }    
    }
    p_score.innerHTML= playerScore;
    c_score.innerHTML=computerScore;
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

initialState();
document.querySelector("#newgame").addEventListener('click', initialState);
const button_arr = document.querySelectorAll('.hand')
button_arr.forEach(
    button => button.addEventListener('click', singleRound)
)




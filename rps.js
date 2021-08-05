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

function singleRound(e)
{
    let rockReg=/rock/i;
    let paperReg=/paper/i;
    let scissorsReg=/scissors/i;
    let computerSelection = computerPlay();
    const result= document.getElementById('result');

    if (rockReg.test(e.target.id))
    {
        if (computerSelection === "Rock")
        {   
            result.innerText = "It's a Tie!";
            return 0;
        }
        else if (computerSelection === "Paper")
        {
            result.innerText = "You lose! Paper beats Rock";
            return -1;
        }
        else if (computerSelection === "Scissors")
        {
            result.innerText = "You win! Rock beats Scissors";
            return 1;
        }
    }

    else if (paperReg.test(e.target.id))
    {
        if (computerSelection === "Rock")
        {    
            result.innerText = "You win! Paper beats Rock";
            return 1;
        }        
        else if (computerSelection === "Paper")
        {            
            result.innerText = "It's a Tie!";
            return 0;
        }        
        else if (computerSelection === "Scissors")
        {                
            result.innerText = "You lose! Scissors beat Paper";
            return -1;
        }    
    }

    else if (scissorsReg.test(e.target.id))
    {
        if (computerSelection === "Rock")
        {            
            result.innerText = "You lose! Rock beats Scissors";
            return -1;
        }        
        else if (computerSelection === "Paper")
        {            
            result.innerText = "You win! Scissors beat Paper";
            return 1;
        }        
        else if (computerSelection === "Scissors")
        {            
            result.innerText = "It's a Tie!";
            return 0;
        }    
    }
    else
    {
        result.innerText = "Please enter one of the options";
        return -2;
    }
}

const button_arr = document.querySelectorAll('button')
button_arr.forEach(button => button.addEventListener('click', singleRound))

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

function singleRound(playerSelection, computerSelection)
{
    let rockReg=/rock/i;
    let paperReg=/paper/i;
    let scissorsReg=/scissors/i;

    if (rockReg.test(playerSelection))
    {
        if (computerSelection === "Rock")
        {   
            console.log("It's a Tie!");
            return 0;
        }
        else if (computerSelection === "Paper")
        {
            console.log("You lose! Paper beats Rock");
            return -1;
        }
        else if (computerSelection === "Scissors")
        {
            console.log("You win! Rock beats Scissors");
            return 1;
        }
    }

    else if (paperReg.test(playerSelection))
    {
        if (computerSelection === "Rock")
        {    
            console.log("You win! Paper beats Rock");
            return 1;
        }        
        else if (computerSelection === "Paper")
        {            
            console.log("It's a Tie!");
            return 0;
        }        
        else if (computerSelection === "Scissors")
        {                
            console.log("You lose! Scissors beat Paper");
            return -1;
        }    
    }

    else if (scissorsReg.test(playerSelection))
    {
        if (computerSelection === "Rock")
        {            
            console.log("You lose! Rock beats Scissors");
            return -1;
        }        
        else if (computerSelection === "Paper")
        {            
            console.log("You win! Scissors beat Paper");
            return 1;
        }        
        else if (computerSelection === "Scissors")
        {            
            console.log("It's a Tie!");
            return 0;
        }    
    }
    else
    {
        console.log("Please enter one of the options");
        return -2;
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++)
    {
        let playerSelection = prompt("Rock, Paper or Scissors?");

        let computerSelection = computerPlay();
        let result = singleRound(playerSelection, computerSelection);

        if (result === 1)
            ++playerScore;
        else if (result === -1)
            ++computerScore;
        else if (result === -2)
            singleRound();

        console.log("Your score: "+playerScore);
        console.log("Computer's score: "+computerScore);
    }

    if (playerScore > computerScore)
        console.log("You win this game! ");
    else
        console.log("You lost this game :(");
}

game();
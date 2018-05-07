const gameOutcomeDisplay = document.getElementById("gameOutcome");
const gameMoveButtons = document.getElementsByClassName("moveButton");
const newGameButton = document.getElementById("newGameButton");

const scoreWonText = document.getElementById("scoreWon");
const scoreLostText = document.getElementById("scoreLost");
const scoreDrewText = document.getElementById("scoreDrew");

let scoreWon = 0;
let scoreLost = 0;
let scoreDrew = 0;

function PlayGame(playerMove)
{
    for(let i = 0; i < gameMoveButtons.length; i++)
    {
        gameMoveButtons[i].setAttribute("class", "moveButton btn btn-primary btn-lg btn-block d-none");
    }

    let playerTwoMove = ComputerMove();

    gameOutcomeDisplay.setAttribute("class", "");
    gameOutcomeDisplay.innerText = "rock";

    setTimeout(function(){
        gameOutcomeDisplay.innerText = "paper";
    }, 500);

    setTimeout(function(){
        gameOutcomeDisplay.innerText = "scissors";
    }, 1000);
    
    setTimeout(function(){
        gameOutcomeDisplay.innerText = "lizard";
    }, 1500);
    
    setTimeout(function(){
        gameOutcomeDisplay.innerText = "spock";
    }, 2000);


    setTimeout(function(){
        gameOutcomeDisplay.innerText = SetOutcome(playerMove, playerTwoMove);
        scoreWonText.innerText = scoreWon;
        scoreLostText.innerText = scoreLost;
        scoreDrewText.innerText = scoreDrew;
        newGameButton.setAttribute("class", "btn btn-primary btn-lg btn-block");
    }, 2500);
}

function ComputerMove()
{    
    switch(Math.floor(Math.random() * 5))
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        case 3:
            return "lizard";
            break;
        case 4:
            return "spock";
        default:
            return "error";
            break;
    }
}

function SetOutcome(playerMove, playerTwoMove)
{
    if(playerTwoMove === "error")
    {
        return "Error selecting computer move";
    }
    else if(playerTwoMove === "rock")
    {
        switch(playerMove)
        {
            case "rock":
                return SetOutcomeText(playerMove, playerTwoMove, 2);
                break;
            case "paper":
            case "spock":
                return SetOutcomeText(playerMove, playerTwoMove, 0);
                break;
            case "scissors":
            case "lizard":
                return SetOutcomeText(playerMove, playerTwoMove, 1);
                break;
        }
    }
    else if(playerTwoMove === "paper")
    {
        switch(playerMove)
        {
            case "rock":
            case "spock":
                return SetOutcomeText(playerMove, playerTwoMove, 1);
                break;
            case "paper":
                return SetOutcomeText(playerMove, playerTwoMove, 2);
                break;
            case "scissors":
            case "lizard":
                return SetOutcomeText(playerMove, playerTwoMove, 0);
                break;
        }
    }
    else if(playerTwoMove === "scissors")
    {
        switch(playerMove)
        {
            case "rock":
            case "spock":
                return SetOutcomeText(playerMove, playerTwoMove, 0);            
                break;
            case "paper":
            case "lizard":
                return SetOutcomeText(playerMove, playerTwoMove, 1);
                break;
            case "scissors":
                return SetOutcomeText(playerMove, playerTwoMove, 2);
                break;
        }
    }
    else if(playerTwoMove === "lizard")
    {
        switch(playerMove)
        {
            case "rock":
            case "scissors":
                return SetOutcomeText(playerMove, playerTwoMove, 0);
                break;
            case "spock":
            case "paper":
                return SetOutcomeText(playerMove, playerTwoMove, 1);
                break;

            case "lizard":
                return SetOutcomeText(playerMove, playerTwoMove, 2);
                break;
        }
    }
    else if(playerTwoMove === "spock")
    {
        switch(playerMove)
        {
            case "lizard":
            case "paper":
                return SetOutcomeText(playerMove, playerTwoMove, 0);
                break;
            case "scissors":
            case "rock":
                return SetOutcomeText(playerMove, playerTwoMove, 1);
                break;
            case "spock":
                return SetOutcomeText(playerMove, playerTwoMove, 2);
                break;
        }
    }
}

// Outcome 0=playeronewin 1=playertwowin 2=draw
function SetOutcomeText(p1Move, p2Move, result)
{
    switch(result)
    {
        case 0:
            scoreWon++;
            return `You threw ${p1Move} and the computer threw ${p2Move}.\nYou win!`;
            break;
        case 1:
            scoreLost++;
            return `You threw ${p1Move} and the computer threw ${p2Move}.\nYou Lose!`;
            break;
        case 2:
            scoreDrew++;
            return `You threw ${p1Move} and the computer threw ${p2Move}.\nDraw!`;
            break;
    }
}

function NewGame()
{
    gameOutcomeDisplay.setAttribute("class", "btn btn-primary btn-lg btn-block d-none");

    newGameButton.setAttribute("class", "btn btn-primary btn-lg btn-block d-none");

    for(let i = 0; i < gameMoveButtons.length; i++)
    {
        gameMoveButtons[i].setAttribute("class", "moveButton btn btn-primary btn-lg btn-block");
    }
}

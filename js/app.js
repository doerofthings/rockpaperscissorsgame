
let computerPlay = () => {
    const gameSelections = ["Rock", "Paper", "Scissors"];
    return gameSelections[Math.floor(Math.random()*gameSelections.length)].toLowerCase();
}


let roundOne = (playerSelection, computerSelection) => {

    playerSelection = prompt("What is the users choice");
let roundOne = (playerSelection, computerSelection) => {
    computerPlay()
    computerSelection = computerPlay();
    console.log(computerSelection)

        if (playerSelection === computerSelection){
            console.log("This is a tie ");
            return "This is a tie ";
        } else if(playerSelection === "rock" && computerSelection === "paper"){
            console.log("Rock loses to Paper")
            return "Rock loses to Paper";
        }
        else if(playerSelection === "rock" && computerSelection === "scissors"){
            console.log("Rock beats Scissors")
            return "Rock beats Scissors";
        } 
        else if(playerSelection === "paper" && computerSelection === "scissors"){
            console.log("Paper Loses to Scissors")
            return "Paper Loses to Scissors";
        } 
        else if(playerSelection === "paper" && computerSelection === "rock"){
            console.log("Paper beats Rock")
            return "Paper beats Rock";
        } 
        else if(playerSelection === "scissors" && computerSelection === "rock"){
            console.log("Scissors loses to Rock")
            return "Scissors loses to Rock";
        } 
        else if(playerSelection === "scissors" && computerSelection === "paper"){
            console.log("Scissors beats Paper");
            return "Scissors beats Paper";
        } 


    if (playerSelection === computerSelection){
        console.log("This is a tie ");
        return "This is a tie";
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Rock loses to Paper")
        return "Rock loses to Paper";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Rock beats Scissors")
        return "Rock beats Scissors";
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Paper Loses to Scissors")
        return "Paper Loses to Scissors";
    } 
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("Paper beats Rock")
        return "Paper beats Rock";
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Scissors loses to Rock")
        return "Scissors loses to Rock";
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Scissors beats Paper");
        return "Scissors beats Paper";
    } 

}
}

for(let i = 1; i < 6; i++){
    console.log(roundOne(i))
   roundOne(i)

}




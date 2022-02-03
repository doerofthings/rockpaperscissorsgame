let computerPlay = () => {
    const gameSelections = ["Rock", "Paper", "Scissors"];
    return gameSelections[Math.floor(Math.random()*gameSelections.length)].toLowerCase();
}

const scoreContainer = document.querySelector('.score-container')
let win = "You Win!";
let lose = "Computer Wins";
const winnerContainer = document.querySelector('.winner');
const playerWins = document.createElement('p');
playerWins.textContent = `${win}`;
const computerWins = document.createElement('p');
computerWins.textContent = `${lose}`
const tieGame = document.createElement("p");
let computerWinsOutput = "";
let playerWinsOutput = "";
let tie = "";
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let tiedUp = "";
let playerIsWinner = document.createElement('p');
playerIsWinner.textContent = "you won the game";
playerIsWinner.classList.add('show-modal')
playerIsWinner.classList.add('winner-message')
let computerIsWinner = document.createElement('p');
computerIsWinner.textContent = "Computer won the game";
computerIsWinner.classList.add('show-modal')
computerIsWinner.classList.add('winner-message')

const playerScoreContainer = document.querySelector('.players-score');
playerScoreContainer.innerHTML = 0
const computerScoreContainer = document.querySelector('.computer-score')
computerScoreContainer.innerHTML = 0
const computerSelectionContainer = document.querySelector('.computer-selection-container')
const playerSelectionContainer = document.querySelector('.player-selection-container')


let roundOne = (playerSelection, computerSelection) => {
    playerSelection = event.currentTarget.textContent;
    playerSelection = playerSelection.toLowerCase().trim()
    console.log(playerSelection)
    computerPlay()
    computerSelection = computerPlay();
    console.log(computerSelection)
   
  
    if (playerSelection === computerSelection){
        document.querySelector(".winner").textContent = '';
        playerSelectionContainer.innerHTML = " ";
        computerSelectionContainer.innerHTML = " ";
        tie = `${playerSelection} and ${computerSelection} are the same this is a tie`;
        tieGame.textContent = `${tie}`
        tiedUp = winnerContainer.appendChild(tieGame);
        playerSelectionContainer.innerHTML = `<i class="fas fa-user"></i> ${playerSelection}`
        computerSelectionContainer.innerHTML = `<i class="fas fa-laptop-code"></i> ${computerSelection}`
        tiedUp 
        console.log(tieScore = 0)
        
       
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        document.querySelector(".winner").textContent = '';
        playerSelectionContainer.innerHTML = " ";
        computerSelectionContainer.innerHTML = " ";
        computerWinsOutput = winnerContainer.appendChild(computerWins);
        computerWinsOutput
        playerSelectionContainer.innerHTML = `<i class="fas fa-user"></i> ${playerSelection}`
        computerSelectionContainer.innerHTML = `<i class="fas fa-laptop-code"></i> ${computerSelection}`
        computerScoreContainer.innerHTML = `${computerScore + 1}`
        console.log(`the computer has won ${computerScore += 1}`);
        

      
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        document.querySelector(".winner").textContent = '';
        playerSelectionContainer.innerHTML = " ";
        computerSelectionContainer.innerHTML = " ";
        playerWinsOutput = winnerContainer.appendChild(playerWins);
        playerWinsOutput
        playerSelectionContainer.innerHTML = `<i class="fas fa-user"></i> ${playerSelection}`
        computerSelectionContainer.innerHTML = `<i class="fas fa-laptop-code"></i> ${computerSelection}`
        playerScoreContainer.innerHTML = `${playerScore + 1}`
        console.log(`You have won this round ${playerScore += 1}`)
        
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        document.querySelector(".winner").textContent = '';
        playerSelectionContainer.innerHTML = " ";
        computerSelectionContainer.innerHTML = " ";
        computerWinsOutput = winnerContainer.appendChild(computerWins);
        computerWinsOutput
        playerSelectionContainer.innerHTML = `<i class="fas fa-user"></i> ${playerSelection}`
        computerSelectionContainer.innerHTML = `<i class="fas fa-laptop-code"></i> ${computerSelection}`
        computerScoreContainer.innerHTML = `${computerScore + 1}`
        console.log(`the computer has won ${computerScore += 1}`);
        
    } 
    else if(playerSelection === "paper" && computerSelection === "rock"){
        document.querySelector(".winner").textContent = '';
        playerSelectionContainer.innerHTML = " ";
        computerSelectionContainer.innerHTML = " ";
        playerWinsOutput = winnerContainer.appendChild(computerWins);
        playerWinsOutput
        playerSelectionContainer.innerHTML = `<i class="fas fa-user"></i> ${playerSelection}`
        computerSelectionContainer.innerHTML = `<i class="fas fa-laptop-code"></i> ${computerSelection}`
        playerScoreContainer.innerHTML = `${playerScore + 1}`
        console.log(`You have won this round ${playerScore += 1}`)
        
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        document.querySelector(".winner").textContent = '';
        playerSelectionContainer.innerHTML = " ";
        computerSelectionContainer.innerHTML = " ";
        computerWinsOutput = winnerContainer.appendChild(computerWins);
        computerWinsOutput
        playerSelectionContainer.innerHTML = `<i class="fas fa-user"></i> ${playerSelection}`
        computerSelectionContainer.innerHTML = `<i class="fas fa-laptop-code"></i> ${computerSelection}`
        computerScoreContainer.innerHTML = `${computerScore + 1}`
        console.log(`the computer has won ${computerScore += 1}`);
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        document.querySelector(".winner").textContent = '';
        playerSelectionContainer.innerHTML = " ";
        computerSelectionContainer.innerHTML = " ";
        playerWinsOutput = winnerContainer.appendChild(playerWins);
        playerWinsOutput
        playerSelectionContainer.innerHTML = `<i class="fas fa-user"></i> ${playerSelection}`
        computerSelectionContainer.innerHTML = `<i class="fas fa-laptop-code"></i> ${computerSelection}`
        playerScoreContainer.innerHTML = `${playerScore + 1}`
        console.log(`You have won this round ${playerScore += 1}`)
    } 


    if(playerScore === 5){
        document.querySelector(".winner").textContent = '';
        winnerContainer.appendChild(playerIsWinner);
        document.querySelector?.('.show-modal')
        const newGameBtnContainer = document.querySelector('.new-game');
        const newGameBtn = document.createElement('a');
        newGameBtn.textContent = "Start new Game";
        newGameBtnContainer.appendChild(newGameBtn)
        newGameBtnContainer.addEventListener("click", event => {
          console.log("clicked and need to make show modal class dissapear")
          winnerContainer.innerHTML = ""
          playerScoreContainer.innerHTML = 0
          computerScoreContainer.innerHTML = 0
          playerSelectionContainer.innerHTML = " ";
          computerSelectionContainer.innerHTML = " ";
          playerScore = 0;
          computerScore = 0; 
          newGameBtnContainer.innerHTML = ""
      }) 
      
     
    } else if(computerScore === 5){
        document.querySelector(".winner").textContent = '';
        winnerContainer.appendChild(computerIsWinner);
        document.querySelector?.('.show-modal')
        const newGameBtnContainer = document.querySelector('.new-game');
        const newGameBtn = document.createElement('a');
        newGameBtn.textContent = "Start new Game";
        newGameBtnContainer.appendChild(newGameBtn)
        newGameBtnContainer.addEventListener("click", event => {
          console.log("clicked and need to make show modal class dissapear")
          winnerContainer.innerHTML = ""
          playerScoreContainer.innerHTML = 0
          computerScoreContainer.innerHTML = 0
          playerSelectionContainer.innerHTML = " ";
          computerSelectionContainer.innerHTML = " ";
          playerScore = 0;
          computerScore = 0; 
          newGameBtnContainer.innerHTML = ""
      }) 
        
    }    

}


const container = document.querySelector('#btn-container');
const rockBtn = document.createElement('a');
rockBtn.classList.add('button')
rockBtn.textContent = "Rock";
const paperBtn = document.createElement('a');
paperBtn.classList.add('button')
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement('a');
scissorsBtn.classList.add('button')
scissorsBtn.textContent = "Scissors";
container.appendChild(rockBtn)
container.appendChild(paperBtn)
container.appendChild(scissorsBtn)



const btns = [];
btns.push(rockBtn,paperBtn,scissorsBtn);
btns.forEach(btn => {
    
    btn.addEventListener('click', (event) => {
        
        if(playerScore !== 5 && computerScore !== 5){
            roundOne()
       
        } 
     
            
        
    })

})








let randomNumber = (parseInt(Math.random()*100)+1);
const submit = document.querySelector('#subt');
const userInput  =document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainnig = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('#startOver')


const p = document.createElement('p');


let prevGuess = [];
let numGuess =1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
       const guess =  parseInt(userInput.value);
      if(guess==='' || guess<0 || isNaN(guess)){
        console.log("put correct Number...");
        
      }
       console.log(guess);
       
       validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');

    }else if(guess<1){
        alert('Please enter a number more than 1');
    }else if(guess>100){
        alert('Please enter a number less than 100');

    }else{
        prevGuess.push(guess);
    if(numGuess === 10){
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
        
    }  else{
        displayGuess(guess);
        checkGuess(guess);
    } 
    }
    //
}

function checkGuess(guess){
    //
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame();
    }
   else if(guess < randomNumber){
        displayMessage(`Number is too Low`)
       
    }
   else if(guess > randomNumber){
        displayMessage(`Number is too high`)
       
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainnig.innerHTML = `${11-numGuess}`;
    //
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame =false;
    newGame();
    
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        e.preventDefault();
        randomNumber= (parseInt(Math.random()*100)+1);
        prevGuess =[];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remainnig.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame =true;
    });
}


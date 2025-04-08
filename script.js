let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector("#guessField");
const submitButton = document.querySelector("#subt");
const resultPara = document.querySelector("#resultPara");
const previousGuessSlot = document.querySelector(".guesses");
const remainingChances = document.querySelector(".remainingChances");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector("#startOver");
const p=document.createElement('p')

let previousGuessArray=[];
let numGuess=1;
let  gamePlay=true;


// coding starts
if(gamePlay){
  submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    const guessInput = parseInt(userInput.value);// input field value
    console.log(guessInput);
    validation(guessInput);
    
  })
}

//validation of userInput field
function validation(guessInput){
if(isNaN(guessInput)){
  alert("Please enter a valid number.");
}
else if(guessInput<=0){
  alert("Zero is not allowed. Number should be greater than zero.");
}
else if(guessInput>100){
  alert("Number should be within 1 to 100.");
}
else{
  //validInput
  previousGuessArray.push(guessInput)
  if (numGuess > 10) {
    displayGuess(guessInput);
    displayMessage(`gameOver.Random was ${randomNumber}`);
     endGame();
  } else {
    displayGuess(guessInput);
    checkGuess(guessInput);
  }
}
}


//check userInput to randomNumber
function checkGuess(guessInput){
  if(guessInput===randomNumber){
    displayMessage('u have guested right')
    endGame()
  }else if(guessInput>randomNumber){
        displayMessage("guested number is greater");

  }
  else if(guessInput<randomNumber){
        displayMessage("guested number is low");

  }
}
// clean the useInput field .updating previous guess and remaning chances of play
// increment  numguess
function displayGuess(guessInput){
  userInput.value='';
  previousGuessSlot.innerHTML+=`${guessInput} ,`;
  numGuess++
   remainingChances.innerHTML = `${11-numGuess}`;


}
// display message
function displayMessage(message){
   lowOrHi.innerHTML=`<h1>${message}</h1>`
}

//end the game
function endGame(){
  userInput.value="";
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `  <h2 id="newGame" style="background-color: red; color: white; padding: 10px; border-radius: 10px;">Start new Game</h2>
`;
  startOver.appendChild(p)
  gamePlay=false;
  newGame();
}
//reset game
function newGame(){
const startButton = document.querySelector("#newGame");

startButton.addEventListener('click',(event)=>{
 randomNumber = parseInt(Math.random() * 100 + 1);
   previousGuessArray = [];
    numGuess = 1;
        previousGuessSlot.innerHTML = "";
  remainingChances.innerHTML = `${11 - numGuess}`;

  userInput.removeAttribute('disabled');
   
  lowOrHi.innerHTML="";
   
    startOver.removeChild(p);
     
 gamePlay = true;

})
}
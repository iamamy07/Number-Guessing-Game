let secretNumber=Math.floor(Math.random()*20)+1;
const guess=Number(document.querySelector('.guess').value);
// console.log(guess);
let score=20;
let highScore=0;
function displayMessage(message){
  document.querySelector('.message').innerHTML=message;
};
document.querySelector('.check').addEventListener('click',function()
{
  
  const guess=Number(document.querySelector('.guess').value);
  // console.log(guess);
  // console.log(secretNumber);
  if(!guess)
  displayMessage('🤦‍♀️No Number Entered!');
  else if(guess===secretNumber)
  {
    if(score>highScore)
    {
    highScore=score;
    document.querySelector('.highscore').innerHTML=highScore;
    }
    document.querySelector('.number').innerHTML=secretNumber;
    displayMessage('🥳 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
  }
  else if(guess!=secretNumber)
  {
    if(score>1)
    {
    score--;
    if(guess > secretNumber)
      displayMessage('Too High!');
    else
      displayMessage("Too Low!");
    document.querySelector('.score').innerHTML=score;
    }
    else
    {
    displayMessage('You Lost the Game!');
    document.querySelector('.score').innerHTML=0;
    score=20;

    }
  }

  document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.floor(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.score').innerHTML=20;
    document.querySelector('.number').innerHTML='?';
    document.querySelector('.guess').value='';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start Guessing....!');
  });
});





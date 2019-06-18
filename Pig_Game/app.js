var scores, roundScore, activePlayer; 
var playingMode;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
 
    if(playingMode) {
         //random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice  +'.png';

    //Update the round score if the rolled number was not a 1

    if(dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        //next player

        nextPlayer();
        
    }
}
});

document.querySelector('.btn-hold').addEventListener('click',function() {
    if(playingMode){
        //add current score to global score
    scores[activePlayer] += roundScore;

    //update ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 


    var input = document.querySelector('.target').value;
    var target;

    //if not defined, 0 , null or "" is coerced to false
    // anything else is coerced to true

    if(input) {
        target = input;
    } else {
        target = 100;
    }
    //check if player won the game



    if(scores[activePlayer] >= target){
        document.querySelector('#name-' + activePlayer).textContent ="Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        playingMode = false;

    }else{

        //next player
        nextPlayer();
    }

}
    
});

      
    


document.querySelector('.btn-new').addEventListener('click',init);

function nextPlayer(){
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playingMode = true;

    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');



}
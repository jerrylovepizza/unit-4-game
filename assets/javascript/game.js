$( document ).ready(function(){
var randomnum=Math.floor(Math.random()*101+19)
console.log(randomnum);
// Selects a random number to be shown at the start of the game
// Number should be should be between 19 - 120
//
$('#randomNumber').html(randomnum);
console.log(randomnum);



var playerScore= 0;
var wins= 0;
var losses = 0;
var endOfGame =false;
var playerLoses=false;
//  Decaring variables for tallies
$('#wins').html(wins);
$('#losses').html(losses);

//set  up click for Blue Crystal
$('#blue').on ('click', function(){
if (endOfGame == false)
{
var blue= Math.floor(Math.random()*11+1);
playerScore = playerScore + blue;
$('#playerScore').html(playerScore);
checkScore();
}


})

//set up click for Green Crystal

$('#green').on ('click', function(){
if (endOfGame == false)
{
var green= Math.floor(Math.random()*11+1);
playerScore = playerScore + green;
$('#playerScore').html(playerScore);
checkScore();
}

})

// set up click for Red Crystal
$('#pink').on ('click', function(){
if (endOfGame == false)
{
var pink= Math.floor(Math.random()*11+1);
playerScore = playerScore + pink;
$('#playerScore').html(playerScore);

checkScore();
}

})

//set up click for Yellow Crystal
$('#white').on ('click', function(){
if (endOfGame == false)
{
var white= Math.floor(Math.random()*11+1);
playerScore= playerScore + white;
$('#playerScore').html(playerScore);

checkScore();
}
})


function checkScore(){
if (playerScore == randomnum){
endOfGame=true;
wins++;
$('#playerScore').html(playerScore);
$('#wins').html(wins);
alert("Game Over, You Win");

}


else if (playerScore > randomnum){
Playerloses = true;
endOfGame = true;
losses++;
$('#losses').html(losses);
alert("Game Over, You lose");

};

if (endOfGame){
$('#wins').html( wins);
$('#losses').html(losses);
setTimeout(startgame,2500);
}
}


// Restarting the game and initialising all variables to zero
function startgame(){
endOfGame = false;
playLoses = false;
playerScore = 0
randomnum = Math.round(Math.random() * (120 - 19)) + 19;
$('#randomNumber').text(randomnum);

var red = Math.round(Math.random() * (12-1)) + 1;
var blue = Math.round(Math.random() * (12-1)) + 1;
var yellow= Math.round(Math.random() * (12-1)) + 1;
var green= Math.round(Math.random() * (12-1)) + 1;

$('#playerScore').html(playerScore);
$('#randnum').html(randomnum);
$('#wins').html(wins);
$('#losses').html(losses);
}
});

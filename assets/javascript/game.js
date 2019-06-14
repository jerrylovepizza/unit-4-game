//declare variables  
  var randomNumber;
  var wins = 0;
  var losses = 0;
  var score = 0;
  var crystal1;
  var crystal2;
  var crystal3;
  var crystal4;


//once page is ready, generate a random number between 20 and 120 for the game and between 1 and 12 for each crystal
  $(document).ready(function() {
      var randomNumber = Math.floor((Math.random() * 121) + 19);
      $("#randomNumber").html("Random Number: " + randomNumber);
      var crystal1 = Math.floor((Math.random() * 13) + 1);
      var crystal2 = Math.floor((Math.random() * 12) + 1);
      var crystal3 = Math.floor((Math.random() * 12) + 1);
      var crystal4 = Math.floor((Math.random() * 12) + 1); 
      
      //display crystal value and add value to total score
      $("#crystal1").on("click", function() {
        $("#crystal1Value").html("Value: " + crystal1);
        //as long as the score is less than or equal to the game random number, update score
        if (score <= randomNumber) {
          var scoreUpdate = score += crystal1;
            $("#alertScore").html("Current Score: "+ scoreUpdate);
        }
        //once the score equals the game random number, stop game and alert user he/she won
        if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Games Won: " + wins);
            $("#gamesLost").html("Games Lost: " + losses);
            alert("YOU WON!");
        }
         //once the score exceeds the game random number, stop game and alert user he/she lost
        else if (score > randomNumber) {
                losses ++;
                $("#gamesWon").html("Games Won: " + wins);
                $("#gamesLost").html("Games Lost: " + losses);
                alert("SORRY, BUT YOU LOST!");
        }
      });


      //display crystal value and add value to total score
      $("#crystal2").on("click", function() {
        $("#crystal2Value").html("Value: " + crystal2);
         //as long as the score is less than or equal to the game random number, update score
         if (score <= randomNumber) {
           var scoreUpdate = score += crystal2;
            $("#alertScore").html("Current Score: "+ scoreUpdate);
         }
         //once the score equals the game random number, stop game and alert user he/she won
         if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Games Won: " + wins);
            $("#gamesLost").html("Games Lost: " + losses);
            alert("YOU WON!");
          }
       //once the score exceeds the game random number, stop game and alert user he/she lost
        else if (score > randomNumber) {
                losses ++;
                $("#gamesWon").html("Games Won: " + wins);
                $("#gamesLost").html("Games Lost: " + losses);
                alert("SORRY, BUT YOU LOST!");
          }
      });


      //display crystal value and add value to total score
      $("#crystal3").on("click", function() {
        $("#crystal3Value").html("Value: " + crystal3);
        //as long as the score is less than or equal to the game random number, update score
        if (score <= randomNumber) {
            var scoreUpdate = score += crystal3;
            $("#alertScore").html("Current Score: "+ scoreUpdate);
        }
        //once the score equals the game random number, stop game and alert user he/she won
        if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Games Won: " + wins);
                $("#gamesLost").html("Games Lost: " + losses);
            alert("YOU WON!");
        }
        //once the score exceeds the game random number, stop game and alert user he/she lost
        else if (score > randomNumber) {
                losses ++;
                $("#gamesWon").html("Games Won: " + wins);
                $("#gamesLost").html("Games Lost: " + losses);
                alert("SORRY, BUT YOU LOST!");
        }
      });


      //display crystal value and add value to total score
      $("#crystal4").on("click", function() {
        $("#crystal4Value").html("Value: " + crystal4);
        //as long as the score is less than or equal to the game random number, update score
        if (score <= randomNumber) {
            var scoreUpdate = score += crystal4;
            $("#alertScore").html("Current Score: "+ scoreUpdate);
        }
        //once the score equals the game random number, stop game and alert user he/she won
        if (score == randomNumber) {
            wins ++;
            $("#gamesWon").html("Games Won: " + wins);
                $("#gamesLost").html("Games Lost: " + losses);
            alert("YOU WON!");
        }
        //once the score exceeds the game random number, stop game and alert user he/she lost
        else if (score > randomNumber) {
                losses ++;
               $("#gamesWon").html("Games Won: " + wins);
                $("#gamesLost").html("Games Lost: " + losses);
                alert("SORRY, BUT YOU LOST!");
        }
      });
 })

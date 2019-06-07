 
//set up varialbe
var randomNum = "";
var firstNum = "";
var secondNum = "";
var thirdNum = "";
var fourthNum = "";
var totalSum = "";
var wins = "";
var losses = "";
   messages = {
              win: "You win! Play again",
              lose: "You lost! Play again",
              };

  $(document).ready(function() {

    // Create random number between 19 to 120 on clicking start-button add content to the random-number div.
    // ...
    // debugger
       $("#start-button").on("click", function(){
       
               var random = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;  
               randomNum = random;
               console.log(totalSum);
               totalSum = 0;
                $("#output").text("");
                $("#total-number").text(totalSum);
                wins = 0;
                losses = 0;
               console.log("sum: "+ totalSum);
               $(".image").bind("click");

              
              // start-button add content to the random-number div.
               $("#random-number").text(randomNum);
               $("#wins").text(wins);
               $("#losses").text(losses);
               // Create random number between 1 to 12 on clicking 
              // start-button add content to the random-number div.
               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               secondNum = random;          
               $("#second-number").text(secondNum);
              // Create random number between 1 to 12 on clicking 
              // start-button add content to the random-number div.
               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               firstNum = random;          
               $("#first-number").text(firstNum);
              // Create random number between 1 to 12 on clicking 
              // start-button add content to the random-number div.
               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               thirdNum = random;          
               $("#third-number").text(thirdNum);
              // Create random number between 1 to 12 on clicking 
              // start-button add content to the random-number div.
               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               fourthNum = random;          
               $("#fourth-number").text(fourthNum);
               return firstNum;
               return secondNum;
               return thirdNum;
               return fourthNum;
               return random;

    });
       //refresh the random number, don't refresh scores
       $("#random-button").on("click", function(){
       
               var random = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;  
               randomNum = random;
               console.log(totalSum);
               totalSum = 0; 
               $("#output").text("");
                $("#total-number").text(totalSum);
                console.log("sum: "+ totalSum);
                //$(".image").bind("click");


               $("#random-number").text(randomNum);
               $("#wins").text(wins);
               $("#losses").text(losses);
               
               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               secondNum = random;          
               $("#second-number").text(secondNum);

               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               firstNum = random;          
               $("#first-number").text(firstNum);

               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               thirdNum = random;          
               $("#third-number").text(thirdNum);

               var random = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;  
               fourthNum = random;          
               $("#fourth-number").text(fourthNum);

               return firstNum;
               return secondNum;
               return thirdNum;
               return fourthNum;
               return random;

    });      
          //Add the all the crystal numbers based on image click        
          $("#first-button").on("click", function(){
              
             
                  firstNum += Number($(this).val());
                  totalSum = Number(totalSum) + Number(firstNum);
                  console.log(firstNum);
                  console.log(totalSum);
                  $("#total-number").text(totalSum);
              console.log("random: "+ randomNum);
              console.log("sum: "+ totalSum);
            //if total sum is equal to random num - add win count and display win message
           if (totalSum === randomNum) {
              wins++
              console.log("wins:" + wins);
              $("#wins").text(wins);
              output.innerHTML = messages.win;
              output.classList.add('win');
              alert("You win - Click on Refresh or Restart button");
              
            }
            //if total sum is greater than random num - add lost count and display lost message
            else if (totalSum > randomNum) {
              losses++
              console.log("loss:" + losses);
              $("#losses").text(losses);
              output.innerHTML = messages.lose;
              output.classList.add('lose');
              alert("You lost - Click on Refresh or Restart button");
              } 
              return totalSum;   
           });

           $("#second-button").on("click", function(){        
                  secondNum += Number($(this).val());
                  totalSum = Number(totalSum) + Number(secondNum);
                  console.log(secondNum);
                  console.log(totalSum);
                  $("#total-number").text(totalSum);
            if (totalSum === randomNum) {
              wins++
              console.log("wins:" + wins);
              $("#wins").text(wins);
              output.innerHTML = messages.win;
              output.classList.add('win');
              alert("You win - Click on Refresh or Restart button");
            }
            else if (totalSum > randomNum) {
              losses++
              console.log("loss:" + losses);
              $("#losses").text(losses);
              output.innerHTML = messages.lose;
              output.classList.add('lose');
              alert("You lost - Click on Refresh or Restart button");
              } 
              return totalSum;
           });
           $("#third-button").on("click", function(){
                  thirdNum += Number($(this).val());
                  totalSum = Number(totalSum) + Number(thirdNum);
                  console.log(thirdNum);
                  console.log(totalSum);
                  $("#total-number").text(totalSum);
              if (totalSum === randomNum) {
                wins++
                console.log("wins:" + wins);
                $("#wins").text(wins);
                output.innerHTML = messages.win;
              output.classList.add('win');
              alert("You win - Click on Refresh or Restart button");
            }
            else if (totalSum > randomNum) {
                losses++
                console.log("loss:" + losses);
                $("#losses").text(losses);
                output.innerHTML = messages.lose;
              output.classList.add('lose');
              alert("You lost - Click on Refresh or Restart button");
                } 
                return totalSum; 
           });
           $("#fourth-button").on("click", function(){
                  fourthNum += Number($(this).val());
                  totalSum = Number(totalSum) + Number(fourthNum);
                  console.log(fourthNum);
                  console.log(totalSum);
                  $("#total-number").text(totalSum);
              if (totalSum === randomNum) {
              wins++
              console.log("wins:" + wins);
              $("#wins").text(wins);
              output.innerHTML = messages.win;
              output.classList.add('win');
              alert("You win - Click on Refresh or Restart button");
            }
            else if (totalSum > randomNum) {
              losses++
              console.log("loss:" + losses);
              $("#losses").text(losses);
              output.innerHTML = messages.lose;
              output.classList.add('lose');
              alert("You lost - Click on Refresh or Restart button");
              } 
              return totalSum;
           }); 
           
  });
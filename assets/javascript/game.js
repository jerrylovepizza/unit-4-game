// create variables to track
var wins = 0;
var losses = 0;
var goal = Math.floor(Math.random() * 500);
var score = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

// Create a function to start/reset the game
    function reset(){
        // create a new random number
        goal = Math.floor(Math.random() * 500)
        // update this on the page
        $("#goal").text(goal);
        // create new values for each crystal
        crystal1 = Math.floor(Math.random() * 100);
        crystal2 = Math.floor(Math.random() * 100);
        crystal3 = Math.floor(Math.random() * 100);
        crystal4 = Math.floor(Math.random() * 100);

        console.log("crysal1: " + crystal1);
        console.log("crysal2: " + crystal2);
        console.log("crysal3: " + crystal3);
        console.log("crysal4: " + crystal4);
        // reset score to 0
        score = 0;
        // update score on the page
        $("score").text(goal);
    }

// Create a function to test win/lose
    function test() {
        if (score === goal) {
            wins++;
            $("#wins").text(wins);
            $("#score").text("You Win!");
            // call reset function
            reset();
        }
        if (score > goal) {
            losses++;
            $("#losses").text(losses);
            $("#score").text("You Suck!");
            // call reset function
            reset();
        }
    }

// The Game starts here with a start of a game reset function
    reset();

    // Create a click event for crystal 1
        $("#crystal-1").on("click", function (){
            // Grab the value of crystal that was clicked on
            // console.log(crystal1);
            // Add that to the player's score
            $("#score").text(score + crystal1);
            score += crystal1;
            
            // Call test function
            test();
        });

    // Create a click event for crystal 2
    $("#crystal-2").on("click", function (){
        // Grab the value of crystal that was clicked on
        // console.log(crystal2);
        // Add that to the player's score
        $("#score").text(score + crystal2);
        score += crystal2;
        
        // Call test function
        test();
    });

    // Create a click event for crystal 3
    $("#crystal-3").on("click", function (){
        // Grab the value of crystal that was clicked on
        // console.log(crystal3);
        // Add that to the player's score
        $("#score").text(score + crystal3);
        score += crystal3;
        
        // Call test function
        test();
    });

    // Create a click event for crystal 4
    $("#crystal-4").on("click", function (){
        // Grab the value of crystal that was clicked on
        // console.log(crystal4);
        // Add that to the player's score
        $("#score").text(score + crystal4);
        score += crystal4;
        
        // Call test function
        test();
    });

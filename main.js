// dependency for inquirer npm package
var inquirer = require("inquirer");

//dependencies for constructors in other files
var movies = require("./movies.js");
var Letter = require("./letter.js");
var Word = require("./word.js");
//defining global variables
var wordNow;
var currentWord;
//starts the game at the beginning
startGame();

function startGame(){
  // Asks User the genre information
   inquirer
    .prompt([
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "Which genre of movie do you want?",
            choices: ["drama", "romcom", "classic", "thriller"],
            name: "genre"
        }

    ])
    .then(function(inquirerResponse) {
        // whatever the user picks, we displays the inquirerResponse's genre from the movies.
        if (inquirerResponse.genre === "drama") {
            console.log("\nYou have chosen drama");
            
        } else if (inquirerResponse.genre === "romcom") {
            console.log("\nYou have chosen romcom");
            //choose(inquirerResponse.genre);
            // selectDrama(movies.romcom);
        } else if (inquirerResponse.genre === "classic") {
            console.log("\nYou have chosen classic");
            //choose(inquirerResponse.genre);
            // selectDrama(movies.classic);
        } else {
            console.log("You have chosen thriller")
        }

        //calls the choose function taking in the argument of the genre selected
        choose(inquirerResponse.genre);

      
    });

  
}
function choose(genre) {

    //selects an item from between 0-2
    var currentSelection = Math.floor((Math.random() * 3));
    //currentWord becomes the holder for the name of the movie
    currentWord = (movies[genre][currentSelection]);
    //defining wordNow as the current holder of this new phrase for the word constructor
    wordNow = new Word(currentWord)
   //call show in the word constructor
    wordNow.show();
    
    
} 


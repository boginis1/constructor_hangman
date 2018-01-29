// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require('fs');
var result = [];
//start game
//CLI - prompt user to select a movie genre from choices
//WORD - randomly select a title from word constructor for that genre - put into array
//WORD - replace all letters in the word with _
//CLI - display _array to player and ask for the first letter - convert to upper case
//LETTER - if letter is in word, say correct and replace _ with letter
//LETTER - in the word holder array and say guess a letter
//LETTER - if incorrect, say, wrong, choose another letter
//LETTER 0 and say x guesses left - reduce guesses left by 1
//WIN/LOSE - once all _ are gone, say you win, new word
//WIN/LOSE or if incorrect letters guessed 8 times, and the 
//WIN LOSE - word isn't complete, say, you lose.  new word
var movies = require("./movies.js");
var Letter = require("./letter.js");
var Word = require("./word.js");
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
            console.log(inquirerResponse.genre);
            //choose(inquirerResponse.genre);
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


        choose(inquirerResponse.genre);

        function choose(genre) {
            console.log("genre" + genre);
            var currentSelection = Math.floor((Math.random() * 3));
            //console.log(currentSelection);
            for (var i = 0; i < movies[genre].length; i++) {
                movies[genre][currentSelection]
            }
            var currentWord = (movies[genre][currentSelection]);
            function word(currentSelection);
        }

    });



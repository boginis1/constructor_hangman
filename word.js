var inquirer = require("inquirer");
// A word is an array of Letters
let Letter = require("./letter.js");

const Word = function(currentWord){
    
	this.letters = [];
    
    var refToWord = this;
    var populateLetters = function(currentWord){
        var currentWordArray = currentWord.split("");
        for (let i=0; i<currentWordArray.length; i++){
            refToWord.letters.push(new Letter(currentWordArray[i]));
            
        }
    }
    populateLetters(currentWord);
       
     
	this.show = function(){
        var shownCharacters = ""
        for (let i=0; i < this.letters.length; i++){
            var shownCharacter = this.letters[i].letterBuild();
            shownCharacters += shownCharacter
        }
        
        console.log(shownCharacters);
        console.log("letters count = " + this.letters.length);
        console.log("shown counter = " + this.shownCounter);
        console.log("wrong guess Limit = " + this.wrongGuessLimit);
        if (shownCharacters.includes("_")  === false) {
            console.log("You Win");
            //startGame();
        }
        else if (this.wrongGuessLimit === 0) {
            console.log("You Lose");
            //startGame();
        }

        else {
                var refToWord = this;
                 inquirer
                    .prompt([


                        // Here we give the user a list to choose from.
                        {
                            type: "input",
                            message: "Pick any letter",
                            name: "userGuess"
                        }

                    ])
                    .then(function(res) {

                        
                        refToWord.guessChecker(res.userGuess);
                    });
                  
        }
        
        
    }

	
    this.wrongGuessLimit = 8
	this.shownCounter = 0;
    //this.guessedLettersArray = [];
    this.guessChecker = function(userGuess){
        
        // check userGuess against every Letter.character in our word letters
        var isLetterFoundInWord = false;
        for (let i=0; i < this.letters.length; i++){
            // But check against Letter.character.toLowerCase and .toUpperCase 
            const currentLetter = this.letters[i];
            //console.log(currentLetter.letter.toLowerCase());
            //console.log(userGuess.toString().toLowerCase());
            if (currentLetter.letter.toLowerCase() === userGuess.toLowerCase()){
                currentLetter.isKnown = true;
                isLetterFoundInWord = true;
                // if (guessedLettersArray.includes(currentLetter)===false) {
                //     guessedLettersArray.push(currentLetter);
                // }
            }
            
            
        }
        if (isLetterFoundInWord===false){ 
            this.wrongGuessLimit--;
            

        }
        
        
        // Call show every time when we are done
        this.show();
		//populateLetters(currentWord);
    }

}
// let currentWord = new Word ("The Godfather");
// console.log(currentWord);
//console.log(currentWordArray[i]);
module.exports = Word;

// console.log("Testing show on Word");
// testWord.populateLetters();

// console.log("Testing guessChecker");
// testWord.guessChecker("t");

// Right after you split the currentWorld all you need to do is loop over it and push new Letter() for each "english letter" in res
 


 
 




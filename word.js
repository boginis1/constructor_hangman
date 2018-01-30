
// A word is an array of Letters
let Letter = require("./letter.js");
let currentWord = "The Godfather";
const Word = function(currentWord){
    
	this.letters = [];
     this.populateLetters(currentWord);
    
		this.show = function(){
        for (let i=0; i < this.letters.length; i++){
            this.letters[i].letterBuild();
        }

    	this.populateLetters = function(currentWord){
	        var currentWordArray = currentWord.split("");
	        for (let i=0; i<currentWordArray.length; i++){
	            this.letters.push(new Letter(currentWordArray[i]));
	            console.log(currentWordArray[i]);
	           
        }

    }
	
    this.guessChecker = function(userGuess){
        // check userGuess against every Letter.character in our word letters
        for (let i=0; i < this.letters.length; i++){
            // But check against Letter.character.toLowerCase and .toUpperCase 
            const currentLetter = this.letters[i];
            if (currentLetter.character.toLowerCase() === userGuess  || currentLetter.character.toUpperCase() === userGuess){
                currentLetter.isKnown = true;
            }

        }
        
        
        // Call show every time when we are done
        this.show();

    }
}
}
module.exports = Word;

// console.log("Testing show on Word");
// testWord.populateLetters();

// console.log("Testing guessChecker");
// testWord.guessChecker("t");

// Right after you split the currentWorld all you need to do is loop over it and push new Letter() for each "english letter" in res
 


 
 




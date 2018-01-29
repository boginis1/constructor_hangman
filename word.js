
// A word is an array of Letters
let Letter = require("./letter.js");

const Word = function(englishWord){
    this.letters = [];
    

    this.show = function(){
        for (let i=0; i < this.letters.length; i++){
            this.letters[i].show();
        }
    }

    this.populateLetters = function(englishWord){
        var englishWordArray = englishWord.split("");
        for (let i=0; i<englishWordArray.length; i++){
            this.letters.push(new Letter(englishWordArray[i]));
        }
    }
this.populateLetters(englishWord);
    this.guessChecker = function(userGuess){
        // check userGuess against ever Letter.character in our word letters
        for (let i=0; i < this.letters.length; i++){
            // But check against Letter.character.toLowerCase and .toUpperCase 
            const currentLetter = this.letters[i];
            if (currentLetter.character.toLowerCase() === userGuess  || currentLetter.character.toUpperCase() === userGuess){
                currentLetter.isKnown = true;
            }

        }
        
        
        // Call show every time when we are done
        this.letterPopulate();

    }
}
module.exports = Word;
let testWord = new Word("The Godfather");
console.log("Testing show on Word");
testWord.letterPopulate();

console.log("Testing guessChecker");
testWord.guessChecker("t");





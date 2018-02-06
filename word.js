var inquirer = require("inquirer");

let Letter = require("./letter.js");
//creates a constructor for Word that contains properties of this letters, this show and this guess checker
const Word = function(currentWord){
    // Our phrase is an array of Letters
	this.letters = [];
    //make this a reference to our current word
    var refToWord = this;
    //defining a helper function that splits our word into a string of individual letters
    var populateLetters = function(currentWord){
        var currentWordArray = currentWord.split("");
        for (let i=0; i<currentWordArray.length; i++){
            refToWord.letters.push(new Letter(currentWordArray[i]));
            
        }
    }
    //calls our populate function
    populateLetters(currentWord);
       
     
	this.show = function(){
        //defines a variable shownCharacters as an empty string
        var shownCharacters = ""
        //runs through each letter in our phrase 
        for (let i=0; i < this.letters.length; i++){
            //each letter goes thru the letterBuild function from the letter constructor and gives it a car of showncharacter 
            var shownCharacter = this.letters[i].letterBuild();
            //adds each showncharacter to the showncharacters array
            shownCharacters += shownCharacter
        }
        //shows the phrase with the character, space or _
        console.log(shownCharacters);
        
        //asks if the shownCharacters has any _ left in it - if there are not any, you win
        if (shownCharacters.includes("_")  === false) {
            console.log("You Win");
            
        }
        //if the wrong guess limit is down to 0 then you lose
        else if (this.wrongGuessLimit === 0) {
            console.log("You Lose");
            
        }

        else {
                //makes this relevant here
                var refToWord = this;
                 inquirer
                    .prompt([


                        // Here we ask the user to choose a letter.
                        {
                            type: "input",
                            message: "Choose any letter",
                            name: "userGuess"
                        }

                    ])
                    //then returns the letter selected as res
                    .then(function(res) {

                        //sends the selected letter thru the guesschecker function
                        refToWord.guessChecker(res.userGuess);
                    });
                  
        }
        
        
    }

	//sets the limits of the wrong guesses to 8
    this.wrongGuessLimit = 8
	//this.shownCounter = 0;
    //defines the properties of the guestChecker element
    this.guessChecker = function(userGuess){
        
        
        //defines a variable isletterfoundinword and sets it to false
        var isLetterFoundInWord = false;
        // check userGuess against every Letter.character in our word letters
        for (let i=0; i < this.letters.length; i++){
           
            const currentLetter = this.letters[i];
            //console.log(currentLetter.letter.toLowerCase());
             // if the word contains either upper or lower case letter that matches the users guess 
            if (currentLetter.letter.toLowerCase() === userGuess.toLowerCase()){
                console.log("your are correct!")
                //change the isknown property to true
                currentLetter.isKnown = true;
                //and set the isletterfoundinword to true
                isLetterFoundInWord = true;
                
            }
            
            
        }
        //otherwise, the the letter isn't found in the word and 
        if (isLetterFoundInWord===false){ 
            console.log("oops, sorry no matches")
            //deprecate the wrong guesses by 1
            this.wrongGuessLimit--;
            

        }
        // Call show every time when we are done
        this.show();
		
    }

}
// makes Word constructors available for other files if required
module.exports = Word;


 
 




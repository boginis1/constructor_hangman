var Letter = function(character) {
// property to store the actual letter
  this.letter = character;
// property/boolean if the letter is known - guessed - or not
  this.isKnown = false;

  this.letterBuild = function() {
    if(this.letter === ' '){ /*shows a blank as it is*/
      //makes sure that when the function checks if the word is found doesn't read the blank as false.
      this.isKnown = true;
      return '  ';
    }else if(this.isKnown === false){ /*if it doesn't appear, it returns a ' _ '*/
      return ' _ ';
    } else { /*otherwise it just appears as itself*/
      return this.letter;
    }

  };
};

// export to use in word.js
module.exports = Letter;


// 
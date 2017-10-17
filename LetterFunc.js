//MAIN CONTRUCTOR:
var Alphabet = require('./Alphabet.js');

var LetterFunc = function (guess, randWord, guessesLeft, lettersLeft) {
	this.guessedLettersArr = [];
	this.defaultDisplay = function(randWord) {
		console.log("LetterFunc is being called.")
	    for (var i = 0; i < randWord.length; i++) {
	        if (randWord[i] === " ") {
	            console.log(" ");
	        } else if (randWord[i] === "'") {
	            console.log("'");
	        } else {
	            console.log("_");
	        }
	    }
	};
	this.letterGame = function(guess, randWord, guessesLeft, lettersLeft) {
		var alphabet = new Alphabet();
		var alphabetFull = alphabet.fullA;

		for (var i = 0; i < alphabetFull.length; i++) {
		    if (guess === alphabetFull[i]) {
		        this.guessedLettersArr.push(guess);
		        
		        for (var i = 0; i < randword.length; i++) {
		            if (guess === randword[i]) { // VERIFY THAT THE WORD WILL UPDATE CORRETLY IF THERE ARE MULITPLE of the same CORRECT LETTER choice in/from the userGuess.
		                this.defaultDisplay[i] = randword[i]; //The 'defaultDisplay' and 'userGuess' letter match up through the reference to the mathcing index/value.
		                lettersLeft--;
		                console.log("Good play!");
		            } else {
		                console.log("You missed the mark, but practice makes perfect.  \nGuess again!");
		            }
		        };
		    
		    } else {
		        console.log("Please choose a valid English letter.");
		    }
		};
		guessesLeft--;
	};
};
module.exports = LetterFunc;
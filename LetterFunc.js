//MAIN CONTRUCTOR:
var Alphabet = require('./Alphabet.js');

var LetterFunc = function (guess, randWord, guessesLeft, lettersLeft) {
	this.guessedLettersArr = [];
	this.defaultDisplay = function(randWord) { //this takes the "newWord" from the GamePlay.js file

		console.log("LetterFunc is being called, and trying to 'defaultDisplay' the word.")
		var defaultDisplayArr = [];

	    for (var i = 0; i < randWord.length; i++) {
	        if (randWord[i] === " ") {
	            defaultDisplayArr.push(" ");
	            // console.log(" ");
	        } else if (randWord[i] === "'") {
	            defaultDisplayArr.push("'");
	            // console.log("'");
	        } else {
	        	defaultDisplayArr.push("_")
	            // console.log("_");
	        }
	    }
	   	defaultDisplayArr.join('');
	   	console.log("This should be the defaultDisplay joined version: " + defaultDisplayArr);
	};
	this.letterGame = function(guess, randWord, guessesLeft, lettersLeft) {
		var alphabet = new Alphabet();
		var alphabetFull = alphabet.fullA;


		for (var i = 0; i < alphabetFull.length; i++) {
			//
		    if (guess === alphabetFull[i]) {
		        this.guessedLettersArr.push(guess);
		        
		        // for (var j = 0; j < randWord.length; j++) {
		     		// console.log("this is the letter match in LetterFunc.js " + randWord ); //use a contains....
		     		
		     		console.log("this is the userGuess: " + guess);
		            // if (guess === randWord[0][j]) { // VERIFY THAT THE WORD WILL UPDATE CORRETLY IF THERE ARE MULITPLE of the same CORRECT LETTER choice in/from the userGuess.
		            //     this.defaultDisplay[j] = randWord[0][j]; //The 'defaultDisplay' and 'userGuess' letter match up through the reference to the mathcing index/value.
		                
		            if (randWord.includes(guess)){    /// newWord.includes(userGuess) in GamePlay.js file; 
		           		//MAP OUT WHERE GUESS === RandWord
		           		console.log("write the MAP function");
		           		
		                lettersLeft--;
		                console.log("Good play!");
		            } 
		            else {
		                console.log("You missed the mark, but practice makes perfect.\nGuess again!");
		            }
		        // };
		    
		    } else {
		        console.log("Please choose a valid English letter.");
		    }
		};
		guessesLeft--;
	};
};
module.exports = LetterFunc;
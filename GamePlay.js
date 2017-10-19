var fs = require('fs');
var inquirer = require('inquirer');
var LetterFunc = require('./LetterFunc.js');
var Words = require('./Words.js');


var GamePlay = function(userGuess, avatar) {
  var words = new Words();
  var newWord = words.word;
  var letter = new LetterFunc();

    this.gameSwitch = false;
    this.guessesLeft = 10;
    this.lettersLeft = newWord.length;
    this.lost = 0;
    this.won = 0;
    this.gamesPlayed = 0;
    this.gameStart = function () {
        if (this.gameSwitch === true && userGuess) { // add in (&& newWord)?.. if have a != newWord clause...IF rel. in CLI.js
            
            // console.log(words.check());
            console.log("trying...the following word is the randword/newWord inside the gameStart function...")
            console.log(newWord); //Testing...

            letter.letterGame(userGuess, newWord, this.guessesLeft, this.lettersLeft);// !!!!!!!!!!! this does NOT DISPLAY as appropirate...
            gameOn() 
            // if(userGuess) {
            //     this.gameOn(newWord); // !!///THIS NEEDS TO BE reconfigured.
            // };
        }
        if (this.gameSwitch === false) {
            console.log("Let's begin!");
            this.gameSwitch = true;
            newWord;
            console.log(newWord);

            letter.defaultDisplay(newWord);// !!!!!!!!!!! this does NOT DISPLAY as appropriate...
            this.gameStart(newWord);
        }
    };
    this.gameOn = function(userGuess) { //newWord need to be included as well??
        letter.letterGame (userGuess, newWord, this.guessesLeft, this.lettersLeft);    // !! This creates an ERROR.. newWord is NOT being passed correctly into the words flie, as the "randword";        
    };  //DO WE NEED TO HAVE SEMI-COLONS???
    this.done = function() {
        if (this.lettersLeft === 0 && this.guessesLeft != 0) {
            console.log("You're a hero! Great detection.");
            words.guessedWordsArr.push(newWord);
            this.gameSwitch = false;
            this.won += 1;
            this.gameover();
        } else if (this.guessesLeft === 0 && this.lettersLeft != 0) {
            console.log("Oh No!!! Your player has been removed from the team!");
            words.guessedWordsArr.push(newWord);
            this.gameSwitch = false;
            this.lost += 1;
            this.gameover();
        } else if (this.won === false) {
            letter.letterGame(userGuess, newWord, this.guessesLeft, this.lettersLeft);
        }
    };
    this.gameover = function() {
        this.gamesPlayed += 1;
        this.gameStats();
    };
    this.gameStats = function() { //!!!!!!!!!!DON'T FORGET THE AVATAR!!!!!!!!
    var currentDate = new Date();
    var time = currentDate.toLocaleTimeString();
    var textForLog = "\n******************\nName:" + avatar +"\nWon: " + this.won +
    ".  \nLost: " + this.lost + ". \nPlayed: " + this.gamesplayed + "\nAt: " + this.time;
    
    fs.appendFile("stats.txt", "\r\n\r\n"); 
    fs.appendFile("stats.txt", textForLog, function(error) { 
      if(error){
        return console.log("This is your error:" + error);
        }
      else {
          console.log("The stats.txt file was updated.");
        }
    });
    this.newGame();
    };
    this.newGame = function() {
        console.log("Would you like to play again?");
        if (userGuess) { //if the userGuess = true--->> thus if the User puts in an input...
            gameSwitch = true;
            this.gameOn();
        }
    };
};
module.exports = GamePlay;
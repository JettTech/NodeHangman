var fs = require('fs');
var inquirer = require('inquirer');
var opn = require("opn");
var password = require('./password.js');
var GamePlay = require('./GamePlay.js')
var Words = require('./Words.js');
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

///This is for the Admin Review Function: /////
var n = 0;
var hangmanGame = "";
var readStatsFormat = function(answers) {	
  console.log('\n*********************************************');
  console.log('Avatar: ' + answers.avatar);
  console.log('Game #: ' + hangmanGame);
  console.log('Won: ' + answers.won);
  console.log('Lost: ' + answers.lost);
  console.log('Played: ' + answer.gamesplayed);
  console.log('Time Played: ' + answers.time);
  console.log('\n*********************************************');
  return;
};
function readStats() {
	fs.readFile('stats.txt', 'utf8', function(error, results){
		if (error) {
			return console.log("You have an error... Error:" + error);
		}
		if (results.avatar) { //checking to see if there is any names(avatars) loaded yet...
			readStatsFormat(results);
		} 
		else {
			return console.log("There are no game stats yet.");
		}
	});
};

///This is for the PLAY HANGMAN Function: /////
function playHangman(answers) {
	console.log("starting the playHangman game in CLI.js...");
	
	// var gamePlay = new GamePlay(); //Does this need to be accessible for the whole playHangman function?
    var userGuess = answers.userGuess;
    
    console.log(userGuess); //testing out letter chosen...
    if (userGuess) {
    	userGuess = answers.userGuess;
    	var gamePlay = new GamePlay();

    	gamePlay.gameSwitch = true;
    	gamePlay.gameOn(userGuess);
    }
    else {
    	var gamePlay = new GamePlay();
    	gamePlay.gameSwitch = false;
    	gamePlay.gameStart(); // gamePlay(userGuess, answers.avatar); //!!!!!!!!!!! ADD A CALLBACK?????? !!!!!!!!!!!!!!!!!!!!  
    }; //need a semicolon here?    
   
    if (!gamePlay.guessesLeft || !gamePlay.lettersLeft) {
        gamePlay.done();

    	if (gamePlay.done) {
        	inquirer.prompt({
            	name: 'playAgain',
            	type: 'confirm',
            	message: 'Ready to play again? Practice makes perfect!'
        	}).then(function(answers) {
            	if (answers.playAgain === true) {
                	playHangman();
            	}
            	else if (answers.playAgain != true){
            		console.log("Thanks for playing. Let us know when you're ready to build up your skills more!");
            		return;	
            	}
       		});
    	};
    }
    else {
   		inquirer.prompt({
           	name: 'userGuess',
            message: 'Press a letter to place your bet'
       	}).then(function(answers) {	
        	gamePlay.gameOn(answers.userGuess);
        });
        playHangman()
    };
};
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

//This is for the PLAYER/ADMIN PATH Function: /////
function promptCallback(answers) {
    if (answers.loginType === 'admin'){
		inquirer.prompt({
			name: 'adminPassword',
			type: 'password',
			message: 'Admin Password: ',
		}).then(function(answers) {
			if(answers.adminPassword) {	
				if(answers.adminPassword === password) {
					readStats();
				}
				else {
					console.log("Plase type in a valid password.");
				}
			}

		});
	}
	else {
	    inquirer.prompt([ {
	      name: 'avatar',
	      message: 'What is your Player Avatar?'
	    },{
	      name: 'gameRules',
	      message: "\n******************************************************************************************\nWelcome to the game of Football Hangman!! If you agree to play this challenge, your game will soon begin. \n\nSports players' jobs are at stake!!  \nYou can keep them in the game by correctly choosing the letters for each Sports word." + 
	      "\nYou have 10 guesses for each word.  After your guess word displays, your guess allotment will decrement each time you make a guess.  \nIf you correctly guess all the letters in the word before you run out of guesses, your player stays in the game!! Otherwise, your player is kicked off the team!" +
	      "\n\nAt the end of each word, your status will be logged for the admin to view." +
	      "\nPress ENTER to continue...\n******************************************************************************************\n"
	    },{
	      name: 'confirmPrompt',
	      type: 'confirm',
	      message: "If you're ready to play, then confirm yes ('Y') to begin.",
		}]).then(function(answers) {
            if(answers.confirmPrompt != true) {
            	// console.log(answers.confirmPrompt); //>>>>> to determine what the confirmPrompt Answers Hash returns --->>>> THIS returns "true/false," where "y= true" and "n=false"; 
            	console.log("Feeling unprepared?  Come back whenever you're ready to try your skills!");  
            }
            else {
	            console.log('\n**************************\nWelcome ' + answers.avatar + '! \nYour game is loading...\n**************************\n');
	           	var hangmanGame = "Hangman Game #" + (n + 1)
	          
	           //////////////////////////////////// initializing of game  ///////////////////////////////////////////
	            var gamePlay = new GamePlay();
	            gamePlay.gameStart();
	            // gamePlay.gameSwitch = true;


	            ////////////////////////////////////  STARTING THE GAME  /////////////////////////////////////////////
		       	inquirer.prompt({
			      name: 'userGuess',
			      message: 'Press a letter to place your bet.'
			    }).then(playHangman);
		    };
  		}); //This is for closing the .then function following the 'confirmPrompt'
	}//To close the "else" statement
};

////////////////////////////////////////////////////////////

//This is for the ONSET Function: /////
inquirer.prompt({
	name: 'loginType',
	type: 'list',
	choices: ['player', 'admin'],
	message: 'Are you a player or an admin? ',
}).then(promptCallback); // Use user feedback for... whatever!!
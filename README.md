# NodeHangman
A responsive guessing game using Node.


### Components

* CLI

  * The CLI determines whether the user is a **admin** or an **player**, and configures the application accordingly.

* Admin

  * The Admin component encapsulates two functions.

    * `gameStats`, which retrieves the chronological list of all the games played, won, and lost by players thusfar; and

    * `newGame`, which runs another game for the player, therein supplying a new word to guess and resetting the `guessesLeft` to 10.


* Player

  * The Player component encapsulates four functions.

  	* `word`, which allows users to play a round of Hangman with a random selected word from an array of NFL-themed words.

  	* `letters`, which displays blanks to represents each letter in the word, and updates the word with correctly chosen letters.

  	* `gameOn`, which keeps account of the remaining letters to be guessed for the current word, and the remaing guesses the player has left.

  	* `gameStats`, which records the number of games won, lost, and played, updating the stats at end of each game round.



* stats.txt

  * This is simply a file we'll use to keep a running total of all the game stats: Games Played, Games Lost, and Games Won. This is used in place of a database.

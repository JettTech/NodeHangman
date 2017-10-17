
var WordArray = function() {
	this. wordArray = ["Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Broncos",
	 "Lions", "Texans", "Colts", "Jaguars", "Chiefs", "Chargers", "Rams", "Dolphins", "Vikings", "Patriots", "Saints", "Giants",
	 "Jets", "Raiders", "Eagles", "Steelers", "49ers", "Seahawks", "Buccaneers", "Titans", "Redskins", "Wings", "Pizza", "Hot Dogs",
	 "BBQ", "Stadiums", "Half Time", "Quarterback", "RunningBack", "Foul", "Referee", "Touchdown", "Points", "Fan", "Helmut", "Popcorn",
	 "Beer", "Anthem Songs", "Soda", "Cheers", "Applause", "Booing", "Winning Team", "Confetti", "Fall", "NFL", "Football", "Pass", "Throw", 
	 "Kick", "Linebacker", "Tackle", "Timeout", "Tailgate"];
	this.wordRandomMath = Math.floor(Math.random() * this.wordArray.length);
	this.wordRandom = this.wordArray[this.wordRandomMath];
	this.wordArrRandom = [this.wordRandom];
};
module.exports = WordArray;
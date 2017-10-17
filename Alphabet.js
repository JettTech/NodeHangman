var lowerA = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperA = [];
var makeUpperA = function() {
	lowerA.map( function(i) { 
		upperA.push(i.toUpperCase());
		})
};
makeUpperA();


var Alphabet = function() {
	this.fullA = lowerA.concat(upperA);
};
module.exports = Alphabet;
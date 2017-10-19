var fs = require('fs');
var inquirer = require('inquirer');
var WordArray = require('./WordArray.js');

Array.prototype.diff = function(arr) { /// !!!!! REVIEW THIS IN MUCH MORE... DETAILS/DEPTH !!!!!
    return this.filter(function(i) {
      return arr.indexOf(i) < 0;
    });
};

var Words = function() {
  var wordArrayNew = new WordArray();
  var wordArray = wordArrayNew.wordArrRandom;
  this.guessedWordsArr = [];
  this.word = wordArray.diff(this.guessedWordsArr); //this returns the word as an array IF it has not already been played...
  this.check = function() {
    console.log(this.word); //TO check word,.. and also verify that it has NOT YET BEEN played!
  }
};
module.exports = Words;


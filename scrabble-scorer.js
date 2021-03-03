// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};



function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //



function initialPrompt() {
	userWord = input.question("Let's play some scrabble! Enter a word: ")
};



let simpleScore = function(word) {
	word = word.toUpperCase();
	let points = 0;

	for (let i = 0; i < word.length; i++) {
		points += 1
		// console.log(points)
	}
	return points;
};



let vowelBonusScore = function(word) {
	word = word.toUpperCase();
	
	const vowelCount = word.match(/[aeiou]/gi).length;
	let vowelPoints = vowelCount * 3;
	let constPoints = word.length - vowelCount;
	let wordPoints = constPoints + vowelPoints;

	// console.log("there are " + vowelCount + " vowels in " + word + " with 3 points each, making the vowel score " + vowelPoints + " plus " + constPoints + " points for constanants. The total score for this word is " + (vowelPoints + constPoints))

	return wordPoints
};



let scrabbleScore = function(word) {

	word = word.toLowerCase();
	let letterPoints = "";
	score = 0;

	for (let i = 0; i < word.length; i++) {

	  for (const pointValue in newPointStructure) {
 
		 if (pointValue === word[i]) {
			// letterPoints += `Points for '${word[i]}': ${newPointStructure[pointValue]}\n`

			score += newPointStructure[pointValue];
		 }
 
	  }
	}
	
	return score;
};





function scorerPrompt() {
	scorer = input.question("\nWhich scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ")

	console.log("algorithm name: ", scoringAlgorithms[scorer].name);
	console.log("scorerFunction result: ", scoringAlgorithms[scorer].scoringFunction(userWord));
}


const scoringAlgorithms = [
	{
		name: "Simple Score",
		description: "Each letter is worth 1 point",
		scoringFunction: simpleScore,
	},
	{
		name: "Bonus Vowels",
		description: "Vowels are 3 pts, consonants are 1 pt.",
		scoringFunction: vowelBonusScore,
	},
	{
		name: "Scrabble",
		description: "The traditional scoring algorithm.",
		scoringFunction: scrabbleScore,
	}
];


function transform(obj) {
	newObj = {}

	for (const prop in obj) {

		for (let i = 0; i < obj[prop].length; i++) {
			
			newObj[obj[prop][i].toLowerCase()] = Number(prop)
		}		
	}
	return newObj
};


let newPointStructure = transform(oldPointStructure);


function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


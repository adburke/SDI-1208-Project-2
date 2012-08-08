/*
	Aaron Burke
	08/06/2012
	Project 2
	Making Spaghetti
*/

var ingredients = ["pasta", "sauce", "meatballs", "mushrooms", "onions"];
var readyToCook = true;
var boiling = true;

// Procedure Function
var readyCheck = function (state) {
	if (state) {
		console.log("We are ready to cook some spaghetti!");
	}
	else {
		console.log("Get your act together we are hungry!");
	}
};

// Boolean Function
var cookPasta = function (waterBoil, minutesBoiling) {
	if ((waterBoil === true) && (minutesBoiling < 8 )) {
		console.log("The pasta is still cooking. Keep stirring!");
		stirPasta(minutesBoiling); // Stirs the pasta until completion
	}
	else {
		console.log("The pasta is finished!");
		return true;
	}
};

// Number Function
var stirPasta = function (minutesBoiling) {
	while (minutesBoiling <= 8){
		var stirCount = minutesBoiling * 2; // 2 Stirs for every minute
		console.log(minutesBoiling + " Minutes of stiring pasta." + "Total stir count:" + stirCount);
		minutesBoiling++;
	}
	return cookPasta(true,minutesBoiling); //Reports back to the cookPasta function that it is fininshed
};

// String Function


readyCheck(readyToCook);

cookPasta(boiling,2);







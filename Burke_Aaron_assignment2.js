/*
	Aaron Burke
	08/06/2012
	Project 2
	Making Spaghetti
*/

var ingredients = ["pasta", "sauce", "meatballs", "mushrooms", "onions"];
var readyToCook = true;
var boiling = true;
var cookBook = "The Joy of Cooking";
var reader = "iPad";

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
	if ((waterBoil) && (minutesBoiling < 8 )) {
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
var recipeLookup = function (source, medium) {
	var lookup = "I will look up a recipe from " + source + " using the " + medium + ".";
	return lookup;
};

readyCheck(readyToCook);

cookPasta(boiling,2);
var lookup = recipeLookup(cookBook,reader);








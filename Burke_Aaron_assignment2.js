/*
	Aaron Burke
	08/06/2012
	Project 2
	Making Spaghetti
*/

var sauceIngredients = ["mushrooms", "onions", "garlic", "tomato paste", "tomato puree", "basil", "oregano", "parsley"];
var readyToCook = true;
var boiling = true;
var boilMins = 2;
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
		return false;
	}
	else {
		console.log("The pasta is finished!");
		return true;
	}
};

// Number Function
var stirSausage = function (cookingTime) {
	var finishTime = 15;
	while (cookingTime <= finishTime){
		var stirCount = cookingTime * 2; // 2 Stirs for every minute
		if (cookingTime == 1){
			console.log(cookingTime + " minute of stiring the sausage." + "Total stir count:" + stirCount);
			cookingTime++;
		}
		else {
			console.log(cookingTime + " minutes of stiring the sausage." + "Total stir count:" + stirCount);
			cookingTime++;
		}
	}
	return stirCount;
};

// String Function
var recipeLookup = function (source, medium) {
	var recipe = "I will look up a recipe from " + source + " using the " + medium + ".";
	return recipe;
};

// Array Function
var cookSauce = function (cookTime, ingredients) {
	for (var i = 0; i < sauceIngredients.length; i++){
		console.log("Put the " + ingredients[i] + " in the pan!");
	}
	console.log("Everything is in the pan. Cook the sauce for " + cookTime + " minutes.");
	return ingredients;
};



readyCheck(readyToCook); // Call readyCheck
var cookedPasta = cookPasta(boiling, boilMins); // Call cookPasta and hold its return
var stirCount = stirSausage(1);
var recipe = recipeLookup(cookBook,reader); // Call recipeLookup and hold its return
var test = cookSauce(2, sauceIngredients);

console.log(cookedPasta);
console.log(stirCount);
console.log(recipe);
console.log(test);









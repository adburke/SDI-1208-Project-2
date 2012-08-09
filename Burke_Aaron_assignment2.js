/*
	Aaron Burke
	08/06/2012
	Project 2
	Making Spaghetti
*/

var sauceIngredients = ["mushrooms", "onions", "garlic", "tomato paste", "tomato puree", "basil", "oregano", "parsley"];
var readyToCook = true;
var boiling = true;
var boilMins = 9;
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
var cookSausage = function (cookingTime) {
	var finishTime = 15;
	while (cookingTime <= finishTime){
		var timeLeft = finishTime - cookingTime; // 2 Stirs for every minute
		if (cookingTime == 1){
			console.log(cookingTime + " minute of stiring the sausage down." + "Time remaining:" + timeLeft);
			cookingTime++;
		}
		else {
			console.log(cookingTime + " minutes of stiring the sausage down." + "Time remaining:" + timeLeft);
			cookingTime++;
		}
	}
	console.log("The sausage is finished!");
	return stirCount;
};

// String Function
var recipeLookup = function (source, medium) {
	var recipe = "I found the recipe from " + source + " using the " + medium + ".";
	return recipe;
};

// Array Function
var cookSauce = function (batchSize, ingredients) {
	var sauceCookTime = 10; // Time to cook a single batch of sauce
	if (batchSize < 2) {    // Checks for batch size
		sauceCookTime = 10;
	}
	else {
		sauceCookTime = sauceCookTime * batchSize / 2;  // Larger batch sizes take longer to cook
	}
	
	for (var i = 0; i < sauceIngredients.length; i++){
		if (batchSize < 2){
			console.log("Put the " + ingredients[i] + " in the pan!");
		}
		else {
			console.log("Put " + batchSize + "x the " + ingredients[i] + " in the pan!");
		}

	}
	console.log("Everything is in the pan. Cook the sauce for " + sauceCookTime + " minutes.");
	while (sauceCookTime > 0){
		if (sauceCookTime == 1){
			console.log("Sauce is cooking away! Only " + sauceCookTime + " minute left.");
		}
		else {
		console.log("Sauce is cooking away! Only " + sauceCookTime + " minutes left.");
		}
		sauceCookTime--;
	}
	console.log("Sauce is finished!");
	return ingredients;
};



readyCheck(readyToCook); // Call readyCheck
var cookedPasta = cookPasta(boiling, boilMins);
if (cookedPasta === true){
	var stirCount = cookSausage(13);
}
else {

}
//var stirCount = cookSausage(1);
var recipe = recipeLookup(cookBook,reader);
var test = cookSauce(3, sauceIngredients);

console.log(cookedPasta);
console.log(stirCount);
console.log(recipe);


//console.log("Your sauce tastes great! What did you put in it?");
//console.log("These were the ingredients: " + test.join() + ".");









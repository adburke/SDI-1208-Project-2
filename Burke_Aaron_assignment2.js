/*
	Aaron Burke
	08/06/2012
	Project 2
	Making Spaghetti
*/

var sauceIngredients = ["mushrooms", "onions", "garlic", "tomato paste", "tomato puree", "basil", "oregano", "parsley"]; // Ingredients for sauce
var readyToCook = true;  // Are you ready to cook?
var waterBoiling = true; // Is the water boiling?
var waterBoilMins = 10;   // How long it has been boiling
var cookBook = "The Joy of Cooking"; // Cookbook used
var reader = "iPad"; // Medium for reading

// Procedure Function - Checks to see if you are ready to cook or not
var readyCheck = function (state) {
	if (state) {
		console.log("We are ready to cook some spaghetti!");
	}
	else {
		console.log("Get your act together we are hungry!");
	}
};

// Boolean Function - Decides if the pasta is done cooking or not
var cookPasta = function (waterBoil, minutesBoiling) {
	if ((waterBoil || !waterBoil) && (minutesBoiling < 8 )) {
		console.log("The pasta is still cooking. Keep stirring!");
		return false;
	}
	else if (!waterBoil && (minutesBoiling > 8)){
		console.log("Well how have you been cooking pasta without the water boiling?");
		return false;
	}
	else {
		console.log("The pasta is finished!");
		return true;
	}
};

// Number Function - Checks how long the sausage has been cooking and cooks it for the rest of the time.
var cookSausage = function (cookingTime) {
	var finishTime = 15;
	var timeLeft = finishTime - cookingTime;
	while (cookingTime <= finishTime){
		if (cookingTime == 1){
			console.log(cookingTime + " minute down. Stir the sausage!" + " Time remaining:" + timeLeft + " minutes.");
			cookingTime += 5;
		}
		else {
			console.log(cookingTime + " minutes down. Stir the sausage!" + " Time remaining:" + timeLeft + " minutes.");
			cookingTime += 5;
		}
	}
	console.log("The sausage is finished!");
	return timeLeft; // returns how much time was left to cook when the function was called
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
		sauceCookTime -= 5;
	}
	console.log("Sauce is finished!");
	return ingredients;
};



readyCheck(readyToCook); // Call readyCheck Procedure
console.log(" ");
var cookedPasta = cookPasta(waterBoiling, waterBoilMins); // Call cookPasta Boolean function
console.log(" ");
var timeLeft = cookSausage(2); // Call cookSausage Number function
var recipe = recipeLookup(cookBook,reader); // Call recipeLookup String function
console.log(" ");
var sauce = cookSauce(3, sauceIngredients); // Call cookSauce Array function

console.log(" ");
console.log("Has the pasta finished cooking?");
if (cookedPasta === true){
	console.log("Didn't you hear us before?! We said the pasta was done cooking.");
}
else {
	console.log("Nope still boiling away apparently.");
}
console.log(" ");
console.log("How much time is left on the sausage?");
console.log("The sausace has " + timeLeft + " minutes left.");
console.log(" ");
console.log("Great recipe where did you find it?");
console.log(recipe);
console.log(" ");
console.log("Your sauce tastes great! What did you put in it?");
console.log("These were the ingredients: " + sauce.toString() + ".");










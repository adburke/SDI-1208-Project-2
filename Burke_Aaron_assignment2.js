/*
	Aaron Burke
	08/06/2012
	Project 2
	Making Spaghetti
*/

var ingredients = ["pasta", "sauce", "meatballs", "mushrooms", "onions"];
var readyToCook = true;
var boiling = true;
var boilTimeMin = 8;
var cupsOfWater = 8;
var pastaBags = 1;

// Procedure Function
var readyCheck = function (state) {
	if (state) {
		console.log("We are ready to cook some spaghetti!");
	}
	else {
		console.log("Get your act together we are hungry!");
	}
};

var cookPasta = function (waterBoil, minutesBoiling) {
	if ((waterBoil) && (minutesBoiling < 8 )) {
		console.log("The pasta is still cooking. Keep stirring!");
		stirPasta(minutesBoiling);
	}
	else {
		console.log("The pasta is finished!");
	}
	return true;
};

var stirPasta = function (minutesBoiling) {
	while (minutesBoiling < 8){
		var stirCount = minutesBoiling * 20;
		minutesBoiling++;
	}

};

readyCheck(readyToCook);








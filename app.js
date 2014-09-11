$(document).ready(function() {
	var num = prompt("Please enter a number for FizzBuzz Experience");
	num = +num;
	while (isNaN(num) === true) {
		num = prompt("Make sure to enter a numerical value for FizzBuzz Experience");
		num = +num;
	}
	while (num % 1 != 0) {
		num = prompt("Make sure to enter an integer with no decimal point for optimal FizzBuzz Experience");
	}
	var fizzBuzzMaker = function (num) {
		for (i = 1; i <= num; i++) {
			if ((i % 3 === 0) && (i % 5 === 0)) {
				$('body').append("<p>FizzBuzz</p>");
			} else if (i % 3 === 0) {
				$('body').append("<p>Fizz</p>");
			} else if (i % 5 === 0) {
				$('body').append("<p>Buzz</p>");
			} else {
				$('body').append("<p>"+i+"</p>");
			}
		}
	}
	fizzBuzzMaker(num);
})
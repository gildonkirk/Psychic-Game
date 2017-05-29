var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a",
"s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 9;
var compLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
	var userLetter = event.key;
	console.log(userLetter);
	console.log(compLetter);
	if(userLetter === compLetter) {
		winCounter++;
		compLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	} else {
		guessCounter--;
		document.getElementById("guessKey").innerhtml = (userLetter + ", ");
	}

	if(guessCounter < 1) {
	lossCounter++;
	guessCounter = 9;
	document.getElementById("guessKey").innerHTML = "";
	}
}

 // var winsText = document.getElementById('winCounter')
 // winsText.textContent = winCounter
 // var lossesText = document.getElementById('lossCounter')
 // lossesText.textContent = lossCounter
 // var guessText = document.getElementById('guessCounter')
 // guessText.textContent = guessCounter

document.getElementById("winCounter").innerHTML = winCounter;
document.getElementById("lossCounter").innerHTML = lossCounter;
document.getElementById("guessCounter").innerHTML = guessCounter;
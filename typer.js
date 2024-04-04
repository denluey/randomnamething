let heading = document.getElementById("words");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("answertext");
let inputElement = document.getElementById("myInput");

let deaths = ["running", "fighting", "swimming", "dancing", "flying", "sleeping","swimming"]


executeButton.addEventListener("click", function(){
	let currentInputText = inputElement.value;
	generate(currentInputText);
	demonstrationFunction();
})


function demonstrationFunction(){

	//the enter
	let currentInputText = inputElement.value;
	//random stuff

	let randomRed = Math.random() * 255;
	let randomGreen = Math.random() * 255;
	let randomBlue = Math.random() * 255;

	var thecolor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
	console.log(thecolor);

	answertext.style.color = thecolor;

	let randRot = -10 +(Math.random()*20);
	answertext.style.transform = "rotate(" + randRot+ "deg)";


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var thesize = getRandomInt(20, 100);
console.log(thesize);

	answertext.style.fontSize =  thesize+"px";

}

function generate(incUserInput) {
	var randomIndex = Math.floor(Math.random() * deaths.length);
	console.log(randomIndex);
	var selectedDeathText = deaths[randomIndex];
	outputParagraph.innerText = incUserInput+ " will die "+selectedDeathText;
}
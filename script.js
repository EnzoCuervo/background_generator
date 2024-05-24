var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random1 = document.getElementById('random1');
var random2 = document.getElementById('random2');
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function getCharacter(index) {
	return hexCharacters[index]
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function generateNewColor() {
	let hexColorRep = "#";

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}

function setColor1() {
	var newColor = generateNewColor();
	color1.value = newColor;
	setGradient()

}

function setColor2() {
	var newColor = generateNewColor();
	color2.value = newColor;
	setGradient()

}

body.style.background = setGradient();

random1.addEventListener("click", setColor1);

random2.addEventListener("click", setColor2);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); 

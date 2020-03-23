// var p1Button = document.querySelector("#p1");
// var p2Button = document.getElementById("p2");
// var resetButton = document.getElementById("reset");
// var p1Display = document.querySelector("#p1Display");
// var p2Display = document.querySelector("#p2Display");
// var numInput = document.querySelector("input");
// var winningScoreDisplay = document.querySelector("p span");
// var p1Score = 0;
// var p2Score = 0;
// var gameOver = false;
// var winningScore = 5;

// p1Button.addEventListener("click", function(){
// 	if(!gameOver){
// 		p1Score++;
// 		if(p1Score === winningScore){
// 			p1Display.classList.add("winner");
// 			gameOver = true;
// 		}
// 		p1Display.textContent = p1Score;
// 	}
// });

// p2Button.addEventListener("click", function(){
// 	if(!gameOver){
// 		p2Score++;
// 		if(p2Score === winningScore){
// 			p2Display.classList.add("winner");
// 			gameOver = true;
// 		}
// 		p2Display.textContent = p2Score;
// 	}
// });

// resetButton.addEventListener("click", function(){
// 	reset();
// });

// function reset(){
// 	p1Score = 0;
// 	p2Score = 0;
// 	p1Display.textContent = 0;
// 	p2Display.textContent = 0;
// 	p1Display.classList.remove("winner");
// 	p2Display.classList.remove("winner");
// 	gameOver = false;
// }

// numInput.addEventListener("change", function(){
// 	winningScoreDisplay.textContent = this.value;
// 	winningScore = Number(this.value);
// 	reset();
// });




let p1Button = document.querySelector('#p1');
let p2Button = document.getElementById('p2');
let resetButton = document.getElementById('reset');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let numInput = document.querySelector('input');
let winningScoreDisplay = document.querySelector('#maxScore');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener('click', () => {
	if(!gameOver) {
		p1Score++;
		if(p1Score === winningScore) {
			p1Display.classList.add('winner');
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', () => {
	if(!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			p2Display.classList.add('winner');
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener('click', () => {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
}

numInput.addEventListener('change', () => {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	});

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	});

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}

// let firstList = document.querySelectorAll('li');

// for (let i = 0; i < firstList.length; i++) {
// 	firstList[i].addEventListener('mouseover', () => {
// 		this.style.color = 'green';
// 	});
// 	firstList[i].addEventListener('mouseout', () => {
// 		this.style.color = 'black';
// 	});
// }
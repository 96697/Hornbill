let counterPlusElem = document.getElementById('counter-plus');
let counterDisplayElem = document.getElementById('counter-display');
let content = counterDisplayElem.innerHTML;

let count = 0;

updateDisplay();

counterPlusElem = document.addEventListener("click",()=>{
	console.log("click");
	count++;
	updateDisplay();
}) ;

function updateDisplay(){
	counterDisplayElem.innerHTML = content + count.toString();
};
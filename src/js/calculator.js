

const gameContainer =document.getElementById("4")
gameContainer.innerHTML =(`
    <input id="num1" />
    <div id="operator_btns">
      <button id="plus" class="operator">+</button>
      <button id="minus" class="operator">-</button>
      <button id="extrude" class="operator">x</button>
      <button id="spread" class="operator">:</button>
    </div>
    <input id="num2">
    <button id="button-Result">Дорівнює</button>
    
    <p id="result"></p>
    
  `)
let firstNum = "";
let secondNum = "";
let result = "";
let mathAction ="";



function getNumber(event){
  let el = event.target
  let value =el.value
  if (el.id === 'num1' ) {
    firstNum = value 
    console.log(`first number is ${firstNum}`)
  } else if (el.id === 'num2' ) {
    secondNum = value
    console.log(`second number is ${secondNum}`)
  } else {
    console.log("eror getNumber")
  }
  
}


let mathActionButtons = document.querySelectorAll(".operator");
let actionResult = document.querySelector("#button-Result");
[...mathActionButtons].forEach(element => {
  element.addEventListener("click", setMathAction)
})
actionResult.addEventListener("click", getResult)

function setMathAction(event){
  let el = event.target;
  mathAction = el.id;
  console.log(mathAction)
}
function getResult(){
  choseAction(mathAction)
}
function choseAction(mathAction){
  let firstNum = undefined;
  let secondNum = undefined;
  firstNum = document.getElementById("num1").value
  secondNum = document.getElementById("num2").value
  if (mathAction === "plus"){
    result = firstNum*1 + secondNum*1
  }
  else if(mathAction === "minus"){
    result = firstNum*1 - secondNum*1
  }
  else if(mathAction === "extrude"){
    result = firstNum*1 * secondNum*1
  }
  else if(mathAction === "spread"){
    result = firstNum*1 / secondNum*1
  }
  let resultblock = document.getElementById('result')
  resultblock.innerHTML = result
}





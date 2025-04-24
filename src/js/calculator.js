

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
let firstNum = undefined;
let secondNum = undefined;
let result = undefined;



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


function setMathAction(event){
  let el = event.target;
  mathAction = el.id;
  console.log(mathAction)
  actionResult.addEventListener("click", getResult)
}
function getResult(){
  choseAction()
}
function choseAction(){
  if (mathAction === "plus"){
    result = firstNum + secondNum
  }
  else if(mathAction === "minus"){
    result = firstNum - secondNum
  }
  else if(mathAction === "extrude"){
    result = firstNum * secondNum
  }
  else if(mathAction === "spread"){
    result = firstNum / secondNum
  }
}





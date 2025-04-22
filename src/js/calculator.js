

const gameContainer =document.querySelector("#4")
gameContainer.innerHTML =(`<input id="num1" oninput="getNumber(event)"/>
    <div id="operator_btns">
      <button id="plus" class="operator">+</button>
      <button id="minus" class="operator">-</button>
      <button id="extrude" class="operator">x</button>
      <button id="spread" class="operator">:</button>
    </div>
    <input id="num2" oninput="getNumber(event)"/>
    <button onclick="func()">равняется</button>
    
    <p id="result"></p>`)
let firstNum = undefined;
let secondNum = undefined;
let result = undefined;
let mathAction = undefined;


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

[...mathActionButtons].forEach(element => {
  element.addEventListener("click", setMathAction)
})


function setMathAction(event){
  let el = event.target;
  mathAction = el.id;
  console.log(mathAction)
}

if (mathAction === "plus"){
  result = firstNum + secondNum
}
// else if
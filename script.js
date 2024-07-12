let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null


function updateDisplay() {
  const display = document.getElementById('display')
  display.innerText = displayValue
}



// stop numbers when they don't fit
//add click sound to buttons
// create a box with memory or what numbers where clicked and a clear button to clear all that is a pop up with a icon to pop up
// make it flip with results in the back
// add characters pop on the side


const newColor = document.createElement('button')
const btnClear = document.querySelector(".btn-clear")
newColor.classList.add("btn")
newColor.classList.add("color")
newColor.textContent = "🎨"
btnClear.insertAdjacentElement("afterend", newColor)

const memory = document.createElement('button')
memory.classList.add("btn")
memory.classList.add("memory")
memory.textContent = "🧠"
newColor.insertAdjacentElement("afterend", memory)





const calculatorDisplay = document.querySelector('.calculator')
calculatorDisplay.style.backgroundColor = 'pink'



let colorIdx = 0;
const colors = ["#91bec7", "#e127f2", "red", "black", "pink"];

const newColorButton = document.querySelector('.color');
newColorButton.addEventListener('click', evt => {
  colorIdx =  Math.floor(Math.random() * colors.length)         //(colorIdx + 1) % colors.length;
  calculatorDisplay.style.backgroundColor = colors[colorIdx];
});

calculatorDisplay.style.boxShadow = '1px 1px 25px 10px'
calculatorDisplay.style.border = "thick solid black"

const body = document.querySelector('body');

body.style.backgroundImage = 'url("popart.jpg")';
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';

const buttonHover = document.querySelector('.buttons')
buttonHover.classList.add('hover')
const hover = document.querySelector('.hover')

hover.addEventListener('mouseover', evt => {
hover.style.backgroundColor = 'white'
})

hover.addEventListener('mouseout', evt => {

  hover.style.backgroundColor = ""
})



const header = document.createElement('h1')
header.classList.add('title')
header.textContent = 'CALCULATOR!!!!'
header.style.fontSize = "5rem"
header.style.fontFamily = "myFont"
header.style.textShadow = "-12px 5px #3c3ba7"
header.style.color ="#fc30da"
header.style.display = "flex"
header.style.justifyContent = "center"
header.style.alignItems = "center"
header.style.padding = "20px"
header.style.marginTop ="0px"
header.style.marginBottom ="0px"
body.insertAdjacentElement('afterbegin', header)

const footer = document.createElement('footer')
footer.textContent = "Design By Farhana Aktar - 2024"
footer.style.fontWeight = "bolder"
footer.style.fontFamily = "cursive"
footer.style.padding = "20px"
body.appendChild(footer)







function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number.toString()
  } else {
    displayValue += number.toString()
  }
  updateDisplay()
}

function appendOperator(operator) {
  if (currentOperator !== null) {
    calculate()
  }
  firstOperand = parseFloat(displayValue)
  currentOperator = operator
  displayValue = '0'
}

function calculate() {
  secondOperand = parseFloat(displayValue)
  if (currentOperator === '+') {
    displayValue = (firstOperand + secondOperand).toString()
  } else if (currentOperator === '-') {
    displayValue = (firstOperand - secondOperand).toString()
  } else if (currentOperator === '*') {
    displayValue = (firstOperand * secondOperand).toString()
  } else if (currentOperator === '/') {
    displayValue = (firstOperand / secondOperand).toString()
  }
  updateDisplay()
  firstOperand = null
  secondOperand = null
  currentOperator = null
}

function clearDisplay() {
  displayValue = '0'
  firstOperand = null
  secondOperand = null
  currentOperator = null
  updateDisplay()
}

updateDisplay()

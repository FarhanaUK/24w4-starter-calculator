let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null

function updateDisplay() {
  const display = document.getElementById('display')
  display.innerText = displayValue
}


// make it flip with results in the back
// change color when clicked on buttons but reverts when enter or cleared
// create a box with memory or what numbers where clicked and a clear button to clear all that is a pop up with a icon to pop up
// at the top do a cool font with a cool calculator name 

const calculatorDisplay = document.querySelector('.calculator')
calculatorDisplay.style.backgroundColor = 'pink'

calculatorDisplay.style.boxShadow = '10px 20px 30px'
calculatorDisplay.style.border = "thick solid black"

const body = document.querySelector('body');

body.style.backgroundImage = 'url("poparts.jpg")';
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';goi

const buttonHover = document.querySelector('.buttons')
buttonHover.classList.add('hover')
const hover = document.querySelector('.hover')

hover.addEventListener('mouseover', evt => {
hover.style.backgroundColor = '#FF69B4'
})

hover.addEventListener('mouseout', evt => {

  hover.style.backgroundColor = ""
})



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

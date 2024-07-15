let displayValue = '0'
let firstOperand = null
let secondOperand = null
let currentOperator = null


function updateDisplay() {
  const display = document.getElementById('display')
  display.innerText = displayValue
}

//added random color change button
const newColor = document.createElement('button')
const btnClear = document.querySelector(".btn-clear")
newColor.classList.add("btn")
newColor.classList.add("color")
newColor.textContent = "🎨"
btnClear.insertAdjacentElement("afterend", newColor)

const calculatorDisplay = document.querySelector('.calculator')
calculatorDisplay.style.backgroundColor = 'pink'


let colorIdx = 0;
const colors = ["#91bec7", "#e127f2", "red", "black", "pink"];

const newColorButton = document.querySelector('.color');
newColorButton.addEventListener('click', () => {
  colorIdx =  Math.floor(Math.random() * colors.length)         //(colorIdx + 1) % colors.length;
  calculatorDisplay.style.backgroundColor = colors[colorIdx];
});

// added a music button
const music = document.createElement('button')
music.classList.add("btn")
music.classList.add("music")
music.textContent = "𝄞."
newColor.insertAdjacentElement("afterend", music)

const musicButton = document.querySelector(".music")



const sounds = new Audio('jazz.mp3');
let musicOn = false

function toggleMusic() {
  if (musicOn) {
    sounds.pause()
  } else {
    sounds.play()
  }
  musicOn = !musicOn
}


musicButton.addEventListener('click', toggleMusic)


//added a background shadow
calculatorDisplay.style.boxShadow = '1px 1px 25px 10px'
calculatorDisplay.style.border = "thick solid black"

//added a backgound image
const body = document.querySelector('body');

body.style.backgroundImage = 'url("popart.jpg")';
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';

//added colour change on buttin when hovering
const buttons = document.querySelector('.buttons')
buttons.classList.add('hover')
const hover = document.querySelector('.hover')

hover.addEventListener('mouseover', evt => {
hover.style.backgroundColor = 'white'
})

hover.addEventListener('mouseout', evt => {

  hover.style.backgroundColor = ""
})

//added button click sound
function clickSound() {
  let sound = new Audio('sound.mp3')
  sound.play()
}

buttons.addEventListener('click', clickSound)

//added a header "CALCULATOR"
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

//added a footer
const footer = document.createElement('footer')
footer.textContent = "Design By Farhana Aktar - 2024"
footer.style.fontWeight = "bolder"
footer.style.fontFamily = "cursive"
footer.style.padding = "20px"
body.appendChild(footer)


//added a limit to numbers on display
function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number.toString()
  } else {
    displayValue += number.toString()
   }
    if(displayValue.length > 18){
      displayValue = displayValue(0,display.maxlength)
      
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

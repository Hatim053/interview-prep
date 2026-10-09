const display = document.querySelector('.display')
const buttons = document.querySelector('.buttons')

let selectedOperator = false
let operator;
let firstArgument = ''
let secondArgument = ''
let result = ''
let amount = 0

buttons.addEventListener('click' , (e) => {
    const buttonPressed = e.target.innerText
    console.log(buttonPressed)
    if(buttonPressed == '+' || buttonPressed == '-' || buttonPressed == '/' || buttonPressed == '*' || buttonPressed == '='|| buttonPressed == 'C') {
      
           if(buttonPressed == '=') {
            if(operator == '+') amount =  (Number(firstArgument || 0)) + (Number(secondArgument || 0))
            else if(operator == '-') amount =  (Number(firstArgument || 0)) - (Number(secondArgument || 0))
            else if(operator == '*') amount =  (Number(firstArgument || 0)) * (Number(secondArgument || 0))
            else if(operator == '/') amount =  (Number(firstArgument || 0)) / (Number(secondArgument || 0))
            firstArgument = amount
             secondArgument = ''
            display.innerText = amount
         } else {
            operator = buttonPressed
            selectedOperator = true
         }

    } else {
        // number is pressed
        if(!selectedOperator) {
            // means first argumenet
            firstArgument += buttonPressed
            console.log(firstArgument)
        } else {
            secondArgument += buttonPressed
            console.log(secondArgument)
        }
    }
    result += buttonPressed
    display.innerText = result
})


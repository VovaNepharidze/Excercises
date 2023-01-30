'use strict';


function simpleCalculator (){
    let number1=  Number(prompt("please enter first number:"))
    let mathOperation = prompt("please choose math operation: + - * / ")
    let number2=  Number(prompt("please enter second number:"))
    
        if(mathOperation === '+'){
        return number1 + number2
    }else if(mathOperation === '-'){
        return number1 - number2
    }else if(mathOperation === '/'){
        return number1 / number2
    }else if(mathOperation === '*'){
        return number1 * number2
    }
}

const result = simpleCalculator()
console.log(`the result of mathematical operation you choose is : ${result}`)


function removeSpaces(array){
    let newarray =""
    for (let i = 0; i < array.length; i++) {
        if(array[i] !== " "){
            newarray += array[i]
        }
    }return newarray

}

let array = 'hello My crazy world'
console.log(removeSpaces(array))
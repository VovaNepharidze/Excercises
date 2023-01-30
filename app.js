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


//////find shortests strings//////

function findShortestString(arr){
    let shorteststring = [arr[0]];
    let shortestLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortestLength ){
            shorteststring = [arr[i]];
            shortestLength = arr[i].length
        }else if(arr[i].length === shortestLength){
            shorteststring.push(arr[i])
        }
    }return shorteststring;
}


const array2 = ['levani','anuki','qeti','guga']
console.log(findShortestString(array2))


// fourth exercise//

function reverseArray(arr){
    return arr.reverse();
}

let array1 = [1,2,3]
console.log(reverseArray(array))


// fourth exercise (2) //

function reverseArray(arr){
    let arr2=[];
    for (let i = 0; i < arr.length; i++) {
        arr2.unshift(arr[i]);
    }return arr2;
}

const array3 = [0,1,2,3]
const newArray = reverseArray(array)
console.log(newArray)


function array(arr){
    let sum=0;

    for (let i = 0; i < arr.length; i++){
        sum = sum +arr[i]
    }

    return sum;
}

const numbers=[5,10,15,20]
const sum = array(numbers)
console.log(`The sum of all the numbers in the array is : ${sum}`)
'use strict';

// let calcAverage = (score1,score2,score3) => (score1 + score2 + score3) / 3 ;

// let dolphinsAverageScore = calcAverage(44,83,71);
// let koalasAverageScore = calcAverage(25,30,29);

// console.log(dolphinsAverageScore,koalasAverageScore)


// let checkWinner = (averageDolphins , averageKoalas) => {
//     if(averageDolphins > (2*averageKoalas)){
//         return `dolphins are winners with average score ${averageDolphins}`
//     }else if(averageKoalas > (2*averageDolphins)){
//         return `koalas are winners with average score ${averageKoalas}`
//     }else{
//         return `no team is winner`
//     }
// }


// console.log(checkWinner(dolphinsAverageScore,koalasAverageScore)) 


// const calcAge = function(birthYear){
//     return 2023 - birthYear
// }

// const years = [1990,1965,1984,1992];

// const age1= calcAge(years[0])
// console.log(age1) 


// const calctip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2 ;

// console.log(calctip(400));


// const tips = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])];

// const total =[bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

// console.log(bills,tips,total);

// console.log(bills.splice(1,1,55))
// console.log

// const number = 2;

// switch (number){
//     case 1 :
//         console.log("number 1");
//         break;

//     case 2 :
//         console.log("number 2")
//         break;    
// }



// for(let i in bills){
//     console.log(bills[i])
// }

// for(let i =0 ; i < bills.length ; i ++){
//     console.log(bills[i])
// }


// let arr = [3,6,8,29];
// arr.foo = "hello"; 
// for (let i in arr) {
// console.log(i); // logs "0", "1", "2", "foo"
// }
    
// for (let i of arr) {
// console.log(i); // logs "3", "5", "7"
//   // it doesn't log "3", "5", "7", "hello"

// }

// const vova = {
//     id : '01008046753' ,
//     firstName : 'vova',
//     lastName : 'nepharidze',
//     birthYear : 1989,
//     friends : ['cxvedo','achi'],

//     calcAge : function () {
//         return 2023 - this.birthYear
//     }
// }

// console.log(vova.calcAge())

// const intresedIn = prompt('choose what u want to know about vova ')
// console.log(vova.intresedIn) // ამ დროს არ დალოგავს იმიტომ რომ მსგავსი ცვლადი არ არის ობიექტში
// console.log(vova[intresedIn])




// const numbers = [10,20,30,51]
// let numbersSum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//     numbersSum = numbersSum + numbers[i]
// }

// console.log(`Sum of this is : ${numbersSum}`);


// const sawvavi = [10,20,30,51] ;

// const shopping = [20,15,30 ] ;



// function sum (arr){
//     let numbersSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//             numbersSum += arr[i]
//         }
//         if(numbersSum>100){
//             return numbersSum
//         }
// }

// console.log(sum(sawvavi))


// let ages = [32, 33, 18, 40];
// let adult = ages.every(age => age >= 18);
// console.log(adult); // Output: false

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 2);
// console.log(arr); 

// let arr = [1, 2, 3, 4, 5];
// arr.fill(8,2,5);
// console.log(arr); 

// let arr = [1, 2, 3, 4, 5];
// let evenNumbers = arr.filter(function(value) {
//   return value % 2 === 0;
// });
// console.log(evenNumbers); // [2, 4]

// let devideBoth=0;
// let devideOn3 = 0;
// let devideOn5 = 0;

// function fizzBuzz() {
//     for(let i=1 ; i <100 ; i++){
//         if( i % 3===0 && i % 5===0){
//             devideBoth++;
//             console.log("fizz buzz")
//         }else if(i%3===0){
//             devideOn3++
//             console.log("fizz")
//         }else if (i%5===0){
//             devideOn5++
//             console.log("buzz")
//         }else{
//             console.log(i)
//         }
//     }
// }

// fizzBuzz();
// console.log(`numbers wich devided on both : ${devideBoth}`)
// console.log(`numbers wich devided on 5 : ${devideOn5}`)
// console.log(`numbers wich devided on 3 : ${devideOn3}`)

// function fartobi (height,length){
//     return height * length;
// }

// const martkutxedi1 = fartobi(5,10)
// const martkutxedi2 = fartobi(5,11)

// if(martkutxedi1>martkutxedi2){
//     console.log(`pirveli martkutxedis fartobi ${martkutxedi1} > meores fartobze ${martkutxedi2}`)
// }else{
//     console.log(`pirveli martkutxedis fartobi ${martkutxedi1} < meores fartobze ${martkutxedi2}`)
// }
// console.log(martkutxedi1,martkutxedi2)

// function calculator (){

// }



/// first exercise////
// function simpleCalculator (){
//     let number1=  Number(prompt("please enter first number:"))
//     let mathOperation = prompt("please choose math operation: + - * / ")
//     let number2=  Number(prompt("please enter second number:"))
    
//         if(mathOperation === '+'){
//         return number1 + number2
//     }else if(mathOperation === '-'){
//         return number1 - number2
//     }else if(mathOperation === '/'){
//         return number1 / number2
//     }else if(mathOperation === '*'){
//         return number1 * number2
//     }
// }

// const result = simpleCalculator()
// console.log(`the result of mathematical operation you choose is : ${result}`)




//second exercise//

// function array(arr){
//     let sum=0;

//     for (let i = 0; i < arr.length; i++){
//         sum = sum +arr[i]
//     }

//     return sum;
// }

// const numbers=[5,10,15,20]
// const sum = array(numbers)
// console.log(`The sum of all the numbers in the array is : ${sum}`)




//third exercise//

// function array1 (string){
//     let charA = 0;
//     let charE = 0;
//     let charI = 0;
//     let charO = 0;
//     let charU = 0;

//     for (let i = 0; i < string.length; i++){
//         if(string[i] === 'a' || string[i] === 'A'){
//             charA++
//         }else if(string[i] === 'e' || string[i] === 'E'){
//             charE++
//         }else if(string[i] === 'i' || string[i] === 'I'){
//             charI++
//         }else if(string[i] === 'o' || string[i] === 'O'){
//             charO++
//         }else if(string[i] === 'u' || string[i] === 'U'){
//             charU++
//         }
//     }return `this string includes ${charA} time ' A ' 
// this string includes ${charE} time ' E '
// this string includes ${charI} time ' I '
// this string includes ${charO} time ' O '
// this string includes ${charU} time ' U '
// The total amount of vowels is : ${charA +charE+charI+charO+charU}`
    
// }

// const string1 = "AEIOUUaeiouu";
// const totalOfVowels = array1(string1)
// console.log(totalOfVowels)




//fourth exercise//

// function reverseArray(arr){
//     return arr.reverse();
// }

// let array = [1,2,3]
// console.log(reverseArray(array))


//fourth exercise (2) //

// function reverseArray(arr){
//     let arr2=[];
//     for (let i = 0; i < arr.length; i++) {
//         arr2.unshift(arr[i]);
//     }return arr2;
// }

// const array = [0,1,2,3]
// const newArray = reverseArray(array)
// console.log(newArray)



// Fifth Exercise count words //


// function countWords(sentence) {
    
//     var words = sentence.trim().split(" ");

//     return words.length;
// }

// console.log(countWords("   This is an example sentence   "));


// let str = "Hello world";
// let res = str.split(" ");
// let res1 = str.split()
// console.log(res1,res); 

/////exercise//////

// function arrayAverage (arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }return sum / arr.length
// }


// const array1 = [5,10,15,20]
// console.log(arrayAverage(array1))


//////find shortests strings//////

// function findShortestString(arr){
//     let shorteststring = [arr[0]];
//     let shortestLength = arr[0].length;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length < shortestLength ){
//             shorteststring = [arr[i]];
//             shortestLength = arr[i].length
//         }else if(arr[i].length === shortestLength){
//             shorteststring.push(arr[i])
//         }
//     }return shorteststring;
// }


// const array2 = ['vova','anuki','kiwuna','guga']
// console.log(findShortestString(array2))



///// number of the sentences /////

// function sentences(str){
//     let countSentences = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]==='.' || str[i] === '?' || str[i] === '!'){
//             countSentences++
//         }
//     }return countSentences
// }

// let stringSentences = "hello , world. i'm new in program world! am i ?";

// let result = sentences(stringSentences)
// console.log(result);


// function vowelsRemover(str){
//     // let vowels = ['a','e','i','o','u'];
//     // let result =[];
//     let vowels = "AEIOUaeiou";
//     let result ="";
//     for (let i = 0; i < str.length; i++) {
//         if(vowels.indexOf(str[i]) === -1){
//             result += str[i]
//         }
//     }return result

// }


// let string = "vova nepharidze";
// console.log(vowelsRemover(string));

// function findLongestString(arr){
//     let longestString = [arr[0]]
//     let longestLength = arr[0].length
//     for (let i = 1; i < arr.length; i++) {

//         if(arr[i].length > longestLength){

//         longestString = [arr[i]]
//         longestLength = arr[i].length

//         }else if(arr[i].length === longestLength){
//             longestString.push(arr[i])
//         }
//     }return longestString

// }


// let array = ['vova','maka','levani','zauri','niniko']
// let word = "valoda"
// console.log(findLongestString(array))





// function removeSpaces(array){
//     let newarray =""
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] !== " "){
//             newarray += array[i]
//         }
//     }return newarray

// }

// let array = 'hello My crazy wordl'
// console.log(removeSpaces(array))



// function upperCase (sentence){
//     let wordsFromSentence = sentence.split(" ")
//     let capitalizedWords = []

//     for (let i = 0; i < wordsFromSentence.length; i++) {
//         let word = wordsFromSentence[i]
//         let capitWord= word[0].toUpperCase() + word.slice(1)

//         capitalizedWords.push(capitWord)
        
//     }return capitalizedWords.join(" ")
//     return capitalizedWords
// }



// let string = "i love my family"
// console.log(upperCase(string))

// function sumOfArray(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//       total += array[i];
//     }
//     return total;
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(sumOfArray(numbers));






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
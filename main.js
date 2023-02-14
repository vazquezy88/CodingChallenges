
    // function removeChar(str){
    //     //You got this!
    //      let x = str.length-1
    //      console.log(str.slice(1, x))
    //    };

    //  removeChar("71qx461")

        // if (/*whatever counting here*/ ===1) {
        //     return "I love you"
        // } else if (/*counting here*/===2){
        //     return "a little"
        // } else if (/*counting here*/===3){
        //     return "a lot"
        // }else if (/*counting here*/===3){
        //     return "passionately"
        // }else if (/*counting here*/===4){
        //     return "madly"
        // }else (/*counting here*/===5){
        //     return "not at all"
        // }

    // function howMuchILoveYou(nbPetals){

    //     const loveMess = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    //     let loveLoop = nbPetals-1

    //     for (let i=0; i<=loveMess.length; i++){
    //         if (loveLoop===0 || loveLoop%6 ===0) {
    //             return "I love you"
    //         } else if (loveLoop===1 || loveLoop%6 ===1){
    //             return "a little"
    //         } else if (loveLoop===2 || loveLoop%6 ===2){
    //             return "a lot"
    //         } else if (loveLoop===3 || loveLoop%6 ===3){
    //             return "passionately"
    //         } else if (loveLoop===4 || loveLoop%6 ===4){
    //             return "madly"
    //         } else if (loveLoop===5 || loveLoop%6 ===5) {
    //             return "not at all"
    //         }
    //     }
    // }

    // console.log(howMuchILoveYou(14))


    // const areaOrPerimeter = function(l , w) {
    //     if (l===w) {
    //         return l*w
    //     } else {
    //         return 2*l+2*w
    //     }
    //   };

    //   console.log(areaOrPerimeter(2,3))

    // function findNextSquare(sq) {
    //     let sqRoot = Math.sqrt(sq);
            
    //     if (Number.isInteger(sqRoot) === false){
    //             return -1;
    //     } else {
    //         return ((sqRoot+1)*(sqRoot+1))
    //     }
    //   }

    //   console.log(findNextSquare(25))

    // function setAlarm(employed, vacation){

    //     if (employed === true && vacation === false){
    //         return true
    //     } else {
    //         return false
    //     }

    // }

    // console.log(setAlarm(false, true))

    // function litres(time) {
    //     return Math.floor(time*0.5);
    //   }

    //   console.log(litres(11.8))

    // function descendingOrder(n){
    //     let nString = n.toString()
    //     let numArray = Array.from(nString);
    //     numArray.sort()
    //     numArray.reverse()
    //     return Number(numArray.join(""))

    //         OR

    //     return Number(n.toString().split("").sort().reverse().join(""))
    //   }
      
    //     console.log(descendingOrder(123456))

//     function getSum( a,b ){
        
//         if (a!=b){
//         let start = Math.min(a,b)
//         let end = Math.max(a,b)
                        
//         for (i=start; i<=end; i++) {
//             start +=1
//             return start
//         } 
        
//         } else {
//             return a
//         }
// }

//     console.log(getSum(6,4))


// function disemvowel(str) {
// let lowerStr = str.toLowerCase()    
    
//     for (i=0; i<str.length; i++){

//         if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){

//             let trimStr = str.replace(/a/gi, "").replace(/e/gi, "").replace(/i/gi, "").replace(/o/gi, "").replace(/u/gi, "")
//             return trimStr         
//         }
//     }   
    
//   }
  
//   console.log(disemvowel("The quick brown fox jumped over the lazy dog"))

// function disemvowel(str) {  
    
//     return str.replace(/[aeiou]/gi,"")
       
//   }
  
//   console.log(disemvowel("The quick brown fox jumped over the lazy dog"))


// function makeNegative(num) {
//     return (Math.abs(num))*-1
//     }

// console.log(makeNegative(65))


// const rps = (p1, p2) => {

//     if (p1 === p2) {
//         return ("Draw!")
//     } else if ( p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock" || p1 === "rock" && p2 === "scissors"){
//         return ("Player 1 won!")
//     } else {
//         return ("Player 2 won!")
//     }

// };

// console.log(rps("paper","scissors"))


// DIDN'T WORK!! 
//function positiveSum(arr) {
// let evens = []

// if (arr.length <=0){
//     return (0)
// } 

// arr.forEach( n => {
//     if (n%2 === 0){        
//         evens.push(n)                 
//     }
// })

// let total = evens.reduce(numSum) 
        
// function numSum(x,y){
//     return x+y
// }

// return total

// }

// console.log(positiveSum([6]))


// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
//   }


//   console.log(minMax([12,2,3,15,1]))


//   function stray(numbers) {
  
//   let sortNums =  numbers.sort()  
//   console.log(sortNums)
//   for (i=0; i<sortNums.length;i++){
        
//     if(sortNums[i] != sortNums[i+1] && sortNums[i] != sortNums[i-1]){
//         return sortNums[i]
//     }
//   }
//   }

//   stray([17, 17, 3, 17, 17, 17, 17])


//Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//If no occurrences can be found, a count of 0 should be returned.


// //my solution
// function strCount(str, letter){  
//     let counter = 0; 
//     for (i=0;i<str.length;i++){
       
//         if (str[i] === letter){
//         counter +=1
//     }
    
//   } return counter
// }
//   console.log(strCount("pepper", "p"))

// //preferred solution
// function strCount(str, letter){  
//     return str.split(letter).length-1
//   }

//   console.log(strCount("pep", "p"))

// function century(year) {
//     let yearStr = year.toString()
//     console.log(yearStr.toString().substr(0, yearStr.length-2))
//     console.log(year.toString().substr(yearStr.length-2))
   
//     if (year<=101){
//         return 1
//     } 
//     else if (year.toString().substr(yearStr.length-2) === "00"){
//         return Number(year.toString().substr(0,yearStr.length-2));
//     } else if (year <=1001) {
//     let shortYear = year.toString().substr(0,1);
//     shortYear = Number(shortYear) + 1
//     return shortYear
//     } else {
//     let shortYear = year.toString().substr(0, yearStr.length-2);
//     shortYear = Number(shortYear) + 1
//     return shortYear
//   }

// }
// console.log(century(1900))

// function getCount(str) {
//     let count = 0

//     for (i=0; i<str.length;i++){
//         if (str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u") {
//             count ++
            
//         } 
//     } 
//     return count
//   }

//   console.log(getCount("aardvark"))

// function getAge(inputString){
//     return Number(inputString.substring(0,1))
//     }

//     console.log(getAge("1 year old"))


// function XO(str) {
//     let countX = 0
//     let countO = 0
//     let strLow = str.toLowerCase()
    

//     for (i=0; i<strLow.length;i++){
//         if (strLow[i]==="x") {
//             countX ++
//         } else if(strLow[i]==="o"){
//             countO ++
//         }
//     } 
    
//     if (countX === countO){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
//   }

//   XO("oommmxx")

// function move (position, roll) {
    
//     return position + roll*2
    
//   }

//   console.log(move(2, 5))


// function paperwork(n, m) {

//     if (n<0 || m<0){
//         return 0
//     } else {
//         return n*m
//     }
// }

// console.log(paperwork(5, 5) )

// function saleHotdogs(n){
//     let totalPrice = 0

//     if (n >= 5 && n < 10){
//         totalPrice = n*95
//     } else if (n >= 10) {
//         totalPrice = n*90
//     } else {
//         totalPrice = n*100
//     }

//     return totalPrice
//   }

//   console.log(saleHotdogs(9))

// function getRealFloor(n) {
    
//     if (n>=14){
//         return n-2
//     } else if(n>0 && n<=13){
//         return n-1
//     } else {
//         return n
//     }

// }

// console.log(getRealFloor(14))

// function arithmetic(a, b, operator){
    
//     if (operator === 'add'){
//         return a+b
//     } else if (operator === 'subtract'){
//         return a-b
//     } else if (operator === 'multiply'){
//         return a*b
//     } else if (operator === 'divide'){
//         return a/b
//     } 

//   }

//   console.log(arithmetic(8, 2, "divide"))

// function solution(str, ending){
//     console.log(str.substring(str.length-(ending.length)))
    
//     if (str.substring(str.length-(ending.length)) === ending){
        
//         return true
//     } else {
//         return false
//     }
//   }

//   console.log(solution('abcde', 'abc'))

// ------
// function smash(words) {
    
//     let sentence = words.join(" ")
//     return sentence
// }
// console.log(smash(['hello', 'world', 'this', 'is', 'great']))

// function makeUpperCase(str) {
//     return str.toUpperCase()
//   }
//   console.log(makeUpperCase(""))

// function unusualFive() {
    
//     let str = "apple"
//     return str.length;
//   }

//   console.log(unusualFive())

// function reverseWords(str) {
    
//     let strArray = str.split(' ')
        
//     let revArray = strArray.map(revFunc).join(" ")
//     //console.log(revArray.toString())
//     return revArray

//     function revFunc(word){
//         return word.split('').reverse().join("")
//     }
    
//   }

//   console.log(reverseWords('The quick brown fox jumps over the lazy dog.')

// function isTriangle(a,b,c){

 //the sum of the lengths of any two sides of a triangle must be greater than or equal to the length of the third side. 

    // if (a+b >= c && b+c >= a && a+c >= b){
    //     return true
    // } else {
    //     return false;
    // }

//     let sVar = (a+b+c)*0.5
//     console.log(sVar)

//     // write out of heron's formula
//     let sInner = (sVar-a)*(sVar-b)*(sVar-c)
//     let sTotals = sVar* sInner
//     console.log(sTotals)

//     let heronForm = Math.sqrt(sTotals) 
//     console.log(heronForm)

//     if (heronForm >= 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isTriangle(7,2,2))
// ------


// function boolToWord( bool ){
//     if (bool === true){
//         return "Yes"
//     } else {
//         return "No"
//     }
//   }

//   boolToWord()

//   function accum(s) {
    
//     let sep = s.toUpperCase().split("")
//     console.log(sep)
//     let uni = []

// 	for (i=0; i < sep.length; i++){
        
//         //uni = uni.concat(s[i].repeat(i+1)) //returns all but uppercase
//         //console.log(first)
//         uni = uni.concat(s[i].repeat(i+1))
//         console.log(uni)
//         // whole = first + uni
//         //console.log(whole)
//         }

   
   
//    return uni.join("-")
// }


// console.log(accum("swag"))

// function accum(s) {
// 	// return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

//     return s.split('').map((c, i) => (c.repeat(i)));
// }
// console.log(accum("swag"))

//---------25 jan

// function high(x){

// let wordArr = x.split(" ")
// //console.log(wordArr)

// let totalArr = []
// let totalsWithWords = []

// for (i=0; i<wordArr.length;i++){
//     let alpha = "abcdefghijklmnopqrstuvwxyz"
//     let soleWord = wordArr[i].toLowerCase()
//     //console.log(soleWord)

//     let wordTotal = 0

//     for (j=0; j<soleWord.length; j++){

//         if (alpha.search(soleWord[j]) != -1 ){
//         wordTotal += alpha.search(soleWord[j])+1
        
        //console.log(alpha.search(soleWord[j])+1, soleWord[j])//returns values
        //console.log(soleWord[j]) //returns letters
    //     }   
  
    // }   
    //console.log(wordTotal) //dont move
//     totalArr.push(wordTotal) //returns arr of totals
//     totalsWithWords.push(wordTotal,soleWord)
// } 
//     function compareNumbers(a, b) {
//         return a - b;
//         }
    
//     totalArr = totalArr.sort(compareNumbers)
//     //console.log(totalArr)
//     highestNum = totalArr[totalArr.length-1]
//     console.log(totalsWithWords)
    
//     for (l=0; l<totalsWithWords.length; l++){
//         if (totalsWithWords[l]=== highestNum){
//            // return totalsWithWords[l+1]
//         }
//     }
// }

// console.log(high("hre The cat is here zoo typo"))

//shorter way than the above to review

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
//   }

//----26 Jan
//  #1
// function areYouPlayingBanjo(name) {
//     if (name[0] === "r" || name[0] === "R"){
//         return `${name} plays the banjo`
//     } else {
//         return `${name} does not play the banjo`
//     }
 
//   }

//   console.log(areYouPlayingBanjo("Linus"))

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }
//

// function areYouPlayingBanjo(name) {
//     return (name[0].toLowerCase() === 'r') ? name + ' plays banjo' : name + ' does not play banjo';
//   }
//
//  #2
// function bouncingBall(h,  bounce,  window) {
    
//     if (h>0 && bounce>0 && bounce<1 && window < h){
//     let counter = 0 

//         while (h*bounce>window) {
//         h*=bounce
//         counter ++
//         console.log(counter, h)
//         } 
//         return (counter*2+1)
//     } else {
//         return -1
//     }
// }

// console.log(bouncingBall(3, -66, 1.5) )


// function invert(array) {
//     let inverse = []
//     for(i=0;i<array.length;i++){
//         inverse.push(array[i]*-1)
        
//     } return inverse

// }
// console.log(invert([1,-2,3,4,5]))


// const invert = array => array.map(num => -num);
// //----
// function getGrade (s1, s2, s3) {
    
//     let numGrade = (s1+s2+s3)/3

//     if (numGrade>90){
//         return "A"
//     } else if (80<=numGrade && numGrade<90){
//         return "B"
//     } else if (70<=numGrade && numGrade<80){
//         return "C"
//     } else if (60<=numGrade && numGrade<70){
//         return "D"
//     } else {
//         return "F"
//     }
//   }

//   console.log(getGrade (75,70,79) )

//   function getGrade (s1, s2, s3) {
//     var s = (s1 + s2 + s3) / 3
//     return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
//   }

//1 sec = 1000; 1 min = 60,000; 1 hour = 3,600,000
//------
// function past(h, m, s){
//     return (h*3600000) + (m*60000) + (s*1000)
//   }

//   console.log(past(1,0,1))

  //-------

//   function toJadenCase(str) {
//     return str.split(' ').map((x, i) => (x[0].toUpperCase() + x.toLowerCase().substring(1))).join(' ');
// }

// console.log(toJadenCase("How can miRrors be real if our eyes aren't real"))

// String.prototype.toJadenCase = function () {
//     return this.split(' ').map((x, i) => (x[0].toUpperCase() + x.toLowerCase().substring(1))).join(' ');
// //   };

// var isSquare = function(n){
    
//     let nRoot = Math.sqrt(n)
//     //console.log(nRoot)

//     if (Number.isInteger(nRoot) === true) {
//         //return ` ${n} is a square number`
//         return true
//     } else {
//         return false
//     }
//   }
//   console.log(isSquare(10))
//
//
//---


// function highAndLow(numbers){

//     let sortedArr = numbers.split(" ").sort(function(a, b){return a-b});

//     return `${sortedArr[sortedArr.length-1]} ${sortedArr[0]}`
//   }

//   console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

// var countSheep = function (num){
    
//     counter = 1
//     let sheepArr = []

//     if (num>0){
//         while (counter <= num){
//         sheepArr.push(`${counter} sheep...`)
//         counter ++
//         } 
//         console.log(counter,sheepArr)
//         return sheepArr.join("") 
//     } else {
//         return ""
//     }
    
//   }
  
//   console.log(countSheep(3))

// function squareDigits(num){
    
//     num = num.toString().split("")
//     let squareArr = []

//     for (i=0; i<num.length; i++){
//         squareArr.push(num[i]*num[i])
//     }
//     return Number(squareArr.join(""))
//   }

//   console.log(squareDigits(9119))

//   function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//  }

// function basicOp(operation, value1, value2)
// {
//   if (operation === '+'){
//     return value1+value2
//   } else if (operation === '-'){
//     return value1-value2
//   } else if (operation === '*') {
//     return value1*value2
//   } else if (operation === '/') {
//     return value1/value2
//   }
// }

// console.log(basicOp('+', 4, 7))

// function abbrevName(name){

//     return name.split(" ").map(x => x[0].toUpperCase()).join('.')
    
// }

// console.log(abbrevName("sam harris"))

// function abbrevName(name){

//     var nameArray = name.split(" ");
//     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }


// 58 is code for :, 59 is code for ;, 45 is code for -, 126 is code for ~, 41 is code for ), 68 is code for D
// function countSmileys(arr) {
// eyeCounter = 0
// noseCounter = 0
// mouthCounter = 0
// faceTrue = 0

// if (arr.length === 0){
//     return 0
// }

//     for (h=0; h<arr.length; h++){
//         let face = arr[h]
        
//         if (face.charCodeAt(0) === 59 || face.charCodeAt(0) === 58){
//             eyeCounter++
//             //console.log(face.charCodeAt(0),face[0], face)
//         }

//         if (face.length === 2 && face.charCodeAt(1) === 41 || face.charCodeAt(1) === 68){
//             mouthCounter++
//             //console.log(face.charCodeAt(1),face[1], face)

//         } else if (face.length>2 && face.charCodeAt(2) === 41 || face.charCodeAt(2) === 68){
//             mouthCounter++
//             //console.log(face.charCodeAt(2),face[2], face)
//         }

//         if (face.length>2 && face.charCodeAt(1) === 45 || face.charCodeAt(1) === 126){
//             noseCounter++
//             //console.log(face.charCodeAt(1), face[1], face)
//         } 
        
//         //console.log(eyeCounter,noseCounter, mouthCounter)
              
//         let totalScore = eyeCounter+noseCounter+mouthCounter

//         if(totalScore === face.length){
//             faceTrue++
//         }
    
//         eyeCounter =0
//         noseCounter =0
//         mouthCounter =0
        
//         //console.log(faceTrue) this gives correct number in console
        
//     } return faceTrue
// }
// console.log(countSmileys([':D',':~)',';~D',':)']))

// ----

// function updateLight(current) {

//     switch(current) {
//         case "green":
//             return "yellow"
//             break;
//         case "yellow":
//             return "red"
//             break;
//         case "red":
//             return "green"
//             break;
//         } 
//   }

// console.log(updateLight("red"))


// function updateLight(current) {
  
//     return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
//   }

// function doubleChar(str) {
//     let strArr = str.split("")
//     return strArr.map((x) => x.repeat(2)).join("")
//     //in the case of map, the variable is referring to each element in the array

//   }
  
//   console.log(doubleChar("cat _!"))

//   const doubleChar = (str) => str.split("").map(c => c + c).join("");
//-----
// function findAverage(array) {
//     let sum = 0

//     if (array.length === 0){
//         return 0
//     } else {
//         for (i=0; i<array.length; i++){
//             sum += array[i]
//         }
//     } return sum/array.length
// }

// console.log(findAverage([1,1,1]))

// function hero(bullets, dragons){
    
//    return bullets >= 2*dragons ? true : false;
    
//    }
// console.log(hero(10,2))

//-------
// function getMiddle(s){

// let midLen = s.length/2
// console.log(midLen)

// if (s.length === 1){
//     return s
// } else {
//     for (i=0; i<s.length; i++){
//         if (s.length%2 === 0 ){
//             return s[midLen-1] + s[midLen]
//             //evens work
//         } else {
//             let oddLen = Math.floor(midLen-1)
//             return s[oddLen+1]
//         }
//     }
//     } 
// }

// console.log(getMiddle("carts"))

// OR 

// function getMiddle(s) {
//     var middle = s.length / 2;
//     return (s.length % 2) 
//       ? s.charAt(Math.floor(middle))
//       : s.slice(middle - 1, middle + 1);
//   }

// function sumArray(array) {
    
//     if (Array.isArray(array) === false || array.length === 0 ){
//         return 0
//     }

//     let sortedArr = array.sort(function(a, b){return a-b})
//     let cutArr = sortedArr.slice(1,sortedArr.length-1)
//     let sum = 0

//     for (i=0; i<cutArr.length; i++){
//         sum += cutArr[i]        
//     }
//     return sum
// }

// console.log(sumArray([6,2,1,8, 10]))

//-----

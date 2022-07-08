// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//   return x*2
// }
// const newNumbers = numbers.map(double)
// console.log(newNumbers)


//can be written as this 
// const newNumbers = numbers.map(function (x){
//   return x*2
// }) 


//similar as foreach
//more concise with map



//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function(num){
//   return num > 10
// })
// console.log(newNumbers);





//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function(accumulator, currentNumber){
//   return accumulator + currentNumber
// })
// console.log(newNumber)





//Find - find the first item that matches from an array.
//FindIndex - find the index of the first item that matches.

// const foundNumber = numbers.find(function(num){
//   return num>10 //it stopped when it found the first number that's greater than 10
// })
// console.log(foundNumber)

import emojipedia from "./emojipedia"

console.log(
  
  emojipedia.map(function (emojiEntry){
    return emojiEntry.meaning.substring(0, 100)

  })
  )


  
//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]

//solution:
function maps(x){
    return x.map (num => num * 2) 
  }

//test:
let x = [1,2,3]
let y = [3,9,12]
console.log(maps(x))
console.log(maps(y))
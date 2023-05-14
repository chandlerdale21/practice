// Given an array of integers, return a new array with each value doubled.

// For example: 

//P: any special edge cases
//R: given an array return a NEW array with each value doubled 
//E: [1,3,4]   ==== [2,6,8]
//P: write an arrow function that utilizes the map method 


let double = num => num.map(n => n * 2)

console.log(double([1,2,3]))
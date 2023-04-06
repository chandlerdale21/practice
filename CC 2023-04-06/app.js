// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//P: Only postives? Any special characters? 
//R: find the sum of only positive nums 
//E: [1,-4,7,12] => 1 + 7 + 12 = 20
//P: .map function that is going to return single value, a conditional that checks if num is positive 
let arr = []
let sum = arr.reduce(((acc, c) => c>0 ? acc + c : acc),0)

console.log(sum)
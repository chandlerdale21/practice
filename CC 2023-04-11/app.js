// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//P: Just numbers no special characters 
//R: squares each number and the adds all of the values together 
//E: [2,3,4] === 29
//P create a function that takes in a (num) use the .reduce method to loop through, 

function sum(num){
    return num.reduce((acc ,c) => acc + (c*c),0)
}

console.log(sum([4,3,4]))

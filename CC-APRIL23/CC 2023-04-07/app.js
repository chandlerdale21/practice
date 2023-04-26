// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//P: Just a string, no special characters? 
//R: Return a string the number of times specified by the integer num in the paramaters
//E:  5, 'No ==== nonononono,  3, 's' === sss
//P: write a function with paramaters (n,s)
//   return a the s by num 

function repeatStr(n,s){
    return s.repeat(n)
}
console.log(repeatStr(5,'hi')) //output: hihihihihi
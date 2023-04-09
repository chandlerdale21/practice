// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//P: Any other special characters? 
//R: Conver postive numbers to negative numbers unless they are already negative 
//E: Examples,makeNegative(1);    // return -1,makeNegative(-5);   // return -5,
//P: create a function that takes in a num, run an if statement that checks if the num is already negative, if else statement that runs for num * it -1, final else if statement for when num  = 0  

function makeNegative(num){
    if(num === -num){
          return num
      }else if (num){
      return num *-1
      }else if (num === 0){
          return 0
      }
  }
console.log(makeNegative(0))
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//P: Do the value's only need to be boolean? 
//R: Returning the string 'yes' if the boolean is true and return string 'no' if it's the false boolean
//E: console.log(functionName(true)) // output: Yes, console.log(functionName(false)) /// output: No
//P: create a function with a parameter of bool, then use if and if else statements with bool === true or false and return yes or no if condition is met w/in statement. 

function boolToYesNo (bool){
    if (bool === true) {
        return 'Yes'
    }else if(bool === false){
        return 'No'
    }
}


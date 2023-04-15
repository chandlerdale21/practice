//Write a function that removes the spaces from the string, then return the resultant string.

//P- Are there any special characters i should be concerned about besides spaces? 
//R- given a string with spaces return the string without spaces 
//E- 'I am a test' = 'Iamatest'
//P- function with a parameter of string, loop through the string, return all removed spaces 

function noSpaces(string) {
    let result = ''
    for(let i = 0; i < string.length;i++ ){
        if(string[i] !== ' '){
            result += string[i]
        }
    }
    return result;
}
console.log(noSpaces('this is a test'))
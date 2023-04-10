// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P: Any other edge cases i should be concerned about?
//R: removes the 1st and last character of a string 
//E: let m = 'money' ---> m y 
//P: Use the .slice() method to only return the values in between the first and last 

function removeChar(string){
    return string.slice(1,-1)
}
console.log(removeChar('test'))

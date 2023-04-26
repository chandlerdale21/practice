// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

//P: any special characters, or is it only vowels, and is y always considered  a vowel? 
//R: given a string i need to return the string with all vowels removed 
//E: 'joking' ===== 'jkng'
//P: Start with a function that takes in an edge case of if it is blank, and then create a varible to store the new string, and then loop through the given string, and write an if statement that if it isn't a vowel and the iterator to the preidentified string, return the piece outside of the function. 

function disemvowel(str) {
    let noVowels = ''
    for(let i = 0; i < str.length ; i++) {
        if(str[i].toLowerCase() !== 'a' && str[i].toLowerCase() !=='e' && str[i].toLowerCase() !=='i'&& str[i].toLowerCase() !=='o'&& str[i].toLowerCase() !=='u'){
            noVowels = noVowels + str[i]
        }
    }
    return noVowels;
}
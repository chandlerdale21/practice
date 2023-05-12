// //Given an array of integers your solution should find the smallest integer.

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//P:Any special characters, only integers? 
//R: return the smallest integar from the array 
//E: Given [34, 15, 88, 2] your solution will return 2
//P: function that loops through the array, using the .reduce method console logging the current value as it's less than. 

function smallestNum(num){
    let large = num[0]

    for(let i = 0; i <= num.length; i++) {
        if (num[i] < large)
            large = num[i]
    }
    return large

}
console.log(smallestNum([5,555,3]))
/*Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.*/

//P: Will it only be integers? any other special characters

//R: retrun the amount of water Nathan drank if he cycled for x amount of hours consuming .5 liters for every hour

//E: nathan ran 5 hours ---> 2.5 liters

//P: create a function that returns the amount of hours divided by 2 within the math.floor method to round down

function litres(time) {
  return Math.floor(time / 2);
}

console.log(litres(2))
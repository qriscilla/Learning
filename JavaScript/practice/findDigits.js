/* source: https://medium.com/javascript-in-plain-english/javascript-algorithm-find-digits-8c639e9ab81a */

/* Objective: write a function that will take in an integer n as input */
/* and take each digit within that full integer and determine if that digit is a divisor of n*/

function findDigits(n) {                          /* a function called findDigits that takes in a parameter, n */
  let digitArray = (n + "").split('');            /* convert number n into a string and splitting it into each digit */
  let divisors = [];                              /* declare an empty array called divisors, which will later carry all the numbers that are divisors of n */
  
  for(let i=0; i<digitArray.length; i++) {        /* 1. i starts out as 0, 2. for every i that is less than however many digits n is made up of, 3. i increases by one incremenet after code block is run */
    let num = digitArray[i] * 1;                  /* convert characters within the digitArray (that are currently strings) by multiplying them each by 1 */
    
    if(n % num == 0) {                            /* if n divided by each digit has no remaind (is a divisor) */
      divisors.push(num)                          /* put that digit (num) into the divisors array */
    }
    
  }
  
  return divisors.length;
}

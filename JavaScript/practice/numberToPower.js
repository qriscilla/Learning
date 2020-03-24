*/ Source: https://medium.com/javascript-in-plain-english/javascript-algorithm-power-2cbedf59f40c

*/ Objective: Write a function that will accept two integers, number and power, as inputs 
*/ and comput and return a number raised the nth power. All this without any built-in Math functions!

For-Loop Method

  function numberToPower(number, power) {     /* a function called numberToPower that takes in two parameters, number and power */
    let total = 1;                            /* let total equal to 1 to help us multiply the number parameter by itself */
    for (let i=1; i<=power; i++) {            /* 1. i starts as 1, 2. for every 1 that is less than or equal to the power, 3. increase i by one increment each time code block is run */
      total = total * number;                 /* code block; total will now equal the previous total multiplied by the number parameter */
    }
    return total;
  }

While-Loop Method

  function numberToPower(number, power) {     /* a function called numberToPower that takes in two parameters, number and power */
    let total = 1;                            /* let total equal to 1 to help us multiply the number parameter by itself */
    while(power > 0) {                        /* while the power parameter is greater than 0
      total *= number;                        /* code block; total will now equal the previous total multiplied by the number parameter */
      power--;                                /* decrease power by one increment */
    }
    return total;
  }

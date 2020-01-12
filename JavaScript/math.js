Math.round(x) // value of x rounded to its nearest integer
  Math.round(4.7) // 5
  Math.round(4.4) // 4

Math.ceil(x) // value of x rounded up to its nearest integer
  Math.ceil(4.4) // 5
  // Think of "ceiling"

Math.floor() // value of x rounded down to its nearest integer
  Math.floor(4.7) // 4

Math.random() // random decimal between 0 (inclusive), and 1 (exclusive)
  // used with Math.floor() can be used to return random integers
    Math.floor(Math.random()*10); // returns a random integer from 0 to 9
    Math.floor(Math.random()*21); // returns a random integer from 0 to 20
    Math.floor(Math.random()*10)+1; // returns a random integer from 1 to 10

Math.pow(x, y) // value of x to the power of y
  Math.pow(8, 2) // 64
  
Math.sqrt(x) // square root of x
  Math.sqrt(64) // 8
  
Math.abs(x) // absolute value of x

Math.sin(x) // sine (a value between -1 and 1) of the angle x (given in radians)
Math.cos(x) // cosine of the angle x

Math.min() // lowest value in a list of arguments
Math.max() // highest value in a list of arguments

// Check Math object references online for more.

Boolean()
  // Use this function to find out if an expression (or a variable) is true
  // Will be either true or false

// Everything with a value (e.g., number, string) is true
  Boolean(100); // true
  Boolean("Hello"); // true
  Boolean(1+7); // true
  
// Everything without a value (e.g., null, undefined, NaN) is false
  Boolean(0); // false
  Boolean(""); // false
  
// Do not create Boolean objects. It slows down execution speed.

Comparison Operators // Used in logical statements to determine equality or difference between variables or values
  ==  // equal to
  === // equal value and equal type
  !=  // not equal
  !== // not equal value or not equal type
  > // greater than
  < // less than
  >=  // greater than or equal to
  <=  // less than or equal to
  
Logical Operators // Used to determine the logic between variables or values
  &&  // and
  ||  // or
  ! // not
  
Conditional (Ternary) Operator // assigns a value to a variable based on some condition
  variablename = (condition) ? value1:value2

Conditional Statements

  if (condition) {
    // block of code to be executed if the condition is true
  } else {
    // block of code to be executed if the condition is false
  }

  if (condition 1) {
    // block of code to be executed if condition 1 is true
  } else if (condition 2) {
    // block of code to be executed if condition 1 is false and condition 2 is true
  } else {
    // block of code to be executed if condition 1 is false and condition 2 is false
  }

  // Note that these words (if, else, switch) are lowercase!
  if // useed to specify a block of code to be executed, if a specified condition is true
  else // used to specify a block of code to be executed, if the same condition is false
  else if // used to specify a new condition to test, if the first condition is false
  switch // used to specify many alternative blocks of code to be executed

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

// JS coding conventions to follow:

Naming    
    // names should start with a letter
    // never start with a $ sign
    // generally use camelCase for variables and functions
    // UPPERCASE for global variables and constants
    // don't use hyphens - in JS; can be mistaken as subtraction 

Operators
    // put spaces around = + - * / and after commas
        var x = y + z;
        var values = ["Volvo", "Saab", "Fiat"];

Indentation
    // put 2 spaces for indentation of code blocks
        function toCelsius(fahrenheit) {
          return (5 / 9) * (fahrenheit - 32);
        }
    // try not to use tab for indenting; diff editors interpret tabs differently

Simple Statement 
    // end with a semicolon ;

Complex/Compound Statement 
    // has a block(s)
    // functions, loops, conditionals
    
    // opening bracket at the end of the first line {
    // one space before the opening bracket
    // closing bracket on a new line, without leading spaces
    // dont' end a complex statement with a semicolon ;

Object
    // opening bracket on the same line as the object name
    // colon and spcae between each property and its value
    // no comma after the last property-value pair
    // closing bracket on a new line, without leading spaces
    // end with semicolon ;
    // short objects can be written on one line

// avoid lines longer than 80 characters
// break it after an operator or a comma
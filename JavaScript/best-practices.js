// JS coding conventions to follow:

Naming    
    // names should start with a letter
    // never start with a $ sign
    // try not to use these words https://www.w3schools.com/js/js_reserved.asp
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

Length
    // avoid lines longer than 80 characters
    // break it after an operator or a comma

Avoid
    // new, ==, eval(), with
    // global variables if you can

// Use {} instead of new Object()
    var x1 = {};

// Use "" instead of new String()
    var x2 = "";

// Use [] instead of new Array()
    var x3 = [];

// Use function (){} instead of new Function()
    var x7 = function(){};

Write shorter loops
    // Instead of
        var i;
        for (i = 0; i < arr.length; i++) {}
    // Do
        var i;
        var 1 = arr.length;
        for (i = 0; i < 1; i++) {}

Reduce DOM access and size

// To see common mistakes, refer to https://www.w3schools.com/js/js_mistakes.asp

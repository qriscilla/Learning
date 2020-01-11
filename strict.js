"use strict"; 
    // tells the code to be executed in strict mode
    // helps write cleaner code (e.g., because can't use undeclared variables)
    // declare at the beginning of a script, so it has global scope
    // if declared inside a function, will only have local scope

Examples

    "use strict";
    x = 3.14; // error, x is not declared var x
    x = {p1:10, p2:20}; // error, object is not declared var x

    "use strict";
    var x = 3.14;
    delete x; // error, can't delete a variable (or object)

    "use strict";
    function x(p1, p2) {};
    delete x; // error, can't delete a function

    "use strict"; 
    function x(p1, p1) {}; // error, can't duplicate a parameter name

    "use strict";
    var x = 010; // error, octal numeric not allowed
    var x = "\010"; // erroc, octal escape characters not allowed

    "use strict";
    var eval = 3.14; // error, can't use the word eval as a variable
    var arguments = 4; // error, can't use the word arguments as a variable
    // other words that can't be used: implements, interface, let, package, private, protected, public, static, yield

this 
    // refers to the object that called the function

    // if object wasn't specified, will give an error
        "use strict";
        function myFunction() {
        alert(this); // error
        }
        myFunction();

    // See this.js for more notes on the "this" keyword. 

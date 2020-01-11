Arrow Overview

    // new in ES6
    // allows us to write shorter function syntax

    Before 
    hello = function() {
        return "Hello World!";
    }                                       

    After
        hello = () => {
            return "Hello World!";
        }

    Key changes
        // "function" omitted
        // arrow => added

    // If function has only one statement, and the statement returns a value, 
    // can remove the brackets and the return keyword
        hello = () => "Hello World!";

    // Put parameters inside the parantheses as usual
        hello = (parameter) => "Hello" + parameter;

    // Only one parameter? Skip parantheses
        hello = parameter => "Hello" + parameter;

this

    // In regular function: "this" represents objects that called the function (e.g., window, document, button, etc.)
        hello = function() {
            document.getElementById("demo").innerHTML += this;
        }
        
        //The window object calls the function:
        window.addEventListener("load", hello); // [object Window]
        
        //A button object calls the function:
        document.getElementById("btn").addEventListener("click", hello); // [object HTMLButtonElement]

    // In arrow function: "this" always represents the object that defined the arrow function
        hello = () => {
            document.getElementById("demo").innerHTML += this;
        }
        
        //The window object calls the function:
        window.addEventListener("load", hello); // [object Window]
        
        //A button object calls the function:
        document.getElementById("btn").addEventListener("click", hello); // [object Window]
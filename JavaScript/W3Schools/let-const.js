Block Scope    
    // variables declared with var can't have block scope
    // but can have block scope when declared inside a block {}
        { var x = 2; }
        // can use x here

    // let and const allow block scope {} variables
        { let x = 2; }
        // can use x here

Redeclaring Variables
    // can redeclare with var
        var x = 10;
        // x is 10 here
        { var x = 2; }
        // x is 2 here

    // can redeclare with let
        var x = 10;
        // x is 10 here
        { let x = 2; }
        // x is 10 here
 
Loop Scope
    // var redeclares outside the loop
        var i = 5;
        for (var i = 0; i < 10; i++) {}
        // i is 10 here
    
    // let doesn't redeclare outside the loop
        let i = 5;
        for (let i = 0; i < 10; i++) {}
        // i is 5 here

Function Scope // var and let work the same in functions

Global Scope // var and let work the same in global

Global variables in HTML 
    // var keyword belongs to the window object
        var carName = "Volvo";
        // can use window.carName here

    // let keyword does not belong to the window object
        let carName = "Volvo";
        // cannot use window.carName here

Hoisting
    // var variables are hoisted to the top
    // let variables are not hoisted to the top
    // const variables are not hoisted to the top

Const 
    // const variables work like let variables, but they can't be reassigned
    // does not define a constant value, but defines a constant reference to a value

    // cannot be used before it's declared
        carName = "Volvo"; // can't use carName here
        const carName = "Volvo";

    // must be assigned a value when declared
        // BAD                          // GOOD
        const PI;                       const PI = 3.14159265359;
        PI = 3.14159265359;

    Primitive Values
        // cannot change/reassign constant primitive values
            const PI = 3.141592653589793;
            PI = 3.14;      // error
            PI = PI + 10;   // also error

    Objects
        //  can change properties of constant objects
            const car = {type:"Fiat", model:"500", color:"white"};
            car.color = "red"; // can change a property
            car.owner = "Johnson"; // can add a property

        // cannot reassign a constant object
            const car = {type:"Fiat", model:"500", color:"white"};
            car = {type:"Volvo", model:"EX60", color:"red"}; // error

    Arrays
        // can change elements of a constant array
            const cars = ["Saab", "Volvo", "BMW"];
            cars[0] = "Toyota"; // can change an element
            cars.push("Audi"); // can add an element
        
        // can't reassign a constant array
            const cars = ["Saab", "Volvo", "BMW"];
            cars = ["Toyota", "Volvo", "Audi"]; // error

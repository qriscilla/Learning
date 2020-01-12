Hoisting 

    // Might seem weird, but variables can be declared after it's been used; variables can be used before it's been declared.
    // Hoisting is JS's default behavior of moving declarations to the top.
    // I.e., Even if a variable is declared after it's been used, JS "hoisted" or recognized that variable from up-top.

    // BUT - Variables and constants declared with let or const are not hoisted.

var x = 7

    Declarations 
        // registers a variable in the corresponding scope
        var x
        // hoisted

    Initialization 
        // allocates memory for the variable
        = 7
        // not hoisted

// A good practice is to declare all variables at the beginning of every scope.

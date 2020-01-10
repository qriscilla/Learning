for
    // loops through a block of code a number of times
    // condition is mentioned up front

    for (statement 1; statement 2; statement 3) {
        // code block to be executed
    }

    // statement 1 
        // is executed (one time) before the execution of the code block
        // is optional or multiple
    // statement 2 
        // defines the condition for executing the code block
        // is optional
        // If returns true, the loop will start over again (loop!)
        // If returns false, the loop will end
    // statement 3 executed (every time) after the code block has been executed
        // is optional
        i-- // negative increment
        i++ // positive increment

    for/In
        // loops through the properties of an object

        var person = {fname:"John", lname:"Doe", age:25};
        var text = "";
        var x;
        for (x in person) {
        text += person[x];
        }
        
            John Doe 25 // would be the output

    for/of
        // kind of like for/in loop
        // loops through the values of an iterable object such as arrays, strings, maps, etc.

        for (variable of iterable) {
            // code block to be executed
        }

while
    // loops through a block of code while a specified condition is true
    // in other words: loop runs until the condition is false
    // basically a for loop without statements 1 and 3

    while (condition) {
        // code block to be executed
    }

do/while
    // a variant of the while loop, not used as often
    // execute the code block once, before checking if the condition is true, then repeat as long as the condition is true
    // In other words: condition is mentioned at the end

    do {
        // code block to be executed
    } while (condition);

Break // "jumps out" of a loop or stops running
continue // "jumps over" or skips one iteration in the loop

// Helpful video: https://www.youtube.com/watch?time_continue=568&v=l471alyJLKs&feature=emb_logo


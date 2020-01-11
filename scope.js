// 2 types of scope:
    Local
        // Local variables have function scope: can only be accessed within the function
        // Hence same-name variables can technically be used in different functions.

            // can't use carName here
            function myFunction() {
                var carName = "Volvo"; // can use carName here
            }
            // can't use carName here
    
    Global 
        // All scripts and functions on a web page can access it.

            var carName = "Volvo";
            // can use carName here
            function myFunction() {
                // can use carName here
            }
            // can use carName here

        // If you assign a value to a variable that's not been declared, it will automatically become global.
           
            myFunction();
            // can use carName here
            function myFunction() {
                carName = "Volvo"; // can use carName here
            }
            // can use carName here

        // In HTML, the global scope is the window object.
            
            var carName = "Volvo";
            // can use window.carName here
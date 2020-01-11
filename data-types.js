// 5 data types that can contain values:
    string
    number
    boolean
    object
        // 6 types of objects
        object
        date
        array 
        string
        number
        boolean
    function

// 2 data types that can't contain values:
    null
    undefined

typeof
    typeof NaN // number
    typeof array // object (Array is a type of object!)
    typeof date // object
    typeof null // object
    typeof an undefined variable // undefined 

    // Operators (+ - * / typeof) don't have a data type.
    // typeof always returns a string

constructor 
    // property that returns the constructor function for variables
    // Use this to find out if an object is an array

    "John".constructor // String()
    new Date().constructor // Date()
    function(){}.constructor // Function()

Type Conversion

    String() .toString() 
        // convert numbers to strings
            String(123)
            (123).toString()
        // convert booleans to strings
            String(false)
            false.toString()
        // convert dates to strings
            String(Date())
            Date().toString()

    Number() 
        // convert strings to numbers
            Number(" ") // 0
            Number("") // 0
            Number("99 88") // NaN
        // convert booleans to numbers
            Number(false) // 0 (binary)
            Number(true) // 1 (binary)
        // convert dates to numbers
            Number(new Date()) // have to establish date as an object first
            new Date().getTime() // does the same as above
        
    Unary + operator // convert variable to a number
        var y = "5" // y is a string
        var x = + y // x is a number

        var y = "John" // y is a string
        var x = + y // x is a number (NaN)

    // Unique type conversions to keep in mind 
        Original value      Number      String      Boolean
        0                   0           "false"     false
        1                   1           "true"      true
        "0"                 0           "0"         true
        "000"               0           "000"       true
        ""                  0           ""          false
        [ ]                 0           ""          true
        [20]                20          "20"        true
        null                0           "null"      false
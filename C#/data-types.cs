// Data Types

  // Numbers
    int       -123 123        // Integers from -2,147,483,648 to 2,147,483,647                                  4 bytes
                              // No special ending
                              
    long      15000000000L    // Integers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807          8 bytes
                              // End with "L"
                              
    float     5.75F           // Fractional / decimal numbers up to 6 to 7 decimal digits                       4 bytes
              35e3F           // End with "F" and add an "e" to indicate power of 10
              
    double    19.99 19.99D    // Fractional / decimal numbers up to 15 decimal digits                           8 bytes
              12E4D           // Optionally end with "D" and add an "e" to indicate power of 10
                              // Allows more digits after the decimal point, so more "precise" than float
                              
  // Characters
    char      'a' 'B'         // single character in 'single quotes'                                            2 bytes
    string    "Hello World!"  // text in "double quotes"                                                        2 bytes per character
      
  // Booleans
    bool      true  false     // commonly used for conditional testing                                          1 bit
    
// Type cast when you need to assign a value of one data type to another type

  // Implicit Casting
  
    // automatically converting a smaller type to a larger type
    char > int > long > float > double
    
    // Example
    int myInt = 9;
    double myDouble = myInt;        // automatically casting int to double
    Console.WriteLine(myInt);       // outputs 9
    Console.WriteLine(myDouble)     // outputs 9
    
  // Explicit Casting
  
    // manually converting a larger type to a smaller type
    double > float > long > int > char

    // Example
    double myDouble = 9.78;
    int myInt = (int) myDouble;     // manually casting double to int
    Console.WriteLine(myDouble);    // outputs 9.78
    Console.WriteLine(myInt);       // outputs 9
    
  // Convert data types explicitly by using built-in methods
  
    // Example
    init MyInt = 10;
    double myDouble = 5.25;
    bool myBool = true;
    Console.WriteLine(Convert.ToString(myInt));     // outputs "10"
    Console.WriteLine(Convert.ToDouble(myInt));     // outputs 10
    Console.WriteLine(Convert.ToInt32(myDouble));   // outputs 5
    Console.WriteLine(Convert.ToString(myBool));    // "true"

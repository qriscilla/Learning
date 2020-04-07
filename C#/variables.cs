// Variables are containers for storing data values

// Data Types

  // Numbers
    int       -123 123        // Integers from -2,147,483,648 to 2,147,483,647
                              // No special ending
    long      15000000000L    // Integers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
                              // End with "L"
    float     5.75F           // Fractional / decimal numbers up to 6 to 7 decimal digits
              35e3F           // End with "F" and add an "e" to indicate power of 10
    double    19.99 19.99D    // Fractional / decimal numbers up to 15 decimal digits
              12E4D           // Optionally end with "D" and add an "e" to indicate power of 10
                              // Allows more digits after the decimal point, so more "precise" than float
  // Characters
    char      'a' 'B'         // single character in 'single quotes'
    string    "Hello World!"  // text in "double quotes"
      
  // Booleans
    bool      true  false     // commonly used for conditional testing

// Declaring or Creating Variables

  type identifier = value;      // Specify the type of a variable (identifier) and assign it a value
  string name = "John";        
  int myNum = 15;
  
  init myNum;                   // You can declare a variable without assigning any value at the moment
  myNum = 15;                   // and assign one later
  
  init myNum = 15;              // Assign a new value to an existing variable? It'll overwrite the previous value
  myNum = 20;                   // myNum is 20 now
  
  const int myNum = 15;         // To make a variable unchangeable and read-only, declare it as a const
  myNum = 20;                   // error
                          
  const init myNum;             // error; You can't declare a const variable without assigning any value at the moment
  
  init x = 5, y = 6, x = 50;    // Use comma to declare more than one variable of the same type

/* Rules for variables (unique identifiers)

  Can contain letters, digits, and underscore _
  Must begin with a letter
  lowerCamelCase
  Are case-sensitive
  Can't contain any whitespace
  Can't be reserved words (e.g., int, double, string) */

// Displaying Variables

  string firstName = "Priscilla";
  string lastName = "Whang";
  string fullName = firstName + lastName;
  Console.WriteLine(fullName);                  // Use WriteLine() to print to the console window

Strings Overview      //  Strings are used for storing text
                      //  Contains a collection of characters
                      //  Surrounded by "double quotes"
                    
String is an object   //  Objects contain properties and methods that can perform certain operations
                      //  Example 1
                          string text = "Priscilla";
                          Console.WriteLine("The Length of the txt string is: " + txt.Length);
                      //  Example 2
                          string text = "Hello World";
                          Console.WriteLine(txt.ToUpper());
                            "HELLO WORLD"
                          Console.WriteLine(txt.ToLower());
                            "hello world"
                          
String Concatenation  //  Use the + operator to combine strings
                      //  Example
                          string firstName = "John ";
                          string lastName = "Doe";
                          string name = firstName + lastName;
                          Console.WriteLine(name);
                            John Doe
                      //  Or use the .Concat() method
                      //  Example
                          string firstName = "John ";
                          string lastName = "Doe";
                          string name = string.Concat(firstName, lastName);
                          Console.WriteLine(name);
                            John Doe
String Interpolation  //  Another way to concatenate strings
                      //  Substitutes values of variables into placeholders in a string
                      //  Don't have to worry about spaces like you have to with .Concat()
                      //  Example
                          string firstName = "John";
                          string lastName = "Doe";
                          string name = $"My full name is: {firstName} {lastName}";
                          Console.WriteLine(name);
                          
Adding #s and ""s     //  C# uses the + operator for both addition and concatenation
                      //  Remember, numbers are added, and strings are concatenated
                      
                      //  Add numbers using +
                      //  Example
                          int x = 10;
                          int y = 20;
                          int z = x + y;      // z is 30
                          
                      //  Concatenate strings using +
                      //  Example
                          string x = "10";
                          string y = "20";
                          string z = x + y;   // z is 1020
                          
Accessing Strings     //  Access characters in a string by referring to its index number using []
                      //  Remember, string indexes start with 0; [0] is the first character, and [1] is the second
                      //  Example 1
                          string myString = "Hello";
                          Console.WriteLine(myString[0]);
                            H
                      //  Example 2
                          string myString = "Hello";
                          Console.WriteLine(myString[1]);
                            e
                      //  Find the index position of a character by using IndexOf() method
                      //  Example
                          string myString = "Hello";
                          Console.WriteLine(myString.IndexOf("e"));
                            1
                      //  Use Substring() method to extract characters from a string
                      //  Starting from the specified character position/index, and
                      //  Returns a new string
                      //  Often used together with IndexOf() to get the specific character position
                      //  Example
                          string name = "John Doe";
                          int charPos = name.IndexOf("D");
                          string lastName = name.Substring(charPos);
                          Console.Write(lastName);
                            Doe
                        
Escape the String     //  Use backslash \ to escape 
                      //  Example 1
                          string txt = "We are the so-called \"Vikings\" from the north.";
                          Console.WriteLine(txt);
                            We are the so-called "Vikings" from the north.
                      //  Example 2
                          string txt = "It\'s alright.";
                          Console.WriteLine(txt);
                            It's alright.
                      //  Example 3
                          string txt = "The character \\ is called backslash.";
                          Console.WriteLine(txt);
                            The character \ is called backslash.

                      //  Use \n to enter a new line
                      //  Example
                          string txt = "Hello\World!";
                          Console.WriteLine(txt);
                            Hello
                            World!
                      
                      //  Use \t to tab
                      //  Example
                          string txt = "Hello\tWorld";
                          Console.WriteLine(txt);
                            Hello   World!
                      
                      //  Use \b to go back one space
                      //  Example
                          string txt = "Hel\blo World!";
                          Console.WriteLine(txt);
                            Helo World!
                        

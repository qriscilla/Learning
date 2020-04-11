/*

Logical Conditions        Less than <
                          Less than or equal to <=
                          Greater than >
                          Greater than or equal to >=
                          Equal to ==
                          Not equal to !=
                      
Conditional Overview      if        runs code block if a specified if-condition is true
                          else      rusn code block if the if-condition is false
                          else if   runs code block if none of the conditions (if- and else-) is true
                          switch    specifies many alternative code blocks to be executed
*/

Syntax    // Important: if, else, else if, and switch are lowercase! C# is case-sensitive

          if          if (condition)       
                      {                     
                        // code block for if    
                      }                     

          else        if (condition)   
                      {                     
                        // code block for if        
                      }                     
                      else
                      {
                        // code block otherwise
                      }

          else if     if (condition)
                      {
                        // code block for if
                      }
                      else if (condition)
                      {
                        // code block for else if
                      }
                      else
                      {
                        // code block otherwise
                      }
        
          switch      switch (expression)
                      {
                        case x:
                          // code block for x
                          break;
                        case y:
                          // code block for y
                          break;
                        default:
                          // code block otherwise
                          break;
                      }

More about switch   //  Is evaluated once
                    //  Value of the expression is compared with the value of each case
                    //  If there's a match between the expression and a case, the associated code block will run
                    //  When the break keyword is reached, the code stops executing
                    
                    //  Example
                        switch (day)
                        {
                          case 1:
                            Console.WriteLine("Monday");
                            break;
                          case 2:
                            Console.WriteLine("Tuesday");
                            break;
                          case 3:
                            Console.WriteLine("Wednesday");
                            break;
                          case 4:
                            Console.WriteLine("Thursday");
                            break;
                          case 5:
                            Console.WriteLine("Friday");
                            break;
                          case 6:
                            Console.WriteLine("Saturday");
                            break;
                          case 7:
                            Console.WriteLine("Sunday");
                            break;
                        }
                        
                    //  The default keyword is optional and specifies some code to run if there is no case match
                    //  Kind of like the "else" conditional
                    //  Example
                        switch (day) 
                        {
                          case 6:
                            Console.WriteLine("Today is Saturday.");
                            break;
                          case 7:
                            Console.WriteLine("Today is Sunday.");
                            break;
                          default:
                            Console.WriteLine("Looking forward to the Weekend.");
                            break;
                        }

Ternary Operator    //  Short-hand if else
                    //  Replaces simple if-else statements
                    //  Replaces multiple lines of code with a single line
                    
                    // Syntax
                        variable = (condition) ? expressionTrue : expressionFalse;
                    
                    //  Example, original version
                        if (20 < 18)
                        {
                          Console.WriteLine("Good day.");
                        }
                        else
                        {
                          Console.WriteLine("Good evening.");
                        }
                    //  Example, with ternary operator
                        string result = (20 < 18) ? "Good day." : "Good evening."
                        Console.WriteLine(result);



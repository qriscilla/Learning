Loops Overview    //  Loops execute a code block as long as a specified condition is reached
                  //  Comes in handy because they save time, reduce errors, and make code more readable
                  
While Loop        //  Loops through a code block as long as a specified condition is true

                  //  Syntax
                      while (condition)
                      {
                        // code block
                      }
                      
                  //  Example
                  //  Code block will run over and over again, as long as i is less than 5
                      int i = 0;
                      while (i < 5)
                      {
                        Console.WriteLine(i);
                        i++;
                      }
                      
Do/While Loop     //  Loops through a code block once (even if the condition is false), 
                  //  before checking if the condition is true,
                  //  then repeats the loop as long as the condition is true
                  
                  //  Syntax
                      do
                      {
                        // code block
                      }
                      while (condition);
                      
                  //  Example
                      int i = 0;
                      do
                      {
                        Console.WriteLine(i);
                        i++;
                      }
                      while (i < 5);
                      
For Loop          //  Use for loop when you know exactly how many times you want to loop through

                  //  Syntax
                      for (statement 1; statement 2; statement 3)
                      {
                        // code block
                      }
                      
                  //  Statement 1 - executed (one time) before the code block is run
                  //  Statement 2 - defines the condition for executing the code block
                  //  Statement 3 - executed (every time) after the code block has been executed
                  
                  //  Example
                      for (int i = 0; i < 5; i++)             // ouput
                      {                                          0
                        Console.WriteLine(i);                    1
                      }                                          2
                                                                 3
                                                                 4
                  
Foreach Loop      //  Used exclusively to loop through elements in an array

                  //  Syntax
                      foreach (type variableName in arrayName)
                      {
                        // code block
                      }
                  
                  //  Example
                      string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};  
                      foreach (string i in cars)                                    // output
                      {                                                                Volvo
                        Console.WriteLine(i);                                          BMW
                      }                                                                Ford
                                                                                       Mazda
                  
Break             //  Used to "jump" out of a switch statement or loop

                  //  Example 1 - Break in a For loop
                      for (int i = 0; i < 6; i++)            // output
                      {                                         0
                        if (i == 4)                             1
                        {                                       2
                          break;                                3
                        }                                        
                        Console.WriteLine(i);
                      }
                      
                  //  Example 2 - Break in a While loop
                      int i = 0;
                      while (i < 6)                          //  output
                      {                                          0
                        Console.WriteLine(i);                    1
                        i++;                                     2
                        if (i == 4)                              3
                        {
                          break;
                        }
                      }
                      
Continue          //  Breaks one iteration in the loop if a specified condition occurs
                  //  and continues with the next iteration in the loop
                  
                  //  Example 1 - Continue in a For loop
                      for (int i = 0; i < 6; i++)            //  output
                      {                                          0
                        if (i == 4)                              1
                        {                                        2
                          continue;                              3
                        }                                        5
                        Console.WriteLine(i);
                      }
                      
                  //  Example 2 - Continue in a While loop
                      int i = 0;
                      while (i < 6)                          //  output
                      {                                          0
                        if (i == 4)                              1
                        {                                        2
                          i++;                                   3
                          continue;                              5
                        }
                        Console.WriteLine(i);
                        i++;
                      }

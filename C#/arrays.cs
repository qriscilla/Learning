Arrays Overview             //  Used to store multiple values in a single variable,
                            //  instead of declaring separate variables for each value
                            
Create/Declare an Array     //  Syntax
                                type[] variableName;
                        
                            //  Examples
                                string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
                                int[] myNum = {10, 20, 30, 40};
                                
                            //  Can also use the new keyword
                            //  Examples
                                string[] cars = new string[4];                                      // Creates an array of 4 elements, and add values later
                                string[] cars = new string[4] {"Volvo", "BMW", "Ford", "Mazda"};    // Create an array of 4 elements and add values right away 
                                string[] cars = new string[] {"Volvo", "BMW", "Ford", "Mazda"};     // Create an array of 4 elements without specifying the size
                                
                            //  If you declare an array and initialize it later, you HAVE TO use the new keyword
                            //  Example
                                string[] cars;
                                cars = new string[] {"Volvo", "BMW", "Ford"};

Accessing Array Elements    //  Access array elements by referring to the index number
                            //  Remember, index starts with [0], [1], [2], . . .
                        
                            //  Example - accessing the value of the first element
                                string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
                                Console.WriteLine(cars[0]);                             //  output
                                                                                            Volvo
                                                                                            
Changing Array Elements     //  Change array elements by referring to the index number

                            //  Example
                                string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
                                cars[0]; "Opel";
                                Console.WriteLine(cars[0]);                             //  output
                                                                                            Opel
                                                                                            
Array Length                //  To find out how many elements an array has, use the Length property

                            //  Example
                                string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
                                Console.WriteLine(cars.Length);                         //  output
                                                                                            4
                                                                                            
Array For Loop              //  Use the Length property to specify how many times the loop should run

                            //  Example
                                string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
                                for (int i = 0; i < cars.Length; i++)                   //  output
                                {                                                           Volvo
                                  Console.WriteLine(cars[i]);                               BMW
                                }                                                           Ford
                                                                                            Mazda

Array Foreach Loop          //  Syntax
                                foreach (type variableName in arrayName)
                                {
                                  // code block
                                }

                            //  Example
                                string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
                                foreach (string i in cars)                              //  output
                                {                                                           Volvo
                                  Console.WriteLine(i);                                     BMW
                                }                                                           Ford
                                                                                            Mazda

Sorting Arrays              //  Use Sort() method to sort an array alphabetically or in an ascending order

                            //  Example 1 - sorting strings
                                string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
                                Array.Sort(cars);
                                foreach (string i in cars)                              //  output
                                {                                                           BMW
                                  Console.WriteLine(i);                                     Ford
                                }                                                           Mazda
                                                                                            Volvo
                                                                                            
                            //  Example 2 - sorting ints
                                int[] myNumbers = {5, 1, 8, 9};
                                Array.Sort(myNumbers);
                                foreach (int i in myNumbers)                            //  output
                                {                                                           1
                                  Console.WriteLine(i);                                     5
                                }                                                           8   
                                                                                            9
                                                                                            
System.Linq Namespace       //  This namespace has Min, Max, and Sum

                            //  Example
                                using System;
                                using System.Linq;

                                namespace MyApplication
                                {
                                  class Program
                                  {
                                    static void Main(string[] args)
                                    {
                                      int[] myNumbers = {5, 1, 8, 9};
                                      Console.WriteLine(myNumbers.Max());  // returns the largest value
                                      Console.WriteLine(myNumbers.Min());  // returns the smallest value
                                      Console.WriteLine(myNumbers.Sum());  // returns the sum of elements
                                    }
                                  }
                            }

/* C# Overview
   OOP language developed by Microsoft
   Runs on the .NET Framework
   Similar to C++ and Java
   Said to be more structured than JS */

/* How To
   Need IDE (Integrated Development Environment) e.g., Visual Studio
   Make sure C# is properly installed to be able to run code */
  
// Syntax Example
  using System;                                   // We're using classes from the System namespace
                                                  // Note that C# ignores white space
  namespace HelloWorld                            // namespace is used to organize code; it's a container for classes and other namespaces
  {                                               // { marks the beginning of a block of code
    class Program                                 // class is a container for data and methods. Every line of code in C# must be inside a class!
    {
      static void Main(string[] args)             // Any code inside the Main method {} will be executed
      {
        Console.WriteLine("Hello World!");        // Console is a class of the System namespace, which has a WriteLine() method
      }                                           // } marks the ending of a block of code
    }
  }
  
  // Output
  Hello World!
  
/* Important Notes About C# Syntax
   C# is case-sensitive! (E.g., MyClass and myclass are different)
   It's not required, but better to match the file name to the class name (e.g., Program.cs)
   C# files end in .cs */
  
// WriteLine() vs. Write()
  // WriteLine() prints the output on a new line each time
       Console.WriteLine("Hello World!");
       Console.WriteLine("I will print on a new line.");
         // Output
         Hello World!
         I will print on a new line.
  // Write() prints the output on the same line */
       Console.Write("Hello World!");
       Console.Write("I will print on the same line as before.");
         // Output
         Hello World! I will print on the same line as before.
         
// for single-line commenting
/* for double-
   line commenting */

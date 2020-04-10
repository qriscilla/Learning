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
         
// ReadLine()
  
    // Is used to get user input
      Console.WriteLine("Enter username:");
      string userName = Console.ReadLine();
      Console.WriteLine("Username is: " + userName);
      
    // Console.ReadLine() always returns a string
    // So you cannot implicitly convert type 'string' to 'int'
      Console.WriteLine("Enter your age:");
      int age = Console.ReadLine();
      Console.WriteLine("Your age is: " + age);         // error

    // But you can explicitly convert types by type-casting
      Console.WriteLine("Enter your age:");
      int age = Convert.ToInt32(Console.ReadLine());
      Console.WriteLine("Your age is: " + age);

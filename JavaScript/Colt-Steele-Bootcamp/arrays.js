Arrays Overview         //  Lets us group data together in lists
                        //  Arrays are indexed starting at 0

                        //  Syntax
                            var arrayName = [data1, data2, data3];
                            
                        //  Can hold any type of data
                            var random_collection = [49, true, "Hermione", null];
                            
                        //  Has a length property
                            var nums = [45, 37, 89, 24];
                            nums.length                     //  4

Initializing an Array   //  Can initialize an empty array
                        //  Examples
                            var friends = [];               //  More common
                            var friends = new Array()       //  Not as uncommon

Retrieve Data           //  Can use indices to retrieve data
                        //  Example
                            var friends = ["Charlie", "liz", "David", "Mattias"];
                            console.log(friends[0]);                                //  Charlie
                      
Update Data             //  Can use indices to update arrays
                        //  Example
                            var friends = ["Charlie", "liz", "David", "Mattias"];
                            friends[0] = "Chuck";                                   //  friends is now ["Chuck", "Liz", "David", "Mattias"]
                      
Add New Data            //  Can use indices to add new data to an array

                        //  Example 1
                            var friends = ["Charlie", "liz", "David", "Mattias"];
                            friends[4] = "Amelie";                                  //  friends is now ["Chuck", "Liz", "David", "Mattias", "Amelie"]

                        //  Example 2
                            var friends = ["Charlie", "Liz", "David", "Mattias"];
                            friends[5] = "Amelie";                                  //  friends is now ["Chuck", "Liz", "David", "Mattias", undefined, "Amelie"]  
                                                                                    //  friend[4] data is not defined, so JS skips this and adds "Amelie" as friends[5]
                                                                                   
Built-in Methods

    Push        //  Push to add a new data to the end of an array
                //  Example
                    var colors = ["red", "orange", "yellow"];
                    colors.push("green");                           //  4 (outputs the array length after adding the new data)
                                                                    //  colors = ["red", "orange", "yellow", "green"];

    Pop         //  Pop to remove the last item in an array
                //  Example
                    var colors = ["red", "orange", "yellow"];
                    colors.pop();                                   //  "yellow" (outputs the data that was removed)
                                                                    //  colors = ["red", "orange"];

    Unshift     //  Unshift to add to the front of an array
                //  Example
                    var colors = ["red", "orange", "yellow"];
                    colors.unshift("infrared");                     //  4 (outputs the array length after adding the new data)
                                                                    //  colors = ["red", "orange", "yellow", "infrared"];
                    
    Shift       //  Shift to remove the first item in an array
                //  Example
                    var colors = ["red", "orange", "yellow"];
                    colors.shift();                                 //  "red" (outputs the data that was removed)
                                                                    //  colors = ["orange", "yellow"];
                    
    IndexOf     //  Find the index of an item in an array 
                //  Examples
                    var friends = ["Charlie", "Liz", "David", "Liz"];
                    friends.indexOf("David");                               //  2
                    friends.indexOf("Liz");                                 //  1 (Returns the first index if there are multiple.)
                    friends.indexOf("Hagrid");                              //  -1 (Returns -1 if the element is not present.)
                
    Slice       //  Copy parts of an Array 
    
                //  Syntax
                    array.slice(inclusiveStartSlice, exclusiveStopSlice);
                    
                //  Example 1
                    var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
                    var citrus = fruits.slice(1, 3);                                //  copies the [1] and [3] fruits without alterating var citrus
                                                                                    //  citrus = ['Orange', 'Lemon']
                                                                                    //  fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Orange', 'Lemon']
                                                                                  
                //  Example 2
                    var nums = [1, 2, 3];                                             
                    var otherNums = nums.slice();                                   //  Both arrays are [1, 2, 3]

Array Iteration     //  Iterating or looping through an array and doing something to or with each item
                    //  This is usually done with for loop or foreach. It's rarely done with while loop

                    //  For Loop
                    //  To for-loop over an array, we need to make use of the array's length property
                    //  Example
                        var colors = ["red", "orange", "yellow", "green"];
                        for(var i = 0; i < colors.length; i++) {
                          console.log(colors[i]);
                        }

                    //  ForEach
                    //  Syntax
                        arr.forEach(someFunction)
                    //  Example
                        var colors = ["red", "orange", "yellow", "green"];
                        colors.forEach(function(color)) {                   //  The function is called for each element in the colors array
                          console.log(color + " is a color");               //  red is a color
                        }                                                   //  orange is a color
                                                                            //  yellow is a color
                                                                            //  green is a color

Arrays Exercises    //  Exercise 1 - What does the console.log print?
                        var numbers = [22, 67, 33, 96, 88];
                        console.log(numbers[numbers.length]);         //  undefined
                
                    //  Exercise 2 - What does the console.log print?
                        var friendGroups = [                          // This is called a "nested array" or a 2D array
                          ["Harry", "Ron", "Hermione"],
                          ["Malfoy", "Crabbe", "Goyles"],
                          ["Mooney", "Wormtail", "Prongs"]
                        ];
                        console.log(friendGroups[2][0]);              //  Mooney
                
                    //  Exercise 3 - What does the following code print out?
                        var numbers = [1,2,3,4,5,6,7,8,9,10];
                        var colors = ["red", "orange", "yellow", "green"];
                        numbers.forEach(function(color){                      //  3
                          if(color % 3 === 0) {                               //  6
                            console.log(color);                               //  9
                          }
                        });

                    //  Exercise 4 - Translate the above code into a for loop
                        var numbers = [1,2,3,4,5,6,7,8,9,10];
                        for(var i=0; i<numbers.length; i++) {
                          if(i % 3 === 0) {
                            console.log(i);
                          }
                        }
                  
                    //  Exercise 5 - Write a function printReverse() that takes an array as an argument
                    //  and prints out the elements in the array in reverse order
                    //  Hint: Don't actually reverse the array itself. Use a loop
                        function printReverse(arr) {
                          for(var i = arr.length - 1; i >= 0; i--) {
                            console.log(arr[i]);
                          }
                        }
                        printReverse([1, 3, 5]);                        //  5
                                                                        //  3
                                                                        //  1

                    //  Exercise 6 - Write a function isUniform() which takes an array as an argument
                    //  and returns true if all elements in the array are identical
                    //  Hint: Use a loop and have a variable that keeps track of the first index element
                        function isUniform(arr) {
                          var first = arr[0];
                          for(var i = 1; i < arr.length; i++) {
                            if(arr[i] !== first) {
                              return false;
                            }
                          }
                          return true;
                        }

                        function isUniform(arr) {               //  Why forEach doesn't work here:
                          var first = arr[0];
                          arr.forEach(function(element){        //  This only returns the exact function once
                            if(element !== first) {
                              return false;
                            }
                          });
                          return true;                          //  And the it'll execute this line no matter what
                        }

                    //  Exercise 7 - Write a function sumArray() which takes an array of numbers and
                    //  and returns the sum of all numbers in the array
                    //  Hint: Use a loop and have a variable that sums through each iteration
                        function sumArray(arr) {
                          var total = 0;
                          arr.forEach(function(element){
                            total += element;
                          });
                          return total;
                        }

                    //  Exercise 8 - Write a function max() which accepts an array of numbers and
                    //  returns the maximum number in the array
                    //  Hint: Use a loop and have a variable that updates as the maximum through each iteration
                        function max(arr) {
                          var max = arr[0];
                          for(var i = 1; i < arr.length; i++) {
                            if(arr[i] > max) {
                              max = arr[i];
                            }
                          }
                          return max;
                        }


                
                
                    
                    
                    

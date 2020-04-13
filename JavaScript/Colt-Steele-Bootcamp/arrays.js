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
                                                                                  
                                                                                  
                                                                                    
                
                
                
                
                    
                    
                    

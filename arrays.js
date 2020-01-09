Arrays

    sort() 
        // Sorts an array alphabetically
        // Sorts values as strings
            var points = [25, 100]
            points.sort() = [100, 25] // because "1" comes before "2"
        // To sort numbers appropriately, use the following code ("Compare Function"):
            sort(function(a, b) {return a - b});

    reverse() 
        // reverses the elements in an array (i.e., no longer alphabetically ordered)

    // To sort an array in random order,
        var points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b) {return 0.5 - Math.random()});

    // Arrays can contain objects
        var cars = [
            {type:"Volvo", year:2016},
            {type:"Saab", year:2001},
            {type:"BMW", year:2010}
        ];

    forEach() 
        // calls a callback function once for each array element

    map()
        // creates a new array by performing a function on each array element
        // doesn't execute the function for array elements without values
        // doesn't change the original array

    filter()
        // creates a new array with array elements that passes a test or a condition

    reduce()
        // runs a function on each element to produce (or "reduce" it to) a single final value
        // worfs from left to right
        // doesn't reduce the original array
        // can have an initial ("starting") value
            reduce(myFunction, 100);

    reduceRight()
        // works exactly the same as reduce() but from right to left

    every()
        // checks if all array elements pass a test
        // output is True or False

    some()
        // checks if some array elements pass a test
        // output is True or False

    indexOf()
        // searches for an element value and returns its position
        // Remember that the count starts from 0!
        // Output of -1 means that the item is not found
        array.indexOf(item, start)
            // item = the item to search for
            // start = where to start the search (option)

    lastIndexOf()
        // same as indexOf() but returns the last occurrence of the specific element

    find()
        // returns the value of the first element that passes a test function
        
    findIndex()
        // returns the index of the first array element that passes a test function

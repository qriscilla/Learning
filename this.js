this // refers to the object it belongs to

in a method
    // refers to the owner object when used in other methods
        var person = {
            firstName: "John",
            lastName : "Doe",
            id       : 5566,
            fullName : function() {
            return this.firstName + " " + this.lastName;
            }
        };

    // refers to any object when used in call() and apply()
        var person1 = {
            fullName: function() {
            return this.firstName + " " + this.lastName;
            }
        }
        var person2 = {
            firstName:"John",
            lastName: "Doe",
        }
        person1.fullName.call(person2);  // Will return "John Doe"

by itself
    // refers to the global object
    [object Window] // in a browser window

in a function (default)
    // refers to the global object
    [object Window] // in a browser window

in a function (strict)
    // is undefined

in event handlers
    // refers to the HTML element that received the event
Class
    // type of function
    // instead of using function to initiate, use class
    // properties are assigned inside constructor()

// E.g., Create an object "myCar" based on the Car class
    class Car {
        constructor(brand) {
            this.carName = brand;
        }
    }
    myCar = new Car("Ford");
    alert(myCar.carname); // Ford

Methods
    // can make your own methods!
        class Car {
            constructor(brand) {
                this.carName = brand;
            }
            present() {
                return "I have a " + this.carName;
            }
        }
        myCar = new Car("Ford");
        alert(myCar.present()); // I have a Ford

    // can also add a parameter
        class Car {
            constructor(brand) {
                this.carName = brand;
            }
            present(x) {
                return x + ", I have a " + this.carName;
            }
        }
        myCar = new Car("Ford");
        alert(myCar.present("Hello")); // Hello, I have a Ford

Statis Methods  
    // defined on the class, not on the prototype
    // call on the class, not on the object

        class Car {
            constructor(brand) {
                this.carName = brands;
            }
            static hello() {
                return "Hello!";
            }
        }
        myCar = new Car("Ford!");
        alert(Car.hello()); // Hello
        // not alert (myCar.hello()); 

    // to use object insite the static method, send it as a parameter
        class Car {
            constructor(brand) {
                this.carName = brands;
            }
            static hello(x) {
                return "Hello " + x.carName;
            }
        }
        myCar = new Car("Ford");
        alert(Car.hello(myCar)); // Hello Ford
    
Inheritance
    // use extends to create a class inheritance
    // class created with a inheritance inherits all the methods from another class
    // useful for code reusability; reuse properties and methods of an existing class

    // E.g., create a class named Model which inherits methods from the Car class
        class Car {
            constructor(brand) {
                this.carName = brands;
            }
            present() {
                return "I have a " + this.carName;
            }
        }
        class Model extends Car {
            constructor(brand, mod) { // class inheritances also need constructor()
                super(brand); // super() method refers to the parent class
                this.model = mod;
            }
            show() {
                return this.present() + ", it is a " + this.model;
            }
        }
        myCar = new Model("Ford", "Mustang");
        alert(myCar.show()); // I have a Ford, it is a Mustang
    
Getters and Setters 
    // E.g., create a getter and a setter for the carName property
        class Car {
            constructor(brand) {
                this._carName = brand; // use underscore _ before property name to separate getter/setter from the actual property
            }
            get cname() { // getter is a method, but don't use parantheses
                return this._carName;
            }
            set cname(x) {
                this_.carName = x;
            }
        }
        myCar = new Car("Ford");
        alert(myCar.cname);

Hoisting
    // Functions and other JS declarations are hoisted, but
    // class declarations are not hoisted
    // Always declare a class before you use it

"use strict" // class syntax must be written in strict mode
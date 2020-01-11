function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;

    try {   // block of code to try
      if(x == "") throw "is empty";     // Throw statements are custom errors
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10) throw "is too high";
      if(x < 5) throw "is too low";
    }

    catch(err) {    // block of code to handle error(s)
      message.innerHTML = "Error: " + err + ".";
    }

    finally {   // block of code to be executed regardless of the try and catch result
      document.getElementById("demo").value = "";
    }

}

// JS has a built in error object that provides error info when an error occurs.
// It has 2 useful properties: name and message

    name // sets or returns an error name
        RangeError // a number is out of range
        ReferenceError // an illegal reference occurred
        SyntaxError // syntax error occurred
        TypeError // type error occurred
        URIError // error in encodeURI() occurred

        alert(err.name); // use this in catch

    message // sets or returns an error message (a string)
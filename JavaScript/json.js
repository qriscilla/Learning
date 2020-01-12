JSON
  // format for storing and transporting data
  // used when data is sent from a server to a web page
  // stands for JavaScript Object Notation
  
Example
  // an array of 3 employee objects
  {
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Piper"}
  ]
  }
  
Syntax Rules
  // Data in name/value pairs
  // Data separated by commas
  // Curly braces hold {objects}
  // square brackets hold [arrays]
  
Convert JSON text to JS object
  // 1. Create JS string containing JSON syntax
    var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
    
  // 2. Use JSON.parse() function to convert string into object
    var obj = JSON.parse(text);

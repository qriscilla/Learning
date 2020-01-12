// Regular expression: sequence of characters that forms a search pattern,
// which can be used for text search and text replace operations.

search() // uses an expression to search for a match and returns the position of the match
    "Visit W3Schools!".search("W3Schools"); // 6

replace() // returns a modified string where the pattern is replaced
    "Visit W3Schools".replace("W3Schools", "Apple"); // "Visit Apple"

Modifiers
    i // case-insensitive matching
    g // global match
    m // multiline matching

Patterns
    // Brackets for range of characters
        [abc] // any of the characters between the brackets
        [0-9] // any of the digits between the brackets
        (x|y) // any of the alternatives separated with |
    
    // Metacharacters for characters with a special meaning
        \d // a digit
        \s // a whitespace character
        \bWORD // word that starts with "WORD"
        WORD\b // word that ends with "WORD"
        \uxxx // Unicde character specified by the hexadecimal number xxxx
    
    // Quantifiers to define quantities
        n+ // any string with at least one n
        n* // any string with zero or more n
        n? // any string with zero or one n

test() // searches or a pattern and returns true or false
    /e/test("The best things in life are free!"); // true

exec() 
    // searches for a specified pattern and returns the found text as an object
    // No match? Returns an empty (null) object

    /e/.exec("The best things in life are free!");
    obj // ["e", index: 2, input: "The best things in life are free!", groups: undefined]

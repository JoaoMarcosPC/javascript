/*-----VARIABLES-----

  -> In JS you can declare a variable by using: let, const, var
  -> Don't use var, variables declared with var have a global scope, this isn't exactly bad, but is a good practice not to do it, instead, use let (has local scope)
  -> If you want a variable to have constant value throughout the program, use const -> when naming constants is good practice to type all in uppercase
*/

/*-----DATA TYPES-----

  -> In JS you don't need to declare a data type to an variable, it does so automatically

  -> Data Types:
    - string: "This is a string"
    - numbers: 43
    - boolean: true or false
*/

var number; // You can declare a variable without assigning a value
let animal = "Lion";
const ISALIE = true;

number = 56;

console.log(number + 22);
console.log("Look there's a", animal, "over there!");

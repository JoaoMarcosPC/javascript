//----- ARROW FUNCTIONS -----
// They are anonymous functions, the only way to call them is by attributing it to a variable
// The return in a arrow function is implicit

const SUM = (x, y) => {
  return x + y
}

// You can write it using only one line
const MULT = (x, y) => x * y

// If the function has only one parameter the parentheses become optional
const UPPER = word => word.toUpperCase()

// Also, if the function has only one parameter but this parameter has a default value, the parentheses become mandatory
const NAME = (name = "John Doe") => `hello ${name}`

// Returning a object, when using a arrow function to return an object, this object must be inside parentheses
const LASTNAME = () => ({ name: "John", lastName: "Doe" })

console.log(SUM(45, 6));
console.log(MULT(45, 6));
console.log(UPPER("hjkjh"));
console.log(NAME());
console.log(LASTNAME());

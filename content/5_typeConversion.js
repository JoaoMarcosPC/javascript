// Type conversion -> change the datatype of a value

let age = window.prompt("How old are you ?"); // The user input is stored as a string

console.log(typeof age); // Returns the datatype of a variable
age = Number(age); // Convert String -> Number
console.log(typeof age);

age += 1;
console.log("One year from now you'll be", age, "years old.");



let y = 67.9;
y = String(y); // Convert Number -> String
console.log(y, typeof y);



let k = "";
let x = "a";
let v = 0;

k = Boolean(k); // Convert String -> Boolean, an empty string returns false
x = Boolean(x);

v = Boolean(v); // Convert Number -> Boolean, it'll only return false if the number is zero

console.log(k, typeof k);
console.log(x, typeof x);
console.log(v, typeof v);

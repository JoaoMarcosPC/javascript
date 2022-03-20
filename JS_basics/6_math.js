// Math -> object with methods and constants

let x = 3.14;
let y = 3.14;
let z = 3.14;

x = Math.round(x); // Returns the number rounded
y = Math.floor(y); // Rounds down
z = Math.ceil(z); // Rounds up

let a = Math.pow(x, 2); // equivalent to x ^ 2
let b = Math.sqrt(16); // square root
let c = Math.abs(-8.79); // Returns the "distance" between the input and zero

let max = Math.max(9, c, 78);
let min = Math.min(5, c, 78);

const PI = Math.PI;

let rand = Math.random(); // Generates random number between 0 and 1
let dice1 = Math.floor(Math.random() * 6); // Number between 0 and 5
let dice2 = Math.floor(Math.random() * 6) + 1; // Number between 1 and 6

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);
console.log(c);
console.log(max);
console.log(min);
console.log(PI);
console.log(rand);
console.log(dice1);
console.log(dice2);

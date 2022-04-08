//----- ARRAYS ------

let numbers = [2, 3, 4, 5];
let random = ["apple", 6.78, true];
console.log(numbers);
console.log(random[1]);
console.log(random.length)
console.log("\n");

numbers[0] = 89;
let index = random.indexOf(true); // Returns the index of a certain element
let index2 = random.indexOf("banana"); // If given element does not exist within the array, it returns -1
console.log(numbers);
console.log(index);
console.log(index2);
console.log("\n");


numbers.push(56); // Adds an element at the end of the array
numbers.unshift(90); // Adds element to the beginning of the array
console.log(numbers);
console.log("\n");


let lastNumber = numbers.pop(); // Removes the last item of the array and return it
let firstNumber = numbers.shift(); // Removes the first element of the array and returns it
console.log(lastNumber);
console.log(firstNumber);
console.log(numbers);
console.log("\n");


//----- LOOPING THROUGH AN ARRAY -----

let prices = [5, 10, 15, 20];


for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
for (let i = prices.length - 1; i >= 0; i--) {
  console.log(prices[i]);
}
console.log("\n");


for (let price of prices) {
  console.log(price);
}
console.log("\n");


//------ SORTING ARRAY OF STRINGS ------

let sports = ["volley", "soccer", "athletics", "track", "mountain bike"];

sports = sports.sort(); // The sort method also works for other data types
// sports = sports.sort().reverse();

for (let sport of sports) {
  console.log(sport);
}
console.log("\n");

//------ 2D ARRAYS ------

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]);
console.log("\n");


//----- SPREAD OPERATOR -----
// Allows an iterable such as an array or a string to be expanded

let name = "John Doe";
let numbers2 = [9, 10, 11, 12, 13];
let maximum = Math.max(numbers2); // This will return "NaN", the max method only works with separated arguments
let maximum2 = Math.max(...numbers2);
numbers2.push(...name);

console.log(name);
console.log(numbers2);
console.log(...name);
console.log(...numbers2);
console.log(maximum);
console.log(maximum2);

console.log("\n");


//----- REST OPERATOR -----
// Packs arguments into an array

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

function sum(...numbers3) {
  let total = 0;

  for (let i = 0; i < numbers3.length; i++) {
    total = total + numbers3[i];
  }

  return total;
}

console.log(sum(a, b, c));
console.log(sum(a));
console.log(sum(a, b, c, d, e));
console.log("\n");

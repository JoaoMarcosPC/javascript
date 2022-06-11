//----- FOR EACH -----
// executes a provided callback function once for each array element

let numbers_forEach = [2, 45, 7655, 43, 1, 10, 56]

numbers_forEach.forEach(expo2);
numbers_forEach.forEach(printNum);

function expo2(element, index, array) {
  array[index] = element * element
}

function printNum(element) {
  console.log(element);
}
console.log("\n");


//----- MAP -----
// Executes a provided callback function once for each array element AND creates a new array 

let numbers_map = [1, 2, 4, 6, 10];
let squares_map = numbers_map.map(square);
console.log(numbers_map);
console.log(squares_map);

function square(num) {
  return num * num;
}
console.log("\n");


//----- FILTER -----
// Creates a new array with all the elements that pass the test provided by a function

let ages_filter = [19, 18, 16, 21, 25, 17, 90];
let adults_filter = ages_filter.filter(checkAge);
console.log(ages_filter);
console.log(adults_filter);

function checkAge(element) {
  return element >= 18;
}
console.log("\n");


//----- REDUCE -----
// reduces an array to a single value

let prices_reduce = [5.23, 4.64, 10, 9.87, 145.09];
let total_reduce = prices_reduce.reduce(checkOut);

console.log(`The total is ${total_reduce}`);

function checkOut(total, element) {
  return total + element;
}
console.log("\n");


//----- SORT -----

let grades_sort = [100, 56, 78, 34, 98, 3, 41, 1];

grades_sort = grades_sort.sort(descendingOrder);
console.log(grades_sort);

grades_sort = grades_sort.sort(ascendingOrder);
console.log(grades_sort);

function descendingOrder(x, y) {
  return y - x;
}

function ascendingOrder(x, y) {
  return x - y;
}
console.log("\n");

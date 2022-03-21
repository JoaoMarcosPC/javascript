//----- FUNCTIONS -----
// Functions have access to two types of variables: 
// - Global ones: that are declared outside of a function, all the code has access to them
// - Local ones: variables declared inside of a function, those variables have local scope, meaning they will be only be accessible inside of the function in which they were declared

function countTo(number) {
  for (let i = 1; i <= number; i++) {
    console.log(i);
  }
}
countTo(10);


function squareArea(n) {
  return n * n;
}

let square = 9;
console.log("The area of the square ", square, " is -> ", squareArea(square));



//----- CALLBACKS -----
// function passed as argument to another function

sum(2, 3, displayConsole);

function sum(x, y, cb) {
  cb(x, y);
}

function displayConsole(output) {
  console.log(output);
}


//----- FUNCTION EXPRESSION -----
// Function without a name (anonymous function), avoid polluting the global scope with names

const GRETTING = function () {
  console.log("Hello");
}

GRETTING();
console.log("\n");


//----- ARROW FUNCTIONS -----
// compact alternative to a traditional function expression

const HELLO_WORLD = () => {
  console.log("Hello World");
}

const PERCENT = (x, y) => console.log(`${x / y * 100}%`);

HELLO_WORLD();
PERCENT(5.5, 25);
console.log("\n");

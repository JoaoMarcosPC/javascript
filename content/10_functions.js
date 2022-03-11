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

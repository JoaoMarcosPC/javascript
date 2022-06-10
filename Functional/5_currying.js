// Currying is when a function doesn't take all of it's arguments upfront
// Instead, it's next argument is used as argument for a function that is inside itself
// This process can happen multiple times until a final function is called and executed

const bunchOfSums = (num) => {
  return (num2) => {
    return (num3) => {
      return num + num2 + num3;
    };
  };
};

const betterBunchOfSums = (num) => (num2) => (num3) => num + num2 + num3;

console.log(bunchOfSums(1)(2)(3));
console.log(bunchOfSums(5)(2)(3));

//-----Partially applied function
// You also have the option to not pass all the arguments at the same time
const multiply = (x) => (y) => x * y;

const timesFive = multiply(5);
console.log(timesFive(5));

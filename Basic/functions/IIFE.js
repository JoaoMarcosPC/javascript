//----- IIFE -----
// Immediately-Invoked Function Expression



//-----Variations:

//--Anonymous arrow function
(() => {
  // do stuff
})();

//--With the function keyword
(function () {
  // do stuff
})();

//--With a function name(allows for recursion)
(function myIIFE(num = 0) {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log('finished');
})();
console.log('\n');



//------Reasons to use it:

//--Does not pollute the global object namespace:

// These variables are declared globally, meaning that their scope is global
const X = "whatever";
const HELLOWORLD = () => "Hello World";

(() => {
  const X = "whatever iife";
  const HELLOWORLD = () => "Hello iife";

  console.log(X);
  console.log(HELLOWORLD());
})();

console.log(X);
console.log(HELLOWORLD());
console.log('\n');



//--Private variables and methods from Closure:

// The IIFE is invoked, returning the anonymous function
const increment = (() => {
  let counter = 0;
  console.log(counter);
  const credits = (num) => console.log(`I have ${num} credit(s).`);

  return () => {
    counter++;
    credits(counter);
  }
})();

increment();
increment();
// console.log(counter); // ref error
// credits(3); // ref error
console.log('\n');



//--Module Pattern:
const score = (() => {
  let count = 0;

  return {
    current: () => { console.log(count) },
    increment: () => { count++ },
    reset: () => { count = 0 }
  }
})();

score.increment();
score.current();
score.increment();
score.increment();
score.current();
score.reset();
score.current();


//--Revealing Pattern:
const game = (() => {
  let count = 0;
  const current = () => { console.log(`Game score is ${count}.`) }
  const increment = () => { count++ }
  const reset = () => { count = 0 }

  return {
    current: current,
    increment: increment,
    reset: reset
  }
})();

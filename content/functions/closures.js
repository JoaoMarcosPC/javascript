//----- CLOSURES -----
// A closure is created when a child function keep the environment of the parent scope even after the parent function has already executed 
// Closure doesn't remember the value of the variable, it only points to the variable(stores the reference of the variable), meaning the value of the variable
// may not be altered

// In this example the parent function 'foo()' has a child function 'inner()', the variable b is limited to the foo function's scope
function foo() {
  let b = 1;
  function inner() {
    return b;
  }
  return inner;
}

// When the foo function is executed, what is returned is the reference to the inner function, with this reference also comes  with the scope chain of it's parent function foo
// This way, even if the foo function has already been executed, the b variable can still be accessed using the inner function
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());


//--Example 2--
function foo2(outer_arg) {

  function inner2(inner_arg) {
    return outer_arg + inner_arg;
  }
  return inner2;
}
let get_func_inner2 = foo2(5);

console.log(get_func_inner2(4));
console.log(get_func_inner2(3));

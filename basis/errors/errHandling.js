//----- ERROR HANDLING -----

// Error Categories in Javascript:
//  -EvalError: error occurred in the eval function
//  -RangeError: a number out of rnage has occurred
//  -ReferenceError: using a variable that hs not been declared
//  -SyntaxError: when evaluating a code with syntax error
//  -TypeError: if you use a value that is outside the range of expected types
//  -URI (Uniform Resource Identifier) Error: if you use illegal characters in a URI function
//  -Parse-time Errors: occur inside the code, basically becouse the engine does not understand the code

const makeError = () => {
  try {
    // const name = "Dave";
    // name = "Joe";
    throw new customError("This is a custom error");

  } catch (err) {
    // console.log(err);
    // console.error(err);
    // console.warn(err);
    // console.table(err);
    console.log(err.stack);

  } finally {
    console.log('....finally');
  }
}

makeError();

function customError(message) {
  this.message = message;
  this.name = 'CustomError';
  this.stack = `${this.name}: ${this.message}`;
}

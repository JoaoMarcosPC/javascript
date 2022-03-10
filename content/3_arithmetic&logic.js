/*-----ARITHMETIC LOGIC-----

  -> Arithmetic operators: +, -, *, /, %(return the remainder of the division)
  -> Logic operators: 
    - ! (returns the opposite logical value, if true returns false, if false returns true)
    - && (BOTH conditions must be true)
    - || (Either condition can be true)

  -> Operator precedence:
    1. ()
    2. exponents
    3. division & multiplication
    4. addition & subtraction 
*/

const x = 9;
let y = x + 6;
y = y + 1;
y -= 1;
y = (5 - 7) * y;
console.log(y);

let temp = 15;

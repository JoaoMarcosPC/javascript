//----- High Order Functions -----

//-Functions are treated as objects
//-COMPOSITION -> take a function and put it into another function, this inserted function is called CALLBACK
let triple = function(x) {
  return x * 3
}

let num_arr = [1, 2, 3, 4, 5]

let new_num = num_arr.map(triple)
console.log(new_num) 

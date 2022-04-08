//----- CALLBACKS -----

// Basically, what is happening is: A constant is created and an arrow function is stored in it, this function takes as parameter a callback function, inside it when certain
// conditions are met, the function passed as parameter is called
const GETTODOS = (cb) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const DATA = JSON.parse(request.responseText); // converting JSON string that the server returned into an array of JS objects
      cb(undefined, DATA);
    } else if (request.readyState === 4) {
      cb('could not fetch data', undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
}

// In this case what will be observed is that the callback function won't block the execution, when the requested data arrives it'll be executed, but until there the code runs
// normally
console.log(1);
console.log(2);

GETTODOS((err, data) => {
  console.log('callback fired');

  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
console.log('\n');

//----- CALLBACK HELL -----
// When you require to call multiple callbacks and you start to nest them, it becomes a mess -> hard to maintain and read

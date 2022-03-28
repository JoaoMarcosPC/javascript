//----- CALLBACKS -----

// Basically, what is happening is: A constant is created and an arrow function is stored in it, this function takes as parameter a callback function, inside it when certain
// conditions are met, the function passed as parameter is called
const GETTODOS = (cb) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      cb();
    } else {
      cb();
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
}

GETTODOS(() => {
  console.log('cb fired')
});
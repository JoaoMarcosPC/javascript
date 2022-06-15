//----- FETCH API -----
// It is an build-in interface that allows you to make requests to servers
// Instead of callback, the fetch method works with promises

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('resolved', response);
    return response.json(); // json() method returns a promise
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('rejected', err);
  });

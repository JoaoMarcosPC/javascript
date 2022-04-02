//----- PROMISES -----
// A promise is basically something that will take some time to do
// A promise has two outcomes: Either it gets Resolved or it gets Rejected 

const GETSOMETHING = () => {

  return new Promise((resolve, reject) => {
    // fetch something

    // if the request is successful we call the resolve function
    // resolve('some data');

    // if some went wrong at some part of the request we call the reject function
    reject('error');
  });

}

// GETSOMETHING().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err)
// });


// GETSOMETHING().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

//--------------------------------------------

const GETTODOS = resource => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const DATA = JSON.parse(request.responseText);
        resolve(DATA);
      } else if (request.readyState === 4) {
        reject('data could not be fetched');
      }
    });

    request.open("GET", resource);
    request.send();
  });
}

GETTODOS('https://jsonplaceholder.typicode.com/todos/1').then(data => {
  console.log('promise 1 resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});


//----- CHAINING PROMISES -----

GETTODOS('https://jsonplaceholder.typicode.com/todos/2').then(data => {
  console.log('promise 2 resolved:', data);

  return GETTODOS('https://jsonplaceholder.typicode.com/todos/3');
}).then(data => {
  console.log('promise 3 resolved:', data);

  return GETTODOS('https://jsonplaceholder.typicode.com/todos/4');
}).then(data => {
  console.log('promise 4 resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});

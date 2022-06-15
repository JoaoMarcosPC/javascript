//----- FETCH -----
// It is an build-in interface that allows you to make requests to servers
// Instead of callback, the fetch method works with promises
// FOR NOW IT ONLY WORKS ON BROWSERS, IT WILL SOON ALSO WORK ON NODE

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((response) => {
// console.log("resolved", response);
// return response.json(); // json() method returns a promise
// })
// .then((data) => {
// console.log(data);
// })
// .catch((err) => {
// console.log("rejected", err);
// });

const getPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const data = await response.json();
  console.log(data);
};

getPokemon();

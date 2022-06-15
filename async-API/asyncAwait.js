//----- ASYNC AWAIT -----
// An asynchronous function always returns a promise
// It provides a way to chain promises together in a cleaner way

const GETTODOS = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (response.status !== 200) {
    throw new Error("cannot fetch data!");
  }

  const data = await response.json();

  return data;
};

GETTODOS()
  .then((data) => console.log("Resolved: ", data))
  .catch((err) => console.log("Rejected: ", err.message));

let me = "John Doe";

// functions in javascript can have access to it's outer scope
function greet() {
  console.log("hello, " + me + "!");
}

// That doesn't mean that the functions stores the variable value
// What stores is the reference to that variable, the path per say
// Meaning that it will use whatever is stored at the time on the variable
me = "batman";

greet();

//-----

// This function sends a request and inside it a variable is declared
// If the request is successful then the arrown function that takes the response as argument will be executed
// Note that the 'requestID' variable is declared outside of it's scope, however it's still accessible by it
// Remembering that what is stored is the path to that variable, not it's value
function sendRequest() {
  let requestID = "123";
  $.ajax({
    url: "/myUrl",
    successs: (response) => {
      alert("Request " + requestID + " returned");
    },
  });
}

//----- HTTP REQUESTS -----
//- HTTP requests are made to API endpoints
//- Make HTTP requests to get data from another server
// THIS METHOD ONLY WORKS ON BROWSERS

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  }
});
//- XML ready states:
//  - 1, opened
//  - 2, sent
//  - 3, downloading
//  - 4, done

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();

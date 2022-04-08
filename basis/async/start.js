//----- What's Asynchronous Javascript ? -----
//- Javascript can run ONE statement at a time(Single thread language)(A thread could be understood as sequence of instructions)
//- That means that if a instruction requires data from a database, for example, depending on the connection, that could take a lot of time(seconds),
// meaning that the instructions next to this one would not be executed even if they didn't depend on it, the thread has been stalled
//- In a synchronous system, one task must be finished before another one starts
//- Taking an asynchronous approach: Using the same example of fetching data from a DB, with an asynchronous code, that function would be "moved" outside of the execution thread
// ,that way, the other instructions would continue to be executed without interruption, once the data that the isolated function has been waiting arrives, the function is moved
// back to the thread, being finally executed


// Synchronous code
console.log(1);
console.log(2);
console.log(3);
console.log("\n");


// Asynchronous code
// Instead of waiting to print 2, it executes all functions that can be executed now, and then, when "ready" the function that takes time is executed
console.log(1);

setTimeout(() => {
  console.log(2);
}, 2000); // 2s

console.log(3);
console.log("\n");

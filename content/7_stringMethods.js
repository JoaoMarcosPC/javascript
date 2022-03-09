// String properties and methods

let username = "  John Code";
let phoneNumber = "123-456-7890";

let usernameLength = username.length; // returns the string's length
let aCharacter = username.charAt(2); // returns the third character in the string


let firstOccurrence = username.indexOf("C");
// returns the index of the first occurrence of certain character in the given string
// Uppercase and lowercase are differentiated
// If character is not found it returns -1


console.log(username.lastIndexOf("o")); // Returns the index of the las occurrence


console.log(username);
username = username.trim(); // gets rid of empty spaces before and after any other characters
console.log(username);


console.log(username.toLowerCase());
console.log(username.toUpperCase());


phoneNumber = phoneNumber.replaceAll("-", "/"); // Replaces all occurrences of a certain character by the second character specified
console.log(phoneNumber);


console.log(usernameLength);
console.log("The character at index 2 is", aCharacter);
console.log(firstOccurrence);



// ----- STRING SLICING -----
// slice() extracts a session of a string
// and returns it as a new string
// without modifying the original string

let fullName = "Bro Code";
let firstName;
let lastName;

// lastName = fullName.slice(4); // Returns everything form index 4 to the end of the string
// firstName = fullName.slice(0, 3); // Returns index 0 to 2, not including 3

// OR

lastName = fullName.slice(fullName.indexOf(" ") + 1); // Returns everything after the first space
firstName = fullName.slice(0, fullName.indexOf(" "));

console.log(firstName);
console.log(lastName);

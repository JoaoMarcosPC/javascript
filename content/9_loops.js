//----- WHILE LOOP -----
// repeat a section of code while a condition is true

let username1 = "";

while (username1 == "" || username1 == null) {
  username1 = window.prompt("Enter your username");
}

console.log(username1);


//----- DO WHILE LOOP -----
// The difference is that you execute the code before checking the condition

let username;

do {
  username = window.prompt("Enter your username");
} while (username == "")

console.log(username);


//----- FOR LOOPS -----
// repeat section of code a certain amount of times

let num = 5;

for (let i = num - 1; i > 0; i -= 1) {
  num = num * i;
}

console.log(num);


//----- BREAK | CONTINUE -----
// break = breaks out of the loop entirely
// continue = skip an iteration of a loop

for (let j = 1; j <= 20; j += 1) {
  if (j == 13) {
    continue;
  }

  console.log(j);
}

for (let j = 1; j <= 20; j += 1) {
  if (j == 5) {
    break;
  }

  console.log(j);
}


//----- NESTED LOOPS -----

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}

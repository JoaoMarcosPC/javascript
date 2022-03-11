//----- IF STATEMENT -----

let age = 22;

if (age < 18) {
  console.log("You can't drive");
} else if (age == 21) {
  console.log("You can drive, and you're 21 years old");
} else {
  console.log("You can drive");
}


//----- SWITCH STATEMENTS -----
// More efficient than many "else if" statements

let grade = "F";

switch (grade) {
  case "A":
    console.log("You did great");
    break;
  case "B":
    console.log("You did good");
    break;
  case "C":
    console.log("You did ok");
    break;
  case "D":
    console.log("You passed");
  case "F":
    console.log("You failed");
    break;
  default: // This gets executed if none of the cases are fulfilled
    console.log(grade, "is not a letter grade!");
}


//----- TERNARY OPERATOR -----
// shortcut for an if else statement
// condition ? "If true do this" : "If false do this"

let condition = true;
condition ? console.log("True") : console.log("False");
condition = false;
condition ? console.log("True") : console.log("False");

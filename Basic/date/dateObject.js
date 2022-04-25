//----- DATE OBJECT -----
// Represents a moment in time since epoch (reference point)

{
  // Returns epoch
  let date = new Date(0);
  console.log(date);
  console.log('\n');



  // Returns epoch + time defined in miliseconds
  // epoch + one thousand miliseconds
  let datePlus = new Date(1000);
  console.log(datePlus);
  console.log('\n');



  // Current date and time
  let currDate = new Date();
  console.log(currDate);
  console.log('\n');



  // Date(year, month(january = 0), day, hour, min, seconds, miliseconds)
  let customDate = new Date(2045, 3, 4, 18, 1, 2, 3);
  console.log(customDate);
  console.log('\n');



  // Date(string)
  let customStringDate = new Date('February 28, 2090, 12:30:45:01');
  console.log(customStringDate);
  console.log('\n');



  // Date Object Inbuilt Methods
  let dateInMili = Date.parse(currDate); // Parse given date to it's miliseconds value
  console.log(dateInMili);
  console.log('\n');

  // For each of the get methods there is also a set method
  let year = currDate.getFullYear();
  console.log(year);
  console.log('\n');

  let month = currDate.getMonth();
  console.log(month);
  console.log('\n');

  let day = currDate.getDay(); // Day of the week
  console.log(day);
  console.log('\n');

  let dayMonth = currDate.getDate(); // Day of the month
  console.log(dayMonth);
  console.log('\n');

  let hour = currDate.getHours();
  console.log(hour);
  console.log('\n');

  let min = currDate.getMinutes();
  console.log(min);
  console.log('\n');

  let seconds = currDate.getSeconds();
  console.log(seconds);
  console.log('\n');

  let milSec = currDate.getMilliseconds();
  console.log(milSec);
  console.log('\n');
}

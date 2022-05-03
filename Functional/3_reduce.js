//----- Reduce -----
// Can be used to express any type of vector transformation operation (it can do the same as map, filter, find and reject)
const fs = require('fs')

let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

let total = orders.reduce((sum, order) => { return sum + order.amount }, 0)
console.log(total)
console.log('\r')

// let output = fs.readFileSync('Functional/misc/data.txt')
let output = fs.readFileSync('Functional/misc/data.txt', 'utf8')
  .trim() // Removes any line breaks or spaces at the end and at the start of the string
  .split('\r\n') // split where there are line breaks
  .map((line) => line.split(',')) // For each line it splits where there are ','
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || [] // Creates an array with the customer's name or it reutilizes if it already exists
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log(output)
console.log(JSON.stringify(output, null, 2))

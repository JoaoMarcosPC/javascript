//----- Map -----
//-A High-order function, it iterates through an array transforming it's values

let animals = [
  {name: 'Dog1', species: 'dog'},
  {name: 'Bunny', species: 'rabbit'},
  {name: 'Dog2', species: 'dog'},
  {name: 'Cat1', species: 'cat'},
]

// function getName(animal) {
//   return `The name of the animal is ${animal.name}`
// }
// let names = animals.map(getName)

let names = animals.map((animal) => `The name of the animal is ${animal.name}` )

console.log(names)

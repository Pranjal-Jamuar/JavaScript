//** Advanced Variables

//* const
const a = 2 //? Value fixed to 2
console.log(a)

a = 3 //? throws error "Assignment to constant variable" i.e. can't change the value.

//* var
//! Almost certainly never use var to create variables.
//? It was the first way defined to create variables when JS was created but it behaves strangely so conts and let were next defined variable creation.

//!! var is accessible outside the scope as well.

//! Example
{
  let a = 1 //? this gives an error coz "a" is not accessible from outside of the scope
}
console.log(a)

//! Whereas

{
  var a = 1 //? 1 is printed to the console coz var doesn't care about scopes, once a variable is created with var as a keyword, it is accesible throughout
}
console.log(a)

//! var is hoisted

console.log(a)

let a = 1 //? it throws an error coz let and const are not hoisted.
var a = 1 //? 1 is printed here.

console.log(a)

//* Type Coercion
let a = "1" // String

console.log(typeof parseInt(a)) //? Explicit Type Coercion to integer.

console.log(a)
console.log(typeof a)

//! Functions used for explicit type coercion usually

/*
   1. parseint() => to convert a string to a number
   2. parseFloat() => to convert to a floating point number
   3. .toString() => to convert to string
 */

//! Implicit Type Coercion

let a = 1 //number
const b = "Hello" //string

console.log(a + b) //string

//* == vs ===

const a = 1
const b = "1"

console.log(a == b) //Gives true but a is number and b is string

//! So,

console.log(a === b) //Gives false which is the correct output

//* NaN => Not a Number

const a = parseInt("asdfasdf")
console.log(a) //?NaN
console.log(isNaN(a))

//** Arrays
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a.push(11)
a.push(["h1", "bye"])
console.log(a)

//! Exercise

const letters = ["a", "b", "c", "d", "e"]
console.log(letters[2])

const a = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
]

console.log(a[0][3])
console.log(a[1][2])
console.log(a[2][0])

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(a.length)

//** Objects

const person = {
  name: "Pranjal",
  age: 24,
  favoriteNumber: 11,
  sayHi: function () {
    console.log("Hi")
  },
  sayHi2() {
    console.log("Hi")
  },
}

person.sayHi2()

//! Exercise

const car = {
  make: "Ford",
  model: "Mustang",
  isUsed: true,
  makeNoise() {
    console.log("vroom...")
  },
}

car.makeNoise()
console.log(car)

let person = {
  name: "Pranjal",
  address: {
    street: "12345 Main St",
    city: "Somewhere",
  },
}
console.log(person.address.city)

//! Exercise

let book = {
  title: "Percy Jackson and the Olympians",
  author: {
    name: "Rick Riordan",
    age: 56,
  },
}

console.log(book.author.name)

//** Array Methods

const a = [1, 2, 3, 4, 5]

a.forEach((number, index) => {
  console.log(number + " " + index)
})

const newA = a.map(number => {
  return number * 2
})

console.log(newA)

const newA = a.filter(number => {
  return number <= 2
})

console.log(newA)

const n = a.find(number => {
  return number > 2
})

console.log(n)

const isTrue = a.some(number => {
  return number > 2
})

console.log(isTrue)

const isTrue = a.every(number => {
  return number > 0
})

console.log(isTrue)

const total = a.reduce((sum, number) => {
  return sum + number
}, 0)

console.log(total)

//! Exercise

const items = [
  { price: 10 },
  { price: 20 },
  { price: 14 },
  { price: 6 },
  { price: 1 },
]

const total = items.reduce((sum, item) => {
  return sum + item.price
}, 0)

console.log(total)

const isTrue = a.includes(2)
console.log(isTrue)

//* String Template Literals

let a = "Hello"
let b = "World"

console.log(a + " " + b)
console.log(`${a} ${b}`)

//! Exercise

let firstName = "Pranjal"
let lastName = "Jamuar"

console.log(`${firstName} ${lastName}`)

//** Normal functions
function sayHi() {
  console.log("Hi")
  console.log("bye")
}

sayHi()

//! Exercise

function sayName() {
  console.log("Pranjal Jamuar")
}

sayName()

function sum(a, b) {
  //?Passing Variables
  console.log(a + b)
}

sum(1, 3) //?Passing values to the variables: a = 1, b = 3

//! Exercise
function printName(name) {
  console.log(name)
}

printName("Lilly Puppala") //? If you don't pass any value, JS doesn't give errors whereas show output as undefined

//* Returning value from the function

function sum(a, b) {
  return a + b
}

let s = sum(2, 2)
let sum2 = sum(2, s)
console.log(s, sum2)

//! Exercise

function concatName(name) {
  return "Hello " + name
}

let output = concatName("Pranjal")
console.log(output)

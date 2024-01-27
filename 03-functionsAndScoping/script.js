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

//** Passing functions to another functions

function printVariable(variable) {
  console.log(variable)
}

function func(x) {
  x("Hello World")
}

func(printVariable)

console.log(printVariable) //? Output of this line is the following description. It basically behaves as a variable but gives the definition of the function.

/*
  ƒ printVariable(variable) {
      console.log(variable)
}
*/

function sumCallback(a, b, callback) {
  callback(a + b)
}

function handleSum(sum) {
  console.log(sum)
}

sumCallback(1, 2, handleSum)

//!Exercise

function printName(name, callback) {
  callback("Hello " + name)
}

function firstName(myName) {
  console.log(myName)
}

printName("Pranjal", firstName)

//* Anonymous Function

function printName(name, callback) {
  callback("Hello " + name)
}

printName("Pranjal", function (variable) {
  console.log(variable)
})

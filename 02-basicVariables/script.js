//**  First Variable
let favoriteNumber = 05

console.log(favoriteNumber)

favoriteNumber = 11

console.log(favoriteNumber) //? The code is run in top-down approach.

//! Exercise
let a = 5
let b = 2
let c = 3

a = 3

let d = a

console.log(d, a)

//** Number Type
let int = 2
let float = 2.3

console.log(int * float)

console.log(1 + 2 * 3)

//! Exercise

let a = 5
let b = 2
let c = 3

console.log((a + b) / c)

//** String Type

let a = "hello"
let b = "world"
console.log(a + " " + b)

//! Exercise

let name = "Pranjal"
console.log("My name is " + name)

//** Boolean Type

let a = true
console.log(typeof a)

console.log(true || false) //? OR operation => If even one true, output is true
console.log(true && false) //? AND operation => All need to be true for the output to be true

//! Exercise

let happy = true
let fun = true
console.log(happy && fun)
console.log(!happy)

//** Undefined and Null Type

let a = undefined
console.log(typeof a) //? undefined

let b = null
console.log(typeof b) //? Object

//* Variable Comparison

let a = 1
let b = 2

console.log(a == b) //?false
console.log(a != b) //?true
console.log(a > b) //?false
console.log(a < b) //?true
console.log(a >= b) //?false
console.log(a <= b) //?true

let a = "a"
let b = "b"

console.log(a == b) //?false
console.log(a != b) //?true
console.log(a > b) //?false
console.log(a < b) //?true
console.log(a >= b) //?false
console.log(a <= b) //?true

let a = true
let b = false

console.log(a == b) //?false
console.log(a != b) //?true
console.log(a > b) //?true
console.log(a < b) //?false
console.log(a >= b) //?true
console.log(a <= b) //?false

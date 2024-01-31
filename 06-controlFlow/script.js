//** if statement

const userIsLoggedIn = false

if (userIsLoggedIn) {
  console.log("User logged in")
} else {
  console.log("Please Login")
}

const totalPrice = 100

if (totalPrice == null) {
  console.log("There is no total price")
} else if (totalPrice < 50) {
  console.log("Price less than 50")
} else {
  console.log("Price greater than 50")
}

//! Exercise

const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

if (arrayList.length === 0) {
  console.log("empty")
} else if (arrayList.length < 5) {
  console.log("small")
} else if (arrayList.length < 10) {
  console.log("medium")
} else {
  console.log("large")
}

//** Ternary Operator
const isUserLoggedIn = false
let welcomeMessage = ""

if (isUserLoggedIn) {
  welcomeMessage = "Hello"
} else {
  welcomeMessage = "Please log in"
}

console.log(welcomeMessage)

if (isUserLoggedIn) {
  console.log("logged in")
} else {
  console.log("not logged in")
}

isUserLoggedIn ? console.log("logged in") : console.log("not logged in")

const welcomeMessage = isUserLoggedIn ? "Welcome" : "Please Log in"

console.log(welcomeMessage)

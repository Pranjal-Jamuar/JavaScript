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

//** switch statement

const favoriteAnimal = "dog"

switch (favoriteAnimal) {
  case "dog":
    console.log("They are pretty cool")
    break
  case "cat":
    console.log("They are kinda lazy")
    break
  case "shark":
    console.log("That's an interesting choice")
    break
  default:
    console.log("I am unfamiliar with that animal")
    break
}

//! Exercise

const number = 3

switch (number) {
  case 0:
    console.log("It is zero")
    break
  case 1:
  case 2:
    console.log("It is small")
    break
  case 3:
  case 4:
    console.log("It is medium")
    break
  case 5:
    console.log("It is large")
    break
  default:
    console.log("try again")
    break
}

//** For loop

for (let i = 0; i < 5; i++) {
  console.log("hi")
}

//! Exercise
for (let i = 0; i <= 10; i++) {
  if (i === 5) break
  console.log(i)
}

//** while loop
let i = 0
while (i < 5) {
  console.log("hi")
  i++
}

const person = {
  name: "Pranjal",
  friend: {
    name: "Lilly",
    friend: {
      name: "Gujju",
    },
  },
}

let currentPerson = person
while (currentPerson.friend != null) {
  console.log(currentPerson.name)
  currentPerson = currentPerson.friend
}

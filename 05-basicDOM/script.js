//* window object
console.log(window)

window.console.log("hi")

//* document object
console.log(document)

const element = document.createElement("span")
element.innerText = "Hello World"
document.body.appendChild(element)

//** id and class selectors

const divWithId = document.getElementById("div-id")
divWithId.style.color = "red"

const divsWithClass = document.getElementsByClassName("div-class")

const divsWithClassArray = Array.from(divsWithClass)

divsWithClassArray.forEach(div => (div.style.color = "green"))

//** Query Selectors

const dataAttributeElement = document.querySelector("[data-test]")
const divsWithClass = document.querySelectorAll(".div-class")
const input = document.querySelector("input[type='text']")

dataAttributeElement.style.color = "green"
divsWithClass.forEach(div => (div.style.color = "red"))

console.log(input)

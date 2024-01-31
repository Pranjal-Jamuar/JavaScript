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

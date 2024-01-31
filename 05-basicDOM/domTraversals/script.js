// const grandParent = document.querySelector("#grand-parent")
// const parentOne = grandParent.children[0]
// const parentTwo = parentOne.nextElementSibling
// const childOne = parentOne.children[0]
// const childTwo = parentOne.children[1]

// // grandParent.style.color = "red"

// parentOne.style.color = "red"
// parentTwo.style.color = "green"
// childOne.style.color = "blue"
// childTwo.style.color = "brown"

// const childOne = document.querySelector("#child-one")
// const grandParent = childOne.closest(".grand-parent")

// const parentOne = childOne.parentElement
// const grandParent = parentOne.parentElement

// childOne.style.color = "red"
// parentOne.style.color = "blue"
// grandParent.style.color = "brown"

const grandParent = document.querySelector("#grand-parent")

const children = grandParent.querySelectorAll(".child")

children.forEach(child => (child.style.color = "red"))

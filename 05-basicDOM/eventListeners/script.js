const btn = document.querySelector("[data-btn]")
const input = document.querySelector("[data-input-text]")
const form = document.querySelector("[data-form]")
const anchor = document.querySelector("a")

form.addEventListener("submit", e => {
  e.preventDefault()
  console.log("submitted form")
})

btn.addEventListener("click", e => {
  console.log(e)
})

anchor.addEventListener("click", e => {
  e.preventDefault()
  console.log("Link clicked")
})

import cart from "./cart.js";

const createIncDecButtons = () => {
  const fragment = document.createDocumentFragment()
  const incButton = document.createElement("button")
  incButton.textContent = '+'
  const quantity = document.createElement("p")
  quantity.textContent = cart.HOW TO FIND THE CORRECT VALUE?
  const decButton = document.createElement("button")
  decButton.textContent = '-'
}
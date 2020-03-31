import {cart, updateCart} from "./cart.js"
import showCart from "./showCart.js";
import showCheckout from "./showCheckout.js"

const showStrength = () => {
  const strengthSelect = document.createElement("div")
  strengthSelect.setAttribute('strength-select', '')
  const strengthSelectInner = `
    <h1>Choose your box strength</h1>
    <form>
      <input type="radio" id="standard" name="strength" value="1" checked>
      <label for="male">Standard</label><br>
      <input type="radio" id="strong" name="strength" value="1.1">
      <label for="female">Strong +10%</label><br>
      <input type="radio" id="xxxstrong" name="strength" value="1.25">
      <label for="other">Extra Strong +25%</label>
      <button type="submit" name data-continue="strength">Continue</button>
    </form>  
    `

  strengthSelect.innerHTML = strengthSelectInner
  document.querySelector('[main-container]').appendChild(strengthSelect)
  document.querySelector('[data-continue="strength"').addEventListener('click', (e) => {
    e.preventDefault()
    const strength = document.querySelector('input[name="strength"]:checked').value
    cart.strength = strength
    const newCart = Object.assign({}, cart, {strength: strength})
    updateCart(newCart)
    showCart()
    console.log(cart)

    document.querySelector('[main-container]').replaceChild(
      showCheckout(),
      document.querySelector('[strength-select]')
    )
  })
  
  return strengthSelect
}

export default showStrength
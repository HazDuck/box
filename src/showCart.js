import { cart, updateCart } from "./cart.js";
import products from "./products.js"

const showCart = () => {
  const populateCart = () => products.map(product => `<tr data-product=${product.id}><td>${product.name}</td><td>cat</td><td>dog</td></tr>`)
  
  const cartContainer = document.querySelector("[data-cart-container]")
  cartContainer.innerHTML = populateCart()
}



export default showCart


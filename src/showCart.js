import { cart } from "./cart.js";
import {products} from "./products.js";

const showCart = () => {

  if (!products) {
    console.log("aye there be no products!")
    return
  }

  const calculatePrice = product => product.quantity*product.price

  const populateCart = () =>`<tr><th>Size</th><th>Qty</th><th>Price</th></tr>` + products.map(product => `
  <tr data-product=${product.id}>
    <td>${product.name}</td>
    <td>${cart.products.length > 0 ? 
      cart.products.filter(item => product.id == item.productId).length > 0 ? 
        cart.products.filter(item => product.id == item.productId)[0].quantity : 0 
      : 0}</td>
    <td>${cart.products.length > 0 ? 
      cart.products.filter(item => product.id == item.productId).length > 0 ? 
        '$' + calculatePrice(cart.products.filter(item => product.id == item.productId)[0]).toFixed(2) : 0 
      : 0}</td>
    </tr>`) +
    `<tr>
      <td>Total price</td>
      <td>$${cart.totalPrice.toFixed(2)}<td>
    `
    const cartContainer = document.querySelector("[data-cart-container]")
    cartContainer.innerHTML = populateCart()
  }
  
  export default showCart
  
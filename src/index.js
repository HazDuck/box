import populateProducts from "./populateProducts.js";
import showCart from "./showCart.js";
import addButtonEventListener from "./addButtonEventListener.js";


document.addEventListener('DOMContentLoaded', () => {
  populateProducts()
  showCart()
  addButtonEventListener()
})
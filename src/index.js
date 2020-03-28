import populateProducts from "./populateProducts.js";
import showCart from "./showCart.js";
import replaceContent from "./replaceContent.js";

document.addEventListener('DOMContentLoaded', () => {
  populateProducts()
  showCart()
  replaceContent()
})
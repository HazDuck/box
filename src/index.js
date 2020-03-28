import populateProducts from "./populateProducts.js";
import showCart from "./showCart.js";
import replaceContent from "./replaceContent.js";
import showStrength from "./showStrength.js";

document.addEventListener('DOMContentLoaded', () => {
  populateProducts()
  showCart()
  replaceContent()
  // showStrength()
})
import populateProducts from "./populateProducts.js";
import showCart from "./showCart.js";
import addButtonEventListener from "./addButtonEventListener.js";
import {productsFetch} from "./products.js";

document.addEventListener('DOMContentLoaded', async () => {
  await productsFetch()
  populateProducts()
  showCart()
  addButtonEventListener()
})
import updateTextContent from "./updateTextContent.js";
import {cart, updateCart} from "./cart.js"

const addToCart = (productId) => {
  
  //is the product already in the cart?
  if (cart.products.findIndex(product => productId == product.productId) >= 0) {
    //if yes increase the quantity by 1
    const productToInc = cart.products.filter(product => product.productId == productId)[0]
    const cleanCart = Object.assign({}, cart, {products: [...cart.products.filter(product => product.productId != productId)]})
    const incrementedProduct = Object.assign({}, productToInc, {quantity: productToInc.quantity+=1})
    const newCart = Object.assign({}, cleanCart, {products: [...cleanCart.products, incrementedProduct ]})
    updateCart(newCart)
    cart.products.forEach(product => {
      if (product.productId == productId) {
        updateTextContent(document.querySelector(`[data-total="${productId}"`), product.quantity, 77 )
      }
    })
    //else add a new product to the cart
    } else {
    const newCart = Object.assign({}, cart, {products: [...cart.products, {productId: parseInt(productId), quantity: 1}]})
    updateCart(newCart)
    updateTextContent(document.querySelector(`[data-total="${productId}"`), 1, 77 )
  }
}

export default addToCart

import updateTextContent from "./updateTextContent.js";

const addToCart = (cart, productId) => {
  //is the product already in the cart
  if (cart.products.findIndex(product => productId == product.productId) >= 0) {
    //if yes increase the quantity by 1
    const productToInc = cart.products.map(product => {
      console.log(product.productId, productId)
      if (product.productId == productId) {
        return product 
      }
    })
    console.log(productToInc, 'productToInc')
    const cleanCart = cart.products.filter(product => product.productId != productId)
    // const incrementedProduct = Object.assign({}, productToInc, {quantity: productToInc.quantity++})
    // const newCart = Object.assign({}, cleanCart, [...cleanCart.products, incrementedProduct ])
    // console.log(newCart)
    // cart = newCart
        // const prodcutInc = Object.assign({}, product, {quantity: product.quantity++})
        // cart = Object.assign({}, cart, {products: } )
        // product.quantity++
        // updateTextContent(document.querySelector(`[data-total="${productId}"`), product.quantity, 0 )
        // console.log(cart)

    } else {
    cart = Object.assign({}, cart, {products: [...cart.products, {productId: parseInt(productId), quantity: 1}]})
    updateTextContent(document.querySelector(`[data-total="${productId}"`), 1, 0 )
    console.log(cart)
  }
}

export default addToCart

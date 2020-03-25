const addToCart = (cart, productId) => {
  if (cart.products.findIndex(product => productId === product.productId)) {
    console.log(cart)

    //if yes increase the quantity by 1
    cart.products.forEach(product => {
      // console.log(productId, product.productId)
      if (productId == product.productId) {
        console.log('here')
        product.quantity++ 

        const total = document.querySelector(`[data-total="${productId}"`)
        total.textContent = product.quantity ? product.quantity : 0
        console.log(cart)
      }
    })
  }
  
  else {

  }
  
}

export default addToCart

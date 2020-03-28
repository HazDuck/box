let cart = {
  products:[],
  totalPrice: 0
}

const calculateTotalPrice = cart => {
  const totalPrice = cart.products.map(product => product.price * product.quantity).reduce((total, num) => total + num)
  cart.strength ? cart.totalPrice = totalPrice * cart.strength : cart.totalPrice = totalPrice
  return cart
}

const updateCart = newCart => {
  const newCartWithTotalPrice = calculateTotalPrice(newCart)
  cart = newCartWithTotalPrice
  return cart
}

export {cart, updateCart}
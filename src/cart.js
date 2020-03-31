let cart = {
  products:[],
  totalPrice: 0
}

const calculateTotalPrice = (cart, discount) => {
  const totalPrice = cart.products.map(product => product.price * product.quantity).reduce((total, num) => total + num)
  const discountValue = discount ? 0.85 : 1
  cart.discount = discountValue
  cart.totalPrice = cart.strength ? (totalPrice * cart.strength)*discountValue : totalPrice*discountValue
  return cart
}

const isDiscountRequired = cart => cart.products.map(product => product.quantity)
.reduce((total, num) => total + num) >= 50 ? true : false

const updateCart = newCart => {
  const discount = isDiscountRequired(newCart)
  const newCartWithTotalPrice = calculateTotalPrice(newCart, discount)
  cart = newCartWithTotalPrice
  return cart
}

export {cart, updateCart}
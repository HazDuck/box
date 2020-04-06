import { cart } from "./cart.js"

const showCheckout = () => {
  const checkout = document.createElement("div")
  checkout.setAttribute('checkout-select', '')
  const checkoutForm = `
    <form>
      <div class="options">
        <label for="delivery">Delivery Note:</label>
        <input type="text" id="delivery" name="delivery">
        <div>
          <input type="checkbox" id="shipping" name="shipping" value="true">
          <label for="shipping">Next day delivery required</label>
        </div>
      </div>
      <input class="btn-primary" type="submit" data-submit-checkout value="Submit">
    </form>  
    `
  checkout.innerHTML = checkoutForm
  document.querySelector('[main-container]').appendChild(checkout)
  document.querySelector('[data-submit-checkout]').addEventListener('click', (e) => {
    e.preventDefault()
    let data = {
      delivery: document.querySelector('input[name="delivery"]').value,
      shipping: document.querySelector('input[name="shipping"]').value,
      orders: cart.products,
      strength: cart.strength
    }
    
    const postData = async () => {
      try {
        const post = await fetch('http://localhost:3000/users/addorder', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
        return await post.json()
      }
      catch(error) {
        console.warn(error, 'Could not find a post- a thousand apologies...')
        checkout.innerHTML = "Something went wrong :("
      }                             
    }
    postData().then(data => {
      console.log(data)
      if (data.status === 200) {
        checkout.innerHTML = "Success!"
      } else {
        checkout.innerHTML = "Something went wrong :("
      } 
    }
    )
  })
  return checkout
}

export default showCheckout
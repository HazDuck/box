const showCheckout = () => {
  const checkout = document.createElement("div")
  checkout.setAttribute('checkout-select', '')
  const checkoutForm = `
    <h1>Checkout</h1>
    <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname">
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname">
      <label for="address">Address:</label>
      <input type="text" id="address" name="address">
      <input type="checkbox" id="consent" name="consent" value="true">
      <label for="consent">i agree to all them dutty things</label>
      <input type="submit" data-submit-checkout value="Submit">
    </form>  
    `
  checkout.innerHTML = checkoutForm
  document.querySelector('[main-container]').appendChild(checkout)
  document.querySelector('[data-submit-checkout]').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('consent', document.querySelector('input[name="consent"]:checked') ? document.querySelector('input[name="consent"]:checked').value : 'nuff guv')
    const data = {
      "id" : 44,
      "name" : "a dragony",
      "price" : 13
    }
    
    const postData = async () => {
      const response = await fetch('http://localhost:3000/users/addorder', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(repsonse => response.json())
      .catch(error => {
        console.warn('not able to post')
      })
      console.log(response)                              
    }
    postData()
  })
  
  return checkout
}

export default showCheckout
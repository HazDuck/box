const productsFetch = async () => {
  const response = await fetch('http://localhost:3000/users/products')
  .then(response => {
    return response.json()
  }).catch(error => {
    console.warn('could not find prodcut data- run for the hills!')
  })
  products = response
}

let products 

export {products, productsFetch}


const productsFetch = async () => {
  const response = await fetch('http://localhost:3000/users/products')
  let data = await response.json()
  return products = data
}

let products 

export {products, productsFetch}


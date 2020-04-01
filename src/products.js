const productsFetch = async () => {
  try {
    const response = await fetch('http://localhost:3000/users/products')
    .then(response => response.json())
    products = response
  }
  catch(error) {
    console.warn('could not find prodcut data- run for the hills!')
  } 
}

let products 

export {products, productsFetch}


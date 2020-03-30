// const products = [
//   {
//   "id": 1,
//   "name": "Small boxyyyy",
//   "price": 3
//   },
//   {
//     "id": 2,
//     "name": "Medium boxyyyy",
//     "price": 5
//   },
//   {
//     "id": 3,
//     "name": "Large boxyyy",
//     "price": 8
//   }
// ]

const productsFetch = async () => {
  const response = await fetch('http://localhost:3000/users/products')
  let data = await response.json()
  console.log(data)
  return data 
}

const products = productsFetch()



export {products, productsFetch}


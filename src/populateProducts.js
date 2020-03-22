import products from "./products.js";

const populateProducts = () => {
  const productsContainer = document.querySelector("[data-products-container")
  const fragment = document.createDocumentFragment()
  
  //filter product data by required keys to be displayed
  const infoToShow = ["name", "price"]
  const filteredProductData = []
  products.map(product => {
    const filtered = Object.keys(product)
    .filter(key => infoToShow.includes(key))
    //double check what this reduce is doing
    .reduce((obj, key) => {
      obj[key] = product[key]
      return obj
    }, {})
    filteredProductData.push(filtered)
    }
  )

  //show data
  filteredProductData.map(productData => {
    const productInfo = Object.values(productData)
    const productDataContainer = document.createElement("ul")
    fragment.appendChild(productDataContainer)
    productInfo.map(data => {
      const info = document.createElement("li")
      info.textContent = data
      productDataContainer.appendChild(info)
    })
    
  })
  productsContainer.appendChild(fragment)

  console.log('populate them products')
}

export default populateProducts
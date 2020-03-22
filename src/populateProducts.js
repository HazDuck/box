import products from "./products.js";

const populateProducts = () => {
  const productsContainer = document.querySelector("[data-products-container")
  const fragment = document.createDocumentFragment()

  products.map(product => {
    const productInfo = Object.values(product)
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
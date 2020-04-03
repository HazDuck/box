import {products} from "./products.js";
import {addToCart, removeFromCart} from "./incDecCart.js"

const populateProducts = () => {
  const fragment = document.createDocumentFragment()
  const productsContainer = document.querySelector("[data-products-container]")

  if (!products) {
    console.log("theres no produts m'lord!")
    return
  }

  products.map(productData => {

    //show data
    const productDataContainer = document.createElement("li")
    fragment.appendChild(productDataContainer)
    const productInfo = document.createElement("h5")
    productDataContainer.appendChild(productInfo)
    productInfo.textContent = `${productData.name} ($${productData.price})`
    
    //attach buttons with functions & total of each item in the cart
    const buttonsContainer = document.createElement("div")

    const decButton = document.createElement("button")
    decButton.setAttribute('data-decrease', productData.id)
    decButton.textContent = '-'
    decButton.className = "btn-primary sm"
    buttonsContainer.appendChild(decButton)
    decButton.addEventListener('click', (e) => {
      removeFromCart(e.target.dataset.decrease)
    })

    const prodTotal = document.createElement("p")
    prodTotal.setAttribute('data-total', productData.id)
    prodTotal.textContent = '0'
    buttonsContainer.appendChild(prodTotal)

    const incButton = document.createElement("button")
    incButton.setAttribute('data-increase', productData.id)
    incButton.classList = "btn-primary sm"
    incButton.textContent = '+'
    incButton.addEventListener('click', (e) => {
      addToCart(e.target.dataset.increase)
    })
      
    buttonsContainer.appendChild(incButton)
    productDataContainer.appendChild(buttonsContainer)
  })

  productsContainer.appendChild(fragment)
}

export default populateProducts
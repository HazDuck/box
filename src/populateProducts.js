import products from "./products.js";
import addToCart from "./incDecCart.js"
import cart from "./cart.js"


const populateProducts = () => {
  const fragment = document.createDocumentFragment()
  const productsContainer = document.querySelector("[data-products-container]")
  
  products.map(productData => {

    //show data
    const productDataContainer = document.createElement("li")
    fragment.appendChild(productDataContainer)
    const productInfo = document.createElement("h3")
    productDataContainer.appendChild(productInfo)
    productInfo.textContent = `This is the inner ${productData.name} ($${productData.price})`
    
    //attach buttons
    const buttonsContainer = document.createElement("div")

    const decButton = document.createElement("button")
    decButton.setAttribute('data-decrease', productData.id)
    decButton.textContent = '-'
    buttonsContainer.appendChild(decButton)

    const prodTotal = document.createElement("p")
    prodTotal.setAttribute('data-total', productData.id)
    prodTotal.textContent = '0'
    buttonsContainer.appendChild(prodTotal)

    const incButton = document.createElement("button")
    incButton.setAttribute('data-increase', productData.id)
    incButton.textContent = '+'
    //attach functions to buttons
    incButton.addEventListener('click', (e) => {
      addToCart(cart, e.target.dataset.increase)
    })
      
    buttonsContainer.appendChild(incButton)
    
    

    productDataContainer.appendChild(buttonsContainer)


  })

  productsContainer.appendChild(fragment)
  console.log('populate them products')
}

export default populateProducts
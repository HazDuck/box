import showStrength from "./showStrength.js"

const addButtonEventListener = () => {
  document.querySelector('[data-continue="product"]').addEventListener('click', () => {
    document.querySelector('[main-container]').replaceChild(
      showStrength(), 
      document.querySelector('[product-select]')
    )
  })
}

export default addButtonEventListener
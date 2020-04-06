import showStrength from "./showStrength.js"

const addButtonEventListener = () => {
  document.querySelector('[data-continue="product"]').addEventListener('click', () => {
    document.querySelector('[main-container]').replaceChild(
      showStrength(), 
      document.querySelector('[product-select]')
    )
    document.querySelector('[main-title]').textContent = 'Choose your box strength'
  })
}

export default addButtonEventListener
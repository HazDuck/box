const replaceContent = () => {
  document.querySelector('[data-continue="product"]').addEventListener('click', () => {
    document.querySelector('[main-container]')
    .replaceChild(
      document.querySelector('[strength-select]'), 
      document.querySelector('[product-select]')
      )
  })
}

export default replaceContent
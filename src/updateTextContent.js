const updateTextContent = (element, value, defaultValue = '') => {
  element.textContent = value ? value : defaultValue
}

export default updateTextContent
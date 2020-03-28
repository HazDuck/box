const showStrength = () => {
  const strengthSelect = document.createElement("div")
  strengthSelect.setAttribute('strength-select', '')
  const strengthSelectInner = `
  <h1>Choose your box strength</h1>
  <div>
    <input type="radio" id="standard" name="strength" value="0">
    <label for="male">Standard</label><br>
    <input type="radio" id="strong" name="strength" value="10">
    <label for="female">Strong</label><br>
    <input type="radio" id="xxxstrong" name="strength" value="25">
    <label for="other">Extra Strong</label>
  </div>
  <button data-continue="strength">Continue</button>`
  strengthSelect.innerHTML = strengthSelectInner
  document.querySelector('[main-container]').appendChild(strengthSelect)
}

export default showStrength
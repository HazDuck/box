import showStrength from "./showStrength.js";

const replaceContent = () => {

  const button = document.querySelector('[data-continue]')
  let replaceWith
  let replacing
  const replace = (replaceWith, replacing) => {
    document.querySelector('[data-continue]').addEventListener('click', () => {
      console.log(replaceWith)
      document.querySelector('[main-container]')
      .replaceChild(
        replaceWith, 
        replacing
        )
    })
  }

  switch(button.dataset.continue) {
    case 'product':
      replaceWith = document.querySelector('[strength-select]')
      replacing = document.querySelector('[product-select]')
      replace(replaceWith, replacing)
      console.log('done the done')
      break;
    // case 'strength':
    //   replaceWith = showStrength()
    //   replacing = document.querySelector('[strength-select]')
    //   replace(replaceWith, replacing)
    //   console.log('done the done strength')
    //   break;
    default:
      console.log('hit the default')
  }


}

export default replaceContent
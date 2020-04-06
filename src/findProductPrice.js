import {products} from "./products.js";

const findProductPrice = (productId) => products.filter(product => productId == product.id)[0].price

export default findProductPrice
import AuthStore from '../../Authentication/stores/AuthStore'
import AuthService from '../../Authentication/services/AuthService/AuthAPI.js'

import ProductStore from '../../e-commerce/stores/ProductStore'
import ProductService from '../../e-commerce/services/ProductService/ProductAPI.js'

import CartStore from '../../e-commerceCart/stores/CartStore'

const authService = new AuthService()
const authStore = new AuthStore(authService)

const productService = new ProductService()
const productStore = new ProductStore(productService)

const cartStore = new CartStore(productStore)

export default { authStore, productStore, cartStore }

import React from 'react'
import { action } from 'mobx'
import { observer } from 'mobx-react'
import CartItem from '../CartItem'

import { ProductsCount, List, CartDisplay, Logo } from './styledComponents.js'

@observer
class CartList extends React.Component {

    @action.bound
    getProductDetailsById(productId) {
        return this.props.getProductDetails(productId)
    }

    render() {
        let cartProduct = this.props.cartProductList.map((each) =>
            <CartItem key={Math.random()}
                         product={this.getProductDetailsById(each.productId)}
                         onRemoveCartItem={this.props.onRemoveCartItem}
                           cartItemQuantity={each.quantity} />)
        return (
            <CartDisplay>
            <Logo>
                <svg xmlns='http://w3.org/2000/svg' className='bg-gray-800 p-1'  width='50' height='50'
                    viewBox="0 0 24 24" fill='none' stroke='white' strokeWidth='2'
                    strokeLinecap='round' strokeLinejoin='round'>
                    <circle cx='9' cy='21' r='1'></circle>
                    <circle cx='20' cy='21' r='1'></circle>
                    <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6h6'></path>
                </svg>
                <ProductsCount>{this.props.noOfProductsInCart}</ProductsCount>
            </Logo>
            <List>{cartProduct}</List>
            </CartDisplay>
        )
    }
}

export default CartList

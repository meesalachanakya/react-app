import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import CartList from '../CartList'
import CheckoutButton from '../CheckoutButton'
import SubTotal from '../SubTotal'

import { ProductsCount, CartIcon, Close, CartView, CheckoutAndSubTotal, ExpendedCart } from './styledComponents.js'

@inject('cartStore')
@observer
class ProductCart extends React.Component {
    @observable shouldDisplayCart = false

    showCart = () => {
        this.shouldDisplayCart = true
    }

    hideCart = () => {
        this.shouldDisplayCart = false
    }

    render() {
        const { cartStore } = this.props
        return this.shouldDisplayCart ? <ExpendedCart>
                        <Close onClick={this.hideCart}>x</Close>
                        <CartView>
                        <CartList
                            onRemoveCartItem={cartStore.onRemoveCartItem}
                            getProductDetails={cartStore.getProductDetails}  
                            cartProductList={cartStore.cartProductList}
                            noOfProductsInCart={cartStore.noOfProductsInCart}
                            />
                            <CheckoutAndSubTotal>
                                <SubTotal totalCartAmout={cartStore.totalCartAmout}/>
                                <CheckoutButton  clearCart={cartStore.clearCart}/>
                            </CheckoutAndSubTotal>
                        </CartView>
                        </ExpendedCart>

            :
            (<CartIcon onClick={this.showCart}>
                    <svg xmlns='http://w3.org/2000/svg' className='bg-gray-800 p-1'  width='50' height='50'
                            viewBox="0 0 24 24" fill='none' stroke='white' strokeWidth='2'
                                strokeLinecap='round' strokeLinejoin='round'>
                                <circle cx='9' cy='21' r='1'></circle>
                                <circle cx='20' cy='21' r='1'></circle>
                                <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6h6'></path>
                    </svg>
                        <ProductsCount>{cartStore.noOfProductsInCart}</ProductsCount>
                    </CartIcon>)
    }

}

export default ProductCart

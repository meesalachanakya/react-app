import {observable,action} from 'mobx'
import {observer} from 'mobx-react'

class CartItemModel{
    
    
    @observable cartItemId
    @observable productId
    @observable quantity
    
    constructor(object){
        this.cartItemId=Math.random()
        this.productId=object.productId
        this.quantity=1
    }
    
    @action.bound
    incrementQuantity(){
        this.quantity++
    }
}

export default CartItemModel
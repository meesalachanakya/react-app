import React from 'react'
import {observer} from 'mobx-react'

import {CartListDisplay,Image,Details,Title,Style,RemoveAndPrice,Remove,Quantity,Price} from './styledComponents.js'

@observer
class CartItem extends React.Component{
    
    onRemoveCartItem=()=>{
        this.props.onRemoveCartItem(this.props.product[0].productId)
    }
    
    render(){
        const {cartItemQuantity}=this.props
        const {imageURl,title,printStyle,price,currencyFormate}=this.props.product[0]
        return(
        <CartListDisplay>
            <Image src={imageURl} />            
            <Details>
                <Title>{title}</Title>
                <Style>{printStyle}</Style>
                <Quantity>Quantity: {cartItemQuantity}</Quantity>
            </Details>
            <RemoveAndPrice>
                <Remove onClick={this.onRemoveCartItem}>x</Remove>
                <Price>{currencyFormate} {price}</Price>
            </RemoveAndPrice>
        </CartListDisplay>
        )
        //console.log(this.props.product)
        //console.log(this.props.product[0].title)
        //return(<div><img src={this.props.product[0].imageURl}/></div>)
    }
}
export default CartItem
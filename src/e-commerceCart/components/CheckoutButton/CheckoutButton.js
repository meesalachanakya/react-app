import React from 'react'
import {observer} from 'mobx-react'

import {Checkout,Button} from './styledComponents.js'

@observer
class CheckoutButton extends React.Component{
    
    checkoutAlert(){
        alert('Thank you for shopping with us 😊.Your products will be delivered in 3 days to the address mentioned in your profile.')
    }
    
    render(){
        return(<Checkout><Button onClick={this.checkoutAlert,this.props.clearCart} >Checkout</Button></Checkout>)
    }
}

export default CheckoutButton
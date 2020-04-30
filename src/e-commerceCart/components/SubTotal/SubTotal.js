import React from 'react'
import {observer} from 'mobx-react'

import {SubTotalView,Head,Total} from './styledComponents.js'

@observer
class SubTotal extends  React.Component{
    
    
    render(){
        //const {totalCartAmout}=this.props
        console.log(this.props.totalCartAmout)
        return(<SubTotalView>
        
        <Head>Subtotal</Head>
        <Total>{this.props.totalCartAmout}</Total>
        
        
        </SubTotalView>)
    }
}

export default SubTotal
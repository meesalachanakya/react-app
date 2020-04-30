import React from 'react'
import {observer} from 'mobx-react';
import Product from '../Product'

import {List} from './styledComponents.js'

@observer
class ProductList extends React.Component{
    
    
    render(){
        const productArray=this.props.list.sortAndFilterProducts
         const product=productArray.map((eachProduct)=>
                <Product key={Math.random()} 
                        onClickAddToCart={this.props.onClickAddToCart}
                        product={eachProduct}/>)
        return(<List>{product}</List>)
    }
}

export default ProductList
import React from 'react'
import {observer} from 'mobx-react'

import {SizeChart,Head,Sizes,Size} from './styledComponents.js'

@observer
class SizeFilter extends React.Component{
    
    
    onSelectSize=(event)=>{
        this.props.onSelectSize(event.target.value)
    }
    

    
    
    render(){
           const {sizeFilter}=this.props
        return(<SizeChart>
        <Head>Sizes:</Head>
        <Sizes>
            <Size onClick={this.onSelectSize}  color={sizeFilter.indexOf('XS')!==-1?'true':'false'}value='XS'>XS</Size>
            <Size onClick={this.onSelectSize}  color={sizeFilter.indexOf('S')!==-1?'true':'false'}  value='S'>S</Size>
            <Size onClick={this.onSelectSize}  color={sizeFilter.indexOf('M')!==-1?'true':'false'} value='M'>M</Size>
            <Size onClick={this.onSelectSize}  color={sizeFilter.indexOf('L')!==-1?'true':'false'} value='L'>L</Size>
            <Size onClick={this.onSelectSize}  color={sizeFilter.indexOf('XL')!==-1?'true':'false'} value='XL'>XL</Size>
            <Size onClick={this.onSelectSize}  color={sizeFilter.indexOf('XXL')!==-1?'true':'false'} value='XXL'>XXL</Size>
        </Sizes>
        </SizeChart>)
    }
}

export default SizeFilter
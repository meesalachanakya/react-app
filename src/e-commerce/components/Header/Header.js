import React from 'react'

import {Head,Count,Sortby,FilterType} from './styledComponents.js'

class Header extends React.Component{
    
    
    
    onFilterChange=(event)=>{
        this.props.sortBy(event.target.value)
    }
    
    render(){
        const {totalNoOfProductsDisplayed}=this.props
        return(
            <Head>
                <Count>{totalNoOfProductsDisplayed} Product(s) found</Count>
                <Sortby onChange={this.onFilterChange}>
                    <FilterType value='random'>Select</FilterType>
                    <FilterType value='ascending'>Lowest to Highest</FilterType>
                    <FilterType value='decending'>Highest to Lowest</FilterType>
                </Sortby>
            </Head>
        )
    }
}

export default Header 
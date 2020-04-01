import React from 'react'
import CountryCard from './countryCard.js'
class Countries extends React.Component{
    countryDetails=(props)=>{
        //this.props.list.forEach((c)=>console.log(c))
    }
    
    render(){
        return(
            //<div></div>
            <div className="display-cards">{this.props.list.map((each)=><CountryCard theme={this.props.selectedThemeClassName} selectedCountry={this.props.selectedCountry} details={each}/>)}</div>
            )
    }
}
export default Countries
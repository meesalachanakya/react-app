import React from 'react'
import CountryCard from './countryCard.js'
import tw from 'tailwind.macro'
    
const CountryList=tw.div`flex justify-center flex-wrap`
    
class Countries extends React.Component{
    render(){
        return(
            <CountryList>{this.props.list.map((each)=><CountryCard theme={this.props.selectedThemeClassName} selectedCountry={this.props.selectedCountry} details={each}/>)}</CountryList>
            )
    }
}
export default Countries
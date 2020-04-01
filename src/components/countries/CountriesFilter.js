import React from 'react'
import SearchCountry from './searchCountry.js'
import SearchRegion from './selectRegion.js'

class CountriesFilterBar extends React.Component{
    render(){
        return(
            <div className="filter-bar">
               <SearchCountry theme={this.props.theme} list={this.props.list} searchName={this.props.search}/>
               <SearchRegion theme={this.props.theme} list={this.props.list} region={this.props.region}/>
            </div>
            );
    }
    
}
export default CountriesFilterBar;
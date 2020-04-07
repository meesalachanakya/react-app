import React from 'react'
import SearchCountry from './searchCountry.js'
import SearchRegion from './selectRegion.js'
import tw from 'tailwind.macro';

const Filter=tw.div`flex flex-row justify-between p-3`

class CountriesFilterBar extends React.Component{
    render(){
        return(
            <Filter>
               <SearchCountry theme={this.props.theme} list={this.props.list} searchName={this.props.search}/>
               <SearchRegion theme={this.props.theme} list={this.props.list} region={this.props.region}/>
            </Filter>
            );
    }
    
}
export default CountriesFilterBar;
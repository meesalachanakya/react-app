import React from 'react'
import { withRouter } from "react-router-dom";

class CountryCard extends React.Component{
    state={
        selectedCountry:{},
        innerDisplay:'none'
    }
    
    
    displayMoreDetails=(event)=>{
        //console.log(this.props.details.alpha3Code)
        this.props.history.push(`/countriesApp/${this.props.details.alpha3Code}`);
        this.setState({selectedCountry:this.props.details});
    }
    
    render(){
        return(
        <div  onClick={this.displayMoreDetails} className='card'>
            <div className="img-div">
                <img src={this.props.details.flag} alt='flag-imag'/>
            </div>
            <div className="details">
                <div><b>{this.props.details.name}</b></div>
                <div><b>Population:</b> {this.props.details.population}</div>
                <div><b>Region:</b> {this.props.details.region}</div>
                <div><b>Capital:</b> {this.props.details.capital}</div>
            </div>
        </div>
        )
    }
    
}
export default withRouter(CountryCard)
import React from 'react'
import { withRouter } from "react-router-dom";
import tw from 'tailwind.macro';

const Card=tw.div`m-5 w-64 rounded-md`

const Details=tw.div`flex flex-col justify-between ml-3 py-4`

const P=tw.p`font-bold`

const Row=tw.div`flex flex-row`

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
        <Card className="card" onClick={this.displayMoreDetails}>
                <img className="rounded-t-md w-full" src={this.props.details.flag} alt='flag-imag'/>
            <Details>
                <Row><P>{this.props.details.name}</P></Row>
                <Row><P>Population:</P> {this.props.details.population}</Row>
                <Row><P>Region:</P> {this.props.details.region}</Row>
                <Row><P>Capital:</P> {this.props.details.capital}</Row>
            </Details>
        </Card>
        )
    }
    
}
export default withRouter(CountryCard)
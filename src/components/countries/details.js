/*global fetch*/
import React from 'react';
import { withRouter } from "react-router-dom";
import ButtonMaker from './ButtonMaker.js';
import {FiMoon} from 'react-icons/fi';

class countryDetails extends React.Component{
     
    state={
        countriesList:[],
        themeClassName:"light-theme",
        backgroundThemeButtonText:'light mode',
        selectedCountryDetails:{"currencies":[{}],languages:[],borders:[]}
    }
    
    componentDidMount=()=>{
        fetch("https://restcountries.eu/rest/v2/all").then(res=>res.json()).then(res=>this.selectedCountry(res));
    }
    
    selectedCountry=(allCountries)=>{
        const country=allCountries.filter((each)=>(each.alpha3Code)===this.props.history
        .location.pathname.slice(-3));
        this.setState({selectedCountryDetails:country[0]});
    }
    
    onChangeTheme=()=>{
        this.props.changeTheme(this.props.theme);
    }
    
    navigateBack=()=>{
    this.props.history.goBack();
  }
    
    render(){
        let languages=[]
        this.state.selectedCountryDetails.languages.forEach((each)=>languages.push(each.name))
        return(
            <div className={`all-details ${this.props.theme}`} >
                <div className="inner-header">
                    <div><h1>Where in the world</h1></div>
                    <div className="inner-theme">
                        <button onClick={this.onChangeTheme} className={this.props.theme}><FiMoon/>  {this.props.buttonText}</button>
                    </div>
                </div>
                
                <div><button className={`back-button ${this.props.theme}`} onClick={this.navigateBack}>back</button></div>
                
                <div className="country-details">
                    <div className="flag"><img src={this.state.selectedCountryDetails.flag} className="innerFlag" alt="flag"/></div>
                    <div className="information">
                        <div><b className="country-name" >{this.state.selectedCountryDetails.name}</b></div>
                        
                        <div className="except-flag">
                        <div className="basic-details">
                            <div><b>Native Name:</b>{this.state.selectedCountryDetails.nativeName}</div>
                            <div><b>Population:</b>{this.state.selectedCountryDetails.population}</div>
                            <div><b>Region:</b>{this.state.selectedCountryDetails.region}</div>
                            <div><b>Sub Region:</b>{this.state.selectedCountryDetails.subregion}</div>
                            <div><b>Capital:</b>{this.state.selectedCountryDetails.capital}</div>
                        </div>
                        
                        <div className="other-details">
                            <div><b>Top Level Domain:</b>{this.state.selectedCountryDetails.topLevelDomain}</div>
                            <div><b>Curriences:</b>{this.state.selectedCountryDetails.currencies[0].name}</div>
                            <div><b>Languages:</b>{languages.join(',')}</div>
                        </div>
                        </div>
                        <div>Borders:{this.state.selectedCountryDetails.borders.map((each)=><ButtonMaker theme={this.props.theme} alpha={each} />)}</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(countryDetails);
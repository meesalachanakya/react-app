/*global fetch*/
import React from 'react';
import Header from './header.js';
import CountriesFilterBar from './CountriesFilter.js';
import Countries from './Countries.js';
import Loader from 'react-loader-spinner';
/*
import styled from '@emotion/styled';


const App=styled.div`
    backgroundColor:${props=>props==='light-mode'?'#2b3945':'#fff'}
    color:${props=>props==='light-mode'?'black':'white'}
`

const LightMode=styled.div`
    background-color: #fff;
    color:black;
    `

const DarkMode=styled.div`
    background-color:#2b3945;
    color:white;
    `
*/

class CountriesApp extends React.Component {
    state = {
        countries: [],
        filteredCountries: [],
        regionalCountries: [],
        searchedCountries: [],
    }

    componentDidMount = () => {
        fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(res => this.getCountries(res));
    }

    getCountries = (allCountries) => {
        this.setState({
            countries: allCountries,
            filteredCountries: allCountries,
            regionalCountries: allCountries,
            searchedCountries: allCountries
        });
    }

    filterCountriesByRegion = (region) => {
        if (region === 'All') {
            this.setState({
                filteredCountries: this.state.searchedCountries,
                regionalCountries: this.state.countries
            });
        }
        else {
            this.setState({
                filteredCountries: this.state.searchedCountries.filter(each => region === each.region),
                regionalCountries: this.state.countries.filter(each => region === each.region),
            });
        }
    }

    filterCountriesByName = (text) => {
        if (text.length) {
            this.setState({
                filteredCountries: this.state.regionalCountries.filter(each => (each.name.toLowerCase().includes(text.toLowerCase()))),
                searchedCountries: this.state.countries.filter(each => (each.name.toLowerCase().includes(text.toLowerCase())))
            });
        }
        else {
            this.setState({
                filteredCountries: this.state.regionalCountries,
                searchedCountries: this.state.countries.filter(each => (each.name.toLowerCase().includes(text.toLowerCase())))
            });
        }
    }

    onChangeTheme = () => {
        this.props.changeTheme(this.props.theme);
        console.log(this.props.buttonText)
    }



    render() {

        return (
            <div className={`${this.props.theme} min-h-screen`}>
            <div><Header theme={this.props.theme} changeTheme={this.onChangeTheme} text={this.props.buttonText}/></div>
            <div><CountriesFilterBar theme={this.props.theme} list={this.state.countries} search={this.filterCountriesByName} region={this.filterCountriesByRegion}/></div>
            <div><Countries theme={this.state.selectedThemeClassName} selectedCountry={this.selectedCountry} list={this.state.filteredCountries}/></div>
          </div>
        )
    }
}

export default CountriesApp;

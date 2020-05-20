 /*global fetch*/
 import React from 'react';
 import { withRouter } from "react-router-dom";
 import ButtonMaker from './ButtonMaker.js';
 import { FiMoon } from 'react-icons/fi';
 import tw from 'tailwind.macro';

 const AllDetails = tw.div `flex flex-col h-screen p-1`

 const HeaderTag = tw.div `
    flex justify-between items-center 
    mt-2 mb-2
    border-b-2 border-gray-300
    p-3 
    `

 const Button = tw.button `
    flex flex-row items-center
    p-2
    text-xs
    border-solid border-2 border-white-200 rounded-md
`
 const P = tw.p `font-bold`

 const Heading = tw.p `font-bold text-3xl`

 const Country = tw.div `flex flex-row justify-around`

 const NameInformation = tw.div `flex flex-col justify-around`

 const Information = tw.div `flex flex-row justify-around`

 const InfoColumns = tw.div `flex flex-col justify-center`

 const Crums = tw.div `flex`

 class countryDetails extends React.Component {

     state = {
         countriesList: [],
         selectedCountryDetails: { "currencies": [{}], languages: [], borders: [] }
     }

     componentDidMount = () => {
         fetch("https://restcountries.eu/rest/v2/all").then(res => res.json()).then(res => this.selectedCountry(res));
     }

     selectedCountry = (allCountries) => {
         const country = allCountries.filter((each) => (each.alpha3Code) === this.props.history
             .location.pathname.slice(-3));
         this.setState({ selectedCountryDetails: country[0] });
     }

     onChangeTheme = () => {
         this.props.changeTheme(this.props.theme);
     }

     navigateBack = () => {
         this.props.history.goBack();
     }

     render() {
         let languages = [];
         this.state.selectedCountryDetails.languages.forEach((each) => languages.push(each.name));
         return (
             <AllDetails className={this.props.theme} >
                <HeaderTag>
                    <div><Heading>Where in the world</Heading></div>
                        <Button onClick={this.onChangeTheme} className={this.props.theme}><FiMoon/>  {this.props.buttonText}</Button>
                </HeaderTag>
                
                <div><Button className={this.props.theme} onClick={this.navigateBack}>back</Button></div>
                
                <Country>
                    <img src={this.state.selectedCountryDetails.flag} className="w-64 m-3" alt="flag"/>
                    <NameInformation>
                        <div><P className="text-4xl" >{this.state.selectedCountryDetails.name}</P></div>
                        
                        <Information>
                        <InfoColumns>
                            <Crums><P>Native Name:</P>{this.state.selectedCountryDetails.nativeName}</Crums>
                            <Crums><P>Population:</P>{this.state.selectedCountryDetails.population}</Crums>
                            <Crums><P>Region:</P>{this.state.selectedCountryDetails.region}</Crums>
                            <Crums><P>Sub Region:</P>{this.state.selectedCountryDetails.subregion}</Crums>
                            <Crums><P>Capital:</P>{this.state.selectedCountryDetails.capital}</Crums>
                        </InfoColumns>
                        
                        <InfoColumns>
                            <Crums><P>Top Level Domain:</P>{this.state.selectedCountryDetails.topLevelDomain}</Crums>
                            <Crums><P>Curriences:</P>{this.state.selectedCountryDetails.currencies[0].name}</Crums>
                            <Crums><P>Languages:</P>{languages.join(',')}</Crums>
                        </InfoColumns>
                        </Information>
                        <Crums><P>Borders:</P>{this.state.selectedCountryDetails.borders.map((each)=><ButtonMaker theme={this.props.theme} alpha={each} />)}</Crums>
                    </NameInformation>
                </Country>
            </AllDetails>
         );
     }
 }
 export default withRouter(countryDetails);
 
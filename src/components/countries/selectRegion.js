import React from 'react'
class SearchRegion extends React.Component{
    state={
        selectedRegion:''
    }
    onChangeSelectedRegion=(event)=>{
        this.setState({selectedRegion:event.target.value});
        this.props.region(event.target.value);
    }
    
    render(){
        return(
            <div >
                <select className={this.props.theme} onChange={this.onChangeSelectedRegion}>
                    <option value='All'>All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option vaslue="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        );
    }
}
export default SearchRegion;
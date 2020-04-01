import React from 'react';
class VisitedCities extends React.Component{
    state={
        visitedCities:[],
        selectedCities:[],
        displayVisitedCitiesMessage:'',
        count:0
    }
    
    handleCheckboxClick=(event)=>{
        let array;
        if(event.target.checked){
            array=this.state.visitedCities;
            array.push(event.target.value);
            this.setState({selectedCities:array});
        }
        else{
            array=this.state.selectedCities;
            let index=array.indexOf(event.target.value);
            delete array[index];
            this.setState({selectedCities:array});
        }
    }
    
    handleOnSubmit=(event)=>{
        event.preventDefault();
        this.onIncrement();
      this.displayMessage();
    }
    
    displayMessage=()=>{
        this.setState({displayVisitedCitiesMessage:`I have visited these cities ${this.state.selectedCities.join(',')}`});
    }
    
    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <p>Which of the following cities you visited?</p>
                {this.props.CitiesList.map((each)=>
                <label><input onChange={this.handleCheckboxClick} value={each} type="checkbox"/>{each}<br/></label>
                )}
                <input type="submit" value="Make your choice"/>
                <p>{this.state.displayVisitedCitiesMessage}</p>
            </form>
            );
    }
}

export default VisitedCities;
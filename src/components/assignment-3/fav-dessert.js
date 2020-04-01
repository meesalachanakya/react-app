import React from 'react';
class FavouriteDessert extends React.Component{
    state={
        selectedDessert:'',
        favouriteDessert:''
        }
    handleUserInput=(event)=>{
        this.setState({selectedDessert:event.target.value.toUpperCase()});
    }   
    handleOnSubmit=(event)=>{
        event.preventDefault();
        this.displayFavourite();
    }
    displayFavourite=()=>{
        this.setState({favouriteDessert:`My favourite dessert is ${(this.state.selectedDessert)}`});
    }
    renderDessertOptions=()=>{
        
    }
    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
            <p>What is your favourite dessert?</p>
             <label> <input type="radio" name="dessert" onClick={this.handleUserInput} value={this.props.DessertList[0]}/>{this.props.DessertList[0]}</label><br/>
             <label> <input type="radio" name="dessert" onClick={this.handleUserInput} value={this.props.DessertList[1]}/>{this.props.DessertList[1]}</label><br/>
             <label> <input type="radio" name="dessert" onClick={this.handleUserInput} value={this.props.DessertList[2]}/>{this.props.DessertList[2]}</label><br/>
             <label> <input type="radio" name="dessert" onClick={this.handleUserInput} value={this.props.DessertList[3]}/>{this.props.DessertList[3]}</label><br/>
             <label> <input type="radio" name="dessert" onClick={this.handleUserInput} value={this.props.DessertList[4]}/>{this.props.DessertList[4]}</label><br/>
             <label> <input type="radio" name="dessert" onClick={this.handleUserInput} value={this.props.DessertList[5]}/>{this.props.DessertList[5]}</label><br/>
            <input type="submit" value="Make your choice"/>
            <p>{this.state.favouriteDessert}</p>
            </form>
            );
    }
    
}

export default FavouriteDessert;
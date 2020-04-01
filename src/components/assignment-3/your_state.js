import React from 'react';

class Yourstate extends React.Component{
    state={
        myState:'',
        displayMyState:''
    }
    
    handleUserInput=(event)=>{
        this.setState({myState:event.target.value});
        event.preventDefault();
    }
    
    handleOnSubmit=(event)=>{
        this.displayState();
        event.preventDefault();
    }
    
    displayState=()=>{
        this.setState({displayMyState:`I am from "${this.state.myState}" state`});
    }
    
    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <select onChange={this.handleUserInput}>
                    <option value={this.props.StatesList[0]} >{this.props.StatesList[0]}</option>
                    <option value={this.props.StatesList[1]} >{this.props.StatesList[1]}</option>
                    <option value={this.props.StatesList[2]} >{this.props.StatesList[2]}</option>
                    <option value={this.props.StatesList[3]} >{this.props.StatesList[3]}</option>
                    <option value={this.props.StatesList[4]} >{this.props.StatesList[4]}</option>
                    <option value={this.props.StatesList[5]} >{this.props.StatesList[5]}</option>
                </select>
                <input type="submit" value="submit"/>
                <p>{this.state.displayMyState}</p>
            </form>
            );
    }
    
    
}

export default Yourstate;
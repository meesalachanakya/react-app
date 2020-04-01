import React from 'react'
class DisabledButton extends React.Component{
    state={
        isDisableButtonChecked:false,
        showMessage:''
    }
    
    handleChange=(event)=>{
        if(event.target.checked){
            this.setState({isDisableButtonChecked:true})
            this.setState({showMessage:'I am disabled'})
        }
        else{
        this.setState({isDisableButtonChecked:false})
        this.setState({showMessage:''})
        }
    }
    
    handleSubmit=(event)=>{
            this.setState({showMessage:'am enabled'})
        event.preventDefault();
    }
    
    displayMessage=()=>{
        
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label><input onChange={this.handleChange} type="checkbox"/>Disabled</label>
            <input  disabled={this.state.isDisableButtonChecked?"disabled":""}  type="submit" value="Click Me"/>
            <p>{this.state.showMessage}</p>
            </form>
            )
    }
}

export default DisabledButton
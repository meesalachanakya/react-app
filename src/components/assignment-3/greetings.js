
import React from 'react'

class Greetings extends React.Component{
    state={
       name:'',
       displayGreeting:''
    }
    
    handleUserInput=(event)=>{
        this.setState({name:event.target.value})
        this.setState({displayGreeting:""});
    }
    handleOnSubmit=(event)=>{
        event.preventDefault();
        this.displayGreeting()
    }
    displayGreeting=()=>{
        this.setState({displayGreeting:`Hello ${this.state.name},Have a nice day`});
    }
    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
            <label>
            Name:
                <input type='text' value={this.state.name} placeholder="enter some name" onChange={this.handleUserInput}/>
            </label>
            <br/>
             <input type="submit"  value="Greet"/>
             <br/>
            <p>{this.state.displayGreeting}</p>
            </form>
        )
    }
}

export default Greetings
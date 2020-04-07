import React from 'react'
class DisabledButton extends React.Component{
    state={
        newlist:[],
        n:10
    }
    
    
    random=()=>{
        let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let x=months;
        let y=[];
        while(x.length>0){
            const month=x[Math.floor(Math.random()*x.length)];
            let index=x.indexOf(month);
            y.push(month)
            x.splice(index,1)
            }
            console.log(y)
        }
        
        

    /*
    
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
    */
    render(){
        
        return(<div onClick={this.random}>button</div>)
    }
}

export default DisabledButton
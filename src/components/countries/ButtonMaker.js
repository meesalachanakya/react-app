import React from 'react'
class ButtonMaker extends React.Component{
    
    
    render(){
        return(
            <button onClick={this.conso} value={this.props.alpha} className={`border-buttton ${this.props.theme}`}>{this.props.alpha}</button>
            )
    }
}

export default ButtonMaker
import React from 'react'
import tw from 'tailwind.macro';

const Button=tw.button`
    flex
    flex-row
    items-center
    p-2
    text-xs
    border-solid border-2 border-white-200 
    rounded-md
`


class ButtonMaker extends React.Component{
    
    
    render(){
        return(
            <Button onClick={this.conso} value={this.props.alpha} className={`border-buttton p-2 ${this.props.theme}`}>{this.props.alpha}</Button>
            )
    }
}

export default ButtonMaker
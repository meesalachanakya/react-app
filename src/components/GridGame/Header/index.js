import React from 'react'

class Header extends React.Component{
    
    render(){
        return(
        <div className='flex flex-col'>
            <div className='flex justify-center'>Top level:0</div>
            <div className='flex flex-row justify-around'>
                <div>Score:0{this.props.score}</div>
                <button onClick={this.props.onClickHandle}>LIGHT THEME</button>
            </div>
        </div>)
    }
}

export default Header